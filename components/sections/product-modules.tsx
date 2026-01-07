"use client"

import { Card } from "@/components/ui/card"
import { ShoppingCart, BarChart3, Smartphone, Check, Brain, Coins } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const modules = [
  {
    icon: ShoppingCart,
    title: "POS Operativo (Básico)",
    description: "Sistema punto de venta completo para operación diaria",
    features: [
      "Ventas rápidas con interfaz optimizada",
      "Flujo de preparación por estados",
      "Inventario básico con alertas",
      "Roles de usuario (admin, cajero, mesero)",
      "Programa de lealtad con QR cliente",
      "Soporte de pagos EVM (Ethereum, Polygon, BSC)",
      "Lightning Network de Bitcoin integrado",
      "Predicciones de inventario con ML",
      "Forecasting de ventas con algoritmos avanzados",
    ],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Métricas y Cumplimiento (Premium)",
    description: "Analytics avanzados y panel COFEPRIS integrado",
    features: [
      "Panel COFEPRIS (higiene, plagas, residuos)",
      "Dashboards de ventas en tiempo real",
      "Tiempos de preparación por producto",
      "Desempeño por horas y productos",
      "Exportación CSV/XLSX para auditorías",
    ],
    color: "success",
    premium: true,
  },
  {
    icon: Smartphone,
    title: "App Cliente (Premium)",
    description: "Experiencia de cliente desde móvil y desktop",
    features: [
      "Pedidos y reservaciones en tiempo real (async)",
      "Ve quién tomó tu pedido en vivo",
      "Detalles de transacción y método de pago",
      "Navegación guiada por categorías",
      "Compartir pedidos a mensajería",
      "Descarga de comprobantes",
      "Cifrado AES-GCM para datos",
    ],
    color: "primary",
    premium: true,
  },
]

export function ProductModules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="productos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tres módulos, una suite completa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde operación básica hasta cumplimiento regulatorio avanzado y experiencia de cliente digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8" ref={ref}>
          {modules.map((module, index) => {
            const Icon = module.icon
            const isSuccess = module.color === "success"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full"
              >
                <Card className="relative p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 h-full bg-card/80 backdrop-blur-sm">
                  {module.premium && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                        Premium
                      </span>
                    </div>
                  )}

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      isSuccess ? "bg-success/10" : "bg-primary/10"
                    }`}
                  >
                    <Icon className={`w-7 h-7 ${isSuccess ? "text-success" : "text-primary"}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{module.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{module.description}</p>

                  <ul className="space-y-3">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isSuccess ? "text-success" : "text-primary"}`}
                        />
                        <span className="text-sm text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Coins className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  Soporte Crypto Nativo
                  <div className="flex gap-1">
                    <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">EVM</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-warning/10 text-warning font-mono">⚡BTC</span>
                  </div>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Acepta pagos en Ethereum, Polygon, BSC y Bitcoin Lightning Network directamente en el POS. Conversión
                  automática a MXN para reportes.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-info/5 to-transparent border-2 border-info/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-info flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-info-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">Machine Learning Integrado</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Algoritmos de predicción analizan patrones de venta e inventario para forecasting inteligente.
                  Optimiza compras y reduce desperdicio.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
