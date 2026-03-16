import { Hero } from "@/components/sections/hero"
import { ProductModules } from "@/components/sections/product-modules"
import { Pricing } from "@/components/sections/pricing"
import { HowWeHelp } from "@/components/sections/how-we-help"
import { WhyComplete } from "@/components/sections/why-complete"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowWeHelp />
      <WhyComplete />
      <ProductModules />
      <Pricing />
      <Footer />
    </main>
  )
}
