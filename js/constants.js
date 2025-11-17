// GrowBrandi Constants
// All data and configuration for the website

const APP_NAME = 'GrowBrandi';
const APP_TAGLINE = 'Expert Digital Growth Agency';

const SERVICES = [
    {
        title: 'High-Converting Websites',
        description: 'Transform your online presence with lightning-fast, conversion-optimized websites that turn visitors into customers. Our expert team creates stunning, mobile-responsive designs built for maximum performance.',
        icon: '🚀',
        features: ['Lightning-Fast Loading (<2s)', 'Mobile-Responsive Design', 'SEO-Optimized Structure', 'Conversion-Focused UX'],
        price: 'Starting at $4,999',
        color: 'emerald',
        category: 'Web Development'
    },
    {
        title: 'Digital Marketing Excellence',
        description: 'Drive qualified traffic and generate high-quality leads with our comprehensive digital marketing strategies. From SEO to PPC, we cover all channels for maximum reach.',
        icon: '💰',
        features: ['Multi-Channel Campaigns', 'Advanced Analytics', 'Lead Generation', 'Performance Tracking'],
        price: 'Starting at $2,999',
        color: 'blue',
        category: 'Digital Marketing'
    },
    {
        title: 'Search Engine Optimization',
        description: 'Dominate search results with our proven SEO strategies. We help businesses achieve top rankings for high-value keywords and drive organic traffic that converts.',
        icon: '🔍',
        features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Local SEO Services'],
        price: 'Starting at $1,999',
        color: 'purple',
        category: 'SEO Services'
    },
    {
        title: 'Brand Strategy & Design',
        description: 'Build a memorable brand that stands out in your market. Our strategic approach combines market research, creative design, and compelling messaging.',
        icon: '🎯',
        features: ['Brand Identity Design', 'Strategic Positioning', 'Visual Identity Systems', 'Brand Guidelines'],
        price: 'Starting at $2,499',
        color: 'orange',
        category: 'Brand Strategy'
    },
    {
        title: 'Marketing Automation',
        description: 'Streamline your marketing efforts with intelligent automation systems. Save time while nurturing leads and maintaining consistent customer engagement.',
        icon: '🤖',
        features: ['Email Marketing Automation', 'Lead Nurturing Systems', 'CRM Integration', 'Performance Analytics'],
        price: 'Starting at $1,499',
        color: 'green',
        category: 'Automation'
    },
    {
        title: 'Shopify E-commerce Solutions',
        description: 'Launch and scale your online store with our comprehensive Shopify development services. From custom themes to advanced integrations, we build stores that sell.',
        icon: '🛒',
        features: ['Custom Shopify Themes', 'App Development', 'Payment Integration', 'Inventory Management'],
        price: 'Starting at $3,499',
        color: 'emerald',
        category: 'E-commerce'
    },
    {
        title: 'Shopify Plus Enterprise',
        description: 'Scale your business with Shopify Plus enterprise solutions. Perfect for high-volume merchants requiring advanced customization and unlimited growth potential.',
        icon: '🏪',
        features: ['Enterprise Customization', 'Multi-Store Management', 'Advanced Analytics', 'Dedicated Support'],
        price: 'Starting at $8,999',
        color: 'purple',
        category: 'Enterprise E-commerce'
    },
    {
        title: 'Shopify Migration & Optimization',
        description: 'Migrate your existing store to Shopify or optimize your current Shopify setup for better performance, conversions, and user experience.',
        icon: '⚡',
        features: ['Platform Migration', 'Performance Optimization', 'Conversion Rate Optimization', 'Mobile Enhancement'],
        price: 'Starting at $2,999',
        color: 'blue',
        category: 'E-commerce Optimization'
    },
    {
        title: 'Conversion Rate Optimization',
        description: 'Maximize your website\'s potential by turning more visitors into customers. Our data-driven approach identifies and fixes conversion barriers.',
        icon: '📈',
        features: ['A/B Testing', 'User Experience Analysis', 'Landing Page Optimization', 'Conversion Tracking'],
        price: 'Starting at $1,999',
        color: 'cyan',
        category: 'Optimization'
    }
];

