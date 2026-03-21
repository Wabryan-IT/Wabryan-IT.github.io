<div align="center">

<br/>

```
██████╗ ██╗    ██╗    ██╗    ██╗ █████╗ ███╗   ███╗██████╗  ██████╗
██╔══██╗██║    ██║    ██║    ██║██╔══██╗████╗ ████║██╔══██╗██╔═══██╗
██████╔╝██║ █╗ ██║    ██║ █╗ ██║███████║██╔████╔██║██████╔╝██║   ██║
██╔══██╗██║███╗██║    ██║███╗██║██╔══██║██║╚██╔╝██║██╔══██╗██║   ██║
██████╔╝╚███╔███╔╝    ╚███╔███╔╝██║  ██║██║ ╚═╝ ██║██████╔╝╚██████╔╝
╚═════╝  ╚══╝╚══╝      ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═════╝  ╚═════╝
```

<br/>

# Bryan Wambo — Personal Portfolio

**Cybersecurity Student · Ecole-IT Belgium · Seeking Internship**

<br/>

[![Live](https://img.shields.io/badge/Live-wabryan--it.github.io-0066FF?style=for-the-badge&logo=github&logoColor=white)](https://wabryan-it.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-bryan--wambo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bryan-wambo)
[![Email](https://img.shields.io/badge/Email-wambobryan7%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:wambobryan7@gmail.com)

<br/>

![CI](https://github.com/Wabryan-IT/Wabryan-IT.github.io/actions/workflows/ci.yml/badge.svg)
![Security](https://github.com/Wabryan-IT/Wabryan-IT.github.io/actions/workflows/security.yml/badge.svg)
![Deploy](https://github.com/Wabryan-IT/Wabryan-IT.github.io/actions/workflows/deploy.yml/badge.svg)

<br/>

---

</div>

<br/>

## Overview

Personal cybersecurity portfolio built from scratch — no frameworks, no templates, no runtime dependencies. Pure HTML, CSS and JavaScript with a professional CI/CD pipeline.

> **Choice. Action. Possibility.**

<br/>

## CI/CD Pipeline

Every push to `main` triggers the following automated workflows:

| Workflow | Checks |
|---|---|
| **CI** | HTML validation, CSS lint, JS lint, import integrity, accessibility, structure |
| **Security** | XSS scan, secret detection, CSP validation, dependency audit, supply chain |
| **Lighthouse** | Performance, accessibility score, SEO, Core Web Vitals |
| **Deploy** | Build → gate → deploy to GitHub Pages → smoke test |
| **CodeQL** | Static vulnerability analysis (weekly + on push) |

<br/>

## Features

| Feature | Description |
|---|---|
| **Dark / Light** | Theme toggle, preference saved |
| **FR / EN** | Full bilingual |
| **Projects** | Image gallery with carousel (up to 3 images) |
| **Cursor** | Custom magnetic cursor |
| **Animations** | CSS scroll-driven, zero JavaScript |
| **Mobile** | Fully responsive |
| **Security** | CSP, X-Frame-Options, Referrer-Policy, noopener noreferrer |

<br/>

## Project Structure

```
portfolio/
├── index.html
├── css/                    ← Modular stylesheets
├── js/
│   ├── data.js             ← Edit all content here
│   └── ...                 ← Feature modules
├── .github/
│   ├── workflows/          ← CI/CD pipelines
│   └── ISSUE_TEMPLATE/
├── scripts/                ← CI helper scripts
├── .eslintrc.json
├── .stylelintrc.json
├── .htmlvalidate.json
├── lighthouserc.json
├── SECURITY.md
└── README.md
```

<br/>

## Run Locally

```bash
git clone https://github.com/Wabryan-IT/Wabryan-IT.github.io.git
cd Wabryan-IT.github.io
npm install
npx serve . -p 8080
# open http://localhost:8080
```

<br/>

## Edit Content

Open **`js/data.js`** to update text, projects, skills and education. Everything else updates automatically.

<br/>

---

<div align="center">

**Bryan Wambo** · Cybersecurity Student · Belgium · 2026

[![Visit Portfolio](https://img.shields.io/badge/Visit%20Portfolio-%230066FF.svg?style=for-the-badge&logoColor=white)](https://wabryan-it.github.io)

</div>
