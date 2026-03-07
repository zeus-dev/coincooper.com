# Pre-Deployment Checklist ✅

Use this checklist before deploying to production.

## Content Review

- [ ] All text content is accurate and professional
- [ ] Email addresses are correct (admin@coincooper.com)
- [ ] Company name is correct (Zeus Dev / coincooper.com)
- [ ] Domain name is correct (coincooper.com for marketing, aetherion.exchange for demo)
- [ ] All links work correctly
- [ ] No placeholder text remains (e.g., "Lorem ipsum")
- [ ] Copyright year is current (2026)

## Technical Review

- [ ] All HTML files validate (use [W3C Validator](https://validator.w3.org/))
- [ ] All CSS files are error-free
- [ ] All JavaScript files are error-free
- [ ] No console errors in browser (F12 → Console)
- [ ] All images have alt attributes
- [ ] All forms have proper validation
- [ ] CNAME file contains correct domain

## Responsive Design

- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1440px+ width)
- [ ] Navigation menu works on mobile
- [ ] All buttons are clickable on touch devices
- [ ] Text is readable on all screen sizes

## Browser Testing

- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## Performance

- [ ] Run Lighthouse audit (target: 95+ on all metrics)
- [ ] Check page load time (target: < 3 seconds)
- [ ] Verify all animations respect prefers-reduced-motion
- [ ] Check total page weight (target: < 500KB per page)

## SEO

- [ ] All pages have unique `<title>` tags
- [ ] All pages have meta descriptions
- [ ] Open Graph tags are present
- [ ] Twitter Card tags are present
- [ ] sitemap.xml is present and correct
- [ ] robots.txt is present and correct
- [ ] Semantic HTML is used correctly

## Accessibility

- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG 2.1 AA standards
- [ ] Screen reader testing (optional but recommended)
- [ ] All forms have proper labels
- [ ] ARIA labels where appropriate

## Security

- [ ] No sensitive information in code
- [ ] No API keys or credentials exposed
- [ ] HTTPS will be enforced (GitHub Pages setting)
- [ ] External links use rel="noopener" if needed

## GitHub Repository

- [ ] Repository is created
- [ ] Code is pushed to main branch
- [ ] README.md is complete
- [ ] .gitignore is present
- [ ] Repository description is set
- [ ] Repository topics/tags are added (optional)

## GitHub Pages

- [ ] GitHub Pages is enabled
- [ ] Source is set to main branch, root folder
- [ ] Site is accessible at github.io URL
- [ ] Custom domain is configured (if ready)
- [ ] HTTPS is enforced
- [ ] DNS records are configured correctly

## Post-Deployment

- [ ] Visit all pages and verify they load
- [ ] Test all forms
- [ ] Test all navigation links
- [ ] Test on mobile device
- [ ] Check Google Search Console (after 24-48 hours)
- [ ] Monitor for any errors

## Optional Enhancements

- [ ] Add Google Analytics (if needed)
- [ ] Add cookie consent banner (if required by law)
- [ ] Set up monitoring/uptime checks
- [ ] Create social media preview images
- [ ] Submit to search engines

## Notes

- DNS propagation can take up to 24 hours
- GitHub Pages SSL certificate provisioning can take up to 24 hours
- First deployment may take 5-10 minutes

---

**Deployment Date**: _____________

**Deployed By**: _____________

**Production URL**: https://coincooper.com

**Status**: ⬜ Not Started | ⬜ In Progress | ⬜ Complete

---

Built with 🔥 by coincooper.com
