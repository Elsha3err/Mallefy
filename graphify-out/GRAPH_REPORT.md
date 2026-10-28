# Graph Report - Mallefy-PDF-Project  (2026-10-28)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 132 nodes · 209 edges · 12 communities (4 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa2a1357`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Override
- database.py
- MainActivity
- server.py
- SecurityVault
- TelemetryHandler
- security_vault.py
- fetch

## God Nodes (most connected - your core abstractions)
1. `get_connection()` - 14 edges
2. `MainActivity` - 13 edges
3. `WebAppInterface` - 9 edges
4. `run_telegram_bot()` - 9 edges
5. `TelemetryHandler` - 7 edges
6. `SecurityVault` - 6 edges
7. `export_all_data()` - 6 edges
8. `Runnable` - 5 edges
9. `get_summary_stats()` - 5 edges
10. `ThreadedHTTPServer` - 4 edges

## Surprising Connections (you probably didn't know these)
- `run_telegram_bot()` --calls--> `export_all_data()`  [EXTRACTED]
  server/server.py → server/database.py
- `check_and_alert_errors()` --calls--> `get_connection()`  [EXTRACTED]
  server/server.py → server/database.py
- `run_telegram_bot()` --calls--> `get_period_stats()`  [EXTRACTED]
  server/server.py → server/database.py
- `run_telegram_bot()` --calls--> `get_summary_stats()`  [EXTRACTED]
  server/server.py → server/database.py
- `run_telegram_bot()` --calls--> `get_tool_rankings()`  [EXTRACTED]
  server/server.py → server/database.py

## Import Cycles
- None detected.

## Communities (12 total, 8 thin omitted)

### Community 1 - "Override"
Cohesion: 0.14
Nodes (7): ValueCallback<String>, WebAppInterface, Runnable, Runnable, Runnable, Runnable, Runnable

### Community 2 - "database.py"
Cohesion: 0.23
Nodes (16): export_all_data(), get_connection(), get_period_stats(), get_summary_stats(), get_tool_rankings(), get_top_errors(), init_db(), log_error() (+8 more)

### Community 3 - "MainActivity"
Cohesion: 0.15
Nodes (3): MainActivity, WebChromeClient, WebViewClient

### Community 7 - "security_vault.py"
Cohesion: 0.53
Nodes (4): _decrypt(), get_default_admin_chat_id(), get_default_bot_token(), get_default_endpoint()

## Knowledge Gaps
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `MainActivity` connect `MainActivity` to `MainActivity.java`, `Override`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Should `MainActivity.java` be split into smaller, more focused modules?**
  _Cohesion score 0.06666666666666667 - nodes in this community are weakly interconnected._
- **Why does `WebAppInterface` connect `Override` to `MainActivity`?**
  _High betweenness centrality (0.033) - this node is a cross-community bridge._
- **Should `Override` be split into smaller, more focused modules?**
  _Cohesion score 0.1422924901185771 - nodes in this community are weakly interconnected._
- **Why does `TelemetryHandler` connect `TelemetryHandler` to `database.py`, `server.py`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Should `MainActivity` be split into smaller, more focused modules?**
  _Cohesion score 0.14619883040935672 - nodes in this community are weakly interconnected._
- **Should `server.py` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._