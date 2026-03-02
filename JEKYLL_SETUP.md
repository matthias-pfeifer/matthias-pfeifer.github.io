# Jekyll Setup - Complete ✅

Your website has been successfully migrated to Jekyll for GitHub Pages deployment!

## What Changed

### Structure
- **Single-page design** → **Multi-page site** (5 pages)
- **Duplicate HTML** → **Jekyll templates** (DRY principle)
- **Root-level assets** → **Organized in `assets/` directory**
- **Static includes** → **Jekyll includes system** (reusable components)

### New Files Created
- `_config.yml` - Jekyll configuration
- `_includes/header.html` - Shared header template
- `_includes/nav.html` - Navigation with dark mode toggle
- `_includes/footer.html` - Shared footer template
- `_layouts/default.html` - Master page layout
- `assets/css/style.css` - Styles with dark mode support
- `assets/js/config.js`, `theme.js`, `lastupdate.js` - JavaScript utilities
- `contact.md`, `research.md`, `publications.md`, `teaching.md` - Page content

### Files Removed
- Old HTML includes (header.html, nav.html, footer.html from root)
- Old HTML pages (contact.html, research.html, publications.html, teaching.html)
- Old asset files from root (style.css, config.js, theme.js, lastupdate.js, includes.js)

## Next Steps

### 1. Update _config.yml with your information
Edit `_config.yml` and replace placeholders:
```yaml
title: "[YOUR FULL NAME]"
subtitle: "[Your University/Current Position]"
description: "Academic website for [YOUR NAME]"
url: "https://yourusername.github.io"
```

### 2. Verify GitHub Pages is enabled
1. Go to your GitHub repository settings
2. Navigate to **Pages** section
3. Ensure **Source** is set to `main` branch (or main)
4. Build should be automatic using GitHub Pages default Jekyll

### 3. Update page content
Edit the markdown files with your actual content:
- `index.html` - About/Home section
- `research.md` - Research interests
- `publications.md` - Publications and preprints
- `teaching.md` - Teaching statement
- `contact.md` - Contact info and external links

### 4. Monitor GitHub Pages build
- After pushing changes, GitHub Pages will automatically build your site
- Check the **Actions** tab to see build status
- Site will be available at `https://yourusername.github.io` (after first build)

## Features

✅ **Dark Mode** - Persistent across all pages (localStorage)
✅ **Last Updated Date** - Automatically populated in footer
✅ **Responsive Design** - Mobile-friendly layout
✅ **Code Duplication Eliminated** - Single header/nav/footer source
✅ **GitHub Pages Ready** - No build tools needed, uses Jekyll built-in

## Local Testing (Optional)

To test locally before deployment:

1. Install Jekyll:
   ```bash
   gem install --user-install jekyll bundler
   export PATH="$HOME/.local/share/gem/ruby/3.2.0/bin:$PATH"
   ```

2. Serve locally:
   ```bash
   cd /path/to/website
   jekyll serve
   ```

3. Visit `http://localhost:4000` in your browser

## Troubleshooting

**Site not showing?**
- Wait 1-2 minutes for initial GitHub Pages build
- Check Actions tab for build errors
- Verify repository is public (or you have Pages enabled)

**Dark mode not working?**
- Ensure JavaScript files loaded (check browser console for errors)
- Clear browser cache and localStorage

**Images not showing?**
- Verify image paths use `/` (site root) not relative paths
- Ensure `Portrait.png` is in the root directory

## File Organization

```
website/
├── _config.yml              # Jekyll configuration
├── _includes/               # Reusable components
│   ├── header.html
│   ├── nav.html
│   └── footer.html
├── _layouts/                # Page templates
│   └── default.html
├── assets/                  # CSS and JavaScript
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── config.js
│       ├── theme.js
│       └── lastupdate.js
├── index.html               # Home page (Jekyll format)
├── contact.md               # Contact page
├── research.md              # Research page
├── publications.md          # Publications page
├── teaching.md              # Teaching page
├── Portrait.png             # Profile image
└── .gitignore               # Git configuration
```

## Git Push

Your changes have been pushed to GitHub! ✅
Commit: "Migrate to Jekyll for GitHub Pages deployment"

The repository is ready for GitHub Pages auto-deployment.
