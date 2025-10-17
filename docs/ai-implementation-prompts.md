# AI Implementation Prompts for Premium Redesign

**Document Version:** 1.0
**Created:** 2025-10-16
**Purpose:** Ready-to-use prompts for AI code generation tools (v0, Lovable, Cursor, etc.)

---

## Usage Instructions

Each prompt below is designed to be copy-pasted directly into AI frontend generation tools. They follow a structured framework:

1. **High-Level Goal** - Clear objective
2. **Tech Stack Context** - Framework and tools
3. **Step-by-Step Instructions** - Detailed implementation steps
4. **Code Examples & Constraints** - Concrete patterns to follow
5. **Visual Style** - Design direction
6. **Strict Scope** - Boundaries to prevent unintended changes
7. **Requirements** - Accessibility, performance, output standards

---

## Prompt 1: Premium Navigation Component

```
HIGH-LEVEL GOAL:
Create a premium, glassmorphic navigation header for The Skate Workshop website that shrinks on scroll, features smooth animations, and includes a scroll progress indicator.

TECH STACK CONTEXT:
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS 3.4+
- Animation: Framer Motion 11.0
- Icons: Lucide React
- TypeScript enabled

DETAILED STEP-BY-STEP INSTRUCTIONS:
1. Create a new file at `src/components/Navigation.tsx` (replace existing file)
2. Use 'use client' directive for client-side interactivity
3. Implement scroll detection to track scroll position and direction
4. Navigation should start at 80px height, shrink to 64px when scrolled > 50px
5. Background should use glassmorphic effect: `bg-black/95 backdrop-blur-md`
6. Add a scroll progress indicator at the very top (1px height, brand red color)
7. Logo should be on the left with "SW" in a red rounded square + "The Skate Workshop" text
8. Desktop navigation (lg breakpoint+): Show all links horizontally
9. Mobile navigation (< lg): Hamburger menu that slides in from right
10. Include these nav links: About Willy, Features, Pricing, Coaches
11. Primary CTA button "Join Waitlist" should always be visible (brand red background)
12. Add smooth transitions for all state changes (300ms duration)
13. Nav links should have animated underline on hover (slide from left)
14. Mobile menu should have backdrop blur and slide-in animation

CODE EXAMPLES & CONSTRAINTS:
```tsx
// Brand colors to use
const colors = {
  brandRed: '#E84545',
  brandRedDark: '#D13939',
  brandRedLight: '#FF5555',
}

// Scroll progress implementation hint
const scrollProgress = useScroll();
<motion.div
  style={{ scaleX: scrollProgress }}
  className="fixed top-0 left-0 right-0 h-1 bg-brand-red origin-left z-50"
/>
```

VISUAL STYLE:
- Dark theme (black background)
- Glassmorphic header with subtle transparency
- Brand red (#E84545) for CTAs and accents
- Inter font family (already configured)
- Generous spacing, premium feel

STRICT SCOPE:
- ONLY modify `src/components/Navigation.tsx`
- Do NOT change layout.tsx or any page files
- Do NOT modify globals.css or tailwind.config.ts
- Use existing Tailwind classes, no new color definitions needed

ACCESSIBILITY REQUIREMENTS:
- Keyboard accessible (tab navigation works)
- Focus indicators visible on all interactive elements
- ARIA labels for hamburger menu button
- Skip to main content link (visually hidden but accessible)

OUTPUT REQUIREMENTS:
- Full TypeScript component with proper typing
- Mobile-first responsive design
- Smooth animations that respect prefers-reduced-motion
- Comments explaining key functionality
```

---

## Prompt 2: Premium Hero Section with Animations

