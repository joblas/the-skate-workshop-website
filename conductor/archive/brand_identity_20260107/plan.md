# Plan - Implement the new Brand Visual Identity

## Phase 1: Foundation & Global Styles

- [x] Task: Update Tailwind Configuration with New Design Tokens
    - Write Tests: Create a test to verify that the new color tokens (brand-orange, brand-cyan) are accessible in the theme.
    - Implement: Update `tailwind.config.ts` with colors, typography, and spacing from the design tokens.
- [x] Task: Global Typography Migration to Spline Sans
    - Write Tests: Create a test to verify that the `font-sans` and `font-display` classes apply the Spline Sans font.
    - Implement: Update `layout.tsx` to load Spline Sans and update global CSS variables.
- [x] Task: Conductor - User Manual Verification 'Phase 1: Foundation' (Protocol in workflow.md)

## Phase 2: Core UI Component Refactor

- [x] Task: Update Button Component Styles
    - Write Tests: Update existing button tests to verify the new primary (white/black) and secondary (dark gray/white) color schemes.
    - Implement: Update `src/components/Navigation.tsx` (and any shared button components) to reflect the new styling.
- [x] Task: Update Card and Surface Components
    - Write Tests: Create/Update tests for `FeatureCard.tsx` to verify the new background (`#1F2937`) and border (`#374151`) colors.
    - Implement: Update `FeatureCard.tsx` and other container components.
- [x] Task: Refine Color Palette (Strava Orange & Softer Background)
    - Write Tests: Update `tailwind-config.test.ts` to expect `#FC4C02` (Strava Orange) and a softer background (e.g., `#121212`).
    - Implement: Update `tailwind.config.ts` colors. Ensure global background is updated in `layout.tsx` or `globals.css`.
- [x] Task: Conductor - User Manual Verification 'Phase 2: Core UI' (Protocol in workflow.md)

## Phase 3: Brand Assets & Final Polish

- [x] Task: Comprehensive Public Asset Update
    - Write Tests: Verify that all logo and icon files in `public/` and `public/images/logo/` are accessible and have the correct dimensions.
    - Implement: Rename and resize the new `icon.png` to replace ALL existing icon assets in the `public/` root (favicons, apple-touch-icon, android-chrome) and `public/images/logo/` to ensure a complete brand switch.
- [x] Task: Replace Emoji Placeholders with Real Images
    - Write Tests: Identify pages with emoji placeholders (Home, Features, etc.) and verify they are replaced with Image components.
    - Implement: Search for 🎥, 🛹, and other emojis used as image placeholders and replace them with actual image files (or high-quality SVG/CSS alternatives if files are unavailable).
- [x] Task: Global Color Sweep & Animation Refinement
    - Write Tests: Smoke test all pages to ensure no legacy `#E84545` (Red) remains.
    - Implement: Replace any hardcoded hex values in components. Refine Framer Motion animations to be "cooler" and more impactful as requested.
- [x] Task: Conductor - User Manual Verification 'Phase 3: Final Polish' (Protocol in workflow.md)