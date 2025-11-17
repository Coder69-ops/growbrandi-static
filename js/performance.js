// Performance Optimization Module
// Implements lazy loading, resource optimization, and performance monitoring

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.initLazyLoading();
        this.initCriticalResourcePreloading();
        this.initPerformanceMonitoring();
        this.initIntersectionObserver();
        this.optimizeImages();
    }

    // Lazy Loading Implementation
    initLazyLoading() {
        // Lazy load images
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });

        // Lazy load background images
        const bgImageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.style.backgroundImage = `url(${element.dataset.bg})`;
                    element.classList.add('bg-loaded');
                    bgImageObserver.unobserve(element);
                }
            });
        });

        document.querySelectorAll('[data-bg]').forEach(el => {
            bgImageObserver.observe(el);
        });
    }

    // Critical Resource Preloading
    initCriticalResourcePreloading() {
        // Preload critical fonts
        const fontPreloads = [
            { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap', as: 'style' }
        ];

        fontPreloads.forEach(font => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = font.href;
            link.as = font.as;
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        });

        // Preload hero image
        const heroImage = new Image();
        heroImage.src = 'images/hero-bg.jpg';

        // DNS prefetch for external resources
        const dnsPrefetches = [
            'https://fonts.googleapis.com',
            'https://fonts.gstatic.com',
            'https://generativelanguage.googleapis.com'
        ];

        dnsPrefetches.forEach(domain => {
            const link = document.createElement('link');
            link.rel = 'dns-prefetch';
            link.href = domain;
            document.head.appendChild(link);
        });
    }

    // Performance Monitoring
    initPerformanceMonitoring() {
        // Core Web Vitals monitoring
        if ('web-vital' in window) {
            window.webVitals.getCLS(this.reportMetric);
            window.webVitals.getFID(this.reportMetric);
            window.webVitals.getFCP(this.reportMetric);
            window.webVitals.getLCP(this.reportMetric);
            window.webVitals.getTTFB(this.reportMetric);
        }

        // Custom performance metrics
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const domReady = perfData.domContentLoadedEventEnd - perfData.navigationStart;
            
            console.log(`📊 Performance Metrics:
                - Page Load Time: ${pageLoadTime}ms
                - DOM Ready Time: ${domReady}ms
                - First Paint: ${performance.getEntriesByType('paint')[0]?.startTime.toFixed(2)}ms
                - Largest Contentful Paint: ${performance.getEntriesByType('largest-contentful-paint')[0]?.startTime.toFixed(2)}ms
            `);

            // Report to analytics if configured
            if (window.gtag) {
                window.gtag('event', 'page_load_time', {
                    event_category: 'Performance',
                    event_label: 'Load Time',
                    value: Math.round(pageLoadTime)
                });
            }
        });
    }

    reportMetric({ name, value, id }) {
        console.log(`📈 Core Web Vital - ${name}: ${value}ms (ID: ${id})`);
        
        // Report to Google Analytics if available
        if (window.gtag) {
            window.gtag('event', name, {
                event_category: 'Web Vitals',
                event_label: id,
                value: Math.round(value)
            });
        }
    }

    // Enhanced Intersection Observer for animations
    initIntersectionObserver() {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    // Add stagger delay for group animations
                    const siblings = entry.target.parentElement.querySelectorAll('.animate-on-scroll');
                    const index = Array.from(siblings).indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 100}ms`;
                    
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '-10% 0px',
            threshold: 0.1
        });

        // Observe elements for animation
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            animationObserver.observe(el);
        });
    }

    // Image Optimization
    optimizeImages() {
        // Convert images to WebP format when supported
        if (this.supportsWebP()) {
            document.querySelectorAll('img').forEach(img => {
                if (img.src && !img.src.includes('.webp')) {
                    const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
                    // Test if WebP version exists
                    const testImg = new Image();
                    testImg.onload = () => {
                        img.src = webpSrc;
                    };
                    testImg.src = webpSrc;
                }
            });
        }

        // Add loading="lazy" to images below the fold
        document.querySelectorAll('img').forEach((img, index) => {
            if (index > 2) { // Skip first 3 images (likely above the fold)
                img.loading = 'lazy';
            }
        });
    }

    supportsWebP() {
        const canvas = document.createElement('canvas');
        return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    }

    // Resource Hints
    addResourceHints() {
        const hints = [
            { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
            { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
            { rel: 'dns-prefetch', href: 'https://generativelanguage.googleapis.com' },
            { rel: 'prefetch', href: '/images/hero-bg.jpg' }
        ];

        hints.forEach(hint => {
            const link = document.createElement('link');
            Object.assign(link, hint);
            document.head.appendChild(link);
        });
    }

    // Critical CSS Detection and Inlining
    inlineCriticalCSS() {
        // This would typically be done during build time
        // For runtime optimization, we can defer non-critical CSS
        const criticalCSS = `
            /* Critical above-the-fold styles */
            .header { position: fixed; top: 0; width: 100%; z-index: 1000; }
            .hero { min-height: 100vh; display: flex; align-items: center; }
            .container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
            .btn { display: inline-flex; align-items: center; padding: 0.75rem 1.5rem; border-radius: 0.5rem; }
        `;

        // Inject critical CSS
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.insertBefore(style, document.head.querySelector('link[rel="stylesheet"]'));
    }

    // Service Worker for Caching
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('✅ Service Worker registered:', registration.scope);
                })
                .catch(error => {
                    console.log('❌ Service Worker registration failed:', error);
                });
        }
    }

    // Preload Next Page Resources
    preloadRouteResources(route) {
        // Preload resources for the next likely page
        const routeResources = {
            'services': ['/images/services-bg.jpg'],
            'about': ['/images/team-bg.jpg'],
            'contact': ['/images/contact-bg.jpg']
        };

        const resources = routeResources[route];
        if (resources) {
            resources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = resource;
                document.head.appendChild(link);
            });
        }
    }

    // Bundle Splitting Simulation (for critical JS)
    loadNonCriticalJS() {
        // Load non-critical JavaScript after page load
        window.addEventListener('load', () => {
            const nonCriticalScripts = [
                '/js/animations.js',
                '/js/chat.js'
            ];

            nonCriticalScripts.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                script.defer = true;
                document.body.appendChild(script);
            });
        });
    }

    // Performance Budget Monitoring
    monitorPerformanceBudget() {
        const budget = {
            totalSize: 500000, // 500KB
            jsSize: 150000,    // 150KB
            cssSize: 100000,   // 100KB
            imageSize: 300000  // 300KB
        };

        // Monitor resource sizes
        window.addEventListener('load', () => {
            const resources = performance.getEntriesByType('resource');
            let totalSize = 0;
            let jsSize = 0;
            let cssSize = 0;
            let imageSize = 0;

            resources.forEach(resource => {
                const size = resource.transferSize || 0;
                totalSize += size;

                if (resource.name.includes('.js')) jsSize += size;
                else if (resource.name.includes('.css')) cssSize += size;
                else if (resource.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) imageSize += size;
            });

            console.log(`📊 Performance Budget:
                - Total: ${(totalSize/1000).toFixed(1)}KB / ${(budget.totalSize/1000)}KB
                - JavaScript: ${(jsSize/1000).toFixed(1)}KB / ${(budget.jsSize/1000)}KB
                - CSS: ${(cssSize/1000).toFixed(1)}KB / ${(budget.cssSize/1000)}KB
                - Images: ${(imageSize/1000).toFixed(1)}KB / ${(budget.imageSize/1000)}KB
            `);

            // Alert if budget exceeded
            if (totalSize > budget.totalSize) {
                console.warn('⚠️ Performance budget exceeded!');
            }
        });
    }
}

// Memory Management
class MemoryOptimizer {
    constructor() {
        this.observers = new Map();
        this.eventListeners = new Set();
        this.intervals = new Set();
        this.timeouts = new Set();
    }

    // Track and cleanup observers
    addObserver(name, observer) {
        this.observers.set(name, observer);
    }

    cleanup() {
        // Disconnect all observers
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();

        // Clear intervals and timeouts
        this.intervals.forEach(id => clearInterval(id));
        this.timeouts.forEach(id => clearTimeout(id));
        
        console.log('🧹 Memory cleanup completed');
    }

    // Monitor memory usage
    monitorMemory() {
        if ('memory' in performance) {
            setInterval(() => {
                const memory = performance.memory;
                console.log(`🧠 Memory Usage:
                    - Used: ${(memory.usedJSHeapSize / 1048576).toFixed(2)} MB
                    - Total: ${(memory.totalJSHeapSize / 1048576).toFixed(2)} MB
                    - Limit: ${(memory.jsHeapSizeLimit / 1048576).toFixed(2)} MB
                `);
            }, 30000); // Every 30 seconds
        }
    }
}

// Initialize performance optimization
const performanceOptimizer = new PerformanceOptimizer();
const memoryOptimizer = new MemoryOptimizer();

// Export for use in other modules
window.performanceOptimizer = performanceOptimizer;
window.memoryOptimizer = memoryOptimizer;

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    memoryOptimizer.cleanup();
});

console.log('🚀 Performance optimization module loaded');