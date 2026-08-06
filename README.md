# Flowers

![Vite](https://img.shields.io/badge/Vite-9135FF.svg?style=for-the-badge&logo=Vite&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-663399.svg?style=for-the-badge&logo=CSS&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)

A small single-page greeting: a personalised headline, a bouquet that blooms in, and a confetti burst on load and on button click.

The greeting line, the name, the page title and the document language all come
from environment variables, so the same page works for a birthday, a
graduation, a get-well card or anything else. The defaults are birthday-flavoured,
but can be freely configured via the `.env` file.

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
