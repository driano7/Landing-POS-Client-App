"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Coins,
  CreditCard,
  Globe,
  Landmark,
  MessageCircle,
  QrCode,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  Store,
  Wrench,
  XCircle,
} from "lucide-react"

import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/sections/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"

type PlanFeature = {
  icon: LucideIcon
  text: string
  underline?: boolean
  underlinePart?: string
}

type BlokkoStatus = "none" | "addon" | "included"

type Plan = {
  name: string
  price: string
  subtitle: string
  support: string
  featured?: boolean
  blokkoStatus: BlokkoStatus
  blokkoBadge?: string
  features: PlanFeature[]
}

type ComparisonRow = {
  icon: LucideIcon
  title: string
  separated: string
  xoco: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$199",
    subtitle: "Ideal para probar",
    support: "WhatsApp en horario comercial",
    blokkoStatus: "addon",
    blokkoBadge: "Opcional",
    features: [
      { icon: Globe, text: "Landing básica con menú estático o PDF." },
      { icon: Store, text: "POS básico: toma de orden y tickets." },
      { icon: ShieldCheck, text: "Accesos por rol limitado (admin y caja).", underline: true },
      { icon: Smartphone, text: "App Cliente básica: ver menú y reserva simple." },
      {
        icon: XCircle,
        text: "Sin sitio bilingüe (español/inglés), sin edición de ticket antes del pago y sin división de cuentas en POS y App Cliente.",
        underline: true,
      },
      { icon: QrCode, text: "Sin métricas avanzadas, sin COFEPRIS, sin Machine Learning.", underline: true },
      { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
    ],
  },
  {
    name: "Emprende",
    price: "$499",
    subtitle: "Para restaurantes pequeños (1 sucursal)",
    support: "WhatsApp con mejor seguimiento",
    blokkoStatus: "addon",
    blokkoBadge: "Opcional",
    features: [
      { icon: Globe, text: "Sitio web completo bilingüe (español/inglés) con menú dinámico y secciones clave." },
      {
        icon: Store,
        text: "POS con inventario básico, alertas de stock, edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
      },
      { icon: ShieldCheck, text: "Roles múltiples: admin, caja y cocina." },
      { icon: QrCode, text: "Reservas y pedidos con QR + lealtad básica con PNG compatible.", underlinePart: "lealtad básica" },
      { icon: BarChart3, text: "Reportes simples de ventas (sin modelos de Machine Learning).", underlinePart: "(sin modelos de Machine Learning)." },
      { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
    ],
  },
  {
    name: "Escala",
    price: "$899",
    subtitle: "Para comercios medianos y hasta tres sucursales",
    support: "WhatsApp con respuesta más prioritaria",
    featured: true,
    blokkoStatus: "included",
    blokkoBadge: "Opcional (funciona mejor aquí)",
    features: [
      { icon: Globe, text: "Landing bilingüe (español/inglés) con secciones de eventos, video y galerías." },
      { icon: Smartphone, text: "Lealtad con Apple/Google Wallet + PNG compartible." },
      { icon: BarChart3, text: "Métricas de consumo: visitas, frecuencia y ticket promedio." },
      {
        icon: Building2,
        text: "Gestión de empleados y hasta 3 sucursales, con edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
      },
      { icon: Store, text: "Exportación CSV/Excel + panel COFEPRIS básico.", underlinePart: "panel COFEPRIS básico" },
      { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
    ],
  },
  {
    name: "Cadena",
    price: "$1,499",
    subtitle: "Para múltiples sucursales y operación por datos",
    support: "WhatsApp con prioridad alta",
    blokkoStatus: "included",
    blokkoBadge: "Opcional (funciona mejor aquí)",
    features: [
      { icon: Globe, text: "Sitio totalmente personalizado bilingüe (español/inglés) con diseño de marca." },
      {
        icon: Building2,
        text: "Multi-sucursal completa (3+) con control global, edición de ticket antes del pago, división de cuentas y recuperación/recreación de tickets en POS y App Cliente.",
      },
      { icon: QrCode, text: "Operación offline robusta y sincronización automática." },
      { icon: BarChart3, text: "Machine Learning: pronóstico de ventas y proyección de inventario." },
      { icon: ShieldCheck, text: "Panel sanitario completo COFEPRIS/FDA/ANVISA." },
      { icon: CreditCard, text: "Blokko integrado para tarjetas, SPEI/PIX y cripto (opcional, se adapta mejor para tu negocio)." },
    ],
  },
]

const blokkoChips = [
  { icon: CreditCard, emoji: "💳", label: "Tarjetas" },
  { icon: Landmark, emoji: "🏦", label: "SPEI / PIX" },
  { icon: Coins, emoji: "🪙", label: "Cripto" },
  { icon: QrCode, emoji: "📱", label: "QR / cobro digital" },
]

const blokkoBenefits = [
  "Acepta tarjetas, transferencias (SPEI/PIX) y cripto desde un solo flujo.",
  "Recibes moneda local (MXN, BRL, etc.) sin preocuparte por volatilidad.",
  "No necesitas saber de wallets o custodia; cobras como en cualquier terminal.",
]

const xocoSuiteModules: PlanFeature[] = [
  { icon: Globe, text: "Sitio web profesional" },
  { icon: Smartphone, text: "App cliente" },
  { icon: Store, text: "POS operativo" },
  { icon: BarChart3, text: "Métricas avanzadas" },
  { icon: ShieldCheck, text: "Panel sanitario" },
  { icon: CreditCard, text: "Integración de pagos con Blokko" },
]

const comparisonRows: ComparisonRow[] = [
  {
    icon: Store,
    title: "POS en la nube",
    separated: "~500 a 3,000 MXN/mes.",
    xoco: "Incluido en la misma plataforma.",
  },
  {
    icon: Smartphone,
    title: "Sistema de pedidos online / app cliente",
    separated: "1,000 a 3,000 MXN/mes o comisión por pedido.",
    xoco: "Incluido con reservas, pedidos y lealtad.",
  },
  {
    icon: Globe,
    title: "Sitio web profesional",
    separated: "Setup alto + mensualidad.",
    xoco: "Incluido y escalable por plan.",
  },
  {
    icon: BarChart3,
    title: "Herramienta de métricas / BI",
    separated: "Licencias extra mensuales.",
    xoco: "Reportes en el mismo panel.",
  },
  {
    icon: CreditCard,
    title: "Terminal o gateway de pagos",
    separated: "Integración adicional + comisiones.",
    xoco: "Conexión integrada con Blokko.",
  },
]

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="relative container mx-auto px-4 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-3xl md:text-5xl font-bold text-balance"
          >
            Planes y precios claros para tu restaurante
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground text-pretty"
          >
            Evita pagar 3 o 4 sistemas separados. Xoco Suite integra sitio web, app cliente, POS operativo, métricas avanzadas, panel sanitario y pagos en un solo lugar.
          </motion.p>
          <Badge className="mt-6 border border-primary/30 bg-primary/10 text-primary">Enfoque LATAM: México, Brasil, Argentina, Perú y más.</Badge>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-10">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-6">
          {xocoSuiteModules.map((module, index) => {
            const Icon = module.icon
            return (
              <motion.div
                key={module.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
              >
                <Card className="h-full p-4 border-2 border-primary/35 bg-card/80 text-center shadow-[0_10px_26px_rgba(122,78,46,0.18)] transition-all hover:border-primary/70 hover:shadow-[0_20px_44px_rgba(122,78,46,0.28)] dark:shadow-lg dark:shadow-primary/10 dark:hover:shadow-xl dark:hover:shadow-primary/20">
                  <Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                  <p className="text-sm font-medium">{module.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <Card className="mb-5 border border-primary/35 bg-primary/10 p-3 md:p-4">
          <p className="text-center text-sm md:text-base font-medium text-foreground">
            Todos los planes se contratan por 12 meses al iniciar.
          </p>
        </Card>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={plan.blokkoStatus === "included" ? { y: -8 } : undefined}
            >
              <Card
                className={`h-full p-6 border-2 bg-card/80 backdrop-blur-sm transition-all ${
                  plan.featured
                    ? "border-primary/60 shadow-[0_18px_42px_rgba(122,78,46,0.24)] dark:shadow-xl dark:shadow-primary/20"
                    : "border-border"
                } ${
                  plan.blokkoStatus === "included"
                    ? "hover:border-primary/70 hover:shadow-[0_22px_50px_rgba(122,78,46,0.3)] dark:hover:shadow-xl dark:hover:shadow-primary/20"
                    : plan.blokkoStatus === "addon"
                      ? "hover:border-amber-400/50 hover:shadow-lg"
                      : ""
                }`}
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {plan.featured ? (
                    <Badge className="border-primary/40 bg-primary/10 text-primary">Más elegido</Badge>
                  ) : (
                    <Badge className="border-border bg-muted text-muted-foreground">{plan.subtitle}</Badge>
                  )}
                  {plan.blokkoBadge && (
                    <Badge
                      className={
                        plan.blokkoStatus === "included"
                          ? "border-emerald-500/30 bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                          : "border-amber-500/30 bg-amber-500/15 text-amber-700 dark:text-amber-300"
                      }
                    >
                      {plan.blokkoBadge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-muted-foreground -mt-2 mb-3">{plan.subtitle}</p>

                <div className="mb-4">
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <div className="flex items-end gap-1 mt-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground pb-1">MXN / mes</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature) => {
                    const Icon = feature.icon
                    const hasPartialUnderline =
                      !!feature.underlinePart && feature.text.includes(feature.underlinePart)
                    const [beforeUnderline = "", afterUnderline = ""] = hasPartialUnderline
                      ? feature.text.split(feature.underlinePart as string)
                      : [feature.text, ""]
                    return (
                      <li key={feature.text} className="flex items-start gap-2">
                        <Icon className="mt-0.5 h-4 w-4 text-primary shrink-0" />
                        <span className={feature.underline ? "text-sm text-foreground/90 underline underline-offset-2 decoration-primary/70" : "text-sm text-foreground/90"}>
                          {feature.underline
                            ? feature.text
                            : hasPartialUnderline
                              ? (
                                  <>
                                    {beforeUnderline}
                                    <span className="underline underline-offset-2 decoration-primary/70">{feature.underlinePart}</span>
                                    {afterUnderline}
                                  </>
                                )
                              : feature.text}
                        </span>
                      </li>
                    )
                  })}
                </ul>

                <div className="mt-auto space-y-4">
                  <p className="text-xs text-muted-foreground">
                    Soporte incluido: <span className="font-semibold text-foreground">{plan.support}</span>.
                  </p>
                  <WhatsAppCTAButton
                    href={`https://wa.me/525512291607?text=${encodeURIComponent(`Hola, quiero información del plan ${plan.name} de Xoco Suite`)}`}
                    label="Hablar por WhatsApp"
                    className={`w-full font-semibold ${plan.featured ? "ring-2 ring-primary/30" : ""}`}
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="p-6 md:p-8 border-2 border-primary/30 bg-gradient-to-r from-primary/15 via-primary/10 to-background">
            <div className="mb-5 flex justify-center">
              <Badge className="border border-primary/40 bg-background/80 px-3 py-1.5 text-center text-xs md:text-sm text-primary">
                Se conecta a cualquier terminal. Blokko es opcional, no obligatorio.
              </Badge>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <Badge className="mb-3 border-primary/40 bg-primary/15 text-primary">Pagos con Blokko.io</Badge>
                <h3 className="text-2xl md:text-3xl font-bold">Un solo POS, múltiples formas de cobrar, sin dolores de cabeza.</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Puedes integrar Blokko de forma opcional en todos los planes. En Escala y Cadena suele funcionar mejor por volumen operativo y frecuencia de cobros.
                </p>
                <ul className="mt-5 space-y-3">
                  {blokkoBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                      <span className="text-sm text-foreground/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-muted-foreground">
                  Las comisiones de procesamiento las define Blokko.io directamente. Xoco Suite integra esta solución dentro de tu operación.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 self-start">
                {blokkoChips.map((chip, index) => {
                  const Icon = chip.icon
                  return (
                    <motion.div
                      key={chip.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ y: -4 }}
                    >
                      <Card className="h-full p-4 border border-border/90 bg-card/80">
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-primary" />
                          <span className="text-base leading-none">{chip.emoji}</span>
                        </div>
                        <p className="mt-3 text-sm font-medium">{chip.label}</p>
                      </Card>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-8">
        <Card className="p-6 md:p-8 border border-amber-500/30 bg-amber-500/10">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Costos operativos (iguales en todos los planes)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-primary" />
                Actualizaciones de software
              </p>
              <p className="mt-2 text-sm text-muted-foreground">$199 MXN por actualización, cada 3 meses.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <Wrench className="w-4 h-4 text-primary" />
                Capacitación presencial
              </p>
              <p className="mt-2 text-sm text-muted-foreground">$999 MXN por visita.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/70 p-4">
              <p className="text-sm font-semibold flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-primary" />
                Capacitación virtual
              </p>
              <p className="mt-2 text-sm text-muted-foreground">$699 MXN por sesión.</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Nota de pagos: Blokko.io define comisiones y tarifas por transacción. Xoco Suite se integra con Blokko como pieza de la solución.
          </p>
        </Card>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold">¿Cuánto pagarías si contratas todo por separado?</h2>
          <p className="mt-3 text-muted-foreground text-pretty">
            Resumen rápido: por separado pagas varias herramientas; con Xoco lo concentras en un solo lugar.
          </p>
        </motion.div>

        <Card className="overflow-hidden border border-border/80 bg-card/85">
          <div className="hidden md:grid md:grid-cols-[220px_1fr_1fr] border-b border-border/80">
            <p className="px-4 py-3 text-sm font-semibold text-foreground bg-muted/20">Categoría</p>
            <p className="px-4 py-3 text-sm font-semibold text-red-500 bg-muted/15">Otras soluciones del mercado</p>
            <p className="px-4 py-3 text-sm font-semibold text-emerald-500 bg-primary/30">Con Xoco Suite</p>
          </div>
          <div className="divide-y divide-border/80">
            {comparisonRows.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="grid gap-3 px-4 py-4 md:grid-cols-[220px_1fr_1fr] md:gap-4"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary shrink-0" />
                    <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  </div>
                  <div className="rounded-lg border border-border/70 bg-muted/15 p-3 md:rounded-none md:border-0 md:bg-muted/10 md:p-0 md:px-4 md:py-3">
                    <p className="text-xs uppercase tracking-wide text-red-500/90 md:hidden">Otras soluciones</p>
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 mt-0.5 text-red-500 shrink-0" />
                      <p className="text-sm text-muted-foreground/90">{item.separated}</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-primary/35 bg-primary/20 p-3 md:rounded-none md:border-0 md:bg-primary/25 md:p-0 md:px-4 md:py-3">
                    <p className="text-xs uppercase tracking-wide text-emerald-500/90 md:hidden">Con Xoco Suite</p>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 text-emerald-500 shrink-0" />
                      <p className="text-sm font-medium text-foreground">{item.xoco}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </Card>

        <Card className="mt-8 p-6 md:p-8 bg-gradient-to-r from-primary/15 via-primary/10 to-background border-2 border-primary/30">
          <h3 className="text-2xl font-bold">Una sola plataforma para operar mejor</h3>
          <p className="mt-3 text-muted-foreground">
            Con Xoco Suite tienes una sola plataforma, un solo soporte por WhatsApp y una vista unificada de tu negocio, sin tener que andar pegando sistemas de 3 o 4 proveedores diferentes.
          </p>
        </Card>
      </section>

      <Footer />
    </main>
  )
}
