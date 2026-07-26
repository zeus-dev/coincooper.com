# coincooper.com

Static marketing site for **CoinCooper** / **Aetherion Exchange**.

## Run locally

```bash
./serve.sh
# or: python3 -m http.server 8080
```

## Screenshots (Jul 2026)

Placed in `assets/screenshots/` and on `index.html`:

| File | Page | Site placement |
|------|------|----------------|
| `01-agora-trade.png` | Agora Trade | Hero |
| `02-agora-wallet.png` | Agora Wallet | See It Running (wide) |
| `03-agora-withdraw.png` | Agora Withdraw | Withdrawal Security |
| `04-agora-whitelist.png` | Whitelist step 1 | Withdrawal Security |
| `05-sentinel-dashboard.png` | Sentinel Dashboard | Product mosaic |
| `06-sentinel-treasury.png` | Treasury Ops | Product mosaic |
| `07-sentinel-rbac.png` | Roles & Permissions | Product mosaic |
| `08-sentinel-deposits.png` | Deposits | Product mosaic |

**Still useful if you have them:** Whitelist **2FA** step, Whitelist **Email OTP** step, Sentinel **Whitelist** revoke page.

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
| High | **Product screenshots** from Agora + Sentinel (whitelist wizard, admin revoke) | Marketing currently uses CSS mockups only |
| High | **OpenAPI / docs portal** (or link to generated Swagger) | Footer “API Reference” still points at architecture.html |
| High | **Supported networks page** with the real seed catalog list | Replaces vague chain counts |
| Medium | **Security deep-dive page** expanding the 4-step withdrawal flow + RBAC | Differentiator vs generic white-label CEXs |
| Medium | **Status page** (Uptime / service health) | Footer placeholder today |
| Medium | **Mobile** callout (`aetherion-mobile`) | App stack exists but is invisible on the site |
| Low | Blog / changelog from Midaz + Exchange releases | Builds trust for enterprise buyers |
| Low | Honest pricing (remove “Coming Soon” overlay when ready) | Conversion |
| Low | Lighten brand: less purple-glow SaaS, more product photography | Brand differentiation |

## Pages

- `index.html` — homepage
- `architecture.html` — service catalog
- `rpc-nodes.html` — RPC product
- `contact.html` — demo form
