import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Seo } from "@/components/seo/Seo"
import { buildBreadcrumbList } from "@/lib/seo/entities"
import { buildPageMetadata } from "@/lib/seo/buildMetadata"
import { seoConfig } from "@/lib/seo/config"
import { ProductModules } from "@/components/sections/product-modules"
import { Pricing } from "@/components/sections/pricing"
import { HowWeHelp } from "@/components/sections/how-we-help"
import { WhyComplete } from "@/components/sections/why-complete"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"

export function generateMetadata(): Metadata {
  return buildPageMetadata(seoConfig, {
    title: seoConfig.site.defaultTitle,
    description: seoConfig.site.defaultDescription,
    canonicalPath: "/",
  })
}

export default function Home() {
  const entities = [
    buildBreadcrumbList([{ name: "Inicio", path: "/" }], seoConfig),
  ]

  return (
    <main className="min-h-screen">
      <Seo entities={entities} />
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
