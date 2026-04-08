"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/agency/components/ui/card"
import { Badge } from "@/agency/components/ui/badge"
import { Route, Settings2, TrendingUp } from "lucide-react"
import { useLocale } from "@/agency/components/locale-provider"

const copyByLocale = {
  es: {
    badge: "Gestión inteligente para restaurantes",
    title: "Como ayudamos a resolver tus problemas",
    description:
      "Entendemos la logística y las implicaciones de tu negocio, así que ayudamos a nuestros clientes a construir la gestión ideal para obtener mejores resultados gracias a la magia del software como solución, no como tecnología complicada.",
    pillars: [
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
    ],
  },
  en: {
    badge: "Smart management for restaurants",
    title: "How we help solve your problems",
    description:
      "We understand your business logistics and constraints, so we help clients build the ideal setup for better results by using software as a solution, not as complicated technology.",
    pillars: [
      {
        icon: Route,
        title: "We understand real operations",
        text: "We know the day-to-day logistics of kitchen, checkout, inventory, and service to solve the root problems.",
      },
      {
        icon: Settings2,
        title: "We design the ideal workflow",
        text: "We tune flows, roles, and processes so each area works together with less friction.",
      },
      {
        icon: TrendingUp,
        title: "We aim for measurable results",
        text: "We help improve control, timing, and profitability with a practical solution for your business.",
      },
    ],
  },
  pt: {
    badge: "Gestão inteligente para restaurantes",
    title: "Como ajudamos a resolver seus problemas",
    description:
      "Entendemos a logística e as implicações do seu negócio, então ajudamos nossos clientes a construir a gestão ideal para obter melhores resultados usando software como solução, não como tecnologia complicada.",
    pillars: [
      {
        icon: Route,
        title: "Entendemos a operação real",
        text: "Conhecemos a rotina de cozinha, caixa, estoque e atendimento para resolver os problemas na origem.",
      },
      {
        icon: Settings2,
        title: "Projetamos a gestão ideal",
        text: "Ajustamos fluxos, papéis e processos para que cada área trabalhe em conjunto com menos atrito.",
      },
      {
        icon: TrendingUp,
        title: "Buscamos resultados mensuráveis",
        text: "Ajudamos a melhorar controle, tempo e rentabilidade com uma solução prática para o negócio.",
      },
    ],
  },
  fr: {
    badge: "Gestion intelligente pour restaurants",
    title: "Comment nous aidons à résoudre vos problèmes",
    description:
      "Nous comprenons la logistique et les contraintes de votre activité, alors nous aidons nos clients à construire la bonne gestion pour obtenir de meilleurs résultats en utilisant le logiciel comme solution, pas comme technologie compliquée.",
    pillars: [
      {
        icon: Route,
        title: "Nous comprenons l’opération réelle",
        text: "Nous connaissons le quotidien de la cuisine, de la caisse, des stocks et du service pour résoudre les problèmes à la racine.",
      },
      {
        icon: Settings2,
        title: "Nous concevons le workflow idéal",
        text: "Nous ajustons les flux, les rôles et les processus pour que chaque équipe travaille mieux ensemble.",
      },
      {
        icon: TrendingUp,
        title: "Nous visons des résultats mesurables",
        text: "Nous aidons à améliorer le contrôle, les délais et la rentabilité avec une solution pratique.",
      },
    ],
  },
} as const

export function HowWeHelp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const { locale } = useLocale()
  const copy = copyByLocale[locale]

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
          <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">{copy.badge}</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{copy.title}</h2>
          <p className="text-base md:text-lg text-muted-foreground text-pretty">{copy.description}</p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {copy.pillars.map((pillar, index) => {
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
