import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS. Features smooth scrolling, dynamic navigation, and optimized performance.",
    image: "/modern-portfolio-website.png",
    url: "#",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Qualification Finder",
    description:
      "A qualification finder for South African matriculants to explore universities, colleges, courses, and application requirements.",
    image: "/ecommerce-dashboard.png",
    url: "#",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    title: "Gamified Study Group Platform",
    description:
      "A collaborative web application designed to make studying more engaging, social, and motivating. Integrating gamification elements such as XP points, leaderboards, and achievement badges to encourage consistent learning habits. Built-in tools like a Pomodoro timer and flashcards help learners stay focused and reinforce knowledge retention, while group chat functionality fosters peer-to-peer accountability and collaboration.",
    image: "/task-management-app.png",
    url: "#",
    technologies: ["Node.js", "PostgreSql", "React", "Tailwind CSS"],
  },
  
]

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Projects</h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="z-10 sm:col-span-2">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="rounded border-2 border-border transition group-hover:border-primary"
                  />
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        {project.title}
                        <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary">{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <a
            href="#"
            className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
          >
            <span className="border-b border-transparent pb-px transition group-hover:border-primary">
              View Full Project Archive
            </span>
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
