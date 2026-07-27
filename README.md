
# Shubham Portfolio

A modern personal portfolio built with Angular 21, TypeScript, SCSS, Signals, standalone components, and route-based reusable sections.

This portfolio showcases my frontend development experience, technical skills, selected projects, professional background, and contact details.

## Live Sections

- Home
- About
- Skills
- Experience
- Projects
- Contact

The same section components are reused in two ways:

- As part of the Home landing page
- As separate routed pages

Example:

```text
/           → Hero + About + Skills + Experience + Projects + Contact
/about      → About page
/skills     → Skills page
/experience → Experience page
/projects   → Projects page
/contact    → Contact page
````

## Tech Stack

* Angular 21
* TypeScript
* SCSS
* Angular Signals
* Standalone Components
* Angular Router
* OnPush Change Detection
* Native Angular Control Flow
* BEM-based SCSS
* Responsive UI
* GitHub Pages ready

## Features

* Modern Angular 21 project setup
* Standalone components
* Route-based feature structure
* Reusable portfolio sections
* Fixed header and footer layout
* Internal scroll container
* Smooth one-page navigation on Home
* Active section highlighting
* Scroll-to-top button
* Scroll reveal animations
* SEO meta tags
* Open Graph and Twitter preview image
* Custom favicon and app icons
* Responsive layout for mobile, tablet, and desktop
* Clean SCSS architecture with global design tokens

## Folder Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── constants/
│   │   └── directives/
│   ├── features/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── home/
│   │   ├── projects/
│   │   └── skills/
│   ├── layout/
│   │   ├── footer/
│   │   ├── header/
│   │   └── shell/
│   ├── models/
│   ├── services/
│   └── shared/
├── styles/
│   ├── abstracts/
│   ├── animations/
│   ├── base/
│   ├── components/
│   ├── overrides/
│   └── vendors/
└── styles.scss

public/
├── assets/
│   ├── documents/
│   └── images/
└── favicon.ico
```

## Main Pages

### Home

The Home page works as a complete landing page and reuses all major sections:

```text
Hero → About → Skills → Experience → Projects → Contact
```

### About

Highlights professional summary, frontend focus, project exposure, and working approach.

### Skills

Shows frontend core skills, Angular ecosystem, UI development, API handling, tools, and current learning areas.

### Experience

Displays professional experience, responsibilities, technologies, and enterprise frontend exposure.

### Projects

Showcases selected work including:

* Studioforce
* AI-Assisted SW
* MBD - Model-Based Design
* Angular Portfolio

### Contact

Includes email, LinkedIn, GitHub, location, and availability details.

## Local Setup

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npx ng serve
```

Open:

```text
http://localhost:4200
```

Build production version:

```bash
npx ng build
```

## Assets

Resume file should be placed here:

```text
public/assets/documents/shubham-deshmukh-resume.pdf
```

SEO preview and icons should be placed here:

```text
public/favicon.ico
public/assets/images/portfolio-preview.png
public/assets/images/favicon-32x32.png
public/assets/images/icon-192.png
public/assets/images/icon-512.png
public/assets/images/apple-touch-icon.png
```

## SEO

The project includes:

* Meta description
* Keywords
* Author meta tag
* Open Graph tags
* Twitter card tags
* Custom favicon
* Portfolio preview image

## Development Workflow

Feature work is handled using separate Git branches.

Example:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/projects-section
```

After implementation:

```bash
npx ng build
git add .
git commit -m "feat: add projects page and reuse on home"
git push
```

## Author

**Shubham Deshmukh**
Frontend Developer | Angular | TypeScript | JavaScript

* GitHub: [https://github.com/shubhamdsk](https://github.com/shubhamdsk)
* LinkedIn: [https://www.linkedin.com/in/shubham-deshmukh1720](https://www.linkedin.com/in/shubham-deshmukh1720)

## License

This project is created for personal portfolio use.
