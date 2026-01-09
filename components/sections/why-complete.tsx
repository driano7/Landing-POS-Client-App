"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const categories = [
  {
    name: "Operación",
    features: ["POS completo", "Flujo de preparación", "Inventario", "Múltiples roles"],
  },
  {
    name: "Seguridad",
    features: ["Cifrado AES-GCM", "Políticas GDPR", "Control de acceso", "Auditoría completa"],
  },
  {
    name: "Regulación",
    features: ["Panel COFEPRIS", "Tracking de alimentos", "Exportación auditorías", "Checklist sanitario"],
  },
  {
    name: "Experiencia",
    features: ["App cliente", "Pedidos digitales", "Reservaciones", "Lealtad QR"],
  },
]

export function WhyComplete() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Más completo que cualquier solución en LATAM
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Mientras otras plataformas solo cubren POS básico, Xoco Suite integra operación, cumplimiento regulatorio,
            seguridad de datos y experiencia de cliente en una sola suite
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12" ref={ref}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-4 hover:shadow-lg transition-shadow border-2 hover:border-primary/30 h-full bg-card/80 backdrop-blur-sm">
                <Badge className="mb-3 bg-primary text-primary-foreground text-xs">{category.name}</Badge>
                <ul className="space-y-2">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="p-6 md:p-8 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/30">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">Diseñado específicamente para México</h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Aunque la suite fue construida y optimizada en México, sus funcionalidades se adaptan rigurosamente a las reglas de sanidad y cumplimiento de **USA, Brasil y México**, garantizando una operación segura a nivel internacional.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
