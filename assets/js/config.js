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

// portraits for light/dark modes
const portraitLight = "/Portrait.png";
const portraitDark = "/Portrait-dark.png";

function updatePortrait() {
    const img = document.querySelector('.profile-pic');
    if (!img) return;
    img.src = window.isDarkMode ? portraitDark : portraitLight;
}

// Apply theme immediately when config script loads
// (initial class may already have been set via inline snippet in head)
function applyTheme() {
    if (window.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark-mode');
        document.body.classList.remove('dark-mode');
    }
    updatePortrait();
}

// Apply on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTheme);
} else {
    applyTheme();
}