export type SkillCategory = 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools'

export interface Skill {
  name: string
  category: SkillCategory
  /** Slug into brandIconPaths (src/data/brandIconPaths.ts). Omit for stacks without a mark. */
  iconKey?: string
  /** Short, factual description of the technology itself — not a personal claim. */
  blurb: string
}

export const skills: Skill[] = [
  // Programming languages
  { name: 'Java', category: 'Programming', iconKey: 'openjdk', blurb: 'General-purpose OOP language' },
  { name: 'Python', category: 'Programming', iconKey: 'python', blurb: 'General-purpose scripting' },
  { name: 'JavaScript', category: 'Programming', iconKey: 'javascript', blurb: 'Core web language' },
  { name: 'SQL', category: 'Programming', blurb: 'Query language' },

  // Frontend
  { name: 'React', category: 'Frontend', iconKey: 'react', blurb: 'Component-based UI library' },
  { name: 'HTML', category: 'Frontend', iconKey: 'html5', blurb: 'Document markup' },
  { name: 'CSS', category: 'Frontend', iconKey: 'css', blurb: 'Layout & styling' },
  { name: 'Tailwind CSS', category: 'Frontend', iconKey: 'tailwindcss', blurb: 'Utility-first styling' },

  // Backend
  { name: 'Spring Boot', category: 'Backend', iconKey: 'spring', blurb: 'Java application framework' },
  { name: 'Spring MVC', category: 'Backend', iconKey: 'spring', blurb: 'Web-layer framework for Spring' },
  { name: 'Spring Security', category: 'Backend', iconKey: 'spring', blurb: 'Auth & access-control framework' },
  { name: 'Hibernate', category: 'Backend', iconKey: 'hibernate', blurb: 'Java ORM framework' },
  { name: 'JPA', category: 'Backend', blurb: 'Java persistence specification' },
  { name: 'RESTful APIs', category: 'Backend', blurb: 'HTTP API design' },

  // Database
  { name: 'MySQL', category: 'Database', iconKey: 'mysql', blurb: 'Relational database' },
  { name: 'MongoDB', category: 'Database', iconKey: 'mongodb', blurb: 'Document database' },

  // Tools
  { name: 'Git', category: 'Tools', iconKey: 'git', blurb: 'Version control' },
  { name: 'GitHub', category: 'Tools', iconKey: 'github', blurb: 'Code hosting' },
  { name: 'Docker', category: 'Tools', iconKey: 'docker', blurb: 'Containerization' },
  { name: 'Jenkins', category: 'Tools', iconKey: 'jenkins', blurb: 'CI/CD automation' },
  { name: 'Maven', category: 'Tools', iconKey: 'apachemaven', blurb: 'Java build & dependency tool' },
  { name: 'JUnit', category: 'Tools', iconKey: 'junit5', blurb: 'Java testing framework' },
  { name: 'Selenium', category: 'Tools', iconKey: 'selenium', blurb: 'Browser test automation' },
  { name: 'Workato', category: 'Tools', blurb: 'Integration & workflow automation' },
]

export const skillCategories: SkillCategory[] = [
  'Programming',
  'Frontend',
  'Backend',
  'Database',
  'Tools',
]
