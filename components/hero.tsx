import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="text-balance">Lebohang Precious Ziane</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">Software Developer</h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          ICT Graduate | Oracle Certified Associate (Java SE 8 Programmer, IZO-808). | Certifications in IBM AI and Certiport IT Specialist.
        </p>
      </div>

      <div className="mt-16 flex gap-5 lg:mt-0">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
          <a href="https://github.com/ZianeSite" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
          <a href="https://www.linkedin.com/in/lebohang-ziane-3805332b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
        
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
          <a href="mailto:lebohangziane@gmail.com" aria-label="Email">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </header>
  )
}
