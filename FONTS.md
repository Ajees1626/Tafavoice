# Font Usage Guide

This project includes a comprehensive set of Google Fonts for different design purposes. Here's how to use them:

## Available Fonts

### 1. **Rostex Font** (`font-rotex`) - **PRIMARY FONT**
- **Rostex** - Modern, clean, and professional font
- **Usage**: Default font for all text, headings, and UI elements
- **Applied globally**: Automatically used throughout the entire website

### 2. **Display Fonts** (`font-display`)
- **Rostex** - Primary display font (now using Rostex)
- **Darker Grotesque** - Modern, bold display font
- **Paytone One** - Fun, rounded display font  
- **Righteous** - Stylized, condensed font
- **Usage**: Large headings, hero titles, eye-catching text

```html
<h1 class="font-display text-6xl font-bold">Main Title</h1>
```

### 3. **Heading Fonts** (`font-heading`)
- **Rostex** - Primary heading font (now using Rostex)
- **Hammersmith One** - Strong, geometric font
- **Baloo 2** - Friendly, rounded font
- **Usage**: Section headings, navigation, important text

```html
<h2 class="font-heading text-4xl font-bold">Section Title</h2>
```

### 4. **Body Fonts** (`font-body`)
- **Rostex** - Primary body font (now using Rostex)
- **Raleway** - Clean, modern sans-serif
- **Open Sans** - Highly readable, versatile font
- **Usage**: Body text, descriptions, general content

```html
<p class="font-body text-lg">Body text content</p>
```

### 4. **Comfort Font** (`font-comfort`)
- **Comfortaa** - Rounded, friendly cursive-style font
- **Usage**: Special elements, quotes, decorative text

```html
<span class="font-comfort text-xl">Special text</span>
```

### 6. **Serif Font** (`font-serif`)
- **Belleza** - Elegant serif font
- **Usage**: Formal content, quotes, elegant text

```html
<blockquote class="font-serif text-lg italic">Elegant quote</blockquote>
```

### 7. **Default Sans** (`font-sans`)
- **Rostex** - Primary sans-serif (now using Rostex)
- **Open Sans** - Secondary sans-serif
- **Roboto** - Tertiary sans-serif
- **Usage**: Default text, buttons, UI elements

```html
<button class="font-sans">Button Text</button>
```

## Font Weights Available

All fonts support various weights:
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700
- **Extra-bold**: 800
- **Black**: 900

## Usage Examples

### Hero Section
```html
<h1 class="font-display text-7xl font-bold">
  Creating Digital Experiences
</h1>
<p class="font-body text-xl">
  We build modern web applications...
</p>
```

### Section Headings
```html
<h2 class="font-heading text-5xl font-bold">
  What We Do
</h2>
```

### Navigation
```html
<nav class="font-heading">
  <a href="/about">About</a>
</nav>
```

### Body Content
```html
<div class="font-body">
  <p>Main content text...</p>
</div>
```

### Special Elements
```html
<div class="font-comfort text-2xl">
  Fun, friendly text
</div>
```

## Best Practices

1. **Consistency**: Use the same font family for similar elements
2. **Hierarchy**: Use display fonts for main titles, heading fonts for sections
3. **Readability**: Use body fonts for long-form content
4. **Contrast**: Ensure good contrast between font weights and colors
5. **Performance**: Fonts are preloaded for better performance

## Customization

To add more fonts or modify existing ones, update the `tailwind.config.js` file:

```javascript
fontFamily: {
  sans: ['Rostex', 'Open Sans', 'Roboto', 'system-ui', 'sans-serif'],
  serif: ['Belleza', 'serif'],
  mono: ['JetBrains Mono', 'monospace'],
  display: ['Rostex', 'Darker Grotesque', 'Paytone One', 'Righteous', 'sans-serif'],
  heading: ['Rostex', 'Hammersmith One', 'Baloo 2', 'sans-serif'],
  body: ['Rostex', 'Raleway', 'Open Sans', 'sans-serif'],
  comfort: ['Comfortaa', 'cursive'],
  rotex: ['Rostex', 'sans-serif'],
},
```

## Font Loading

Fonts are loaded in `index.html` with preconnect for optimal performance:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
```

This ensures fast font loading and prevents layout shifts.

