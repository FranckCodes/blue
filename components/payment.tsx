"use client"

import { CreditCard, Smartphone, Building2, CheckCircle2, ArrowRight, Shield, Zap, Clock } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const paymentMethods = [
  {
    icon: Building2,
    title: "Virement bancaire",
    description: "RIB/IBAN disponible sur demande",
    badge: "Recommandé",
    features: ["Sans frais", "Sécurisé", "Sous 48h"],
  },
  {
    icon: Smartphone,
    title: "Mobile Money",
    description: "M-Pesa, Airtel Money, Orange Money",
    badge: "Populaire",
    features: ["Instantané", "Local", "Simple"],
  },
  {
    icon: CreditCard,
    title: "Carte / PayPal",
    description: "Pour les clients internationaux",
    badge: "International",
    features: ["Visa/MC", "PayPal", "Stripe"],
  },
]

const paymentSteps = [
  {
    step: "01",
    title: "Choisissez votre service",
    description: "Sélectionnez le service adapté à vos besoins",
  },
  {
    step: "02",
    title: "Recevez votre devis",
    description: "Un devis détaillé sous 24h",
  },
  {
    step: "03",
    title: "Effectuez le paiement",
    description: "Via la méthode de votre choix",
  },
  {
    step: "04",
    title: "Lancement du projet",
    description: "Nous démarrons immédiatement",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function Payment() {
  return (
    <section id="paiement" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-primary text-sm font-medium tracking-widest uppercase mb-4">Paiement</span>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">
            Simple et <span className="text-primary">transparent</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-xl mx-auto">
            Plusieurs options de paiement flexibles pour s'adapter à vos besoins
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {paymentMethods.map((method, index) => (
            <motion.div key={index} variants={itemVariants} className="group relative">
              <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
                {/* Badge */}
                <span className="absolute top-6 right-6 text-xs font-medium text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                  {method.badge}
                </span>

                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <method.icon className="h-7 w-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-sans font-semibold text-xl mb-2">{method.title}</h3>
                <p className="text-muted-foreground text-sm mb-6">{method.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {method.features.map((feature, idx) => (
                    <span key={idx} className="text-xs text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="font-sans font-semibold text-2xl md:text-3xl">Comment ça marche</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {paymentSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {/* Step number */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:border-primary transition-colors">
                  <span className="text-primary font-mono font-bold text-lg">{step.step}</span>
                </div>

                <h4 className="font-sans font-medium text-lg mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Conditions */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-xl">Conditions de paiement</h3>
            </div>

            <div className="space-y-4">
              {[
                { percent: "50%", title: "Acompte à la commande", desc: "Pour démarrer votre projet" },
                { percent: "50%", title: "À la livraison", desc: "Une fois le travail terminé" },
                { percent: "100%", title: "Paiement unique", desc: "Pour les petits projets" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <span className="text-2xl font-bold text-primary font-mono">{item.percent}</span>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-sans font-semibold text-xl">Nos garanties</h3>
            </div>

            <div className="space-y-4">
              {[
                { icon: Shield, title: "Paiement 100% sécurisé", desc: "Vos données sont protégées" },
                { icon: Zap, title: "Facture officielle", desc: "Document légal fourni" },
                { icon: CheckCircle2, title: "Satisfaction garantie", desc: "Ou remboursement" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-sans font-semibold text-xl md:text-2xl mb-2">Des questions sur le paiement ?</h3>
              <p className="text-muted-foreground">Notre équipe est disponible pour vous accompagner</p>
            </div>
            <Link href="/contact">
              <button className="group flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Nous contacter
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
