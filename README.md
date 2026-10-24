# Chandramshu Chelpuri — The Series

A cinematic, streaming-inspired personal portfolio showcasing **Chandramshu Chelpuri**, a Computer Science and Engineering student at RGUKT Basar. Designed as an interactive, series-style experience, the website brings together my academic journey, technical skills, featured projects, hackathon achievements, and professional links in one place.

The experience combines a bold visual identity with interactive storytelling to present my journey, work, and growth as a developer.

**Live Website:** [chandramshu-portfolio.vercel.app](https://chandramshu-portfolio.vercel.app/)

> **Note:** This is an independent personal portfolio inspired by streaming-platform interfaces. It is not affiliated with Netflix or any other streaming service and does not use their logos.

## Features

- **Cinematic Experience** — A streaming-inspired interface with an immersive, series-style layout.
- **Personal Introduction** — An overview of my background, interests, and technical journey.
- **Education** — Academic history and qualifications.
- **Project Showcase** — Selected projects, descriptions, and technologies used.
- **Achievements** — Hackathons and other notable accomplishments.
- **Technical Skills** — Technologies and tools organized into categories.
- **Resume and Contact Links** — Convenient access to my résumé and professional profiles.
- **Responsive Design** — A layout designed for different screen sizes.
- **Interactive Animations** — Smooth transitions and engaging visual effects.

## Tech Stack

- **Frontend:** React 18, TypeScript
- **Build Tool:** Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 11
- **Smooth Scrolling:** Lenis

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) version 18 or later, along with npm.

### Installation

Clone the repository and navigate to the project directory:

```bash
git clone https://github.com/chelpurichandramshu99-cpu/chandramshu-portfolio.git
cd chandramshu-portfolio
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal. Vite commonly uses `http://localhost:5173`.

> If your GitHub repository has a different name or URL, update the clone command and directory name accordingly.

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

The website is deployed on [Vercel](https://vercel.com/).

**Live Portfolio:** [https://chandramshu-portfolio.vercel.app/](https://chandramshu-portfolio.vercel.app/)

The project can also be deployed using [Netlify](https://www.netlify.com/) or another static hosting provider.

Typical build settings:

- **Install Command:** `npm install`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

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
- **Social Preview:** `public/assets/og-image.jpg`

To update your portrait, replace the relevant source images and regenerate the portrait variants using `npm run images`, if that script is available in the project. Alternatively, replace the generated `public/assets/portrait-*.webp` files directly. Ensure that the image paths and alternative text in `src/data/portfolio.ts` match the updated assets.

## License and Attribution

This is a personal portfolio project. Review the original template's license and attribution requirements before redistributing or reusing its code and assets.

## Connect With Me

- **GitHub:** [chelpurichandramshu99-cpu](https://github.com/chelpurichandramshu99-cpu)
- **LinkedIn:** [Chandramshu Chelpuri](https://www.linkedin.com/in/chandramshu-chelpuri-740a2b426)
- **Portfolio:** [chandramshu-portfolio.vercel.app](https://chandramshu-portfolio.vercel.app/)

---

**Maintained by Chandramshu Chelpuri**
