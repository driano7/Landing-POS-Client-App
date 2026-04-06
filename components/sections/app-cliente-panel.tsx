"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useLocale } from "@/components/locale-provider"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import {
  ArrowUpRight,
  CreditCard,
  MessagesSquare,
  MonitorSmartphone,
  QrCode,
  ShieldCheck,
  ShoppingBag,
  TimerReset,
  WalletCards,
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
    badge: "App Cliente conectada",
    overline: "Ordena, paga y regresa sin descargar nada",
    title: "Tus clientes podrán pagar y ordenar desde donde quieran. Cliente feliz, cliente satisfecho",
    description:
      "La App Cliente reúne navegación, pedido y pago en un mismo flujo para que el usuario llegue más rápido a lo que busca y vuelva con menos fricción.",
    supportCards: [
      {
        icon: MonitorSmartphone,
        title: "Web responsiva",
        description: "Funciona en celular, tablet y desktop para que el cliente entre desde cualquier dispositivo.",
      },
      {
        icon: ShoppingBag,
        title: "Pedidos y cobro",
        description: "Integramos menú, carrito y pago para convertir interés en compra en menos pasos.",
      },
      {
        icon: MessagesSquare,
        title: "Comunicación clara",
        description: "Confirmaciones, estados y notificaciones reducen incertidumbre y preguntas repetidas.",
      },
      {
        icon: ShieldCheck,
        title: "Lealtad flexible",
        description: "La experiencia conserva orden y abre recompensas, recompra y acceso rápido en cada visita.",
      },
    ],
    customerCards: [
      {
        icon: QrCode,
        title: "Ordena desde donde quiera",
        description: "Desde QR o navegador, sin descargar app y sin fricción para empezar.",
      },
      {
        icon: CreditCard,
        title: "Paga en el mismo flujo",
        description: "Un recorrido claro para ordenar y pagar sin saltos innecesarios entre pantallas.",
      },
      {
        icon: TimerReset,
        title: "Sigue su pedido en vivo",
        description: "Estado visible de preparación, listo y entregado para bajar ansiedad y dudas.",
      },
      {
        icon: WalletCards,
        title: "Cliente feliz, cliente satisfecho",
        description: "Lealtad, recompra y acceso rápido a reservas o pedidos futuros desde el mismo canal.",
      },
    ],
  },
  en: {
    badge: "Connected Client App",
    overline: "Order, pay, and come back without downloading anything",
    title: "Your customers can order and pay wherever they want. Happy customer, satisfied customer",
    description:
      "The Client App brings navigation, ordering, and payment into one flow so users get to what they need faster and come back with less friction.",
    supportCards: [
      {
        icon: MonitorSmartphone,
        title: "Responsive web",
        description: "Works on phone, tablet, and desktop so customers can enter from any device.",
      },
      {
        icon: ShoppingBag,
        title: "Ordering and checkout",
        description: "We connect menu, cart, and payment to turn interest into purchase in fewer steps.",
      },
      {
        icon: MessagesSquare,
        title: "Clear communication",
        description: "Confirmations, status updates, and notifications reduce uncertainty and repeated questions.",
      },
      {
        icon: ShieldCheck,
        title: "Flexible loyalty",
        description: "The experience keeps order while opening rewards, repeat purchases, and quick access on every visit.",
      },
    ],
    customerCards: [
      {
        icon: QrCode,
        title: "Order from anywhere",
        description: "From QR or browser, with no app download and minimal friction to start.",
      },
      {
        icon: CreditCard,
        title: "Pay in the same flow",
        description: "A clear journey to order and pay without unnecessary screen jumps.",
      },
      {
        icon: TimerReset,
        title: "Track the order live",
        description: "Visible prep, ready, and delivered states reduce anxiety and doubt.",
      },
      {
        icon: WalletCards,
        title: "Happy customer, satisfied customer",
        description: "Loyalty, repeat purchases, and quick access to future reservations or orders from the same channel.",
      },
    ],
  },
  pt: {
    badge: "App do Cliente conectada",
    overline: "Peça, pague e volte sem baixar nada",
    title: "Seus clientes poderão pedir e pagar de onde quiserem. Cliente feliz, cliente satisfeito",
    description:
      "A App do Cliente reúne navegação, pedido e pagamento em um único fluxo para que o usuário chegue mais rápido ao que procura e volte com menos atrito.",
    supportCards: [
      {
        icon: MonitorSmartphone,
        title: "Web responsiva",
        description: "Funciona em celular, tablet e desktop para que o cliente entre de qualquer dispositivo.",
      },
      {
        icon: ShoppingBag,
        title: "Pedidos e pagamento",
        description: "Integramos menu, carrinho e pagamento para converter interesse em compra em menos passos.",
      },
      {
        icon: MessagesSquare,
        title: "Comunicação clara",
        description: "Confirmações, status e notificações reduzem incerteza e perguntas repetidas.",
      },
      {
        icon: ShieldCheck,
        title: "Lealdade flexível",
        description: "A experiência mantém a organização e abre recompensas, recompra e acesso rápido em cada visita.",
      },
    ],
    customerCards: [
      {
        icon: QrCode,
        title: "Peça de onde quiser",
        description: "Via QR ou navegador, sem baixar app e com pouca fricção para começar.",
      },
      {
        icon: CreditCard,
        title: "Pague no mesmo fluxo",
        description: "Uma jornada clara para pedir e pagar sem saltos desnecessários entre telas.",
      },
      {
        icon: TimerReset,
        title: "Acompanhe ao vivo",
        description: "Estados visíveis de preparo, pronto e entregue reduzem ansiedade e dúvidas.",
      },
      {
        icon: WalletCards,
        title: "Cliente feliz, cliente satisfeito",
        description: "Lealdade, recompra e acesso rápido a reservas ou pedidos futuros no mesmo canal.",
      },
    ],
  },
  fr: {
    badge: "App client connectée",
    overline: "Commandez, payez et revenez sans rien télécharger",
    title: "Vos clients pourront commander et payer où ils veulent. Client heureux, client satisfait",
    description:
      "L'app client regroupe la navigation, la commande et le paiement dans un seul flux afin que l'utilisateur atteigne plus vite ce qu'il cherche et revienne avec moins de friction.",
    supportCards: [
      {
        icon: MonitorSmartphone,
        title: "Web responsive",
        description: "Fonctionne sur mobile, tablette et ordinateur pour que le client entre depuis n'importe quel appareil.",
      },
      {
        icon: ShoppingBag,
        title: "Commande et paiement",
        description: "Nous intégrons menu, panier et paiement pour convertir l'intérêt en achat en moins d'étapes.",
      },
      {
        icon: MessagesSquare,
        title: "Communication claire",
        description: "Les confirmations, statuts et notifications réduisent l'incertitude et les questions répétées.",
      },
      {
        icon: ShieldCheck,
        title: "Fidélité flexible",
        description: "L'expérience garde de l'ordre tout en ouvrant récompenses, réachat et accès rapide à chaque visite.",
      },
    ],
    customerCards: [
      {
        icon: QrCode,
        title: "Commandez où vous voulez",
        description: "Depuis le QR ou le navigateur, sans télécharger d'application et sans friction pour commencer.",
      },
      {
        icon: CreditCard,
        title: "Payez dans le même flux",
        description: "Un parcours clair pour commander et payer sans sauts inutiles entre les écrans.",
      },
      {
        icon: TimerReset,
        title: "Suivi en direct",
        description: "Les statuts visible de préparation, prêt et livré réduisent l'anxiété et les doutes.",
      },
      {
        icon: WalletCards,
        title: "Client heureux, client satisfait",
        description: "Fidélité, réachat et accès rapide aux réservations ou commandes futures depuis le même canal.",
      },
    ],
  },
} as const

