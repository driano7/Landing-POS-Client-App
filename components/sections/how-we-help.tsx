"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Route, Settings2, TrendingUp } from "lucide-react"

const pillars = [
  {
    icon: Route,
    title: "Entendemos tu operación real",
    text: "Conocemos la logística diaria de cocina, caja, inventario y servicio para resolver problemas de raíz.",
  },
  {
    icon: Settings2,
    title: "Diseñamos la gestión ideal",
    text: "Ajustamos flujos, roles y procesos para que cada área trabaje coordinada y con menos fricción.",
  },
  {
    icon: TrendingUp,
    title: "Buscamos resultados medibles",
    text: "Te ayudamos a mejorar control, tiempos y rentabilidad con una solución práctica para tu negocio.",
  },
]

export function HowWeHelp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-4xl mx-auto mb-8"
        >
          <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">Gestión inteligente para restaurantes</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Como ayudamos a resolver tus problemas</h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">
            Entendemos la logística y las implicaciones de tu negocio, así que ayudamos a nuestros clientes a construir la gestión ideal para obtener mejores resultados gracias a la magia del software como solución, no como tecnología complicada.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all bg-card/80">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
