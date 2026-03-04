"use client"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const categories = [
  {
    name: "Operación",
    emoji: "📲",
    features: ["POS completo con mesas y caja", "Inventario en tiempo real", "Gestión de empleados y sucursales", "Seguimiento de pedidos en vivo"],
  },
  {
    name: "App Cliente",
    emoji: "👤",
    features: ["Pedidos online desde el celular", "Reservaciones con QR", "Seguimiento del pedido en tiempo real", "Historial y métricas de consumo"],
  },
  {
    name: "Lealtad y Pagos",
    emoji: "💳",
    features: ["Lealtad en Google Pay y Apple Pay", "SPEI, PIX y tarjetas integradas", "Cripto vía terminal Blokko.io", "3 tipos de QR (cliente, ticket, reserva)"],
  },
  {
    name: "Métricas e IA",
    emoji: "🧠",
    features: ["Algoritmos de predicción de ventas", "Forecasting de inventario", "Hábitos de clientes y horas pico", "Comportamiento en el sitio web"],
  },
  {
    name: "Seguridad",
    emoji: "🔐",
    features: ["Cifrado AES-GCM 256 bits", "Políticas GDPR y descarga de datos", "Control de acceso por roles", "Auditoría completa de operaciones"],
  },
  {
    name: "Regulación",
    emoji: "📋",
    features: ["Panel COFEPRIS / FDA / ANVISA", "Registros de limpieza y alimentos", "Tracking de caducidades", "Exportación de auditorías CSV/XLSX"],
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
          <p className="text-lg text-muted-foreground">
            Mientras otras plataformas solo cubren POS básico, Xoco Suite integra operación, experiencia de cliente, pagos, métricas con IA, seguridad y cumplimiento regulatorio en una sola suite
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12" ref={ref}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <Card className="p-4 hover:shadow-lg transition-shadow border-2 hover:border-primary/30 bg-card/80 backdrop-blur-sm h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">{category.emoji}</span>
                  <span className="text-sm font-bold text-primary">{category.name}</span>
                </div>
                <ul className="space-y-1.5">
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

        <Card className="p-6 md:p-8 max-w-3xl mx-auto bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/30 text-center">
          <div className="text-2xl mb-3">🇲🇽</div>
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">¿Por qué Xoco Suite?</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            No es una adaptación de soluciones extranjeras. Xoco Suite fue construido desde cero para el mercado latinoamericano de restaurantes: operación eficiente, cumplimiento COFEPRIS, seguridad de datos personales, pagos con cripto y experiencia digital de primer nivel.
          </p>
        </Card>
      </div>
    </section>
  )
}
