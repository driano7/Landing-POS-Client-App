<<<<<<< HEAD
"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, CreditCard, Zap, Building2, MessageCircle, Wrench, GraduationCap, HeadphonesIcon } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Esencial",
    emoji: "🌱",
    subtitle: "Para empezar",
    price: "$500",
    period: "/mes",
    description: "POS + Inventario + Pagos + Lealtad QR",
    // Features resumidos para móvil
    featuresShort: ["POS", "Inventario", "Pagos", "Soporte"],
    featuresFull: [
      "POS operativo: mesas y caja",
      "Inventario básico con alertas",
      "Pagos con tarjeta y SPEI",
      "Programa de lealtad QR",
      "Soporte por WhatsApp",
    ],
    cta: "Empezar ahora",
    variant: "outline" as const,
  },
  {
    name: "Negocio",
    emoji: "🚀",
    subtitle: "POS + App + Lealtad",
    price: "$1,000",
    period: "/mes",
    description: "App cliente + Pedidos online + Google/Apple Pay",
    featuresShort: ["Todo Esencial", "App cliente", "Reservas QR", "Sucursales"],
    featuresFull: [
      "Todo lo del plan Esencial",
      "App Cliente móvil con pedidos online",
      "Reservaciones con QR",
      "Lealtad enrolable a Google / Apple Pay",
      "Métricas de consumo del cliente",
      "Gestión de empleados y sucursales",
    ],
    cta: "Solicitar demo",
    variant: "default" as const,
    featured: true,
=======
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$99",
    period: "USD/mes",
    description: "Para restaurantes que inician",
    features: [
      { text: "Xoco POS completo", included: true },
      { text: "Roles de usuario (Admin, Cajero, Cocina)", included: true },
      { text: "Inventario básico y alertas", included: true },
      { text: "Programa de lealtad con QR", included: true },
      { text: "Pagos: Efectivo, Tarjeta, Transferencia", included: true },
      { text: "Pagos con Cripto", included: false },
      { text: "Métricas avanzadas", included: false },
      { text: "App Cliente", included: false },
    ],
    cta: "Empezar Gratis",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$249",
    period: "USD/mes",
    badge: "Más Popular",
    description: "Todo lo que necesitas para crecer",
    features: [
      { text: "Todo lo del Plan Básico", included: true },
      { text: "Pagos con Bitcoin Lightning, ETH y Stablecoins", included: true, highlight: true },
      { text: "Métricas avanzadas y dashboards", included: true },
      { text: "Panel COFEPRIS completo", included: true },
      { text: "App Cliente Xoco (móvil + desktop)", included: true },
      { text: "3 tipos de QR (lealtad, pedidos, reservaciones)", included: true },
      { text: "Cifrado AES-GCM", included: true },
      { text: "Integración con wallets (RainbowKit + Bitcoin Connect)", included: true },
    ],
    cta: "Agenda Demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contactar",
    period: "",
    description: "Para cadenas y multi-sucursales",
    features: [
      { text: "Todo lo del Premium", included: true },
      { text: "Multi-sucursal ilimitado", included: true },
      { text: "API custom para integraciones", included: true },
      { text: "Conversión automática crypto-a-fiat", included: true },
      { text: "Soporte prioritario 24/7", included: true },
      { text: "Onboarding personalizado", included: true },
      { text: "SLA garantizado", included: true },
    ],
    cta: "Hablar con Ventas",
    highlight: false,
>>>>>>> c135cd15 (addings perplexity)
  },
  {
    name: "Suite Completa",
    emoji: "🏆",
    subtitle: "IA + COFEPRIS + Marketing",
    price: "$1,500",
    period: "/mes",
    description: "Predicción IA + Panel COFEPRIS + Campañas",
    featuresShort: ["Todo Negocio", "IA", "COFEPRIS", "Marketing"],
    featuresFull: [
      "Todo lo del plan Negocio",
      "Métricas avanzadas con predicción IA",
      "Panel COFEPRIS / FDA / ANVISA",
      "Exportación de auditorías",
      "Campañas de marketing segmentadas",
      "Notificaciones push a clientes",
      "Soporte prioritario + onboarding",
    ],
    cta: "Solicitar demo",
    variant: "outline" as const,
  },
]

