# Rohit Kumar Chaurasiya — Portfolio

A premium, production-grade personal portfolio of Rohit Kumar Chaurasiya, Software Engineer.
Built mobile-first with React 19, TypeScript, Tailwind CSS and Framer Motion, in a **Luxury
Corporate** visual style — white/soft-grey canvas, navy as the primary brand color, gold/bronze
as a restrained accent.

## Features

- **Data-driven content** — every project, skill, experience entry and service lives in
  `src/data/`, completely separate from UI components. Edit content without touching layout code.
- **Real, honest project case studies** — problem → solution → architecture → challenges →
  results → lessons learned, with an inline architecture flow diagram per project.
- **Filterable project grid** with an accessible case-study modal (focus trap, Escape-to-close).
- **Live GitHub repositories** — fetched client-side from the public GitHub API, with proper
  loading, error (with retry) and empty states. No token required for public repos.
- **A real contact form**, backed by a built-in Vercel serverless function
  (`api/contact.ts`) that sends email via Resend — see [Contact form backend](#contact-form-backend).
  It never fakes a successful submission.
- **Fully responsive**, audited at 320px, 375px, 390px, 768px, 1024px, 1440px and 1920px with
  zero horizontal overflow.
- **Accessible**: semantic HTML, keyboard navigation, focus indicators, ARIA labels, a focus-trapped
  modal and mobile drawer, `prefers-reduced-motion` support throughout.
- **SEO-ready**: OpenGraph, Twitter Card, Person JSON-LD schema, `sitemap.xml`, `robots.txt`.
- **Small production bundle** (~150KB gzipped JS) — brand icons are extracted to a local path
  dataset instead of bundling the entire `simple-icons` library.

## Tech stack

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Router · Lucide icons
Serverless: Vercel Functions · Resend (email)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you need:

```bash
cp .env.example .env.local
```

See [Contact form backend](#contact-form-backend) below for what each variable does.
Never commit `.env.local` — it's already in `.gitignore`.

## Contact form backend

The contact form POSTs JSON to `/api/contact` by default — a Vercel serverless function
(`api/contact.ts`) that validates the submission and sends it via
[Resend](https://resend.com)'s HTTP API. To make it actually deliver email:

1. Create a free Resend account and grab an API key.
2. In your Vercel project → Settings → Environment Variables, set:
   - `RESEND_API_KEY` — your Resend key
   - `CONTACT_TO_EMAIL` — the inbox that should receive submissions
   - `CONTACT_FROM_EMAIL` — optional; a sender address on a domain you've verified with Resend.
     Until you verify a domain, leave this unset and Resend's shared sandbox address is used,
     which only delivers to the email you signed up to Resend with (fine for testing).
3. Redeploy. That's it — no code changes needed.

**Without those variables set**, the function returns a clear `500` with an explanatory message,
and the form surfaces that message inline rather than pretending the message sent.

**Testing locally**: the plain `vite` dev server (`npm run dev`) does not run serverless
functions, so submitting the form locally will show a graceful "request failed" error — that's
expected. To actually test the function locally, install the Vercel CLI and run `vercel dev`
instead, with `RESEND_API_KEY` / `CONTACT_TO_EMAIL` set in `.env.local`.

**Using a different backend instead**: set `VITE_CONTACT_ENDPOINT` (client-exposed) to point the
form at a different service entirely (Formspree, Getform, your own API) instead of the bundled
function — the form always sends the same JSON shape: `{ name, email, subject, message }`.

## Build & preview

```bash
npm run build     # type-checks then builds to dist/
npm run preview   # serves the production build locally
```

## Deployment (Vercel)

This repo includes a `vercel.json` with SPA rewrites (explicitly excluding `/api/*` so the
contact form function keeps working), plus basic security headers. Push to a Git repository,
import it in Vercel, and it will build with zero extra configuration beyond the environment
variables in [Contact form backend](#contact-form-backend).

## Folder structure

```
api/
└── contact.ts          # Vercel serverless function — validates + emails contact submissions
src/
├── components/
│   ├── layout/          # Navbar, MobileMenu, Footer, ScrollProgress, BackToTop
│   ├── sections/         # Hero, About, Skills, Projects, Experience, Services, Github, Contact
│   └── ui/               # Button, Badge, Modal, Toast, SectionHeading, TechIcon, BrandIcon
├── data/                  # All editable content — projects, skills, experience, education, etc.
├── hooks/                 # useActiveSection (navbar scroll-spy)
├── lib/                   # cn(), copyToClipboard()
├── pages/                 # Home, NotFound
public/
├── projects/              # Project cover images (SVG placeholders — see Customization)
├── og-image.svg, favicon.svg, robots.txt, sitemap.xml
```

## Customization

**Everything editorial lives in `src/data/`.** To update the site's content, you generally never
need to touch a component file:

- `src/data/projects.ts` — add, remove or reorder projects. `liveUrl` / `githubUrl` left empty
  simply hide that button rather than showing a dead link.
- `src/data/skills.ts` — the tech stack grid. Icons come from `src/data/brandIconPaths.ts`
  (see below); omit `iconKey` for a stack without a published mark and a monogram fallback
  renders automatically.
- `src/data/experience.ts` / `education.ts` — timeline and education entries. Leave `period`
  empty rather than guessing a date; the UI renders a clearly-marked "add dates" placeholder.
- `src/data/services.ts`, `src/data/socials.ts` — services grid and social links / resume path.

### Known placeholders to replace before shipping

- `public/resume.pdf` — does not exist yet. Add your real resume at this exact path (the
  Download Resume buttons already link to `/resume.pdf`).
- `src/data/socials.ts` — the LinkedIn URL and email address are placeholders; confirm/replace them.
- Several `liveUrl` / `githubUrl` fields in `src/data/projects.ts` are intentionally empty until
  those projects have a public, verifiable link.
- `public/og-image.svg` — a generated placeholder. For best compatibility across social platforms,
  export a 1200×630 PNG version and update the `og:image` / `twitter:image` tags in `index.html`.
- `index.html` canonical/OG URLs currently point to `https://rohitkumarchaurasiya.dev/` — update to
  your real deployed domain.
- Experience/education `period` fields are intentionally blank — fill in real dates.

### Adding a brand icon

Icons are extracted once from the `simple-icons` npm package into
`src/data/brandIconPaths.ts` to keep the bundle small (importing the full package added ~5.5MB
to the build). To add another technology's icon:

```bash
npm install simple-icons --no-save
node -e "
const si = require('simple-icons');
console.log(si.siYourIconKey.path);
"
```

Copy the printed path into `brandIconPaths.ts` under a new slug, then reference that slug from
`src/data/skills.ts`.

## Accessibility & performance notes

- The mobile menu and case-study modal both trap focus and close on `Escape`.
- All animations respect `prefers-reduced-motion`.
- The GitHub API is unauthenticated (60 requests/hour per IP) — fine for typical portfolio
  traffic. For higher traffic, proxy the request through a serverless function with a token.

## License

Personal portfolio — content and case-study text describe real projects and should not be reused
verbatim. Code structure is free to reference for your own portfolio.



