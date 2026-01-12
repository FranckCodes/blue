"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Play, ChevronRight } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const typingPhrases = [
  "transformation digitale",
  "croissance numérique",
  "innovation technologique",
  "performance digitale",
  "stratégie digitale",
]

type TechItem = {
  name: string
  logo: string
  color: string
}

const technologies: TechItem[] = [
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
  { name: "Laravel", logo: "https://cdn.simpleicons.org/laravel/FF2D20", color: "#FF2D20" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
  { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
]

const stats = [
  { value: "150+", label: "Projets livrés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "5+", label: "Années d'expertise" },
]

export function Hero() {
  const { t } = useLanguage()
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2500

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentPhrase.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex + 1))
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === currentPhrase.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseDuration)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentPhrase.slice(0, charIndex - 1))
        setCharIndex((prev) => prev - 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % typingPhrases.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex])

  return (
    <section id="accueil" className="relative bg-black text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          className="h-full w-full object-cover scale-125 shadow-2xl" 
          style={{
            filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))'
          }}
          autoPlay 
          loop 
          muted 
          playsInline 
          aria-hidden="true"
          preload="auto"
        >
          <source src="/video/video_blue.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay gradient - Assombri pour une meilleure lisibilité */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/85 to-black/95" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-[2] opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 z-[2] h-96 w-96 rounded-full bg-primary/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 z-[2] h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="container relative z-[10] mx-auto flex min-h-screen flex-col justify-center px-4 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-sm font-medium text-primary">{t.hero.badge}</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl">
                {t.hero.title}
              </h1>
              <div className="min-h-[3.5rem] md:min-h-[4.5rem]">
                <span className="text-balance text-3xl font-bold text-primary md:text-4xl lg:text-5xl xl:text-6xl">
                  {displayText}
                  <span className="ml-1 inline-block h-8 w-[3px] animate-pulse rounded-full bg-primary align-middle md:h-12" />
                </span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-xl text-pretty text-lg leading-relaxed text-gray-300 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {t.hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              <Link href="/quote">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {t.hero.cta1}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] transition-all group-hover:animate-shimmer" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="lg"
                className="group gap-2 px-8 py-6 text-base font-medium text-white transition-colors hover:bg-white/5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                  <Play className="h-4 w-4 fill-current text-primary" />
                </div>
                {t.hero.cta2}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap gap-8 border-t border-white/10 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Showcase */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Main Card */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/50 via-blue-500/50 to-primary/50 opacity-20 blur-2xl" />

              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-blue-600">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Tech Stack</h3>
                      <p className="text-sm text-gray-300">Technologies maîtrisées</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    40+ Stacks
                  </div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      className="group relative flex flex-col items-center justify-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/10 hover:bg-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity group-hover:opacity-20"
                        style={{ backgroundColor: tech.color }}
                      />
                      <img
                        src={tech.logo || "/placeholder.svg"}
                        alt={tech.name}
                        className="relative h-10 w-10 object-contain transition-transform group-hover:scale-110"
                      />
                      <span className="relative text-sm font-medium text-white">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/80 to-blue-600/80"
                      />
                    ))}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black bg-white/10 text-xs font-medium text-white">
                      +12
                    </div>
                  </div>
                  <button className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80">
                    Voir tous les projets
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              className="absolute -left-8 top-1/4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Projet livré</p>
                  <p className="text-xs text-gray-400">Il y a 2 heures</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -right-4 bottom-1/4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">+127%</p>
                  <p className="text-xs text-gray-400">Performance client</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="flex h-14 w-8 items-start justify-center rounded-full border border-white/20 p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div
            className="h-3 w-1 rounded-full bg-primary"
            animate={{ y: [0, 16, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
