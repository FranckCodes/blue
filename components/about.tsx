"use client"

import { useState } from "react"
import { CheckCircle2, Quote, Play } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

const values = ["Innovation constante", "Transparence totale", "Proximité client", "Excellence technique"]

const teamMembers = [
  {
    name: "Joel Kapeta",
    role: "CEO & Stratège Digital",
    description: "Fondateur visionnaire, Joel orchestre la stratégie digitale des clients et l’excellence des livrables.",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#f6d365] via-[#fee3a4] to-[#fda085]",
  },
  {
    name: "Franck Kapuya",
    role: "CTO & Lead Architecte",
    description: "Responsable des architectures techniques, il garantit des solutions robustes et évolutives.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#a1c4fd] via-[#c2e9fb] to-[#667eea]",
  },
  {
    name: "Grady Abolambay",
    role: "Product Manager",
    description: "Grady pilote la vision produit et s’assure que chaque fonctionnalité serve l’impact business.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#fbc2eb] via-[#f9a8d4] to-[#a18cd1]",
  },
  {
    name: "Vincent Tshipamba",
    role: "Lead UX/UI Designer",
    description: "Vincent conçoit des expériences intuitives et esthétiques alignées sur les attentes utilisateurs.",
    image: "https://images.unsplash.com/photo-1544723795-43253797c4b4?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#ffecd2] via-[#fcb69f] to-[#ff9a9e]",
  },
  {
    name: "Mana Mana Tsimanga",
    role: "Head of Delivery",
    description: "Mana coordonne les équipes delivery et veille au respect des délais et de la qualité.",
    image: "https://images.unsplash.com/photo-1524504388940-1e23a488b9c0?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#fddb92] via-[#d1fdff] to-[#ff9a9e]",
  },
  {
    name: "Ruth Name",
    role: "Data & AI Specialist",
    description: "Ruth met la donnée au service des décisions et explore les opportunités IA pour nos clients.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#d4fc79] via-[#96e6a1] to-[#84fab0]",
  },
  {
    name: "Carlos Name",
    role: "DevOps Engineer",
    description: "Carlos automatise nos pipelines et sécurise les mises en production continues.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80",
    photoBg: "from-[#cfd9df] via-[#e2ebf0] to-[#a6c0fe]",
  },
]

export function About() {
  return (
    <section id="a-propos" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <VideoPreview />

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span>👥 À propos de nous</span>
            </motion.div>

            <motion.h2
              className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-balance"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Qui sommes-nous ?
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Blue est une entreprise spécialisée dans la <strong>transformation digitale</strong> et le{" "}
              <strong>développement de solutions numériques</strong>.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Notre mission est de rendre la technologie accessible et utile pour chaque organisation. Nous croyons en
              l'innovation, la transparence et la proximité avec nos clients.
            </motion.p>

            <motion.div
              className="grid sm:grid-cols-2 gap-4 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6,
                  },
                },
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mt-24 space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary text-sm font-medium">
              Notre équipe
            </span>
            <h3 className="mt-4 font-heading text-3xl md:text-4xl">Des expert·e·s engagés à vos côtés</h3>
            <p className="mt-3 text-lg text-muted-foreground">
              Une équipe pluridisciplinaire, ancrée à Kinshasa et connectée aux meilleures pratiques internationales pour
              porter vos projets digitaux.
            </p>
          </div>

          <motion.div
            className="relative mx-auto w-full overflow-hidden rounded-[2.5rem] border bg-card shadow-2xl lg:rounded-[3.5rem]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a33,#0f172a80)]" />
            <Image
              src="/team_presentation.png"
              alt="Équipe Blue"
              width={1600}
              height={1180}
              className="relative h-full w-full object-cover"
              priority
            />
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Card className="h-full border-2 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <CardHeader className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 bg-gradient-to-br from-primary/40 to-primary ring-2 ring-primary/60 ring-offset-2 text-primary-foreground">
                      <AvatarFallback className="text-base font-semibold uppercase">
                        {member.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")
                          .toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                      <CardDescription className="text-sm font-semibold text-primary">{member.role}</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <Quote className="mt-1 h-4 w-4 text-primary" />
                      <p className="text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function VideoPreview() {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            type="button"
            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 via-primary/10 to-accent/30 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/40"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b,#0f172a)] opacity-70 transition group-hover:opacity-80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center">
              <motion.div
                className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur group-hover:scale-105"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Play className="h-10 w-10 text-white" />
              </motion.div>
              <div className="space-y-1">
                <p className="font-heading text-xl font-semibold text-white">Découvrir Blue en vidéo</p>
                <p className="text-sm text-white/80">Cliquez pour en savoir plus sur notre approche</p>
              </div>
            </div>
            <div className="absolute left-8 top-8 flex items-center gap-3 text-white/70">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase tracking-[0.3em]">Story</span>
            </div>
            <div className="absolute -bottom-10 left-1/2 h-40 w-[120%] -translate-x-1/2 rounded-full bg-primary/40 blur-3xl" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
              title="Présentation de Blue"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </DialogContent>
      </Dialog>
      <motion.div
        className="absolute -bottom-6 -right-6 rounded-xl bg-primary p-6 text-primary-foreground shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
      >
        <div className="font-sans text-3xl font-bold">16+</div>
        <div className="text-sm opacity-90">Années d'expérience</div>
      </motion.div>
    </motion.div>
  )
}
