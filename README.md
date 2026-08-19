# Rohit Kumar Chaurasiya — Portfolio

A production-focused personal portfolio of **Rohit Kumar Chaurasiya**, a first-year
**M.Tech Computer Science and Engineering student at IIT Madras** with hands-on
experience in full-stack development, backend engineering, API development,
automation, and database-driven applications.

I enjoy building reliable and scalable software that solves real-world problems —
from enterprise automation and financial system integrations during my internship
at **HighRadius** to **NotesLink**, an academic resource platform serving 5,000+
active users.

## About Me

I am currently pursuing my M.Tech in Computer Science and Engineering at
**Indian Institute of Technology Madras (IIT Madras)**.

Before IIT Madras, I completed my B.Tech in Computer Science and Engineering from
**Kalinga Institute of Industrial Technology (KIIT)** with a **9.75/10 CGPA**.

My experience includes:

- Product development and enterprise software engineering at HighRadius
- Full-stack web application development
- Java and Spring Boot backend development
- RESTful API design and development
- React and Tailwind CSS frontend development
- Relational database design and optimization with MySQL
- Enterprise system integrations and workflow automation using Workato
- Authentication and authorization using JWT and OAuth
- Performance optimization and production debugging
- Building and maintaining applications used by real users

## Portfolio

This portfolio is built to showcase my work, technical experience, projects,
and engineering approach.

### Features

- **Data-driven content** — Projects, skills, experience, education and services
  are maintained separately from UI components.
- **Project case studies** — Each major project presents the problem, solution,
  architecture, challenges, results, and lessons learned.
- **Responsive project showcase** — Filterable project grid with detailed
  case-study views.
- **GitHub integration** — Public GitHub repositories can be fetched
  client-side without requiring a GitHub token.
- **Contact form** — Contact submissions are handled through a backend API
  and delivered through Resend.
- **Responsive design** — Optimized for mobile, tablet, and desktop screens.
- **Accessibility** — Keyboard navigation, semantic HTML, focus management,
  ARIA labels, and reduced-motion support.
- **SEO-ready** — OpenGraph metadata, Twitter cards, Person JSON-LD,
  sitemap, and robots.txt.
- **Performance-focused** — Lightweight frontend architecture with
  optimized dependencies and locally extracted technology icons.

## Tech Stack

**Frontend**

React 19 · TypeScript · Vite · Tailwind CSS · Framer Motion ·
React Router · Lucide Icons

**Backend**

Java · Spring Boot · REST APIs · Spring Security · JPA · Hibernate

**Database**

MySQL · MongoDB

**Tools**

Git · GitHub · Docker · Jenkins · Maven · JUnit · Selenium · Workato

**Email**

Resend

## Project Structure

```text
api/
└── contact.ts

src/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── services.ts
│   └── socials.ts
├── hooks/
├── lib/
└── pages/

public/
├── projects/
├── og-image.svg
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── resume.pdf
```

## Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:
```bash
npm run dev
```
The application will be available at:
```bash

http://localhost:5173
```

## Environment Variables

Configure the required variables:
```bash
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
VITE_CONTACT_ENDPOINT=
```

Never commit `.env`.

## Build

Create a production build:
```bash
npm run build
```
Preview the production build:

```bash
npm run preview
```

## Customization

Most portfolio content is maintained inside:
```bash
src/data/
```


## Before Deployment

- [ ] Add the final `public/resume.pdf`
- [ ] Verify LinkedIn URL
- [ ] Verify GitHub URL
- [ ] Verify email address
- [ ] Verify all project live URLs
- [ ] Add GitHub repository URLs where publicly available
- [ ] Replace the placeholder favicon
- [ ] Replace the placeholder OpenGraph image
- [ ] Update the canonical URL in `index.html`
- [ ] Configure production environment variables
- [ ] Test the contact form
- [ ] Test the website on mobile and desktop
- [ ] Run `npm run build` successfully

## License

Personal portfolio.

The portfolio content, project descriptions, case studies, and personal information
belong to Rohit Kumar Chaurasiya and should not be reused verbatim.