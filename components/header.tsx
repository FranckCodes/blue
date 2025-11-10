"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, MapPin, X, Moon, Sun, Languages } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "@/components/theme-provider"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <motion.div
        className="bg-primary text-primary-foreground py-2"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href="tel:+243000000000" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-4 w-4" />
                <span>+243 000 000 000</span>
              </a>
              <a href="mailto:contact@blue.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-4 w-4" />
                <span>contact@blue.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Kinshasa, {language === "fr" ? "RDC" : "DRC"}</span>
              </div>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-between h-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/blue-logo.svg"
                alt="Logo de Blue"
                width={32}
                height={32}
                priority
                className="h-8 w-8"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-sans font-bold text-xl">Blue</span>
                <span className="text-xs text-muted-foreground uppercase tracking-[0.18em]">
                  innove and change
                </span>
              </div>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: t.nav.home, href: "/" },
              { label: t.nav.services, href: "/services" },
              { label: t.nav.about, href: "/about" },
              { label: t.nav.portfolio, href: "/portfolio" },
              { label: t.nav.payment, href: "/payment" },
              { label: t.nav.contact, href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                <Link href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="p-2 rounded-lg hover:bg-secondary transition-colors flex items-center gap-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Languages className="h-5 w-5" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </motion.button>

            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.85 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 }}>
              <Button className="font-sans">{t.nav.getQuote}</Button>
            </motion.div>
          </div>
        </motion.div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden py-4 border-t overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="flex flex-col gap-4"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {[
                  { label: t.nav.home, href: "/" },
                  { label: t.nav.services, href: "/services" },
                  { label: t.nav.about, href: "/about" },
                  { label: t.nav.portfolio, href: "/portfolio" },
                  { label: t.nav.payment, href: "/payment" },
                  { label: t.nav.contact, href: "/contact" },
                ].map((item) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="text-sm font-medium hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-2"
                >
                  <button
                    onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Languages className="h-4 w-4" />
                    <span>{language === "fr" ? "English" : "Français"}</span>
                  </button>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Button className="font-sans w-full">{t.nav.getQuote}</Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
