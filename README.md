# GoldRapid Static Website

This is a modern, bilingual (Polish/English) static website for GoldRapid, featuring a custom SVG logo, language and theme switcher, and responsive design. Ready for deployment on GitHub Pages.

## Features
- Bilingual: Polish and English, with automatic language detection and manual switcher
- Light/Dark theme with system preference detection and manual switcher
- Custom SVG logo and flag icons (PL/US)
- Responsive and accessible design

## How to deploy on GitHub Pages

1. **Fork or clone this repository**
2. **Push to your GitHub account**
3. Go to your repository settings on GitHub
4. In the "Pages" section, set the source to the `gh-pages` branch (or `main`/`master` if you use root for static files)
5. Save and wait for GitHub Pages to build your site
6. Your site will be available at `https://your-username.github.io/your-repo-name/`

## Project structure

```
static/
  index.html         # Main HTML file
  style.css          # Styles for layout, theme, and responsiveness
  main.js            # Language and theme switcher logic
  logo.svg           # GoldRapid logo
  flag-pl.svg        # Polish flag SVG
  flag-us.svg        # US flag SVG
README.md            # Project info and deployment instructions
package.json         # (optional) Project metadata
.github/
  workflows/
    gh-pages.yml     # GitHub Actions workflow for deployment
```

---

**All static website content is now in the `static/` folder. Only repository/config files are in the root.**

**You can now upload this folder to GitHub and host it instantly with GitHub Pages!**
