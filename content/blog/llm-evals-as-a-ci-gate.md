---
title: "Treating LLM Evals Like Tests: RAGAS and Langfuse as a CI Gate"
date: "2026-05-21"
excerpt: "A prompt tweak can silently break an AI feature with no stack trace and no failing test. The fix is to treat evals like tests and run them in CI."
slug: "llm-evals-as-a-ci-gate"
---

The scariest thing about shipping LLM features is that they fail silently. Change a prompt, swap a model version, adjust a retrieval parameter, and nothing throws. The pipeline is green, the deploy succeeds, and answer quality quietly drops ten percent. No stack trace, no failing test, just a slow erosion you notice weeks later in user complaints.

Traditional tests do not catch this because the output is not deterministic. So we treat evaluation the way we treat tests: a golden dataset, automated scoring, and a threshold that blocks a merge.

## What we measure

For a RAG system, "is the answer good" decomposes into a few measurable properties, and **RAGAS** scores most of them out of the box:

- **Faithfulness**: is the answer supported by the retrieved context, or did the model invent something? This is our hallucination guard.
- **Answer relevancy**: does the answer actually address the question?
- **Context precision and recall**: did retrieval surface the right passages, and did it surface enough of them? When faithfulness is fine but answers are still wrong, the problem is almost always here.

Splitting the score this way is the point. A single "quality" number tells you something regressed. These tell you whether to go fix the retriever or the prompt.

## The golden dataset is the asset

Evals are only as good as the dataset behind them. Ours started small, a few dozen hand-written question and answer pairs, and grows from real traffic: when we find a query the system handled badly, we fix it and add it to the set so it can never silently regress again. Production failures become permanent regression tests.

We keep these datasets and every eval run in **Langfuse**, which also traces live requests. The same scores we compute in CI we sample on production traffic, so offline and online quality stay comparable instead of drifting apart.

## Wiring it into CI

The mechanics are ordinary CI. On any pull request that touches a prompt, a model version, or retrieval, the eval suite runs against the golden dataset and fails the build if a metric drops below its floor:

```python
def test_rag_quality():
    results = evaluate(
        dataset=load_golden_set(),
        metrics=[faithfulness, answer_relevancy, context_recall],
    )
    assert results["faithfulness"] >= 0.90
    assert results["answer_relevancy"] >= 0.85
    assert results["context_recall"] >= 0.80
```

A regression now shows up as a red check on the PR, next to the unit tests, before it reaches a user.

## The honest caveats

Eval is not free and not perfect:

- **LLM-as-judge is noisy.** Many metrics use a model to grade a model. Pin the judge model and version, average over several runs, and treat the thresholds as guardrails, not precise truth.
- **It costs tokens and time.** We run the full suite on relevant PRs and nightly, not on every commit.
- **The dataset can rot.** As the product changes, stale cases need pruning or they block good merges for the wrong reasons.

None of that is a reason to skip it. An imperfect, automated quality gate beats finding out from users. Once evals run in CI, changing a prompt stops being an act of faith and becomes a normal, reviewable engineering change.
