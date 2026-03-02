// Simple global config - read from localStorage once on each page
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
    window.isDarkMode = true;
} else if (storedTheme === 'light') {
    window.isDarkMode = false;
} else {
    // no preference stored – fall back to system
    window.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Apply theme immediately to avoid flash
function applyTheme() {
    if (window.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.classList.remove('dark-mode');
    }
}

// Apply on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}