# The Skate Workshop - Deployment Guide 🚀

**Domain**: theskateworkshop.app (Hostinger)  
**Hosting**: Vercel (Recommended)  
**Status**: Ready to Deploy

---

## 🎯 Quick Deploy (5 Minutes)

### **Option 1: Deploy to Vercel (Recommended)**

**Step 1: Push to GitHub**
```bash
cd c:\Users\blasj\Desktop\the-skate-workshop
git add .
git commit -m "Complete marketing website with Coming Soon mode"
git push origin main
```

**Step 2: Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. **Root Directory**: `apps/web`
6. Click "Deploy"

**Step 3: Get Vercel Domain**
After deployment, Vercel gives you:
- Production URL: `https://your-project.vercel.app`

---

## 🌐 Connect Custom Domain (Hostinger → Vercel)

### **Step 1: Add Domain in Vercel**

1. Go to your Vercel project
2. Click **Settings** → **Domains**
3. Add domain: `theskateworkshop.app`
4. Also add: `www.theskateworkshop.app`

### **Step 2: Get Vercel DNS Records**

Vercel will show you DNS records like:

**For Root Domain** (`theskateworkshop.app`):
```
Type: A
Name: @
Value: 76.76.21.21
```

**For WWW** (`www.theskateworkshop.app`):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### **Step 3: Update DNS in Hostinger**

