# Security Policy

## Reporting a Vulnerability

If you discover a potential security vulnerability within Mallefy PDF, please do NOT file a public issue on GitHub. Instead, report it privately to the maintainers.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.1.x   | :white_check_mark: |
| < 1.1.0 | :x:                |

## Data Protection & Client-Side Processing

All PDF operations (merge, compress, convert, split, edit) run 100% locally on the user's device using WebAssembly and JavaScript engines. No documents or sensitive contents are ever uploaded to any server.
