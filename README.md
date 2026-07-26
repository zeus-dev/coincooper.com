# coincooper.com

Static marketing site for **CoinCooper** / **Aetherion Exchange**.

## Run locally

```bash
./serve.sh
# or: python3 -m http.server 8080
```

## Screenshots

Hero only: `assets/screenshots/01-agora-trade.jpg` (Agora trading UI).

Everything else lives on the live UAT exchange: **https://cex.coincooper.com** — primary CTAs point there instead of a screenshot gallery.

Aligned copy with the live Aetherion stack:

- Withdrawal whitelist: address → 2FA (Janus) → email OTP (Hermes) → confirmed
- Sentinel = Vue 3 admin (not Next.js); Agora = Next.js user UI
- Hermes as the notification path (MailHog UAT / SMTP prod)
- Softened overclaims (SOC 2 → Vault-backed keys; 200+ chains → 20+ networks; HSM → Vault custody)
- Architecture page: Envoy gateway, Admin BFF, Plutus, Fee Service, Analytics (no Traefik / Kronos)
- Stats: 17 microservices

## Ideas — what to add next

| Priority | Idea | Why |
|----------|------|-----|
| High | **OpenAPI / docs portal** (or link to generated Swagger) | Footer “API Reference” still points at architecture.html |
| High | **Supported networks page** with the real seed catalog list | Replaces vague chain counts |
| Medium | **Security deep-dive page** expanding the 4-step withdrawal flow + RBAC | Differentiator vs generic white-label CEXs |
| Medium | **Status page** (Uptime / service health) | Footer placeholder today |
| Medium | **Mobile** callout (`aetherion-mobile`) | App stack exists but is invisible on the site |
| Low | Blog / changelog from Midaz + Exchange releases | Builds trust for enterprise buyers |
| Low | Honest pricing (remove “Coming Soon” overlay when ready) | Conversion |
| Low | Lighten brand: less purple-glow SaaS, more product photography | Brand differentiation |

## Site structure

- `index.html` — CoinCooper company home (products)
- `exchange.html` — Aetherion Exchange product page
- `architecture.html` — Aetherion service catalog
- `contact.html` — contact form
- `rpc-nodes.html` — RPC preview (product cooking / coming soon)
- Favicons from logo: `favicon.ico`, `assets/favicon/*`
