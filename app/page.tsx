import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Mail, Twitter } from "lucide-react"

const projects = [
  {
    title: "HomeStay Buddy",
    description: "Konaklama ve seyahat yardımcınız",
    href: "/homestay-buddy",
    isInternal: true,
  },
]

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Ahmet Altuntecim
          </h1>
        </header>

        {/* Navigation */}
        <nav className="mb-16 flex gap-8 border-b border-border pb-4">
          <Link
            href="#projects"
            className="text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            Projeler
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Hakkımda
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            İletişim
          </Link>
        </nav>

        {/* Projects Section */}
        <section id="projects" className="mb-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Projeler
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex items-center justify-between rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-secondary"
              >
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </Link>
            ))}

            {/* Placeholder for future projects */}
            <div className="flex items-center justify-center rounded-lg border border-dashed border-border p-8">
              <p className="text-sm text-muted-foreground">
                Daha fazla proje yakında eklenecek...
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-20">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Hakkımda
          </h2>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-16">
          <h2 className="mb-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            İletişim
          </h2>
          <p className="text-muted-foreground">
            Beni bilen dostlarım bana nasıl ulaşılacağını bilir.
          </p>
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ahmet Altuntecim. Tüm hakları saklıdır.
          </p>
        </footer>
      </div>
    </main>
  )
}
