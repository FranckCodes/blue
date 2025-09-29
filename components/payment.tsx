"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Smartphone, Building2, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const paymentMethods = [
  {
    icon: Building2,
    title: "Virement bancaire",
    description: "RIB/IBAN disponible sur demande",
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    description: "M-Pesa, Airtel Money, Orange Money",
  },
  {
    icon: CreditCard,
    title: "Carte bancaire / PayPal",
    description: "Pour les clients internationaux",
  },
]

const paymentSteps = [
  "Choisissez votre service",
  "Recevez votre devis ou facture",
  "Effectuez le paiement via la méthode choisie",
  "Recevez une confirmation par email",
  "Nous lançons votre projet",
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

export function Payment() {
  return (
    <section id="paiement" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>💳 Paiement</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">Comment nous payer</h2>
          <p className="text-lg text-muted-foreground text-pretty">Des paiements simples et transparents</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {paymentMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <motion.div
                    className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <method.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="font-sans text-xl">{method.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{method.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-card/80 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="font-sans text-2xl">Conditions de paiement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "50% d'acompte à la commande",
                    desc: "Pour démarrer votre projet",
                  },
                  {
                    title: "50% à la livraison du projet",
                    desc: "Une fois le travail terminé",
                  },
                  {
                    title: "Paiement en une fois possible",
                    desc: "Pour les petits projets",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full bg-card/80 backdrop-blur-sm border-2">
              <CardHeader>
                <CardTitle className="font-sans text-2xl">Étapes du paiement</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {paymentSteps.map((step, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div
                        className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center flex-shrink-0 font-sans font-bold shadow-lg"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div className="pt-1">{step}</div>
                    </motion.li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-2 border-primary/20 rounded-xl text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
          <p className="font-medium">
            Toutes les transactions sont sécurisées et accompagnées d'une facture officielle
          </p>
        </motion.div>
      </div>
    </section>
  )
}
