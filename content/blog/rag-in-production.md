---
title: "RAG in Production: Chunking, Hybrid Search, and Reranking"
date: "2026-03-16"
excerpt: "A demo RAG stack is a weekend project. A production one earns its keep through chunking, hybrid retrieval, and reranking. Here is how we build it."
slug: "rag-in-production"
---

A retrieval-augmented generation demo takes an afternoon: embed some documents, do a nearest-neighbor lookup, stuff the results into a prompt. Production RAG is a different problem. The model is rarely the bottleneck. Retrieval quality is. If the wrong context goes into the prompt, no amount of prompt engineering saves the answer.

Here is the pipeline we actually run, and why each stage exists.

## Chunking is a design decision, not a default

Most retrieval failures I have debugged trace back to bad chunks. Splitting every document into fixed 512-token windows is easy and usually wrong: it cuts sentences in half and strips the structure that makes a passage meaningful.

We chunk along the document's natural boundaries first (headings, list items, table rows), then pack those units up to a target size with a small overlap so a fact that straddles a boundary still survives. We also attach metadata to every chunk: source, section title, and a stable ID. That metadata does double duty later for filtering and for citations.

A rule of thumb that has held up: smaller chunks improve precision, larger chunks improve recall. We bias toward smaller chunks and recover recall in the retrieval stage instead.

## Hybrid search, because embeddings miss exact terms

Dense vector search is great at meaning and bad at specifics. Ask for an order number, a SKU, or an error code and a pure embedding search will happily return something semantically close and factually useless.

So we run two retrievers and fuse them:

- Dense: cosine similarity over embeddings, stored in **pgvector** when it lives next to relational data, or **Qdrant** when we need scale and payload filtering.
- Sparse: a keyword or BM25 search for exact tokens and rare terms.

We combine the two ranked lists with Reciprocal Rank Fusion, which needs no score calibration between the retrievers:

```python
def rrf(dense_ids, sparse_ids, k=60):
    scores = {}
    for rank, doc_id in enumerate(dense_ids):
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)
    for rank, doc_id in enumerate(sparse_ids):
        scores[doc_id] = scores.get(doc_id, 0) + 1 / (k + rank)
    return sorted(scores, key=scores.get, reverse=True)
```

Hybrid retrieval is the single change that moved our answer quality the most.

## Reranking the shortlist

Retrieval is tuned for recall: pull a wide net of 30 to 50 candidates so the right passage is almost certainly in there somewhere. Then a cross-encoder reranker reads each candidate together with the query and scores true relevance, and we keep the top 5 to 8 for the prompt.

This two-stage shape, cheap recall then expensive precision, keeps latency sane. The bi-encoder retrieval is milliseconds over the whole corpus; the reranker only ever sees a few dozen candidates.

## Grounding and citations

Every chunk carries its source ID, so the final answer can cite exactly which passages it used. That is not a nice-to-have. It is how you debug a bad answer (was it bad retrieval or bad generation?) and how a user decides whether to trust the output. When retrieval returns nothing above a confidence floor, we would rather say "I do not have that" than let the model improvise.

## What actually matters in production

The model choice is the last thing I tune. Long before that:

- Chunk on structure, keep overlap, attach metadata.
- Retrieve with dense plus sparse, fuse with RRF.
- Over-retrieve, then rerank down to a tight, high-signal context.
- Carry IDs end to end for citations and debugging.
- Cache embeddings and frequent queries to hold the latency budget.

RAG quality is a retrieval engineering problem wearing an AI costume. Treat it like search infrastructure and the answers follow.
