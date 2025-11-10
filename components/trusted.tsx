"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Trusted() {
  const { t } = useLanguage()

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-3xl bg-primary/90 px-6 py-12 text-primary-foreground shadow-2xl md:px-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            className="text-center font-sans text-lg font-semibold uppercase tracking-[0.28em]"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t.trusted.title}
          </motion.h2>
          <motion.p
            className="mt-4 text-center text-base font-medium text-primary-foreground/80"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {t.trusted.subtitle}
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.15 },
              },
            }}
          >
            {t.trusted.companies.map((company) => (
              <motion.div
                key={company.name}
                className="flex items-center justify-center rounded-2xl bg-primary-foreground/5 px-4 py-4 backdrop-blur transition hover:bg-primary-foreground/10"
                variants={fadeInUp}
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={120}
                  height={48}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

