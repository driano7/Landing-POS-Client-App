"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import Link from "next/link"
import { Card } from "@/agency/components/ui/card"
import { Button } from "@/agency/components/ui/button"
import { TypingText } from "@/agency/components/ui/typing-text"
import { CheckCircle2, Shield } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useLocale } from "@/agency/components/locale-provider"

/* Sección de argumento comercial reusable: comunica valor, pero el claim final debe estar aprobado por el cliente. */
const copyByLocale = {
  es: {
    badge: "Por qué Xoco Suite",
    title: "Una solución pensada para operar sin fricción",
    bullets: [
      "Evitas pagar 3 o 4 softwares distintos para POS, pedidos, sitio web, BI y pagos.",
      "Tienes todo en un solo lugar, con una vista unificada del negocio.",
      "Tus datos se protegen con cifrado y buenas prácticas tipo GDPR. 🔒",
      "Incluye panel sanitario y operación offline con sincronización al volver internet.",
    ],
    cta: "Ver planes y precios",
  },
  en: {
    badge: "Why Xoco Suite",
    title: "A solution designed to run without friction",
    bullets: [
      "Avoid paying for 3 or 4 separate tools for POS, orders, website, BI, and payments.",
      "Keep everything in one place with a unified view of the business.",
      "Protect your data with encryption and GDPR-style best practices. 🔒",
      "Includes a sanitary panel and offline operation with sync when internet returns.",
    ],
    cta: "See plans and pricing",
  },
  pt: {
    badge: "Por que Xoco Suite",
    title: "Uma solução pensada para operar sem atrito",
    bullets: [
      "Evite pagar por 3 ou 4 softwares diferentes para PDV, pedidos, site, BI e pagamentos.",
      "Tenha tudo em um só lugar, com uma visão unificada do negócio.",
      "Seus dados são protegidos com criptografia e boas práticas tipo GDPR. 🔒",
      "Inclui painel sanitário e operação offline com sincronização quando a internet voltar.",
    ],
    cta: "Ver planos e preços",
  },
  fr: {
    badge: "Pourquoi Xoco Suite",
    title: "Une solution conçue pour fonctionner sans friction",
    bullets: [
      "Évitez de payer 3 ou 4 logiciels séparés pour le POS, les commandes, le site, la BI et les paiements.",
      "Tout est au même endroit, avec une vue unifiée de l’activité.",
      "Vos données sont protégées par chiffrement et bonnes pratiques type GDPR. 🔒",
      "Inclut un panneau sanitaire et un fonctionnement hors ligne avec synchronisation au retour d’internet.",
    ],
    cta: "Voir les offres",
  },
} as const

export function WhyComplete() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

  return (
    <section id="seguridad" className="py-16 md:py-24 bg-muted/30">
      <div id="cofepris" className="relative -top-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Shield className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary">{copy.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            <TypingText text={copy.title} />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Card className="max-w-4xl mx-auto p-6 md:p-8 border-2 border-border bg-card/85 backdrop-blur-sm">
            <ul className="space-y-4">
              {copy.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm md:text-base text-foreground/90">{bullet}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex justify-center">
              <Button asChild variant="outline" className="border-primary/35 text-primary hover:bg-primary/10 rounded-xl font-semibold">
                <Link href="/prices">{copy.cta}</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
