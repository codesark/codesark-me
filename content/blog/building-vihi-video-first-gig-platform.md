---
title: "Building ViHi: A Video-First Gig Platform"
date: "2026-02-08"
excerpt: "Why we're betting on video and AI to reimagine how people get help and find work—and how we're building it with Go, Flutter, and ML at Neosenth."
slug: "building-vihi-video-first-gig-platform"
---

At **Neosenth**, we're building **ViHi**: a video-first gig platform where you post a short video of your problem, get **AI-matched professionals**, compare bids, and hire—or earn as a pro. This post is about why we chose this direction and how we're building it with **scalable systems**, **video**, and **AI**.

## Why video-first?

Text and photos don't capture *“I need this fixed by Thursday”* or *“here’s exactly what’s broken.”* Video does. We wanted a format that:

- Reduces back-and-forth and miscommunication
- Lets pros assess the job quickly and bid accurately
- Gives clients a clearer picture of who they’re hiring

So the core interaction is **post a short video → get matched → compare and hire**. That required rethinking both the product and the stack.

## What we're building

ViHi isn’t just another job board. We’re putting **video** and **AI** at the center.

### For people who need help

1. **Record** a short video of the problem (e.g. a broken fixture, a design ask).
2. **Submit** it on the app; our pipeline processes and indexes it.
3. **Get matched** with relevant pros via AI (skills, context, and availability).
4. **Compare bids** and hire; payment and scheduling live in the platform.

### For professionals

- Create a **pro profile** and show your work via short clips.
- Receive **matched requests** instead of hunting for posts.
- **Bid** on jobs that fit; earn through a fair **subscription** model instead of per-job fees.

### Horizontal rule

A clean separation before we get into the stack:

---

Below, the tech choices that make this possible.

## Architecture and tech stack

My background is in **fleet tracking**, **real-time analytics**, and **AI-powered products**—systems that handle *millions of records per minute*. For ViHi we needed:

- **Low-latency APIs** and real-time updates
- **Reliable ingestion** for video metadata and events
- **ML pipelines** for matching and search
- **Cross-platform clients** (mobile and web) with a single codebase where it made sense

So we chose a stack that plays to those needs.

### Backend and data

| Layer        | Technology   | Role                                      |
| ------------ | ------------ | ----------------------------------------- |
| API & services | **Go**, ConnectRPC / gRPC | Fast, type-safe APIs and service-to-service calls |
| Data store   | **PostgreSQL** | Users, jobs, bids, subscriptions          |
| Cache & sessions | **Redis**   | Sessions, rate limits, real-time state   |
| Events       | **Kafka**    | Video upload events, matching jobs, notifications |

We use **ConnectRPC** (and gRPC where it fits) so that mobile and web clients get a consistent, typed contract and streaming where we need it.

### Client and ML

- **Flutter** and **Dart** for iOS, Android, and web. One codebase for core flows and UI.
- **PyTorch** and **TensorFlow** for matching and any on-server ML (e.g. embeddings, ranking).
- **OpenCV** (and related tooling) for video thumbnails, basic analysis, and metadata extraction.

A small example of the kind of structure we use on the backend for job matching:

```go
type MatchRequest struct {
    JobID     string   `json:"job_id"`
    VideoRef  string   `json:"video_ref"`
    Categories []string `json:"categories"`
    Limit     int      `json:"limit"`
}

func (s *MatchingService) FindPros(ctx context.Context, req *MatchRequest) ([]Pro, error) {
    // Embed job + video metadata, query vector store, rank by relevance & availability
    // Return top N pros for bidding
}
```

Inline code like `MatchRequest` and `FindPros` lives in a larger **Go** codebase that stays explicit and testable.

### Blockquote

> Good systems are boring in the right places: consistent APIs, clear data models, and observable pipelines. The magic is in how video and AI improve the experience, not in reinventing the wheel everywhere.

We keep the “boring” parts solid so we can iterate on matching, UX, and fairness.

## Fair model and launch

We’re launching with a **subscription** model so pros aren’t nickel-and-dimed per gig. Clients get a clear path from *video → match → hire* without endless scrolling. We’re iterating on both sides of the marketplace.

If you’re interested in **backing**, **partnering**, or just following along, I’d love to connect. You can reach out via [codesark.me](https://codesark.me) or [Neosenth](https://neosenth.com).

![Savinay Kumar — Building ViHi at Neosenth](/savinay-wall.jpg)

---

*Building with impact — Savinay Kumar, founder of Neosenth.*
