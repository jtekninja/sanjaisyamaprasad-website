# Sanjai Syamaprasad — personal website

**Live site:** https://www.sanjaisyamaprasad.com

Official first-party website for **Sanjai Syamaprasad**, a software engineer and AI application developer in Brooklyn, New York.

The site brings together:
- engineering background and technical profile
- public software projects and case studies
- the live [RentNinja](https://rent.jtekninja.com/) product
- technical notes on application architecture and AI-assisted workflows
- links to public code on [GitHub](https://github.com/jtekninja)

## Key pages

- [Home](https://www.sanjaisyamaprasad.com/)
- [About](https://www.sanjaisyamaprasad.com/about.html)
- [Engineering profile](https://www.sanjaisyamaprasad.com/resume.html)
- [Projects](https://www.sanjaisyamaprasad.com/projects.html)
- [Technical notes](https://www.sanjaisyamaprasad.com/resources.html)
- [RentNinja case study](https://www.sanjaisyamaprasad.com/projects/rentninja.html)

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

The production website is deployed from this repository and served at **https://www.sanjaisyamaprasad.com**. Preserve the production domain, existing DNS records, and any email-related MX/SPF/DKIM/DMARC records when changing hosting or deployment settings.
