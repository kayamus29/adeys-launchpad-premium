# Adeyemi Anibi — Portfolio Build Plan

Single-page premium portfolio built on TanStack Start, using the chosen **Executive Gold & Charcoal** direction (deep charcoal `#0A0A0B`, surface `#141416`, muted gold accent `#C5A059`, Inter Tight display + Inter body).

## Design tokens

Add to `src/styles.css`:
- `--background: #0A0A0B`, `--foreground: #E5E7EB`, `--muted-foreground: #9CA3AF`
- `--surface: #141416`, `--accent: #C5A059` (accent-foreground = background)
- Border `rgba(255,255,255,0.05)`, ring `rgba(197,160,89,0.3)`
- Fonts: `Inter Tight` (display) + `Inter` (body), loaded via `<link>` in `__root.tsx`
- Force dark base globally (portfolio is dark-first)

## Head metadata (`__root.tsx`)

Title: "Adeyemi Anibi | Sales, Retail and Customer Experience Professional"
Description as specified. Plus og:title/og:description, twitter card, Person JSON-LD (name, jobTitle, address London GB, email, sameAs LinkedIn).

## Route

Single-page site — everything lives on `src/routes/index.tsx`, composed from section components. Navigation uses in-page hash anchors (this is genuinely one-page marketing content, exception noted in guidance).

## Component structure (`src/components/portfolio/`)

- `Nav.tsx` — sticky, `AA` monogram + name, links (Home, Profile, Experience, Impact, Capabilities, Leadership, Education, Contact), Download CV + Contact Adeyemi buttons, mobile hamburger drawer
- `Hero.tsx` — accent chip, headline with gold accent word, supporting paragraph, London line, primary/secondary CTAs, availability grid, abstract monogram visual panel (layered surface + subtle gold gradient + oversized `ANIBI` wordmark, no face)
- `Profile.tsx` — 3-column layout with heading + intro paragraph + three principles
- `Stats.tsx` — 10 figures presented as a responsive grid strip with `IntersectionObserver`-triggered count-up animation, honouring `prefers-reduced-motion`; footnote about performance figures
- `Experience.tsx` — three role cards (Towa, Justrite, Bureau of Transport), each with header (title/company/dates), bullet list, and gold-bordered "Key contribution" callout
- `Capabilities.tsx` — six cards (Sales & commercial awareness, Customer experience, Retail operations, Communication, Team & leadership support, Technology) — chip-style skill tags, no percentage bars
- `Leadership.tsx` — intro + 4 numbered pillars in a grid + restrained italic quote
- `ProblemSolving.tsx` — 4-step process (Listen / Identify / Resolve / Follow through) with 01–04 gold numerals
- `Education.tsx` — two education cards with study areas and description
- `Certifications.tsx` — horizontal row of 3 certification cards + supporting statement
- `WorkingStyle.tsx` — 6 trait chips + paragraph
- `Availability.tsx` — Languages + Availability two-column list, includes the "Open to long-term opportunities…" line
- `CareerDirection.tsx` — headline + two paragraphs + visual progression path (Customer-Facing Excellence → Senior Responsibility → Team Leadership → Management) with gold arrows
- `EmployerValue.tsx` — headline + 5 bullet points + closing statement
- `Contact.tsx` — gold-background section with contact details (email, LinkedIn — phone hidden), buttons (Email, LinkedIn, Download CV), validated form (Name, Organisation, Email, Opportunity, Message) using `react-hook-form` + `zod`, success toast + inline success message
- `Footer.tsx` — name + role tagline, LinkedIn/Email/Download CV/Back to top, dynamic year

## Interactions

- Smooth scroll via `scroll-behavior: smooth` on `html`
- Fade/translate-up on scroll via `IntersectionObserver` (small reusable `useReveal` hook) — disabled under `prefers-reduced-motion`
- Sticky nav with active-section highlight (IntersectionObserver on section IDs)
- Hover lifts on cards and buttons

## Assets

- Download CV button links to `/cv.pdf` placeholder in `public/` (an empty placeholder file with a note; user can drop their real CV in later)
- No AI-generated faces or stock photos — hero visual is a pure CSS composition (dark panel, gold gradient wash, oversized wordmark, subtle grid lines)
- OG image omitted (host will inject)

## Content rules

- All copy uses the exact strings provided in the brief (UK English, no superlatives, no invented titles)
- Contribution boxes verbatim; do not describe him as Assistant Manager or Store Manager
- Master's programme wording kept as specified; do not display unverified degree titles

## Accessibility

- Semantic `<nav>`, `<main>`, `<section>` with IDs, single `<h1>`, `<h2>` per section
- Visible focus rings on all interactive elements (gold outline)
- Form fields with labels + aria-describedby for errors
- Reduced-motion path for all animations
- Contrast: warm off-white on charcoal passes AAA; gold accent used for emphasis, never as sole information carrier

## Technical notes

- Contact form submits client-side only (validates, shows success message) — no backend wired unless later requested
- No new npm packages needed beyond `react-hook-form` + `@hookform/resolvers` + `zod` (add via `bun add`); `sonner` already present in shadcn stack if wired, else use inline success state
- Everything typed, no `any`, strict TS clean
