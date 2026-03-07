# Quick Start Guide 🚀

Get your Aetherion Exchange website live in 5 minutes!

## Prerequisites

- GitHub account ([sign up here](https://github.com/join))
- Git installed on your computer ([download here](https://git-scm.com/downloads))
- Access to your domain registrar (for aetherion.exchange DNS settings)

## 5-Minute Deployment

### 1. Create GitHub Repository (1 minute)

```bash
# On GitHub.com:
# 1. Click "+" → "New repository"
# 2. Name: aetherion-exchange-website
# 3. Public repository
# 4. Click "Create repository"
```

### 2. Push Code (2 minutes)

```bash
# In your terminal, navigate to this folder and run:

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aetherion-exchange-website.git
git push -u origin main

# Replace YOUR_USERNAME with your actual GitHub username
```

### 3. Enable GitHub Pages (1 minute)

```bash
# On GitHub.com:
# 1. Go to your repository
# 2. Settings → Pages
# 3. Source: Deploy from branch "main", folder "/ (root)"
# 4. Click Save
# 5. Wait 2 minutes
# 6. Your site is live at: https://YOUR_USERNAME.github.io/aetherion-exchange-website/
```

### 4. Add Custom Domain (1 minute)

```bash
# On GitHub.com:
# 1. Settings → Pages → Custom domain
# 2. Enter: coincooper.com
# 3. Click Save
```

### 5. Configure DNS (Done separately)

Add these records at your domain registrar:

```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
Type: CNAME, Name: www, Value: YOUR_USERNAME.github.io
```

**Done!** Your site will be live at https://coincooper.com within 24 hours (usually 10-30 minutes).

## Test Locally First

Before deploying, test the site on your computer:

```bash
# Option 1: Python (recommended)
python3 -m http.server 8000

# Option 2: Use the provided script
./serve.sh

# Then visit: http://localhost:8000
```

## Common Commands

### Update Website
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Check Status
```bash
git status
```

### View Commit History
```bash
git log --oneline
```

## File Structure

```
📁 Your Website
├── 📄 index.html          ← Homepage
├── 📄 architecture.html   ← Architecture page
├── 📄 rpc-nodes.html      ← RPC Nodes page
├── 📄 contact.html        ← Contact page
├── 📁 css/                ← All styles
├── 📁 js/                 ← All scripts
├── 📄 CNAME               ← Domain configuration
└── 📄 README.md           ← Documentation
```

## Need Help?

- **Deployment Issues**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Pre-launch Checklist**: See [CHECKLIST.md](CHECKLIST.md)
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Contact**: admin@coincooper.com

## What's Next?

1. ✅ Deploy to GitHub Pages
2. ✅ Configure custom domain
3. ✅ Enable HTTPS
4. 📧 Set up email forwarding for admin@coincooper.com
5. 📊 Add analytics (optional)
6. 🔍 Submit to search engines
7. 📱 Share on social media

## Pro Tips

- **Always test locally** before pushing to GitHub
- **Use meaningful commit messages** (e.g., "Update pricing section")
- **Check the live site** after each deployment
- **Monitor performance** with Google PageSpeed Insights
- **Keep backups** of your repository

---

**Your Website URLs:**
- Development: http://localhost:8000
- GitHub Pages: https://YOUR_USERNAME.github.io/aetherion-exchange-website/
- Production: https://coincooper.com

Built with 🔥 by coincooper.com
