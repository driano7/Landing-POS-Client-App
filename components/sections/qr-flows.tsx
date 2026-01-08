"use client"

import { Card } from "@/components/ui/card"
import { QrCode, Smartphone, Users, Receipt } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const qrTypes = [
  {
    icon: Users,
    title: "QR ID Cliente",
    subtitle: "Programa de lealtad",
    description: "Cliente escanea su QR único para acumular puntos y obtener beneficios",
    flow: ["Cliente muestra QR", "Staff escanea en POS", "Puntos acumulados", "Descuentos aplicados"],
    color: "primary",
  },
  {
    icon: Receipt,
    title: "QR de Ticket",
    subtitle: "Productos y propinas",
    description: "Genera QR de pedido que incluye productos, subtotales y opción de propina digital",
    flow: ["Pedido finalizado", "QR generado", "Cliente escanea", "Ve detalles y propina"],
    color: "primary",
  },
  {
    icon: Smartphone,
    title: "QR de Reservación",
    subtitle: "Desde app cliente",
    description: "Cliente hace reservación en app y genera QR para validar llegada",
    flow: ["Reserva en app", "QR generado", "Llegada al restaurante", "Staff valida QR"],
    color: "primary",
  },
]

export function QRFlows() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <QrCode className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Sistema QR integrado</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Tres tipos de QR para conectar todo
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde lealtad hasta pedidos y reservaciones, todo conectado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" ref={ref}>
          {qrTypes.map((qr, index) => {
            const Icon = qr.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 h-full bg-card/80 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-foreground mb-1">{qr.title}</h3>
                    <p className="text-sm text-primary font-medium">{qr.subtitle}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{qr.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">Flujo</h4>
                    {qr.flow.map((step, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-primary">{i + 1}</span>
                        </div>
                        <span className="text-xs text-foreground/80">{step}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="w-20 h-20 bg-foreground/5 rounded-lg mx-auto flex items-center justify-center">
                      <QrCode className="w-12 h-12 text-foreground/20" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-transparent border-2 border-primary/20 w-full">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
              <QrCode className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2">Integración completa</h3>
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty">
                Todos los QRs se conectan automáticamente: cuando un cliente escanea su QR de lealtad, el sistema
                vincula el pedido; cuando genera un QR de ticket, puede compartirlo en apps de mensajería o descargarlo;
                y las reservaciones se sincronizan con el POS en tiempo real. El scanner del POS es inteligente y
                autodetecta cada tipo de QR automáticamente sin que el usuario necesite hacer nada más.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
