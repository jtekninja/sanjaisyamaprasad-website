# Sanjai Syamaprasad — personal website

**Live site:** https://sanjaisyamaprasad.com

Official first-party website for **Sanjai Syamaprasad**, a software engineer and AI application developer in Brooklyn, New York.

The site brings together:
- engineering background and technical profile
- public software projects and case studies
- the live [RentNinja](https://rent.jtekninja.com/) product
- technical notes on application architecture and AI-assisted workflows
- links to public code on [GitHub](https://github.com/jtekninja)

## Key pages

- [Home](https://sanjaisyamaprasad.com/)
- [About](https://sanjaisyamaprasad.com/about.html)
- [Engineering profile](https://sanjaisyamaprasad.com/resume.html)
- [Projects](https://sanjaisyamaprasad.com/projects.html)
- [Technical notes](https://sanjaisyamaprasad.com/resources.html)
- [RentNinja case study](https://sanjaisyamaprasad.com/projects/rentninja.html)

## Project status

**RentNinja** is the currently published product. QuestNinja and ShiftNinja AI are development projects and are labeled accordingly on the website.

## Site structure

- Page copy lives in the HTML files.
- Shared visual styling is in `styles.css`.
- Project case studies live in `projects/`.
- Technical notes live in `resources/`.
- Search discovery files include `sitemap.xml`, `robots.txt`, `feed.xml`, and `llms.txt`.
- Approved public visual assets live in `assets/`.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Deployment

The production website is deployed from this repository and served at **https://sanjaisyamaprasad.com**. Preserve the production domain, existing DNS records, and any email-related MX/SPF/DKIM/DMARC records when changing hosting or deployment settings.

### Canonical host rules

- The **apex host** `https://sanjaisyamaprasad.com` is the only canonical host. Every page must be served directly from it with `HTTP 200`.
- The `www` subdomain must **permanently redirect** (`HTTP 308`) to the equivalent apex URL, e.g. `www` + `/about.html` → `/about.html`. Hosting/DNS handles this (the current Vercel domain configuration already returns `308`), so there is intentionally **no application-level rewrite** in this repository.
- First-party absolute URLs must always start with `https://sanjaisyamaprasad.com/`. A `www`-prefixed first-party URL must never appear in `rel="canonical"`, `og:url`, Open Graph/Twitter images, `sitemap.xml`, `robots.txt`, `feed.xml`, `llms.txt`, or JSON-LD.
- Normal in-page navigation links stay **relative** (`about.html`, `../projects.html`).
