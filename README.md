# Flowers

A small single-page birthday greeting: a personalised headline, a bouquet that blooms in, and a confetti burst on load and on button click.

Built with [Vite](https://vite.dev/), TypeScript and plain CSS.
The greeting, the name, the page title and the document language all come from
environment variables, so the same page can be reused for anyone in any
language.

## Requirements

- Node.js >= 22.12.0

## Getting started

```bash
npm install
cp .env.example .env   # then fill in the values
npm run dev
```

The dev server prints the local URL (Vite defaults to
<http://localhost:5173>).

## Configuration

The `.env` file is not committed. Copy `.env.example` and fill in the values.
Every variable has a fallback, so an unset or empty one degrades to a generic
greeting rather than breaking the page:

| Variable        | Purpose                                            | Fallback          |
| --------------- | -------------------------------------------------- | ----------------- |
| `VITE_GREETING` | First line of the headline                         | `Happy Birthday,` |
| `VITE_NAME`     | Second line of the headline                        | `Someone`         |
| `VITE_TITLE`    | Browser tab title                                  | `Happy Birthday`  |
| `VITE_LANG`     | `lang` attribute of `<html>`, e.g. `en` or `de`    | `en`              |

## Scripts

| Command           | What it does                                   |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload      |
| `npm run build`   | Type-check with `tsc`, then build into `dist/` |
| `npm run preview` | Serve the production build locally             |
| `npm run lint`    | Run ESLint over the project                    |

## Project structure

```text
index.html          markup: headline, confetti button, bouquet
src/main.ts         applies env vars (headline, title, language), fires the confetti
src/style.css       colour palette, layout, flower mask and bloom animation
public/favicon.svg  favicon
public/robots.txt   disallows all crawlers
```

## Notes

The page is marked `noindex, nofollow` and `robots.txt` disallows everything —
it is meant to be shared with one person via a direct link, not indexed.
