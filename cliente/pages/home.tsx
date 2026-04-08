/* Titularidad del cliente: este archivo contiene la composición y el contenido del sitio de Donovan Riaño.
 * Las bases importadas desde `agency/` y `terceros/` conservan su licencia o cesión original.
 */
import type { Metadata } from "next"
import { Hero } from "@/agency/components/sections/hero"
import { Seo } from "@/agency/components/seo/Seo"
import { buildBreadcrumbList } from "@/agency/lib/seo/entities"
import { buildPageMetadata } from "@/agency/lib/seo/buildMetadata"
import { seoConfig } from "@/agency/lib/seo/config"
import { ProductModules } from "@/agency/components/sections/product-modules"
import { Pricing } from "@/agency/components/sections/pricing"
import { HowWeHelp } from "@/agency/components/sections/how-we-help"
import { WhyComplete } from "@/agency/components/sections/why-complete"
import { Footer } from "@/agency/components/sections/footer"
import { Navigation } from "@/agency/components/sections/navigation"

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
