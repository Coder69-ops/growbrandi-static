// Theme Management System
// Handles dark/light mode toggle and theme persistence

class ThemeManager {
    constructor() {
        this.currentTheme = this.getStoredTheme() || this.getPreferredTheme();
        this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.createThemeToggle();
        this.setupMediaQueryListener();
        this.setupCustomProperties();
    }

    getStoredTheme() {
        return localStorage.getItem('theme');
    }

    getPreferredTheme() {
        return this.mediaQuery.matches ? 'dark' : 'light';
    }

    setStoredTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.setStoredTheme(theme);
        this.updateThemeToggle();
        this.updateMetaThemeColor(theme);
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
        this.applyTheme(newTheme);
        
        // Add transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    }

    createThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.id = 'theme-toggle';
        themeToggle.className = 'theme-toggle';
        themeToggle.setAttribute('aria-label', 'Toggle theme');
        themeToggle.innerHTML = `
            <div class="theme-toggle-track">
                <div class="theme-toggle-thumb">
                    <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="5"/>
                        <line x1="12" y1="1" x2="12" y2="3"/>
                        <line x1="12" y1="21" x2="12" y2="23"/>
                        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                        <line x1="1" y1="12" x2="3" y2="12"/>
                        <line x1="21" y1="12" x2="23" y2="12"/>
                        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                    <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="m21 12.79c-.9 1-2.2 1.21-3.21 1.21-2.74 0-4.96-2.22-4.96-4.96 0-1.01.21-2.31 1.21-3.21-1.19-.4-2.5-.4-3.69 0-3.3 1.18-5.35 4.37-5.35 7.96 0 4.64 3.79 8.4 8.4 8.4 3.59 0 6.78-2.05 7.96-5.35.4-1.19.4-2.5 0-3.69z"/>
                    </svg>
                </div>
            </div>
        `;

        themeToggle.addEventListener('click', () => this.toggleTheme());
        