const PROJECTS = [
    {
        title: "E-commerce Fashion Platform",
        category: "Web Development",
        description: "A modern, responsive e-commerce platform with advanced filtering, wishlist, and seamless checkout experience for a leading fashion brand.",
        imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
        rating: 5,
        completionTime: '8 weeks',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        client: 'Fashion Forward Co.',
        results: ['300% increase in online sales', '50% better conversion rate', '40% faster page load times']
    },
    {
        title: "SaaS Analytics Dashboard",
        category: "UI/UX Design",
        description: "Intuitive dashboard design for a complex analytics platform with real-time data visualization and comprehensive reporting capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
        rating: 5,
        completionTime: '6 weeks',
        technologies: ['Figma', 'React', 'D3.js', 'TypeScript'],
        client: 'DataTech Solutions',
        results: ['60% improvement in user engagement', '90% user satisfaction score', '35% reduction in support tickets']
    },
    {
        title: "Restaurant Chain Mobile App",
        category: "Mobile Development",
        description: "Cross-platform mobile app with online ordering, loyalty program, and location-based services for a major restaurant chain.",
        imageUrl: "https://images.unsplash.com/photo-1553678324-f84674bd7b24?w=800",
        rating: 4.8,
        completionTime: '12 weeks',
        technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps'],
        client: 'Gourmet Chains Inc.',
        results: ['500K+ app downloads', '75% increase in mobile orders', '95% app store rating']
    },
    {
        title: "FinTech Startup Brand Identity",
        category: "Brand Strategy",
        description: "Complete brand identity and website for a revolutionary fintech startup focusing on micro-investments and wealth building.",
        imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=800",
        rating: 5,
        completionTime: '10 weeks',
        technologies: ['Brand Design', 'Web Development', 'Motion Graphics'],
        client: 'InvestSmart',
        results: ['$2M seed funding raised', 'Featured in TechCrunch', '10K+ beta signups']
    }
];

const TESTIMONIALS = [
    {
        quote: "GrowBrandi transformed our struggling $50K/month business into a $300K/month powerhouse in just 8 months. The ROI is absolutely insane - they've literally changed our lives!",
        author: "Sarah Chen",
        company: "CEO, TechStart Solutions",
        rating: 5,
        result: "420% Revenue Increase",
        timeframe: "8 months",
        revenue: "$50K → $300K/month"
    },
    {
        quote: "They cut our customer acquisition cost by 65% while TRIPLING our lead quality. Best investment we've ever made - our sales team can barely keep up with all the qualified leads!",
        author: "Marcus Rodriguez",
        company: "Founder, EcoProducts Inc",
        rating: 5,
        result: "65% Cost Reduction",
        timeframe: "6 months",
        revenue: "3x qualified leads"
    },
    {
        quote: "From 50 leads per month to 450 qualified leads per month in just 4 months. Our revenue went from $25K to $180K monthly. These guys are absolute wizards!",
        author: "Jennifer Walsh",
        company: "CMO, HealthTech Pro",
        rating: 5,
        result: "800% Lead Increase",
        timeframe: "4 months",
        revenue: "$25K → $180K/month"
    },
    {
        quote: "We were skeptical about the 300% growth promise, but they delivered 420% growth in our first year. Now we're the market leader in our niche. Worth every penny!",
        author: "Robert Kim",
        company: "CEO, CloudTech Systems",
        rating: 5,
        result: "420% Growth Rate",
        timeframe: "12 months",
        revenue: "Market leadership achieved"
    }
];

