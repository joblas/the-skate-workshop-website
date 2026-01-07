# Technology Stack - The Skate Workshop Website

## Core Framework & Language
*   **Framework:** Next.js 14 (App Router) - Leveraging React Server Components for performance and SEO.
*   **Language:** TypeScript - Ensuring type safety and better developer experience across the codebase.

## Frontend & UI
*   **Styling:** Tailwind CSS - Utility-first CSS for rapid, consistent styling aligned with the design system.
*   **Animations:** Framer Motion - Powering high-energy, complex animations, scroll-triggered reveals, and "cooler" interactive elements to match the "Best Designed in the World" goal.
*   **Icons:** Lucide React - Clean, consistent iconography.
*   **Fonts:** Spline Sans (Primary), Geist Mono/JetBrains Mono (Technical labels).

## Backend & Infrastructure
*   **Backend as a Service:** Supabase - Handling the email waitlist database, coach application forms, and potential future data needs.
*   **Form Handling:** React Hook Form + Zod - Robust validation for waitlist and contact forms.
*   **Email Service:** Nodemailer - Managed via Next.js API routes for automated notifications.

## Deployment & Monitoring
*   **Hosting:** Vercel - Optimized for Next.js with automatic deployments and edge performance.
*   **Analytics:** Vercel Analytics - Monitoring user engagement and conversion rates.

## Development Tools
*   **Version Control:** Git (GitHub)
*   **Formatting/Linting:** ESLint, Prettier
*   **Type Checking:** TypeScript Compiler (tsc)
