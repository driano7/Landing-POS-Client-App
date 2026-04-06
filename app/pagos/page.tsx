"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CreditCard, Landmark, Coins, QrCode, HandCoins, Puzzle, TrendingUp, ArrowRight } from "lucide-react"

import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"
import { useLocale } from "@/components/locale-provider"

const copyByLocale = {
  es: {
    badge: "💳 Pagos con Blokko",
    title: "Cobros modernos con Blokko, sin complicarte.",
    description: "Acepta tarjetas, SPEI, PIX y cripto desde un solo flujo. Recibe pesos mexicanos al día siguiente.",
    whatSolves: "Qué resuelve Blokko en Xoco Suite",
    howIntegrates: "Cómo se integra",
    localCharge: "Cobro local en LATAM, sin fricción para tu cliente",
    finalTitle: "Conecta cobros modernos sin complicar tu operación",
    cta: "Hablar por WhatsApp",
    secondary: "Ver planes y precios",
  },
  en: {
    badge: "💳 Payments with Blokko",
    title: "Modern payments with Blokko, without the headache.",
    description: "Accept cards, SPEI, PIX, and crypto from one flow. Receive Mexican pesos the next day.",
    whatSolves: "What Blokko solves in Xoco Suite",
    howIntegrates: "How it integrates",
    localCharge: "Local collection in LATAM, frictionless for your customer",
    finalTitle: "Connect modern payments without complicating operations",
    cta: "Talk on WhatsApp",
    secondary: "See plans and pricing",
  },
  pt: {
    badge: "💳 Pagamentos com Blokko",
    title: "Cobranças modernas com Blokko, sem complicar.",
    description: "Aceite cartões, SPEI, PIX e cripto em um único fluxo. Receba pesos mexicanos no dia seguinte.",
    whatSolves: "O que o Blokko resolve no Xoco Suite",
    howIntegrates: "Como se integra",
    localCharge: "Cobrança local na LATAM, sem atrito para o cliente",
    finalTitle: "Conecte pagamentos modernos sem complicar a operação",
    cta: "Falar no WhatsApp",
    secondary: "Ver planos e preços",
  },
  fr: {
    badge: "💳 Paiements avec Blokko",
    title: "Paiements modernes avec Blokko, sans prise de tête.",
    description: "Acceptez cartes, SPEI, PIX et crypto via un seul flux. Recevez les pesos mexicains le lendemain.",
    whatSolves: "Ce que Blokko résout dans Xoco Suite",
    howIntegrates: "Comment cela s’intègre",
    localCharge: "Encaissement local en LATAM, sans friction pour votre client",
    finalTitle: "Connectez des paiements modernes sans compliquer l’opération",
    cta: "Parler sur WhatsApp",
    secondary: "Voir les offres et tarifs",
  },
} as const

