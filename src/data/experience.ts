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
    period: 'May 2025 – Feb 2026',
    current: false,
    location: 'Hyderabad, India',
    summary:
      'Worked in a fast-paced product environment building internal tooling and automating financial system integrations, using Java, Spring Boot, React and Workato.',
    highlights: [
      'Developed a Tenant Onboarding Portal that streamlined consultant workflows and improved operational efficiency by approximately 80%',
      'Automated financial system connectors for SAP, Sage and NetSuite using Workato, reducing manual effort by approximately 30% and improving performance for the connectors team',
      'Collaborated with cross-functional teams to analyze requirements, resolve high-priority issues and design scalable automation solutions that reduced consultant request turnaround time',
    ],
  },
]
