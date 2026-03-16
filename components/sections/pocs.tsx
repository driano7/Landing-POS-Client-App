"use client"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Rocket, Plug, Settings, CheckCircle2, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const pocOptions = [
  {
    icon: Rocket,
    emoji: "🚀",
    title: "Piloto en tu restaurante",
    description: "30 días de implementación real en tu local, sin costo adicional.",
    includes: ["Instalación y configuración", "Capacitación del equipo", "Soporte directo", "Análisis de resultados"],
  },
  {
    icon: Plug,
    emoji: "🔌",
    title: "Integración de pagos",
    description: "Conectamos tu procesador existente: SPEI, CoDi, tarjeta y más.",
    includes: ["Análisis de compatibilidad", "Desarrollo de integración", "Pruebas exhaustivas", "Documentación técnica"],
  },
  {
    icon: Settings,
    emoji: "📊",
    title: "Dashboard personalizado",
    description: "KPIs y métricas configuradas específicamente para tu operación.",
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
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
            🧪 Onboarding sin riesgos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3 text-balance">
            Prueba antes de comprometerte
          </h2>
          <p className="text-base text-muted-foreground">
            POCs personalizados para que valides la suite con tus operaciones reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" ref={ref}>
          {pocOptions.map((poc, index) => {
            const Icon = poc.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 h-full bg-card/80 backdrop-blur-sm border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-xl">{poc.emoji}</span>
                    </div>
                    <h3 className="text-base font-bold text-foreground">{poc.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{poc.description}</p>
                  <ul className="space-y-1.5">
                    {poc.includes.map((item, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Banner with warm gradient */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden border-0">
            <div className="bg-gradient-to-br from-primary via-primary-light to-warning/80 p-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">¿Listo para modernizar tu negocio?</h3>
                  <p className="text-primary-foreground/90 text-sm">
                    Agenda una demo en WhatsApp. Sin contratos largos, sin sorpresas.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg"
                    asChild
                  >
                    <a
                      href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Agenda por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
