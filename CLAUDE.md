# Nayee Subah Foundation — Website

Static site for the Nayee Subah Foundation (NSF), a non-profit in Giridih, Jharkhand, India, working on education, healthcare, and community development. Built with **Astro 7 (SSG)** + **Tailwind v4**, deployed to **GitHub Pages** at `https://nayeesubah.github.io`.

## Dual purpose

1. **Public NGO site** — home, about, activities, blog, events, gallery, donate, transparency/financials, testimonials, partners, success stories.
2. **Internal members system** — member directory, per-member payment portals, an admin contribution matrix, and investment tracking. Sensitive parts are protected by a client-side encrypted vault (see **Security**).

## Commands

```bash
npm run dev       # local dev server
npm run build     # astro build + categorized sitemaps + pagefind search index
npm run check     # astro check (type-check; see note below)
npm run preview   # preview the production build
npm run indexnow  # ping IndexNow with updated URLs
```

> `npm run check` currently reports pre-existing strict-TypeScript errors in inline
> `<script>` blocks (DOM null-checks, `z.number({ coerce })`, etc.). These are
> informational and do not block the build; CI runs check with `continue-on-error`.
> `astro build` is the real gate — it validates every content collection against its
> Zod schema.

## Architecture

- **Content** lives in `src/content/**` as Markdown/YAML, typed by Zod schemas in `src/content.config.ts`. 23 collections (blog, members, payments, activities, events, financial-reports, income, expenses, donors, etc.).
- **Pages** in `src/pages/**`; layout in `src/layouts/BaseLayout.astro`; shared logic in `src/lib/**`.
- **i18n**: configured for `en`/`hi`/`ur` with UI strings in `src/i18n/ui.ts`. Only English content exists; `hi`/`ur` routes are rewritten to English. The language switcher is hidden until content is actually translated.
- **PWA**: `public/manifest.json` + `public/sw.js` (service worker versioned per build).
- **Search**: [Pagefind](https://pagefind.app) full-text client-side search. The index is built by `pagefind --site dist` (last step of `npm run build`) and loaded lazily when the search modal opens (magnifier in the navbar, or `⌘/Ctrl-K` / `/`). Only public content is indexed: `<main>` carries `data-pagefind-body` on searchable pages and `data-pagefind-ignore` on private ones (members/investment pass `searchable={false}` to `BaseLayout`). Pagefind's WASM needs `'wasm-unsafe-eval'` in the script CSP. Search only works against a built site (`npm run build && npm run preview`), not `astro dev`.
- **Page transitions**: native cross-document view transitions via CSS `@view-transition` (`src/styles/transitions.css`). Progressive enhancement — every navigation is still a full page load, so all page scripts run normally; we intentionally do **not** use the SPA `ClientRouter` (it would break the per-page inline scripts).

### Members & payments conventions

- **Member files**: `src/content/members/<name>-nsf-<yy>-<nnn>.md`. `memberId` like `NSF-18-002` (year-joined + zero-padded 3-digit sequence).
- **Payment files**: one file per member per month — `src/content/payments/pmt-<memberId>-<year>-<index>.md`. Schema is a **flat object** (`memberId`, `year`, `month` 0–11, `status` = `paid`|`partial`, `amount`). Not an array.
- The contribution matrix (`src/lib/matrix.ts`) fills in `due` / `not-updated` for months without a payment file, up to the current month.

## Security

The site is fully static and hosted from a **public** repo, so it cannot hold real secrets in committed files. Private member/payment data is shipped **AES-GCM encrypted** (`src/lib/vault.ts`, PBKDF2 SHA-256, 600k iterations) and decrypted **in the browser** after a password prompt (`src/components/VaultGate.astro`).

`VaultGate` remembers a successful unlock in `sessionStorage` for the tab, keyed by its `cacheKey` prop, so one unlock covers every page sharing that key (all admin pages use `cacheKey="nsf-admin"`; each member portal uses `member-<memberId>`). A floating **Lock** button clears the cache and re-locks. It also supports an optional `hint` prop. Cache is per-tab and cleared on tab close or a failed decrypt.

**Passwords are never committed.** They are resolved at build time by `src/lib/secrets.ts`:

- **CI / GitHub Actions** — set repository secrets (Settings → Secrets and variables → Actions):
  - `MATRIX_PASSWORD` — master password for `/members/matrix/` (all members + all payments).
  - `MEMBER_PASSWORDS` — JSON map `{"NSF-18-002":"...", ...}` for per-member portals.
  - The deploy workflow passes these into `astro build`. **Without them, the members
    area builds but cannot be unlocked** (pages show "no password configured" — data
    is never exposed in the clear).
- **Local builds** — copy `secrets.example.json` → `secrets.json` (git-ignored) and fill it in:
  ```json
  { "matrixPassword": "…", "members": { "NSF-18-002": "…" } }
  ```

What is / isn't protected:

- **Encrypted (vault):** every member's payment history + subscription amount; each member's contact PII (mobile, email, occupation, blood group, city/state) on their portal page; the full members × months matrix.
- **Public (directory-level):** member name, member ID, membership status, city, subscription tier, joining date. These appear in `/members/`, the ID card, and the verify page by design.

> ⚠️ **Residual risk:** encrypted vaults are publicly downloadable, so their contents
> are only as safe as the password strength. Use **long, random** passphrases. Anyone
> with the matrix password can read the entire member database. For stronger protection,
> move the members area behind a real auth boundary (e.g. Cloudflare Access) or a private
> host. Never reuse a member ID (or anything guessable) as a password.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. PRs run `.github/workflows/ci.yml` (check + build).
