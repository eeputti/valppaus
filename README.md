# Valppaus – Vercel deployment

Staattinen sivusto. Ei buildia. Valmis Verceliin.

## Vaihe 1 — Vie GitHubiin
- Luo repo `valppaus-site` ja pushaa tämän kansion sisällöt.

## Vaihe 2 — Vercel
- New Project → *Import Git Repository* → valitse repo
- Framework Preset: **Other**
- Build command: *(none)*
- Output directory: *(none)*
- Deploy

## Vaihe 3 — Domain
- Project → Settings → Domains → Add `valppaus.fi` ja `www.valppaus.fi`
- DNS: Apex A → **76.76.21.21**; `www` CNAME → **cname.vercel-dns.com.**
- Aseta `valppaus.fi` Primary, redirect `www` → apex

## Vaihe 4 — Testaa
- / (etusivu), /join.html (intake), /privacy, /terms
- Join-linkki: `/join.html?src=demo&service=psykoterapia&staff=TEST` → avaa mailin `join@valppaus.fi`

## Mukana
index.html, ilmoituslista.html, privacy.html, terms.html, thanks.html,
index-a/b/c.html, join.html/css/js, 404.html, robots.txt, sitemap.xml, logo.svg, favicon.svg, vercel.json

© 2025 Valppaus
