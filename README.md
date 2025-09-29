# Business Man Website

A modern, responsive website built with React, Vite, Tailwind CSS, and GSAP. This project replicates the design and interactions similar to modern portfolio websites with smooth animations and excellent user experience.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite, Tailwind CSS
- **Smooth Animations**: GSAP with ScrollTrigger for engaging scroll animations
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Meta tags, Open Graph, JSON-LD structured data
- **Accessibility**: ARIA attributes, keyboard navigation, semantic HTML
- **Performance**: Code splitting, lazy loading, optimized images
- **Clean Code**: ESLint, Prettier, TypeScript for maintainable code

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── Footer.tsx      # Site footer with links and social media
│   ├── SEO.tsx         # SEO meta tags component
│   └── ScrollToTop.tsx # Scroll to top on route change
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with hero and sections
│   ├── About.tsx       # About page with team and values
│   ├── Projects.tsx    # Portfolio with filtering
│   ├── CaseStudy.tsx   # Individual project case studies
│   ├── Contact.tsx     # Contact form and information
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
│   ├── useScrollToTop.ts
│   ├── useGSAP.ts
│   └── useIntersectionObserver.ts
├── utils/              # Utility functions
│   ├── animations.ts   # GSAP animation helpers
│   └── constants.ts    # Site configuration and data
├── types/              # TypeScript type definitions
│   └── index.ts
└── assets/             # Static assets
    ├── images/
    └── icons/
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd business-man-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Color Theme

The website uses a customizable color system defined in `tailwind.config.js`. To change the theme:

1. **Primary Colors**: Update the `primary` color palette
2. **Secondary Colors**: Modify the `secondary` color palette  
3. **Accent Colors**: Adjust the `accent` color palette

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#0ea5e9', // Main primary color
        600: '#0284c7',
        // ... other shades
      }
    }
  }
}
```

### Content Updates

1. **Site Configuration**: Update `src/utils/constants.ts`
2. **Projects**: Modify the `PROJECTS` array
3. **Services**: Update the `SERVICES` array
4. **Contact Info**: Change contact details in `SITE_CONFIG`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/utils/constants.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Configure Environment Variables** (if needed)
   - Add any environment variables in Vercel dashboard

### Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository for automatic deployments

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

### Other Platforms

The built files in the `dist` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 🔧 Configuration

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=hello@your-domain.com
VITE_ANALYTICS_ID=your-analytics-id
```

### SEO Configuration

Update SEO settings in `src/utils/constants.ts`:

```javascript
export const SITE_CONFIG = {
  name: 'Your Company Name',
  title: 'Your Site Title',
  description: 'Your site description',
  url: 'https://your-domain.com',
  // ... other settings
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🎭 Animations

The website uses GSAP for smooth animations:

- **Scroll Reveals**: Elements animate in as they enter viewport
- **Hero Animations**: Staggered text and button animations
- **Hover Effects**: Interactive elements with smooth transitions
- **Page Transitions**: Smooth route changes

### Customizing Animations

Modify animation functions in `src/utils/animations.ts`:

```javascript
export const fadeInUp = (element, delay = 0) => {
  return gsap.fromTo(element, {
    y: 60,
    opacity: 0,
  }, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    delay,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  });
};
```

## 🔍 SEO Features

- **Meta Tags**: Dynamic title, description, and keywords
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated sitemap (add to build process)
- **Robots.txt**: Search engine crawling instructions

## ♿ Accessibility

- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations
- **Semantic HTML**: Proper heading structure and landmarks
- **Focus Management**: Visible focus indicators

## 🧪 Testing

```bash
# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email hello@businessman.dev or create an issue in the repository.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [GSAP](https://greensock.com/gsap/) - Animation library
- [React Router](https://reactrouter.com/) - Routing
- [React Helmet Async](https://github.com/staylor/react-helmet-async) - SEO

---

Built with ❤️ by Business Man