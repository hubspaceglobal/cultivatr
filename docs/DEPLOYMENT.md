### Cloudflare Pages Deployment Guide

#### 1) Connect repository
1. Log in to Cloudflare Dashboard.
2. Go to **Workers & Pages** -> **Create application** -> **Pages**.
3. Connect GitHub and select: `hubspaceglobal/cultivatr`.

#### 2) Build configuration
- **Framework preset:** Next.js (or None / static)
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (repo root)

#### 3) Environment variables
Set in Pages > Settings > Environment Variables:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Use Production + Preview environments.

#### 4) Custom domain
1. In Pages project, open **Custom domains**.
2. Add `cultivatr.theartisanhub.space`.
3. Ensure DNS is proxied and active.

#### 5) Verify routes
After deploy verify:
- `/rbd`
- `/tech`
- `/rbd/program-guide`
- `/admin`
- `/rbd/assessments/self-discovery`
- `/tech/assessments/digital-identity`

#### 6) CMS access for non-developers (mobile-friendly)
1. Share `/admin` URL with content editors.
2. Editor logs in via GitHub OAuth bridge.
3. Choose collection (**RBD Modules** or **Tech Modules**).
4. Edit fields and save.
5. Decap CMS opens PR/commit in GitHub automatically (depending on editorial workflow).
6. Cloudflare Pages redeploys on push.

#### 7) Optional hardening
- Restrict who has write access to repository.
- Enable branch protection for `main`.
- Use PR-based editorial workflow for review before publish.
