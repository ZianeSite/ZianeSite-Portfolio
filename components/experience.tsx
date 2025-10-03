import { ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2025 — Present",
    title: "Java Back-End, Trainee",
    company: "Afrika Tikkun",
    url: "#",
    description:
      "Gained hands-on experience in Java programming (OOP, data structures, algorithms, exception handling). Developed and tested console and GUI-based applications using Java. Practiced debugging, testing, and documentation to ensure code quality",
    technologies: ["Java", "NetBeans"],
  },

  {
    period: "2022",
    title: "Security Summit Hackathon",
    company: "ITWeb and Geekulcha ",
    url: "#",
    description:
      "Our team “Agent Hackers” became the overall winning team for the ITWeb hackathon event themed “Rise of the Hackathons”. We focused on creating digital signatures to protect sensitive data in the SMSs sent by the Department of Health to citizens who got vaccinated. It also won internship opportunities with Snode Technologies.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Experience</h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {experience.period}
                </div>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <a
                      href={experience.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded lg:-inset-x-6 lg:block" />
                      <span>
                        {experience.title} ·{" "}
                        <span className="inline-block">
                          {experience.company}
                          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1" />
                        </span>
                      </span>
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                  {experience.technologies && experience.technologies.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <li key={tech}>
                          <Badge variant="secondary">{tech}</Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center font-medium leading-tight text-foreground hover:text-primary"
          >
            
            
          </a>
        </div>
      </div>
    </section>
  )
}
