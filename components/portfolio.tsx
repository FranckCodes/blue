"use client"

import { useState, useMemo, useRef } from "react"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

interface Project {
  title: string
  description: string
  category: string
  url: string
  image?: string
  technologies?: string[]
  year?: string
}

const projects: Project[] = [
  {
    title: "Juste Deux Coeurs",
    description: "Plateforme de rencontres et relations",
    category: "Application Web",
    url: "https://justedeuxcoeurs.com/",
    image: "/projet_preview_image/juste_deux_coeurs.png",
    technologies: ["Next.js", "React", "Tailwind"],
    year: "2024",
  },
  {
    title: "Kinpresta",
    description: "Services et prestations professionnels",
    category: "Plateforme Services",
    url: "https://kinpresta.com/",
    image: "/projet_preview_image/kinPresta.png",
    technologies: ["React", "Node.js", "MongoDB"],
    year: "2024",
  },
  {
    title: "Mobile RDC",
    description: "Solutions mobiles en République Démocratique du Congo",
    category: "E-commerce",
    url: "http://mobile-rdc.com/",
    image: "/projet_preview_image/mobile_rdc.png",
    technologies: ["Next.js", "Stripe", "Prisma"],
    year: "2024",
  },
  {
    title: "Mans Consulting",
    description: "Cabinet de conseil et expertise",
    category: "Site Vitrine",
    url: "https://www.mans-consulting.com",
    image: "/projet_preview_image/mans_consulting.png",
    technologies: ["React", "Framer Motion"],
    year: "2023",
  },
  {
    title: "Campus Prep",
    description: "Plateforme éducative et formation",
    category: "Éducation",
    url: "https://www.campus-prep.com/",
    image: "/projet_preview_image/campus_prep.png",
    technologies: ["Next.js", "Supabase", "React"],
    year: "2024",
  },
  {
    title: "Congo Shop",
    description: "Marketplace et commerce électronique",
    category: "E-commerce",
    url: "https://congo-shop.com/",
    image: "/projet_preview_image/congo_shop.png",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    year: "2023",
  },
  {
    title: "Services Triad",
    description: "Solutions et services professionnels",
    category: "Site Vitrine",
    url: "https://www.servicestriad.com",
    image: "/projet_preview_image/services_triad.png",
    technologies: ["React", "Tailwind CSS"],
    year: "2024",
  },
  {
    title: "Esthetic Dubai",
    description: "Esthétique et soins de beauté à Dubaï",
    category: "Beauté & Bien-être",
    url: "https://www.estheticdubai.com",
    image: "/projet_preview_image/esthetic_dubai.png",
    technologies: ["Next.js", "Sanity CMS"],
    year: "2024",
  },
  {
    title: "Transition Eco",
    description: "Solutions écologiques et durables",
    category: "Écologie",
    url: "https://www.transition-eco.net",
    image: "/projet_preview_image/transition-eco.png",
    technologies: ["Next.js", "React"],
    year: "2023",
  },
  {
    title: "Act Express",
    description: "Services express et logistique",
    category: "Services",
    url: "https://www.actexpress.fr",
    image: "/projet_preview_image/acte_xpress_tunisie.png",
    technologies: ["React", "Firebase"],
    year: "2024",
  },
  {
    title: "Vanity Curl",
    description: "Soins capillaires et coiffure",
    category: "Beauté & Bien-être",
    url: "https://www.vanity-curl.com",
    image: "/projet_preview_image/vanity.png",
    technologies: ["React", "Shopify"],
    year: "2023",
  },
  {
    title: "NLC Events",
    description: "Organisation d'événements professionnels",
    category: "Événementiel",
    url: "https://www.nlcevents.org",
    image: "/projet_preview_image/never_limit_children.png",
    technologies: ["React", "Node.js"],
    year: "2024",
  },
  {
    title: "Le Federal",
    description: "Information et actualités",
    category: "Média",
    url: "https://www.lefederal.net",
    image: "/projet_preview_image/fédéral.png",
    technologies: ["Next.js", "Sanity CMS"],
    year: "2023",
  },
]

const categories = ["Tous", "Application Web", "E-commerce", "Site Vitrine", "Beauté & Bien-être", "Services Créatifs"]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary mb-5">
          {project.image ? (
            <>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
              <span className="text-7xl font-bold text-muted-foreground/30">{project.title.charAt(0)}</span>
            </div>
          )}

          {/* Hover overlay with button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
            <motion.div
              className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium"
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <span>Voir le projet</span>
              <ExternalLink className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-background/80 backdrop-blur-md rounded-full text-foreground border border-border/50">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.description}</p>

          {/* Technologies */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground/80 px-2.5 py-1 bg-secondary/50 rounded-md border border-border/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </a>
    </motion.div>
  )
}

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Tous")
  const [showAll, setShowAll] = useState(false)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })

  const filteredProjects = useMemo(() => {
    return activeCategory === "Tous" ? projects : projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6)

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setShowAll(false)
  }

  return (
    <section id="portfolio" className="bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          ref={headerRef}
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Notre Travail</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Découvrez nos <span className="text-accent">réalisations</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Nos réalisations parlent de notre savoir-faire. Des solutions digitales sur mesure pour chaque client.
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 lg:gap-12">
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-foreground">{projects.length}+</span>
                <p className="text-sm text-muted-foreground mt-1">Projets livrés</p>
              </div>
              <div className="text-center">
                <span className="text-4xl md:text-5xl font-bold text-foreground">100%</span>
                <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {displayedProjects.map((project, index) => (
              <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more button */}
        {filteredProjects.length > 6 && (
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground rounded-full font-medium transition-all duration-300 border border-border hover:border-foreground/30"
            >
              {showAll ? "Voir moins" : "Voir tous les projets"}
              <ArrowUpRight
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-90" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"}`}
              />
            </button>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="mt-24 md:mt-32 relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-secondary via-card to-secondary p-10 md:p-14 lg:p-16 border border-border">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">Prêt à démarrer votre projet ?</h3>
                <p className="mt-4 text-muted-foreground text-lg">
                  Contactez-nous pour discuter de votre vision et découvrir comment nous pouvons vous aider.
                </p>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:bg-accent transition-colors duration-300 shrink-0"
              >
                Demander un devis
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
