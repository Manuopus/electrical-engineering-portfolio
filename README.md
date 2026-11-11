# Electrical Engineering Portfolio

My personal portfolio, documenting what I learn and build in electrical engineering, programming,
mathematics and physics while I prepare for a dual study programme (Duales Studium) in Elektrotechnik.

**Live site:** https://manuopus.github.io/electrical-engineering-portfolio/

## Structure

```
index.html                     Home page with all sections
css/style.css                  All styles (colours are set at the top, in :root)
js/data.js                     The content: skills, projects, notes, progress log
js/main.js                     Builds the page from data.js; menu and filters
projects/led-resistor.html     Project 02, full documentation page
projects/project-template.html Blank page to copy for each new project
assets/                        Favicon, later photos and diagrams
```

## How to update the site

| I want to…                 | Edit                                                        |
|----------------------------|-------------------------------------------------------------|
| Add or change a skill      | `js/data.js` → `skills`                                     |
| Add a project card         | `js/data.js` → `projects`                                   |
| Write a full project page  | Copy `projects/project-template.html`, then set `page:` in data.js |
| Add a study note           | `js/data.js` → `knowledge`                                  |
| Record progress            | `js/data.js` → `log` (newest first)                         |
| Change colours             | `css/style.css` → `:root`                                   |

Rule: a skill is only marked `demonstrated` when it links to a project that proves it.

## Run locally

Open `index.html` in a browser, or use the VS Code extension **Live Server** for automatic reload.

## Publish

```
git add .
git commit -m "Describe the change"
git push
```

GitHub Pages rebuilds the live site from the `main` branch about a minute after each push.