```
HIGH-LEVEL GOAL:
Create a stunning, premium hero section for The Skate Workshop homepage with gradient background, staggered text animations, glassmorphic credential badge, and magnetic CTA buttons.

TECH STACK CONTEXT:
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS 3.4+
- Animation: Framer Motion 11.0
- Font: Inter (configured via next/font)
- TypeScript enabled

DETAILED STEP-BY-STEP INSTRUCTIONS:
1. Create component at `src/components/HeroSection.tsx`
2. Use 'use client' directive for animations
3. Background: Gradient from brand-red to brand-red-dark with subtle pattern overlay
4. Add animated gradient background that subtly shifts on scroll (parallax effect)
5. Headline text should stagger in: "Elite Skateboarding Coaching from an Olympic Legend"
   - Each word fades in and slides up sequentially
   - Stagger delay: 100ms between words
   - Total animation: 800ms
6. Create glassmorphic credential badge floating above headline:
   - Content: "🏆 Commission Skateboard France • 30+ Years Experience"
   - Background: rgba(0,0,0,0.3) with backdrop-blur
   - Rounded pill shape with white border (20% opacity)
7. Subtitle paragraph: "Train with Willy Santos, the coach behind Olympians..."
   - Fades in after headline (delay: 600ms)
8. Two CTA buttons side-by-side (mobile: stacked):
   - Primary: "Join Waitlist" (brand red, white text, magnetic effect on desktop)
   - Secondary: "Meet Willy Santos" (outlined, transparent background)
9. Magnetic button effect: Button follows cursor within 40px radius on desktop
10. Buttons should have scale animation on hover (1.05x) and ripple effect on click
11. Add scroll indicator at bottom (pulsing down arrow)
12. Responsive: Full-width on mobile, max-width 1280px on desktop, centered

CODE EXAMPLES & CONSTRAINTS:
```tsx
// Text stagger animation pattern
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// Background gradient
<div className="bg-gradient-to-b from-brand-red to-brand-red-dark">

// Glassmorphic badge
<div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-full">
```

VISUAL STYLE:
- Hero gradient background (#E84545 to #D13939)
- Glassmorphic elements with backdrop blur
- White text on dark gradient background
- Pattern overlay at 10% opacity for texture
- Generous vertical padding (80px mobile, 128px desktop)

STRICT SCOPE:
- Create NEW file `src/components/HeroSection.tsx`
- Update ONLY `src/app/page.tsx` to import and use <HeroSection />
- Do NOT modify Navigation, Footer, or other components
- Do NOT change globals.css or tailwind.config

ACCESSIBILITY REQUIREMENTS:
- Proper heading hierarchy (h1 for main headline)
- Sufficient color contrast (white on dark red passes AA)
- Respect prefers-reduced-motion (disable animations if set)
- Keyboard accessible buttons with visible focus rings

PERFORMANCE REQUIREMENTS:
- Use CSS transforms for animations (GPU accelerated)
- Lazy load background pattern if using image
- Magnetic effect only enabled on desktop (pointer: fine)
- Stagger animation runs once on mount, not on every scroll

OUTPUT REQUIREMENTS:
- Full TypeScript component
- Mobile-first responsive (test at 375px, 768px, 1024px, 1440px)
- Clean, commented code
- Proper TypeScript types for all props and state
```

---

## Prompt 3: Interactive 3D Feature Cards

```
HIGH-LEVEL GOAL:
Create premium, interactive feature cards with 3D tilt effects, glassmorphic backgrounds, animated icons, and hover lift animations for showcasing The Skate Workshop features.

TECH STACK CONTEXT:
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS 3.4+
- Animation: Framer Motion 11.0
- Component: Reusable card component

DETAILED STEP-BY-STEP INSTRUCTIONS:
1. Create reusable component at `src/components/FeatureCard.tsx`
2. Accept props: icon (emoji string), title (string), description (string), highlighted (boolean)
3. Card should have glassmorphic background:
   - Dark semi-transparent background (bg-gray-900/50)
   - Subtle border (border-gray-800)
   - Rounded corners (rounded-xl)
   - Backdrop blur effect
4. Implement 3D tilt effect on hover (desktop only):
   - Card tilts toward cursor position
   - Maximum tilt: 10 degrees
   - Smooth spring animation
   - Use transform: rotateX() and rotateY()
5. Hover state animations:
   - Card lifts up 8px (translateY(-8px))
   - Shadow intensifies (from subtle to prominent glow)
   - Border color shifts to brand-red with 50% opacity
6. Icon (emoji) at top should:
   - Be large (text-4xl or 5xl)
   - Animate on card hover: scale 1.1 + rotate 5deg
   - Smooth spring transition
7. Title should be bold, white text, 1.25rem
8. Description should be gray-400, smaller text
9. If highlighted prop is true:
   - Add subtle brand-red glow around card
   - Border should be brand-red/30
10. Mobile: Disable 3D tilt, keep lift and shadow effects on tap
11. Add transition for all properties: 200ms ease-out

CODE EXAMPLES & CONSTRAINTS:
```tsx
// Props interface
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  highlighted?: boolean;
}

// Hover animation config
<motion.div
  whileHover={{
    y: -8,
    boxShadow: highlighted
      ? "0 20px 40px rgba(232, 69, 69, 0.3)"
      : "0 20px 40px rgba(0, 0, 0, 0.2)"
  }}
  transition={{ duration: 0.2 }}
>

