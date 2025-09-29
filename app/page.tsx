import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Stats } from "@/components/stats"
import { Payment } from "@/components/payment"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Stats />
      <Payment />
      <Contact />
      <Footer />
    </main>
  )
}
