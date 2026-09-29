# Sanjai Syamaprasad — personal website

Lightweight static portfolio site. Open `index.html` directly or serve the directory with any static host.

## Editing

- Page copy lives in the HTML files.
- Shared visual styling is in `styles.css`.
- Public project pages live in `projects/`.
- Only the website source and approved public assets belong in this repository.

## Local preview

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173/`.

## Deployment

This is deployable to GitHub Pages, Netlify, Vercel static hosting, Cloudflare Pages, or any ordinary web server. Set the host to serve this directory and configure the domain to the host’s exact target after the host is selected. Do not invent Porkbun DNS values before that step; preserve existing MX/SPF/DKIM/DMARC records.
