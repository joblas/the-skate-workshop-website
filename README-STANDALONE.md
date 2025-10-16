# The Skate Workshop - Marketing Website

**Domain**: theskateworkshop.app  
**Status**: Ready to Deploy  
**Framework**: Next.js 14.2.0

---

## 🚀 Quick Deploy to Vercel

This is a **standalone project** containing only the marketing website - separate from the mobile app.

### **Step 1: Initialize Git Repository**

Open terminal in this folder and run:

```bash
git init
git add .
git commit -m "Initial commit - The Skate Workshop marketing website"
```

### **Step 2: Push to GitHub**

Option A - Create new repo on GitHub.com:
1. Go to [github.com/new](https://github.com/new)
2. Name: `the-skate-workshop-website`
3. **Don't** initialize with README (we already have one)
4. Click "Create repository"

Option B - Use command line:
```bash
# Create repo via GitHub CLI (if installed)
gh repo create the-skate-workshop-website --public --source=. --remote=origin --push
```

Or connect to existing repo:
```bash
git remote add origin https://github.com/YOUR_USERNAME/the-skate-workshop-website.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Vercel**

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import `the-skate-workshop-website` repository
4. **Important**: Leave "Root Directory" as `.` (current directory)
5. Vercel auto-detects Next.js
6. Click "Deploy"

---

## 🌐 Connect Domain (theskateworkshop.app)

### In Vercel:
1. Go to Project Settings → Domains
2. Add: `theskateworkshop.app`
3. Add: `www.theskateworkshop.app`
4. Copy the DNS records Vercel provides

### In Hostinger:
1. Log in to [hpanel.hostinger.com](https://hpanel.hostinger.com)
2. Go to Domains → `theskateworkshop.app` → DNS/Name Servers
3. Add these records from Vercel:

**Root domain** (`theskateworkshop.app`):
- Type: `A`
- Name: `@`
- Points to: `76.76.21.21` (Vercel IP)

**WWW subdomain**:
- Type: `CNAME`
- Name: `www`
- Points to: `cname.vercel-dns.com`

4. Save and wait 5-30 minutes for DNS propagation

---

## 💻 Local Development

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
the-skate-workshop-website/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── page.tsx      # Homepage
│   │   ├── about/        # About Willy
│   │   ├── features/     # Features page
│   │   ├── pricing/      # Pricing
│   │   ├── coaches/      # Join as Coach
│   │   ├── download/     # Download App (Coming Soon)
│   │   ├── contact/      # Contact form
│   │   ├── privacy/      # Privacy Policy
│   │   └── terms/        # Terms of Service
│   └── components/       # React components
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       ├── FeatureCard.tsx
│       └── StatsSection.tsx
├── public/              # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🎨 Features

### **Pages**
✅ 8 complete pages  
✅ SEO optimized  
✅ Mobile responsive  
✅ Red workshop branding  
✅ Coming Soon mode for app  

### **Ecosystem Integration**
✅ Willy's Workshop (@willysworkshop)  
✅ Skate Warz (@skate_warz)  
✅ Couch Curbs (@couchcurbs)  
✅ Kain Tayo Day (@kaintayoday)  
✅ Commission Skateboard France  

### **Technical**
✅ Next.js 14 (App Router)  
✅ TypeScript  
✅ Tailwind CSS  
✅ Framer Motion ready  
✅ Supabase ready (forms)  

---

## 🔧 Environment Variables

Create `.env.local` file:

```bash
# Production URL
NEXT_PUBLIC_SITE_URL=https://theskateworkshop.app

# Supabase (when ready)
# NEXT_PUBLIC_SUPABASE_URL=
# NEXT_PUBLIC_SUPABASE_ANON_KEY=

# Analytics (optional)
# NEXT_PUBLIC_GA_ID=
```

---

## 📋 Deployment Checklist

### Before Deploying
- [x] All code in separate folder
- [x] Git repository initialized
- [x] .gitignore configured
- [x] Domain purchased (theskateworkshop.app)
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Test live site

### After Deployment
- [ ] Add logo to `public/logo.png`
- [ ] Add OG image to `public/og-image.png`
- [ ] Connect Supabase for forms
- [ ] Set up Google Analytics
- [ ] Submit to Google Search Console
- [ ] Announce on social media

---

## 🎯 Coming Soon Mode

The website is in "Coming Soon" mode:
- Download page shows **waitlist signup form**
- No active App Store/Play Store links
- Collects emails for launch notification
- Professional pre-launch presentation

**To switch to LIVE mode when app launches**:
- Update `/download` page with real store links
- Add working QR codes
- Change CTAs from "Join Waitlist" to "Download Now"
- Email waitlist with launch announcement

---

## 📞 Support

**Website**: https://theskateworkshop.app  
**Email**: contact@skateworkshop.com  
**Vercel**: [vercel.com/dashboard](https://vercel.com/dashboard)  
**Hostinger**: [hpanel.hostinger.com](https://hpanel.hostinger.com)  

---

## 🚀 You're Ready!

This folder contains **only** the marketing website - completely separate from the mobile app project.

**Next Steps**:
1. Initialize git: `git init`
2. Commit files: `git add . && git commit -m "Initial commit"`
3. Push to GitHub
4. Deploy to Vercel
5. Connect domain in Vercel + Hostinger DNS
6. Go live! 🎉

---

*The Skate Workshop - Elite skateboarding coaching from Willy Santos*
