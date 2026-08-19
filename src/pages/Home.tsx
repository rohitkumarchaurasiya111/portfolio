import { Hero } from '@/components/sections/Hero'
import { Stats } from '@/components/sections/Stats'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { GithubSection } from '@/components/sections/GithubSection'
import { Contact } from '@/components/sections/Contact'

export function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <GithubSection />
      <Contact />
    </main>
  )
}
