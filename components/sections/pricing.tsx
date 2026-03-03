"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Starter",
    subtitle: "Presencia digital + POS base",
    price: "$2,490",
    period: "/mes MXN",
    description: "Para restaurantes que quieren empezar a digitalizar su operación sin complicaciones.",
    features: [
      "Sitio web del negocio (landing 1–3 secciones)",
      "POS operativo: mesas, caja e inventario básico",
      "Programa de lealtad con QR del cliente",
      "Pagos con tarjeta, SPEI/CoDi (MX) y PIX (BR)",
      "Roles de personal básicos (admin + cajero)",
      "Soporte vía WhatsApp",
    ],
    cta: "Empezar ahora",
    variant: "outline" as const,
  },
  {
    name: "Growth",
    subtitle: "Web premium + POS + App Cliente",
    price: "$4,990",
    period: "/mes MXN",
    description: "Para negocios que quieren crecer su marca, digitalizar pedidos y mejorar la experiencia del cliente.",
    features: [
      "Todo lo incluido en Starter",
      "Sitio web premium con diseño de marca (animaciones, tipografía, gradientes)",
      "Dominio personalizado disponible (costo del dominio aparte)",
      "App Cliente móvil: pedidos online con seguimiento en tiempo real",
      "Reservaciones con QR de confirmación",
      "3 tipos de QR: ID cliente, ticket/pedido y reservación",
      "Métricas de consumo del cliente por categoría",
      "Programa de lealtad enrolable a Google Pay / Apple Pay",
      "Gestión de empleados, socios y sucursales",
    ],
    cta: "Solicitar demo",
    variant: "default" as const,
    featured: true,
  },
  {
    name: "Compliance & Data",
    subtitle: "Suite completa con IA y COFEPRIS",
    price: "$8,490",
    period: "/mes MXN",
    description: "Para operaciones que necesitan métricas avanzadas, cumplimiento regulatorio y control total.",
    features: [
      "Todo lo incluido en Growth",
      "Métricas avanzadas con algoritmos de predicción (IA)",
      "Forecasting de inventario y horas pico",
      "Métricas de comportamiento en el sitio web",
      "Panel sanitario COFEPRIS (MX) / FDA (US) / ANVISA (BR)",
      "Registros de limpieza, alimentos y caducidades",
      "Exportación de auditorías en CSV/XLSX",
      "Envíos propios del negocio",
      "Soporte prioritario + onboarding dedicado",
    ],
    cta: "Solicitar demo",
    variant: "default" as const,
  },
]

export function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="precios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Planes que escalan con tu negocio
          </h2>
          <p className="text-lg text-muted-foreground">
            Precios en pesos mexicanos. Sin contratos anuales forzosos. Cambia de plan cuando quieras.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto" ref={ref}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className={`p-6 flex flex-col w-full border-2 transition-all ${
                plan.featured
                  ? "border-primary shadow-xl shadow-primary/10 relative"
                  : "border-border hover:border-primary/30"
              }`}>
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Recomendado
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-0.5">{plan.name}</h3>
                  <p className="text-xs text-primary font-medium mb-3">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.variant}
                  className={plan.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                  asChild
                >
                  <a
                    href={`https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20el%20plan%20${encodeURIComponent(plan.name)}%20de%20Xoco%20Suite`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.cta}
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Blokko Add-on */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <Card className="p-6 border-2 border-dashed border-primary/40 bg-primary/5">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-foreground">Add-on: Terminal Blokko.io</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">Opcional</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Agrega la terminal física de Blokko.io a cualquier plan y acepta tarjetas, SPEI/CoDi, PIX y criptomonedas (EVM + Lightning) en un solo dispositivo. La comisión por transacción la determina Blokko.io y se suma al costo del plan.
                </p>
              </div>
              <Button variant="outline" size="sm" className="flex-shrink-0" asChild>
                <a href="https://blokko.io" target="_blank" rel="noopener noreferrer">
                  Ver Blokko.io
                </a>
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Note */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          Precios en MXN. USD y BRL disponibles bajo cotización. Costo de dominio personalizado no incluido.
          Xoco Suite no es organismo certificador; los paneles sanitarios son herramientas de apoyo.
        </p>
      </div>
    </section>
  )
}
