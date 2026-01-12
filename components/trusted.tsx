"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export function Trusted() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden py-10 md:py-15">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container relative mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-widest uppercase text-primary/60 border border-primary/10 rounded-full">
            {t.trusted.title}
          </span>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground">{t.trusted.subtitle}</h2>
        </motion.div>

        <div className="relative">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* First row - scrolling left */}
          <div className="flex overflow-hidden mb-6">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Double the logos for seamless loop */}
              {[...t.trusted.companies, ...t.trusted.companies].map((company, index) => (
                <div key={`${company.name}-${index}`} className="flex-shrink-0 group">
                  <div className="flex items-center justify-center w-40 md:w-48 h-20 md:h-24 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] transition-all duration-300 hover:bg-foreground/[0.06] hover:border-foreground/[0.1]">
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      width={120}
                      height={48}
                      className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-70 group-hover:grayscale-0"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - scrolling right (reverse) */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 md:gap-12"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Double the logos for seamless loop - reversed order */}
              {[...t.trusted.companies.slice().reverse(), ...t.trusted.companies.slice().reverse()].map(
                (company, index) => (
                  <div key={`${company.name}-reverse-${index}`} className="flex-shrink-0 group">
                    <div className="flex items-center justify-center w-40 md:w-48 h-20 md:h-24 rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] transition-all duration-300 hover:bg-foreground/[0.06] hover:border-foreground/[0.1]">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        width={120}
                        height={48}
                        className="h-8 md:h-10 w-auto object-contain opacity-40 grayscale transition-all duration-300 group-hover:opacity-70 group-hover:grayscale-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ),
              )}
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "50+", label: "Clients satisfaits" },
            { value: "120+", label: "Projets livrés" },
            { value: "5", label: "Années d'expérience" },
            { value: "98%", label: "Taux de satisfaction" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {stat.value}
              </motion.div>
              <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
