# Corey Clarke portfolio

A static portfolio site. No build step or npm install is required.

## Edit locally

1. Open this folder in VS Code.
2. Edit `index.html` for copy and links, `styles.css` for visual styling, and `script.js` for the mobile menu and experience tabs.
3. Replace images in `assets/`, keeping filenames the same or updating the matching paths in `index.html`.
4. Preview with a local static server (for example, VS Code Live Server) or open `index.html` in a browser.

## Publish independently

Push this folder to your own GitHub repository and import it into Vercel. Choose **Other** as the framework preset, leave the build command empty, and set the output directory to the repository root. Then add your purchased domain(s) in Vercel's project settings and follow Vercel's DNS instructions. If moving the live domain away from ChatGPT Sites, remove or replace the existing Sites DNS records only when you're ready to switch hosting.

The project thumbnails and portrait are bundled in `assets/`. Google Fonts are loaded from Google's servers; the page falls back to system fonts if unavailable.
