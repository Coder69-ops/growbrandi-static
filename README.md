# GrowBrandi - Static HTML Version

A fully-featured digital agency website built with vanilla HTML, CSS, and JavaScript. Includes AI-powered chat, smooth animations, and SPA routing.

## 🌟 Features

- **Single Page Application (SPA)** - Hash-based routing for smooth navigation
- **AI Chat Integration** - Powered by Google Gemini API
- **Responsive Design** - Mobile-first, works on all devices
- **Smooth Animations** - Intersection Observer + CSS animations
- **Glass Morphism UI** - Modern, elegant design
- **SEO Optimized** - Meta tags and semantic HTML
- **Fast Performance** - Optimized assets and lazy loading
- **PWA Ready** - Service worker support (optional)

## 📁 Project Structure

```
html-version/
├── index.html              # Main HTML file
├── .htaccess              # Apache configuration
├── css/
│   └── styles.css         # Complete styling system
├── js/
│   ├── constants.js       # Website data and configuration
│   ├── router.js          # SPA routing system
│   ├── pages.js           # Page templates
│   ├── chat.js            # AI chat functionality
│   ├── animations.js      # Animations and interactions
│   └── main.js            # Application entry point
└── images/                # Image assets
```

## 🚀 Quick Start

### 1. Setup

1. **Copy files to your server:**
   ```bash
   # Upload the html-version folder to your hosting
   # via FTP, cPanel, or Git
   ```

2. **Get Gemini API Key:**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Keep it safe (you'll enter it in the website)

3. **Configure (Optional):**
   - Edit `js/constants.js` to update company information
   - Modify `css/styles.css` for color/style changes
   - Update `index.html` meta tags for SEO

### 2. Deployment

#### Shared Hosting (cPanel, Hostinger, GoDaddy, etc.)

1. **Upload via FTP:**
   ```
   - Connect to your hosting via FTP (FileZilla, etc.)
   - Navigate to public_html or www folder
   - Upload all files from html-version folder
   - Ensure .htaccess is uploaded (enable "show hidden files")
   ```

2. **Upload via cPanel:**
   ```
   - Login to cPanel
   - Go to File Manager
   - Navigate to public_html
   - Upload files or extract ZIP
   - Set permissions if needed (755 for folders, 644 for files)
   ```

3. **Verify Apache Modules:**
   - Ensure `mod_rewrite` is enabled (usually default)
   - Contact hosting support if SPA routing doesn't work

#### VPS/Cloud (DigitalOcean, AWS, Linode, etc.)

1. **Nginx Configuration:**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/html;
       index index.html;

       # SPA routing
       location / {
           try_files $uri $uri/ /index.html;
       }

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

       # Browser caching
       location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|otf)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

2. **Apache Configuration:**
   - The included `.htaccess` file handles everything
   - Just ensure `AllowOverride All` in your Apache config

#### Static Hosting (Netlify, Vercel, GitHub Pages)

1. **Netlify:**
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli

   # Deploy
   cd html-version
   netlify deploy --prod
   ```

2. **Vercel:**
   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   cd html-version
   vercel --prod
   ```

3. **GitHub Pages:**
   ```bash
   # Push to GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main

   # Enable GitHub Pages in repository settings
   # Select main branch and root folder
   ```

## 🔧 Configuration

### API Key Setup

When users first open the AI chat, they'll be prompted to enter their Gemini API key:
- Key is stored in localStorage
- Never sent to your server
- Can be updated anytime via chat settings

### Customization

#### Colors (css/styles.css):
```css
:root {
    --color-primary: #10b981;    /* Main brand color */
    --color-secondary: #3b82f6;  /* Accent color */
    --color-accent: #8b5cf6;     /* Highlight color */
    /* ... */
}
```

#### Company Info (js/constants.js):
```javascript
const CONTACT_INFO = {
    email: 'your-email@example.com',
    phone: '+1 (555) 123-4567',
    address: 'Your Address',
    hours: 'Mon - Fri: 9AM - 6PM',
    social: {
        twitter: 'https://twitter.com/yourhandle',
        linkedin: 'https://linkedin.com/company/yourcompany',
        // ...
    }
};
```

#### Services (js/constants.js):
```javascript
const SERVICES = [
    {
        id: 'web-development',
        title: 'Your Service',
        description: 'Service description',
        icon: '🚀',
        features: ['Feature 1', 'Feature 2'],
        price: 'Starting at $X,XXX'
    },
    // Add more services...
];
```

## 🎨 Features Details

### SPA Routing
- Hash-based navigation (`#/about`, `#/services`, etc.)
- Browser back/forward button support
- Smooth page transitions
- SEO-friendly with proper title updates

### AI Chat
- Powered by Google Gemini 1.5 Flash
- Context-aware responses
- Message history
- Pre-defined suggestions
- Secure API key storage

### Animations
- Scroll-triggered animations
- Parallax effects
- Animated counters
- Smooth transitions
- Mobile-optimized

### Performance
- Lazy loading images
- CSS/JS minification recommended
- Gzip compression
- Browser caching
- Optimized assets

## 🐛 Troubleshooting

### SPA Routing Not Working
- **Issue:** Direct URLs (e.g., `/about`) show 404
- **Fix:** Ensure `.htaccess` is uploaded and `mod_rewrite` is enabled
- **Nginx:** Add `try_files $uri $uri/ /index.html;` to your config

### AI Chat Not Responding
- **Issue:** Chat messages fail
- **Fix:** Verify Gemini API key is valid
- **Check:** Browser console for error messages
- **Note:** API key needs Gemini API access

### Animations Not Working
- **Issue:** Elements don't animate on scroll
- **Fix:** Check browser console for JavaScript errors
- **Note:** Older browsers may need polyfills

### Images Not Loading
- **Issue:** Broken image icons
- **Fix:** Add images to `images/` folder
- **Update:** Image paths in `constants.js`

## 📱 Browser Support

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile browsers ✅

## 🔒 Security

- HTTPS recommended (Let's Encrypt free SSL)
- Security headers in `.htaccess`
- XSS protection enabled
- CORS configured
- No sensitive data in code

## 📈 SEO

- Semantic HTML5 structure
- Meta tags for social sharing
- Fast page load times
- Mobile-friendly design
- Schema.org markup ready

## 🚧 Optional Enhancements

### Enable Service Worker (PWA)
Uncomment in `main.js`:
```javascript
navigator.serviceWorker.register('/sw.js')
```

### Add Analytics
Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Add Contact Form Backend
Update `handleContactSubmit()` in `pages.js`:
```javascript
const response = await fetch('https://your-api.com/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 📞 Support

Need help? Contact us:
- Email: hello@growbrandi.com
- Website: www.growbrandi.com
- Documentation: [Link to docs]

## 📄 License

© 2024 GrowBrandi. All rights reserved.

---

**Built with ❤️ using HTML, CSS, and JavaScript**
# growbrandi-static
