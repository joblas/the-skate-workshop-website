# Design System Redesign - Primal Training Style

## Overview
Redesigning Type, Layout, Div, and Grid components to match the Primal Training aesthetic while **keeping The Skate Workshop's brand red color palette**.

---

## Color Palette (UNCHANGED - KEPT)
```typescript
brand: {
  red: '#E84545',           // Primary brand color
  'red-dark': '#D13939',    // Hover states
  'red-light': '#FF5555',   // Accents
  black: '#000000',
  white: '#FFFFFF',
},
background: '#000000',        // Black background
foreground: '#FFFFFF',        // White text
surface: '#0A0A0A',          // Subtle surface
```

---

## Typography System (NEW - PRIMAL TRAINING INSPIRED)

### Font Families
```typescript
fontFamily: {
  display: ['Anek Tamil', 'Inter', 'system-ui', 'sans-serif'],      // Bold headlines
  sans: ['Geist', 'Inter', 'system-ui', 'sans-serif'],              // Body text
  heading: ['Instrument Sans', 'Inter', 'system-ui', 'sans-serif'], // Section headings
  mono: ['Geist Mono', 'SF Mono', 'Monaco', 'monospace'],           // Code/labels
}
```

### Font Sizes with Tight Letter-Spacing
```typescript
fontSize: {
  // Responsive scaling with negative letter-spacing for impact
  'hero': ['clamp(2.3125rem, 6vw, 7.25rem)', {
    lineHeight: '1.1',
    letterSpacing: '-0.04em'  // Tight, impactful
  }], // 37px → 116px

  'display': ['clamp(2.8125rem, 5vw, 5.625rem)', {
    lineHeight: '1.1',
    letterSpacing: '-0.03em'
  }], // 45px → 90px

  'h1': ['clamp(1.75rem, 4vw, 2.8125rem)', {
    lineHeight: '1.2',
    letterSpacing: '-0.02em'
  }], // 28px → 45px

  'h2': ['clamp(1.5rem, 3vw, 2rem)', {
    lineHeight: '1.3',
    letterSpacing: '-0.015em'
  }],

  'h3': ['clamp(1.25rem, 2.5vw, 1.5rem)', {
    lineHeight: '1.4',
    letterSpacing: '-0.01em'
  }],

  'body-lg': ['1.0625rem', { lineHeight: '1.31' }], // 17px
  'body': ['0.9375rem', { lineHeight: '1.31' }],    // 15px
  'label': ['0.875rem', {
    lineHeight: '1.4',
    letterSpacing: '0.02px'
  }], // 14px
}
```

---

## Layout System (UPDATED)

### Max Widths
```typescript
maxWidth: {
  'content': '2048px',    // Main layout max (updated from 1280px)
  'section': '622px',     // Dynamic content blocks
  'prose': '1280px',      // Long-form content
}
```

### Breakpoints (Primal Training System)
```typescript
screens: {
  'sm': '640px',
  'md': '800px',     // Tablet transition
  'lg': '1200px',    // Large tablet
  'xl': '1280px',    // Desktop
  '2xl': '1920px',   // Large desktop
}
```

---

## Spacing & Grid System (NEW)

### Spacing Scale
```typescript
spacing: {
  '18': '4.5rem',      // 72px
  '23': '5.75rem',     // 92px - Hero top padding
  '30': '7.5rem',      // 120px
  '50': '12.5rem',     // 200px
  '56': '14rem',       // 224px - Major section spacing
  '80': '20rem',       // 320px - Large section gaps
  '88': '22rem',       // 352px
  '128': '32rem',      // 512px
}
```

### Gap System
```typescript
gap: {
  '14': '3.5rem',      // 56px - Section gaps
  '20': '5rem',        // 80px - Large gaps
}
```

---

## Component Class Updates

### Container Classes
```css
.section-container {
  @apply max-w-content mx-auto px-5 md:px-8;
}

.section-container-narrow {
  @apply max-w-section mx-auto px-5;
}

.hero-container {
  @apply max-w-content mx-auto pt-23 pb-4 px-5;
}
```

### Typography Classes
```css
.heading-hero {
  @apply font-display text-hero font-extrabold md:font-bold;
}

.heading-display {
  @apply font-display text-display font-extrabold;
}

.heading-xl {
  @apply font-heading text-h1 font-bold;
}

.heading-lg {
  @apply font-heading text-h2 font-bold;
}

.heading-md {
  @apply font-heading text-h3 font-bold;
}

.body-large {
  @apply font-sans text-body-lg;
}

.body-text {
  @apply font-sans text-body;
}

.label-text {
  @apply font-mono text-label;
}
```

### Layout/Div Classes
```css
/* Hero Section */
.hero-section {
  @apply pt-23 pb-16 md:pb-30;
}

/* Content Sections */
.section-spacing {
  @apply py-30 md:py-56;
}

.section-spacing-tight {
  @apply py-16 md:py-23;
}

/* Vertical Spacing */
.content-gap {
  @apply space-y-14;
}

.content-gap-lg {
  @apply space-y-20;
}
```

### Grid Classes
```css
/* Feature Grids */
.grid-features {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8;
}

.grid-two-col {
  @apply grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14;
}

.grid-four-col {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6;
}
```

---

## Usage Examples

### Hero Section
```tsx
<section className="hero-section bg-black">
  <div className="hero-container">
    <h1 className="heading-hero text-white mb-6">
      Elite Skateboarding Coaching
    </h1>
    <p className="body-large text-gray-400 max-w-prose">
      Train with Willy Santos, coach of Olympic athletes
    </p>
  </div>
</section>
```

### Feature Grid
```tsx
<section className="section-spacing">
  <div className="section-container">
    <div className="text-center mb-16">
      <h2 className="heading-display mb-6">Everything You Need</h2>
      <p className="body-large text-gray-400 max-w-prose mx-auto">
        Complete toolkit for elite development
      </p>
    </div>

    <div className="grid-features">
      {features.map(feature => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </div>
</section>
```

---

## Font Loading (Next.js)

Update `src/app/layout.tsx`:
```tsx
import { Inter } from 'next/font/google'

// Load Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// Note: Anek Tamil, Geist, Geist Mono, and Instrument Sans
// should be loaded via Google Fonts or local fonts
// Add them to the fonts configuration
```

---

## Key Design Principles

1. **Bold Typography**: Use tight letter-spacing and heavy weights (700-800) for headlines
2. **Generous Spacing**: Large padding/margins create breathing room (92px, 56px, 80px)
3. **Responsive Scaling**: All typography scales smoothly from mobile to desktop
4. **High Contrast**: Maintain stark black/white/red color scheme
5. **Primal Aesthetic**: Raw, powerful, athletic - matching the Primal Training vibe

---

## Migration Checklist

- [ ] Install new fonts (Anek Tamil, Geist, Geist Mono, Instrument Sans)
- [ ] Update `tailwind.config.ts` with new config
- [ ] Update `globals.css` with new component classes
- [ ] Update `layout.tsx` to load new fonts
- [ ] Refactor existing components to use new classes
- [ ] Test responsive behavior at all breakpoints
- [ ] Verify color palette remains consistent
