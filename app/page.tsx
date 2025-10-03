import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:flex lg:gap-12">
          <Hero />
          <div className="lg:flex-1 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      </main>
    </div>
  )
}
