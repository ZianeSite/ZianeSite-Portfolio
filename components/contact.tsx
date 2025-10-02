import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contact" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Contact</h2>
      </div>
      <div className="space-y-6">
        <p className="text-pretty leading-relaxed text-muted-foreground">
          I'm always interested in hearing about new projects and opportunities. Whether you have a question or just
          want to say hi, feel free to reach out!
        </p>
        <Button asChild size="lg" className="font-medium">
          <a href="mailto:hello@example.com">Get In Touch</a>
        </Button>
      </div>
      <footer className="mt-24 text-sm text-muted-foreground">
        <p>
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary"
          >
            Tailwind CSS
          </a>
          . Deployed on{" "}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground hover:text-primary"
          >
            Vercel
          </a>
          .
        </p>
      </footer>
    </section>
  )
}