// 3D tilt: Use mouse position to calculate rotation
// Only on desktop: use @media (hover: hover) or pointer: fine detection
```

VISUAL STYLE:
- Dark glassmorphic cards (gray-900 with transparency)
- Subtle borders and shadows
- Brand red accents for highlighted cards
- Clean typography with hierarchy
- Emojis as visual anchors

STRICT SCOPE:
- Create `src/components/FeatureCard.tsx`
- Update `src/app/page.tsx` to use the cards in a grid
- Grid should be: 1 column mobile, 2 columns tablet (md), 3 columns desktop (lg)
- Do NOT modify other components
- Do NOT add new Tailwind configuration

ACCESSIBILITY REQUIREMENTS:
- Semantic HTML (article or div with proper ARIA)
- Color contrast meets AA standards
- Keyboard focus visible
- Touch targets min 44x44px on mobile
- Disable tilt animation if prefers-reduced-motion

PERFORMANCE REQUIREMENTS:
- Use CSS transforms only (no layout thrashing)
- 3D effect should use will-change: transform sparingly
- Debounce mouse move events for tilt calculation
- Disable complex animations on mobile for performance

OUTPUT REQUIREMENTS:
- TypeScript component with full prop typing
- Responsive grid layout (mobile-first)
- Clean, well-commented code
- Example usage in comments
```

---

## Prompt 4: Premium Waitlist Form with Validation

```
HIGH-LEVEL GOAL:
Create a conversion-optimized waitlist form with real-time validation, loading states, success animation (confetti), and trust indicators for The Skate Workshop.

TECH STACK CONTEXT:
- Framework: Next.js 14 (App Router) with TypeScript
- Styling: Tailwind CSS 3.4+
- Animation: Framer Motion 11.0
- Validation: React Hook Form + Zod
- Confetti: canvas-confetti library

DETAILED STEP-BY-STEP INSTRUCTIONS:
1. Create component at `src/components/WaitlistForm.tsx`
2. Use React Hook Form for form management
3. Use Zod for schema validation (email must be valid format)
4. Form fields:
   - Email (required, validated)
   - Optional: Name, Skating Level (dropdown)
5. Real-time validation:
   - Show green checkmark icon when email is valid
   - Show red error message below input if invalid
   - Error messages slide in from bottom
6. Submit button states:
   - Idle: "Join Waitlist" with brand red background
   - Loading: Show spinner, text changes to "Joining..."
   - Success: Morph to checkmark icon with "You're In!" text
7. Success state triggers confetti animation:
   - Use canvas-confetti library
   - Brand colors: red, light red, white
   - Particle count: 100
   - Duration: 2 seconds
8. Trust indicators:
   - Show counter: "Join 1,247+ skaters" (use AnimatedCounter component)
   - Privacy badge: Small lock icon + "We respect your privacy"
   - Link to privacy policy
9. Form styling:
   - Glassmorphic container background
   - Input fields with focus glow effect (brand red)
   - Large, prominent submit button
   - Generous padding and spacing
10. Handle form submission:
    - Prevent default
    - Validate with Zod schema
    - Call API endpoint: POST /api/waitlist
    - Handle success and error states
11. Error handling:
    - Network errors: Show retry button
    - Already registered: Show friendly message
    - Invalid data: Show specific field errors

CODE EXAMPLES & CONSTRAINTS:
```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';

const schema = z.object({
  email: z.string().email('Please enter a valid email'),
  name: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

// Confetti on success
const fireConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#E84545', '#FF5555', '#FFFFFF']
  });
};

// Input focus style
<input className="focus:ring-2 focus:ring-brand-red focus:border-brand-red transition-all duration-200" />
```

VISUAL STYLE:
- Dark glassmorphic container
- Brand red CTAs and focus states
- Green checkmarks for validation success
- Smooth transitions between states
- Clean, minimal form design

STRICT SCOPE:
- Create `src/components/WaitlistForm.tsx`
- Create API route at `src/app/api/waitlist/route.ts` (stub for now)
- Update download page or create dedicated waitlist page
- Do NOT modify other components
- Install dependencies: react-hook-form, @hookform/resolvers, zod, canvas-confetti

ACCESSIBILITY REQUIREMENTS:
- Proper form labels (associated with inputs)
- Error messages announced to screen readers (aria-live)
- Keyboard accessible (tab through all fields)
- Focus visible on all interactive elements
- Submit button disabled during submission (aria-disabled)

PERFORMANCE REQUIREMENTS:
- Debounce validation (300ms after typing stops)
- Lazy load confetti library (only when needed)
- Optimize form re-renders
- Cancel API call if component unmounts

OUTPUT REQUIREMENTS:
- TypeScript component with full typing
- React Hook Form + Zod integration
- Loading, success, and error states
- Confetti animation on success
- Clean, production-ready code
```

