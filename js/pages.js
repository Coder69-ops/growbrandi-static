// Page templates and content generation

const Pages = {
    // Home Page
    home: () => {
        return `
            <section class="hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
                
                <div class="container hero-content">
                    <div class="hero-badge">
                        <span class="pulse-dot"></span>
                        <span>🚀 Trusted by 500+ Growing Businesses</span>
                    </div>
                    
                    <h1 class="hero-title">
                        Turn Your Business Into a<br>
                        <span class="text-gradient">Revenue-Generating Machine</span>
                    </h1>
                    
                    <p class="hero-description">
                        We've helped businesses generate <strong class="text-gradient">$50M+ in revenue</strong> 
                        with our proven growth system. Stop leaving money on the table - let's scale your business <strong>300-500%</strong> in the next 12 months.
                    </p>
                    
                    <div class="hero-stats">
                        <div class="stat-item">
                            <div class="stat-number">500+</div>
                            <div class="stat-label">Clients Scaled</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">$50M+</div>
                            <div class="stat-label">Revenue Generated</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">300%</div>
                            <div class="stat-label">Avg Growth Rate</div>
                        </div>
                    </div>
                    
                    <div class="hero-cta">
                        <button class="btn btn-primary btn-lg hero-cta-primary" onclick="chatSystem.openChat()">
                            🎆 Get FREE Growth Audit - Limited Time!
                        </button>
                        <button class="btn btn-outline btn-lg" onclick="router.navigate('case-studies')">
                            📊 See Success Stories
                        </button>
                    </div>
                    
                    <div class="hero-urgency">
                        <span class="urgency-text">⚡ Only 3 spots left this month - Book your consultation before it's too late!</span>
                    </div>
                    
                    <div class="scroll-indicator">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            <!-- Stats Section -->
            <section class="section">
                <div class="container">
                    <div class="stats-grid">
                        ${COMPANY_STATS.map(stat => `
                            <div class="stat-card slide-up">
                                <div class="stat-icon">${stat.icon}</div>
                                <div class="stat-number">${stat.number}</div>
                                <div class="stat-label">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Services Section -->
            <section class="section" id="services">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            🔥 PROVEN RESULTS
                        </div>
                        <h2 class="section-title">
                            The Growth System That's Generated <span class="text-gradient">$50M+ in Revenue</span>
                        </h2>
                        <p class="section-description">
                            Our battle-tested strategies don't just look pretty - they <strong>make you money</strong>. 
                            Here's exactly how we'll transform your business into a revenue-generating machine.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        ${SERVICES.map(service => `
                            <div class="service-card fade-in">
                                <div class="service-category">${service.category}</div>
                                <div class="service-icon">${service.icon}</div>
                                <h3 class="service-title">${service.title}</h3>
                                <p class="service-description">${service.description}</p>
                                <ul class="service-features">
                                    ${service.features.map(feature => `<li><span class="feature-checkmark">✓</span>${feature}</li>`).join('')}
                                </ul>
                                <div class="service-price">${service.price}</div>
                                <button class="btn btn-primary" onclick="router.navigate('services')">
                                    Learn More
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Projects Section -->
            <section class="section" id="projects">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                            </svg>
                            FEATURED PROJECTS
                        </div>
                        <h2 class="section-title">
                            Portfolio of <span class="text-gradient">Exceptional Work</span>
                        </h2>
                    </div>
                    
                    <div class="services-grid">
                        ${PROJECTS.map(project => `
                            <div class="service-card fade-in">
                                <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 1rem; margin-bottom: 1rem;">
                                <div class="service-badge" style="background: var(--gradient-primary); color: white; display: inline-block; padding: 0.25rem 1rem; border-radius: 9999px; font-size: 0.75rem; margin-bottom: 1rem;">
                                    ${project.category}
                                </div>
                                <h3 class="service-title">${project.title}</h3>
                                <p class="service-description">${project.description}</p>
                                <div class="service-price">${project.client}</div>
                                <button class="btn btn-primary" onclick="router.navigate('case-studies')">
                                    View Case Study
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <!-- Testimonials Section -->
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                            💰 REAL RESULTS FROM REAL BUSINESSES
                        </div>
                        <h2 class="section-title">
                            See Why Smart Business Owners Choose <span class="text-gradient">GrowBrandi</span>
                        </h2>
                        <p class="section-description">
                            Don't just take our word for it - see the incredible transformations our clients have experienced
                        </p>
                    </div>
                    
                    <div class="services-grid" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));">
                        ${TESTIMONIALS.map(testimonial => `
                            <div class="service-card fade-in" style="text-align: left;">
                                <div style="font-size: 3rem; color: var(--color-primary); margin-bottom: 1rem;">"</div>
                                <p style="font-size: 1.125rem; font-style: italic; margin-bottom: 1.5rem;">${testimonial.quote}</p>
                                <div style="display: flex; gap: 1rem; align-items: center;">
                                    <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--gradient-primary);"></div>
                                    <div>
                                        <div style="font-weight: 700; color: var(--text-primary);">${testimonial.author}</div>
                                        <div style="font-size: 0.875rem; color: var(--color-primary);">${testimonial.company}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    // Services Page
    services: () => {
        return `
            <section class="hero alt-hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        🚀 COMPREHENSIVE SERVICES
                    </div>
                    <h1 class="hero-title">
                        Premium <span class="text-gradient">Digital Solutions</span><br>
                        That Drive Real Results
                    </h1>
                    <p class="hero-description">
                        From custom Shopify stores to advanced marketing automation, we deliver comprehensive digital solutions 
                        that transform businesses. Our expert team combines cutting-edge technology with proven strategies to 
                        accelerate your growth and maximize your online potential.
                    </p>
                </div>
            </section>
            
            <section class="section alt-bg">
                <div class="container">
                    <div class="services-grid">
                        ${SERVICES.map(service => `
                            <div class="service-card fade-in">
                                <div class="service-category">${service.category}</div>
                                <div class="service-icon">${service.icon}</div>
                                <h3 class="service-title">${service.title}</h3>
                                <p class="service-description">${service.description}</p>
                                <ul class="service-features">
                                    ${service.features.map(feature => `<li><span class="feature-checkmark">✓</span>${feature}</li>`).join('')}
                                </ul>
                                <div class="service-price">${service.price}</div>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">
                                    Get Started
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    
                    <!-- CTA Section -->
                    <div class="glass-effect" style="padding: 3rem; border-radius: 2rem; text-align: center; margin-top: 3rem;">
                        <h3 style="font-size: 2rem; margin-bottom: 1rem;">
                            Ready to <span class="text-gradient">Elevate Your Business?</span>
                        </h3>
                        <p style="font-size: 1.125rem; color: var(--text-secondary); margin-bottom: 2rem;">
                            Get started with a free consultation. Our experts will analyze your needs 
                            and recommend the perfect service package for your business goals.
                        </p>
                        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                            <button class="btn btn-primary btn-lg" onclick="router.navigate('contact')">
                                Get Free Consultation
                            </button>
                            <button class="btn btn-secondary btn-lg" onclick="router.navigate('case-studies')">
                                View Our Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // About Page
    about: () => {
        return `
            <section class="hero alt-hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                        🌟 ABOUT GROWBRANDI
                    </div>
                    <h1 class="hero-title">
                        Transforming Businesses Through <span class="text-gradient">Digital Excellence</span>
                    </h1>
                    <p class="hero-description">
                        Since our founding, GrowBrandi has been at the forefront of digital innovation, helping businesses 
                        of all sizes achieve extraordinary growth through strategic technology solutions. We specialize in 
                        Shopify development, custom web applications, and comprehensive digital marketing strategies that deliver measurable results.
                    </p>
                </div>
            </section>
            
            <section class="section alt-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Our <span class="text-gradient">Mission & Values</span>
                        </h2>
                        <p class="section-description">
                            We believe in the power of technology to transform businesses and create meaningful impact. 
                            Our mission is to make advanced digital solutions accessible to businesses of all sizes.
                        </p>
                    </div>
                    
                    <div class="glass-effect" style="padding: 3rem; border-radius: 2rem; margin-bottom: 3rem;">
                        <h2 style="margin-bottom: 1.5rem;">Our Mission</h2>
                        <p style="font-size: 1.125rem; line-height: 1.8;">
                            At GrowBrandi, we believe every business deserves access to world-class digital solutions 
                            that drive real results. Our mission is to empower businesses of all sizes with the tools, 
                            strategies, and expertise they need to thrive in the digital age. We combine data-driven 
                            insights with creative excellence to deliver solutions that not only meet but exceed expectations.
                        </p>
                    </div>
                    
                    <div class="stats-grid" style="margin: 3rem 0;">
                        <div class="stat-card">
                            <div class="stat-number">300%</div>
                            <div class="stat-label">Average Revenue Growth</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">Client Satisfaction</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">500+</div>
                            <div class="stat-label">Projects Completed</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Support Available</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Team Page
    team: () => {
        return `
            <section class="hero alt-hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                        👥 OUR EXPERT TEAM
                    </div>
                    <h1 class="hero-title">
                        Meet the <span class="text-gradient">Digital Experts</span><br>
                        Driving Your Success
                    </h1>
                    <p class="hero-description">
                        Our diverse team of specialists brings together decades of experience in web development, 
                        Shopify e-commerce, digital marketing, and business strategy. We're passionate about helping 
                        businesses achieve extraordinary growth through innovative digital solutions.
                    </p>
                </div>
            </section>
            
            <section class="section alt-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Expertise That <span class="text-gradient">Delivers Results</span>
                        </h2>
                        <p class="section-description">
                            Each team member is a specialist in their field, committed to delivering exceptional 
                            results and providing ongoing support for your business growth.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        ${TEAM_MEMBERS.map(member => `
                            <div class="service-card fade-in">
                                <img src="${member.image}" alt="${member.name}" 
                                     style="width: 120px; height: 120px; border-radius: 1.5rem; margin: 0 auto 1.5rem; object-fit: cover; display: block;">
                                <h3 class="service-title">${member.name}</h3>
                                <div style="color: var(--color-primary); font-weight: 600; margin-bottom: 1rem;">${member.role}</div>
                                <p class="service-description">${member.description}</p>
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                                    ${member.specialties.map(specialty => `
                                        <span style="padding: 0.25rem 0.75rem; background: var(--bg-tertiary); border-radius: 9999px; font-size: 0.75rem;">
                                            ${specialty}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    // Contact Page
    contact: () => {
        return `
            <section class="hero alt-hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                        </svg>
                        📞 GET IN TOUCH
                    </div>
                    <h1 class="hero-title">
                        Ready to <span class="text-gradient">Grow Your Business?</span><br>
                        Let's Talk
                    </h1>
                    <p class="hero-description">
                        Whether you need a custom Shopify store, digital marketing strategy, or complete business transformation, 
                        our team of experts is ready to help. Get started with a free consultation and discover how we can 
                        accelerate your business growth with proven digital solutions.
                    </p>
                    <div class="hero-cta">
                        <button class="btn btn-primary btn-lg" onclick="chatSystem.openChat()">
                            🚀 Start Free Consultation
                        </button>
                        <button class="btn btn-outline btn-lg" onclick="document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'})">
                            📋 Send Message
                        </button>
                    </div>
                </div>
            </section>
            
            <section class="section alt-bg">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Multiple Ways to <span class="text-gradient">Connect</span>
                        </h2>
                        <p class="section-description">
                            Choose the method that works best for you. We're here to answer your questions 
                            and provide expert guidance for your digital transformation journey.
                        </p>
                    </div>
                    
                    <div style="max-width: 800px; margin: 0 auto;">
                        <div class="glass-effect" style="padding: 3rem; border-radius: 2rem;">
                            <form id="contact-form" onsubmit="handleContactSubmit(event)">
                                <div style="margin-bottom: 1.5rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Your Name</label>
                                    <input type="text" required class="chat-input" style="width: 100%;" placeholder="John Doe">
                                </div>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email Address</label>
                                    <input type="email" required class="chat-input" style="width: 100%;" placeholder="john@example.com">
                                </div>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Phone Number</label>
                                    <input type="tel" class="chat-input" style="width: 100%;" placeholder="+1 (555) 123-4567">
                                </div>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Service Interested In</label>
                                    <select class="chat-input" style="width: 100%;">
                                        <option>Web Development</option>
                                        <option>UI/UX Design</option>
                                        <option>Brand Strategy</option>
                                        <option>SEO Optimization</option>
                                        <option>Digital Marketing</option>
                                        <option>Automation Solutions</option>
                                    </select>
                                </div>
                                
                                <div style="margin-bottom: 1.5rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Message</label>
                                    <textarea class="chat-input" style="width: 100%; min-height: 150px; resize: vertical;" 
                                              placeholder="Tell us about your project..."></textarea>
                                </div>
                                
                                <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        
                        <!-- Contact Info -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-top: 3rem;">
                            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 1rem;">📧</div>
                                <h4 style="margin-bottom: 0.5rem;">Email Us</h4>
                                <a href="mailto:${CONTACT_INFO.email}" style="color: var(--color-primary);">${CONTACT_INFO.email}</a>
                            </div>
thw                            
                            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 1rem;">📞</div>
                                <h4 style="margin-bottom: 0.5rem;">Call Us</h4>
                                <a href="tel:${CONTACT_INFO.phone}" style="color: var(--color-primary);">${CONTACT_INFO.phone}</a>
                            </div>
                            
                            <div class="glass-effect" style="padding: 2rem; border-radius: 1.5rem; text-align: center;">
                                <div style="font-size: 2rem; margin-bottom: 1rem;">📍</div>
                                <h4 style="margin-bottom: 0.5rem;">Visit Us</h4>
                                <p style="color: var(--text-secondary);">${CONTACT_INFO.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Case Studies Page
    'case-studies': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">SUCCESS STORIES</div>
                        <h1 class="section-title">
                            Real Results for<br>
                            <span class="text-gradient">Real Businesses</span>
                        </h1>
                        <p class="section-description">
                            Discover how we've helped businesses like yours achieve extraordinary growth.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        ${PROJECTS.map(project => `
                            <div class="service-card fade-in">
                                <img src="${project.imageUrl}" alt="${project.title}" 
                                     style="width: 100%; height: 250px; object-fit: cover; border-radius: 1rem; margin-bottom: 1.5rem;">
                                <div class="service-badge" style="background: var(--gradient-primary); color: white; display: inline-block; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.875rem; margin-bottom: 1rem;">
                                    ${project.category}
                                </div>
                                <h3 class="service-title">${project.title}</h3>
                                <p class="service-description">${project.description}</p>
                                
                                <div style="margin: 1.5rem 0;">
                                    <h4 style="font-size: 1rem; margin-bottom: 0.75rem; color: var(--color-primary);">Key Results:</h4>
                                    <ul class="service-features">
                                        ${project.results.map(result => `<li>${result}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
                                    ${project.technologies.map(tech => `
                                        <span style="padding: 0.25rem 0.75rem; background: var(--bg-tertiary); border-radius: 9999px; font-size: 0.75rem;">
                                            ${tech}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    // Process Page
    process: () => {
        return `
            <section class="hero" style="min-height: 60vh; padding-top: 8rem;">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        ⚙️ OUR PROVEN METHODOLOGY
                    </div>
                    <h1 class="hero-title">
                        How We <span class="text-gradient">Transform</span><br>
                        Your Digital Presence
                    </h1>
                    <p class="hero-description">
                        Our systematic approach combines strategic planning, cutting-edge technology, and continuous optimization 
                        to deliver exceptional results. From initial consultation to post-launch support, we ensure every project 
                        exceeds expectations and drives measurable business growth.
                    </p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Our <span class="text-gradient">6-Step Process</span>
                        </h2>
                        <p class="section-description">
                            Each project follows our proven methodology, ensuring consistent quality, 
                            clear communication, and outstanding results every time.
                        </p>
                    </div>
                    
                    <div class="process-timeline">
                        <div class="process-step fade-in">
                            <div class="process-number">01</div>
                            <div class="process-content">
                                <h3>Discovery & Strategy</h3>
                                <p>We deep-dive into your business goals, target audience, and market landscape to create a comprehensive strategy.</p>
                                <ul class="process-features">
                                    <li>Stakeholder interviews</li>
                                    <li>Market research & analysis</li>
                                    <li>Competitor analysis</li>
                                    <li>Goal setting & KPI definition</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="process-step fade-in">
                            <div class="process-number">02</div>
                            <div class="process-content">
                                <h3>Planning & Design</h3>
                                <p>We create detailed project plans, wireframes, and visual designs that align with your brand and goals.</p>
                                <ul class="process-features">
                                    <li>Information architecture</li>
                                    <li>User experience design</li>
                                    <li>Visual design & branding</li>
                                    <li>Technical specifications</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="process-step fade-in">
                            <div class="process-number">03</div>
                            <div class="process-content">
                                <h3>Development & Implementation</h3>
                                <p>Our expert developers bring your vision to life using cutting-edge technologies and best practices.</p>
                                <ul class="process-features">
                                    <li>Agile development methodology</li>
                                    <li>Regular progress updates</li>
                                    <li>Quality assurance testing</li>
                                    <li>Performance optimization</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="process-step fade-in">
                            <div class="process-number">04</div>
                            <div class="process-content">
                                <h3>Testing & Optimization</h3>
                                <p>Rigorous testing ensures everything works flawlessly across all devices and platforms.</p>
                                <ul class="process-features">
                                    <li>Cross-browser testing</li>
                                    <li>Mobile responsiveness</li>
                                    <li>Performance testing</li>
                                    <li>User acceptance testing</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="process-step fade-in">
                            <div class="process-number">05</div>
                            <div class="process-content">
                                <h3>Launch & Deployment</h3>
                                <p>We handle the technical aspects of launching your project and ensure a smooth go-live process.</p>
                                <ul class="process-features">
                                    <li>Production deployment</li>
                                    <li>DNS configuration</li>
                                    <li>SSL certificates</li>
                                    <li>Monitoring setup</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="process-step fade-in">
                            <div class="process-number">06</div>
                            <div class="process-content">
                                <h3>Support & Growth</h3>
                                <p>Ongoing support and optimization to ensure your continued success and growth.</p>
                                <ul class="process-features">
                                    <li>24/7 technical support</li>
                                    <li>Performance monitoring</li>
                                    <li>Regular updates</li>
                                    <li>Growth strategy consulting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Individual Service Pages
    'web-development': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">WEB DEVELOPMENT</div>
                        <h1 class="section-title">
                            Custom <span class="text-gradient">Web Solutions</span><br>
                            That Drive Results
                        </h1>
                        <p class="section-description">
                            From responsive websites to complex web applications, we build digital experiences that convert visitors into customers.
                        </p>
                    </div>

                    <div class="service-details-grid">
                        <div class="service-detail-card glass-effect">
                            <h3>🚀 Performance Optimized</h3>
                            <p>Lightning-fast loading speeds with optimized code, image compression, and CDN integration.</p>
                        </div>
                        <div class="service-detail-card glass-effect">
                            <h3>📱 Mobile-First Design</h3>
                            <p>Responsive designs that look perfect on all devices, ensuring optimal user experience everywhere.</p>
                        </div>
                        <div class="service-detail-card glass-effect">
                            <h3>🔒 Security & Reliability</h3>
                            <p>Enterprise-grade security measures and reliable hosting infrastructure for peace of mind.</p>
                        </div>
                        <div class="service-detail-card glass-effect">
                            <h3>⚡ Modern Technologies</h3>
                            <p>Built with cutting-edge frameworks like React, Vue.js, and Node.js for scalability.</p>
                        </div>
                    </div>

                    <div class="pricing-section">
                        <h2 class="text-center">Choose Your Package</h2>
                        <div class="pricing-grid">
                            <div class="pricing-card glass-effect">
                                <h3>Starter</h3>
                                <div class="price">$2,999</div>
                                <ul class="pricing-features">
                                    <li>5-page responsive website</li>
                                    <li>Mobile optimization</li>
                                    <li>Basic SEO setup</li>
                                    <li>Contact form integration</li>
                                    <li>1 month support</li>
                                </ul>
                                <button class="btn btn-outline" onclick="router.navigate('contact')">Get Started</button>
                            </div>
                            <div class="pricing-card glass-effect featured">
                                <div class="popular-badge">Most Popular</div>
                                <h3>Professional</h3>
                                <div class="price">$7,999</div>
                                <ul class="pricing-features">
                                    <li>15-page custom website</li>
                                    <li>CMS integration</li>
                                    <li>Advanced SEO optimization</li>
                                    <li>E-commerce functionality</li>
                                    <li>Analytics setup</li>
                                    <li>3 months support</li>
                                </ul>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">Get Started</button>
                            </div>
                            <div class="pricing-card glass-effect">
                                <h3>Enterprise</h3>
                                <div class="price">$15,999</div>
                                <ul class="pricing-features">
                                    <li>Unlimited pages</li>
                                    <li>Custom web application</li>
                                    <li>Third-party integrations</li>
                                    <li>Advanced security</li>
                                    <li>Performance optimization</li>
                                    <li>12 months support</li>
                                </ul>
                                <button class="btn btn-outline" onclick="router.navigate('contact')">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    'ui-ux-design': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">UI/UX DESIGN</div>
                        <h1 class="section-title">
                            Beautiful Designs<br>
                            That <span class="text-gradient">Convert</span>
                        </h1>
                        <p class="section-description">
                            User-centered design that creates intuitive experiences and drives business growth through thoughtful design decisions.
                        </p>
                    </div>

                    <div class="design-process">
                        <h2 class="text-center mb-4">Our Design Process</h2>
                        <div class="design-steps">
                            <div class="design-step">
                                <div class="step-icon">🔍</div>
                                <h3>Research</h3>
                                <p>User research, competitor analysis, and market insights</p>
                            </div>
                            <div class="design-step">
                                <div class="step-icon">📝</div>
                                <h3>Wireframing</h3>
                                <p>Information architecture and user flow mapping</p>
                            </div>
                            <div class="design-step">
                                <div class="step-icon">🎨</div>
                                <h3>Visual Design</h3>
                                <p>Beautiful interfaces that align with your brand</p>
                            </div>
                            <div class="design-step">
                                <div class="step-icon">🔄</div>
                                <h3>Prototyping</h3>
                                <p>Interactive prototypes for testing and validation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    'brand-strategy': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">BRAND STRATEGY</div>
                        <h1 class="section-title">
                            Build a <span class="text-gradient">Memorable Brand</span><br>
                            That Stands Out
                        </h1>
                        <p class="section-description">
                            Strategic brand development that creates emotional connections with your audience and drives long-term business success.
                        </p>
                    </div>

                    <div class="brand-services">
                        <div class="brand-service glass-effect">
                            <h3>🎯 Brand Positioning</h3>
                            <p>Define your unique value proposition and market position</p>
                        </div>
                        <div class="brand-service glass-effect">
                            <h3>🎨 Visual Identity</h3>
                            <p>Logo design, color palettes, and brand guidelines</p>
                        </div>
                        <div class="brand-service glass-effect">
                            <h3>💬 Brand Voice</h3>
                            <p>Develop consistent messaging and communication style</p>
                        </div>
                        <div class="brand-service glass-effect">
                            <h3>📈 Brand Strategy</h3>
                            <p>Long-term roadmap for brand growth and expansion</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    'seo-optimization': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">SEO OPTIMIZATION</div>
                        <h1 class="section-title">
                            Dominate Search Results<br>
                            With <span class="text-gradient">Expert SEO</span>
                        </h1>
                        <p class="section-description">
                            Data-driven SEO strategies that increase organic traffic, improve search rankings, and drive qualified leads to your business.
                        </p>
                    </div>

                    <div class="seo-stats">
                        <div class="stat-card">
                            <div class="stat-number">300%</div>
                            <div class="stat-label">Average Traffic Increase</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">TOP 3</div>
                            <div class="stat-label">Search Ranking Average</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number">85%</div>
                            <div class="stat-label">Keywords Ranked</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    'digital-marketing': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">DIGITAL MARKETING</div>
                        <h1 class="section-title">
                            Grow Your Business<br>
                            With <span class="text-gradient">Smart Marketing</span>
                        </h1>
                        <p class="section-description">
                            Comprehensive digital marketing strategies that generate leads, increase conversions, and maximize your ROI across all channels.
                        </p>
                    </div>

                    <div class="marketing-channels">
                        <div class="channel-card glass-effect">
                            <h3>📱 Social Media Marketing</h3>
                            <p>Engage your audience across all major social platforms</p>
                        </div>
                        <div class="channel-card glass-effect">
                            <h3>📧 Email Marketing</h3>
                            <p>Nurture leads with personalized email campaigns</p>
                        </div>
                        <div class="channel-card glass-effect">
                            <h3>💰 PPC Advertising</h3>
                            <p>Drive immediate results with targeted paid campaigns</p>
                        </div>
                        <div class="channel-card glass-effect">
                            <h3>📊 Analytics & Reporting</h3>
                            <p>Track performance and optimize for better results</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    'automation-solutions': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">AUTOMATION SOLUTIONS</div>
                        <h1 class="section-title">
                            Transform Your Business<br>
                            With <span class="text-gradient">Smart Automation</span>
                        </h1>
                        <p class="section-description">
                            Advanced automation solutions that streamline processes, enhance productivity, and drive efficiency in your business operations.
                        </p>
                    </div>

                    <div class="ai-solutions-grid">
                        <div class="ai-solution glass-effect">
                            <h3>🤖 Chat Systems & Support</h3>
                            <p>24/7 customer engagement with smart chat flows</p>
                        </div>
                        <div class="ai-solution glass-effect">
                            <h3>📈 Business Analytics</h3>
                            <p>Make data-driven decisions with advanced insights</p>
                        </div>
                        <div class="ai-solution glass-effect">
                            <h3>🎯 Personalization Systems</h3>
                            <p>Deliver tailored experiences at scale</p>
                        </div>
                        <div class="ai-solution glass-effect">
                            <h3>⚡ Workflow Automation</h3>
                            <p>Streamline operations with intelligent workflows</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Shopify Development Page
    'shopify-development': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <div class="pulse-dot"></div>
                            <span>Shopify Experts</span>
                        </div>
                        <h1 class="section-title">
                            Custom <span class="text-gradient">Shopify Development</span>
                        </h1>
                        <p class="section-description">
                            Build powerful, scalable Shopify stores that convert visitors into customers with our expert development services.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        <div class="service-card">
                            <div class="service-icon">🏪</div>
                            <h3 class="service-title">Custom Store Setup</h3>
                            <p class="service-description">Complete Shopify store setup with custom theme development and brand integration.</p>
                            <div class="service-price">Starting at $2,500</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Custom theme design</li>
                                <li><span class="feature-checkmark">✓</span> Mobile optimization</li>
                                <li><span class="feature-checkmark">✓</span> Payment gateway setup</li>
                                <li><span class="feature-checkmark">✓</span> SEO optimization</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">🔧</div>
                            <h3 class="service-title">App Development</h3>
                            <p class="service-description">Custom Shopify apps to extend your store's functionality and automate processes.</p>
                            <div class="service-price">Starting at $5,000</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Custom functionality</li>
                                <li><span class="feature-checkmark">✓</span> API integrations</li>
                                <li><span class="feature-checkmark">✓</span> Admin dashboard</li>
                                <li><span class="feature-checkmark">✓</span> App store submission</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">⚡</div>
                            <h3 class="service-title">Performance Optimization</h3>
                            <p class="service-description">Speed up your Shopify store for better user experience and higher conversions.</p>
                            <div class="service-price">Starting at $1,500</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Page speed optimization</li>
                                <li><span class="feature-checkmark">✓</span> Image optimization</li>
                                <li><span class="feature-checkmark">✓</span> Code minification</li>
                                <li><span class="feature-checkmark">✓</span> Performance monitoring</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="testimonial-result">
                        <div class="testimonial-result-metric">40% Faster Load Times</div>
                        <p class="testimonial-result-text">"GrowBrandi optimized our Shopify store and reduced our page load time by 40%, resulting in a 25% increase in conversions."</p>
                        <div class="testimonial-result-author">
                            <div>
                                <div class="testimonial-result-name">Sarah Chen</div>
                                <div class="testimonial-result-title">E-commerce Manager, TechStyle</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Shopify Plus Page
    'shopify-plus': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <div class="pulse-dot"></div>
                            <span>Enterprise Solutions</span>
                        </div>
                        <h1 class="section-title">
                            <span class="text-gradient">Shopify Plus</span> Development
                        </h1>
                        <p class="section-description">
                            Enterprise-grade Shopify Plus solutions for high-volume businesses requiring advanced customization and scalability.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        <div class="service-card">
                            <div class="service-icon">🏢</div>
                            <h3 class="service-title">Enterprise Setup</h3>
                            <p class="service-description">Complete Shopify Plus setup with advanced features for large-scale operations.</p>
                            <div class="service-price">Starting at $15,000</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Multi-store management</li>
                                <li><span class="feature-checkmark">✓</span> Advanced automation</li>
                                <li><span class="feature-checkmark">✓</span> Custom checkout flows</li>
                                <li><span class="feature-checkmark">✓</span> Wholesale portals</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">🔗</div>
                            <h3 class="service-title">ERP Integration</h3>
                            <p class="service-description">Seamless integration with your existing ERP systems and business tools.</p>
                            <div class="service-price">Starting at $10,000</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Real-time sync</li>
                                <li><span class="feature-checkmark">✓</span> Inventory management</li>
                                <li><span class="feature-checkmark">✓</span> Order processing</li>
                                <li><span class="feature-checkmark">✓</span> Customer data sync</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">📈</div>
                            <h3 class="service-title">Advanced Analytics</h3>
                            <p class="service-description">Custom analytics dashboards and reporting for enterprise-level insights.</p>
                            <div class="service-price">Starting at $8,000</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Custom dashboards</li>
                                <li><span class="feature-checkmark">✓</span> Advanced reporting</li>
                                <li><span class="feature-checkmark">✓</span> Data visualization</li>
                                <li><span class="feature-checkmark">✓</span> Performance tracking</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="testimonial-result">
                        <div class="testimonial-result-metric">300% Revenue Growth</div>
                        <p class="testimonial-result-text">"Our Shopify Plus implementation by GrowBrandi helped us scale from $1M to $4M in annual revenue within 18 months."</p>
                        <div class="testimonial-result-author">
                            <div>
                                <div class="testimonial-result-name">Michael Rodriguez</div>
                                <div class="testimonial-result-title">CEO, GlobalTech Solutions</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Shopify Migration Page
    'shopify-migration': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">
                            <div class="pulse-dot"></div>
                            <span>Migration Experts</span>
                        </div>
                        <h1 class="section-title">
                            Seamless <span class="text-gradient">Store Migration</span>
                        </h1>
                        <p class="section-description">
                            Migrate your existing e-commerce store to Shopify with zero downtime and data loss protection.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        <div class="service-card">
                            <div class="service-icon">🔄</div>
                            <h3 class="service-title">Platform Migration</h3>
                            <p class="service-description">Complete migration from any platform to Shopify with data integrity guaranteed.</p>
                            <div class="service-price">Starting at $3,500</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Product data migration</li>
                                <li><span class="feature-checkmark">✓</span> Customer data transfer</li>
                                <li><span class="feature-checkmark">✓</span> Order history migration</li>
                                <li><span class="feature-checkmark">✓</span> SEO preservation</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">🛡️</div>
                            <h3 class="service-title">Data Protection</h3>
                            <p class="service-description">Advanced backup and recovery systems to ensure zero data loss during migration.</p>
                            <div class="service-price">Starting at $1,500</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> Complete data backup</li>
                                <li><span class="feature-checkmark">✓</span> Staged migration testing</li>
                                <li><span class="feature-checkmark">✓</span> Rollback procedures</li>
                                <li><span class="feature-checkmark">✓</span> Data validation</li>
                            </ul>
                        </div>
                        
                        <div class="service-card">
                            <div class="service-icon">⚙️</div>
                            <h3 class="service-title">Custom Integration</h3>
                            <p class="service-description">Recreate and improve your existing integrations on the Shopify platform.</p>
                            <div class="service-price">Starting at $2,500</div>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span> API recreations</li>
                                <li><span class="feature-checkmark">✓</span> Third-party connections</li>
                                <li><span class="feature-checkmark">✓</span> Custom functionality</li>
                                <li><span class="feature-checkmark">✓</span> Performance optimization</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="testimonial-result">
                        <div class="testimonial-result-metric">Zero Downtime Migration</div>
                        <p class="testimonial-result-text">"GrowBrandi migrated our 50,000+ product catalog from Magento to Shopify with absolutely zero downtime. Incredible work!"</p>
                        <div class="testimonial-result-author">
                            <div>
                                <div class="testimonial-result-name">Jennifer Walsh</div>
                                <div class="testimonial-result-title">Operations Director, Fashion Forward</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Legal Pages
    'privacy-policy': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Privacy Policy</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content glass-effect" style="padding: 3rem; border-radius: 2rem; max-width: 800px; margin: 0 auto;">
                        <h2>1. Information We Collect</h2>
                        <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us for support.</p>
                        
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.</p>
                        
                        <h2>3. Information Sharing</h2>
                        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                        
                        <h2>4. Data Security</h2>
                        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                        
                        <h2>5. Contact Us</h2>
                        <p>If you have questions about this Privacy Policy, please contact us at privacy@growbrandi.com</p>
                    </div>
                </div>
            </section>
        `;
    },

    'terms-of-service': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Terms of Service</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content glass-effect" style="padding: 3rem; border-radius: 2rem; max-width: 800px; margin: 0 auto;">
                        <h2>1. Acceptance of Terms</h2>
                        <p>By accessing and using GrowBrandi's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        
                        <h2>2. Service Description</h2>
                        <p>GrowBrandi provides digital marketing, web development, and consulting services to help businesses grow their online presence.</p>
                        
                        <h2>3. User Responsibilities</h2>
                        <p>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</p>
                        
                        <h2>4. Payment Terms</h2>
                        <p>Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated.</p>
                        
                        <h2>5. Limitation of Liability</h2>
                        <p>GrowBrandi shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                    </div>
                </div>
            </section>
        `;
    },

    'cookie-policy': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Cookie Policy</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content glass-effect" style="padding: 3rem; border-radius: 2rem; max-width: 800px; margin: 0 auto;">
                        <h2>What Are Cookies</h2>
                        <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website.</p>
                        
                        <h2>How We Use Cookies</h2>
                        <p>We use cookies to improve your browsing experience, analyze site traffic, and personalize content.</p>
                        
                        <h2>Types of Cookies We Use</h2>
                        <ul>
                            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                            <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                        </ul>
                        
                        <h2>Managing Cookies</h2>
                        <p>You can control and/or delete cookies as you wish through your browser settings.</p>
                    </div>
                </div>
            </section>
        `;
    },

    // Additional Pages
    careers: () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">JOIN OUR TEAM</div>
                        <h1 class="section-title">
                            Build Your <span class="text-gradient">Dream Career</span><br>
                            With GrowBrandi
                        </h1>
                        <p class="section-description">
                            Join a team of passionate innovators who are shaping the future of digital experiences.
                        </p>
                    </div>
                    
                    <div class="careers-benefits">
                        <h2 class="text-center mb-4">Why Work With Us?</h2>
                        <div class="benefits-grid">
                            <div class="benefit-card glass-effect">
                                <div class="benefit-icon">🚀</div>
                                <h3>Innovation-First Culture</h3>
                                <p>Work with cutting-edge technologies and innovative solutions</p>
                            </div>
                            <div class="benefit-card glass-effect">
                                <div class="benefit-icon">💰</div>
                                <h3>Competitive Compensation</h3>
                                <p>Top-tier salaries and performance-based bonuses</p>
                            </div>
                            <div class="benefit-card glass-effect">
                                <div class="benefit-icon">🏠</div>
                                <h3>Remote-First</h3>
                                <p>Work from anywhere with flexible schedules</p>
                            </div>
                            <div class="benefit-card glass-effect">
                                <div class="benefit-icon">📚</div>
                                <h3>Continuous Learning</h3>
                                <p>Professional development and learning opportunities</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="open-positions">
                        <h2 class="text-center mb-4">Open Positions</h2>
                        <div class="positions-list">
                            <div class="position-card glass-effect">
                                <h3>Senior Frontend Developer</h3>
                                <p>Remote • Full-time • $120k - $150k</p>
                                <div class="position-tags">
                                    <span class="tag">React</span>
                                    <span class="tag">TypeScript</span>
                                    <span class="tag">Next.js</span>
                                </div>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">Apply Now</button>
                            </div>
                            <div class="position-card glass-effect">
                                <h3>UI/UX Designer</h3>
                                <p>Remote • Full-time • $90k - $120k</p>
                                <div class="position-tags">
                                    <span class="tag">Figma</span>
                                    <span class="tag">Adobe Creative Suite</span>
                                    <span class="tag">User Research</span>
                                </div>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">Apply Now</button>
                            </div>
                            <div class="position-card glass-effect">
                                <h3>Digital Marketing Manager</h3>
                                <p>Remote • Full-time • $80k - $110k</p>
                                <div class="position-tags">
                                    <span class="tag">SEO</span>
                                    <span class="tag">PPC</span>
                                    <span class="tag">Analytics</span>
                                </div>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    blog: () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <div class="section-badge">INSIGHTS & UPDATES</div>
                        <h1 class="section-title">
                            The GrowBrandi <span class="text-gradient">Blog</span>
                        </h1>
                        <p class="section-description">
                            Stay updated with the latest trends, insights, and tips from our digital marketing experts.
                        </p>
                    </div>
                    
                    <div class="blog-posts">
                        <article class="blog-post glass-effect">
                            <div class="post-image" style="height: 200px; background: var(--gradient-primary); border-radius: 1rem; margin-bottom: 1.5rem;"></div>
                            <div class="post-meta">
                                <span class="post-category">Web Development</span>
                                <span class="post-date">Nov 15, 2025</span>
                            </div>
                            <h3>The Future of Web Development: Trends to Watch in 2025</h3>
                            <p>Discover the emerging technologies and frameworks that will shape web development in the coming year.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </article>
                        
                        <article class="blog-post glass-effect">
                            <div class="post-image" style="height: 200px; background: var(--gradient-secondary); border-radius: 1rem; margin-bottom: 1.5rem;"></div>
                            <div class="post-meta">
                                <span class="post-category">Digital Marketing</span>
                                <span class="post-date">Nov 10, 2025</span>
                            </div>
                            <h3>AI-Powered Marketing: How to Leverage AI for Better Results</h3>
                            <p>Learn how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </article>
                        
                        <article class="blog-post glass-effect">
                            <div class="post-image" style="height: 200px; background: var(--gradient-tertiary); border-radius: 1rem; margin-bottom: 1.5rem;"></div>
                            <div class="post-meta">
                                <span class="post-category">SEO</span>
                                <span class="post-date">Nov 5, 2025</span>
                            </div>
                            <h3>SEO Best Practices for 2025: A Complete Guide</h3>
                            <p>Stay ahead of the competition with these proven SEO strategies and algorithm updates.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </article>
                    </div>
                </div>
            </section>
        `;
    },

    // Shopify Services Page
    shopify: () => {
        return `
            <section class="hero">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="hero-badge">
                        <span class="pulse-dot"></span>
                        <span>🛒 Shopify Experts</span>
                    </div>
                    <h1 class="hero-title">
                        Professional <span class="text-gradient">Shopify Development</span><br>
                        That Drives Sales
                    </h1>
                    <p class="hero-description">
                        Transform your e-commerce vision into reality with our expert Shopify development services. 
                        From custom themes to Shopify Plus enterprise solutions, we build stores that convert visitors into customers.
                    </p>
                    <div class="hero-cta">
                        <button class="btn btn-primary btn-lg" onclick="chatSystem.openChat()">
                            🚀 Get Free Shopify Consultation
                        </button>
                        <button class="btn btn-outline btn-lg" onclick="router.navigate('contact')">
                            📱 View Portfolio
                        </button>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Complete <span class="text-gradient">Shopify Solutions</span>
                        </h2>
                        <p class="section-description">
                            From basic store setup to complex enterprise implementations, we handle every aspect of your Shopify journey.
                        </p>
                    </div>
                    
                    <div class="services-grid">
                        ${SERVICES.filter(service => service.category.toLowerCase().includes('e-commerce') || service.category.toLowerCase().includes('enterprise')).map(service => `
                            <div class="service-card fade-in">
                                <div class="service-category">${service.category}</div>
                                <div class="service-icon">${service.icon}</div>
                                <h3 class="service-title">${service.title}</h3>
                                <p class="service-description">${service.description}</p>
                                <ul class="service-features">
                                    ${service.features.map(feature => `<li><span class="feature-checkmark">✓</span>${feature}</li>`).join('')}
                                </ul>
                                <div class="service-price">${service.price}</div>
                                <button class="btn btn-primary" onclick="router.navigate('contact')">
                                    Get Started
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>

            <section class="section" style="background: var(--bg-secondary);">
                <div class="container">
                    <div class="section-header">
                        <h2 class="section-title">
                            Why Choose Our <span class="text-gradient">Shopify Expertise?</span>
                        </h2>
                    </div>
                    
                    <div class="services-grid">
                        <div class="service-card fade-in">
                            <div class="service-icon">🏆</div>
                            <h3 class="service-title">Certified Shopify Partners</h3>
                            <p class="service-description">Official Shopify Plus partners with proven expertise in enterprise e-commerce solutions.</p>
                        </div>
                        <div class="service-card fade-in">
                            <div class="service-icon">⚡</div>
                            <h3 class="service-title">Lightning-Fast Development</h3>
                            <p class="service-description">Rapid deployment without compromising quality. Get your store live faster than ever.</p>
                        </div>
                        <div class="service-card fade-in">
                            <div class="service-icon">🔧</div>
                            <h3 class="service-title">Custom Solutions</h3>
                            <p class="service-description">Tailored themes, apps, and integrations that perfectly match your business needs.</p>
                        </div>
                        <div class="service-card fade-in">
                            <div class="service-icon">📈</div>
                            <h3 class="service-title">Conversion Optimization</h3>
                            <p class="service-description">Every store is optimized for maximum conversions and sales performance.</p>
                        </div>
                        <div class="service-card fade-in">
                            <div class="service-icon">🛡️</div>
                            <h3 class="service-title">Ongoing Support</h3>
                            <p class="service-description">24/7 maintenance, updates, and technical support to keep your store running perfectly.</p>
                        </div>
                        <div class="service-card fade-in">
                            <div class="service-icon">🚀</div>
                            <h3 class="service-title">Scalable Architecture</h3>
                            <p class="service-description">Built for growth - our solutions scale seamlessly as your business expands.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Case Studies Page
    caseStudies: () => {
        return `
            <section class="hero" style="min-height: 60vh; padding-top: 8rem;">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        📊 SUCCESS STORIES
                    </div>
                    <h1 class="hero-title">
                        Real Results from <span class="text-gradient">Real Clients</span>
                    </h1>
                    <p class="hero-description">
                        Discover how we've helped businesses of all sizes achieve extraordinary growth through 
                        strategic digital solutions. From startup launches to enterprise transformations, 
                        these case studies showcase the tangible impact of our work.
                    </p>
                </div>
            </section>
            
            <section class="section">
                <div class="container">
                    <div class="services-grid">
                        ${PROJECTS.map(project => `
                            <div class="service-card fade-in">
                                <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 1rem; margin-bottom: 1rem;">
                                <div class="service-category">${project.category}</div>
                                <h3 class="service-title">${project.title}</h3>
                                <p class="service-description">${project.description}</p>
                                <div class="project-results">
                                    <h4 style="color: var(--color-primary); margin: 1rem 0 0.5rem;">Key Results:</h4>
                                    <ul class="service-features">
                                        ${project.results.map(result => `<li><span class="feature-checkmark">✓</span>${result}</li>`).join('')}
                                    </ul>
                                </div>
                                <div class="project-meta">
                                    <div style="display: flex; justify-content: space-between; margin: 1rem 0;">
                                        <span><strong>Client:</strong> ${project.client}</span>
                                        <span><strong>Timeline:</strong> ${project.completionTime}</span>
                                    </div>
                                    <div class="project-tech">
                                        ${project.technologies.map(tech => `
                                            <span style="padding: 0.25rem 0.75rem; background: var(--bg-tertiary); border-radius: 9999px; font-size: 0.75rem; margin-right: 0.5rem;">
                                                ${tech}
                                            </span>
                                        `).join('')}
                                    </div>
                                </div>
                                <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                    Discuss Similar Project
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    // Guides Page
    guides: () => {
        return `
            <section class="hero" style="min-height: 60vh; padding-top: 8rem;">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                        </svg>
                        📚 EXPERT GUIDES
                    </div>
                    <h1 class="hero-title">
                        Comprehensive <span class="text-gradient">Digital Growth Guides</span>
                    </h1>
                    <p class="hero-description">
                        Master the art of digital growth with our in-depth guides covering everything from Shopify optimization 
                        to advanced marketing strategies. Learn from industry experts and implement proven techniques that drive real results.
                    </p>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="services-grid">
                        <div class="service-card fade-in">
                            <div class="service-category">E-commerce</div>
                            <div class="service-icon">🛒</div>
                            <h3 class="service-title">Complete Shopify Setup Guide</h3>
                            <p class="service-description">Step-by-step guide to setting up your Shopify store for maximum conversions and sales.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Store Configuration</li>
                                <li><span class="feature-checkmark">✓</span>Theme Customization</li>
                                <li><span class="feature-checkmark">✓</span>Payment Setup</li>
                                <li><span class="feature-checkmark">✓</span>SEO Optimization</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>

                        <div class="service-card fade-in">
                            <div class="service-category">Marketing</div>
                            <div class="service-icon">📈</div>
                            <h3 class="service-title">Digital Marketing Mastery</h3>
                            <p class="service-description">Comprehensive guide to creating and executing digital marketing campaigns that convert.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Campaign Strategy</li>
                                <li><span class="feature-checkmark">✓</span>Audience Targeting</li>
                                <li><span class="feature-checkmark">✓</span>Content Creation</li>
                                <li><span class="feature-checkmark">✓</span>Performance Analysis</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>

                        <div class="service-card fade-in">
                            <div class="service-category">SEO</div>
                            <div class="service-icon">🔍</div>
                            <h3 class="service-title">SEO Strategy Blueprint</h3>
                            <p class="service-description">Advanced SEO techniques to dominate search rankings and drive organic traffic.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Keyword Research</li>
                                <li><span class="feature-checkmark">✓</span>Technical SEO</li>
                                <li><span class="feature-checkmark">✓</span>Content Optimization</li>
                                <li><span class="feature-checkmark">✓</span>Link Building</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>

                        <div class="service-card fade-in">
                            <div class="service-category">Conversion</div>
                            <div class="service-icon">🎯</div>
                            <h3 class="service-title">Conversion Optimization Playbook</h3>
                            <p class="service-description">Proven strategies to increase your website's conversion rate and maximize revenue.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>A/B Testing Framework</li>
                                <li><span class="feature-checkmark">✓</span>User Experience Design</li>
                                <li><span class="feature-checkmark">✓</span>Landing Page Optimization</li>
                                <li><span class="feature-checkmark">✓</span>Analytics Setup</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>

                        <div class="service-card fade-in">
                            <div class="service-category">Branding</div>
                            <div class="service-icon">🎨</div>
                            <h3 class="service-title">Brand Identity Creation</h3>
                            <p class="service-description">Build a powerful brand identity that resonates with your target audience and drives loyalty.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Brand Strategy</li>
                                <li><span class="feature-checkmark">✓</span>Visual Identity</li>
                                <li><span class="feature-checkmark">✓</span>Brand Guidelines</li>
                                <li><span class="feature-checkmark">✓</span>Brand Messaging</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>

                        <div class="service-card fade-in">
                            <div class="service-category">Analytics</div>
                            <div class="service-icon">📊</div>
                            <h3 class="service-title">Data-Driven Growth</h3>
                            <p class="service-description">Learn to use analytics and data to make informed decisions that accelerate business growth.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Analytics Setup</li>
                                <li><span class="feature-checkmark">✓</span>KPI Tracking</li>
                                <li><span class="feature-checkmark">✓</span>Report Creation</li>
                                <li><span class="feature-checkmark">✓</span>Growth Optimization</li>
                            </ul>
                            <button class="btn btn-primary" onclick="chatSystem.openChat()">
                                Access Guide
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Tools Page
    tools: () => {
        return `
            <section class="hero" style="min-height: 60vh; padding-top: 8rem;">
                <div class="hero-animated-bg">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
                <div class="container hero-content">
                    <div class="section-badge">
                        <svg class="icon" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                        </svg>
                        🛠️ FREE TOOLS
                    </div>
                    <h1 class="hero-title">
                        Powerful <span class="text-gradient">Growth Tools</span><br>
                        For Your Business
                    </h1>
                    <p class="hero-description">
                        Access our suite of free business tools designed to accelerate your growth. From SEO analyzers 
                        to conversion calculators, these tools provide instant insights to optimize your digital presence.
                    </p>
                </div>
            </section>

            <section class="section">
                <div class="container">
                    <div class="services-grid">
                        <div class="service-card fade-in tool-card" onclick="openTool('seo-analyzer')">
                            <div class="service-category">SEO Tool</div>
                            <div class="service-icon">🔍</div>
                            <h3 class="service-title">Website SEO Analyzer</h3>
                            <p class="service-description">Comprehensive SEO audit of your website with actionable recommendations for improvement.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Technical SEO Analysis</li>
                                <li><span class="feature-checkmark">✓</span>Keyword Optimization</li>
                                <li><span class="feature-checkmark">✓</span>Performance Metrics</li>
                                <li><span class="feature-checkmark">✓</span>Competitor Comparison</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Analyze Now</button>
                            </div>
                        </div>

                        <div class="service-card fade-in tool-card" onclick="openTool('conversion-calculator')">
                            <div class="service-category">Conversion Tool</div>
                            <div class="service-icon">📊</div>
                            <h3 class="service-title">Conversion Rate Calculator</h3>
                            <p class="service-description">Calculate your conversion rates and discover potential revenue improvements.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Conversion Rate Analysis</li>
                                <li><span class="feature-checkmark">✓</span>Revenue Impact Calculator</li>
                                <li><span class="feature-checkmark">✓</span>Improvement Projections</li>
                                <li><span class="feature-checkmark">✓</span>Industry Benchmarks</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Calculate Now</button>
                            </div>
                        </div>

                        <div class="service-card fade-in tool-card" onclick="openTool('page-speed')">
                            <div class="service-category">Performance Tool</div>
                            <div class="service-icon">⚡</div>
                            <h3 class="service-title">Page Speed Optimizer</h3>
                            <p class="service-description">Analyze your website's loading speed and get optimization recommendations.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Speed Performance Test</li>
                                <li><span class="feature-checkmark">✓</span>Core Web Vitals</li>
                                <li><span class="feature-checkmark">✓</span>Mobile Optimization</li>
                                <li><span class="feature-checkmark">✓</span>Optimization Tips</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Test Speed</button>
                            </div>
                        </div>

                        <div class="service-card fade-in tool-card" onclick="openTool('keyword-generator')">
                            <div class="service-category">SEO Tool</div>
                            <div class="service-icon">🔑</div>
                            <h3 class="service-title">Keyword Generator</h3>
                            <p class="service-description">Discover high-value keywords for your SEO and content marketing campaigns.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Keyword Research</li>
                                <li><span class="feature-checkmark">✓</span>Search Volume Data</li>
                                <li><span class="feature-checkmark">✓</span>Competition Analysis</li>
                                <li><span class="feature-checkmark">✓</span>Long-tail Suggestions</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Generate Keywords</button>
                            </div>
                        </div>

                        <div class="service-card fade-in tool-card" onclick="openTool('roi-calculator')">
                            <div class="service-category">Business Tool</div>
                            <div class="service-icon">💰</div>
                            <h3 class="service-title">Marketing ROI Calculator</h3>
                            <p class="service-description">Calculate the return on investment for your marketing campaigns and initiatives.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>ROI Calculation</li>
                                <li><span class="feature-checkmark">✓</span>Cost Analysis</li>
                                <li><span class="feature-checkmark">✓</span>Profit Projections</li>
                                <li><span class="feature-checkmark">✓</span>Campaign Comparison</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Calculate ROI</button>
                            </div>
                        </div>

                        <div class="service-card fade-in tool-card" onclick="openTool('social-media-scheduler')">
                            <div class="service-category">Social Media Tool</div>
                            <div class="service-icon">📅</div>
                            <h3 class="service-title">Social Media Planner</h3>
                            <p class="service-description">Plan and schedule your social media content for maximum engagement and reach.</p>
                            <ul class="service-features">
                                <li><span class="feature-checkmark">✓</span>Content Scheduling</li>
                                <li><span class="feature-checkmark">✓</span>Multi-Platform Support</li>
                                <li><span class="feature-checkmark">✓</span>Engagement Analytics</li>
                                <li><span class="feature-checkmark">✓</span>Content Templates</li>
                            </ul>
                            <div class="tool-cta">
                                <span class="tool-price">Free</span>
                                <button class="btn btn-primary">Plan Content</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Privacy Policy Page
    'privacy-policy': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Privacy Policy</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>Information We Collect</h2>
                            <p>We collect information you provide directly to us, information we collect automatically when you use our services, and information from third-party sources.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Information Sharing</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Contact Us</h2>
                            <p>If you have questions about this Privacy Policy, please contact us at <a href="mailto:privacy@growbrandi.com">privacy@growbrandi.com</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Terms of Service Page
    'terms-of-service': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Terms of Service</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>Acceptance of Terms</h2>
                            <p>By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Service Description</h2>
                            <p>GrowBrandi provides digital growth services including Shopify development, web development, and digital marketing solutions.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Limitation of Liability</h2>
                            <p>In no event shall GrowBrandi be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Contact Information</h2>
                            <p>For questions regarding these terms, contact us at <a href="mailto:legal@growbrandi.com">legal@growbrandi.com</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    // Cookie Policy Page
    'cookie-policy': () => {
        return `
            <section class="section" style="padding-top: 8rem;">
                <div class="container">
                    <div class="section-header">
                        <h1 class="section-title">Cookie Policy</h1>
                        <p class="section-description">Last updated: November 17, 2025</p>
                    </div>
                    
                    <div class="legal-content">
                        <div class="legal-section">
                            <h2>What Are Cookies</h2>
                            <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>How We Use Cookies</h2>
                            <p>We use cookies to improve your browsing experience, analyze site traffic, and provide personalized content and advertisements.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Cookie Management</h2>
                            <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed.</p>
                        </div>
                        
                        <div class="legal-section">
                            <h2>Contact Us</h2>
                            <p>If you have questions about our cookie policy, contact us at <a href="mailto:privacy@growbrandi.com">privacy@growbrandi.com</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
};

// Render page content
function renderPage(pageName) {
    const mainContent = document.getElementById('main-content');
    if (Pages[pageName]) {
        mainContent.innerHTML = Pages[pageName]();
        // Trigger animations
        setTimeout(() => {
            document.querySelectorAll('.fade-in, .slide-up').forEach(el => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        }, 100);
    } else {
        mainContent.innerHTML = Pages.home();
    }
}

// Helper function
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact form handler
function handleContactSubmit(event) {
    event.preventDefault();
    alert('Thank you for your interest! We will contact you shortly.');
    event.target.reset();
}
