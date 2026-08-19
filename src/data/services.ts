import type { LucideIcon } from 'lucide-react'
import { Layers, Globe, Plug, Workflow, FlaskConical, Container } from 'lucide-react'

export interface Service {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Full-Stack Applications',
    description: 'Modern React frontend paired with scalable, well-modeled Spring Boot backend systems.',
    icon: Layers,
  },
  {
    title: 'Web Applications',
    description: 'Responsive, fast and production-ready websites built to last.',
    icon: Globe,
  },
  {
    title: 'REST APIs & Backend Systems',
    description: 'Secure, maintainable backend architecture with Spring Boot, Hibernate and JPA.',
    icon: Plug,
  },
  {
    title: 'Automation & Integration',
    description: 'Workflow and system automation to cut manual effort and turnaround time.',
    icon: Workflow,
  },
  {
    title: 'Testing & QA',
    description: 'Unit and browser test coverage with JUnit and Selenium to keep releases reliable.',
    icon: FlaskConical,
  },
  {
    title: 'CI/CD & Containerization',
    description: 'Build and deployment pipelines with Jenkins and Docker.',
    icon: Container,
  },
]
