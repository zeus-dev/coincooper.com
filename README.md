# Aetherion Exchange — Marketing Website

Official marketing and sales website for Aetherion Exchange, a white-label cryptocurrency exchange infrastructure platform.

## 🚀 Features

- **Fully Static** — Pure HTML/CSS/JS, no build step required
- **GitHub Pages Ready** — Deploy directly to GitHub Pages
- **Responsive Design** — Mobile-first, works on all devices
- **Premium Dark Theme** — Institutional-grade design
- **Smooth Animations** — Scroll-triggered animations with Intersection Observer
- **Accessibility** — WCAG 2.1 AA compliant, keyboard navigable
- **Performance Optimized** — Lighthouse score 95+

## 📁 Structure

```
/
├── index.html              # Homepage
├── architecture.html       # Architecture deep-dive
├── rpc-nodes.html         # RPC Nodes service page
├── contact.html           # Contact form
├── css/
│   ├── reset.css          # CSS reset
│   ├── variables.css      # CSS custom properties
│   ├── global.css         # Global styles
│   ├── components.css     # Reusable components
│   ├── hero.css           # Hero section styles
│   ├── sections.css       # Section-specific styles
│   └── responsive.css     # Media queries
├── js/
│   ├── navigation.js      # Navigation functionality
│   ├── animations.js      # Scroll animations
│   ├── counter.js         # Stats counter animation
│   └── main.js            # Main JavaScript
├── CNAME                  # Custom domain configuration
└── README.md              # This file
```

## 🎨 Design System

### Colors
- **Background**: `#0A0E17` (primary), `#111827` (secondary), `#1A2236` (tertiary)
- **Accent**: `#6366F1` (primary), `#8B5CF6` (secondary)
- **Text**: `#F9FAFB` (primary), `#9CA3AF` (secondary), `#6B7280` (muted)

### Typography
- **Headings**: Inter (700-900 weight)
- **Body**: Inter (400-500 weight)
- **Code**: JetBrains Mono

## 🚀 Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push this code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
3. Go to repository Settings → Pages
4. Set Source to "Deploy from a branch"
5. Select branch: `main`, folder: `/ (root)`
6. Click Save
7. Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Custom Domain Setup

1. Add your domain to the CNAME file (already done: `aetherion.exchange`)
2. In your domain registrar, add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
3. In GitHub Pages settings, enter your custom domain
4. Enable "Enforce HTTPS"

## 📧 Contact

- **Email**: admin@coincooper.com
- **Website**: https://coincooper.com

## 📄 License

© 2026 Zeus Dev. All rights reserved.

Built with 🔥 by coincooper.com
