# GibelaGo Website - Deployment Instructions

## Quick Deploy to GitHub Pages

### Option 1: Using Git Commands (Recommended)

Run these commands in your terminal:

```bash
cd /home/ubuntu/gibelaGo_website

# Configure git (if not already done)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Push to GitHub
git push -u origin main
```

### Option 2: Using GitHub Desktop

1. Open GitHub Desktop
2. Click "File" → "Add Local Repository"
3. Select `/home/ubuntu/gibelaGo_website`
4. Click "Publish repository"
5. Name: `gibelaGo-website`
6. Click "Publish Repository"

## Enable GitHub Pages

Once pushed to GitHub:

1. Go to: https://github.com/NtuliMpendulo/gibelaGo-website
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

## Your Live Website

After GitHub Pages is enabled, your website will be live at:

```
https://NtuliMpendulo.github.io/gibelaGo-website/
```

This may take 1-2 minutes to deploy.

## What's Included

✅ Responsive hero section with GibelaGo branding
✅ Why Choose GibelaGo features (4 cards)
✅ Community testimonials (4 reviews)
✅ Professional footer with contact info
✅ Smooth animations and interactions
✅ Mobile-optimized design
✅ Orange (#FF6B35) & Teal (#004E89) branding

## File Structure

```
gibelaGo_website/
├── index.html          # Main website
├── styles.css          # Styling
├── script.js           # Interactivity
├── README.md           # Project info
├── DEPLOY.md           # This file
└── .gitignore          # Git configuration
```

## Troubleshooting

**Issue: "Permission denied"**
- Make sure you're logged into GitHub with your personal account
- Run: `gh auth login` to re-authenticate

**Issue: "Repository not found"**
- Verify the repository exists at: https://github.com/NtuliMpendulo/gibelaGo-website
- Check your internet connection

**Issue: GitHub Pages not deploying**
- Wait 1-2 minutes for initial deployment
- Check the "Deployments" tab in your repository
- Verify the branch is set to "main" in Settings → Pages

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Enable GitHub Pages
3. 🔄 Share your live website: `https://NtuliMpendulo.github.io/gibelaGo-website/`
4. 🔄 Update links in your social media and marketing materials
5. 🔄 Add custom domain (optional): https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

## Support

For GitHub Pages help: https://docs.github.com/en/pages

---

**Ubuntu • Respect • Together We Go Further** 🚀
