// Load shared header, nav, and footer from separate files
async function loadIncludes() {
    try {
        // Load and insert header
        const headerRes = await fetch('header.html');
        const headerHTML = await headerRes.text();
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.outerHTML = headerHTML;
        }

        // Load and insert nav
        const navRes = await fetch('nav.html');
        const navHTML = await navRes.text();
        const navPlaceholder = document.getElementById('nav-placeholder');
        if (navPlaceholder) {
            navPlaceholder.outerHTML = navHTML;
        }

        // Load and insert footer
        const footerRes = await fetch('footer.html');
        const footerHTML = await footerRes.text();
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.outerHTML = footerHTML;
        }

        // Reinitialize theme and button after includes are loaded
        if (window.initializeTheme) {
            window.initializeTheme();
        }
    } catch (err) {
        console.error('Error loading includes:', err);
    }
}

// Load when document is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
} else {
    loadIncludes();
}