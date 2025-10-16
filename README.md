# The Skate Workshop - Marketing Website

Elite skateboarding coaching platform website built with Next.js 14, featuring Olympic-level coach Willy Santos.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 🎨 Brand Colors

- **Primary Red**: #E84545 (from The Skate Workshop logo)
- **Red Dark**: #D13939 (hover states)
- **Red Light**: #FF5555 (accents)
- **Black**: #000000 (background)
- **White**: #FFFFFF (text)

## 📁 Project Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO
│   │   ├── page.tsx             # Homepage
│   │   ├── about/               # About Willy Santos
│   │   ├── features/            # Features showcase
│   │   ├── pricing/             # Pricing plans
│   │   ├── coaches/             # Join as coach
│   │   └── download/            # Download app page
│   ├── components/
│   │   ├── Navigation.tsx       # Header navigation
│   │   ├── Footer.tsx           # Site footer
│   │   ├── FeatureCard.tsx      # Feature display cards
│   │   └── StatsSection.tsx     # Stats showcase
│   └── lib/
│       └── supabase.ts          # Supabase client
├── public/
│   └── logo.png                 # The Skate Workshop logo
└── ...config files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Backend**: Supabase (forms, data)
- **Deployment**: Vercel (recommended)

## 📄 Pages

### ✅ Completed
- **Homepage** (`/`) - Hero, features, Willy's credentials, CTAs
- **Navigation** - Responsive header with mobile menu
- **Footer** - Site-wide footer with links

### 🚧 To Create
- **About Willy** (`/about`) - Full biography, credentials, photos
- **Features** (`/features`) - Detailed feature breakdown
- **Pricing** (`/pricing`) - Subscription tiers and pricing
- **Join as Coach** (`/coaches`) - Coach application form
- **Download** (`/download`) - App download links and QR codes
- **Contact** (`/contact`) - Contact form
- **Privacy Policy** (`/privacy`) - Privacy policy
- **Terms** (`/terms`) - Terms of service

## 🎯 SEO Configuration

The website is configured with comprehensive SEO:

- **Meta Tags**: Title, description, keywords on all pages
- **Open Graph**: Social media preview images
- **Twitter Cards**: Twitter-specific metadata
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling rules
- **Structured Data**: Organization and Person schemas

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js
4. Deploy!

### Environment Variables

Create `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Performance Goals

- **Initial Load**: < 2 seconds
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **PageSpeed Score**: 90+

## 🎨 Design System

### Typography
- **Headings**: Inter Bold
- **Body**: Inter Regular
- **Sizes**: 
  - XL: 5xl-7xl (Hero)
  - LG: 4xl-5xl (Section Headers)
  - MD: 3xl-4xl (Subsections)

### Spacing
- Based on 8px grid system
- Consistent padding/margins

### Components
- **btn-primary**: Red background, white text
- **btn-secondary**: Red border, transparent bg
- **FeatureCard**: Dark gray with red hover
- **StatsSection**: Bold numbers with labels

## 📝 Content Guidelines

### Homepage
- Hero: Emphasize Willy's Olympic-level credentials
- Features: Show 6 key features with icons
- Stats: 4 key metrics (30+ years, 400+ tricks, 40% recovery, $200+ value)
- CTA: Multiple "Download App" and "Join as Coach" buttons

### About Willy
- Full biography (30+ years experience)
- Commission Skateboard France credentials
- Olympic athlete training highlights
- Photo gallery from coaching sessions
- Coaching philosophy

### Features
- Live Session Tracking
- Premium Video System (0.25x-2x speed)
- 400+ Trick Database
- Skate Warz Battles
- Progress Analytics (4-stage mastery)
- Professional Reporting

## 🔗 Key Links

- **Production**: TBD (deploy to custom domain)
- **Staging**: TBD
- **GitHub**: [Link to repo]
- **Vercel Project**: TBD

## 👥 Team

- **Founded by**: Willy Santos & Joe's Tech Solutions LLC
- **Coach**: Willy Santos (30+ years, Commission Skateboard France)
- **Development**: Joe's Tech Solutions

## 📞 Support

For questions or support:
- Email: contact@skateworkshop.com
- Website: [Coming soon]

---

Built with ❤️ by The Skate Workshop Team