        // Add to header
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.appendChild(themeToggle);
        }
    }

    updateThemeToggle() {
        const toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.setAttribute('data-theme', this.currentTheme);
        }
    }

    updateMetaThemeColor(theme) {
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        const colors = {
            light: '#ffffff',
            dark: '#0f172a'
        };
        
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', colors[theme]);
        } else {
            const meta = document.createElement('meta');
            meta.name = 'theme-color';
            meta.content = colors[theme];
            document.head.appendChild(meta);
        }
    }

    setupMediaQueryListener() {
        this.mediaQuery.addEventListener('change', (e) => {
            if (!this.getStoredTheme()) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    setupCustomProperties() {
        // Define theme-specific CSS custom properties
        const lightTheme = {
            '--bg-primary': '#ffffff',
            '--bg-secondary': '#f8fafc',
            '--bg-tertiary': '#f1f5f9',
            '--bg-glass': 'rgba(255, 255, 255, 0.8)',
            '--text-primary': '#0f172a',
            '--text-secondary': '#334155',
            '--text-tertiary': '#64748b',
            '--border-color': '#e2e8f0',
            '--shadow-color': 'rgba(0, 0, 0, 0.1)'
        };

        const darkTheme = {
            '--bg-primary': '#0f172a',
            '--bg-secondary': '#1e293b',
            '--bg-tertiary': '#334155',
            '--bg-glass': 'rgba(30, 41, 59, 0.8)',
            '--text-primary': '#f1f5f9',
            '--text-secondary': '#cbd5e1',
            '--text-tertiary': '#94a3b8',
            '--border-color': '#475569',
            '--shadow-color': 'rgba(0, 0, 0, 0.3)'
        };

        // Apply theme variables
        const applyThemeVariables = (theme) => {
            const variables = theme === 'dark' ? darkTheme : lightTheme;
            const root = document.documentElement;
            
            Object.entries(variables).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
        };

        // Apply initial theme variables
        applyThemeVariables(this.currentTheme);

        // Listen for theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    const newTheme = document.documentElement.getAttribute('data-theme');
                    applyThemeVariables(newTheme);
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });
    }

    // Auto theme based on time of day
    enableAutoTheme() {
        const hour = new Date().getHours();
        const isDaytime = hour >= 6 && hour < 18;
        const autoTheme = isDaytime ? 'light' : 'dark';
        
        if (!this.getStoredTheme()) {
            this.applyTheme(autoTheme);
        }

        // Update every hour
        setInterval(() => {
            if (!this.getStoredTheme()) {
                const currentHour = new Date().getHours();
                const currentIsDaytime = currentHour >= 6 && currentHour < 18;
                const currentAutoTheme = currentIsDaytime ? 'light' : 'dark';
                
                if (currentAutoTheme !== this.currentTheme) {
                    this.applyTheme(currentAutoTheme);
                }
            }
        }, 3600000); // 1 hour
    }

    // Theme picker for multiple themes
    createThemePicker() {
        const themes = [
            { name: 'light', label: 'Light', icon: '☀️' },
            { name: 'dark', label: 'Dark', icon: '🌙' },
            { name: 'auto', label: 'Auto', icon: '🌗' }
        ];

        const picker = document.createElement('div');
        picker.className = 'theme-picker';
        picker.innerHTML = `
            <div class="theme-picker-toggle">
                <span class="current-theme-icon">${this.getThemeIcon()}</span>
            </div>
            <div class="theme-picker-dropdown">
                ${themes.map(theme => `
                    <button class="theme-option ${theme.name === this.currentTheme ? 'active' : ''}" 
                            data-theme="${theme.name}">
                        <span class="theme-icon">${theme.icon}</span>
                        <span class="theme-label">${theme.label}</span>
                    </button>
                `).join('')}
            </div>
        `;

        // Add event listeners
        picker.addEventListener('click', (e) => {
            if (e.target.closest('.theme-option')) {
                const selectedTheme = e.target.closest('.theme-option').dataset.theme;
                this.handleThemeSelection(selectedTheme);
            }
        });

        return picker;
    }

    getThemeIcon() {
        const icons = { light: '☀️', dark: '🌙', auto: '🌗' };
        return icons[this.currentTheme] || '🌗';
    }

    handleThemeSelection(theme) {
        if (theme === 'auto') {
            localStorage.removeItem('theme');
            this.applyTheme(this.getPreferredTheme());
        } else {
            this.applyTheme(theme);
        }
    }

    // High contrast mode support
    enableHighContrast() {
        const highContrastMedia = window.matchMedia('(prefers-contrast: high)');
        
        const applyHighContrast = (shouldApply) => {
            if (shouldApply) {
                document.documentElement.classList.add('high-contrast');
            } else {
                document.documentElement.classList.remove('high-contrast');
            }
        };

        applyHighContrast(highContrastMedia.matches);
        highContrastMedia.addEventListener('change', (e) => {
            applyHighContrast(e.matches);
        });
    }

    // Reduced motion support
    handleReducedMotion() {
        const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        const applyReducedMotion = (shouldReduce) => {
            if (shouldReduce) {
                document.documentElement.classList.add('reduced-motion');
            } else {
                document.documentElement.classList.remove('reduced-motion');
            }
        };

        applyReducedMotion(reducedMotionMedia.matches);
        reducedMotionMedia.addEventListener('change', (e) => {
            applyReducedMotion(e.matches);
        });
    }
}

// Skeleton Loading System
class SkeletonLoader {
    static create(type, config = {}) {
        const skeleton = document.createElement('div');
        skeleton.className = `skeleton skeleton-${type}`;
        
        switch (type) {
            case 'text':
                skeleton.style.width = config.width || '100%';
                skeleton.style.height = config.height || '1rem';
                break;
            case 'card':
                skeleton.innerHTML = `
                    <div class="skeleton-header"></div>
                    <div class="skeleton-body">
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line"></div>
                        <div class="skeleton-line short"></div>
                    </div>
                `;
                break;
            case 'avatar':
                skeleton.style.width = config.size || '40px';
                skeleton.style.height = config.size || '40px';
                skeleton.style.borderRadius = '50%';
                break;
        }
        
        return skeleton;
    }

    static showSkeleton(container, type, count = 1) {
        const fragment = document.createDocumentFragment();
        
        for (let i = 0; i < count; i++) {
            fragment.appendChild(this.create(type));
        }
        
        container.innerHTML = '';
        container.appendChild(fragment);
        container.classList.add('loading');
    }

    static hideSkeleton(container) {
        container.classList.remove('loading');
        container.querySelectorAll('.skeleton').forEach(skeleton => {
            skeleton.remove();
        });
    }
}

// Initialize theme system
const themeManager = new ThemeManager();

// Enable accessibility features
themeManager.enableHighContrast();
themeManager.handleReducedMotion();

// Export for global use
window.themeManager = themeManager;
window.SkeletonLoader = SkeletonLoader;

console.log('🎨 Theme system initialized');