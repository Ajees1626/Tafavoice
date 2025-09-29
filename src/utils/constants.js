export const SITE_CONFIG = {
  name: 'Business Man Website',
  title: 'Business Man - Modern Web Solutions',
  description: 'Creating exceptional digital experiences with modern web technologies',
  url: 'https://businessman-website.vercel.app',
  author: 'Business Man',
  email: 'hello@businessman.dev',
  social: {
    twitter: '@businessman',
    linkedin: 'businessman',
    github: 'businessman',
  },
};

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const SKILLS = [
  'React',
  'JavaScript',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'GraphQL',
  'Tailwind CSS',
  'GSAP',
];

export const SERVICES = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    icon: '🌐',
  },
  {
    title: 'Mobile Apps',
    description: 'Cross-platform mobile applications for iOS and Android',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces and experiences',
    icon: '🎨',
  },
  {
    title: 'Consulting',
    description: 'Technical consulting and architecture guidance',
    icon: '💡',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    content: 'Exceptional work! The team delivered exactly what we needed and more.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Product Manager',
    company: 'InnovateCorp',
    content: 'Professional, reliable, and incredibly talented. Highly recommended!',
    avatar: '/api/placeholder/60/60',
    rating: 5,
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'StartupXYZ',
    content: 'Transformed our vision into reality with outstanding results.',
    avatar: '/api/placeholder/60/60',
    rating: 5,
  },
];

export const PROJECTS = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced features',
    longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
    image: '/image/img1.jpg',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    category: 'Web Development',
    featured: true,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
    caseStudy: 'ecommerce-platform',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application for iOS and Android',
    longDescription: 'A secure mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management features.',
    image: '/image/img2.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
    category: 'Mobile Development',
    featured: true,
    liveUrl: 'https://example.com',
    caseStudy: 'mobile-banking-app',
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with data visualization',
    longDescription: 'An advanced analytics dashboard that provides real-time insights with interactive charts, custom reports, and data export capabilities.',
    image: '/image/img.jpg',
    technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    category: 'Data Visualization',
    featured: false,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example',
  },
  {
    id: '4',
    title: 'SaaS Platform',
    description: 'Multi-tenant SaaS platform with subscription management',
    longDescription: 'A scalable SaaS platform with multi-tenancy, subscription billing, user management, and comprehensive API integration.',
    image: '/image/img3.jpg',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Vercel'],
    category: 'SaaS',
    featured: true,
    liveUrl: 'https://example.com',
    caseStudy: 'saas-platform',
  },
];

export const BLOG_POSTS = [
  {
    id: '1',
    title: 'Building Modern Web Applications with React',
    excerpt: 'Learn how to build scalable and maintainable web applications using React and modern development practices.',
    content: 'Full blog post content here...',
    author: 'Business Man',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['React', 'Web Development', 'JavaScript'],
    image: '/api/placeholder/800/400',
    slug: 'building-modern-web-applications-react',
  },
  {
    id: '2',
    title: 'The Future of Mobile Development',
    excerpt: 'Exploring the latest trends and technologies in mobile application development.',
    content: 'Full blog post content here...',
    author: 'Business Man',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['Mobile', 'React Native', 'Flutter'],
    image: '/api/placeholder/800/400',
    slug: 'future-mobile-development',
  },
];

