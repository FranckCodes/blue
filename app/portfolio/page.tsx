"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, Globe, ShoppingCart, BarChart3 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Portfolio() {
  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold">
              B <span className="text-accent">lue.</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      Accueil
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      À propos
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/services" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      Services
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium text-accent">Portfolio</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      Blog
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      Tarifs
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Contactez-nous</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Nos réalisations
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Découvrez quelques projets réalisés par notre équipe pour nos clients
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projets phares</h2>
            <p className="text-lg text-muted-foreground">Nos réalisations les plus remarquables</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="h-full overflow-hidden">
                  <div className="relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <project.icon className="w-5 h-5 text-accent" />
                          <span className="text-sm text-muted-foreground">{project.type}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Voir le projet
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tous nos projets</h2>
            <p className="text-lg text-muted-foreground">Une sélection de nos réalisations récentes</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-accent text-accent-foreground">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <project.icon className="w-4 h-4 text-accent" />
                        <span className="text-xs text-muted-foreground">{project.type}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs">
                        Détails
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Votre projet sera le prochain</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Vous avez un projet en tête ? Discutons-en et créons ensemble quelque chose d'exceptionnel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Démarrer un projet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">
                B <span className="text-accent">lue.</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Votre partenaire en transformation digitale et solutions numériques.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Transformation digitale
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Création de sites web
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                    Solutions numériques
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Entreprise</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <span className="text-sm text-muted-foreground">contact@blue.com</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">+243 000 000 000</span>
                </li>
                <li>
                  <span className="text-sm text-muted-foreground">Kinshasa, RDC</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Blue. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const featuredProjects = [
  {
    title: "Plateforme E-commerce Moderne",
    description:
      "Boutique en ligne complète avec système de paiement intégré, gestion des stocks et tableau de bord administrateur. Interface utilisateur moderne et expérience d'achat optimisée.",
    image: "/ecommerce-shopping-cart.png",
    category: "E-commerce",
    type: "Application Web",
    icon: ShoppingCart,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Application de Gestion d'Entreprise",
    description:
      "Solution complète de gestion avec modules CRM, comptabilité, gestion des ressources humaines et reporting avancé. Interface intuitive et tableaux de bord personnalisables.",
    image: "/business-management-web-application-dashboard.jpg",
    category: "Gestion",
    type: "SaaS",
    icon: BarChart3,
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Chart.js", "Bootstrap"],
  },
]

const allProjects = [
  {
    title: "Site vitrine pour PME",
    description: "Design moderne et responsive pour une entreprise locale avec optimisation SEO.",
    image: "/modern-business-website.png",
    category: "Site vitrine",
    type: "Site Web",
    icon: Globe,
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    title: "Boutique en ligne",
    description: "E-commerce sécurisé avec paiement en ligne intégré et gestion des commandes.",
    image: "/ecommerce-shopping-cart.png",
    category: "E-commerce",
    type: "Application Web",
    icon: ShoppingCart,
    technologies: ["React", "Stripe", "Node.js", "MongoDB"],
  },
  {
    title: "Application web interne",
    description: "Outils numériques pour la gestion d'entreprise avec tableaux de bord personnalisés.",
    image: "/business-management-web-application-dashboard.jpg",
    category: "Gestion",
    type: "Application Web",
    icon: BarChart3,
    technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
  },
  {
    title: "Portail client",
    description: "Interface client sécurisée pour la consultation de comptes et services.",
    image: "/modern-business-website.png",
    category: "Portail",
    type: "Application Web",
    icon: Globe,
    technologies: ["Angular", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Système de réservation",
    description: "Plateforme de réservation en ligne avec calendrier et notifications automatiques.",
    image: "/business-innovation-and-digital-transformation.jpg",
    category: "Réservation",
    type: "Application Web",
    icon: BarChart3,
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Site institutionnel",
    description: "Site web corporate avec gestion de contenu et multilingue.",
    image: "/modern-office-with-digital-transformation-technolo.jpg",
    category: "Institutionnel",
    type: "Site Web",
    icon: Globe,
    technologies: ["WordPress", "PHP", "MySQL", "SCSS"],
  },
]