const TEAM_MEMBERS = [
    {
        name: "Sarah Chen",
        role: "CEO & Creative Director",
        description: "10+ years leading digital transformation projects with expertise in brand strategy and user experience design.",
        image: "https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg",
        specialties: ["Brand Strategy", "UX Design", "Leadership"]
    },
    {
        name: "Marcus Johnson",
        role: "Head of Development",
        description: "Full-stack developer with passion for creating scalable, high-performance web applications using modern technologies.",
        image: "https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg",
        specialties: ["React/Next.js", "Node.js", "Cloud Architecture"]
    },
    {
        name: "Elena Rodriguez",
        role: "GrowBrandi Solutions Architect",
        description: "Technology specialist focused on integrating intelligent solutions that drive business growth and user engagement through GrowBrandi's innovative platform.",
        image: "https://images.stockcake.com/public/5/5/a/55aa0081-3d0d-495b-b649-4838f12aedd3_large/professional-young-man-stockcake.jpg",
        specialties: ["Smart Analytics", "GrowBrandi Integration", "Business Intelligence"]
    },
    {
        name: "David Kim",
        role: "Digital Marketing Strategist",
        description: "Performance marketing expert who combines data-driven insights with creative campaigns to maximize ROI.",
        image: "https://media.istockphoto.com/id/1391718981/photo/portrait-of-a-confident-young-businessman-standing-with-his-arms-crossed-in-an-office.jpg?s=612x612",
        specialties: ["SEO/SEM", "Content Strategy", "Analytics"]
    }
];

const COMPANY_STATS = [
    { number: '$50M+', label: 'Revenue Generated', icon: '💰' },
    { number: '500+', label: 'Businesses Scaled', icon: '🚀' },
    { number: '300%', label: 'Average Growth Rate', icon: '📈' },
    { number: '98%', label: 'Client Success Rate', icon: '🎯' }
];

const FAQ_DATA = [
    {
        question: 'What makes GrowBrandi different from other digital agencies?',
        answer: 'GrowBrandi combines intelligent data insights with creative expertise to deliver exceptional digital solutions. Our proprietary growth methodology, cutting-edge tech stack, and focus on measurable results set us apart from traditional agencies. We specialize in modern technologies and platforms including Shopify, React, and advanced automation systems.'
    },
    {
        question: 'How long does a typical Shopify project take?',
        answer: 'Shopify projects vary by complexity. Basic store setups take 2-4 weeks, custom theme development takes 4-8 weeks, and Shopify Plus enterprise solutions take 8-12 weeks. We provide detailed project timelines and milestones during our initial consultation.'
    },
    {
        question: 'Do you provide ongoing Shopify support and maintenance?',
        answer: 'Yes! We offer comprehensive Shopify support packages including theme updates, app management, security monitoring, performance optimization, inventory management assistance, and 24/7 technical support to keep your store running smoothly.'
    },
    {
        question: 'Can you migrate my existing store to Shopify?',
        answer: 'Absolutely! We specialize in seamless platform migrations to Shopify from WooCommerce, Magento, BigCommerce, and other e-commerce platforms. We handle product data, customer information, order history, and SEO preservation during the migration process.'
    },
    {
        question: 'What Shopify services do you offer?',
        answer: 'We offer complete Shopify services including custom theme development, Shopify Plus enterprise solutions, app development, payment gateway integration, inventory management, SEO optimization, performance enhancement, and ongoing maintenance and support.'
    },
    {
        question: 'Do you work with Shopify Plus for enterprise clients?',
        answer: 'Yes! We are experienced Shopify Plus partners, helping enterprise clients with advanced customizations, multi-store management, complex integrations, and high-volume transaction handling. Our team is certified in Shopify Plus development and optimization.'
    }
];

const CONTACT_INFO = {
    email: 'hello@growbrandi.com',
    phone: '+1 (555) 123-4567',
    address: 'San Francisco, CA',
    social: {
        linkedin: 'https://linkedin.com/company/growbrandi',
        twitter: 'https://twitter.com/growbrandi',
        instagram: 'https://instagram.com/growbrandi'
    }
};

// Chat suggestions
const INITIAL_SUGGESTIONS = [
    "Get instant project estimate",
    "Book free strategy call",
    "What's your pricing?",
    "Show me results you deliver"
];

const CONTEXTUAL_SUGGESTIONS = {
    project: [
        "Get instant cost estimate",
        "When can we start?",
        "Book project kickoff call",
        "What's the guaranteed ROI?"
    ],
    services: [
        "Which service gets fastest ROI?",
        "What's included in premium package?",
        "Book strategy consultation now",
        "Show me client success stories"
    ],
    pricing: [
        "What's your starting price?",
        "Any limited-time offers?",
        "Book free consultation call",
        "What ROI can I expect?"
    ],
    consultation: [
        "Book free call this week",
        "What will we discuss?",
        "How fast can we start?",
        "Any spots left this month?"
    ]
};
