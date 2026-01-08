"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, BarChart3, Check, Brain, Coins, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const modules = [
  {
    icon: ShoppingCart,
    title: "Básico — POS Operativo",
    description:
      "Todo lo que necesitas para operar tu restaurante día a día: caja, mesas, inventario básico y programa de lealtad.",
    features: [
      "Toma de órdenes, tickets y flujo de preparación en tiempo real.",
      "Control de mesas y roles de usuario (caja, cocina, administración).",
      "Inventario básico con alertas de stock.",
      "Programa de lealtad mediante QR de cliente.",
      "Compatible con terminales como Blokko.io para cobros con tarjetas y transferencias locales.",
    ],
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Premium — Métricas, Cumplimiento y App Cliente",
    description:
      "Lleva tu operación al siguiente nivel con analítica avanzada, panel sanitario configurable y una app de cliente integrada para pedidos y reservaciones.",
    features: [
      "Dashboards avanzados de ventas, tiempos de preparación y desempeño por producto/hora.",
      "Panel sanitario configurable: COFEPRIS (MX), Health Depts/FDA (US) y ANVISA (BR), con checklists de higiene, plagas, inventario alimentario y residuos, más exportación CSV/XLSX para auditorías.",
      "App Cliente (móvil y desktop) para pedidos y reservaciones, con soporte para compartir o descargar tickets y reservas.",
      "Soporte de 3 tipos de QR: ID cliente (lealtad), tickets/pedidos (productos y propinas) y reservaciones.",
      "Cifrado AES-GCM y gestión de datos inspirada en GDPR para proteger la información de tus clientes.",
      "Integración con terminal Blokko.io para tarjetas, SPEI/CoDi en México, PIX en Brasil y pagos con criptomonedas convertidos automáticamente a moneda local.",
    ],
    color: "success",
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
            Dos módulos, una suite completa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde operación básica hasta cumplimiento regulatorio avanzado y experiencia de cliente digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8" ref={ref}>
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
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Coins className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                    Soporte Crypto Nativo con Blokko.io
                    <div className="flex gap-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">EVM</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-warning/10 text-warning font-mono">⚡BTC</span>
                    </div>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Acepta pagos en Ethereum, Arbitrum, Optimism y Bitcoin Lightning Network directamente en la terminal
                    Blokko, con conversión automática a MXN, USD o BRL para tu negocio. Integramos los pagos crypto
                    dentro del mismo flujo del POS.
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-fit bg-transparent" asChild>
                <a
                  href="https://blokko.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Conoce Blokko.io
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
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
