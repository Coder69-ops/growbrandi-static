// Security Enhancement Module - Simplified
// Implements essential security features for client-side protection

class SecurityManager {
    constructor() {
        this.requestCounts = new Map();
        this.init();
    }

    init() {
        this.setupInputValidation();
        this.setupFormSecurity();
        this.implementRateLimiting();
        this.setupSecurityHeaders();
        this.setupXSSProtection();
        console.log('🔒 Security manager initialized');
    }

    // Input validation and sanitization
    setupInputValidation() {
        document.addEventListener('input', (event) => {
            if (event.target.matches('input, textarea')) {
                this.validateInput(event.target);
            }
        });
    }

    validateInput(input) {
        const value = input.value;
        const suspiciousPatterns = [
            /<script/i,
            /javascript:/i,
            /on\w+\s*=/i,
            /<iframe/i,
            /eval\(/i
        ];

        const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(value));
        
        if (isSuspicious) {
            input.value = this.sanitizeInput(value);
            this.showSecurityWarning('Potentially harmful content was removed');
            this.logSecurityEvent('suspicious_input', { 
                element: input.name || input.id,
                value: value.substring(0, 50) 
            });
        }
    }

    sanitizeInput(input) {
        return input
            .replace(/<script[^>]*>.*?<\/script>/gi, '')
            .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
            .replace(/javascript:/gi, '')
            .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '');
    }

    // Form security
    setupFormSecurity() {
        document.addEventListener('submit', (event) => {
            if (event.target.matches('form')) {
                this.secureForm(event.target, event);
            }
        });

        // Add security to existing forms
        document.querySelectorAll('form').forEach(form => {
            this.addFormSecurity(form);
        });
    }

    addFormSecurity(form) {
        // Add honeypot if not exists
        if (!form.querySelector('.honeypot')) {
            const honeypot = document.createElement('input');
            honeypot.type = 'text';
            honeypot.name = 'website';
            honeypot.className = 'honeypot';
            honeypot.style.cssText = 'position: absolute; left: -9999px; opacity: 0;';
            honeypot.tabIndex = -1;
            form.appendChild(honeypot);
        }
    }

    secureForm(form, event) {
        // Check honeypot
        const honeypot = form.querySelector('.honeypot');
        if (honeypot && honeypot.value) {
            event.preventDefault();
            this.logSecurityEvent('bot_detected', { form: form.id });
            return false;
        }

        // Rate limiting
        const formId = form.id || 'form';
        if (!this.checkRateLimit(formId, 3, 60000)) { // 3 per minute
            event.preventDefault();
            this.showSecurityWarning('Too many submissions. Please wait.');
            return false;
        }

        return true;
    }

    // Rate limiting
    implementRateLimiting() {
        // Override fetch for API rate limiting
        if (window.fetch) {
            const originalFetch = window.fetch;
            window.fetch = (url, options) => {
                if (!this.checkRateLimit('api', 30, 60000)) { // 30 per minute
                    return Promise.reject(new Error('Rate limit exceeded'));
                }
                return originalFetch(url, options);
            };
        }
    }

    checkRateLimit(key, max, window) {
        const now = Date.now();
        const data = this.requestCounts.get(key) || { count: 0, reset: now + window };
        
        if (now > data.reset) {
            data.count = 0;
            data.reset = now + window;
        }
        
        if (data.count >= max) return false;
        
        data.count++;
        this.requestCounts.set(key, data);
        return true;
    }

    // Security headers (meta tags)
    setupSecurityHeaders() {
        const headers = [
            { name: 'X-Frame-Options', content: 'DENY' },
            { name: 'X-Content-Type-Options', content: 'nosniff' },
            { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' }
        ];

        headers.forEach(header => {
            if (!document.querySelector(`meta[http-equiv="${header.name}"]`)) {
                const meta = document.createElement('meta');
                meta.httpEquiv = header.name;
                meta.content = header.content;
                document.head.appendChild(meta);
            }
        });
    }

    // Basic XSS protection
    setupXSSProtection() {
        // Monitor for frame-busting
        if (window.top !== window.self) {
            this.logSecurityEvent('frame_detected', { referrer: document.referrer });
            window.top.location = window.self.location;
        }

        // Monitor console usage
        let devtools = false;
        setInterval(() => {
            const threshold = 200;
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools) {
                    devtools = true;
                    this.logSecurityEvent('devtools_opened');
                }
            } else {
                devtools = false;
            }
        }, 1000);
    }

    // Security event logging
    logSecurityEvent(type, data = {}) {
        const event = {
            type,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent.substring(0, 100),
            ...data
        };

        console.warn('🔒 Security Event:', event);

        // Send to analytics if available
        if (window.analyticsManager) {
            window.analyticsManager.trackEvent('security_event', event);
        }

        // Store locally (keep last 50)
        const log = JSON.parse(localStorage.getItem('security_log') || '[]');
        log.push(event);
        if (log.length > 50) log.shift();
        localStorage.setItem('security_log', JSON.stringify(log));
    }

    // Security warning display
    showSecurityWarning(message) {
        const warning = document.createElement('div');
        warning.className = 'security-warning';
        warning.innerHTML = `
            <div style="
                position: fixed; top: 20px; right: 20px; z-index: 10000;
                background: #ef4444; color: white; padding: 1rem;
                border-radius: 0.5rem; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                max-width: 300px; font-size: 14px;
            ">
                🔒 ${message}
                <button onclick="this.parentElement.parentElement.remove()" 
                        style="float: right; background: none; border: none; color: white; cursor: pointer;">×</button>
            </div>
        `;
        
        document.body.appendChild(warning);
        setTimeout(() => warning.remove(), 5000);
    }

    // Public API
    getSecurityLog() {
        return JSON.parse(localStorage.getItem('security_log') || '[]');
    }

    clearSecurityLog() {
        localStorage.removeItem('security_log');
    }
}

// Initialize security manager
const securityManager = new SecurityManager();
window.securityManager = securityManager;