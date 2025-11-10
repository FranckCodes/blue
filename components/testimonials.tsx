"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { useLanguage } from "@/components/language-provider"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Testimonial = {
  name: string
  location: string
  role: string
  message: string
  avatar: string
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export function Testimonials() {
  const { t } = useLanguage()
  const [api, setApi] = useState<CarouselApi>()
  const [isHovered, setIsHovered] = useState(false)
  const testimonials = t.testimonials.items as Testimonial[]

  useEffect(() => {
    if (!api) return
    const autoplay = setInterval(() => {
      if (!isHovered) {
        api.scrollNext()
      }
    }, 6000)

    return () => clearInterval(autoplay)
  }, [api, isHovered])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-3xl bg-[radial-gradient(circle_at_top,#312e81,#1e1b4b)] px-6 py-14 text-primary-foreground shadow-2xl md:px-16"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground/80"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {t.testimonials.badge}
          </motion.span>

          <motion.div
            className="mt-6 space-y-3 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h2 className="font-sans text-3xl font-bold md:text-4xl">{t.testimonials.title}</h2>
            <p className="text-base text-primary-foreground/80 md:text-lg">{t.testimonials.subtitle}</p>
          </motion.div>

          <div
            className="relative mt-12"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="pb-12"
            >
              <CarouselContent className="lg:-ml-6">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.name} className="md:basis-1/2 lg:basis-1/3 lg:pl-6">
                    <motion.article
                      className="h-full rounded-2xl bg-white/5 p-8 text-left shadow-xl ring-1 ring-white/10 backdrop-blur"
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                    >
                      <Quote className="h-10 w-10 text-primary/70" />
                      <p className="mt-6 text-base leading-relaxed text-primary-foreground/90 md:text-lg">
                        {testimonial.message}
                      </p>
                      <div className="mt-8 flex items-center gap-4">
                        <Avatar className="h-12 w-12 ring-2 ring-primary/50 ring-offset-2 ring-offset-white/5">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                          <p className="text-sm text-primary-foreground/70">
                            {testimonial.role} · {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-6 hidden border-none bg-white/10 text-primary-foreground shadow-lg backdrop-blur hover:bg-white/20 md:flex" />
              <CarouselNext className="-right-6 hidden border-none bg-white/10 text-primary-foreground shadow-lg backdrop-blur hover:bg-white/20 md:flex" />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

