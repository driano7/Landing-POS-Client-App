import { CryptoComparison } from "@/components/sections/crypto-comparison"
import { FAQ } from "@/components/sections/faq"
import { HowCryptoWorks } from "@/components/sections/how-crypto-works"
import { Hero } from "@/components/sections/hero"
import { Pricing } from "@/components/sections/pricing"
import { ProductModules } from "@/components/sections/product-modules"
import { Security } from "@/components/sections/security"
import { Cofepris } from "@/components/sections/cofepris"
import { QRFlows } from "@/components/sections/qr-flows"
import { WhyComplete } from "@/components/sections/why-complete"
import { Testimonials } from "@/components/sections/testimonials"
import FinalCTA from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"
import TrustBadges from "@/components/sections/trust-badges"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBadges />
      <WhyComplete />
      <HowCryptoWorks />
      <CryptoComparison />
      <ProductModules />
      <Pricing />
      <Testimonials />
      <Cofepris />
      <Security />
      <QRFlows />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
