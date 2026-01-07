# Spec - Implement the new Brand Visual Identity

## Goal
Update the visual identity of The Skate Workshop website to align with the mobile app's design tokens (v1.0). This ensures a consistent brand experience across all platforms.

## Core Changes

### 1. Color Palette Migration
*   **Primary:** Replace `#E84545` (Brand Red) with `#FC5200` (Brand Orange).
*   **Secondary:** Introduce `#00D9FF` (Brand Cyan) for accent elements and "Elite" badges.
*   **Surface:** Transition from pure black backgrounds to dark gray surfaces (`#1F2937`) for cards and UI components to match the app's depth model.
*   **Text:** Update text colors to match the gray scale (Gray 400 for body, White for titles).

### 2. Typography Migration
*   **Font Family:** Switch primary font from `Anek Tamil` / `Inter` to `Spline Sans`.
*   **Styling:** Apply tight letter-spacing (-0.02em to -0.05em) and heavy weights (700-800) to headlines.

### 3. Asset Updates
*   **Logo/Icon:** Replace existing branding assets with the new `icon.png` and updated logo variants.

### 4. Component Refactoring
*   **Buttons:** Update primary/secondary styles.
*   **Cards:** Update background and border colors.
*   **Navigation:** Update active states and background blur/color.

## Acceptance Criteria
*   [ ] `tailwind.config.ts` updated with new design tokens.
*   [ ] `Spline Sans` font loaded and applied globally.
*   [ ] All instances of the old red color replaced with orange.
*   [ ] UI components (Cards, Buttons, Nav) updated to match the app's surface/border tokens.
*   [ ] Logo and favicon updated with new assets.
*   [ ] Visual audit across all pages (Home, About, Features, etc.) confirms brand consistency.
*   [ ] Mobile responsiveness maintained with new spacing/typography.
