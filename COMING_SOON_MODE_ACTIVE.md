# Coming Soon Mode - ACTIVE ✅

**Date**: October 16, 2025  
**Status**: Website now in "Coming Soon" mode for app stores

---

## 🚀 What Changed

The marketing website has been updated to reflect that the mobile app is **COMING SOON** rather than immediately available for download.

---

## 📄 Pages Updated

### **1. Download Page** (`/download`)

**Before**:
- Active download buttons for iOS/Android
- QR code for instant download
- Implied app is live

**After**:
- ✅ **"LAUNCHING SOON" badge** in hero
- ✅ **Coming Soon badges** on iOS/Android cards
- ✅ **Waitlist signup form** (prominent red gradient box)
- ✅ Platform specifications shown (iOS 14.0+, Android 10.0+)
- ✅ "Join Waitlist" CTA button
- ✅ Removed download links
- ✅ Removed QR code section

**New Features**:
- Email waitlist form with validation
- "Notify Me" button
- Privacy message ("We'll never spam you")
- Early access positioning
- Launch update promises

---

### **2. Homepage** (`/`)

**Changes**:
1. Hero CTA: "Download App Now" → **"Join Waitlist"**
2. Hero text: "Available on iOS and Android" → **"Coming Soon to iOS and Android"**
3. Final CTA section updated:
   - "Download The Skate Workshop today" → **"Join the waitlist"**
   - "Download for iOS/Android" buttons → **"Join Waitlist" + "Learn More"**

---

## 🎨 Design Updates

### **Download Page Hero**
```
🚀 LAUNCHING SOON ON iOS & ANDROID

The Skate Workshop App

Elite skateboarding coaching from Willy Santos. 
Join the waitlist for early access.

[Join Waitlist →]
```

### **Waitlist Form**
- **Red gradient background** (brand colors)
- **Email input field** (white, clean)
- **Black "Notify Me" button** (high contrast)
- **Mobile responsive** (stacks on small screens)
- **Privacy reassurance** included

### **Platform Cards**
- **"Coming Soon" badges** (top-right corner, red)
- **Platform icons** (Apple/Android)
- **System requirements** shown
- **No clickable links** (prevents confusion)

---

## 📋 Waitlist Form Details

**Location**: `/download#waitlist`  
**Type**: Email signup form  
**Fields**:
- Email (required, validated)

**Button**: "Notify Me"  
**Privacy**: "We'll never spam you. Unsubscribe anytime."

**TODO - Connect to Backend**:
```typescript
// In apps/web/src/app/download/page.tsx
// Line ~138 - Add form submission handler

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  // TODO: Connect to Supabase
  // Create 'waitlist' table with: email, created_at
  // Send confirmation email
}
```

---

## 🔗 CTAs Throughout Site

**All CTAs Now Point To**:
- `/download` → Download page with waitlist
- `/download#waitlist` → Scrolls directly to signup form

**CTA Text Updated**:
- ❌ "Download App Now"
- ❌ "Download for iOS"
- ❌ "Download for Android"
- ✅ "Join Waitlist"
- ✅ "Notify Me"
- ✅ "Join the Launch Waitlist"

---

## 📊 Benefits of Coming Soon Mode

### **1. Build Anticipation**
- Creates FOMO (fear of missing out)
- Positions as exclusive early access
- Builds email list before launch

### **2. Collect Emails**
- Captures interested users
- Can notify when app launches
- Marketing database for launch

### **3. No False Promises**
- Honest about app availability
- Sets proper expectations
- Professional presentation

### **4. Launch Momentum**
- Can email waitlist on launch day
- Instant downloads from engaged users
- Built-in launch audience

---

## 🎯 When to Switch to "Live" Mode

Once the app is published to App Store and Google Play:

### **1. Update Download Page**
Replace Coming Soon badges with:
- Real App Store link
- Real Google Play link
- Working QR codes

### **2. Update Homepage CTAs**
Change "Join Waitlist" to "Download Now"

### **3. Email Waitlist**
Send launch announcement to all signups

### **4. Keep Waitlist Form**
Can still collect emails for updates/news

---

## 📧 Recommended Supabase Table

```sql
-- Create waitlist table in Supabase
CREATE TABLE waitlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  source VARCHAR(50) DEFAULT 'website', -- track where signup came from
  notified BOOLEAN DEFAULT false, -- track if launch email sent
  created_at TIMESTAMP DEFAULT NOW()
);

-- Add index for quick lookups
CREATE INDEX idx_waitlist_email ON waitlist(email);
CREATE INDEX idx_waitlist_created ON waitlist(created_at DESC);
```

---

## 🚀 Launch Checklist

When ready to go live:

### **Code Changes** (15 min)
- [ ] Update `/download` page with real links
- [ ] Add real App Store URL
- [ ] Add real Google Play URL
- [ ] Generate and add QR codes
- [ ] Update homepage CTAs
- [ ] Test all download links

### **Email Campaign** (30 min)
- [ ] Export waitlist emails from Supabase
- [ ] Write launch announcement email
- [ ] Send to waitlist
- [ ] Mark as notified in database

### **Marketing** (60 min)
- [ ] Post on all social media
- [ ] Update Instagram bios with links
- [ ] Post on Skate Warz
- [ ] Post on Willy's Workshop
- [ ] Announce to Commission Skateboard France

---

## 📱 Current Messaging

### **Download Page**
> "🚀 COMING SOON TO APP STORES"
> 
> "Be the First to Download"
> 
> "Join the waitlist and get notified the moment we launch on iOS and Android"

### **Homepage Hero**
> "Coming Soon to iOS and Android • Join the Waitlist"

### **Final CTA**
> "Join the waitlist for The Skate Workshop and be among the first to experience elite skateboarding coaching from Willy Santos."

---

## ✅ Status Summary

**Mode**: Coming Soon ✅  
**Waitlist Form**: Active ✅  
**Download Links**: Removed ✅  
**QR Codes**: Removed ✅  
**Messaging**: Updated ✅  
**CTAs**: Updated ✅  

**Backend Connection**: ⏳ TODO  
**Email Collection**: ⏳ Needs Supabase

---

## 🎉 Ready to Build Hype!

The website is now perfectly positioned to:
- Build anticipation for launch
- Collect interested user emails
- Set proper expectations
- Create launch momentum

**Users will see "Coming Soon" and can join the waitlist to be notified when the app goes live!** 📧🚀

---

*Updated October 16, 2025*
