# Nayee Subah Foundation — Website

Static site for the Nayee Subah Foundation (NSF), a non-profit in Giridih, Jharkhand, India, working on education, healthcare, and community development. Built with **Astro 7 (SSG)** + **Tailwind v4**, deployed to **GitHub Pages** at `https://nayeesubah.github.io`.

## Dual purpose

1. **Public NGO site** — home, about, activities, blog, events, gallery, donate, transparency/financials, testimonials, partners, success stories.
2. **Internal members system** — member directory, per-member payment portals, an admin contribution matrix, and investment tracking. Sensitive parts are protected by a client-side encrypted vault (see **Security**).
3. All content — including the vault passwords below — is managed through **[Sveltia CMS](https://github.com/sveltia/sveltia-cms)** at `/admin/` (`public/admin/config.yml`), a git-backed CMS that commits straight to this repo. Nothing in this project requires touching GitHub's web UI, secrets, or Actions to operate day to day.

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

Private member/payment data is shipped **AES-GCM encrypted** (`src/lib/vault.ts`, PBKDF2 SHA-256, 600k iterations) and decrypted **in the browser** after a password prompt (`src/components/VaultGate.astro`).

`VaultGate` remembers a successful unlock in `sessionStorage` for the tab, keyed by its `cacheKey` prop, so one unlock covers every page sharing that key (all admin pages use `cacheKey="nsf-admin"`; each member portal uses `member-<memberId>`). A floating **Lock** button clears the cache and re-locks. It also supports an optional `hint` prop. Cache is per-tab and cleared on tab close or a failed decrypt.

**Vault passwords are managed as content, entirely through the CMS — by design.** There
are two fields, editable in Sveltia CMS like any other content:

- `matrixPassword` on **Site Settings** (`src/content/site-settings/settings.yaml`) — the
  password for `/members/matrix/`, which exposes *every* member's data at once. This is
  the one that matters most; set it to something long and random.
- `password` on each **member** (`src/content/members/*.md`) — that member's own portal
  password. Defaults to the member's own `memberId`, which is already public (directory,
  ID card, verify page) — so out of the box this is a light click-through, not a security
  boundary, and the blast radius of leaving it alone is small (only that one member's own
  data, never the whole database). Give a member a real, different password via the same
  CMS field if you want one.

> ⚠️ **This repo must not be public if these passwords are to mean anything.** Both fields
> above are plain committed content — anyone who can read the repo (via the GitHub web UI,
> `git clone`, or the CMS's own GitHub OAuth login) can read `matrixPassword` directly,
> bypassing the vault's encryption entirely. **Set the repo to Private** in GitHub Settings
> → General → Danger Zone. GitHub Pages still serves the *built* site (`dist/`) publicly as
> normal — a private source repo does not affect visitors, only who can read the source
> (and thus these passwords). This is the one manual GitHub step this project still needs;
> there is no way around it that keeps password management inside the CMS. Because the repo
> was public for part of this project's history, treat any password ever set before it went
> private as compromised and rotate it via the CMS once the repo is private.

What is / isn't protected:

- **Encrypted (vault):** every member's payment history + subscription amount; each member's contact PII (mobile, email, occupation, blood group, city/state) on their portal page; the full members × months matrix.
- **Public (directory-level):** member name, member ID, membership status, city, subscription tier, joining date. These appear in `/members/`, the ID card, and the verify page by design.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. PRs run `.github/workflows/ci.yml` (check + build).
