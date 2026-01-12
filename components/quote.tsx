"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, Phone, Clock, CheckCircle2, Send, Sparkles } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

export function Quote() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Réinitialiser après 3 secondes
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="quote" className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span>{t.quote.badge}</span>
          </div>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl mb-4 text-balance">
            {t.quote.title}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t.quote.subtitle}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,380px)] xl:gap-12 max-w-6xl mx-auto">
          {/* Formulaire principal */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-2 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Détails de votre projet</CardTitle>
                <CardDescription>
                  Toutes les informations sont confidentielles et ne seront jamais partagées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Informations personnelles */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      {t.quote.form.personalInfo}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.quote.form.name} *</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder={t.quote.form.namePlaceholder}
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t.quote.form.email} *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t.quote.form.emailPlaceholder}
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.quote.form.phone}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder={t.quote.form.phonePlaceholder}
                          value={formData.phone}
                          onChange={(e) => handleChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">{t.quote.form.company}</Label>
                        <Input
                          id="company"
                          type="text"
                          placeholder={t.quote.form.companyPlaceholder}
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Détails du projet */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-primary" />
                      {t.quote.form.projectDetails}
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="projectType">{t.quote.form.projectType} *</Label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleChange("projectType", value)}
                          required
                        >
                          <SelectTrigger id="projectType">
                            <SelectValue placeholder={t.quote.form.projectTypePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {t.quote.form.projectTypes.map((type: string) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">{t.quote.form.budget} *</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleChange("budget", value)}
                          required
                        >
                          <SelectTrigger id="budget">
                            <SelectValue placeholder={t.quote.form.budgetPlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {t.quote.form.budgets.map((budget: string) => (
                              <SelectItem key={budget} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">{t.quote.form.timeline} *</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleChange("timeline", value)}
                          required
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder={t.quote.form.timelinePlaceholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {t.quote.form.timelines.map((timeline: string) => (
                              <SelectItem key={timeline} value={timeline}>
                                {timeline}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">{t.quote.form.description} *</Label>
                      <Textarea
                        id="description"
                        placeholder={t.quote.form.descriptionPlaceholder}
                        value={formData.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>
                  </div>

                  {/* Bouton Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSuccess ? (
                      <>
                        <CheckCircle2 className="mr-2" />
                        {t.quote.form.success}
                      </>
                    ) : isSubmitting ? (
                      t.quote.form.sending
                    ) : (
                      <>
                        {t.quote.form.submit}
                        <Send />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Contact Info */}
            <Card className="border-2 bg-gradient-to-br from-primary/5 via-background to-background">
              <CardHeader>
                <CardTitle className="text-xl">{t.quote.contactInfo.title}</CardTitle>
                <CardDescription>{t.quote.contactInfo.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${t.quote.contactInfo.email}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.quote.contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a
                      href={`tel:${t.quote.contactInfo.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t.quote.contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Disponibilité</p>
                    <p className="text-sm text-muted-foreground">{t.quote.contactInfo.availability}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pourquoi nous choisir */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl">{t.quote.whyChooseUs.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {t.quote.whyChooseUs.points.map((point: any, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium">{point.title}</p>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
