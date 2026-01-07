"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertCircle, FileText, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Cofepris() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Panel COFEPRIS integrado para cumplimiento sanitario
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Diseñado alineado a requerimientos de manejo y tracking de alimentos con registros trazables y exportables
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12" ref={ref}>
          {[
            {
              icon: CheckCircle2,
              badge: "Al día",
              title: "Higiene y limpieza",
              description: "Checklist diario, semanal y mensual con timestamps",
              metric: "98%",
              metricLabel: "Cumplimiento este mes",
            },
            {
              icon: AlertCircle,
              badge: "Cumplimiento",
              title: "Control de plagas",
              description: "Registro de fumigaciones y reportes",
              metric: "Ene 15",
              metricLabel: "Próxima revisión",
            },
            {
              icon: FileText,
              badge: "Listo",
              title: "Inventario alimentario",
              description: "Tracking de caducidades y temperaturas",
              metric: "0",
              metricLabel: "Productos próximos a caducar",
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="p-6 border-2 border-success/20 hover:border-success/40 transition-colors h-full bg-card/80 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-success" />
                    </div>
                    <Badge className="bg-success text-success-foreground">{item.badge}</Badge>
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-success">{item.metric}</div>
                  <div className="text-xs text-muted-foreground">{item.metricLabel}</div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <Card className="p-8 bg-card/80 backdrop-blur-sm border-2 border-success/20">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-7 h-7 text-success" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">Exportación para auditorías</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Genera reportes completos en CSV o XLSX con filtros mensuales. Todos los registros incluyen timestamps,
                responsable y evidencia fotográfica cuando aplica.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-success/30 text-success">
                  Exportar CSV
                </Badge>
                <Badge variant="outline" className="border-success/30 text-success">
                  Exportar XLSX
                </Badge>
                <Badge variant="outline" className="border-success/30 text-success">
                  Filtros personalizados
                </Badge>
                <Badge variant="outline" className="border-success/30 text-success">
                  Historial completo
                </Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
