import { Hero } from "@/components/sections/hero"
import { ProductModules } from "@/components/sections/product-modules"
import { Pricing } from "@/components/sections/pricing"
import { Security } from "@/components/sections/security"
import { Cofepris } from "@/components/sections/cofepris"
import { QRFlows } from "@/components/sections/qr-flows"
import { WhyComplete } from "@/components/sections/why-complete"
import { POCs } from "@/components/sections/pocs"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductModules />
      <Pricing />
      <Security />
      <Cofepris />
      <QRFlows />
      <WhyComplete />
      <POCs />
      <Footer />
    </main>
  )
}
