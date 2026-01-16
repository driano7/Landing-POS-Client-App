"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Starter",
    subtitle: "Presencia digital + POS base",
    price: "Contactar",
    description: "Para restaurantes que quieren empezar con lo esencial.",
    features: [
      "Sitio web básico en un subdominio de Xoco (landing 1–3 secciones, responsive).",
      "POS operativo para caja y mesas con inventario básico y roles.",
      "Programa de lealtad mediante QR de cliente.",
      "Pagos con tarjetas y transferencias locales: SPEI/CoDi en México, PIX en Brasil y tarjetas + wallets en USA (integración con terminales compatibles).",
      "Integración opcional con terminal Blokko.io para unificar tarjetas, transferencias locales y pagos con criptomonedas en un solo dispositivo, con conversión automática a moneda local.",
    ],
    cta: "Contactar",
    variant: "outline",
  },
  {
    name: "Growth",
    subtitle: "Web premium + POS + App Cliente",
    price: "Contactar",
    description: "Para negocios que quieren crecer su marca y digitalizar pedidos y reservas.",
    features: [
      "Sitio web premium con animaciones suaves, tipografía Lato y gradientes de la marca.",
      "Dominio personalizado disponible (compra de dominio se cotiza por separado).",
      "POS operativo completo para caja/mesas, inventario y roles.",
      "App Cliente (móvil y escritorio) para pedidos y reservaciones, con posibilidad de compartir o descargar tickets y reservas.",
      "Soporte para 3 tipos de QR: ID cliente (lealtad), tickets/pedidos y reservaciones.",
      "Integración opcional con terminal Blokko.io, que permite aceptar tarjetas, SPEI/CoDi y PIX junto con pagos crypto (EVM y Lightning) en un solo flujo, recibiendo siempre en MXN, USD o BRL.",
    ],
    cta: "Solicitar demo",
    variant: "default",
    featured: true,
  },
  {
    name: "Compliance & Data",
    subtitle: "Suite completa",
    price: "Contactar",
    description: "Para operaciones que necesitan métricas, regulación sanitaria y pagos avanzados.",
    features: [
      "Todo lo incluido en Growth.",
      "Métricas avanzadas con dashboards de ventas, productos, horas pico, tiempos de preparación y rotación de inventario.",
      "Panel sanitario configurable: México (COFEPRIS), Estados Unidos (FDA Food Code) y Brasil (ANVISA RDC 216/2004).",
      "Integración opcional con terminal Blokko.io, que combina en un solo equipo: tarjetas, SPEI/CoDi en México, PIX en Brasil y pagos con criptomonedas (EVM + Lightning) con conversión automática a moneda local.",
      "Pagos con crypto ofrecidos a través de la asociación con Blokko.io, sujetos a sus términos y comisiones; las comisiones de la terminal no están incluidas en los precios de Xoco Suite.",
    ],
    cta: "Solicitar demo",
    variant: "default",
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
            Tres paquetes, una suite completa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde presencia digital básica hasta suite completa con cumplimiento regulatorio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto" ref={ref}>
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -8 }}
              className="h-full"
            >
              <Card
                className={`relative p-6 md:p-8 h-full bg-card/80 backdrop-blur-sm ${
                  plan.featured ? "border-2 border-primary shadow-2xl shadow-primary/20" : "border-2"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-primary text-primary-foreground shadow-lg">
                      Recomendado
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl md:text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-success" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.variant as "default" | "outline"} size="lg">
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
