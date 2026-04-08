"use client"

/* Titularidad del cliente: este archivo contiene la composición y el contenido del sitio de Donovan Riaño.
 * Las bases importadas desde `agency/` y `terceros/` conservan su licencia o cesión original.
 */
import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, ShieldCheck, LockKeyhole, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

import { Navigation } from "@/agency/components/sections/navigation"
import { Footer } from "@/agency/components/sections/footer"
import { AppClientePanel } from "@/agency/components/sections/app-cliente-panel"
import { useLocale } from "@/agency/components/locale-provider"
import { Badge } from "@/agency/components/ui/badge"
import { Button } from "@/agency/components/ui/button"
import { Card } from "@/agency/components/ui/card"
import { WhatsAppCTAButton } from "@/terceros/components/ui/whatsapp-cta"

/* Página cliente: mezcla contenido comercial del cliente con shell reusable del producto.
 * Las afirmaciones sobre privacidad y cifrado deben verificarse contra la implementación real.
 */
const copyByLocale = {
  es: {
    badge: "📱 App Cliente",
    title: "App cliente sin descargar nada",
    description: "Reservas, pedidos, lealtad y métricas desde el navegador o QR.",
    experienceTitle: "Experiencia del cliente",
    functionsTitle: "Funciones del módulo App Cliente",
    growthTitle: "Relación y crecimiento con clientes",
    dataTitle: "Datos y privacidad",
    cta: "Hablar por WhatsApp",
    appFunctions: [
      "Pedidos online con seguimiento en tiempo real desde el celular.",
      "Reservaciones con QR de confirmación y gestión rápida.",
      "Métricas de consumo por cliente: frecuencia, ticket y hábitos.",
      "Descarga de datos personales y gestión ética bajo principios tipo GDPR.",
      "Soporte para envíos propios y extensiones futuras de entrega.",
    ],
    growthFunctions: [
      "Campañas segmentadas por hábitos de consumo.",
      "Promociones de lealtad y mensajes por canal digital.",
      "Estadísticas de apertura y conversión para medir resultados.",
    ],
  },
  en: {
    badge: "📱 Client App",
    title: "Client app without downloads",
    description: "Reservations, orders, loyalty, and analytics from the browser or QR.",
    experienceTitle: "Customer experience",
    functionsTitle: "Client App module features",
    growthTitle: "Customer relationship and growth",
    dataTitle: "Data and privacy",
    cta: "Talk on WhatsApp",
    appFunctions: [
      "Online orders with real-time tracking from the phone.",
      "Reservations with QR confirmation and quick management.",
      "Customer consumption analytics: frequency, ticket, and habits.",
      "Personal data export and ethical handling under GDPR-style principles.",
      "Support for own delivery and future delivery extensions.",
    ],
    growthFunctions: [
      "Campaigns segmented by consumption habits.",
      "Loyalty promotions and digital channel messaging.",
      "Open and conversion stats to measure results.",
    ],
  },
  pt: {
    badge: "📱 App do cliente",
    title: "App do cliente sem download",
    description: "Reservas, pedidos, fidelidade e métricas pelo navegador ou QR.",
    experienceTitle: "Experiência do cliente",
    functionsTitle: "Funções do módulo App do cliente",
    growthTitle: "Relacionamento e crescimento com clientes",
    dataTitle: "Dados e privacidade",
    cta: "Falar no WhatsApp",
    appFunctions: [
      "Pedidos online com acompanhamento em tempo real pelo celular.",
      "Reservas com confirmação por QR e gestão rápida.",
      "Métricas de consumo por cliente: frequência, ticket e hábitos.",
      "Exportação de dados pessoais e tratamento ético com princípios tipo GDPR.",
      "Suporte para entregas próprias e extensões futuras.",
    ],
    growthFunctions: [
      "Campanhas segmentadas por hábitos de consumo.",
      "Promoções de fidelidade e mensagens por canal digital.",
      "Estatísticas de abertura e conversão para medir resultados.",
    ],
  },
  fr: {
    badge: "📱 App client",
    title: "App client sans téléchargement",
    description: "Réservations, commandes, fidélité et métriques depuis le navigateur ou le QR.",
    experienceTitle: "Expérience client",
    functionsTitle: "Fonctions du module App client",
    growthTitle: "Relation client et croissance",
    dataTitle: "Données et confidentialité",
    cta: "Parler sur WhatsApp",
    appFunctions: [
      "Commandes en ligne avec suivi en temps réel depuis le téléphone.",
      "Réservations avec confirmation QR et gestion rapide.",
      "Métriques de consommation client: fréquence, ticket et habitudes.",
      "Export des données personnelles et traitement éthique selon des principes type GDPR.",
      "Support des livraisons propres et futures extensions de livraison.",
    ],
    growthFunctions: [
      "Campagnes segmentées par habitudes de consommation.",
      "Promotions de fidélité et messages par canal digital.",
      "Statistiques d’ouverture et de conversion pour mesurer les résultats.",
    ],
  },
} as const

