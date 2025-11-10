import { Header } from "@/components/header"
import { Payment } from "@/components/payment"
import { Footer } from "@/components/footer"

export default function PaymentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Payment />
      <Footer />
    </main>
  )
}

