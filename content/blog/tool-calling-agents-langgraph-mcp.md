---
title: "Reliable Tool-Calling Agents with LangGraph and MCP"
date: "2026-06-19"
excerpt: "An agent that calls tools in a while-loop is a demo. Making one reliable takes explicit state, real guardrails, and a clean boundary between the agent and its tools."
slug: "tool-calling-agents-langgraph-mcp"
---

The first version of any agent is a while-loop: ask the model what to do, run the tool it picked, feed the result back, repeat until it says it is done. It works in a demo and falls apart in production. It loops forever, calls tools with malformed arguments, and gives you no way to see why it went wrong. Making agents reliable is mostly about replacing that loop with structure.

We build agents with two pieces: **LangGraph** for control and state, and **MCP** for the tools.

## Why a graph beats a loop

LangGraph models the agent as a state machine: nodes do work, edges decide what happens next, and a shared state object carries everything between them. That structure buys things a loop cannot:

- **Explicit state.** The conversation, intermediate results, and step count live in one typed object you can inspect, log, and assert on.
- **Controlled branching.** A conditional edge decides whether to call a tool, ask the user, or finish. The control flow is data you can read, not behavior buried in an if statement.
- **Checkpointing.** State persists between steps, so an agent can pause for human approval or resume after a crash instead of starting over.

```python
def should_continue(state: AgentState) -> str:
    if state["steps"] >= MAX_STEPS:
        return "end"
    if state["messages"][-1].tool_calls:
        return "tools"
    return "end"

graph.add_conditional_edges("agent", should_continue,
                            {"tools": "tools", "end": END})
```

That `MAX_STEPS` check is not a detail. An unbounded agent is an unbounded bill and an unbounded outage.

## Why MCP for the tools

The other half is the tools, and the trap is wiring them straight into the agent. Do that and every tool is welded to one agent's code. The Model Context Protocol (MCP) puts a standard interface between the agent and its tools instead: tools live behind an MCP server, the agent is a client, and the two evolve independently.

The payoff is reuse and isolation. The same MCP server that exposes our database queries and internal APIs can back a LangGraph agent, the Claude Agent SDK, or an IDE assistant, with no changes. Tools get versioned, permissioned, and tested on their own, like any other service.

## Where reliability actually comes from

The model picking tools is the easy part. The engineering is everything around it:

- **Validate every tool call.** Treat model-generated arguments as untrusted input. Schema-check them before execution; on failure, return the error to the model so it can correct itself rather than crashing the run.
- **Time-box and retry tools.** A tool is a network call. It gets a timeout and a retry budget like any other dependency.
- **Bound the loop.** A maximum step count and a token budget per run, always.
- **Guardrail the dangerous tools.** Anything that writes data or spends money goes behind a confirmation node or a permission check, never straight through.
- **Trace the whole run.** Persist every state transition and tool call. When an agent does something strange, you want the full path it took, not a guess.

## The pattern

An agent is not a magic loop around a model. It is a small, observable state machine that calls well-defined, well-guarded tools. LangGraph gives you the state machine; MCP gives you the tool boundary. The model is just one node in the graph, and treating it that way is what turns an impressive demo into something you can put in front of users.
