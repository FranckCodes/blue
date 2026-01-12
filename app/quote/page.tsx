import { Quote } from "@/components/quote"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Demander un devis - Blue",
  description: "Demandez un devis gratuit pour votre projet digital. Notre équipe vous répondra sous 24h avec une estimation détaillée.",
}

export default function QuotePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Quote />
      <Footer />
    </main>
  )
}
