"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Code, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const serviceIcons = [Globe, Code, Shield]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>{t.services.badge}</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">{t.services.title}</h2>
          <p className="text-lg text-muted-foreground text-pretty">{t.services.subtitle}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group h-full hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <motion.div
                      className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300 shadow-lg group-hover:shadow-primary/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="h-8 w-8" />
                    </motion.div>
                    <CardTitle className="font-sans text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-center gap-3 text-sm"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span className="text-foreground/80">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <Button variant="ghost" className="group/btn p-0 h-auto font-sans hover:text-primary">
                      {t.services.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
