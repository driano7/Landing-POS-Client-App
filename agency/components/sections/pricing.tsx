"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import Link from "next/link"
import { Card } from "@/agency/components/ui/card"
import { Button } from "@/agency/components/ui/button"
import { WhatsAppCTAButton } from "@/terceros/components/ui/whatsapp-cta"
import { TypingText } from "@/agency/components/ui/typing-text"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLocale } from "@/agency/components/locale-provider"

/* Tabla de precios y soporte.
 * La composición visual es reusable; los importes, condiciones y promociones son contenido contractual del cliente.
 */
const copyByLocale = {
  es: {
    title: "Planes para cada tipo de restaurante",
    description:
      "Elige el plan que mejor se adapta a tu operación, desde un plan de entrada para probar hasta un plan completo para cadenas con múltiples sucursales.",
    cta: "Ver detalle de planes",
    whatsapp: "Hablar por WhatsApp",
    note: "Nota: actualización de software cada 3 meses ($199 MXN por actualización) y capacitación por separado ($999 MXN presencial / $699 MXN virtual).",
    support: "Te acompañamos por WhatsApp en la implementación y en el día a día, sin tickets complicados.",
    plans: [
      { name: "Starter", price: "$199", subtitle: "Para probar" },
      { name: "Emprende", price: "$499", subtitle: "1 sucursal" },
      { name: "Escala", price: "$899", subtitle: "Más operación", featured: true },
      { name: "Cadena", price: "$1,499", subtitle: "3+ sucursales" },
    ],
  },
  en: {
    title: "Plans for every type of restaurant",
    description:
      "Choose the plan that fits your operation best, from an entry plan to test things out to a full plan for multi-location chains.",
    cta: "See plan details",
    whatsapp: "Talk on WhatsApp",
    note: "Note: software updates every 3 months ($199 MXN per update) and training sold separately ($999 MXN in person / $699 MXN virtual).",
    support: "We support you on WhatsApp during implementation and day-to-day use, without complicated tickets.",
    plans: [
      { name: "Starter", price: "$199", subtitle: "To test" },
      { name: "Emprende", price: "$499", subtitle: "1 location" },
      { name: "Escala", price: "$899", subtitle: "More operations", featured: true },
      { name: "Cadena", price: "$1,499", subtitle: "3+ locations" },
    ],
  },
  pt: {
    title: "Planos para cada tipo de restaurante",
    description:
      "Escolha o plano que melhor se adapta à sua operação, desde um plano inicial para testar até um plano completo para redes com várias unidades.",
    cta: "Ver detalhes dos planos",
    whatsapp: "Falar no WhatsApp",
    note: "Observação: atualização de software a cada 3 meses ($199 MXN por atualização) e treinamento à parte ($999 MXN presencial / $699 MXN virtual).",
    support: "Apoiamos você no WhatsApp na implementação e no dia a dia, sem chamados complicados.",
    plans: [
      { name: "Starter", price: "$199", subtitle: "Para testar" },
      { name: "Emprende", price: "$499", subtitle: "1 unidade" },
      { name: "Escala", price: "$899", subtitle: "Mais operação", featured: true },
      { name: "Cadena", price: "$1,499", subtitle: "3+ unidades" },
    ],
  },
  fr: {
    title: "Des offres pour chaque type de restaurant",
    description:
      "Choisissez l’offre qui convient le mieux à votre activité, d’une offre d’entrée pour tester jusqu’à une offre complète pour les chaînes multi-sites.",
    cta: "Voir le détail des offres",
    whatsapp: "Parler sur WhatsApp",
    note: "Note: mises à jour logicielles tous les 3 mois ($199 MXN par mise à jour) et formation vendue séparément ($999 MXN en présentiel / $699 MXN virtuel).",
    support: "Nous vous accompagnons sur WhatsApp pendant l’implémentation et au quotidien, sans tickets compliqués.",
    plans: [
      { name: "Starter", price: "$199", subtitle: "Pour tester" },
      { name: "Emprende", price: "$499", subtitle: "1 site" },
      { name: "Escala", price: "$899", subtitle: "Plus d’opérations", featured: true },
      { name: "Cadena", price: "$1,499", subtitle: "3+ sites" },
    ],
  },
} as const

export function Pricing() {
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

  return (
    <section id="planes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
          <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              <TypingText text={copy.title} />
            </h2>
          <p className="text-base md:text-lg text-muted-foreground">{copy.description}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {copy.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.38, delay: index * 0.12 }}
              whileHover={plan.featured ? { y: -7, scale: 1.02 } : { y: -4 }}
            >
              <Card
                className={`relative overflow-hidden p-4 text-center border transition-all ${
                  plan.featured
                    ? "border-2 border-primary/60 bg-gradient-to-b from-primary/12 via-card to-card shadow-[0_18px_45px_rgba(122,78,46,0.18)] ring-1 ring-primary/20 dark:border-primary/70 dark:from-primary/25 dark:via-[#221b17] dark:to-[#18120f] dark:shadow-[0_22px_60px_rgba(0,0,0,0.5)] dark:ring-primary/35"
                    : "border-border hover:border-primary/40 hover:shadow-md dark:hover:border-primary/30 dark:hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]"
                }`}
              >
                {plan.featured && (
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary/20 via-primary/8 to-transparent dark:from-primary/30 dark:via-primary/12 dark:to-transparent" />
                )}
                <div className="relative z-10">
                  {plan.featured ? (
                    <span className="mb-2 inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-primary dark:border-primary/60 dark:bg-primary/25 dark:text-primary-foreground">
                      Más elegido
                    </span>
                  ) : (
                    <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                  )}
                  {plan.featured && <p className="text-sm font-medium text-foreground">{plan.name}</p>}
                  <p className="text-2xl md:text-3xl font-bold text-foreground mt-1">{plan.price}</p>
                  <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
                  <p className="text-[11px] text-muted-foreground">MXN/mes</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl font-semibold">
            <Link href="/prices">
              {copy.cta} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <WhatsAppCTAButton
            href="https://wa.me/525512291607?text=Hola%2C%20quiero%20ayuda%20para%20elegir%20un%20plan%20de%20Xoco%20Suite"
            label={copy.whatsapp}
            className="font-semibold"
          />
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 max-w-4xl mx-auto">{copy.note}</p>

        <Card className="mt-6 p-4 md:p-5 border border-primary/25 bg-primary/10 max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-foreground text-center">{copy.support}</p>
        </Card>
      </div>
    </section>
  )
}