---

## Prompt 5: Animated Statistics Counter Section

```
HIGH-LEVEL GOAL:
Create an engaging statistics section with animated counters that count up from 0 when scrolled into view, showcasing The Skate Workshop's credibility metrics.

TECH STACK CONTEXT:
- Framework: Next.js 14 with TypeScript
- Styling: Tailwind CSS 3.4+
- Animation: Framer Motion 11.0 + Intersection Observer
- Component: Reusable counter component

DETAILED STEP-BY-STEP INSTRUCTIONS:
1. Create reusable counter component at `src/components/AnimatedCounter.tsx`
2. Accept props: target (number), suffix (string), prefix (string), duration (ms)
3. Use Intersection Observer to detect when counter enters viewport
4. When visible, animate from 0 to target value using easing curve
5. Use requestAnimationFrame for smooth counting animation
6. Support prefixes like "$" and suffixes like "+ Years", "K"
7. Create section component at `src/components/StatsSection.tsx`
8. Section should display 3-4 statistics in a grid:
   - "30+ Years of Coaching"
   - "500+ Athletes Trained"
   - "10 Olympic/X-Games Medalists"
   - "$200+ Avg. Session Rate"
9. Each stat should have:
   - Large animated number (4xl-6xl font size)
   - Label below in smaller, gray text
   - Icon or emoji above number
10. Grid layout: 2 columns mobile, 4 columns desktop
11. Background: Dark section (bg-gray-900 or black)
12. Section appears with fade-in animation on scroll
13. Counter should only animate once (not on every scroll)

CODE EXAMPLES & CONSTRAINTS:
```tsx
// AnimatedCounter.tsx interface
interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

// Animation logic (simplified)
useEffect(() => {
  if (!inView) return;

  const startTime = performance.now();
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(easeOut * target);

    setValue(current);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
}, [inView]);

// Usage in StatsSection
<AnimatedCounter target={30} suffix="+ Years" />
```

VISUAL STYLE:
- Dark background section
- Large, bold numbers in white
- Labels in gray-400
- Icons/emojis for visual interest
- Generous spacing between stats

STRICT SCOPE:
- Create `src/components/AnimatedCounter.tsx`
- Create `src/components/StatsSection.tsx`
- Replace existing StatsSection in homepage
- Do NOT modify other components
- Use existing Tailwind classes only

ACCESSIBILITY REQUIREMENTS:
- Screen readers should read final value (not animated count)
- Use aria-label with final value on counter element
- Respect prefers-reduced-motion (show final value immediately)
- Proper semantic HTML (section, headings)

PERFORMANCE REQUIREMENTS:
- Use requestAnimationFrame for 60fps animation
- Cancel animation if component unmounts
- Intersection Observer with margin to trigger slightly before visible
- Only animate once (track in state to prevent re-animation)

OUTPUT REQUIREMENTS:
- Two TypeScript components with full typing
- Smooth easing curve for natural animation
- Responsive grid layout
- Clean, reusable code
- Example usage in comments
```

---

## Additional Implementation Prompts

For complete coverage, see prompts 6-10 in the full documentation:

- **Prompt 6:** Premium Footer with Ecosystem Links
- **Prompt 7:** About Page - Credential Timeline
- **Prompt 8:** Pricing Page - Tiered Pricing Cards
- **Prompt 9:** Download/Waitlist Page
- **Prompt 10:** Contact Page - Multi-Purpose Form

---

## Implementation Roadmap

### Week 1: Foundation
- Navigation (Prompt 1)
- Tailwind config updates
- Dependency installation

### Week 2: High-Impact Pages
- Hero Section (Prompt 2)
- Feature Cards (Prompt 3)
- Stats Counter (Prompt 5)

### Week 3: Conversion Pages
- Waitlist Form (Prompt 4)
- Pricing Page (Prompt 8)
- Download Page (Prompt 9)

### Week 4-5: Content & Polish
- About Page (Prompt 7)
- Contact Page (Prompt 10)
- Footer (Prompt 6)
- Testing & optimization

---

## Important Notes

- All AI-generated code requires human review and testing
- Test responsiveness at multiple breakpoints
- Run accessibility audits after implementation
- Performance test all animations (target 60fps)
- Install required dependencies before using components

---

**Document Status:** ✅ Ready for AI code generation
