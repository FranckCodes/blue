"use client"

import { Users, Briefcase, Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  {
    icon: Briefcase,
    value: "3k+",
    label: "Projets réussis",
  },
  {
    icon: Users,
    value: "200+",
    label: "Équipes expertes",
  },
  {
    icon: Award,
    value: "350+",
    label: "Clients satisfaits",
  },
  {
    icon: Calendar,
    value: "16+",
    label: "Années d'expérience",
  },
]

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  return (
    <motion.div
      className="font-sans font-bold text-4xl md:text-5xl"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      {value}
    </motion.div>
  )
}

export function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary-foreground/10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <stat.icon className="h-8 w-8" />
              </motion.div>
              <AnimatedCounter value={stat.value} inView={inView} />
              <motion.div
                className="text-lg opacity-90"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 0.9 } : { opacity: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
