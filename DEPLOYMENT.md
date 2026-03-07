# Deployment Guide for Aetherion Exchange Website

## Quick Start — Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `aetherion-exchange-website` (or any name you prefer)
4. Description: "Official marketing website for Aetherion Exchange"
5. Set to **Public**
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### Step 2: Push Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Aetherion Exchange website"

# Rename branch to main
git branch -M main

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/aetherion-exchange-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
   - Click "Save"
5. Wait 1-2 minutes for deployment
6. Your site will be live at: `https://YOUR_USERNAME.github.io/aetherion-exchange-website/`

### Step 4: Configure Custom Domain (coincooper.com)

#### A. Update DNS Records

Go to your domain registrar (where you bought coincooper.com) and add these DNS records:

**For Apex Domain (aetherion.exchange):**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
```

**For WWW Subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### B. Configure GitHub Pages Custom Domain

1. In your repository, go to Settings → Pages
2. Under "Custom domain", enter: `coincooper.com`
3. Click "Save"
4. Wait for DNS check (can take up to 24 hours, usually 10-30 minutes)
5. Once verified, check "Enforce HTTPS"

### Step 5: Verify Deployment

1. Visit `https://coincooper.com`
2. Check all pages work:
   - Homepage: `https://coincooper.com/`
   - Architecture: `https://coincooper.com/architecture.html`
   - RPC Nodes: `https://coincooper.com/rpc-nodes.html`
   - Contact: `https://coincooper.com/contact.html`
3. Test on mobile devices
4. Check browser console for errors (F12 → Console)

## Alternative: Deploy to Netlify (Optional)

If you prefer Netlify over GitHub Pages:

1. Go to [Netlify](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Click "Deploy site"
6. Once deployed, go to Site settings → Domain management
7. Add custom domain: `coincooper.com`
8. Follow Netlify's DNS instructions

## Alternative: Deploy to Vercel (Optional)

1. Go to [Vercel](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Framework Preset: "Other"
5. Root Directory: `./`
6. Click "Deploy"
7. Once deployed, go to Settings → Domains
8. Add custom domain: `coincooper.com`

## Updating the Website

After making changes to the code:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Description of your changes"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically redeploy within 1-2 minutes.

## Testing Locally

To test the website locally before deploying:

### Option 1: Python Simple Server
```bash
# Python 3
python3 -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 2: PHP Built-in Server
```bash
php -S localhost:8000

# Then visit: http://localhost:8000
```

### Option 3: VS Code Live Server Extension
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## Troubleshooting

### Site not loading after deployment
- Wait 5-10 minutes for DNS propagation
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Pages status in repository settings

### Custom domain not working
- Verify DNS records are correct (use [DNS Checker](https://dnschecker.org))
- Wait up to 24 hours for DNS propagation
- Ensure CNAME file contains only: `coincooper.com`

### HTTPS not working
- Wait for GitHub to provision SSL certificate (can take 24 hours)
- Ensure "Enforce HTTPS" is checked in GitHub Pages settings
- Try accessing with `https://` explicitly

### Images or CSS not loading
- Check file paths are relative (e.g., `css/global.css` not `/css/global.css`)
- Verify all files are committed and pushed to GitHub
- Check browser console for 404 errors

## Performance Optimization

The website is already optimized, but for further improvements:

1. **Minify CSS/JS** (optional):
   ```bash
   # Install minifier
   npm install -g minify
   
   # Minify CSS
   minify css/global.css > css/global.min.css
   
   # Update HTML to use .min.css files
   ```

2. **Enable Caching**: GitHub Pages automatically sets cache headers

3. **Monitor Performance**:
   - Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 95+ score on all metrics

## Support

For deployment issues:
- GitHub Pages Docs: https://docs.github.com/en/pages
- Contact: admin@coincooper.com

---

Built with 🔥 by coincooper.com