export default function PagosPage() {
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

  const paymentWays = [
    { icon: CreditCard, label: locale === "es" ? "Tarjetas" : locale === "fr" ? "Cartes" : locale === "pt" ? "Cartões" : "Cards" },
    { icon: Landmark, label: locale === "es" ? "SPEI / PIX" : locale === "fr" ? "SPEI / PIX" : locale === "pt" ? "SPEI / PIX" : "SPEI / PIX" },
    { icon: Coins, label: locale === "es" ? "Cripto" : locale === "fr" ? "Crypto" : locale === "pt" ? "Cripto" : "Crypto" },
    { icon: QrCode, label: locale === "es" ? "QR digital" : locale === "fr" ? "QR numérique" : locale === "pt" ? "QR digital" : "Digital QR" },
  ]

  const blokkoFunctions = [
    locale === "es"
      ? "Acepta tarjetas, SPEI/CoDi y PIX desde el mismo flujo de cobro."
      : locale === "fr"
        ? "Accepte les cartes, SPEI/CoDi et PIX depuis le même flux d’encaissement."
        : locale === "pt"
          ? "Aceita cartões, SPEI/CoDi e PIX no mesmo fluxo de cobrança."
          : "Accept cards, SPEI/CoDi, and PIX from the same checkout flow.",
    locale === "es"
      ? "Soporta cobros en cripto y convierte para liquidar en moneda local."
      : locale === "fr"
        ? "Prend en charge les paiements crypto et convertit pour régler en devise locale."
        : locale === "pt"
          ? "Suporta cobranças em cripto e converte para liquidar na moeda local."
          : "Supports crypto payments and converts to settle in local currency.",
    locale === "es"
      ? "Pensado para LATAM, con operación simple para el equipo del restaurante."
      : locale === "fr"
        ? "Pensé pour l’Amérique latine, avec une opération simple pour l’équipe du restaurant."
        : locale === "pt"
          ? "Pensado para a LATAM, com operação simples para a equipe do restaurante."
          : "Built for LATAM, with simple operations for the restaurant team.",
    locale === "es"
      ? "Comisiones por transacción definidas por Blokko.io."
      : locale === "fr"
        ? "Commissions par transaction définies par Blokko.io."
        : locale === "pt"
          ? "Comissões por transação definidas pela Blokko.io."
          : "Per-transaction fees defined by Blokko.io.",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="max-w-4xl">
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">{copy.badge}</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">{copy.title}</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">{copy.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35 }} whileHover={{ y: -4 }}>
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <HandCoins className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">{copy.whatSolves}</h2>
              <p className="text-sm text-muted-foreground">
                {locale === "es"
                  ? "Te permite aceptar múltiples medios de pago en una sola operación. El restaurante recibe moneda local (por ejemplo MXN) sin preocuparse por volatilidad."
                  : locale === "fr"
                    ? "Vous permet d’accepter plusieurs moyens de paiement dans une seule opération. Le restaurant reçoit la devise locale sans se soucier de la volatilité."
                    : locale === "pt"
                      ? "Permite aceitar vários meios de pagamento em uma única operação. O restaurante recebe moeda local sem se preocupar com volatilidade."
                      : "Lets you accept multiple payment methods in one operation. The restaurant receives local currency without worrying about volatility."}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {paymentWays.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div key={item.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.25, delay: index * 0.05 }} whileHover={{ y: -2 }} className="rounded-lg border border-border bg-card/70 p-3 text-sm">
                      <Icon className="h-4 w-4 text-primary mb-1" />
                      <span className="text-foreground/90">{item.label}</span>
                    </motion.div>
                  )
                })}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {blokkoFunctions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: 0.06 }} whileHover={{ y: -4 }}>
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <Puzzle className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">{copy.howIntegrates}</h2>
              <p className="text-sm text-muted-foreground">
                {locale === "es"
                  ? "Se usa como parte del flujo de cobro dentro de Xoco Suite. Tu equipo sigue operando desde la misma plataforma sin cambiar su rutina."
                  : locale === "fr"
                    ? "Il s’utilise dans le flux d’encaissement de Xoco Suite. Votre équipe continue à travailler depuis la même plateforme sans changer ses habitudes."
                    : locale === "pt"
                      ? "Usa-se como parte do fluxo de cobrança dentro do Xoco Suite. Sua equipe continua operando na mesma plataforma sem mudar a rotina."
                      : "Used as part of the checkout flow inside Xoco Suite. Your team keeps working from the same platform without changing routines."}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                {locale === "es"
                  ? "Las comisiones y tarifas de procesamiento son definidas por Blokko, no por Xoco Suite."
                  : locale === "fr"
                    ? "Les commissions et frais de traitement sont définis par Blokko, pas par Xoco Suite."
                    : locale === "pt"
                      ? "As comissões e tarifas de processamento são definidas pela Blokko, não pelo Xoco Suite."
                      : "Processing fees and commissions are defined by Blokko, not by Xoco Suite."}
              </p>

              <div className="mt-5 rounded-xl border border-primary/25 bg-primary/10 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  {locale === "es" ? "En qué planes tiene más sentido" : locale === "fr" ? "Pour quels plans cela a le plus de sens" : locale === "pt" ? "Em quais planos faz mais sentido" : "Where it makes the most sense"}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {locale === "es"
                    ? "Esta integración suele aportar más valor en planes avanzados, especialmente cuando el volumen de cobros y la operación crecen."
                    : locale === "fr"
                      ? "Cette intégration apporte généralement plus de valeur sur les offres avancées, surtout quand le volume d’encaissement et l’opération grandissent."
                      : locale === "pt"
                        ? "Essa integração costuma agregar mais valor em planos avançados, especialmente quando o volume de cobranças e a operação crescem."
                        : "This integration usually adds more value in advanced plans, especially as payment volume and operations grow."}
                </p>
                <Link href="/prices" className="mt-2 inline-flex items-center text-sm text-primary font-medium hover:underline">
                  {copy.secondary}
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: 0.08 }} className="mt-4">
          <Card className="p-5 border border-primary/30 bg-primary/10">
            <h3 className="text-lg md:text-xl font-semibold mb-3">{copy.localCharge}</h3>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  {locale === "es"
                    ? "Soporte para medios locales: SPEI en México, PIX en Brasil, métodos de pago locales en Colombia, Perú y Chile, y wallets como Mercado Pago en Argentina."
                    : locale === "fr"
                      ? "Support des moyens locaux: SPEI au Mexique, PIX au Brésil, méthodes de paiement locales en Colombie, au Pérou et au Chili, et portefeuilles comme Mercado Pago en Argentine."
                      : locale === "pt"
                        ? "Suporte para meios locais: SPEI no México, PIX no Brasil, métodos de pagamento locais na Colômbia, Peru e Chile, e wallets como Mercado Pago na Argentina."
                        : "Support for local methods: SPEI in Mexico, PIX in Brazil, local payment methods in Colombia, Peru, and Chile, and wallets like Mercado Pago in Argentina."}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{locale === "es" ? "Tus clientes pagan desde sus plataformas habituales sin comisión adicional al momento de pagar." : locale === "fr" ? "Vos clients paient depuis leurs plateformes habituelles sans commission supplémentaire au moment du paiement." : locale === "pt" ? "Seus clientes pagam pelas plataformas habituais sem comissão adicional no momento do pagamento." : "Your customers pay from their usual platforms without extra fees at checkout."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{locale === "es" ? "Tú como comercio recibes tu dinero al día siguiente, completamente en MXN." : locale === "fr" ? "En tant que commerce, vous recevez votre argent le lendemain, entièrement en MXN." : locale === "pt" ? "Como comércio, você recebe seu dinheiro no dia seguinte, totalmente em MXN." : "As a merchant, you receive your money the next day, fully in MXN."}</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.35 }}>
          <Card className="p-6 md:p-8 border-2 border-border bg-card/85">
            <h3 className="text-xl md:text-2xl font-bold">{copy.finalTitle}</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              {locale === "es"
                ? "Xoco Suite integra Blokko para que cobres mejor y mantengas una operación simple en el día a día."
                : locale === "fr"
                  ? "Xoco Suite intègre Blokko pour mieux encaisser tout en gardant une opération simple au quotidien."
                  : locale === "pt"
                    ? "O Xoco Suite integra a Blokko para você cobrar melhor e manter uma operação simples no dia a dia."
                    : "Xoco Suite integrates Blokko so you can charge better while keeping daily operations simple."}
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20activar%20pagos%20con%20Blokko%20en%20Xoco%20Suite"
                label={copy.cta}
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  {copy.secondary} <ArrowRight className="w-4 h-4 ml-2" />
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
