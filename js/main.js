// Main application entry point

// Initialize router with page handlers
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 GrowBrandi - Initializing...');
    
    // Register all routes
    router.register('home', () => renderPage('home'));
    router.register('services', () => renderPage('services'));
    
    // Shopify Services
    router.register('shopify', () => renderPage('shopify'));
    router.register('shopify-development', () => renderPage('shopify-development'));
    router.register('shopify-plus', () => renderPage('shopify-plus'));
    router.register('shopify-migration', () => renderPage('shopify-migration'));
    
    // Individual service pages
    router.register('web-development', () => renderPage('web-development'));
    router.register('ui-ux-design', () => renderPage('ui-ux-design'));
    router.register('brand-strategy', () => renderPage('brand-strategy'));
    router.register('seo-optimization', () => renderPage('seo-optimization'));
    router.register('digital-marketing', () => renderPage('digital-marketing'));
    router.register('conversion-optimization', () => renderPage('conversion-optimization'));
    router.register('automation-solutions', () => renderPage('automation-solutions'));
    
    // Company pages
    router.register('about', () => renderPage('about'));
    router.register('team', () => renderPage('team'));
    router.register('case-studies', () => renderPage('caseStudies'));
    router.register('process', () => renderPage('process'));
    router.register('careers', () => renderPage('careers'));
    router.register('blog', () => renderPage('blog'));
    
    // Resource pages
    router.register('guides', () => renderPage('guides'));
    router.register('tools', () => renderPage('tools'));
    
    // Other pages
    router.register('contact', () => renderPage('contact'));
    
    // Legal pages
    router.register('privacy-policy', () => renderPage('privacy-policy'));
    router.register('terms-of-service', () => renderPage('terms-of-service'));
    router.register('cookie-policy', () => renderPage('cookie-policy'));
    
    // Initial route
    router.handleRoute();
    
    console.log('✅ GrowBrandi - Ready!');
});

// FAB buttons removed - functionality moved to chat widget

// Global utility functions
window.scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.showNotification = (message, type = 'info') => {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'var(--color-success)' : type === 'error' ? 'var(--color-error)' : 'var(--color-primary)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: var(--shadow-xl);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
};

// AI Tools functions
window.showSloganGenerator = () => {
    // Use the conversion system's slogan generator
    if (window.conversionChatSystem) {
        document.getElementById('ai-tools-modal').classList.add('hidden');
        window.conversionChatSystem.sloganGenerator.show();
        return;
    }
    
    // Fallback modal
    const modal = document.getElementById('ai-tools-modal');
    const content = modal.querySelector('.modal-content');
    
    content.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('ai-tools-modal').classList.add('hidden')">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <h2 class="modal-title">Business Slogan Generator</h2>
        
        <div style="max-width: 600px; margin: 0 auto;">
            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem;">
                <label style="display: block; margin-bottom: 1rem; font-weight: 600;">Enter Keywords</label>
                <input type="text" id="slogan-keywords" class="chat-input" style="width: 100%; margin-bottom: 1.5rem;" 
                       placeholder="e.g., sustainable, innovative, coffee, community">
                <button class="btn btn-primary" onclick="generateSlogans()" style="width: 100%;">
                    Generate Slogans
                </button>
            </div>
            
            <div id="slogan-results" style="margin-top: 2rem;"></div>
        </div>
    `;
};

window.generateSlogans = () => {
    const keywords = document.getElementById('slogan-keywords')?.value.trim();
    const resultsDiv = document.getElementById('slogan-results');
    
    if (!keywords) {
        showNotification('Please enter some keywords', 'error');
        return;
    }
    
    resultsDiv.innerHTML = '<div class="loading-spinner"></div>';
    
    // Simulate AI generation (replace with actual API call)
    setTimeout(() => {
        const slogans = [
            `${keywords.split(',')[0].trim()} your way to success`,
            `The future of ${keywords.split(',')[0].trim()} is here`,
            `${keywords.split(',')[0].trim()} - innovated for you`,
        ];
        
        resultsDiv.innerHTML = `
            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--color-primary);">✨ Your Generated Slogans</h3>
                ${slogans.map((slogan, i) => `
                    <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: 0.75rem; margin-bottom: 1rem;">
                        <p style="font-size: 1.125rem; font-weight: 600;">"${slogan}"</p>
                    </div>
                `).join('')}
            </div>
        `;
    }, 1500);
};

window.showBusinessIntel = () => {
    // Use the conversion system's business intelligence
    if (window.conversionChatSystem) {
        document.getElementById('ai-tools-modal').classList.add('hidden');
        window.conversionChatSystem.businessIntelligenceSystem.show();
        return;
    }
    
    // Fallback modal
    const modal = document.getElementById('ai-tools-modal');
    const content = modal.querySelector('.modal-content');
    
    content.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('ai-tools-modal').classList.add('hidden')">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <h2 class="modal-title">Business Intelligence</h2>
        
        <div style="max-width: 800px; margin: 0 auto;">
            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem; margin-bottom: 2rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Industry</label>
                        <select class="chat-input" style="width: 100%;">
                            <option>E-commerce</option>
                            <option>SaaS</option>
                            <option>Healthcare</option>
                            <option>Finance</option>
                        </select>
                    </div>
                    <div>
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Goal</label>
                        <select class="chat-input" style="width: 100%;">
                            <option>Increase Revenue</option>
                            <option>Generate Leads</option>
                            <option>Build Brand</option>
                            <option>Expand Market</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-primary" style="width: 100%;">
                    Analyze Business
                </button>
            </div>
            
            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem;">
                <h3 style="margin-bottom: 1rem; color: var(--color-primary);">📊 Quick Insights</h3>
                <p style="color: var(--text-secondary);">Select your industry and goal to get personalized business intelligence insights from our experts.</p>
            </div>
        </div>
    `;
};

