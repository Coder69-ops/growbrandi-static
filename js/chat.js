// OLD CHAT SYSTEM - DISABLED TO PREVENT CONFLICTS
// Using ConversionChatSystem from conversion-chat.js instead

class ChatManager {
    constructor() {
        // Disabled - using ConversionChatSystem instead
        console.log('ChatManager disabled - using ConversionChatSystem');
        return;
        
        this.isOpen = false;
        this.messages = [];
        this.isLoading = false;
        this.chatInterface = document.getElementById('chat-interface');
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.chatForm = document.getElementById('chat-form');
        this.chatSuggestions = document.getElementById('chat-suggestions');
        this.init();
    }

    init() {
        // Setup event listeners
        document.getElementById('chat-button').addEventListener('click', () => this.open());
        document.getElementById('chat-close').addEventListener('click', () => this.close());
        this.chatForm.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Close on overlay click
        this.chatInterface.addEventListener('click', (e) => {
            if (e.target === this.chatInterface) {
                this.close();
            }
        });
    }

    open() {
        this.isOpen = true;
        this.chatInterface.classList.remove('hidden');
        this.chatInput.focus();
        
        // Show initial greeting if no messages
        if (this.messages.length === 0) {
            this.addMessage('expert', 'Hi! I\'m a GrowBrandi expert. Let me connect you with our team for a free consultation. What\'s your biggest business challenge? 🚀');
            this.showSuggestions(['I need more leads', 'Increase website traffic', 'Improve conversion rates', 'Build brand awareness']);
        }
    }

    close() {
        this.isOpen = false;
        this.chatInterface.classList.add('hidden');
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const message = this.chatInput.value.trim();
        if (!message || this.isLoading) return;
        
        // Add user message
        this.addMessage('user', message);
        this.chatInput.value = '';
        this.isLoading = true;
        
        // Hide suggestions
        this.chatSuggestions.innerHTML = '';
        
        // Simulate thinking time
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage('expert', response);
            this.isLoading = false;
            
            // Show consultation offer after 2 messages
            if (this.messages.filter(m => m.role === 'user').length >= 2) {
                setTimeout(() => {
                    this.showConsultationOffer();
                }, 2000);
            }
        }, 1000);
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('lead') || lowerMessage.includes('customer')) {
            return 'Great! Lead generation is our specialty. We\'ve helped clients increase leads by 300%. I\'d love to show you our proven system in a free 15-minute consultation.';
        } else if (lowerMessage.includes('traffic') || lowerMessage.includes('seo') || lowerMessage.includes('website')) {
            return 'Website traffic is crucial for growth! Our SEO strategies have doubled traffic for 90% of our clients. Let\'s schedule a quick call to discuss your specific needs.';
        } else if (lowerMessage.includes('conversion') || lowerMessage.includes('sales')) {
            return 'Conversion optimization is our superpower! We\'ve improved conversion rates by up to 250% for similar businesses. I can share some quick wins in a brief consultation.';
        } else if (lowerMessage.includes('brand') || lowerMessage.includes('marketing')) {
            return 'Brand strategy is the foundation of all success! We\'ve built multi-million dollar brands from scratch. Would you like to see how we can elevate your brand?';
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
            return 'Our services range from $3K-$50K depending on scope. But here\'s the thing - every client sees 3-10x ROI within 6 months. Let\'s discuss what would work best for your budget.';
        } else {
            return 'I understand your challenge. We\'ve helped hundreds of businesses overcome similar obstacles with proven strategies. Let\'s discuss your specific situation in a free consultation - no obligation!';
        }
    }

    addMessage(role, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${role}`;
        messageDiv.textContent = text;
        
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        
        this.messages.push({ role, text });
    }

    showSuggestions(suggestions) {
        this.chatSuggestions.innerHTML = suggestions.map(suggestion => `
            <button class="suggestion-chip" onclick="chatManager.sendSuggestion('${suggestion.replace(/'/g, "\\'")}')">
                ${suggestion}
            </button>
        `).join('');
    }

    sendSuggestion(text) {
        this.chatInput.value = text;
        this.chatForm.dispatchEvent(new Event('submit'));
    }

    updateContextualSuggestions(message) {
        const lowerMessage = message.toLowerCase();
        let suggestions = [];
        
        if (lowerMessage.includes('project') || lowerMessage.includes('estimate') || lowerMessage.includes('cost')) {
            suggestions = CONTEXTUAL_SUGGESTIONS.project;
        } else if (lowerMessage.includes('service') || lowerMessage.includes('package') || lowerMessage.includes('offer')) {
            suggestions = CONTEXTUAL_SUGGESTIONS.services;
        } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('budget')) {
            suggestions = CONTEXTUAL_SUGGESTIONS.pricing;
        } else if (lowerMessage.includes('consultation') || lowerMessage.includes('meeting') || lowerMessage.includes('call')) {
            suggestions = CONTEXTUAL_SUGGESTIONS.consultation;
        }
        
        if (suggestions.length > 0) {
            this.showSuggestions(suggestions);
        }
    }

}

// Legacy chat manager - replaced by conversion chat system
// This file is kept for compatibility but main functionality is in conversion-chat.js
console.log('Chat manager ready - using conversion chat system');
