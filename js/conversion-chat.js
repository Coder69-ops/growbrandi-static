// Conversion-Focused Chat System
// Designed to maximize client conversion without AI

class ConversionChatSystem {
    constructor() {
        this.isOpen = false;
        this.currentStep = 'welcome';
        this.leadData = {};
        this.messageQueue = [];
        this.messageCount = 0;
        this.conversationFlow = this.buildConversationFlow();
        this.quickActions = this.buildQuickActions();
        this.userEngagement = {
            startTime: Date.now(),
            pageViews: 0,
            interactions: 0,
            scrollDepth: 0
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.trackUserEngagement();
        this.setupAutoTriggers();
        this.initializeWelcomeMessage();
    }

    setupEventListeners() {
        const chatToggle = document.getElementById('chat-toggle');
        const chatMinimize = document.getElementById('chat-minimize');
        const chatSendBtn = document.getElementById('chat-send-btn');
        const chatInput = document.getElementById('chat-message-input');
        const leadCaptureClose = document.getElementById('lead-capture-close');
        const leadCaptureForm = document.getElementById('lead-capture-form');

        chatToggle?.addEventListener('click', () => this.toggleChat());
        chatMinimize?.addEventListener('click', () => this.minimizeChat());
        chatSendBtn?.addEventListener('click', () => this.sendMessage());
        chatInput?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });
        leadCaptureClose?.addEventListener('click', () => this.closeLeadCapture());
        leadCaptureForm?.addEventListener('submit', (e) => this.handleLeadCapture(e));