export default function AppClientePage() {
  const { locale } = useLocale()
  const copy = copyByLocale[locale]
  const [highlightPrivacy, setHighlightPrivacy] = useState(false)

  useEffect(() => {
    const shouldHighlight = window.location.hash === "#datos-privacidad"
    if (!shouldHighlight) {
      return
    }

    setHighlightPrivacy(true)
    const timeout = window.setTimeout(() => setHighlightPrivacy(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [])

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
          {copy.experienceTitle}
        </motion.h2>
        <AppClientePanel />

        <div className="grid gap-4 lg:grid-cols-2 mt-5">
          <Card className="p-5 border border-border bg-card/70">
            <h3 className="text-lg font-semibold mb-3">{copy.functionsTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {copy.appFunctions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5 border border-border bg-card/70">
            <h3 className="text-lg font-semibold mb-3">{copy.growthTitle}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {copy.growthFunctions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <div id="datos-privacidad" className="flex items-center gap-2 mb-4 scroll-mt-24">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">{copy.dataTitle}</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                animate={
                  highlightPrivacy
                    ? { scale: [1, 1.03, 1], y: [0, -4, 0] }
                    : { scale: 1, y: 0 }
                }
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <Card
                  className={`p-5 border bg-card/85 hover:border-primary/35 transition-colors shadow-sm dark:shadow-primary/10 ${
                    highlightPrivacy ? "border-primary/45 ring-1 ring-primary/20 shadow-[0_0_0_1px_rgba(122,78,46,0.12)]" : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <LockKeyhole className="h-4 w-4 text-primary" />
                    <h3 className="text-base font-semibold">Cifrado AES-GCM</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    AES-GCM actúa como una bóveda digital para cada mensaje. Cada dato se sella con una clave única antes
                    de enviarse, y solo el receptor con la clave correcta puede abrirlo. <strong>Es comunicación cifrada
                    de grado militar para que nadie más pueda leer la información.</strong>
                  </p>
                </Card>
              </motion.div>
              <motion.div
                animate={
                  highlightPrivacy
                    ? { scale: [1, 1.03, 1], y: [0, -4, 0] }
                    : { scale: 1, y: 0 }
                }
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
              >
                <Card
                  className={`p-5 border bg-card/85 hover:border-primary/35 transition-colors shadow-sm dark:shadow-primary/10 ${
                    highlightPrivacy ? "border-primary/45 ring-1 ring-primary/20 shadow-[0_0_0_1px_rgba(122,78,46,0.12)]" : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    <h3 className="text-base font-semibold">Principios tipo GDPR</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Los principios tipo GDPR son prácticas usadas en Europa para el manejo ético de datos de usuarios.
                    Esto implica pedir consentimiento claro, usar la información solo para fines legítimos, dar
                    transparencia sobre su uso y facilitar el control de datos por parte del cliente.
                  </p>
                </Card>
              </motion.div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20conocer%20la%20App%20Cliente%20de%20Xoco%20Suite"
                label={copy.cta}
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  Ver planes y precios <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
