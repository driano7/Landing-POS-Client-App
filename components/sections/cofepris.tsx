"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Cofepris() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const cofeprisItems = [
    {
      icon: CheckCircle2,
      badge: "Al día",
      title: "Higiene y limpieza",
      description: "Checklist diario, semanal y mensual",
      metric: "98%",
    },
    {
      icon: AlertCircle,
      badge: "Cumplimiento",
      title: "Control de plagas",
      description: "Registro de fumigaciones",
      metric: "Ene 15",
    },
    {
      icon: FileText,
      badge: "Listo",
      title: "Inventario alimentario",
      description: "Tracking de caducidades",
      metric: "0",
    },
    {
      icon: CheckCircle2,
      badge: "Verificado",
      title: "Exportación auditorías",
      description: "CSV, XLSX y filtros personalizados",
      metric: "✓",
    },
  ]

  return (
    <section id="cofepris" className="py-20 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
            <CheckCircle2 className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Cumplimiento COFEPRIS</span>
          </div>

          <h3 className="text-lg font-semibold text-muted-foreground mb-3">Panel sanitario configurable</h3>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Panel COFEPRIS integrado para cumplimiento sanitario
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Diseñado alineado a requerimientos de manejo y tracking de alimentos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4" ref={ref}>
          {cofeprisItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-4 border-2 border-success/20 hover:border-success/40 transition-colors h-full bg-card/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-success" />
                    </div>
                    <Badge className="bg-success text-success-foreground text-xs">{item.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-sm text-foreground mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                  <div className="text-lg font-bold text-success">{item.metric}</div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            El panel se adapta a las regulaciones locales de cada mercado: COFEPRIS para México, Health Departments y
            FDA para Estados Unidos, y ANVISA para Brasil. Mantén el cumplimiento sanitario sin importar dónde operes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
