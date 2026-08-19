export interface EducationEntry {
  institution: string
  credential: string
  detail: string
  period: string
}

export const education: EducationEntry[] = [
  {
    institution: 'Indian Institute of Technology Madras (IIT Madras) — Chennai, India',
    credential: 'M.Tech, Computer Science & Engineering',
    detail: 'Currently pursuing',
    period: '2026 – Present',
  },
  {
    institution: 'Kalinga Institute of Industrial Technology (KIIT) — Bhubaneswar, India',
    credential: 'B.Tech, Computer Science & Engineering',
    detail: 'CGPA: 9.75 / 10',
    period: '2022 – 2026',
  },
]