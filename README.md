# Mohamed Elgaili — Portfolio

Static architectural portfolio built with **Astro** and **Tailwind CSS v4**.

**Live site:** https://mog-academy.github.io/portfolio-practice/

> **One-time setup:** Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **`gh-pages`** / `/ (root)` → Save.  
> (GitHub Actions deploy is ready in `.github/workflows/deploy-pages.yml` but currently blocked by an org/account billing lock.)

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output lands in `dist/`. GitHub Actions deploys `main` to Pages automatically.

## Edit content

| File | What to change |
|------|----------------|
| [`src/data/site.ts`](src/data/site.ts) | Name, manifesto, about, contact, socials |
| [`src/data/projects.ts`](src/data/projects.ts) | Project titles, blurbs, media paths |

Source media library (untouched): `Content/`. Curated site assets: `public/media/` (local only; gitignored because of size).

## Design

Visual system follows `Design Reference/` — monochrome, Libre Caslon Text + Hanken Grotesk, sharp borders, 12-column framed layout.
