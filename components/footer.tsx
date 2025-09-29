import { Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-sans font-bold text-xl">B</span>
              </div>
              <span className="font-sans font-bold text-xl">Blue</span>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Votre partenaire en transformation digitale et solutions numériques
            </p>
          </div>

          <div>
            <h3 className="font-sans font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Transformation digitale
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Création de sites web
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-opacity">
                  Solutions numériques
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold mb-4">Entreprise</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="#a-propos" className="hover:opacity-100 transition-opacity">
                  À propos
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:opacity-100 transition-opacity">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Blue. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
