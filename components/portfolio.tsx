"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "AES Consulting",
    description: "Site web pour cabinet de conseil en environnement et développement durable",
    category: "Site vitrine",
    image: "/modern-business-website.png",
    url: "https://africanesc.co.uk",
    contact: "info@africanesc.co.uk",
  },
  {
    title: "Victoria Corporation",
    description: "Plateforme web pour entreprise leader en logistique, mines et consultance",
    category: "Site vitrine",
    image: "/ecommerce-online-store-interface.jpg",
    url: "https://vivicorp.net",
    contact: "Info@vivicorp.net",
  },
  {
    title: "NLC Events",
    description: "Site web pour la réservation et gestion d'événements",
    category: "Application",
    image: "/business-management-dashboard.png",
    url: "https://nlcevents.org",
    contact: "info@bluerdc.com",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>📂 Notre Travail</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
            Découvrez nos réalisations
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">Nos réalisations parlent de notre savoir-faire</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button
                      size="icon"
                      className="h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground shadow-lg"
                      asChild
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </Button>
                  </motion.div>
                </div>
                <CardHeader className="space-y-3">
                  <Badge
                    variant="secondary"
                    className="w-fit bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
                  >
                    {project.category}
                  </Badge>
                  <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{project.description}</CardDescription>
                  {project.contact && (
                    <div className="text-xs text-muted-foreground mt-2">
                      <strong>Contact:</strong> {project.contact}
                    </div>
                  )}
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="font-sans bg-transparent hover:bg-primary hover:text-primary-foreground"
          >
            Voir tous les projets
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
