# Security Policy

## Scope

This is a static personal portfolio hosted on GitHub Pages.  
It contains no server-side code, no database, no authentication system.

## What is stored

- **Theme preference** (dark/light) — localStorage, key `bw-theme`
- **Language preference** (FR/EN) — localStorage, key `bw-lang`
- **Project cover images** — localStorage, key `bw-images` (base64, client-side only)

No data is sent to any server. No cookies are set. No tracking.

## Security measures applied

- Content Security Policy (CSP) via meta tag
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- All external links use `rel="noopener noreferrer"`
- File uploads: MIME type validation + 2 MB size limit
- No `eval()` or `Function()` constructor used
- No inline event handlers that accept user input
- No external JavaScript dependencies loaded at runtime

## Reporting a vulnerability

If you find a security issue in this project, please open a GitHub Issue  
or contact directly: **wambobryan7@gmail.com**

Response time: within 72 hours.
