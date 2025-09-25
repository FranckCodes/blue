"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Code, Shield, Cloud, Smartphone, Settings, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Services() {
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
                    <NavigationMenuLink className="text-sm font-medium text-accent">Services</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/portfolio" legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-accent transition-colors">
                      Portfolio
                    </NavigationMenuLink>
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
                      Comment nous payer
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
              Nos services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Des solutions numériques complètes pour accompagner votre transformation digitale
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos domaines d'expertise</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${index === 1 ? "bg-accent text-accent-foreground" : ""}`}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <service.icon
                        className={`w-12 h-12 mx-auto ${index === 1 ? "text-accent-foreground" : "text-primary"}`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p
                      className={`text-sm ${index === 1 ? "text-accent-foreground/80" : "text-muted-foreground"} mb-6`}
                    >
                      {service.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${index === 1 ? "text-accent-foreground" : "text-primary"}`}
                          />
                          <span
                            className={`text-sm ${index === 1 ? "text-accent-foreground/90" : "text-muted-foreground"}`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Services détaillés</h2>
            <p className="text-lg text-muted-foreground">Découvrez l'ensemble de nos prestations</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <service.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notre processus</h2>
            <p className="text-lg text-muted-foreground">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-accent text-accent-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/business-innovation-and-digital-transformation.jpg"
                alt="Nos services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Prêt à démarrer votre projet ?</h2>
              <p className="text-lg text-muted-foreground">
                Discutons de vos besoins et trouvons ensemble la solution parfaite pour votre entreprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    Voir nos réalisations
                  </Button>
                </Link>
              </div>
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

const mainServices = [
  {
    title: "Transformation digitale",
    description: "Accompagnement complet dans votre transition numérique",
    icon: Globe,
    features: [
      "Audit et stratégie digitale",
      "Automatisation des processus",
      "Migration vers le cloud",
      "Formation des équipes",
      "Conseil en innovation",
    ],
  },
  {
    title: "Création de sites web",
    description: "Sites modernes, performants et adaptés à vos besoins",
    icon: Code,
    features: [
      "Sites vitrine professionnels",
      "Boutiques e-commerce",
      "Applications web sur mesure",
      "Design responsive",
      "Optimisation SEO",
    ],
  },
  {
    title: "Solutions numériques",
    description: "Infrastructure et sécurité pour votre écosystème digital",
    icon: Shield,
    features: [
      "Hébergement sécurisé",
      "Maintenance technique",
      "Cybersécurité",
      "Support 24/7",
      "Sauvegarde automatique",
    ],
  },
]

const detailedServices = [
  {
    title: "Développement web",
    description: "Applications web modernes avec les dernières technologies",
    icon: Code,
  },
  {
    title: "Applications mobiles",
    description: "Apps natives et hybrides pour iOS et Android",
    icon: Smartphone,
  },
  {
    title: "Cloud Computing",
    description: "Migration et gestion d'infrastructure cloud",
    icon: Cloud,
  },
  {
    title: "Intégration système",
    description: "Connexion et synchronisation de vos outils",
    icon: Settings,
  },
  {
    title: "Consulting IT",
    description: "Conseil stratégique en transformation digitale",
    icon: Globe,
  },
  {
    title: "Sécurité informatique",
    description: "Protection et audit de sécurité",
    icon: Shield,
  },
]

const process = [
  {
    title: "Analyse",
    description: "Étude de vos besoins et définition des objectifs",
  },
  {
    title: "Conception",
    description: "Design et architecture de la solution",
  },
  {
    title: "Développement",
    description: "Réalisation technique avec suivi régulier",
  },
  {
    title: "Déploiement",
    description: "Mise en ligne et formation de vos équipes",
  },
]
