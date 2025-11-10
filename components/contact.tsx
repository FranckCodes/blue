"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>📞 Contact</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
            Vous avez un projet ? Parlons-en !
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Remplissez le formulaire et notre équipe vous répondra rapidement
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(280px,360px)_minmax(0,1fr)] xl:gap-12 max-w-6xl mx-auto items-stretch">
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
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
            <Card className="flex h-full flex-col border-2 bg-gradient-to-br from-primary/10 via-background to-background shadow-lg">
              <CardHeader className="space-y-3">
                <span className="px-3 py-1 text-xs uppercase tracking-wide font-semibold bg-primary/20 text-primary rounded-full w-fit">
                  Contactez-nous
                </span>
                <CardTitle className="font-heading text-2xl leading-tight">
                  Restons en contact pour votre prochaine transformation digitale
                </CardTitle>
                <CardDescription className="text-base">
                  Une équipe dédiée répond aux projets du lundi au samedi, 9h-18h (UTC+1). Choisissez le canal qui vous
                  convient le mieux.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "contact@blue.com",
                    href: "mailto:contact@blue.com",
                  },
                  {
                    icon: Phone,
                    title: "Téléphone",
                    content: "+243 000 000 000",
                    href: "tel:+243000000000",
                  },
                  {
                    icon: MapPin,
                    title: "Adresse",
                    content: "Kinshasa, RDC",
                    href: "https://maps.app.goo.gl/2uLkC6Cd1jGZe6gF6",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: -30 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-background/80 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-sans text-sm uppercase tracking-wide text-muted-foreground">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg font-semibold transition-colors hover:text-primary">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </CardContent>
              <CardFooter className="mt-auto flex flex-col gap-3 border-t border-primary/10 bg-background/70 p-6">
                <p className="text-sm text-muted-foreground">
                  Besoin d’un rendez-vous rapide ? Envoyez-nous votre message et nous planifierons un appel avec un
                  consultant senior.
                </p>
                <div className="flex w-full flex-wrap gap-3">
                  <Button asChild variant="default" className="flex-1 min-w-[180px] font-sans">
                    <a href="mailto:contact@blue.com">Écrire un email</a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 min-w-[180px] border-primary/40 text-primary">
                    <a href="tel:+243000000000">Appeler maintenant</a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Card className="flex h-full flex-col border-2 bg-card/80 backdrop-blur-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="font-sans text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>Nous vous répondrons dans les plus brefs délais</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                    >
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom complet
                      </label>
                      <Input
                        id="name"
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="phone" className="text-sm font-medium">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+243 000 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Décrivez votre projet..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button type="submit" size="lg" className="w-full font-sans group">
                      Envoyer le message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-6xl mx-auto"
        >
          <Card className="overflow-hidden border-2 bg-card/80 backdrop-blur-sm">
            <CardHeader className="space-y-2">
              <CardTitle className="font-heading text-2xl">Nous situer</CardTitle>
              <CardDescription>
                Retrouvez-nous dans le cœur de Kinshasa. Nous accueillons les rendez-vous physiques sur demande.
              </CardDescription>
            </CardHeader>
            <div className="aspect-[16/6] w-full">
              <iframe
                title="Localisation Blue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63554.37157411652!2d15.266293039040206!3d-4.331801932118651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a310e42fa0b3b%3A0x2ad6de3449d9b634!2sKinshasa!5e0!3m2!1sfr!2scd!4v1731048000000!5m2!1sfr!2scd"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
