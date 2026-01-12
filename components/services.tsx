"use client"

import { ArrowRight, Globe, Code, Shield, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { useState } from "react"
import Link from "next/link"

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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

const serviceIcons = [Globe, Code, Shield]
const accentColors = ["from-blue-500 to-cyan-400", "from-violet-500 to-purple-400", "from-emerald-500 to-teal-400"]

export function Services() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative  bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
              {t.services.badge}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-center text-balance">
            {t.services.title.split(" ").map((word, i) => (
              <span key={i}>
                {i === 1 ? (
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400  bg-clip-text text-transparent">
                    {word}{" "}
                  </span>
                ) : (
                  `${word} `
                )}
              </span>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center text-pretty max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid - Bento Style */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
              >
                <div
                  className={`
                  relative h-full p-8 rounded-2xl border border-border/50
                  bg-gradient-to-b from-muted/50 to-background
                  transition-all duration-500 ease-out
                  hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5
                  ${isHovered ? "scale-[1.02]" : "scale-100"}
                `}
                >
                  {/* Glow effect on hover */}
                  <div
                    className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    bg-gradient-to-b ${accentColors[index]} blur-xl
                    transition-opacity duration-500 -z-10
                  `}
                    style={{ transform: "scale(0.8)", opacity: isHovered ? 0.1 : 0 }}
                  />

                  {/* Service number */}
                  <div className="absolute top-6 right-6 text-7xl font-bold text-black/10 dark:text-white/10 select-none">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`
                      relative w-14 h-14 rounded-xl mb-6
                      bg-gradient-to-br ${accentColors[index]}
                      flex items-center justify-center
                      shadow-lg
                    `}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-sans font-semibold text-xl mb-3 text-foreground group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + 0.3 }}
                      >
                        <div
                          className={`
                          flex items-center justify-center w-5 h-5 rounded-full
                          bg-gradient-to-br ${accentColors[index]} bg-opacity-20
                        `}
                        >
                          <Sparkles className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground/70 group-hover:text-foreground/90 transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link href="/services">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto font-medium text-muted-foreground hover:text-blue-400 transition-colors"
                    >
                      {t.services.learnMore}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 p-2 pl-6 rounded-full bg-muted/50 border border-border/50">
            <span className="text-sm text-muted-foreground">Besoin d'un service personnalisé ?</span>
            <Link href="/contact">
              <Button size="sm" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                Contactez-nous
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
