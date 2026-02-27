"use client"
<<<<<<< HEAD
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
=======

import { Bitcoin, Shield, Smartphone, TrendingUp } from "lucide-react"
>>>>>>> c135cd15 (addings perplexity)

const benefits = [
  {
<<<<<<< HEAD
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
=======
    icon: Bitcoin,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
    title: "Pagos del Futuro",
    description:
      "Acepta Bitcoin, ETH, USDC y USDT directamente en tu POS. Sin intermediarios, sin comisiones abusivas.",
    stat: "Ahorra hasta 80%",
    statLabel: "en comisiones",
  },
  {
    icon: Shield,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    title: "Cumplimiento COFEPRIS",
    description:
      "Panel dedicado para registros de higiene, control de plagas y inventario alimentario. Exporta reportes mensuales.",
    stat: "100% Compliant",
    statLabel: "Listo para auditorías",
  },
  {
    icon: Smartphone,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    title: "App Cliente Completa",
    description:
      "Tus clientes hacen pedidos desde su celular y pagan con su wallet crypto. Sin apps de terceros.",
    stat: "0% comisión",
    statLabel: "en pedidos directos",
  },
  {
    icon: TrendingUp,
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    title: "Métricas en Tiempo Real",
    description:
      "Dashboards de ventas, productos más vendidos y horas pico. Decisiones respaldadas por datos.",
    stat: "Insights",
    statLabel: "en segundos",
>>>>>>> c135cd15 (addings perplexity)
  },
]

export function WhyComplete() {
  return (
<<<<<<< HEAD
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
=======
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-600">
            Ventajas Competitivas
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-900">¿Por Qué Xoco Suite?</h2>
            <p className="text-lg text-gray-600">
              La única plataforma que combina POS, crypto y compliance en un solo sistema
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div
                  className={`${benefit.bgColor} mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
                >
                  <Icon size={32} className={`${benefit.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                <div className="mt-auto space-y-1">
                  <p className="text-3xl font-bold text-gray-900">{benefit.stat}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{benefit.statLabel}</p>
                </div>
              </article>
            )
          })}
        </div>
>>>>>>> c135cd15 (addings perplexity)
      </div>
    </section>
  )
}
