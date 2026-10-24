# Chandramshu Chelpuri — The Series

A cinematic, streaming-inspired personal portfolio showcasing **Chandramshu Chelpuri**, a Computer Science and Engineering student at RGUKT Basar. Designed as an interactive, series-style experience, the website brings together my academic journey, technical skills, featured projects, hackathon achievements, and professional links in one place.

The experience combines a bold visual identity with interactive storytelling to present my journey, work, and growth as a developer.

> **Note:** This is an independent personal portfolio inspired by streaming-platform interfaces. It is not affiliated with Netflix or any other streaming service and does not use their logos.

## Features

- **Cinematic experience** — A streaming-inspired interface with an immersive, series-style layout.
- **Personal introduction** — An overview of my background, interests, and technical journey.
- **Education** — Academic history and qualifications.
- **Project showcase** — Selected projects, descriptions, and technologies used.
- **Achievements** — Hackathon results and other notable accomplishments.
- **Technical skills** — Technologies and tools organized into categories.
- **Resume and contact links** — Convenient access to my résumé and professional profiles.
- **Responsive design** — An experience designed for different screen sizes.

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 11
- **Smooth scrolling:** Lenis

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) 18 or later and npm.

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone <your-repository-url>
cd <project-directory>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal. Vite commonly uses `http://localhost:5173`.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

The generated static website is available in the `dist/` directory.

## Deployment

The production build can be deployed to platforms such as [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or other static hosting providers.

Typical build settings:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

For GitHub Pages deployments under a repository subpath, configure the appropriate `base` value in `vite.config.ts` before building.

## Customizing Content

Most portfolio content is centralized in [`src/data/portfolio.ts`](src/data/portfolio.ts).

You can update the following sections:

- `profile` — Name, introduction, contact details, social links, and portrait paths.
- `education` — Academic background and qualifications.
- `projects` — Project descriptions and technologies.
- `achievements` — Hackathons and other highlights.
- `skillCategories` — Technical skills displayed on the website.
- `seasons`, `topPicks`, and `introSlides` — Journey, featured content, and introductory storytelling.

After making changes, run the development server to review them and use `npm run build` to verify the production build.

## Assets

The `public/assets/` directory contains the portfolio's static assets.

- **Résumé:** `public/assets/Chandramshu_Chelpuri_Resume.pdf`
- **Portraits:** Portrait images and generated variants used throughout the interface.
- **Social preview:** `public/assets/og-image.jpg`

To update your portrait, replace the relevant source images and regenerate the portrait variants using `npm run images`, if that script is available in the project. Alternatively, replace the generated `public/assets/portrait-*.webp` files directly. Ensure that the image paths and alternative text in `src/data/portfolio.ts` match the updated assets.

## License and Attribution

This project is a personal portfolio. Review the original template's license and attribution requirements before redistributing or reusing its code and assets.

---

**Maintained by Chandramshu Chelpuri**

- [GitHub](https://github.com/chelpurichandramshu99-cpu)
- [LinkedIn](https://www.linkedin.com/in/chandramshu-chelpuri-740a2b426)
