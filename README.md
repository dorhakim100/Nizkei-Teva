## Nizkei Teva – React + TypeScript + Vite

A responsive, bilingual (HE/EN) website built with React, TypeScript, Redux, SCSS, Vite, and MUI. The project emphasizes a pixel‑perfect implementation against Figma designs, robust component composition, and JSON‑driven content.

### Related Links:
- 🔗 [Live Site](https://nizkei-teva.onrender.com/)

### Tech stack

- **Build**: Vite + TypeScript
- **UI**: React + SCSS Modules (global style architecture) + MUI (icons, Divider, Accordion)
- **State**: Redux
- **i18n**: Custom via `prefs.language` with JSON content
- **Carousel**: Swiper

### Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Build and preview:
   ```bash
   npm run build
   npm run preview
   ```

### Project structure

Key directories only:

- `src/assets/styles` – global SCSS setup (`setup`, `basics`, `main.scss`)
- `src/assets/jsons` – content JSON (e.g., `home`, `header`, `footer`)
- `src/components` – shared components
  - `AppHeader`, `AppFooter` (grid + MUI), `FadeCarousel` (Swiper), `News`, `NewsBanner`, `CustomButton`, `PlayButton`, etc.
- `src/pages` – feature pages (e.g., `Home`)
- `src/store` – Redux store
- `src/types` – shared TypeScript types (e.g., `NewsItem`, `Languages`)

### Styling & design system

- Global variables and mixins live in `src/assets/styles/setup`.
- Utility classes in `src/assets/styles/basics` (e.g., `underline-animation`, `pointer`, helpers).
- Each component has a colocated `styles/*.scss` file imported via `main.scss`.
- Respect the project’s directionality: components add the language class (`he`/`en`) at the root to enable RTL/LTR adjustments in CSS when needed.

## Pixel‑perfect workflow

This project aims to reproduce Figma comps exactly while staying maintainable.

1. Establish baseline

   - Set the correct page `dir` and root language class (`he` or `en`).
   - Confirm global fonts, base font‑size, and color tokens.

2. Grid first

   - Define grid columns/rows and gaps to match Figma; place elements before micro‑tweaks.
   - Use responsive grid breakpoints that mirror Figma’s mobile specs.

3. Typography

   - Map Figma text styles to SCSS utilities or component styles; avoid inline styles.
   - Trim line‑height and letter‑spacing only where specified in Figma.

4. Components & variants

   - Promote repeated UI into components with clear, typed props.
   - Keep parent ownership of state (e.g., `PlayButton` receiving `isPlaying` and `onClick`).

5. Overlays and interaction layers

   - For decorative overlays (`::before`/`::after`) over interactive elements (e.g., Swiper), set `pointer-events: none` to preserve gestures.

### Feature walkthrough

- `AppHeader`

  - Routes are JSON‑driven; language toggles flip direction and labels.

- `FadeCarousel`

  - Swiper with fade and autoplay. Pagination bullets are custom. `PlayButton` toggles autoplay (parent controls state). Text and optional CTA button per slide are localized.

- `News`

  - Renders a list of `NewsCard`s from JSON/types. Multi‑line clamped summaries for most cards; the first card displays full summary (design variant).

- `AppFooter`
  - Grid layout mirrors Figma: logo, CTA + contact/socials, and general links.
  - Desktop: sections separated with MUI `Divider`; links in a grid with `underline-animation`.
  - Mobile: transparent MUI `Accordion` (no border/shadow) for the links section.
  - CTA uses `CustomButton` and respects language arrow direction.

### Internationalization (HE/EN)

- Language lives in Redux `prefs.language` and is used to select fields from JSON and apply direction‑aware styles.
- For links and buttons, prefer language‑specific labels from JSON files.

### Accessibility

- Use semantic tags (`header`, `nav`, `main`, `footer`, `section`, `article`).
- Provide alt text for images and `aria-label`s for icon buttons.
- Maintain sufficient color contrast; underline or animate links on hover/focus via `underline-animation`.

### Scripts

- `dev`: start dev server
- `build`: production build
- `preview`: preview production build

### Deployment

1. `npm run build`
2. Serve the `dist/` directory via your hosting provider or static server.
