# Cultivatr (Next.js + Decap CMS + Supabase)

Production-ready static Next.js project for:

- `cultivatr.theartisanhub.space/rbd` (Regenerative Business Development)
- `cultivatr.theartisanhub.space/tech` (Tech Tuesday)

## Stack

- **Framework:** Next.js 14 + TypeScript (App Router)
- **Hosting:** Cloudflare Pages (static export via `output: 'export'`)
- **CMS:** Decap CMS (`/admin`) with GitHub backend
- **Database:** Supabase (assessment + progress tracking)

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env.local
   ```
   Fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Run dev server:
   ```bash
   npm run dev
   ```
4. Build static export:
   ```bash
   npm run build
   ```
   Static output is generated in `out/`.

## Project Structure

- `app/rbd/*` - RBD routes
- `app/tech/*` - Tech routes
- `app/rbd/assessments/self-discovery` - Module 1 self-assessment
- `app/tech/assessments/digital-identity` - Digital identity self-assessment
- `content/rbd/modules.json` - editable RBD content (Decap managed)
- `content/tech/modules.json` - editable Tech content (Decap managed)
- `public/program_guide.html` - integrated static MicroBiz program guide
- `public/admin/*` - Decap CMS admin and config
- `lib/supabase/*` - Supabase client and submission functions
- `supabase/migrations/001_init_assessment_tracking.sql` - schema migration

## Supabase Setup

1. Create a Supabase project.
2. Open SQL Editor and run:
   - `supabase/migrations/001_init_assessment_tracking.sql`
3. Confirm tables exist:
   - `self_assessment_responses`
   - `digital_identity_assessments`
   - `user_progress_tracking`
4. Add env values in Cloudflare Pages and local `.env.local`.

## Decap CMS Setup

CMS is available at `/admin` after deployment.

### Collections
- **RBD Modules** -> `content/rbd/modules.json`
- **Tech Modules** -> `content/tech/modules.json`

### GitHub Editing Auth
`public/admin/config.yml` uses GitHub backend and Decap Bridge OAuth endpoint.

For production, configure your OAuth bridge so non-developers can log in from mobile and edit content in-browser.

## Cloudflare Pages

See full guide in `docs/DEPLOYMENT.md`.

Quick values:
- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Node version:** 20+

## Notes

- This site is static-export friendly and optimized for Cloudflare Pages.
- Supabase writes are client-side using public anon key + RLS policies.
- Program guide is integrated via iframe from provided production HTML.
