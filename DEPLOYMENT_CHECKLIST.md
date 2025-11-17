# 🚀 Deployment Checklist

Use this checklist before deploying to production.

## Pre-Deployment

### Content Review
- [ ] Update company information in `js/constants.js`
- [ ] Add real images to `images/` folder
- [ ] Update meta tags in `index.html` (title, description, OG tags)
- [ ] Verify contact information (email, phone, address)
- [ ] Review all service descriptions and pricing
- [ ] Check team member profiles
- [ ] Proofread all text content
- [ ] Update copyright year in footer

### Configuration
- [ ] Get Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
- [ ] Configure form submission endpoint (if using backend)
- [ ] Set up analytics (Google Analytics, Facebook Pixel, etc.)
- [ ] Update social media links
- [ ] Configure email addresses
- [ ] Set proper site URL in config

### Technical Setup
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify all links work correctly
- [ ] Test AI chat functionality
- [ ] Check all forms submit correctly
- [ ] Verify SPA routing works on your server
- [ ] Test scroll animations
- [ ] Check responsive breakpoints

### SEO & Performance
- [ ] Add favicon and app icons
- [ ] Optimize all images (compress, proper formats)
- [ ] Add alt text to all images
- [ ] Verify meta tags for social sharing
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Add sitemap.xml (optional)
- [ ] Add robots.txt (optional)
- [ ] Set up SSL certificate (HTTPS)

### Security
- [ ] Verify `.htaccess` security headers
- [ ] Ensure API keys are not hardcoded
- [ ] Test CORS configuration
- [ ] Enable HTTPS redirect (uncomment in .htaccess)
- [ ] Set up www redirect (www vs non-www)
- [ ] Review form validation
- [ ] Test XSS protection

## Deployment Steps

### Shared Hosting (cPanel/FTP)
1. [ ] Connect to hosting via FTP or cPanel File Manager
2. [ ] Navigate to `public_html` or `www` folder
3. [ ] Upload all files from `html-version` folder
4. [ ] Ensure `.htaccess` is uploaded (show hidden files)
5. [ ] Set proper file permissions (755 folders, 644 files)
6. [ ] Test website at your domain
7. [ ] Verify SPA routing works (test direct URLs)
8. [ ] Test AI chat with API key

### VPS/Cloud Server
1. [ ] SSH into your server
2. [ ] Navigate to web root (`/var/www/html`)
3. [ ] Upload files via SCP/SFTP or Git
4. [ ] Configure web server (Apache/Nginx)
5. [ ] Set proper permissions
6. [ ] Restart web server
7. [ ] Test website

### Static Hosting (Netlify/Vercel)
1. [ ] Push code to Git repository
2. [ ] Connect repository to hosting platform
3. [ ] Configure build settings (none needed)
4. [ ] Set environment variables (if any)
5. [ ] Deploy
6. [ ] Add custom domain (optional)
7. [ ] Configure SSL (usually automatic)

## Post-Deployment

### Verification
- [ ] Test all pages load correctly
- [ ] Verify AI chat works with API key
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Test on different browsers
- [ ] Verify analytics tracking
- [ ] Test social media sharing
- [ ] Check console for errors

### Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Test with GTmetrix
- [ ] Check Lighthouse scores
- [ ] Verify Gzip compression is working
- [ ] Test browser caching
- [ ] Check image optimization

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Verify meta tags with Facebook Debugger
- [ ] Test with Twitter Card Validator
- [ ] Check mobile-friendliness (Google Mobile-Friendly Test)
- [ ] Set up Google Business Profile
- [ ] Submit to search engines

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error tracking (optional)
- [ ] Set up analytics dashboards
- [ ] Monitor page load times
- [ ] Track conversion rates
- [ ] Monitor chat usage

## Common Issues & Fixes

### Issue: 404 on Direct URLs
**Fix:** 
- Ensure `.htaccess` is uploaded
- Verify `mod_rewrite` is enabled on Apache
- For Nginx, add `try_files $uri $uri/ /index.html;`

### Issue: AI Chat Not Working
**Fix:**
- Verify Gemini API key is valid
- Check browser console for errors
- Ensure CORS is configured correctly
- Test API key at Google AI Studio

### Issue: Slow Page Load
**Fix:**
- Compress images (use WebP format)
- Enable Gzip compression
- Minimize CSS/JS files
- Enable browser caching
- Use CDN for assets (optional)

### Issue: Images Not Loading
**Fix:**
- Verify image paths in `constants.js`
- Upload images to `images/` folder
- Check file permissions
- Test image URLs directly

### Issue: Forms Not Submitting
**Fix:**
- Check console for JavaScript errors
- Verify form submission endpoint
- Test CORS configuration
- Add proper error handling

## Maintenance

### Regular Tasks
- [ ] Update content monthly
- [ ] Check for broken links
- [ ] Monitor analytics
- [ ] Update blog posts (if enabled)
- [ ] Review and respond to contact form submissions
- [ ] Update team photos and bios
- [ ] Refresh case studies and portfolio

### Security Updates
- [ ] Renew SSL certificate annually
- [ ] Review security headers
- [ ] Update dependencies (if any)
- [ ] Monitor for vulnerabilities
- [ ] Backup website files monthly

### Performance Optimization
- [ ] Optimize new images
- [ ] Review page load times
- [ ] Update cached assets
- [ ] Monitor mobile performance
- [ ] Test on new browser versions

## Launch Day
- [ ] Final content review
- [ ] Test all functionality
- [ ] Verify analytics are tracking
- [ ] Clear browser cache
- [ ] Test from different locations/devices
- [ ] Announce on social media
- [ ] Send announcement email
- [ ] Update LinkedIn, Facebook, etc.
- [ ] Submit to directories
- [ ] Share with team

---

**Notes:**
- Keep this checklist updated as you add features
- Document any custom configurations
- Save backup of working version before major changes
- Test in staging environment before production (if available)

**Need Help?**
- Check README.md for detailed instructions
- Review console for error messages
- Contact hosting support for server issues
- Test in incognito mode to avoid cache issues
