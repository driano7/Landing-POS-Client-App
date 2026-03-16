"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const planSummary = [
  { name: "Starter", price: "$199", subtitle: "Para probar" },
  { name: "Emprende", price: "$499", subtitle: "1 sucursal" },
  { name: "Escala", price: "$899", subtitle: "Más operación" },
  { name: "Cadena", price: "$1,499", subtitle: "3+ sucursales" },
]

export function Pricing() {
  return (
    <section id="planes" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Planes para cada tipo de restaurante
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Elige el plan que mejor se adapta a tu operación, desde un plan de entrada para probar hasta un plan
            completo para cadenas con múltiples sucursales.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {planSummary.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.38, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              <Card className="p-4 text-center border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <p className="text-sm font-medium text-muted-foreground">{plan.name}</p>
                <p className="text-2xl md:text-3xl font-bold text-foreground mt-1">{plan.price}</p>
                <p className="text-xs text-muted-foreground mt-1">{plan.subtitle}</p>
                <p className="text-[11px] text-muted-foreground">MXN/mes</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
          <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground rounded-xl font-semibold">
            <Link href="/prices">
              Ver detalle de planes <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/35 text-primary hover:bg-primary/10 rounded-xl font-semibold">
            <a href="https://wa.me/525512291607?text=Hola%2C%20quiero%20ayuda%20para%20elegir%20un%20plan%20de%20Xoco%20Suite" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
          </Button>
        </div>

        <p className="text-center text-xs md:text-sm text-muted-foreground mt-6 max-w-4xl mx-auto">
          Nota: actualización de software cada 3 meses ($199 MXN por actualización) y capacitación por separado ($999
          MXN presencial / $699 MXN virtual).
        </p>

        <Card className="mt-6 p-4 md:p-5 border border-primary/25 bg-primary/10 max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-foreground text-center">
            Te acompañamos por WhatsApp en la implementación y en el día a día, sin tickets complicados.
          </p>
        </Card>
      </div>
    </section>
  )
}

export default Pricing
