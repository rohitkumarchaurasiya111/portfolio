export interface SocialLink {
  label: string
  href: string
  icon: 'github' | 'linkedin' | 'mail' | 'phone'
}

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/rohitkumarchaurasiya111',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rohitkumarchaurasiya',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:rohitkumarchaurasiya111@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    href: 'tel:+9779809150152',
    icon: 'phone',
  },
]

export const resumeUrl = '/resume.pdf'