export function AppClientePanel() {
  const { locale } = useLocale()
  const { resolvedTheme, theme } = useTheme()
  const currentTheme = resolvedTheme ?? theme ?? "dark"
  const isDark = currentTheme === "dark"
  const copy = copyByLocale[locale]

  const shellClassName = isDark
    ? "relative overflow-hidden border border-primary/20 bg-gradient-to-br from-[#1f1510] via-[#2f1f18] to-[#4b2f22] text-white shadow-[0_24px_80px_rgba(46,24,18,0.35)]"
    : "relative overflow-hidden border border-amber-200 bg-gradient-to-br from-[#fffaf5] via-[#fff1e6] to-[#f8e8d8] text-[#2b1d16] shadow-[0_18px_60px_rgba(122,78,46,0.12)]"

  const badgeClassName = isDark
    ? "border-white/15 bg-white/10 text-white hover:bg-white/15"
    : "border-amber-200 bg-white/80 text-[#5d4037] hover:bg-white"

  const chipClassName = isDark
    ? "rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
    : "rounded-2xl border border-amber-200/80 bg-white/80 p-4 backdrop-blur-sm"

  const cardClassName = isDark
    ? "rounded-2xl border border-white/10 bg-black/10 p-4"
    : "rounded-2xl border border-amber-200/80 bg-white/80 p-4"

  const iconPillClassName = isDark
    ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/12 text-[#ffd9b0]"
    : "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-[#8d5a3c]"

  const textMutedClassName = isDark ? "text-sm text-white/72" : "text-sm text-[#5d4037]/80"

  return (
    <section className="container mx-auto px-4 lg:px-8 pt-2 pb-8">
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} variants={panelVariants}>
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
              <Badge className={badgeClassName}>{copy.badge}</Badge>
              <span className={`inline-flex items-center gap-2 text-xs ${isDark ? "text-white/75" : "text-[#6f4a34]"}`}>
                <MonitorSmartphone className="h-3.5 w-3.5" />
                {copy.overline}
              </span>
            </motion.div>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-bold text-balance">
                  {copy.title}
                </h2>
                <p className={`mt-3 max-w-3xl text-sm md:text-base ${isDark ? "text-white/78" : "text-[#5d4037]/82"}`}>
                  {copy.description}
                </p>
              </motion.div>

              <motion.div variants={panelVariants} className="grid gap-3 sm:grid-cols-2">
                {copy.supportCards.map((item) => {
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
            </div>

            <motion.div variants={panelVariants} className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {copy.customerCards.map((item) => {
                const Icon = item.icon
                return (
                  <motion.div key={item.title} variants={itemVariants} className={cardClassName}>
                    <div className="flex items-start gap-3">
                      <div className={iconPillClassName}>
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-semibold">{item.title}</p>
                          <ArrowUpRight className={`h-3.5 w-3.5 ${isDark ? "text-white/50" : "text-[#8d5a3c]/65"}`} />
                        </div>
                        <p className={`mt-1 ${textMutedClassName}`}>{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

          </div>
        </Card>
      </motion.div>
    </section>
  )
}
