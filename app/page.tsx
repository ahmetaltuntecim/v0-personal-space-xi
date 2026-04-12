"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

const projects = [
  {
    title: "Tatil Rezervasyonum",
    description: "Konaklama ve seyahat yardımcınız",
    href: "https://app.ahmetaltuntecim.space/",
    isInternal: false,
  },
]

const aboutContent = {
  tr: [
    "Ahmet Altuntecim, fen lisesi eğitiminin ardından lisans derecesini Özyeğin Üniversitesi Endüstri Mühendisliği Bölümü'nde İngilizce olarak tamamladı. Kariyerine özel sektörde iş analisti olarak adım attıktan sonra, 2020 yılında Türkiye'nin dijital bankacılık dönüşümüne yön veren Ziraat Teknoloji bünyesine katıldı. Burada, milyonlarca kullanıcıyı etkileyen geniş ölçekli sistem dönüşümlerinde ve kritik yatırım bankacılığı projelerinde sergilediği üstün performansla, operasyonel verimliliğe değer katan stratejik çözümler geliştirdi.",
    "Profesyonel birikimini akademik başarıyla devam ettirerek Birleşik Krallık'ta Kingston University London'da Mühendislik Projeleri ve Sistem Yönetimi alanında yüksek lisansını onur derecesiyle tamamladı. Kariyer yolculuğunda küresel havacılık ve savunma sanayi devi Collins Aerospace'in Birleşik Krallık operasyonlarında Proje Yöneticisi olarak görev alarak, fabrikanın en yüksek bütçeli ve kompleks uluslararası projelerinden birini başarıyla yönetti.",
    "İş hayatındaki disiplinli ve rekabetçi yaklaşımını sportif başarılarıyla pekiştiren Altuntecim, aynı çeşitli spor dallarında ulusal dereceleri bulunmaktadır. 2022 yılında Boğaziçi Kıtalararası Yüzme Yarışı'nı başarıyla tamamlamış; aynı yıl düzenlenen Masterlar Yüzme Şampiyonası'nda 50m, 200m ve 1500m serbest stilde altın madalya kazanarak Türkiye Şampiyonu olmuştur. Fen lisesinden gelen analitik temelini ve spor dünyasından kazandığı azmi profesyonel kimliğine yansıtan Ahmet Altuntecim, halihazırda Ziraat Teknoloji bünyesinde uzman iş analisti olarak finansal teknolojilerin geleceğine katkı sunmaya devam etmektedir.",
  ],
  en: [
    "Ahmet Altuntecim completed his undergraduate studies in Industrial Engineering at Ozyegin University (English medium) following his graduation from a prestigious science high school. After embarking on his career as a business analyst in the private sector, he joined Ziraat Teknoloji in 2020, a pioneering institution driving Turkey's digital banking transformation. During this period, he developed strategic solutions that significantly enhanced operational efficiency, demonstrating outstanding performance in large-scale system migrations and critical investment banking projects impacting millions of users.",
    "Furthering his professional expertise with academic excellence, he earned his Master of Science (MSc) in Engineering Projects and Systems Management with honors from Kingston University London in the United Kingdom. His career trajectory led him to the global aerospace and defense giant Collins Aerospace, where he served as a Project Manager in their UK operations, successfully managing one of the facility's highest-budget and most complex international projects.",
    "Altuntecim reinforces his disciplined and competitive professional approach with his athletic achievements as a national swimmer with various national rankings. In 2022, he successfully completed the Bosphorus Cross-Continental Swimming Race and was crowned the Turkish National Champion at the Masters Swimming Championships, winning gold medals in the 50m, 200m, and 1500m freestyle events. Integrating the analytical foundation from his science high school background with the perseverance gained from the world of sports, Ahmet Altuntecim currently continues to shape the future of financial technologies as a senior business analyst at Ziraat Teknoloji.",
  ],
}

export default function HomePage() {
  const [lang, setLang] = useState<"tr" | "en">("tr")

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
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Hakkımda
            </h2>
            {/* Language Toggle */}
            <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
              <button
                onClick={() => setLang("tr")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  lang === "tr"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  lang === "en"
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="space-y-5">
            {aboutContent[lang].map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>

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
