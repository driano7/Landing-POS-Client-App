"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Básico",
    subtitle: "Solo POS",
    price: "Contactar",
    description: "Sistema operativo completo para caja y meseros",
    features: [
      { text: "POS completo para caja y meseros", included: true },
      { text: "Flujo de preparación y estados", included: true },
      { text: "Inventario básico + alertas", included: true },
      { text: "Programa de lealtad vía QR", included: true },
      { text: "Roles de usuario", included: true },
      { text: "Módulo de métricas avanzadas", included: false },
      { text: "Panel COFEPRIS", included: false },
      { text: "App Cliente", included: false },
      { text: "Cifrado AES-GCM", included: false },
    ],
    cta: "Comenzar",
    variant: "outline",
  },
  {
    name: "Premium",
    subtitle: "Métricas + App Cliente",
    price: "Contactar",
    description: "Suite completa con analytics, COFEPRIS y app cliente",
    features: [
      { text: "Todo lo del plan Básico", included: true, bold: true },
      { text: "Módulo de métricas avanzadas", included: true },
      { text: "Panel COFEPRIS completo", included: true },
      { text: "App Cliente (web + móvil)", included: true },
      { text: "Cifrado AES-GCM", included: true },
      { text: "Políticas alineadas a GDPR", included: true },
      { text: "Lectura de 3 tipos de QR", included: true },
      { text: "Exportación para auditorías", included: true },
      { text: "Soporte prioritario", included: true },
    ],
    cta: "Solicitar demo",
    variant: "default",
    featured: true,
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
            Paquetes diseñados para tu operación
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde POS básico hasta suite completa con cumplimiento regulatorio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" ref={ref}>
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
                className={`relative p-8 h-full bg-card/80 backdrop-blur-sm ${
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

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-success" />
                      ) : (
                        <X className="w-5 h-5 mt-0.5 flex-shrink-0 text-muted-foreground/40" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included
                            ? feature.bold
                              ? "text-foreground font-semibold"
                              : "text-foreground/80"
                            : "text-muted-foreground/60 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
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
