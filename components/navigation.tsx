"use client"

import { useState, useEffect } from "react"

const sections = ["about", "experience", "projects", "contact"]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-24 flex-col items-center justify-center lg:flex">
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="group relative flex items-center"
            aria-label={`Navigate to ${section}`}
          >
            <span
              className={`h-px transition-all ${
                activeSection === section
                  ? "w-16 bg-primary"
                  : "w-8 bg-muted group-hover:w-16 group-hover:bg-foreground"
              }`}
            />
            <span
              className={`absolute left-20 text-xs font-bold uppercase tracking-widest transition-opacity ${
                activeSection === section ? "text-primary opacity-100" : "text-muted opacity-0 group-hover:opacity-100"
              }`}
            >
              {section}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
