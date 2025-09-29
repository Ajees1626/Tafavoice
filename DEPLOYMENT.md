# Deployment Guide

This guide provides step-by-step instructions for deploying the Business Man Website to various hosting platforms.

## 🚀 Quick Start

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform

## 📋 Pre-deployment Checklist

- [ ] Update `src/utils/constants.ts` with your actual site information
- [ ] Replace placeholder images with your actual images
- [ ] Update contact information and social media links
- [ ] Test the build locally with `npm run preview`
- [ ] Verify all links and forms work correctly

## 🌐 Deployment Options

### Vercel (Recommended)

**One-click deployment:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/business-man-website)

**Manual deployment:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to configure your project

**Configuration:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### Netlify

**One-click deployment:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/business-man-website)

**Manual deployment:**
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain (optional)

**Configuration:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18.x

### GitHub Pages

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add deploy script to package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
     "homepage": "https://yourusername.github.io/business-man-website"
   }
   ```

3. **Deploy**
   ```bash
   npm run build
   npm run deploy
   ```

### AWS S3 + CloudFront

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   - Create an S3 bucket
   - Enable static website hosting
   - Upload contents of `dist` folder
   - Set bucket policy for public read access

3. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain (optional)

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```

3. **Configure firebase.json**
   ```json
   {
     "hosting": {
       "public": "dist",
       "ignore": [
         "firebase.json",
         "**/.*",
         "**/node_modules/**"
       ],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

## 🔧 Environment Configuration

### Environment Variables

Create a `.env` file for environment-specific settings:

```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=hello@your-domain.com
VITE_ANALYTICS_ID=your-google-analytics-id
VITE_FORM_ENDPOINT=https://your-form-endpoint.com
```

### Build Configuration

The project uses Vite for building. Key configuration files:

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📊 Performance Optimization

### Pre-deployment Optimizations

1. **Image Optimization**
   - Use WebP format for images
   - Implement lazy loading
   - Optimize image sizes

2. **Code Splitting**
   - Already implemented with React.lazy()
   - Route-based code splitting

3. **Caching**
   - Static assets cached for 1 year
   - HTML files cached for 1 hour

### Post-deployment Monitoring

1. **Google PageSpeed Insights**
   - Test your deployed site
   - Aim for 90+ scores

2. **Lighthouse**
   - Run Lighthouse audits
   - Monitor Core Web Vitals

## 🔒 Security Considerations

1. **HTTPS**
   - Ensure SSL certificate is active
   - Redirect HTTP to HTTPS

2. **Headers**
   - Security headers configured in deployment files
   - Content Security Policy (CSP) headers

3. **Dependencies**
   - Keep dependencies updated
   - Run `npm audit` regularly

## 🐛 Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (18+ required)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Routing Issues**
   - Ensure SPA routing is configured
   - Check redirect rules in hosting config

3. **Images Not Loading**
   - Verify image paths
   - Check public folder structure

### Debug Commands

```bash
# Check for linting errors
npm run lint

# Build and preview locally
npm run build
npm run preview

# Check bundle size
npm run build -- --analyze
```

## 📈 Analytics & Monitoring

### Google Analytics

1. Add your GA4 tracking ID to environment variables
2. Update the tracking code in your components

### Error Monitoring

Consider adding error monitoring services:
- Sentry
- LogRocket
- Bugsnag

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues during deployment:

1. Check the [README.md](./README.md) for setup instructions
2. Review the [troubleshooting section](#-troubleshooting)
3. Create an issue in the repository
4. Contact support at hello@businessman.dev

---

Happy deploying! 🚀

