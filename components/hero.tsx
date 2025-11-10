"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, PackageCheck } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { MagicButton } from "@/components/ui/magic-button"

const typingPhrases = [
  "transformation digitale",
  "croissance numérique",
  "innovation technologique",
  "performance digitale",
  "stratégie digitale",
]

type TechCard = {
  name: string
  subtitle: string
  logo: string
}

const techSlides: TechCard[][] = [
  [
    { name: "Laravel", subtitle: "Framework PHP", logo: "https://cdn.simpleicons.org/laravel/FF2D20" },
    { name: "Django", subtitle: "Framework Python", logo: "https://cdn.simpleicons.org/django/092E20" },
    { name: "JavaScript", subtitle: "Front & Back", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  ],
  [
    { name: "React", subtitle: "UI Library", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Next.js", subtitle: "Fullstack React", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
    { name: "Node.js", subtitle: "Runtime", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  ],
  [
    { name: "HTML5", subtitle: "Markup", logo: "https://cdn.simpleicons.org/html5/E34F26" },
    { name: "CSS3", subtitle: "Styling", logo: "https://cdn.simpleicons.org/css3/1572B6" },
    { name: "Java", subtitle: "Enterprise", logo: "https://cdn.simpleicons.org/java/007396" },
  ],
]

export function Hero() {
  const { t } = useLanguage()
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [isHovered, setIsHovered] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex]
    const typingSpeed = isDeleting ? 60 : 120
    const pauseDuration = 2000

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

  useEffect(() => {
    if (!carouselApi) return
    const interval = setInterval(() => {
      if (!isHovered) {
        carouselApi.scrollNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselApi, isHovered])

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-br from-[#0b1226]/40 via-[#060b19]/60 to-[#13203a]/40 py-20 md:py-32"
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/video/video_blue.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-[#040814]/60" />
      <div className="absolute inset-0 z-0 opacity-60 [background:radial-gradient(circle_at_top,#1e40af1a,#0f172a)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <Sparkles className="h-4 w-4" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              className="text-balance font-sans text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.title}
            </motion.h1>
            <motion.div
              className="min-h-[2.75rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <span className="text-balance font-sans text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                {displayText}
                <span className="ml-1 inline-block h-8 w-[2px] animate-pulse bg-primary align-middle md:h-10" />
              </span>
            </motion.div>

            <motion.p
              className="text-pretty text-lg leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <MagicButton
                icon={PackageCheck}
                aria-label={t.hero.cta1}
                variant="primary"
                className="w-full justify-center sm:w-[230px]"
              >
                {t.hero.cta1}
              </MagicButton>
              <MagicButton
                icon={Sparkles}
                aria-label={t.hero.cta2}
                variant="ghost"
                className="w-full justify-center sm:w-[230px]"
              >
                {t.hero.cta2}
              </MagicButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex h-full items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div
              className="relative w-full max-w-xl rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 p-1 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.8)]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="rounded-[calc(theme(borderRadius.3xl)-0.25rem)] bg-slate-900/70 p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tech mentors</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">Innovation Hub</h3>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Live
                  </span>
                </div>

                <Carousel
                  setApi={setCarouselApi}
                  opts={{
                    loop: true,
                    align: "start",
                  }}
                  className="mt-6 pb-12"
                >
                  <CarouselContent className="-ml-4">
                    {techSlides.map((group, index) => (
                      <CarouselItem key={index} className="pl-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          {group.map((tech) => (
                            <div
                              key={tech.name}
                              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-4 shadow-lg transition hover:-translate-y-1 hover:bg-white/10"
                            >
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 p-2">
                                <img src={tech.logo} alt={tech.name} className="h-10 w-10 object-contain" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">{tech.name}</p>
                                <p className="text-xs text-slate-300">{tech.subtitle}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4 hidden border-none bg-white/10 text-white shadow-lg backdrop-blur hover:bg-white/20 lg:flex" />
                  <CarouselNext className="-right-4 hidden border-none bg-white/10 text-white shadow-lg backdrop-blur hover:bg-white/20 lg:flex" />
                </Carousel>

                <div className="flex items-center justify-between border-t border-white/5 pt-4 text-xs text-slate-400">
                  <span>+40 stacks maîtrisés</span>
                  <span>Accélération continue</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