        // Quick actions will be bound dynamically
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-action-btn')) {
                this.handleQuickAction(e.target.dataset.action);
            }
        });
    }

    buildConversationFlow() {
        return {
            welcome: {
                messages: [
                    "👋 Hey there! I'm Alex from GrowBrandi - so glad you stopped by!",
                    "I've been helping business owners like you turn their dreams into serious revenue. We're talking 300-500% growth in 12 months! 🚀",
                    "I'm curious - what's the biggest challenge holding your business back right now?",
                    "Don't worry, whatever it is, we've probably solved it before! 😊"
                ],
                actions: ['pricing', 'services', 'results', 'consultation']
            },
            pricing: {
                messages: [
                    "I love that you're thinking about investment! Smart business owners always ask this first 💡",
                    "Here's the thing - our clients typically make back their entire investment in 60-90 days. Then it's pure profit!",
                    "💰 **Growth Starter**: $2,999 - Perfect for businesses doing $10K-50K/month\n💎 **Scale Professional**: $7,999 - Our most popular (businesses doing $50K-200K/month)\n🚀 **Enterprise Accelerator**: $15,999+ - For companies ready to dominate their market",
                    "The real question isn't the cost - it's how much money you're leaving on the table every month you wait.",
                    "What's your current monthly revenue? I can show you exactly what kind of ROI to expect! 📈"
                ],
                actions: ['budget_under5k', 'budget_5k15k', 'budget_15k50k', 'budget_50kplus', 'consultation']
            },
            services: {
                messages: [
                    "We're a full-service digital growth agency specializing in:",
                    "🌐 **Web Development** - High-converting websites\n🎨 **UI/UX Design** - User-centered experiences\n📈 **Digital Marketing** - Multi-channel campaigns\n🔍 **SEO Optimization** - Organic growth strategies\n🤖 **AI Solutions** - Cutting-edge automation\n💡 **Brand Strategy** - Complete brand transformation",
                    "Which area would have the biggest impact on your business right now?"
                ],
                actions: ['web_dev', 'marketing', 'seo', 'ai_solutions', 'brand', 'consultation']
            },
            results: {
                messages: [
                    "I love sharing our client success stories! Here are some recent wins:",
                    "📊 **TechStart Inc**: 420% increase in qualified leads in 6 months\n💰 **E-commerce Store**: From $50K to $300K monthly revenue\n🎯 **SaaS Company**: Reduced customer acquisition cost by 65%\n🚀 **Local Business**: Expanded to 3 new markets in 8 months",
                    "These results are typical when we implement our proven growth framework.",
                    "What kind of growth goals do you have for your business?"
                ],
                actions: ['growth_leads', 'growth_revenue', 'growth_market', 'consultation']
            },
            consultation: {
                messages: [
                    "YES! This is exactly what I was hoping you'd say! 🎉",
                    "Here's what's going to happen on our FREE 30-minute Growth Accelerator Call:",
                    "✅ **Revenue Audit**: I'll show you the hidden money leaks in your current setup\n✅ **Opportunity Map**: Identify the 3 biggest growth levers in your industry\n✅ **Custom Strategy**: Get a personalized roadmap worth $2,500\n✅ **Quick Wins**: Walk away with tactics you can implement THIS WEEK",
                    "Fair warning: I only do 3 of these calls per week, and spots fill up fast.",
                    "Serious business owners who show up prepared often see results within 48 hours. Are you ready to be one of them? 💪"
                ],
                trigger: 'lead_capture'
            },
            objection_price: {
                messages: [
                    "I totally get it - that's exactly what I'd be thinking too! 💭",
                    "Here's the reality: Last month alone, my clients generated an extra $2.3 million in revenue.",
                    "That's from an average investment of $8,500 each. Do the math - it's a no-brainer! 🤯",
                    "Plus, I offer flexible payment plans AND a 100% money-back guarantee.",
                    "But here's what really matters: What's it costing you to stay where you are? Lost sales? Sleepless nights? Competitor gains?",
                    "Let's hop on a quick call and I'll calculate your exact ROI potential. Sound fair?"
                ],
                actions: ['consultation', 'payment_plans', 'guarantee']
            },
            objection_time: {
                messages: [
                    "Oh man, I hear this every single day! And you know what? You're absolutely right. ⏰",
                    "That's EXACTLY why successful business owners hire us - we give you your time back!",
                    "My clients save 25+ hours per week because we handle ALL the marketing heavy lifting.",
                    "Imagine having an extra 25 hours to spend with family, or focus on what you do best.",
                    "The 15 minutes we spend together on a call will save you literally hundreds of hours.",
                    "Plus, most clients see results in their FIRST week. Want to see how?"
                ],
                actions: ['consultation', 'automation']
            }
        };
    }

    buildQuickActions() {
        return {
            initial: [
                { text: '💰 Pricing Info', action: 'pricing' },
                { text: '🚀 Our Services', action: 'services' },
                { text: '📊 Success Stories', action: 'results' },
                { text: '📞 Free Consultation', action: 'consultation' }
            ],
            pricing: [
                { text: 'Under $5K', action: 'budget_under5k' },
                { text: '$5K - $15K', action: 'budget_5k15k' },
                { text: '$15K - $50K', action: 'budget_15k50k' },
                { text: '$50K+', action: 'budget_50kplus' },
                { text: '📞 Free Consultation', action: 'consultation' }
            ],
            services: [
                { text: '🌐 Web Development', action: 'web_dev' },
                { text: '📈 Digital Marketing', action: 'marketing' },
                { text: '🔍 SEO Services', action: 'seo' },
                { text: '🤖 AI Solutions', action: 'ai_solutions' },
                { text: '📞 Free Consultation', action: 'consultation' }
            ],
            results: [
                { text: '📈 More Leads', action: 'growth_leads' },
                { text: '💰 Higher Revenue', action: 'growth_revenue' },
                { text: '🌍 Market Expansion', action: 'growth_market' },
                { text: '📞 Free Consultation', action: 'consultation' }
            ]
        };
    }

    toggleChat() {
        const chatWindow = document.getElementById('chat-window');
        const chatToggle = document.getElementById('chat-toggle');
        
        if (!chatWindow || !chatToggle) {
            console.error('Chat elements not found');
            return;
        }
        
        this.isOpen = !this.isOpen;
        
        if (this.isOpen) {
            chatWindow.classList.add('active');
            chatToggle.classList.add('active');
            this.trackEvent('chat_opened');
        } else {
            chatWindow.classList.remove('active');
            chatToggle.classList.remove('active');
        }
    }

    minimizeChat() {
        this.isOpen = false;
        document.getElementById('chat-window').classList.remove('active');
        document.getElementById('chat-toggle').classList.remove('active');
    }

    initializeWelcomeMessage() {
        // Add subtle loading animation to chat
        const chatMessages = document.getElementById('chat-messages');
        if (chatMessages) {
            chatMessages.innerHTML = '<div class="chat-loading">Connecting to Alex...</div>';
        }
        
        // Add natural welcome message timing
        setTimeout(() => {
            if (chatMessages) {
                chatMessages.innerHTML = '';
            }
            this.showTypingIndicator();
            setTimeout(() => {
                this.hideTypingIndicator();
                this.addBotMessages(this.conversationFlow.welcome.messages);
                this.updateQuickActions(this.conversationFlow.welcome.actions);
            }, 1200);
        }, 1500);
    }

    sendMessage() {
        const input = document.getElementById('chat-message-input');
        if (!input) return;
        
        const message = input.value.trim();
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        // Process user message and respond
        this.processUserMessage(message);
        this.trackEvent('message_sent', { message: message.substring(0, 100) });
    }

    addUserMessage(message) {
        const messagesContainer = document.getElementById('chat-messages');
        if (!messagesContainer) {
            console.error('Chat messages container not found');
            return;
        }
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.style.opacity = '0';
        messageDiv.innerHTML = `
            <div class="message-avatar">👤</div>
            <div class="message-wrapper">
                <div class="message-content">${this.escapeHtml(message)}</div>
                <div class="message-time">${this.getCurrentTime()}</div>
            </div>
        `;
        messagesContainer.appendChild(messageDiv);
        
        // Animate message appearance
        setTimeout(() => {
            messageDiv.style.opacity = '1';
            messageDiv.style.transform = 'translateY(0)';
        }, 50);
        
        this.scrollToBottom();
        
        // Track user engagement
        this.userEngagement.interactions++;
        this.leadScore += 10;
    }

    addBotMessages(messages, delay = 1800) {
        const messagesContainer = document.getElementById('chat-messages');
        if (!messagesContainer) return;
        
        messages.forEach((message, index) => {
            setTimeout(() => {
                // Show typing indicator for each message
                this.showTypingIndicator();
                
                // Realistic typing delay based on message length
                const typingDelay = Math.max(800, Math.min(3000, message.length * 30));
                
                setTimeout(() => {
                    this.hideTypingIndicator();
                    
                    const messageDiv = document.createElement('div');
                    messageDiv.className = 'message bot';
                    messageDiv.style.opacity = '0';
                    messageDiv.innerHTML = `
                        <div class="message-avatar">👨‍💼</div>
                        <div class="message-wrapper">
                            <div class="message-content">${this.formatMessage(message)}</div>
                            <div class="message-time">${this.getCurrentTime()}</div>
                        </div>
                    `;
                    messagesContainer.appendChild(messageDiv);
                    
                    // Animate message appearance
                    setTimeout(() => {
                        messageDiv.style.opacity = '1';
                        messageDiv.style.transform = 'translateY(0)';
                    }, 50);
                    
                    this.scrollToBottom();
                    
                    // Add special effects for important messages
                    if (message.includes('FREE') || message.includes('$500') || message.includes('🎉') || message.includes('💪')) {
                        messageDiv.classList.add('conversion-highlight');
                    }
                }, typingDelay);
            }, index * delay);
        });
    }

    processUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        // Show typing indicator immediately
        this.showTypingIndicator();
        
        // Add realistic human delay (2-4 seconds)
        const responseDelay = 2000 + Math.random() * 2000;
        
        setTimeout(() => {
            this.hideTypingIndicator();
            
            // Intent recognition with more human-like responses
            if (this.containsKeywords(lowerMessage, ['hi', 'hello', 'hey', 'good morning', 'good afternoon'])) {
                this.handleGreeting(lowerMessage);
            } else if (this.containsKeywords(lowerMessage, ['price', 'cost', 'expensive', 'cheap', 'budget', 'money', 'fees'])) {
                if (this.containsKeywords(lowerMessage, ['too much', 'expensive', 'cant afford', "can't afford", 'high'])) {
                    this.handleResponse('objection_price');
                } else {
                    this.handleResponse('pricing');
                }
            } else if (this.containsKeywords(lowerMessage, ['time', 'busy', 'no time', 'when', 'schedule', 'quickly'])) {
                this.handleResponse('objection_time');
            } else if (this.containsKeywords(lowerMessage, ['service', 'what do', 'how do', 'help', 'offer', 'provide'])) {
                this.handleResponse('services');
            } else if (this.containsKeywords(lowerMessage, ['result', 'success', 'case study', 'proof', 'work', 'examples', 'clients'])) {
                this.handleResponse('results');
            } else if (this.containsKeywords(lowerMessage, ['consultation', 'call', 'meeting', 'demo', 'yes', 'sure', 'ok', 'interested'])) {
                this.handleResponse('consultation');
            } else if (this.containsKeywords(lowerMessage, ['no', 'not interested', 'maybe later', 'think about it'])) {
                this.handleObjection(lowerMessage);
            } else {
                // More natural default response
                this.addBotMessages([
                    "I appreciate you sharing that with me! 😊",
                    "To make sure I give you the most helpful information, could you tell me what's your main goal right now?",
                    "Are you looking to increase sales, reduce costs, or maybe expand into new markets?"
                ]);
                this.updateQuickActions('initial');
            }
        }, responseDelay);
    }

    handleQuickAction(action) {
        this.trackEvent('quick_action_clicked', { action });
        
        // Show user's selection as a message first
        const actionMessages = {
            'pricing': '💰 I want to know about pricing',
            'services': '🚀 Tell me about your services',
            'results': '📊 Show me your results and success stories',
            'consultation': '📞 I want a free consultation',
            'budget_under5k': '💼 My budget is under $5K',
            'budget_5k15k': '💎 My budget is $5K - $15K',
            'budget_15k50k': '🚀 My budget is $15K - $50K',
            'budget_50kplus': '💰 My budget is $50K+',
            'web_dev': '🌐 I need web development services',
            'marketing': '📈 I need digital marketing help',
            'seo': '🔍 I want SEO optimization',
            'ai_solutions': '🤖 Tell me about automation solutions',
            'brand': '💡 I need brand strategy help'
        };
        
        const userMessage = actionMessages[action] || '✨ ' + action.replace('_', ' ');
        this.addUserMessage(userMessage);
        
        // Add visual feedback for clicked action
        const clickedButton = document.querySelector(`[data-action="${action}"]`);
        if (clickedButton) {
            clickedButton.style.background = 'var(--gradient-primary)';
            clickedButton.style.color = 'white';
            clickedButton.style.transform = 'scale(0.95)';
            clickedButton.disabled = true;
        }
        
        // Clear quick actions while processing
        const quickActionsContainer = document.getElementById('quick-actions');
        if (quickActionsContainer) {
            setTimeout(() => {
                quickActionsContainer.style.opacity = '0.5';
            }, 300);
        }
        
        switch (action) {
            case 'pricing':
                this.handleResponse('pricing');
                break;
            case 'services':
                this.handleResponse('services');
                break;
            case 'results':
                this.handleResponse('results');
                break;
            case 'consultation':
                this.handleResponse('consultation');
                break;
            case 'budget_under5k':
                this.handleBudgetResponse('under5k');
                break;
            case 'budget_5k15k':
                this.handleBudgetResponse('5k15k');
                break;
            case 'budget_15k50k':
                this.handleBudgetResponse('15k50k');
                break;
            case 'budget_50kplus':
                this.handleBudgetResponse('50kplus');
                break;
            case 'web_dev':
            case 'marketing':
            case 'seo':
            case 'ai_solutions':
            case 'brand':
                this.handleServiceInterest(action);
                break;
            case 'growth_leads':
            case 'growth_revenue':
            case 'growth_market':
                this.handleGrowthGoal(action);
                break;
            default:
                this.handleServiceInterest(action);
        }
        
        // Restore quick actions opacity after processing\n        setTimeout(() => {\n            const quickActionsContainer = document.getElementById('quick-actions');\n            if (quickActionsContainer) {\n                quickActionsContainer.style.opacity = '1';\n            }\n        }, 1000);
    }

    handleResponse(flowKey) {
        const flow = this.conversationFlow[flowKey];
        if (!flow) return;
        
        // Clear quick actions and show thinking indicator
        const quickActionsContainer = document.getElementById('quick-actions');
        if (quickActionsContainer) {
            quickActionsContainer.innerHTML = '<div class="thinking-indicator">💭 Alex is thinking...</div>';
            quickActionsContainer.style.opacity = '0.7';
        }
        
        this.currentStep = flowKey;
        this.addBotMessages(flow.messages);
        
        if (flow.trigger === 'lead_capture') {
            setTimeout(() => this.showLeadCapture(), 3000);
        } else if (flow.actions) {
            // Delay showing new quick actions until messages are done
            const messageDelay = flow.messages.length * 1800 + 1000;
            setTimeout(() => {
                this.updateQuickActions(flowKey);
            }, messageDelay);
        }
    }

    handleBudgetResponse(budget) {
        this.leadData.budget = budget;
        
        const responses = {
            'under5k': [
                "Perfect! We have great options for businesses at your stage.",
                "Our Starter Package at $2,999 is designed specifically for businesses like yours.",
                "It includes everything you need to start seeing growth within 30 days.",
                "Let's schedule a quick call to show you exactly what's included and how we can maximize your ROI."
            ],
            '5k15k': [
                "Excellent! This puts you in our most popular package range.",
                "Our Professional Package at $7,999 is our best-seller because it delivers incredible results.",
                "You'll get our complete growth system plus dedicated account management.",
                "Most clients in this range see 200-400% ROI in the first 6 months."
            ],
            '15k50k': [
                "Outstanding! With this investment level, we can implement our full enterprise solution.",
                "You'll get our complete marketing automation, custom development, and priority support.",
                "Clients at this level typically see 300-500% growth within 12 months.",
                "Let's discuss how we can create a custom strategy for your specific goals."
            ],
            '50kplus': [
                "Fantastic! You're ready for serious growth and we're the perfect partner.",
                "At this investment level, you get our white-glove service and custom solutions.",
                "We'll assign a dedicated team and create a completely personalized growth strategy.",
                "Our enterprise clients regularly achieve 500%+ growth and market expansion."
            ]
        };
        
        this.addBotMessages(responses[budget]);
        setTimeout(() => this.showLeadCapture(), 2000);
    }

    showLeadCapture() {
        const modal = document.getElementById('lead-capture-modal');
        modal.classList.add('active');
        this.trackEvent('lead_capture_shown');
    }

    closeLeadCapture() {
        const modal = document.getElementById('lead-capture-modal');
        modal.classList.remove('active');
    }
    
    // Method to open chat from external calls (FAB buttons, etc.)
    openChat() {
        if (!this.isOpen) {
            this.toggleChat();
        }
    }
    
    // Method to show lead capture from external calls
    showLeadCapture(type = 'basic') {
        if (this.leadCaptureSystem) {
            this.leadCaptureSystem.show(type);
        } else {
            // Fallback - show basic modal
            const modal = document.getElementById('lead-capture-modal');
            if (modal) {
                modal.classList.add('active');
            }
        }
    }

    handleLeadCapture(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        this.leadData = {
            ...this.leadData,
            name: document.getElementById('lead-name').value,
            email: document.getElementById('lead-email').value,
            phone: document.getElementById('lead-phone').value,
            service: document.getElementById('lead-service').value,
            budget: document.getElementById('lead-budget').value,
            timestamp: new Date().toISOString(),
            pageUrl: window.location.href,
            engagement: this.userEngagement
        };
        
        // Save lead data (in real implementation, send to server)
        this.saveLeadData(this.leadData);
        
        this.closeLeadCapture();
        this.showSuccessMessage();
        this.trackEvent('lead_captured', this.leadData);
    }

    showSuccessMessage() {
        this.addBotMessages([
            "🎉 Congratulations! Your free consultation is confirmed!",
            "I've sent you an email with calendar links to book your preferred time slot.",
            "In the meantime, I'm preparing a custom growth analysis for your business.",
            "Check your email in the next few minutes and I'll see you on our call!",
            "PS: Keep this chat open - I might have some bonus resources to share! 😊"
        ]);
        
        // Add success class to last message
        setTimeout(() => {
            const messages = document.querySelectorAll('.message.bot');
            const lastMessage = messages[messages.length - 1];
            if (lastMessage) {
                lastMessage.classList.add('success');
            }
        }, 1000);
    }

    updateQuickActions(type) {
        const quickActionsContainer = document.getElementById('quick-actions');
        if (!quickActionsContainer) return;
        
        const actions = this.quickActions[type] || this.quickActions.initial;
        
        // Clear existing actions with animation
        quickActionsContainer.style.opacity = '0';
        quickActionsContainer.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            quickActionsContainer.innerHTML = '';
            
            actions.forEach((action, index) => {
                const button = document.createElement('button');
                button.className = 'quick-action-btn';
                button.textContent = action.text;
                button.dataset.action = action.action;
                button.style.opacity = '0';
                button.style.transform = 'translateY(20px) scale(0.9)';
                quickActionsContainer.appendChild(button);
                
                // Add hover sound effect (visual feedback)
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-2px) scale(1.02)';
                });
                
                button.addEventListener('mouseleave', () => {
                    if (!button.disabled) {
                        button.style.transform = 'translateY(0) scale(1)';
                    }
                });
                
                // Animate each button with staggered delay
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0) scale(1)';
                    button.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
                }, index * 120 + 200);
            });
            
            // Show container
            quickActionsContainer.style.opacity = '1';
            quickActionsContainer.style.transform = 'translateY(0)';
            quickActionsContainer.style.transition = 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
        }, 150);
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chat-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = `
            <span>Alex is typing</span>
            <div class="typing-dots">
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
                <div class="typing-dot"></div>
            </div>
        `;
        messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    trackUserEngagement() {
        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            maxScroll = Math.max(maxScroll, scrollPercent);
            this.userEngagement.scrollDepth = Math.round(maxScroll);
        });

        // Track page views
        let pageViews = 1;
        window.addEventListener('hashchange', () => {
            pageViews++;
            this.userEngagement.pageViews = pageViews;
        });

        // Track interactions
        document.addEventListener('click', () => {
            this.userEngagement.interactions++;
        });
    }

    setupAutoTriggers() {
        // Show chat after 30 seconds if not interacted
        setTimeout(() => {
            if (!this.isOpen && this.userEngagement.interactions < 3) {
                this.pulseChat();
            }
        }, 30000);

        // Show chat if user scrolls to bottom
        window.addEventListener('scroll', () => {
            const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercent > 80 && !this.isOpen) {
                this.pulseChat();
            }
        });

        // Show chat on exit intent
        document.addEventListener('mouseleave', (e) => {
            if (e.clientY <= 0 && !this.isOpen) {
                this.exitIntentTrigger();
            }
        });
    }

    pulseChat() {
        const chatToggle = document.getElementById('chat-toggle');
        chatToggle.style.animation = 'pulse-glow 1s ease-in-out 3';
    }

    exitIntentTrigger() {
        if (!this.isOpen) {
            this.toggleChat();
            this.addBotMessages([
                "Wait! Before you go... 🛑",
                "I noticed you're interested in growing your business but might have some questions.",
                "How about a quick 2-minute chat to see if we can help?",
                "I promise it'll be worth your time! 😊"
            ]);
        }
    }

    handleGreeting(message) {
        const greetings = [
            "Hey there! Great to meet you! 👋",
            "Hello! Thanks for stopping by - I'm excited to chat with you!",
            "Hi! Perfect timing - I was just thinking about how to help more businesses grow."
        ];
        
        const followUps = [
            "I'm Alex, and I've been helping businesses like yours achieve incredible growth.",
            "What brought you to our website today? I'd love to learn more about your business!"
        ];
        
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
        this.addBotMessages([randomGreeting, ...followUps]);
        this.updateQuickActions('initial');
    }
    
    handleObjection(message) {
        const empathyResponses = [
            "I totally understand - that's completely fair.",
            "No pressure at all! I appreciate your honesty.",
            "That makes perfect sense, and I respect that."
        ];
        
        const valueProps = [
            "Just so you know, most of our clients initially felt the same way.",
            "What changed their minds was seeing the actual numbers - real ROI in 90 days.",
            "How about I just send you a case study that shows exactly what's possible? No strings attached."
        ];
        
        const randomEmpathy = empathyResponses[Math.floor(Math.random() * empathyResponses.length)];
        this.addBotMessages([randomEmpathy, ...valueProps]);
        this.updateQuickActions('results');
    }

    handleServiceInterest(service) {
        const serviceResponses = {
            'web_dev': [
                "Excellent choice! Web development is our specialty! 🌐",
                "We build high-converting websites that turn visitors into customers.",
                "Our sites typically see 40-60% higher conversion rates than industry average.",
                "Want to see some examples of sites we've built that generated millions in revenue?"
            ],
            'marketing': [
                "Smart move! Digital marketing is where we really shine! 📈",
                "We've generated over $50M in revenue for our clients in the last 2 years.",
                "Our multi-channel approach typically increases leads by 300-500%.",
                "Ready to see how we can scale your marketing to the next level?"
            ],
            'seo': [
                "Perfect! SEO is the gift that keeps on giving! 🔍",
                "Our clients typically see 200-400% increase in organic traffic within 6 months.",
                "We've helped businesses rank #1 for competitive keywords worth $10K+ per month.",
                "Want to see what keywords you could be ranking for?"
            ],
            'ai_solutions': [
                "Automation is the future! You're thinking like a winner! 🤖",
                "We help businesses save 20+ hours per week with smart automation.",
                "Our automation systems have saved clients over $2M in labor costs.",
                "Ready to see how we can automate your biggest time-wasters?"
            ],
            'brand': [
                "Brand strategy is the foundation of everything! Great choice! 💡",
                "Strong brands charge 2-3x more than competitors and get it.",
                "We've helped brands increase their value by 400-800% in 12 months.",
                "Want to see how we can position your brand to dominate your market?"
            ]
        };

        const responses = serviceResponses[service] || [
            "That's a fantastic area to focus on! 🎯",
            "We've helped dozens of businesses excel in exactly this area.",
            "Our approach is data-driven and results-focused.",
            "Ready to see how we can transform your business?"
        ];

        this.addBotMessages(responses);
        this.updateQuickActions('consultation');
    }

    handleGrowthGoal(goal) {
        const goalResponses = {
            'growth_leads': [
                "More leads = More sales! I love your focus! 📈",
                "Our lead generation systems typically increase qualified leads by 400-600%.",
                "Last month alone, we generated 2,847 qualified leads for our clients.",
                "The secret? Multi-channel campaigns with AI-powered optimization.",
                "Ready to see how many leads we could generate for your business?"
            ],
            'growth_revenue': [
                "Revenue growth is what it's all about! You're speaking my language! 💰",
                "Our average client sees 300-500% revenue increase within 12 months.",
                "We've helped businesses go from $50K to $500K+ monthly revenue.",
                "The key is our proven 7-step revenue acceleration system.",
                "Want to see exactly how much revenue we could add to your business?"
            ],
            'growth_market': [
                "Market expansion is where the big money is! Smart thinking! 🚀",
                "We've helped clients successfully enter 47 new markets in the last year.",
                "Our market penetration strategies typically capture 15-25% market share fast.",
                "The secret is our data-driven market analysis and targeted campaigns.",
                "Ready to see which markets offer the biggest opportunity for you?"
            ]
        };

        const responses = goalResponses[goal] || [
            "That's an excellent growth goal! 🎯",
            "We've helped many businesses achieve exactly this type of growth.",
            "Our proven systems make growth predictable and scalable.",
            "Let's discuss how we can make this happen for you!"
        ];

        this.addBotMessages(responses);
        this.updateQuickActions('consultation');
    }

    // Utility methods
    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    formatMessage(message) {
        // Convert markdown-like formatting to HTML
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/✅/g, '<span style="color: var(--color-primary);">✅</span>');
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    getCurrentTime() {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    trackEvent(eventName, data = {}) {
        this.userEngagement.interactions++;
        console.log('📊 Event tracked:', { eventName, data, engagement: this.userEngagement });
        
        // You can integrate with analytics services here
        if (window.gtag) {
            window.gtag('event', eventName, data);
        }
    }

    scrollToBottom() {
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    saveLeadData(data) {
        // Store locally (in production, send to server)
        const leads = JSON.parse(localStorage.getItem('growbrandi_leads') || '[]');
        leads.push(data);
        localStorage.setItem('growbrandi_leads', JSON.stringify(leads));
        
        console.log('Lead captured:', data);
        
        // In production, send to your CRM/database
        // fetch('/api/leads', { method: 'POST', body: JSON.stringify(data) });
    }

    trackEvent(eventName, data = {}) {
        const event = {
            name: eventName,
            data: data,
            timestamp: new Date().toISOString(),
            page: window.location.href
        };
        
        console.log('Event tracked:', event);
        
        // In production, send to your analytics platform
        // gtag('event', eventName, data);
    }
}

// ===== AI FEATURES REPLACEMENT SYSTEM =====

class SloganGenerator {
    constructor() {
        this.slogans = {
            'technology': [
                'Innovation That Transforms Tomorrow',
                'Where Technology Meets Success',
                'Powering Your Digital Future',
                'Smart Solutions, Smarter Results',
                'Technology That Works For You'
            ],
            'healthcare': [
                'Caring Beyond Expectations',
                'Your Health, Our Priority',
                'Healing Through Innovation',
                'Excellence in Every Care',
                'Where Wellness Begins'
            ],
            'finance': [
                'Your Financial Success Partner',
                'Growing Wealth, Building Dreams',
                'Smart Money, Smarter Choices',
                'Financial Freedom Starts Here',
                'Investing in Your Tomorrow'
            ],
            'retail': [
                'Quality You Can Trust',
                'More Than Just Shopping',
                'Your Style, Our Passion',
                'Where Quality Meets Value',
                'Shopping Made Simple'
            ],
            'education': [
                'Shaping Tomorrow\'s Leaders',
                'Learning Without Limits',
                'Education That Inspires',
                'Knowledge, Growth, Success',
                'Your Future Starts Here'
            ],
            'consulting': [
                'Solutions That Transform',
                'Your Success, Our Mission',
                'Strategic Growth Partners',
                'Results You Can Measure',
                'Excellence in Every Solution'
            ],
            'default': [
                'Excellence in Every Detail',
                'Your Success, Our Commitment',
                'Quality That Speaks Volumes',
                'Beyond Expectations, Every Time',
                'Where Innovation Meets Excellence',
                'Transforming Visions into Reality',
                'Your Partner in Growth',
                'Creating Success Stories',
                'Building Tomorrow, Today',
                'Excellence Delivered'
            ]
        };
        this.leadCapture = new LeadCaptureSystem();
    }

    generateSlogan(industry = '', companyName = '') {
        const industryKey = this.detectIndustry(industry.toLowerCase());
        const slogans = this.slogans[industryKey] || this.slogans.default;
        const randomSlogan = slogans[Math.floor(Math.random() * slogans.length)];
        
        // Personalize with company name if provided
        if (companyName) {
            const personalizedOptions = [
                `${companyName}: ${randomSlogan}`,
                `${randomSlogan} - ${companyName}`,
                randomSlogan.replace('Your', `${companyName}'s`)
            ];
            return personalizedOptions[Math.floor(Math.random() * personalizedOptions.length)];
        }
        
        return randomSlogan;
    }

    detectIndustry(input) {
        const keywords = {
            'technology': ['tech', 'software', 'app', 'digital', 'ai', 'data', 'cloud', 'cyber'],
            'healthcare': ['health', 'medical', 'hospital', 'clinic', 'wellness', 'care', 'doctor'],
            'finance': ['bank', 'finance', 'investment', 'money', 'financial', 'wealth', 'insurance'],
            'retail': ['store', 'shop', 'retail', 'fashion', 'clothing', 'product', 'merchandise'],
            'education': ['school', 'education', 'learning', 'university', 'college', 'training'],
            'consulting': ['consulting', 'advisory', 'business', 'strategy', 'management']
        };
        
        for (const [industry, terms] of Object.entries(keywords)) {
            if (terms.some(term => input.includes(term))) {
                return industry;
            }
        }
        return 'default';
    }

    showSloganTool() {
        const modal = this.createSloganModal();
        document.body.appendChild(modal);
        modal.classList.add('active');
        
        // Track engagement
        this.leadCapture.trackEvent('slogan_tool_opened');
    }

    createSloganModal() {
        const modal = document.createElement('div');
        modal.className = 'ai-tool-modal';
        modal.innerHTML = `
            <div class="ai-tool-content">
                <div class="ai-tool-header">
                    <h3>🚀 Professional Slogan Generator</h3>
                    <p>Get industry-specific slogans that convert</p>
                    <button class="ai-tool-close">&times;</button>
                </div>
                
                <div class="ai-tool-form">
                    <div class="form-group">
                        <label>Company Name</label>
                        <input type="text" id="slogan-company" placeholder="Your Company Name">
                    </div>
                    <div class="form-group">
                        <label>Industry</label>
                        <select id="slogan-industry">
                            <option value="">Select Industry</option>
                            <option value="technology">Technology</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="finance">Finance</option>
                            <option value="retail">Retail</option>
                            <option value="education">Education</option>
                            <option value="consulting">Consulting</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <button class="ai-tool-btn" onclick="window.sloganGenerator.handleSloganGeneration()">Generate Slogans</button>
                </div>
                
                <div class="ai-results" id="slogan-results" style="display: none;">
                    <h4>Your Professional Slogans:</h4>
                    <div class="slogan-list" id="slogan-list"></div>
                    <div class="conversion-cta">
                        <p><strong>💡 Want a custom brand strategy with unlimited slogan variations?</strong></p>
                        <button class="conversion-btn" onclick="window.sloganGenerator.leadCapture.showLeadCapture('brand-strategy')">Get Custom Brand Package - $2,999</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.querySelector('.ai-tool-close').onclick = () => {
            modal.remove();
        };
        
        return modal;
    }

    handleSloganGeneration() {
        const company = document.getElementById('slogan-company').value;
        const industry = document.getElementById('slogan-industry').value;
        const resultsDiv = document.getElementById('slogan-results');
        const sloganList = document.getElementById('slogan-list');
        
        // Generate 5 different slogans
        const slogans = [];
        for (let i = 0; i < 5; i++) {
            slogans.push(this.generateSlogan(industry, company));
        }
        
        sloganList.innerHTML = slogans.map((slogan, index) => `
            <div class="slogan-item">
                <div class="slogan-text">${slogan}</div>
                <button class="slogan-copy" onclick="navigator.clipboard.writeText('${slogan}')">Copy</button>
            </div>
        `).join('');
        
        resultsDiv.style.display = 'block';
        this.leadCapture.trackEvent('slogans_generated', { industry, company });
        
        // Show lead capture after 10 seconds
        setTimeout(() => {
            if (!this.leadCapture.hasConverted) {
                this.showConversionPopup();
            }
        }, 10000);
    }

    showConversionPopup() {
        const popup = document.createElement('div');
        popup.className = 'conversion-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h4>🎯 Love These Slogans?</h4>
                <p>Get a complete brand strategy with:</p>
                <ul>
                    <li>✅ Unlimited custom slogans</li>
                    <li>✅ Logo design concepts</li>
                    <li>✅ Brand voice guidelines</li>
                    <li>✅ Market positioning strategy</li>
                </ul>
                <div class="popup-buttons">
                    <button class="btn-primary" onclick="window.sloganGenerator.leadCapture.showLeadCapture('brand-strategy')">Get Brand Package</button>
                    <button class="btn-secondary" onclick="this.parentElement.parentElement.remove()">Maybe Later</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
    }
}

class BusinessIntelligenceSystem {
    constructor() {
        this.insights = {
            'small-business': {
                'increase-sales': [
                    'Implement email marketing automation - avg 4200% ROI',
                    'Optimize Google My Business listing - 70% more local traffic',
                    'Create customer referral program - 25% revenue boost',
                    'Add live chat to website - 48% conversion increase',
                    'Launch retargeting campaigns - 10x better than cold traffic'
                ],
                'reduce-costs': [
                    'Automate social media posting - save 15 hours/week',
                    'Use project management tools - 23% efficiency gain',
                    'Implement VoIP phone system - 60% cost reduction',
                    'Switch to cloud-based software - 35% IT cost savings',
                    'Outsource non-core tasks - focus on revenue generation'
                ],
                'improve-efficiency': [
                    'Create standard operating procedures (SOPs)',
                    'Implement customer relationship management (CRM)',
                    'Use automated invoicing and payment systems',
                    'Set up inventory management automation',
                    'Create employee performance dashboards'
                ]
            },
            'e-commerce': {
                'increase-sales': [
                    'A/B test product pages - avg 19% conversion boost',
                    'Implement abandoned cart recovery - recover 29% of sales',
                    'Add product reviews and ratings - 18% sales increase',
                    'Create urgency with limited-time offers',
                    'Use exit-intent popups with discounts - 35% recovery'
                ],
                'reduce-costs': [
                    'Optimize shipping strategies - reduce by 23%',
                    'Implement inventory forecasting - prevent overstock',
                    'Use chatbots for customer service - 67% cost reduction',
                    'Automate order processing and fulfillment',
                    'Negotiate better payment processing rates'
                ]
            },
            'saas': {
                'increase-sales': [
                    'Implement freemium model - 40% conversion increase',
                    'Create in-app upgrade prompts - 25% upsell success',
                    'Offer annual billing discounts - improve cash flow',
                    'Add social proof and testimonials - 34% trust boost',
                    'Implement user onboarding sequences - reduce churn 23%'
                ],
                'reduce-costs': [
                    'Automate customer onboarding - save 80% support time',
                    'Implement self-service help center - 45% ticket reduction',
                    'Use predictive analytics for churn prevention',
                    'Optimize server costs with usage-based scaling',
                    'Automate billing and subscription management'
                ]
            }
        };
        this.leadCapture = new LeadCaptureSystem();
    }

    generateInsights(businessType, goal, industry) {
        const insights = this.insights[businessType]?.[goal] || this.insights['small-business'][goal] || [];
        
        // Add industry-specific insights
        const industryInsights = this.getIndustryInsights(industry, goal);
        
        return [...insights, ...industryInsights].slice(0, 5);
    }

    getIndustryInsights(industry, goal) {
        const industrySpecific = {
            'healthcare': {
                'increase-sales': ['Implement patient portal - improve retention 45%', 'Add telehealth services - expand market reach'],
                'reduce-costs': ['Automate appointment scheduling', 'Implement electronic health records (EHR)']
            },
            'finance': {
                'increase-sales': ['Create financial planning tools', 'Implement robo-advisor services'],
                'reduce-costs': ['Automate compliance reporting', 'Use AI for risk assessment']
            }
        };
        
        return industrySpecific[industry]?.[goal] || [];
    }

    showBusinessTool() {
        const modal = this.createBusinessModal();
        document.body.appendChild(modal);
        modal.classList.add('active');
        
        this.leadCapture.trackEvent('business_tool_opened');
    }

    createBusinessModal() {
        const modal = document.createElement('div');
        modal.className = 'ai-tool-modal';
        modal.innerHTML = `
            <div class="ai-tool-content">
                <div class="ai-tool-header">
                    <h3>📊 Business Intelligence Advisor</h3>
                    <p>Get data-driven growth strategies for your business</p>
                    <button class="ai-tool-close">&times;</button>
                </div>
                
                <div class="ai-tool-form">
                    <div class="form-group">
                        <label>Business Type</label>
                        <select id="business-type">
                            <option value="small-business">Small Business</option>
                            <option value="e-commerce">E-commerce</option>
                            <option value="saas">SaaS/Software</option>
                            <option value="service">Service Business</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Primary Goal</label>
                        <select id="business-goal">
                            <option value="increase-sales">Increase Sales</option>
                            <option value="reduce-costs">Reduce Costs</option>
                            <option value="improve-efficiency">Improve Efficiency</option>
                            <option value="expand-market">Expand Market</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Industry</label>
                        <input type="text" id="business-industry" placeholder="e.g., Healthcare, Finance, Retail">
                    </div>
                    <button class="ai-tool-btn" onclick="window.businessIntelligence.handleAnalysis()">Get Strategic Insights</button>
                </div>
                
                <div class="ai-results" id="business-results" style="display: none;">
                    <h4>Strategic Recommendations:</h4>
                    <div class="insights-list" id="insights-list"></div>
                    <div class="conversion-cta">
                        <p><strong>🚀 Want a custom growth strategy with implementation roadmap?</strong></p>
                        <button class="conversion-btn" onclick="window.businessIntelligence.leadCapture.showLeadCapture('growth-strategy')">Get Custom Strategy - $4,999</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.querySelector('.ai-tool-close').onclick = () => modal.remove();
        return modal;
    }

    handleAnalysis() {
        const businessType = document.getElementById('business-type').value;
        const goal = document.getElementById('business-goal').value;
        const industry = document.getElementById('business-industry').value;
        
        const insights = this.generateInsights(businessType, goal, industry);
        const insightsList = document.getElementById('insights-list');
        
        insightsList.innerHTML = insights.map((insight, index) => `
            <div class="insight-item">
                <div class="insight-number">${index + 1}</div>
                <div class="insight-content">
                    <div class="insight-text">${insight}</div>
                    <div class="insight-impact">Implementation Impact: High</div>
                </div>
            </div>
        `).join('');
        
        document.getElementById('business-results').style.display = 'block';
        this.leadCapture.trackEvent('insights_generated', { businessType, goal, industry });
        
        // Show conversion after viewing insights
        setTimeout(() => {
            this.showImplementationOffer();
        }, 15000);
    }

    showImplementationOffer() {
        const offer = document.createElement('div');
        offer.className = 'implementation-offer';
        offer.innerHTML = `
            <div class="offer-content">
                <h4>🎯 Ready to Implement These Strategies?</h4>
                <p>Our experts can implement all these recommendations for you:</p>
                <div class="offer-benefits">
                    <div class="benefit">✅ Complete implementation in 90 days</div>
                    <div class="benefit">✅ Dedicated project manager</div>
                    <div class="benefit">✅ Performance tracking & optimization</div>
                    <div class="benefit">✅ 300% ROI guarantee</div>
                </div>
                <div class="offer-buttons">
                    <button class="btn-primary" onclick="window.businessIntelligence.leadCapture.showLeadCapture('implementation')">Get Implementation Quote</button>
                    <button class="btn-secondary" onclick="this.parentElement.parentElement.remove()">Download Report</button>
                </div>
            </div>
        `;
        document.body.appendChild(offer);
    }
}

class ProjectEstimator {
    constructor() {
        this.pricing = {
            'web-development': {
                'basic': { min: 2999, max: 7999, timeline: '4-6 weeks' },
                'advanced': { min: 7999, max: 19999, timeline: '8-12 weeks' },
                'enterprise': { min: 19999, max: 49999, timeline: '12-20 weeks' }
            },
            'digital-marketing': {
                'basic': { min: 1999, max: 4999, timeline: '2-3 months' },
                'advanced': { min: 4999, max: 12999, timeline: '3-6 months' },
                'enterprise': { min: 12999, max: 29999, timeline: '6-12 months' }
            },
            'brand-strategy': {
                'basic': { min: 2999, max: 6999, timeline: '3-4 weeks' },
                'advanced': { min: 6999, max: 14999, timeline: '6-8 weeks' },
                'enterprise': { min: 14999, max: 34999, timeline: '8-12 weeks' }
            }
        };
        this.leadCapture = new LeadCaptureSystem();
    }

    calculateEstimate(service, complexity, features) {
        const basePrice = this.pricing[service]?.[complexity] || this.pricing['web-development']['basic'];
        
        // Add feature multipliers
        let multiplier = 1;
        if (features.includes('e-commerce')) multiplier += 0.3;
        if (features.includes('custom-design')) multiplier += 0.2;
        if (features.includes('integrations')) multiplier += 0.15;
        if (features.includes('mobile-app')) multiplier += 0.4;
        
        return {
            min: Math.round(basePrice.min * multiplier),
            max: Math.round(basePrice.max * multiplier),
            timeline: basePrice.timeline
        };
    }

    showEstimatorTool() {
        const modal = this.createEstimatorModal();
        document.body.appendChild(modal);
        modal.classList.add('active');
        
        this.leadCapture.trackEvent('estimator_tool_opened');
    }

    createEstimatorModal() {
        const modal = document.createElement('div');
        modal.className = 'ai-tool-modal';
        modal.innerHTML = `
            <div class="ai-tool-content">
                <div class="ai-tool-header">
                    <h3>💰 Project Cost Estimator</h3>
                    <p>Get accurate pricing for your project in seconds</p>
                    <button class="ai-tool-close">&times;</button>
                </div>
                
                <div class="ai-tool-form">
                    <div class="form-group">
                        <label>Service Type</label>
                        <select id="project-service">
                            <option value="web-development">Web Development</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="brand-strategy">Brand Strategy</option>
                            <option value="seo-optimization">SEO Optimization</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Project Complexity</label>
                        <select id="project-complexity">
                            <option value="basic">Basic - Simple requirements</option>
                            <option value="advanced">Advanced - Complex features</option>
                            <option value="enterprise">Enterprise - Full-scale solution</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Additional Features</label>
                        <div class="checkbox-group">
                            <label><input type="checkbox" value="e-commerce"> E-commerce Integration</label>
                            <label><input type="checkbox" value="custom-design"> Custom Design</label>
                            <label><input type="checkbox" value="integrations"> Third-party Integrations</label>
                            <label><input type="checkbox" value="mobile-app"> Mobile App</label>
                        </div>
                    </div>
                    <button class="ai-tool-btn" onclick="window.projectEstimator.handleEstimation()">Get Instant Quote</button>
                </div>
                
                <div class="ai-results" id="estimator-results" style="display: none;">
                    <h4>Your Project Estimate:</h4>
                    <div class="estimate-display" id="estimate-display"></div>
                    <div class="conversion-cta">
                        <p><strong>🔥 Limited Time: Book consultation this week and save 20%!</strong></p>
                        <button class="conversion-btn" onclick="window.projectEstimator.leadCapture.showLeadCapture('project-quote')">Lock In This Price</button>
                    </div>
                </div>
            </div>
        `;
        
        modal.querySelector('.ai-tool-close').onclick = () => modal.remove();
        return modal;
    }

    handleEstimation() {
        const service = document.getElementById('project-service').value;
        const complexity = document.getElementById('project-complexity').value;
        const features = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        
        const estimate = this.calculateEstimate(service, complexity, features);
        const estimateDisplay = document.getElementById('estimate-display');
        
        estimateDisplay.innerHTML = `
            <div class="estimate-card">
                <div class="price-range">
                    <span class="price-min">$${estimate.min.toLocaleString()}</span>
                    <span class="price-separator">-</span>
                    <span class="price-max">$${estimate.max.toLocaleString()}</span>
                </div>
                <div class="timeline">Timeline: ${estimate.timeline}</div>
                <div class="estimate-includes">
                    <h5>Includes:</h5>
                    <ul>
                        <li>✅ Complete project delivery</li>
                        <li>✅ Quality assurance testing</li>
                        <li>✅ 3 months support</li>
                        <li>✅ Performance optimization</li>
                        <li>✅ Launch assistance</li>
                    </ul>
                </div>
                <div class="roi-calculator">
                    <div class="roi-stat">
                        <span class="roi-label">Expected ROI:</span>
                        <span class="roi-value">300-500%</span>
                    </div>
                    <div class="roi-stat">
                        <span class="roi-label">Payback Period:</span>
                        <span class="roi-value">3-6 months</span>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('estimator-results').style.display = 'block';
        this.leadCapture.trackEvent('estimate_generated', { service, complexity, features, estimate });
        
        // Show urgency popup after 8 seconds
        setTimeout(() => {
            this.showUrgencyPopup(estimate);
        }, 8000);
    }

    showUrgencyPopup(estimate) {
        const popup = document.createElement('div');
        popup.className = 'urgency-popup';
        popup.innerHTML = `
            <div class="popup-content">
                <h4>⏰ Special Offer Expires Soon!</h4>
                <p>Book your consultation within the next 24 hours and get:</p>
                <ul>
                    <li>🎯 20% discount on your project</li>
                    <li>🚀 Priority project start</li>
                    <li>💎 Free brand audit ($500 value)</li>
                    <li>📞 Direct access to senior strategist</li>
                </ul>
                <div class="savings">You save: $${Math.round(estimate.min * 0.2).toLocaleString()} - $${Math.round(estimate.max * 0.2).toLocaleString()}</div>
                <div class="popup-buttons">
                    <button class="btn-primary" onclick="window.projectEstimator.leadCapture.showLeadCapture('urgent-booking')">Claim 20% Discount</button>
                    <button class="btn-secondary" onclick="this.parentElement.parentElement.remove()">I'll Pay Full Price Later</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);
    }
}

class LeadCaptureSystem {
    constructor() {
        this.hasConverted = false;
        this.leadScore = 0;
        this.engagementData = {
            toolsUsed: [],
            timeSpent: 0,
            pageViews: 0,
            interactions: 0
        };
        this.startTime = Date.now();
    }

    showLeadCapture(source = 'general') {
        if (this.hasConverted) return;
        
        const modal = this.createLeadCaptureModal(source);
        document.body.appendChild(modal);
        modal.classList.add('active');
        
        this.trackEvent('lead_capture_shown', { source });
    }

    createLeadCaptureModal(source) {
        const offers = {
            'brand-strategy': {
                title: '🚀 Complete Brand Strategy Package',
                value: '$2,999',
                originalValue: '$4,999',
                savings: '$2,000',
                benefits: [
                    'Custom brand strategy & positioning',
                    'Logo design + 5 variations',
                    'Brand guidelines document',
                    'Marketing materials templates',
                    '6 months brand consultation'
                ]
            },
            'growth-strategy': {
                title: '📈 Custom Growth Strategy',
                value: '$4,999',
                originalValue: '$7,999',
                savings: '$3,000',
                benefits: [
                    'Complete business analysis',
                    'Custom growth roadmap',
                    '90-day implementation plan',
                    'Performance tracking setup',
                    'Monthly strategy calls'
                ]
            },
            'project-quote': {
                title: '💰 Locked-In Project Pricing',
                value: 'Quote Valid',
                originalValue: 'Price May Increase',
                savings: 'Save 20%',
                benefits: [
                    'Price locked for 30 days',
                    'Priority project scheduling',
                    'Free consultation call',
                    'Dedicated project manager',
                    'Results guarantee'
                ]
            }
        };
        
        const offer = offers[source] || offers['growth-strategy'];
        
        const modal = document.createElement('div');
        modal.className = 'premium-lead-modal';
        modal.innerHTML = `
            <div class="premium-lead-content">
                <div class="offer-header">
                    <h3>${offer.title}</h3>
                    <div class="offer-pricing">
                        <span class="current-price">${offer.value}</span>
                        <span class="original-price">${offer.originalValue}</span>
                        <span class="savings">${offer.savings}</span>
                    </div>
                </div>
                
                <div class="offer-benefits">
                    <h4>What You Get:</h4>
                    <ul>
                        ${offer.benefits.map(benefit => `<li>✅ ${benefit}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="urgency-timer">
                    <div class="timer-text">⏰ Offer expires in:</div>
                    <div class="timer-display" id="countdown-timer">23:59:45</div>
                </div>
                
                <form class="premium-lead-form" id="premium-lead-form">
                    <div class="form-row">
                        <input type="text" placeholder="First Name" required>
                        <input type="text" placeholder="Last Name" required>
                    </div>
                    <div class="form-row">
                        <input type="email" placeholder="Business Email" required>
                        <input type="tel" placeholder="Phone Number" required>
                    </div>
                    <div class="form-row">
                        <input type="text" placeholder="Company Name" required>
                        <select required>
                            <option value="">Monthly Revenue</option>
                            <option value="under-10k">Under $10K</option>
                            <option value="10k-50k">$10K - $50K</option>
                            <option value="50k-100k">$50K - $100K</option>
                            <option value="100k-plus">$100K+</option>
                        </select>
                    </div>
                    <div class="form-row full-width">
                        <textarea placeholder="What's your biggest business challenge right now?" rows="3"></textarea>
                    </div>
                    <button type="submit" class="premium-submit-btn">Claim This Offer Now 🚀</button>
                </form>
                
                <div class="trust-signals">
                    <div class="trust-item">🏆 500+ Successful Projects</div>
                    <div class="trust-item">⭐ 4.9/5 Client Rating</div>
                    <div class="trust-item">💰 100% Money-Back Guarantee</div>
                </div>
                
                <button class="premium-close" onclick="this.parentElement.parentElement.remove()">&times;</button>
            </div>
        `;
        
        // Start countdown timer
        this.startCountdownTimer();
        
        // Handle form submission
        modal.querySelector('#premium-lead-form').onsubmit = (e) => {
            e.preventDefault();
            this.handlePremiumLead(e.target, source);
        };
        
        return modal;
    }

    startCountdownTimer() {
        let timeLeft = 24 * 60 * 60 - 15; // 23:59:45
        
        const timer = setInterval(() => {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            
            const timerElement = document.getElementById('countdown-timer');
            if (timerElement) {
                timerElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }
            
            timeLeft--;
            
            if (timeLeft < 0) {
                clearInterval(timer);
                if (timerElement) {
                    timerElement.textContent = 'EXPIRED';
                    timerElement.style.color = '#ef4444';
                }
            }
        }, 1000);
    }

    handlePremiumLead(form, source) {
        const formData = new FormData(form);
        const leadData = {
            source: source,
            timestamp: new Date().toISOString(),
            engagementData: this.engagementData,
            leadScore: this.calculateLeadScore(),
            urgencyLevel: 'high'
        };
        
        // Form data processing
        for (let [key, value] of formData.entries()) {
            leadData[key] = value;
        }
        
        this.savePremiumLead(leadData);
        this.hasConverted = true;
        
        // Show success message
        this.showSuccessMessage();
        
        // Remove modal
        form.closest('.premium-lead-modal').remove();
        
        this.trackEvent('premium_lead_captured', leadData);
    }

    calculateLeadScore() {
        let score = 0;
        score += this.engagementData.toolsUsed.length * 20;
        score += Math.min(this.engagementData.timeSpent / 60000, 10) * 5; // Max 50 points for time
        score += this.engagementData.pageViews * 10;
        score += Math.min(this.engagementData.interactions, 20) * 2;
        return Math.min(score, 100);
    }

    showSuccessMessage() {
        const success = document.createElement('div');
        success.className = 'success-message';
        success.innerHTML = `
            <div class="success-content">
                <div class="success-icon">🎉</div>
                <h3>Congratulations! Your Spot is Reserved</h3>
                <p>We've sent your consultation details to your email.</p>
                <div class="next-steps">
                    <h4>What happens next:</h4>
                    <div class="step">1️⃣ Check your email for calendar link</div>
                    <div class="step">2️⃣ Our strategist will call you within 24 hours</div>
                    <div class="step">3️⃣ We'll prepare a custom growth plan</div>
                </div>
                <button class="success-close" onclick="this.parentElement.parentElement.remove()">Got it!</button>
            </div>
        `;
        document.body.appendChild(success);
        
        // Auto-remove after 10 seconds
        setTimeout(() => success.remove(), 10000);
    }

    savePremiumLead(data) {
        const leads = JSON.parse(localStorage.getItem('growbrandi_premium_leads') || '[]');
        leads.push(data);
        localStorage.setItem('growbrandi_premium_leads', JSON.stringify(leads));
        
        console.log('Premium lead captured:', data);
    }

    trackEvent(eventName, data = {}) {
        this.engagementData.interactions++;
        
        if (eventName.includes('tool')) {
            this.engagementData.toolsUsed.push(eventName);
        }
        
        console.log('Event tracked:', { eventName, data, engagement: this.engagementData });
    }
}

// Initialize all systems when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Main conversion system
    window.conversionChatSystem = new ConversionChatSystem();
    
    // Individual tools (integrated with main system)
    window.conversionChatSystem.sloganGenerator = new SloganGenerator();
    window.conversionChatSystem.businessIntelligenceSystem = new BusinessIntelligenceSystem();
    window.conversionChatSystem.projectEstimator = new ProjectEstimator();
    window.conversionChatSystem.leadCaptureSystem = new LeadCaptureSystem();
    
    // Legacy references for compatibility
    window.conversionChat = window.conversionChatSystem;
    window.sloganGenerator = window.conversionChatSystem.sloganGenerator;
    window.businessIntelligence = window.conversionChatSystem.businessIntelligenceSystem;
    window.projectEstimator = window.conversionChatSystem.projectEstimator;
    window.leadCapture = window.conversionChatSystem.leadCaptureSystem;
    
    // Enhanced engagement tracking
    setInterval(() => {
        if (window.conversionChatSystem?.leadCaptureSystem) {
            window.conversionChatSystem.leadCaptureSystem.engagementData.timeSpent = Date.now() - window.conversionChatSystem.leadCaptureSystem.startTime;
        }
    }, 1000);
    
    // Track page views
    window.addEventListener('hashchange', () => {
        if (window.conversionChatSystem?.leadCaptureSystem) {
            window.conversionChatSystem.leadCaptureSystem.engagementData.pageViews++;
        }
    });
    
    // Track scroll depth
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            if (window.conversionChatSystem?.leadCaptureSystem) {
                window.conversionChatSystem.leadCaptureSystem.engagementData.scrollDepth = maxScroll;
            }
        }
    });
    
    console.log('🚀 Enhanced Conversion System Ready - Maximum lead generation mode activated!');
});