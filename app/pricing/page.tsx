"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, CreditCard, Smartphone, Globe, DollarSign, Clock, Shield } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Pricing() {
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
                    <NavigationMenuLink className="text-sm font-medium text-accent">
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
              Comment nous payer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Des paiements simples et transparents. Chez Blue, nous mettons à votre disposition plusieurs moyens de
              paiement sécurisés.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Moyens de paiement disponibles</h2>
            <p className="text-lg text-muted-foreground">Choisissez la méthode qui vous convient le mieux</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full ${index === 1 ? "bg-accent text-accent-foreground border-accent" : ""}`}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <method.icon
                        className={`w-12 h-12 mx-auto ${index === 1 ? "text-accent-foreground" : "text-primary"}`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{method.name}</h3>
                    <p
                      className={`text-sm ${index === 1 ? "text-accent-foreground/80" : "text-muted-foreground"} mb-6`}
                    >
                      {method.description}
                    </p>
                    <ul className="space-y-2 text-left">
                      {method.options.map((option, optionIndex) => (
                        <li key={optionIndex} className="flex items-start space-x-2">
                          <CheckCircle
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${index === 1 ? "text-accent-foreground" : "text-primary"}`}
                          />
                          <span
                            className={`text-sm ${index === 1 ? "text-accent-foreground/90" : "text-muted-foreground"}`}
                          >
                            {option}
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

      {/* Payment Conditions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conditions de paiement</h2>
            <p className="text-lg text-muted-foreground">Modalités claires et transparentes</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {paymentConditions.map((condition, index) => (
              <motion.div
                key={condition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <condition.icon className="w-12 h-12 mx-auto text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{condition.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{condition.description}</p>
                    <ul className="space-y-2 text-left">
                      {condition.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
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

      {/* Payment Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Étapes du paiement</h2>
            <p className="text-lg text-muted-foreground">Un processus simple en 5 étapes</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {paymentProcess.map((step, index) => (
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
        </div>
      </section>

      {/* Security & Guarantees */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sécurité et garanties</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Toutes les transactions sont sécurisées et accompagnées d'une facture officielle.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <Shield className="w-12 h-12 mx-auto text-accent" />
                <h3 className="text-xl font-semibold">Paiements sécurisés</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes nos transactions sont protégées par des protocoles de sécurité avancés
                </p>
              </div>
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 mx-auto text-accent" />
                <h3 className="text-xl font-semibold">Facture officielle</h3>
                <p className="text-sm text-muted-foreground">
                  Chaque paiement est accompagné d'une facture officielle pour votre comptabilité
                </p>
              </div>
              <div className="space-y-4">
                <Clock className="w-12 h-12 mx-auto text-accent" />
                <h3 className="text-xl font-semibold">Confirmation rapide</h3>
                <p className="text-sm text-muted-foreground">
                  Recevez une confirmation par email dans les minutes qui suivent votre paiement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à démarrer votre projet ?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Demander un devis
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

const paymentMethods = [
  {
    name: "Virement bancaire",
    description: "RIB/IBAN disponible sur demande",
    icon: CreditCard,
    options: ["Virement local", "Virement international", "Confirmation par email", "Facture officielle"],
  },
  {
    name: "Mobile Money",
    description: "Paiement mobile simple et rapide",
    icon: Smartphone,
    options: ["M-Pesa", "Airtel Money", "Orange Money", "Confirmation instantanée"],
  },
  {
    name: "International",
    description: "Pour les clients internationaux",
    icon: Globe,
    options: ["Carte bancaire", "PayPal", "Virement SWIFT", "Devises multiples"],
  },
]

const paymentConditions = [
  {
    title: "Modalités standard",
    description: "Conditions de paiement pour la plupart des projets",
    icon: DollarSign,
    details: [
      "50% d'acompte à la commande",
      "50% à la livraison du projet",
      "Facture officielle fournie",
      "Délai de paiement : 30 jours",
    ],
  },
  {
    title: "Petits projets",
    description: "Facilités pour les projets de petite envergure",
    icon: CheckCircle,
    details: [
      "Paiement en une fois possible",
      "Réduction pour paiement comptant",
      "Livraison immédiate après paiement",
      "Support inclus",
    ],
  },
  {
    title: "Projets complexes",
    description: "Arrangements spéciaux pour les gros projets",
    icon: Clock,
    details: [
      "Paiement échelonné possible",
      "Jalons de paiement définis",
      "Conditions négociables",
      "Contrat détaillé",
    ],
  },
]

const paymentProcess = [
  {
    title: "Choisir",
    description: "Sélectionnez votre service",
  },
  {
    title: "Devis",
    description: "Recevez votre devis personnalisé",
  },
  {
    title: "Payer",
    description: "Effectuez le paiement via votre méthode préférée",
  },
  {
    title: "Confirmer",
    description: "Recevez la confirmation par email",
  },
  {
    title: "Démarrer",
    description: "Nous lançons votre projet",
  },
]
