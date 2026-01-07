"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, Plug, Settings, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const pocOptions = [
  {
    icon: Rocket,
    title: "Piloto en restaurante",
    description: "Implementación completa en uno de tus locales por 30 días",
    includes: ["Instalación y configuración", "Capacitación del personal", "Soporte directo", "Análisis de resultados"],
  },
  {
    icon: Plug,
    title: "Integración de pago",
    description: "Conectamos tu procesador de pagos existente al POS",
    includes: [
      "Análisis de compatibilidad",
      "Desarrollo de integración",
      "Pruebas exhaustivas",
      "Documentación técnica",
    ],
  },
  {
    icon: Settings,
    title: "Panel de métricas personalizado",
    description: "Configuramos dashboards específicos para tus KPIs",
    includes: ["Sesión de requerimientos", "Configuración de métricas", "Vistas personalizadas", "Capacitación en uso"],
  },
]

export function POCs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="contacto" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Prueba de concepto antes de comprometerte
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos POCs personalizados para que valides la suite con tus operaciones reales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12" ref={ref}>
          {pocOptions.map((poc, index) => {
            const Icon = poc.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full bg-card/80 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{poc.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{poc.description}</p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">Incluye:</p>
                    <ul className="space-y-2">
                      {poc.includes.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full group bg-transparent">
                    Solicitar POC
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">¿Listo para modernizar tu restaurante?</h3>
                <p className="text-primary-foreground/90">
                  Agenda una demo personalizada por WhatsApp o solicita un POC para tu operación
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a
                    href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Agenda demo por WhatsApp
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                  asChild
                >
                  <a
                    href="https://wa.me/525512291607?text=Hola%2C%20me%20gustaría%20hablar%20con%20el%20equipo%20técnico%20de%20Xoco%20Suite"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hablar con equipo técnico
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
