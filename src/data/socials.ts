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
    href: 'https://www.linkedin.com/in/rohit-kumar-chaurasiya-0862b1272/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:rohitkumarchaurasiya111@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Phone',
    href: 'tel:+918521425825',
    icon: 'phone',
  },
]

export const resumeUrl = '/resume.pdf'
