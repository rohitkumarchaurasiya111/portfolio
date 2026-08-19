export interface ExperienceEntry {
  role: string
  org: string
  /** Leave empty rather than guessing — the UI renders an "add dates" placeholder instead of a fake range. */
  period: string
  current: boolean
  location: string
  summary: string
  highlights: string[]
}

// Edit freely. Do not fill `period` with a guessed date — leave it empty until confirmed.
export const experience: ExperienceEntry[] = [
  {
    role: 'Product Development Intern',
    org: 'HighRadius',
    period: 'May 2025 – June 2026',
    current: false,
    location: 'Hyderabad, India',
    summary:
      'Worked in a product development environment building enterprise tooling, Java Spring Boot integrations and workflow automation using Java, Spring Boot, React and Workato.',
    highlights: [
      'Developed a Tenant Onboarding Portal that automated consultant onboarding workflows, reducing manual effort by approximately 80% and improving operational efficiency',
      'Engineered and optimized Workato integrations for SAP, Sage, Workday, QuickBooks and NetSuite, reducing connector task consumption by 90% and manual effort by 30%',
      'Designed and implemented inbound and outbound integration metrics for Java Spring Boot-based connectors, enabling real-time monitoring and faster identification of performance bottlenecks',
      'Collaborated with cross-functional teams, consultants and enterprise clients to debug production issues, deliver critical hotfixes and build scalable integration solutions',
    ],
  },
]
