// Configuration Template
// Copy this to config.js and update with your values

const CONFIG = {
    // API Configuration
    api: {
        // Google Gemini API
        // Get your key from: https://makersuite.google.com/app/apikey
        geminiApiKey: '', // Leave empty - users will add via UI
        geminiModel: 'gemini-1.5-flash-latest',
        
        // Optional: Form submission endpoint
        contactFormEndpoint: '', // e.g., 'https://api.example.com/contact'
        
        // Optional: Newsletter signup endpoint
        newsletterEndpoint: '', // e.g., 'https://api.example.com/newsletter'
    },
    
    // Site Configuration
    site: {
        name: 'GrowBrandi',
        tagline: 'Expert Digital Growth Agency',
        url: 'https://www.growbrandi.com',
        logo: '/images/logo.png',
        
        // SEO
        description: 'Transform your digital presence with GrowBrandi - expert web development, UI/UX design, and AI-powered solutions.',
        keywords: 'digital agency, web development, UI/UX design, brand strategy, SEO, AI solutions',
        author: 'GrowBrandi',
        
        // Social Media
        social: {
            twitter: '@growbrandi',
            facebook: 'growbrandi',
            linkedin: 'company/growbrandi',
            instagram: 'growbrandi',
        },
    },
    
    // Contact Information
    contact: {
        email: 'hello@growbrandi.com',
        phone: '+1 (555) 123-4567',
        address: '123 Innovation Drive, Suite 200, San Francisco, CA 94105',
        hours: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
        
        // Support
        supportEmail: 'support@growbrandi.com',
        salesEmail: 'sales@growbrandi.com',
    },
    
    // Feature Flags
    features: {
        enableChat: true,
        enableNewsletter: true,
        enableBlog: false,
        enableDarkMode: false,
        enablePWA: false,
        enableAnalytics: false,
        
        // AI Tools
        enableSloganGenerator: true,
        enableBusinessIntel: true,
        enableProjectEstimator: true,
    },
    
    // Analytics (Optional)
    analytics: {
        // Google Analytics
        googleAnalyticsId: '', // e.g., 'G-XXXXXXXXXX'
        
        // Facebook Pixel
        facebookPixelId: '', // e.g., '1234567890'
        
        // Microsoft Clarity
        clarityId: '', // e.g., 'abc123xyz'
    },
    
    // Performance
    performance: {
        // Lazy load images
        lazyLoadImages: true,
        
        // Animation performance
        reducedMotion: false, // Respect user's prefers-reduced-motion
        
        // Cache duration (in days)
        cacheDuration: 7,
    },
    
    // Localization (Future)
    locale: {
        default: 'en-US',
        supported: ['en-US'],
        currency: 'USD',
        dateFormat: 'MM/DD/YYYY',
    },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
