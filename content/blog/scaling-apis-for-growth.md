---
title: "Scaling APIs for Growth"
date: "2026-01-15"
excerpt: "Patterns and practices that helped us achieve 500% API speed improvements and 10x system scale."
slug: "scaling-apis-for-growth"
---

When systems need to grow, APIs often become the bottleneck. Here are patterns that have worked in practice: caching at the right layers, connection pooling, and moving heavy work off the critical path.

## Caching where it matters

Not everything should be cached, but response paths that hit the database on every request are good candidates. We added a short TTL cache for read-heavy endpoints and saw latency drop sharply. The key was invalidating on write so users never saw stale data.

## Connection pooling and async work

Opening a new database connection per request does not scale. We moved to a connection pool and made non-critical work asynchronous—logging, metrics, and secondary updates now run after the response is sent. That kept the main path fast even under load.

## Measuring first

Before optimizing, we instrumented everything. Knowing which endpoints and which operations were slow made it possible to fix the right things. We targeted the top five slowest operations and improved them one by one.

Scaling is ongoing: the next step is to push more work into background jobs and consider read replicas for reporting and analytics.
