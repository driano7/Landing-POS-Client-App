"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, CreditCard, Zap, Building2, MessageCircle, Wrench, GraduationCap, HeadphonesIcon } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Esencial",
    emoji: "🌱",
    subtitle: "Para empezar a vender digital",
    price: "$500",
    period: "/mes MXN",
    description: "Digitalizate sin drama. Ideal para puestos, fondas y negocios que dan el primer paso.",
    features: [
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
    period: "/mes MXN",
    description: "El combo que tus clientes van a notar. App propia, pedidos online y Google / Apple Pay.",
    features: [
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
  },
  {
    name: "Suite Completa",
    emoji: "🏆",
    subtitle: "IA + COFEPRIS + Marketing",
    price: "$1,500",
    period: "/mes MXN",
    description: "Para los que quieren crecer con datos, cumplir la ley sin dolor y llegar a más clientes.",
    features: [
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
  { icon: CreditCard, label: "Terminal Blokko.io", desc: "Cripto, SPEI, PIX y tarjeta en un dispositivo", badge: "Add-on" },
  { icon: Wrench, label: "Setup & Configuración", desc: "Montaje inicial del sistema en tu local", badge: "Desde $800" },
  { icon: GraduationCap, label: "Capacitación extra", desc: "Sesión de entrenamiento para tu equipo", badge: "Desde $500" },
  { icon: HeadphonesIcon, label: "Soporte premium", desc: "Atención personalizada 7 días / semana", badge: "$300/mes" },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="precios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary">Precios accesibles para todo negocio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que necesitas, al precio que mereces
          </h2>
          <p className="text-muted-foreground">
            Empieza con lo esencial y crece cuando quieras. Sin contratos análes, sin sorpresas.
          </p>
          <div className="mt-4 text-sm text-muted-foreground bg-muted/50 rounded-lg px-4 py-2 inline-block">
            🇲🇽 Precios en MXN · USD y BRL disponibles · Cotización para varias sucursales
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card
                className={`p-6 h-full flex flex-col bg-card/80 backdrop-blur-sm border-2 transition-all ${
                  plan.featured
                    ? "border-primary/50 shadow-xl shadow-primary/15 relative overflow-hidden"
                    : "border-border hover:border-primary/30"
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-warning to-primary" />
                )}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="text-2xl mb-1">{plan.emoji}</div>
                    <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                    <p className="text-xs text-primary font-medium">{plan.subtitle}</p>
                  </div>
                  {plan.featured && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      Más popular
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.variant}
                  className={`w-full rounded-xl font-semibold ${
                    plan.featured
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-md shadow-primary/25"
                      : "border-primary/30 text-primary hover:bg-primary/10"
                  }`}
                  asChild
                >
                  <a href="https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20el%20plan" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {plan.cta}
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/30 border border-border rounded-2xl p-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-foreground mb-1">🛠️ Servicios adicionales</h3>
            <p className="text-sm text-muted-foreground">Agrega lo que necesitas, cuando lo necesites</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {addons.map(({ icon: Icon, label, desc, badge }) => (
              <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                  <span className="text-xs text-primary font-medium mt-1 inline-block">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fine print */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Precios en MXN. USD y BRL disponibles bajo cotización. Costo de dominio personalizado no incluido.
          Cotización especial para 2+ sucursales. ¿Tienes una cadena o franquicia? 
          <a href="https://wa.me/5215512345678" className="text-primary hover:underline ml-1">Háblanos.</a>
        </p>
      </div>
    </section>
  )
}
