# Portfolio — Ranjit Rajbanshi

React + Vite + Tailwind + Framer Motion portfolio site.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
npm run lint     # eslint
```

## The CV / Resume

The CV is available from **five** places on the site — navbar, hero, about,
contact, footer, plus a floating button that follows you down the page.

```
public/cv/Ranjit_Rajbanshi_cv.pdf   <- the uploaded PDF (the download)
src/data/cvData.js                  <- the text of the on-site CV document
src/data/portfolioData.js           -> personalInfo.cvLink points at the PDF
```

How it works:

| File state | What visitors get |
| --- | --- |
| PDF present in `public/cv/` | buttons download it; the modal also has a **My PDF** tab that embeds it |
| PDF missing | buttons open the on-site CV, which is print-styled (Ctrl/Cmd + P → Save as PDF) |

`src/hooks/useCvDownload.js` probes the PDF once per session with a `HEAD`
request and verifies the `content-type` is `application/pdf`, so a dev server
or SPA-fallback host can never hand visitors an HTML file named `.pdf`.

### Updating the CV text

Everything in the on-site document (summary, highlights, experience bullets,
projects, skills, languages, strengths) lives in `src/data/cvData.js`.
Replace the PDF by overwriting `public/cv/Ranjit_Rajbanshi_cv.pdf` — keep the
file name, or update `personalInfo.cvLink` and `cvMeta.fileName`.

## Animation notes

New / reusable primitives:

- `components/ui/SectionHeading.jsx` — masked word-by-word headings + a rule that
  draws itself in (used by Skills, Projects, Experience, Services, Contact)
- `components/ui/CountUp.jsx` — view-triggered number counters
- `components/ui/CvButton.jsx`, `components/ui/Magnetic.jsx`
- `hooks/useMagnetic.js` — spring magnetic hover
- `components/animations/Marquee.jsx` — seamless two-copy infinite loop
- `components/animations/CursorGlow.jsx` — cursor-following glow (desktop only)
- `components/FloatingActions.jsx` — floating CV + back-to-top rail
- `components/CvModal.jsx` — the CV document (portal, Esc, scroll lock, print)

Every animation respects `prefers-reduced-motion` (via Framer's
`MotionConfig reducedMotion="user"`, `useReducedMotion()` and CSS media query)
and cursor-following effects are disabled on touch devices.
