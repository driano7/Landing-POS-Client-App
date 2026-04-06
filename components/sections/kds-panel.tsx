"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { useTheme } from "next-themes"
import { useLocale } from "@/components/locale-provider"
import {
  ArrowUpRight,
  Clock3,
  Layers3,
  Link2,
  MessagesSquare,
  MonitorSmartphone,
  ReceiptText,
  ShieldCheck,
  SplitSquareHorizontal,
  TimerReset,
  Workflow,
  DollarSign,
  AlertTriangle,
} from "lucide-react"

const panelVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const copyByLocale = {
  es: {
    badge: "KDS para cocina conectada",
    overline: "Integración POS + estaciones + expedición",
    title: "Kitchen Display System: menos papel, más control y mejor ritmo en cocina",
    description:
      "El KDS reemplaza tickets impresos por pantallas de cocina que reciben la orden en el momento, la reparten por estación y dejan trazabilidad clara de lo que ya salió, lo que sigue y lo que necesita atención.",
    operationHeading: "Qué mejora en operación",
    sourcesHeading: "Fuentes que respaldan este enfoque",
    sources: [
      {
        label: "Toast KDS",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        label: "Square KDS",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        label: "Lightspeed KDS",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
      {
        label: "TouchBistro KDS",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
    ],
    metrics: [
      {
        icon: Layers3,
        title: "Eficiencia",
        description: "Conecta front y back of house en una sola vista, con estaciones, prioridades y reportes de tiempos de preparación.",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        icon: Clock3,
        title: "Rapidez",
        description: "Tickets instantáneos, alertas sonoras, timers y actualizaciones en tiempo real para que la cocina vea antes lo que entra.",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        icon: AlertTriangle,
        title: "Menos errores",
        description: "Las órdenes digitales reducen tickets perdidos, letra ilegible y modificaciones mal interpretadas.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: DollarSign,
        title: "Costos",
        description: "Menos papel, tinta, impresiones y retrabajo por errores o tickets duplicados.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: MessagesSquare,
        title: "Comunicación",
        description: "FOH y BOH trabajan con una sola fuente de verdad, con rutas a expediter y estaciones de preparación.",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
    ],
    integrationSteps: [
      {
        icon: ReceiptText,
        title: "Pedido capturado",
        description: "La orden nace en el POS o en tus canales conectados y se convierte en ticket digital.",
      },
      {
        icon: Workflow,
        title: "Enrutamiento por estación",
        description: "Distribuimos items por prep station, pase o expediter para evitar cuellos de botella.",
      },
      {
        icon: TimerReset,
        title: "Seguimiento de tiempos",
        description: "Tiempos de preparación, estados y prioridad quedan visibles para la operación y supervisión.",
      },
      {
        icon: MonitorSmartphone,
        title: "Sincronización operativa",
        description: "La cocina recibe cambios, cancelaciones y ajustes en pantalla sin depender de papel.",
      },
    ],
  },
  en: {
    badge: "KDS for the connected kitchen",
    overline: "POS + stations + expediter integration",
    title: "Kitchen Display System: less paper, more control, and better kitchen rhythm",
    description:
      "The KDS replaces printed tickets with kitchen screens that receive the order instantly, route it by station, and leave clear traceability of what has gone out, what is next, and what needs attention.",
    operationHeading: "What improves in operations",
    sourcesHeading: "Sources supporting this approach",
    sources: [
      {
        label: "Toast KDS",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        label: "Square KDS",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        label: "Lightspeed KDS",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
      {
        label: "TouchBistro KDS",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
    ],
    metrics: [
      {
        icon: Layers3,
        title: "Efficiency",
        description: "Connects front and back of house in one view, with stations, priorities, and prep-time reporting.",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        icon: Clock3,
        title: "Speed",
        description: "Instant tickets, sound alerts, timers, and real-time updates help the kitchen see orders sooner.",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        icon: AlertTriangle,
        title: "Fewer errors",
        description: "Digital orders reduce lost tickets, unreadable handwriting, and misinterpreted modifications.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: DollarSign,
        title: "Costs",
        description: "Less paper, ink, printing, and rework from errors or duplicate tickets.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: MessagesSquare,
        title: "Communication",
        description: "FOH and BOH work from one source of truth, with routes to the expediter and prep stations.",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
    ],
    integrationSteps: [
      {
        icon: ReceiptText,
        title: "Order captured",
        description: "The order starts in the POS or your connected channels and becomes a digital ticket.",
      },
      {
        icon: Workflow,
        title: "Station routing",
        description: "We distribute items by prep station, pass, or expediter to avoid bottlenecks.",
      },
      {
        icon: TimerReset,
        title: "Time tracking",
        description: "Prep times, statuses, and priority stay visible for operations and supervision.",
      },
      {
        icon: MonitorSmartphone,
        title: "Operational sync",
        description: "The kitchen receives changes, cancellations, and updates on screen without relying on paper.",
      },
    ],
  },
  pt: {
    badge: "KDS para a cozinha conectada",
    overline: "Integração PDV + estações + expedidor",
    title: "Kitchen Display System: menos papel, mais controle e melhor ritmo na cozinha",
    description:
      "O KDS substitui tickets impressos por telas de cozinha que recebem o pedido na hora, distribuem por estação e deixam rastreabilidade clara do que já saiu, do que vem a seguir e do que precisa de atenção.",
    operationHeading: "O que melhora na operação",
    sourcesHeading: "Fontes que sustentam esta abordagem",
    sources: [
      {
        label: "Toast KDS",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        label: "Square KDS",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        label: "Lightspeed KDS",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
      {
        label: "TouchBistro KDS",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
    ],
    metrics: [
      {
        icon: Layers3,
        title: "Eficiência",
        description: "Conecta frente e cozinha em uma única visão, com estações, prioridades e relatórios de tempo de preparo.",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        icon: Clock3,
        title: "Rapidez",
        description: "Tickets instantâneos, alertas sonoros, timers e atualizações em tempo real ajudam a cozinha a ver os pedidos antes.",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        icon: AlertTriangle,
        title: "Menos erros",
        description: "Pedidos digitais reduzem tickets perdidos, letra ilegível e modificações mal interpretadas.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: DollarSign,
        title: "Custos",
        description: "Menos papel, tinta, impressão e retrabalho por erros ou tickets duplicados.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: MessagesSquare,
        title: "Comunicação",
        description: "FOH e BOH trabalham com uma única fonte da verdade, com rotas para expedidor e estações de preparo.",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
    ],
    integrationSteps: [
      {
        icon: ReceiptText,
        title: "Pedido capturado",
        description: "O pedido nasce no PDV ou nos seus canais conectados e vira um ticket digital.",
      },
      {
        icon: Workflow,
        title: "Roteamento por estação",
        description: "Distribuímos itens por estação de preparo, passe ou expedidor para evitar gargalos.",
      },
      {
        icon: TimerReset,
        title: "Acompanhamento de tempo",
        description: "Tempos de preparo, status e prioridade ficam visíveis para operação e supervisão.",
      },
      {
        icon: MonitorSmartphone,
        title: "Sincronização operacional",
        description: "A cozinha recebe mudanças, cancelamentos e ajustes na tela sem depender de papel.",
      },
    ],
  },
  fr: {
    badge: "KDS pour la cuisine connectée",
    overline: "Intégration POS + postes + expéditeur",
    title: "Kitchen Display System: moins de papier, plus de contrôle et meilleur rythme en cuisine",
    description:
      "Le KDS remplace les tickets imprimés par des écrans de cuisine qui reçoivent la commande immédiatement, la routent par station et laissent une traçabilité claire de ce qui est sorti, de ce qui suit et de ce qui demande de l'attention.",
    operationHeading: "Ce qui s'améliore dans l'opération",
    sourcesHeading: "Sources qui soutiennent cette approche",
    sources: [
      {
        label: "Toast KDS",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        label: "Square KDS",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        label: "Lightspeed KDS",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
      {
        label: "TouchBistro KDS",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
    ],
    metrics: [
      {
        icon: Layers3,
        title: "Efficacité",
        description: "Relie la salle et la cuisine dans une seule vue, avec stations, priorités et suivi des temps de préparation.",
        href: "https://squareup.com/us/en/point-of-sale/restaurants/kitchen-display-system",
      },
      {
        icon: Clock3,
        title: "Rapidité",
        description: "Tickets instantanés, alertes sonores, minuteurs et mises à jour en temps réel pour voir les commandes plus tôt.",
        href: "https://doc.toasttab.com/doc/platformguide/platformKDSOverview.html",
      },
      {
        icon: AlertTriangle,
        title: "Moins d'erreurs",
        description: "Les commandes numériques réduisent les tickets perdus, l'écriture illisible et les modifications mal interprétées.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: DollarSign,
        title: "Coûts",
        description: "Moins de papier, d'encre, d'impression et de reprises liées aux erreurs ou aux tickets en double.",
        href: "https://www.touchbistro.com/blog/benefit-of-touchbistro-kds/",
      },
      {
        icon: MessagesSquare,
        title: "Communication",
        description: "FOH et BOH travaillent avec une seule source de vérité, avec des routes vers l'expéditeur et les postes de préparation.",
        href: "https://www.lightspeedhq.com/pos/restaurant/kitchen-display-system./",
      },
    ],
    integrationSteps: [
      {
        icon: ReceiptText,
        title: "Commande capturée",
        description: "La commande naît dans le POS ou dans vos canaux connectés et devient un ticket numérique.",
      },
      {
        icon: Workflow,
        title: "Routage par station",
        description: "Nous distribuons les éléments par poste de préparation, passe ou expéditeur pour éviter les goulots.",
      },
      {
        icon: TimerReset,
        title: "Suivi du temps",
        description: "Les temps de préparation, les statuts et la priorité restent visibles pour l'opération et la supervision.",
      },
      {
        icon: MonitorSmartphone,
        title: "Synchronisation opérationnelle",
        description: "La cuisine reçoit les changements, annulations et ajustements à l'écran sans dépendre du papier.",
      },
    ],
  },
} as const

export function KdsPanel() {
  const { locale } = useLocale()
  const { resolvedTheme, theme } = useTheme()
  const currentTheme = resolvedTheme ?? theme ?? "dark"
  const isDark = currentTheme === "dark"
  const copy = copyByLocale[locale]

  const shellClassName = isDark
    ? "relative overflow-hidden border border-primary/20 bg-gradient-to-br from-[#1f1510] via-[#2f1f18] to-[#4b2f22] text-white shadow-[0_24px_80px_rgba(46,24,18,0.35)] dark:border-primary/20"
    : "relative overflow-hidden border border-amber-200 bg-gradient-to-br from-[#fffaf5] via-[#fff1e6] to-[#f8e8d8] text-[#2b1d16] shadow-[0_18px_60px_rgba(122,78,46,0.12)]"

  const badgeClassName = isDark
    ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
    : "border-amber-200 bg-white/80 text-[#5d4037] hover:bg-white"

  const chipClassName = isDark
    ? "rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
    : "rounded-2xl border border-amber-200/80 bg-white/80 p-4 backdrop-blur-sm"

  const metricClassName = isDark
    ? "group rounded-2xl border border-white/10 bg-white/8 p-4 transition-colors hover:border-white/20 hover:bg-white/12"
    : "group rounded-2xl border border-amber-200/80 bg-white/80 p-4 transition-colors hover:border-amber-300 hover:bg-white"

  const iconPillClassName = isDark
    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-[#ffd9b0]"
    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[#8d5a3c]"

  const textMutedClassName = isDark ? "text-sm text-white/72" : "text-sm text-[#5d4037]/80"

  return (
    <section className="container mx-auto px-4 lg:px-8 pt-2 pb-8">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={panelVariants}
      >
        <Card className={shellClassName}>
          <div
            className={`absolute inset-0 ${
              isDark
                ? "bg-[radial-gradient(circle_at_top_left,rgba(255,200,130,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_28%)]"
                : "bg-[radial-gradient(circle_at_top_left,rgba(255,193,145,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.65),transparent_28%)]"
            }`}
          />
          <div className="relative p-6 md:p-8">
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3">
              <Badge className={badgeClassName}>
                {copy.badge}
              </Badge>
              <span className={`inline-flex items-center gap-2 text-xs ${isDark ? "text-white/75" : "text-[#6f4a34]"}`}>
                <SplitSquareHorizontal className="h-3.5 w-3.5" />
                {copy.overline}
              </span>
            </motion.div>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-bold text-balance">
                  {copy.title}
                </h2>
                <p className={`mt-3 max-w-3xl text-sm md:text-base ${isDark ? "text-white/78" : "text-[#5d4037]/82"}`}>
                  {copy.description}
                </p>
              </motion.div>

              <motion.div variants={panelVariants} className="mt-5 grid gap-3 sm:grid-cols-2">
                  {copy.integrationSteps.map((item) => {
                    const Icon = item.icon
                    return (
                      <motion.div key={item.title} variants={itemVariants} className={chipClassName}>
                        <div className="flex items-start gap-3">
                          <div className={iconPillClassName}>
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <p className="font-semibold">{item.title}</p>
                            <p className={`mt-1 ${textMutedClassName}`}>{item.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
              </motion.div>

              <motion.div variants={itemVariants} className={isDark ? "rounded-3xl border border-white/10 bg-black/15 p-4 md:p-5" : "rounded-3xl border border-amber-200/80 bg-white/80 p-4 md:p-5"}>
                <div className={`flex items-center gap-2 text-sm font-semibold ${isDark ? "text-white/90" : "text-[#4b2f22]"}`}>
                  <ShieldCheck className={`h-4 w-4 ${isDark ? "text-[#ffd9b0]" : "text-[#8d5a3c]"}`} />
                  {copy.operationHeading}
                </div>
                <motion.div variants={panelVariants} className="mt-4 grid gap-3">
                  {copy.metrics.map((metric, index) => {
                    const Icon = metric.icon
                    return (
                      <motion.a
                        key={metric.title}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.35 }}
                        href={metric.href}
                        target="_blank"
                        rel="noreferrer"
                        className={metricClassName}
                        transition={{ duration: 0.42, delay: index * 0.08 }}
                        whileHover={{ y: -4 }}
                      >
                        <div className="flex items-start gap-3">
                          <div className={iconPillClassName}>
                            <Icon className="h-4.5 w-4.5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-semibold">{metric.title}</p>
                              <ArrowUpRight className={`h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? "text-white/50" : "text-[#8d5a3c]/65"}`} />
                            </div>
                            <p className={`mt-1 ${textMutedClassName}`}>{metric.description}</p>
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </motion.div>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className={isDark ? "mt-6 rounded-2xl border border-white/10 bg-black/10 p-4" : "mt-6 rounded-2xl border border-amber-200/80 bg-white/75 p-4"}>
              <div className={`flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] ${isDark ? "text-white/60" : "text-[#7a533c]/70"}`}>
                <Link2 className="h-3.5 w-3.5" />
                {copy.sourcesHeading}
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {copy.sources.map((source) => (
                  <a
                    key={source.label}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      isDark
                        ? "border-white/12 bg-white/8 text-white/85 hover:border-white/25 hover:bg-white/12"
                        : "border-amber-200/80 bg-white/85 text-[#5d4037] hover:border-amber-300 hover:bg-white"
                    }`}
                  >
                    {source.label}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </section>
  )
}
