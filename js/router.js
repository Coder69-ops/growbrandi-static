// Simple client-side router for SPA functionality

class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = 'home';
        this.init();
    }

    init() {
        // Handle initial load
        window.addEventListener('DOMContentLoaded', () => {
            this.handleRoute();
        });

        // Handle hash changes
        window.addEventListener('hashchange', () => {
            this.handleRoute();
        });

        // Handle link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href^="#"]');
            if (link) {
                e.preventDefault();
                const href = link.getAttribute('href');
                window.location.hash = href;
            }
        });
    }

    register(path, handler) {
        this.routes[path] = handler;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        this.currentRoute = hash;
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${hash}` || (href === '#home' && hash === '')) {
                link.classList.add('active');
            }
        });

        // Update page title
        const title = this.getPageTitle(hash);
        document.title = `${title} - GrowBrandi`;

        // Load page content
        if (this.routes[hash]) {
            this.routes[hash]();
        } else {
            this.routes['home']?.();
        }

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navigate(path) {
        window.location.hash = `#${path}`;
    }

    getPageTitle(route) {
        const titles = {
            'home': 'Expert Shopify Development & Digital Growth',
            'services': 'Digital Services & Solutions',
            'shopify': 'Shopify Development & E-commerce Solutions',
            'shopify-development': 'Custom Shopify Development Services',
            'shopify-plus': 'Shopify Plus Enterprise Solutions',
            'shopify-migration': 'Shopify Migration & Optimization',
            'web-development': 'Custom Web Development Services',
            'ui-ux-design': 'UI/UX Design Services',
            'brand-strategy': 'Brand Strategy & Design',
            'seo-optimization': 'SEO Optimization Services',
            'digital-marketing': 'Digital Marketing Services',
            'conversion-optimization': 'Conversion Rate Optimization',
            'automation-solutions': 'Marketing Automation Solutions',
            'about': 'About GrowBrandi - Digital Growth Experts',
            'team': 'Our Expert Team',
            'case-studies': 'Success Stories & Case Studies',
            'process': 'Our Proven Development Process',
            'contact': 'Contact Us - Free Consultation',
            'careers': 'Careers - Join Our Team',
            'blog': 'Digital Growth Blog & Resources',
            'guides': 'Digital Growth Guides & Tutorials',
            'tools': 'Free Business Growth Tools',
            'privacy-policy': 'Privacy Policy',
            'terms-of-service': 'Terms of Service',
            'cookie-policy': 'Cookie Policy'
        };
        return titles[route] || 'GrowBrandi - Expert Digital Growth Agency';
    }
}

// Create global router instance
const router = new Router();
