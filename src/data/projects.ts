export type ProjectCategory = 'Full Stack' | 'Web' | 'Mobile' | 'Enterprise' | 'Other'

export interface CaseStudy {
  problem: string
  solution: string
  architecture: string
  /** Ordered top-to-bottom flow steps rendered as a simple architecture diagram. */
  flow: string[]
  challenges: string
  results: string
  lessonsLearned: string
}

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  description: string
  /** Path under /public, or an external URL. Falls back to a generated cover if omitted. */
  image: string
  technologies: string[]
  features: string[]
  /** Leave empty until a public URL exists — the UI hides the button rather than faking a link. */
  liveUrl: string
  githubUrl: string
  featured: boolean
  status: 'In development' | 'Shipped'
  caseStudy: CaseStudy
}

// Edit this file to add, remove or reorder projects — the UI reads directly from this array.
// Do not add metrics, user counts or testimonials that haven't actually been verified.
export const projects: Project[] = [
  {
    slug: 'noteslink',
    title: 'NotesLink',
    category: 'Full Stack',
    description:
      'A full-stack academic resource platform that centralizes hundreds of study notes and past exam papers into a single searchable interface, cutting down the time students spend hunting for resources.',
    image: '/projects/noteslink-cover.svg',
    technologies: ['Java', 'Spring Boot', 'React', 'Tailwind CSS', 'MySQL'],
    features: [
      'Searchable, filterable library of notes and past papers organized by course and semester',
      'Responsive React + Tailwind CSS frontend backed by a Spring Boot REST API',
      'MySQL-backed content store supporting 1,000+ monthly uploads and user interactions',
      'Optimized search and filtering for faster content access across 5,000+ active users',
    ],
    liveUrl: '',
    githubUrl: '',
    featured: true,
    status: 'Shipped',
    caseStudy: {
      problem:
        'Study notes and past exam papers were scattered across group chats, drives and personal folders, with no single searchable place for students to find what they needed before exams.',
      solution:
        'A full-stack academic resource platform that centralizes notes and past papers into one searchable, filterable interface, so students can find the right resource by course and topic instead of scrolling through chat history.',
      architecture:
        'A responsive React + Tailwind CSS frontend talks to a Spring Boot REST API, which persists notes, papers and user activity in a MySQL database.',
      flow: ['React + Tailwind Frontend', 'Spring Boot REST API', 'MySQL'],
      challenges:
        'Keeping search and filtering fast and relevant as the library grew across hundreds of notes and past papers spanning multiple courses and semesters was the main technical focus, alongside handling a steady stream of monthly uploads without the interface feeling cluttered.',
      results:
        'The platform now supports 1,000+ monthly uploads and interactions from 5,000+ active users, with optimized search and filtering making content noticeably faster to find.',
      lessonsLearned:
        'A focused, well-indexed search experience matters more to users than a large feature set — getting students to the right note in a few clicks was worth more than any amount of extra functionality.',
    },
  },
  {
    slug: 'kiit-mun',
    title: 'KIIT MUN',
    category: 'Web',
    description:
      'The backend for a centralized Model United Nations event platform, delivering real-time updates across multiple committees and sessions, with QR-code attendance tracking for hundreds of attendees.',
    image: '/projects/kiitmun-cover.svg',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    features: [
      'Real-time updates across multiple committees and sessions during a live multi-day event',
      'QR code–based attendance tracking to replace manual check-in sheets',
      'Secure backend APIs built with Java Spring Boot and MySQL',
    ],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    status: 'Shipped',
    caseStudy: {
      problem:
        'Manual, paper-based check-in for a multi-committee Model United Nations conference was slow and error-prone, and organizers had no live view of attendance or session status across committees.',
      solution:
        'Engineered the backend for a centralized event platform that tracks attendance via QR codes and pushes real-time status updates across committees and sessions.',
      architecture:
        'A Java Spring Boot backend exposes secure REST APIs for check-in, committee and session data, backed by a MySQL database, consumed by the event-day client used at check-in desks.',
      flow: ['Event Client / Check-in Desk', 'Spring Boot REST API', 'MySQL'],
      challenges:
        'Attendance scanning needed to hold up under real event-day load — hundreds of attendees checking in across overlapping committee sessions — without slow lookups or duplicate check-ins.',
      results:
        'QR-based check-in reduced manual attendance time and errors across the event, with organizers able to see real-time updates across committees and sessions instead of relying on paper logs.',
      lessonsLearned:
        'Designing backend APIs around the actual physical flow of an event — queues, desks, overlapping sessions — matters as much as the data model itself; a technically correct API can still fail on the day if it does not match how people actually move through the event.',
    },
  },
]

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]
export const secondaryProjects = projects.filter((p) => p.slug !== featuredProject.slug)
