"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

import { useLanguage } from "@/components/language-provider"

type StatItem = {
  value: string
  label: string
  description: string
}

const gradients = [
  "from-indigo-500 via-indigo-400 to-indigo-300",
  "from-blue-500 via-sky-400 to-sky-300",
  "from-purple-500 via-fuchsia-400 to-fuchsia-300",
  "from-violet-500 via-purple-400 to-purple-300",
]

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  return (
    <motion.span
      className="font-heading text-4xl font-bold text-white md:text-5xl"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {value}
    </motion.span>
  )
}

export function Stats() {
  const { t } = useLanguage()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-120px" })
  const stats = t.stats.items as StatItem[]

  return (
    <section ref={ref} className="bg-gradient-to-b from-background via-background to-primary/10 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
            {t.stats.badge}
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold md:text-4xl">{t.stats.title}</h2>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">{t.stats.subtitle}</p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${gradients[index % gradients.length]} p-[1px] shadow-xl`}
              >
                <div className="relative h-full rounded-[calc(theme(borderRadius.3xl)-1px)] bg-background/80 p-6 backdrop-blur">
                  <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:scale-125" />
                  <AnimatedCounter value={stat.value} inView={inView} />
                  <p className="mt-3 font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
