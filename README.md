# Ofri Azriel Portfolio

Portfolio website built from the Figma file `MaL8D4NHTEHoMw5WFjXmES`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `/` — homepage (Figma frame `1`)
- `/projects/[slug]` — 12 project pages
- Hamburger menu — slides in from the left
- About panel — slides in from the right

## Fonts

The design uses Narkiss Block. The site currently uses a Helvetica/Arial fallback until the font files are added.

## Assets

Project images are stored in `public/images/`. To refresh Figma assets:

```bash
node scripts/download-assets.mjs
```
