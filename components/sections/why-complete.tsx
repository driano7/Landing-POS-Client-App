"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TypingText } from "@/components/ui/typing-text"
import { CheckCircle2, Shield } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const bullets = [
  "Evitas pagar 3 o 4 softwares distintos para POS, pedidos, sitio web, BI y pagos.",
  "Tienes todo en un solo lugar, con una vista unificada del negocio.",
  "Tus datos se protegen con cifrado y buenas prácticas tipo GDPR. 🔒",
  "Incluye panel sanitario y operación offline con sincronización al volver internet.",
]

export function WhyComplete() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section id="seguridad" className="py-16 md:py-24 bg-muted/30">
      <div id="cofepris" className="relative -top-20" />
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.45 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
            <Shield className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary">Por qué Xoco Suite</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            <TypingText text="Una solución pensada para operar sin fricción" />
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.45, delay: 0.1 }}
        >
          <Card className="max-w-4xl mx-auto p-6 md:p-8 border-2 border-border bg-card/85 backdrop-blur-sm">
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm md:text-base text-foreground/90">{bullet}</p>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex justify-center">
              <Button asChild variant="outline" className="border-primary/35 text-primary hover:bg-primary/10 rounded-xl font-semibold">
                <Link href="/prices">Ver planes y precios</Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
