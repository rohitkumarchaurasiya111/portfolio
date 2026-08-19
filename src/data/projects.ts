export type ProjectCategory =
  | 'Full Stack'
  | 'Web'
  | 'Mobile'
  | 'Enterprise'
  | 'Other'

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
  liveUrl: string
  githubUrl: string
  featured: boolean
  status: 'In development' | 'Shipped'
  caseStudy: CaseStudy
}

export const projects: Project[] = [
  {
    slug: 'noteslink',
    title: 'NotesLink',
    category: 'Full Stack',
    description:
      'A full-stack academic resource platform that brings study notes and past exam papers into a single searchable platform, serving 5,000+ active users.',
    image: '/projects/NotesLinkFullLogo.png',
    technologies: [
      'Java',
      'Spring Boot',
      'React',
      'Tailwind CSS',
      'MySQL',
      'JWT',
      'OAuth',
    ],
    features: [
      'Searchable and filterable library of notes, past papers and solutions',
      'Responsive React + Tailwind CSS frontend backed by Spring Boot REST APIs',
      'Role-based access and authentication using JWT and Google OAuth',
      'MySQL-backed content platform supporting 1,000+ monthly uploads and interactions',
      'College-specific content organization and access control',
    ],
    liveUrl: 'https://noteslink.in',
    githubUrl: '',
    featured: true,
    status: 'Shipped',
    caseStudy: {
      problem:
        'Academic resources were scattered across group chats, cloud drives and personal folders, making it difficult for students to quickly find relevant notes and previous-year papers.',
      solution:
        'Built a centralized academic resource platform where students can discover, search and filter study materials by subject, semester and resource type.',
      architecture:
        'A React + Tailwind CSS frontend communicates with a Java Spring Boot REST API, which handles authentication, authorization, resource management and business logic before persisting data in MySQL.',
      flow: [
        'React + Tailwind CSS Frontend',
        'Spring Boot REST API',
        'Authentication & Authorization',
        'MySQL Database',
      ],
      challenges:
        'The main challenge was designing a scalable content and search experience that remained easy to navigate as the number of resources, users and uploads grew across different subjects and colleges.',
      results:
        'The platform supports 5,000+ active users and 1,000+ monthly uploads and interactions, providing students with a centralized and faster way to access academic resources.',
      lessonsLearned:
        'Building a real product taught me that good engineering is not only about writing APIs and database queries, but also about understanding how users discover information and designing the entire experience around that workflow.',
    },
  },

  // {
  //   slug: 'vibesync',
  //   title: 'VibeSync',
  //   category: 'Full Stack',
  //   description:
  //     'A real-time communication platform inspired by modern video-conferencing applications, built to explore real-time collaboration and scalable web application architecture.',
  //   image: '/projects/vibesync-cover.svg',
  //   technologies: [
  //     'JavaScript',
  //     'React',
  //     'WebRTC',
  //     'REST APIs',
  //   ],
  //   features: [
  //     'Real-time video communication',
  //     'Interactive meeting experience',
  //     'Real-time participant interaction',
  //     'Responsive web interface',
  //   ],
  //   liveUrl: '',
  //   githubUrl: '',
  //   featured: false,
  //   status: 'In development',
  //   caseStudy: {
  //     problem:
  //       'Modern communication tools require reliable real-time interaction while keeping the user experience simple and responsive across different devices and network conditions.',
  //     solution:
  //       'Built VibeSync as a video-conferencing style application to explore real-time communication, interactive meeting workflows and the engineering challenges behind collaborative web applications.',
  //     architecture:
  //       'The application combines a React-based frontend with real-time communication technologies and backend APIs to coordinate meeting and participant interactions.',
  //     flow: [
  //       'React Frontend',
  //       'Meeting & Communication Layer',
  //       'Backend APIs',
  //     ],
  //     challenges:
  //       'Real-time applications introduce challenges that are different from conventional CRUD applications, particularly around maintaining responsive communication and coordinating participant state.',
  //     results:
  //       'The project provided hands-on experience designing and implementing the core architecture of a real-time communication application.',
  //     lessonsLearned:
  //       'Real-time applications require thinking about state, communication and failure scenarios differently from traditional request-response applications.',
  //   },
  // },

  {
    slug: 'kiit-mun',
    title: 'KIIT MUN',
    category: 'Web',
    description:
      'A centralized event platform for Model United Nations, with QR-based attendance tracking and backend APIs supporting real-time event workflows across committees and sessions.',
    image: '/projects/kiitmun-cover.svg',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'REST APIs',
    ],
    features: [
      'QR code–based attendance tracking',
      'Secure backend APIs for event workflows',
      'Real-time updates across committees and sessions',
      'Centralized participant and event data management',
      'Support for hundreds of delegates and organizers',
    ],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    status: 'Shipped',
    caseStudy: {
      problem:
        'Managing attendance and event information manually during a multi-committee Model United Nations event was time-consuming and prone to errors.',
      solution:
        'Engineered the backend for a centralized event platform that digitized attendance using QR codes and provided real-time event information across committees and sessions.',
      architecture:
        'A Java Spring Boot backend exposes REST APIs for attendance, participant and event workflows, with MySQL used for persistent data storage.',
      flow: [
        'Event Client',
        'Spring Boot REST API',
        'MySQL Database',
      ],
      challenges:
        'The system needed to reliably handle attendance and event operations while multiple committees and sessions were running concurrently.',
      results:
        'The platform reduced manual attendance operations and improved data accuracy while supporting hundreds of delegates and organizers.',
      lessonsLearned:
        'Building software for a live event highlighted the importance of designing backend systems around real-world operational workflows rather than only around database entities.',
    },
  },

  {
    slug: 'sorting-visualizer',
    title: 'Sorting Visualizer',
    category: 'Web',
    description:
      'An interactive web application that visualizes sorting algorithms in real time, making algorithm behavior and performance easier to understand.',
    image: '/projects/sortingvisualizer-cover.png',
    technologies: [
      'JavaScript',
      'HTML',
      'CSS',
    ],
    features: [
      'Real-time visualization of sorting algorithms',
      'Interactive algorithm execution',
      'Visual comparison of sorting behavior',
      'Educational interface for understanding algorithm performance',
    ],
    liveUrl: 'https://sortingvisualizer.noteslink.in/',
    githubUrl: 'https://github.com/rohitkumarchaurasiya111/Sorting_Visualizer',
    featured: false,
    status: 'Shipped',
    caseStudy: {
      problem:
        'Understanding sorting algorithms from code alone can make it difficult to visualize how elements move and how different algorithms behave during execution.',
      solution:
        'Created an interactive visualizer that demonstrates sorting algorithms step by step through real-time animations.',
      architecture:
        'A browser-based frontend implements the sorting algorithms in JavaScript and renders their execution dynamically using HTML and CSS.',
      flow: [
        'User Interaction',
        'JavaScript Sorting Algorithm',
        'Real-time Visualization',
      ],
      challenges:
        'The main challenge was coordinating algorithm execution with visual updates so that each step remained understandable without making the animation feel disconnected from the underlying algorithm.',
      results:
        'The application provides an interactive way to understand sorting algorithms and compare their execution behavior visually.',
      lessonsLearned:
        'Visualization can make algorithmic concepts significantly easier to understand, and designing the interface around the underlying computation is an important part of building educational software.',
    },
  },
]

export const featuredProject =
  projects.find((p) => p.featured) ?? projects[0]

export const secondaryProjects = projects.filter(
  (p) => p.slug !== featuredProject.slug
)