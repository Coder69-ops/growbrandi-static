// Animation and interaction handlers

// Intersection Observer for scroll animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.service-card, .stat-card, .tool-card').forEach(el => {
        observer.observe(el);
    });
};

// Header scroll effect
const handleHeaderScroll = () => {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};

// Mobile menu toggle
const setupMobileMenu = () => {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            toggle.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
};

// Smooth scroll for anchor links
const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
};

// Parallax effect for hero background
const setupParallax = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-background');
        
        parallaxElements.forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });
};

// Animated counter for stats
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat-number');
    
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.textContent.includes('+') ? '+' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const text = entry.target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(number)) {
                    animateValue(entry.target, 0, number, 2000);
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
};

// Floating animation for FABs
const setupFABAnimations = () => {
    const fabs = document.querySelectorAll('.fab');
    
    fabs.forEach((fab, index) => {
        fab.style.animationDelay = `${index * 0.1}s`;
    });
};

// Loading overlay control
const showLoading = () => {
    document.getElementById('loading-overlay').classList.remove('hidden');
};

const hideLoading = () => {
    document.getElementById('loading-overlay').classList.add('hidden');
};

// Tools modal control
const setupToolsModal = () => {
    const toolsModal = document.getElementById('ai-tools-modal');
    const toolsClose = document.getElementById('tools-close');
    
    if (toolsModal && toolsClose) {
        toolsClose.addEventListener('click', () => {
            toolsModal.classList.add('hidden');
        });
        
        toolsModal.addEventListener('click', (e) => {
            if (e.target === toolsModal) {
                toolsModal.classList.add('hidden');
            }
        });
    }
    
    // FAB tools button is handled in main.js now
};

// Enhanced contact assistant
const setupContactAssistant = () => {
    // FAB contact button is handled in main.js now
    // This function can be used for other contact-related enhancements
    console.log('Contact assistant ready');
};

// Particle background effect
const createParticles = () => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(16, 185, 129, 0.4);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${6 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        hero.appendChild(particle);
    }
};

// Cursor trail effect (optional)
const setupCursorTrail = () => {
    let mouseX = 0, mouseY = 0;
    let circleX = 0, circleY = 0;
    
    const circle = document.createElement('div');
    circle.style.cssText = `
        position: fixed;
        width: 40px;
        height: 40px;
        border: 2px solid rgba(16, 185, 129, 0.5);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease-out;
        display: none;
    `;
    document.body.appendChild(circle);
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        circle.style.display = 'block';
    });
    
    function animate() {
        circleX += (mouseX - circleX) * 0.1;
        circleY += (mouseY - circleY) * 0.1;
        
        circle.style.left = circleX - 20 + 'px';
        circle.style.top = circleY - 20 + 'px';
        
        requestAnimationFrame(animate);
    }
    
    animate();
};

// Form validation
const setupFormValidation = () => {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'var(--color-error)';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });
};

// Tooltip system
const setupTooltips = () => {
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = e.target.dataset.tooltip;
            tooltip.style.cssText = `
                position: absolute;
                background: var(--bg-secondary);
                color: var(--text-primary);
                padding: 0.5rem 1rem;
                border-radius: 0.5rem;
                font-size: 0.875rem;
                z-index: 1000;
                pointer-events: none;
            `;
            document.body.appendChild(tooltip);
            
            const rect = e.target.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
            
            e.target.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
};

// Initialize all animations and interactions
const initAnimations = () => {
    handleHeaderScroll();
    setupMobileMenu();
    setupSmoothScroll();
    setupParallax();
    animateCounters();
    setupFABAnimations();
    setupToolsModal();
    setupContactAssistant();
    setupFormValidation();
    setupTooltips();
    observeElements();
    
    // Optional effects (comment out if too heavy)
    // createParticles();
    // setupCursorTrail();
};

// Run on page load
document.addEventListener('DOMContentLoaded', initAnimations);

// Re-run on route change
window.addEventListener('hashchange', () => {
    setTimeout(() => {
        observeElements();
        animateCounters();
    }, 100);
});