window.showProjectEstimator = () => {
    // Use the conversion system's project estimator
    if (window.conversionChatSystem) {
        document.getElementById('ai-tools-modal').classList.add('hidden');
        window.conversionChatSystem.projectEstimator.show();
        return;
    }
    
    // Fallback modal
    const modal = document.getElementById('ai-tools-modal');
    const content = modal.querySelector('.modal-content');
    
    content.innerHTML = `
        <button class="modal-close" onclick="document.getElementById('ai-tools-modal').classList.add('hidden')">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <h2 class="modal-title">Project Estimator</h2>
        
        <div style="max-width: 600px; margin: 0 auto;">
            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem;">
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Project Type</label>
                    <select class="chat-input" style="width: 100%;">
                        <option>Website Development</option>
                        <option>E-commerce Platform</option>
                        <option>Mobile App</option>
                        <option>Brand Identity</option>
                        <option>SEO Campaign</option>
                        <option>Digital Marketing</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Timeline</label>
                    <select class="chat-input" style="width: 100%;">
                        <option>Less than 1 month</option>
                        <option>1-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                    </select>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Budget Range</label>
                    <select class="chat-input" style="width: 100%;">
                        <option>$1K - $5K</option>
                        <option>$5K - $10K</option>
                        <option>$10K - $25K</option>
                        <option>$25K+</option>
                    </select>
                </div>
                
                <button class="btn btn-primary" onclick="showEstimate()" style="width: 100%;">
                    Get Instant Estimate
                </button>
            </div>
        </div>
    `;
};

window.showEstimate = () => {
    showNotification('Your estimate is ready! Check your email or chat with us for details.', 'success');
    setTimeout(() => {
        document.getElementById('ai-tools-modal').classList.add('hidden');
        if (chatManager) chatManager.open();
    }, 1500);
};