const addons = [
  { icon: CreditCard, label: "Terminal Blokko.io", desc: "Acepta cripto + PIX, recibe pesos MXN al día siguiente", badge: "Add-on" },  { icon: Wrench, label: "Setup & Configuración", desc: "Montaje inicial", badge: "$800+" },
  { icon: GraduationCap, label: "Capacitación extra", desc: "Entrenamiento equipo", badge: "$500+" },
  { icon: HeadphonesIcon, label: "Soporte premium", desc: "7 días/semana", badge: "$300/mes" },
]

<<<<<<< HEAD
export function Pricing() {
  const ref = useRef(null)
  // once: true para evitar que desaparezca al scrollear
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="precios" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary">Precios accesibles</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Lo que necesitas, al precio que mereces
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Sin contratos anuales, sin sorpresas.
          </p>
          <div className="mt-3 text-xs md:text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-1.5 inline-block">                          🇲🇽 Precios en MXN · Cotización para varias sucursales · Dominio personalizado sujeto a precio
          </div>
        </motion.div>        {/* Plans grid - optimizado para móvil */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
            >
              <Card
                className={`p-4 md:p-6 h-full flex flex-col bg-card/80 backdrop-blur-sm border-2 transition-all ${
                  plan.featured
                    ? "border-primary/50 shadow-xl shadow-primary/15 relative overflow-hidden"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-warning to-primary" />
                )}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="text-xl md:text-2xl mb-1">{plan.emoji}</div>
                    <h3 className="text-base md:text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-primary font-medium">{plan.subtitle}</p>
                  </div>
                  {plan.featured && (
                    <span className="text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mb-3 md:mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-xs md:text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1.5 md:mt-2 leading-snug">{plan.description}</p>
                </div>

                {/* Móvil: lista corta / Desktop: lista completa */}
                <ul className="space-y-1.5 md:space-y-2 flex-1 mb-4 md:mb-6">
                  {/* Solo en móvil (< md) */}
                  <div className="md:hidden space-y-1.5">
                    {plan.featuresShort.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </div>
                  {/* Solo en desktop (>= md) */}
                  <div className="hidden md:block space-y-2">
                    {plan.featuresFull.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </div>
                </ul>

                <Button
                  variant={plan.variant}
                  className={`w-full rounded-xl font-semibold text-sm ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-md shadow-primary/25"
                      : "border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                  asChild
                >
                  <a
                    href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20el%20plan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4 mr-2" />
                    {plan.cta}
                  </a>
                </Button>
              </Card>
            </motion.div>
=======
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Planes y Precios</h2>
          <p className="text-lg text-gray-600">Sin contratos, cancela cuando quieras. Prueba gratis 14 días.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg transition-shadow hover:shadow-2xl ${
                plan.highlight ? "border-orange-500 border-2" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute right-6 top-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold px-3 py-1">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Plan</p>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-bold text-gray-900">{plan.price}</p>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>

                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          feature.highlight ? "text-orange-600" : "text-green-600"
                        }`}
                      />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? feature.highlight
                            ? "text-orange-600 font-semibold"
                            : "text-gray-800"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.highlight ? (
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg py-4 shadow-lg hover:shadow-xl transition-all">
                    {plan.cta}
                  </Button>
                ) : (
                  <Button className="w-full border-2 border-gray-800 text-gray-800 font-semibold text-lg py-4 hover:bg-gray-800 hover:text-white transition-all">
                    {plan.cta}
                  </Button>
                )}
              </div>
            </div>
>>>>>>> c135cd15 (addings perplexity)
          ))}
        </div>

        {/* Add-ons - también resumidos en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/30 border border-border rounded-2xl p-4 md:p-6"
        >
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-1">🛠️ Servicios adicionales</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Agrega lo que necesites</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {addons.map(({ icon: Icon, label, desc, badge }) => (
              <div
                key={label}
                className="flex flex-col md:flex-row items-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs md:text-sm font-medium text-foreground block mb-0.5">{label}</span>
                  <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block">{desc}</p>
                  <span className="text-[10px] md:text-xs text-primary font-medium mt-0.5 inline-block">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fine print */}
        <p className="text-center text-[10px] md:text-xs text-muted-foreground mt-4 md:mt-6 px-2">
          Precios en MXN. Cotización especial para 2+ sucursales.{" "}
          <a href="https://wa.me/525512291607" className="text-primary hover:underline">
            Háblanos
          </a>
        </p>
      </div>
    </section>
  )
}
