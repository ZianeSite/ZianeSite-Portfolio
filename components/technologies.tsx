import { Code2, Database, FileCode, Braces } from "lucide-react"

const technologies = [
  { name: "Java", icon: Code2, color: "text-orange-500" },
  { name: "JavaScript", icon: Braces, color: "text-yellow-500" },
  { name: "Python", icon: FileCode, color: "text-blue-500" },
  { name: "HTML & CSS", icon: FileCode, color: "text-orange-600" },
  { name: "SQL", icon: Database, color: "text-cyan-500" },
]

export function Technologies() {
  return (
    <section id="technologies" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Tools & Technologies</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
        {technologies.map((tech) => {
          const Icon = tech.icon
          return (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <Icon className={`h-12 w-12 ${tech.color}`} />
              <span className="text-center text-sm font-medium">{tech.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
