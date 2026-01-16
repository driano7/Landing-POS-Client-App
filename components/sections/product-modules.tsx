"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, TrendingUp, Shield, Check, Brain, Coins, ExternalLink, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const modules = [
  {
    icon: ShoppingCart,
    title: "Starter — Presencia digital + POS base",
    description: "Para restaurantes que quieren empezar con lo esencial.",
    features: [
      "Sitio web básico en un subdominio de Xoco (landing 1–3 secciones, responsive).",
      "POS operativo para caja y mesas con inventario básico y roles.",
      "Programa de lealtad mediante QR de cliente.",
      "Pagos con tarjetas y transferencias locales: SPEI/CoDi en México, PIX en Brasil y tarjetas + wallets en USA.",
      "Integración opcional con terminal Blokko.io para unificar tarjetas, transferencias locales y pagos crypto.",
    ],
    color: "primary",
  },
  {
    icon: TrendingUp,
    title: "Growth — Web premium + POS + App Cliente",
    description: "Para negocios que quieren crecer su marca y digitalizar pedidos y reservas.",
    includesStarter: true,
    features: [
      "Sitio web premium con animaciones suaves, tipografía Lato y gradientes de la marca.",
      "Dominio personalizado disponible (compra de dominio se cotiza por separado).",
      "POS operativo completo para caja/mesas, inventario y roles.",
      "App Cliente (móvil y escritorio) para pedidos y reservaciones.",
      "Soporte para 3 tipos de QR: ID cliente, tickets/pedidos y reservaciones.",
      "Integración opcional con terminal Blokko.io (EVM y Lightning).",
    ],
    color: "info",
    featured: true,
  },
  {
    icon: Shield,
    title: "Compliance & Data — Suite completa",
    description: "Para operaciones que necesitan métricas, regulación sanitaria y pagos avanzados.",
    features: [
      "Todo lo incluido en Growth.",
      "Métricas avanzadas con dashboards de ventas, productos, horas pico y rotación de inventario.",
      "Panel sanitario configurable: COFEPRIS (MX), FDA Food Code (US) y ANVISA (BR).",
      "Pagos crypto con Blokko.io, sujetos a sus términos y comisiones.",
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
            Tres paquetes, una suite completa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde presencia digital básica hasta cumplimiento regulatorio avanzado y experiencia de cliente digital
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6" ref={ref}>
          {modules.map((module, index) => {
            const Icon = module.icon
            const colorClass =
              module.color === "success" ? "text-success" : module.color === "info" ? "text-info" : "text-primary"
            const bgClass =
              module.color === "success" ? "bg-success/10" : module.color === "info" ? "bg-info/10" : "bg-primary/10"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="h-full"
              >
                <Card
                  className={`relative p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 h-full bg-card/80 backdrop-blur-sm flex flex-col ${module.featured ? "border-primary shadow-lg" : ""}`}
                >
                  {module.premium && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-success text-success-foreground">
                        Premium
                      </span>
                    </div>
                  )}
                  {module.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary text-primary-foreground">
                        Recomendado
                      </span>
                    </div>
                  )}

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${bgClass}`}>
                    <Icon className={`w-7 h-7 ${colorClass}`} />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3">{module.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{module.description}</p>

                  {module.includesStarter && (
                    <div className="mb-4">
                      <span className="inline-block text-sm font-semibold text-info underline decoration-info decoration-2 underline-offset-4">
                        Incluye todo de Starter +
                      </span>
                    </div>
                  )}

                  <ul className="space-y-3 flex-grow">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${colorClass}`} />
                        <span
                          className={`text-sm text-foreground/80 ${module.includesStarter ? "underline decoration-info/50 decoration-1 underline-offset-2" : ""}`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-border">
                    <Button className="w-full gap-2" variant={module.featured ? "default" : "outline"} asChild>
                      <a
                        href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20conocer%20más%20sobre%20Xoco%20Suite"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Contactar
                      </a>
                    </Button>
                  </div>
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
                    Soporte Crypto Nativo
                    <div className="flex gap-1">
                      <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">EVM</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-warning/10 text-warning font-mono">⚡BTC</span>
                    </div>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Acepta pagos en Ethereum, Arbitrum, Optimism y Bitcoin Lightning Network directamente a través de
                    terminales compatibles (por ejemplo, Blokko.io), con conversión automática a MXN, USD o BRL para tu
                    negocio.
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