1. Log in to [Hostinger](https://hpanel.hostinger.com)
2. Go to **Domains** → Click on `theskateworkshop.app`
3. Go to **DNS / Name Servers**
4. Click **Manage DNS Records**
5. **Delete existing A records** (if any)
6. **Add new records** from Vercel:

**Add Record 1:**
- Type: `A`
- Name: `@`
- Points to: `76.76.21.21` (Vercel's IP)
- TTL: `Auto` or `3600`

**Add Record 2:**
- Type: `CNAME`
- Name: `www`
- Points to: `cname.vercel-dns.com`
- TTL: `Auto` or `3600`

7. **Save Changes**

### **Step 4: Wait for Propagation**
- DNS changes take 5-30 minutes
- Check status: [dnschecker.org](https://dnschecker.org)
- Vercel will auto-generate SSL certificate

---

## 🔧 Alternative: Hostinger Hosting

If you want to host directly on Hostinger:

### **Build the Website**
```bash
cd apps/web
npm run build
```

This creates a `.next` folder with static files.

### **Upload to Hostinger**
1. Use Hostinger's **File Manager** or FTP
2. Upload contents of `.next` folder
3. Configure Node.js hosting (if supported)

**Note**: Vercel is recommended because:
- ✅ Optimized for Next.js
- ✅ Auto SSL certificates
- ✅ CDN (fast worldwide)
- ✅ Free tier available
- ✅ Auto deployments from GitHub

---

## 📋 Pre-Deployment Checklist

### **Code Ready** ✅
- [x] All pages complete (8 pages)
- [x] Domain configured (`theskateworkshop.app`)
- [x] Environment variables set
- [x] Coming Soon mode active
- [x] SEO metadata updated
- [x] Mobile responsive

### **Content** ⏳
- [ ] Add real logo (`public/logo.png`)
- [ ] Add Willy's photos
- [ ] Add Open Graph image (`public/og-image.png`)
- [ ] Test all forms locally

### **Deployment** ⏳
- [ ] Push to GitHub
- [ ] Deploy to Vercel
- [ ] Connect custom domain
- [ ] Wait for DNS propagation
- [ ] Test live site
- [ ] Check SSL certificate

---

## 🔐 Environment Variables (Vercel)

After deploying to Vercel, add these in **Project Settings** → **Environment Variables**:

**Production**:
```bash
NEXT_PUBLIC_SITE_URL=https://theskateworkshop.app
```

**When Supabase is Ready**:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📊 After Deployment

### **Verify Everything Works**
- [ ] Visit `https://theskateworkshop.app`
- [ ] Check all pages load
- [ ] Test mobile responsiveness
- [ ] Verify SSL certificate (🔒 in browser)
- [ ] Test waitlist form (when connected)
- [ ] Check social media links
- [ ] Test navigation

### **SEO Setup**
1. **Google Search Console**
   - Add property: `https://theskateworkshop.app`
   - Verify ownership
   - Submit sitemap: `/sitemap.xml`

2. **Google Analytics**
   - Create property
   - Add tracking ID to `.env`
   - Redeploy

3. **Social Media**
   - Update Instagram bios with link
   - Update YouTube descriptions
   - Share launch announcement

---

## 🚨 Troubleshooting

### **Domain Not Working?**
- Wait 30 minutes for DNS propagation
- Check DNS records in Hostinger match Vercel
- Verify domain is added in Vercel settings
- Check [dnschecker.org](https://dnschecker.org)

### **SSL Certificate Error?**
- Vercel auto-generates SSL
- Can take 1-2 hours after DNS propagates
- Force regenerate in Vercel domain settings

### **Build Failing?**
- Check Node.js version (should be 18+)
- Verify all dependencies installed
- Check build logs in Vercel dashboard
- Ensure `apps/web` is set as root directory

### **Pages Not Loading?**
- Clear browser cache
- Try incognito mode
- Check Vercel deployment logs
- Verify all files pushed to GitHub

---

## 📝 Deployment Steps Summary

### **Fastest Path to Live** (15 minutes):

1. **Push to GitHub** (2 min)
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Deploy to Vercel** (5 min)
   - Import GitHub repo
   - Set root: `apps/web`
   - Click Deploy

3. **Connect Domain** (5 min)
   - Add domain in Vercel
   - Copy DNS records
   - Update Hostinger DNS

4. **Wait for DNS** (5-30 min)
   - DNS propagates
   - SSL generates
   - Site goes live!

5. **Test Everything** (5 min)
   - Check all pages
   - Test mobile
   - Verify links

---

## 🎉 Going Live Announcement

Once deployed, announce on:

### **Social Media**
```
🚀 The Skate Workshop is LIVE!

Elite skateboarding coaching from Olympic-level coach Willy Santos.

Join the waitlist: theskateworkshop.app

🛠️ @willysworkshop
⚔️ @skate_warz
🇫🇷 @commission_skateboard_france

#skateboarding #coaching #willysworkshop
```

### **Instagram Stories**
- Screenshot of website
- "Swipe up" link to theskateworkshop.app
- Behind-the-scenes of Willy

### **Email**
If you have existing contacts:
```
Subject: The Skate Workshop - Now Live! 🚀

We're excited to announce The Skate Workshop website is now live!

Join the waitlist to be first in line when our mobile app launches:
https://theskateworkshop.app

Train with Willy Santos - 30+ years of Olympic-level coaching expertise.

See you on the platform!
```

---

## 📱 Post-Launch Tasks

### **Week 1**
- [ ] Monitor analytics
- [ ] Collect waitlist signups
- [ ] Share on social media daily
- [ ] Respond to inquiries
- [ ] Gather feedback

### **Week 2**
- [ ] Connect Supabase for forms
- [ ] Set up email notifications
- [ ] Create content calendar
- [ ] Plan launch campaign

### **Month 1**
- [ ] SEO optimization
- [ ] Content marketing
- [ ] Build backlinks
- [ ] Influencer outreach
- [ ] Prepare app launch

---

## 🔗 Important Links

**Production Site**: https://theskateworkshop.app  
**Vercel Dashboard**: https://vercel.com/dashboard  
**Hostinger Panel**: https://hpanel.hostinger.com  
**DNS Checker**: https://dnschecker.org  
**Google Search Console**: https://search.google.com/search-console  

---

## 💡 Pro Tips

1. **Auto Deployments**: Every push to `main` auto-deploys to Vercel
2. **Preview Deployments**: Pull requests get preview URLs
3. **Analytics**: Add Vercel Analytics for free insights
4. **Performance**: Vercel's Edge Network = fast worldwide
5. **SSL**: Free, auto-renewing certificates
6. **Rollback**: Easy rollback to previous deployments

---

## ✅ Deployment Complete!

Once DNS propagates, your site will be live at:

### **🌐 https://theskateworkshop.app**

**Coming Soon mode active** - Collecting waitlist signups!

---

*Need help? Check Vercel docs or reach out!*  
*Your marketing website is production-ready! 🚀*
