"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { TypingText } from "@/components/ui/typing-text"
import { Globe, Smartphone, Store, CreditCard, BarChart3, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

const suiteCards = [
  {
    icon: Globe,
    title: "Sitio web profesional",
    description: "Presencia digital clara, menú actualizado y marca consistente.",
    glow: true,
  },
  {
    icon: Smartphone,
    title: "App cliente",
    description: "Reservas, pedidos y lealtad desde QR o navegador.",
    glow: true,
  },
  {
    icon: Store,
    title: "Punto de venta",
    description: "Órdenes, caja e inventario conectados en un solo flujo.",
    glow: true,
  },
  {
    icon: BarChart3,
    title: "Métricas avanzadas",
    description: "Dashboards para ventas, inventario y decisiones del día a día.",
  },
  {
    icon: ShieldCheck,
    title: "Panel sanitario",
    description: "Registros de higiene y cumplimiento listos para auditoría.",
  },
  {
    icon: CreditCard,
    title: "Pagos con Blokko.io",
    description: "Tarjetas, SPEI, PIX y cripto con liquidación en moneda local.",
    glow: true,
  },
]

export function ProductModules() {
  return (
    <section id="productos" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            <TypingText text="Todo lo que tu restaurante necesita" />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Seis módulos clave en una sola plataforma para operar mejor y crecer con orden.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {suiteCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.42, delay: index * 0.12 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <Card
                  className={`h-full p-6 bg-card/85 backdrop-blur-sm border-2 transition-all ${
                    card.glow
                      ? "border-primary/35 shadow-[0_12px_28px_rgba(122,78,46,0.18)] hover:border-primary/70 hover:shadow-[0_22px_50px_rgba(122,78,46,0.28)] dark:border-primary/45 dark:shadow-lg dark:shadow-primary/15 dark:hover:shadow-xl dark:hover:shadow-primary/25"
                      : "border-border hover:border-primary/40 hover:shadow-lg"
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/12 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ¿Quieres ver qué incluye cada plan?{" "}
          <Link href="/prices" className="text-primary font-medium hover:underline">
            Revisa los planes aquí
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
