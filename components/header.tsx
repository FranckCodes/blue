"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone, Mail, MapPin, X } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                <span>Kinshasa, RDC</span>
              </div>
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
            className="flex items-center gap-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-sans font-bold text-xl">B</span>
            </div>
            <span className="font-sans font-bold text-xl">Blue</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {["Accueil", "Services", "À propos", "Portfolio", "Paiement", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace("à propos", "a-propos")}`}
                className="text-sm font-medium hover:text-primary transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.05 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button className="font-sans">Demander un devis</Button>
          </motion.div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
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
                {["Accueil", "Services", "À propos", "Portfolio", "Paiement", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace("à propos", "a-propos")}`}
                    className="text-sm font-medium hover:text-primary transition-colors"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Button className="font-sans w-full">Demander un devis</Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
