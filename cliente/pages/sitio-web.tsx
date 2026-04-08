"use client"

/* Titularidad del cliente: este archivo contiene la composición y el contenido del sitio de Donovan Riaño.
 * Las bases importadas desde `agency/` y `terceros/` conservan su licencia o cesión original.
 */
import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Globe, Palette, MenuSquare, MapPin, Sparkles, ArrowRight } from "lucide-react"

import { Navigation } from "@/agency/components/sections/navigation"
import { Footer } from "@/agency/components/sections/footer"
import { Badge } from "@/agency/components/ui/badge"
import { Button } from "@/agency/components/ui/button"
import { Card } from "@/agency/components/ui/card"
import { WhatsAppCTAButton } from "@/terceros/components/ui/whatsapp-cta"
import { useLocale } from "@/agency/components/locale-provider"

/* Capa web del cliente: copy, alcance y dominios configurables viven aquí.
 * El diseño visual es reusable; la oferta y los textos son del sitio del cliente.
 */
type IncludeItem = {
  icon: LucideIcon
  title: string
  text: string
  highlightedText?: string
  note?: string
}

const copyByLocale = {
  es: {
    badge: "🌐 Sitio web profesional",
    title: "Tu sitio web profesional incluido",
    description: "Landing moderna para tu restaurante, con menús dinámicos, colores y tipografía de tu marca.",
    includesTitle: "Qué incluye",
    websiteFunctionsTitle: "Funciones clave de la capa web",
    moreThanRestaurantsTitle: "Más que restaurantes",
    moreThanRestaurantsText: "También construimos páginas web profesionales para cualquier negocio o persona, totalmente a medida.",
    cta: "Hablar por WhatsApp",
    includeList: [
      { icon: Sparkles, title: "Diseño moderno", text: "Landing profesional con animaciones suaves y enfoque en conversión para tu restaurante." },
      { icon: MenuSquare, title: "Menú dinámico", text: "Categorías, fotos y precios actualizables para mantener tu oferta siempre al día." },
      { icon: MapPin, title: "Secciones clave", text: "Historia del lugar, horarios, ubicación y contenido útil para que te encuentren más rápido." },
      { icon: Globe, title: "Dominio configurable", text: "Puedes conectar dominio personalizado;", highlightedText: "su costo depende de proveedores externos de dominio/hosting.", note: "El costo del dominio personalizable es a cotizar." },
    ],
    websiteFunctions: [
      "UI/UX premium con colores, tipografías y bloques alineados a tu marca.",
      "Menú actualizado con categorías, fotos y precios para reducir dudas del cliente.",
      "Secciones de historia, horarios, ubicación y contacto para convertir visitas en reservas.",
      "Páginas promocionales para campañas, paquetes o eventos especiales.",
    ],
  },
  en: {
    badge: "🌐 Professional website",
    title: "Your professional website included",
    description: "A modern landing page for your restaurant, with dynamic menus, colors, and typography from your brand.",
    includesTitle: "What it includes",
    websiteFunctionsTitle: "Key website-layer functions",
    moreThanRestaurantsTitle: "More than restaurants",
    moreThanRestaurantsText: "We also build professional websites for any business or person, fully custom.",
    cta: "Talk on WhatsApp",
    includeList: [
      { icon: Sparkles, title: "Modern design", text: "Professional landing page with smooth animations and conversion focus for your restaurant." },
      { icon: MenuSquare, title: "Dynamic menu", text: "Categories, photos, and prices you can update to keep your offer current." },
      { icon: MapPin, title: "Key sections", text: "Story, hours, location, and useful content so customers find you faster." },
      { icon: Globe, title: "Configurable domain", text: "You can connect a custom domain;", highlightedText: "its cost depends on external domain/hosting providers.", note: "The cost of a custom domain is quoted separately." },
    ],
    websiteFunctions: [
      "Premium UI/UX with colors, typography, and blocks aligned to your brand.",
      "Updated menu with categories, photos, and prices to reduce customer doubt.",
      "Story, hours, location, and contact sections to turn visits into bookings.",
      "Promotional pages for campaigns, packages, or special events.",
    ],
  },
  pt: {
    badge: "🌐 Site profissional",
    title: "Seu site profissional incluído",
    description: "Uma landing moderna para o seu restaurante, com menu dinâmico, cores e tipografia da sua marca.",
    includesTitle: "O que inclui",
    websiteFunctionsTitle: "Funções principais da camada web",
    moreThanRestaurantsTitle: "Mais do que restaurantes",
    moreThanRestaurantsText: "Também criamos sites profissionais para qualquer negócio ou pessoa, totalmente sob medida.",
    cta: "Falar no WhatsApp",
    includeList: [
      { icon: Sparkles, title: "Design moderno", text: "Landing profissional com animações suaves e foco em conversão para o seu restaurante." },
      { icon: MenuSquare, title: "Menu dinâmico", text: "Categorias, fotos e preços atualizáveis para manter sua oferta sempre em dia." },
      { icon: MapPin, title: "Seções principais", text: "História, horários, localização e conteúdo útil para encontrarem você mais rápido." },
      { icon: Globe, title: "Domínio configurável", text: "Você pode conectar um domínio personalizado;", highlightedText: "o custo depende de provedores externos de domínio/hosting.", note: "O custo do domínio personalizável é orçado à parte." },
    ],
    websiteFunctions: [
      "UI/UX premium com cores, tipografia e blocos alinhados à sua marca.",
      "Menu atualizado com categorias, fotos e preços para reduzir dúvidas do cliente.",
      "Seções de história, horários, localização e contato para converter visitas em reservas.",
      "Páginas promocionais para campanhas, pacotes ou eventos especiais.",
    ],
  },
  fr: {
    badge: "🌐 Site web professionnel",
    title: "Votre site web professionnel inclus",
    description: "Une landing moderne pour votre restaurant, avec menu dynamique, couleurs et typographie de votre marque.",
    includesTitle: "Ce qui est inclus",
    websiteFunctionsTitle: "Fonctions clés de la couche web",
    moreThanRestaurantsTitle: "Plus que des restaurants",
    moreThanRestaurantsText: "Nous créons aussi des sites web professionnels pour toute entreprise ou personne, entièrement sur mesure.",
    cta: "Parler sur WhatsApp",
    includeList: [
      { icon: Sparkles, title: "Design moderne", text: "Landing professionnelle avec animations fluides et focus conversion pour votre restaurant." },
      { icon: MenuSquare, title: "Menu dynamique", text: "Catégories, photos et prix modifiables pour garder votre offre à jour." },
      { icon: MapPin, title: "Sections clés", text: "Histoire, horaires, emplacement et contenu utile pour vous trouver plus vite." },
      { icon: Globe, title: "Domaine configurable", text: "Vous pouvez connecter un domaine personnalisé;", highlightedText: "son coût dépend de fournisseurs externes de domaine/hébergement.", note: "Le coût du domaine personnalisé est chiffré séparément." },
    ],
    websiteFunctions: [
      "UI/UX premium avec couleurs, typographies et blocs alignés à votre marque.",
      "Menu à jour avec catégories, photos et prix pour réduire les doutes du client.",
      "Sections histoire, horaires, emplacement et contact pour convertir les visites en réservations.",
      "Pages promotionnelles pour campagnes, packs ou événements spéciaux.",
    ],
  },
} as const

export default function SitioWebPage() {
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl"
          >
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">{copy.badge}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">{copy.title}</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">{copy.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          {copy.includesTitle}
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {copy.includeList.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.text}{" "}
                    {item.highlightedText && (
                      <span className="underline underline-offset-2 decoration-primary/70">{item.highlightedText}</span>
                    )}
                  </p>
                  {item.note && <p className="text-xs text-muted-foreground mt-2">{item.note}</p>}
                </Card>
              </motion.div>
            )
          })}
        </div>

          <Card className="mt-5 p-5 border border-border bg-card/70">
          <h3 className="text-lg font-semibold mb-3">{copy.websiteFunctionsTitle}</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {copy.websiteFunctions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="p-6 md:p-8 border-2 border-border bg-card/85">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">{copy.moreThanRestaurantsTitle}</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">{copy.moreThanRestaurantsText}</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20mi%20sitio%20web%20profesional%20con%20Xoco%20Suite"
                label={copy.cta}
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  Ver planes y precios <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