// Error handling
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance && window.performance.timing) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⏱️ Page load time: ${pageLoadTime}ms`);
    }
});

// Service worker registration (for PWA support)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

console.log('%c🚀 GrowBrandi ', 'background: linear-gradient(135deg, #10b981, #3b82f6); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%cExpert Digital Growth Agency', 'color: #10b981; font-size: 14px;');

// ===== Modern Enhancements =====

// Magnetic hover effect for service cards
function initMagneticCards() {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
}

// Animated background for hero section
function initAnimatedBackground() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    // Check if background already exists
    if (hero.querySelector('.hero-animated-bg')) return;
    
    const animatedBg = document.createElement('div');
    animatedBg.className = 'hero-animated-bg';
    
    // Create floating circles
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        animatedBg.appendChild(circle);
    }
    
    // Create floating particles
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        animatedBg.appendChild(particle);
    }
    
    hero.insertBefore(animatedBg, hero.firstChild);
}

// Enhanced scroll animations with stagger effect
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.service-card, .project-card, .team-member, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth parallax effect for hero background
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    let ticking = false;
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxBg = hero.querySelector('.hero-animated-bg');
                
                if (parallaxBg && scrolled < window.innerHeight) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
                }
                
                ticking = false;
            });
            
            ticking = true;
        }
    });
}

// Enhanced Mobile Menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    if (mobileToggle && navMenu && mobileOverlay) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        mobileOverlay.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Close menu on link click
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
}

// Enhanced scroll header effect
function initScrollHeader() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
}

// Tools functionality
window.openTool = (toolName) => {
    // In a real implementation, this would open the actual tool
    // For now, we'll show a modal or redirect to contact
    showNotification(`Opening ${toolName.replace('-', ' ')} tool...`, 'info');
    setTimeout(() => {
        if (window.chatSystem) {
            chatSystem.openChat();
        } else {
            router.navigate('contact');
        }
    }, 1000);
};

// Enhanced card interactions
function initCardInteractions() {
    const cards = document.querySelectorAll('.service-card, .tool-card');
    
    cards.forEach(card => {
        // Add hover effect with mouse tracking
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
        
        // Add click animation
        card.addEventListener('click', function(e) {
            if (!this.querySelector('.btn')) return;
            
            const ripple = document.createElement('div');
            ripple.className = 'ripple-effect';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(16, 185, 129, 0.3);
                width: 0;
                height: 0;
                animation: ripple 0.6s ease-out;
                pointer-events: none;
            `;
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.left = (e.clientX - rect.left - size/2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size/2) + 'px';
            ripple.style.width = ripple.style.height = size + 'px';
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add ripple animation CSS
const rippleCSS = `
@keyframes ripple {
    0% {
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        width: 100px;
        height: 100px;
        opacity: 0;
    }
}
`;

// Inject ripple CSS
if (!document.querySelector('#ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = rippleCSS;
    document.head.appendChild(style);
}

// Enhanced page transitions
function initPageTransitions() {
    const mainContent = document.getElementById('main-content');
    
    // Add transition class
    mainContent.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
    
    // Override router's renderPage to add transitions
    const originalRenderPage = window.renderPage;
    window.renderPage = function(pageName) {
        mainContent.style.opacity = '0';
        mainContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            originalRenderPage(pageName);
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 50);
        }, 150);
    };
}

// Initialize all enhancements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initAnimatedBackground();
    initMagneticCards();
    initScrollAnimations();
    initParallax();
    initMobileMenu();
    initScrollHeader();
    initCardInteractions();
    initPageTransitions();
});

// Re-initialize on route changes
window.addEventListener('hashchange', () => {
    setTimeout(() => {
        initAnimatedBackground();
        initMagneticCards();
        initScrollAnimations();
        initParallax();
        initCardInteractions();
    }, 100);
});

// Initialize page-specific enhancements
function initPageEnhancements() {
    // Add any page-specific JavaScript enhancements here
    const currentPage = window.location.hash.slice(1) || 'home';
    
    // Example: Special handling for specific pages
    if (currentPage === 'contact') {
        // Initialize contact form enhancements
        console.log('Contact page loaded');
    } else if (currentPage.includes('web-development')) {
        // Initialize service page enhancements
        console.log('Service page loaded');
    }
}

// Call page enhancements on load and route change
document.addEventListener('DOMContentLoaded', initPageEnhancements);
window.addEventListener('hashchange', initPageEnhancements);
