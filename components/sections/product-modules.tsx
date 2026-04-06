"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { TypingText } from "@/components/ui/typing-text"
import { cn } from "@/lib/utils"
import { CreditCard, Globe, ShieldCheck, Smartphone, Store, BarChart3, type LucideIcon } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion"
import { useLocale } from "@/components/locale-provider"

type PeripheralId = "top-left" | "top-right" | "mid-left" | "mid-right" | "bottom-left" | "bottom-right"

type SuiteCard = {
  id: PeripheralId
  icon: LucideIcon
  title: string
  description: string
  glow?: boolean
}

type PeripheralLayout = {
  id: PeripheralId
  initialX: number
  initialY: number
  initialRotate: number
  width: number
  height: number
}

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1]

const suiteCardsByLocale: Record<string, SuiteCard[]> = {
  es: [
    { id: "top-left", icon: Globe, title: "Sitio web profesional", description: "Presencia digital clara, menú actualizado y marca consistente.", glow: true },
    { id: "top-right", icon: Smartphone, title: "App cliente", description: "Reservas, pedidos y lealtad desde QR o navegador.", glow: true },
    { id: "mid-left", icon: Store, title: "Punto de venta", description: "Órdenes, caja e inventario conectados en un solo flujo.", glow: true },
    { id: "mid-right", icon: BarChart3, title: "Métricas avanzadas", description: "Dashboards para ventas, inventario y decisiones del día a día." },
    { id: "bottom-left", icon: ShieldCheck, title: "Panel sanitario", description: "Registros de higiene y cumplimiento listos para auditoría." },
    { id: "bottom-right", icon: CreditCard, title: "Pagos con Blokko.io", description: "Tarjetas, SPEI, PIX y cripto con liquidación en moneda local.", glow: true },
  ],
  en: [
    { id: "top-left", icon: Globe, title: "Professional website", description: "Clear digital presence, updated menu, and consistent brand.", glow: true },
    { id: "top-right", icon: Smartphone, title: "Client app", description: "Reservations, orders, and loyalty from QR or browser.", glow: true },
    { id: "mid-left", icon: Store, title: "Point of sale", description: "Orders, cash, and inventory connected in one flow.", glow: true },
    { id: "mid-right", icon: BarChart3, title: "Advanced analytics", description: "Dashboards for sales, inventory, and day-to-day decisions." },
    { id: "bottom-left", icon: ShieldCheck, title: "Sanitary panel", description: "Hygiene and compliance records ready for audit." },
    { id: "bottom-right", icon: CreditCard, title: "Payments with Blokko.io", description: "Cards, SPEI, PIX, and crypto settled in local currency.", glow: true },
  ],
  pt: [
    { id: "top-left", icon: Globe, title: "Site profissional", description: "Presença digital clara, menu atualizado e marca consistente.", glow: true },
    { id: "top-right", icon: Smartphone, title: "App do cliente", description: "Reservas, pedidos e fidelidade por QR ou navegador.", glow: true },
    { id: "mid-left", icon: Store, title: "Ponto de venda", description: "Pedidos, caixa e estoque conectados em um único fluxo.", glow: true },
    { id: "mid-right", icon: BarChart3, title: "Métricas avançadas", description: "Dashboards para vendas, estoque e decisões do dia a dia." },
    { id: "bottom-left", icon: ShieldCheck, title: "Painel sanitário", description: "Registros de higiene e conformidade prontos para auditoria." },
    { id: "bottom-right", icon: CreditCard, title: "Pagamentos com Blokko.io", description: "Cartões, SPEI, PIX e cripto com liquidação na moeda local.", glow: true },
  ],
  fr: [
    { id: "top-left", icon: Globe, title: "Site web professionnel", description: "Présence digitale claire, menu à jour et marque cohérente.", glow: true },
    { id: "top-right", icon: Smartphone, title: "App client", description: "Réservations, commandes et fidélité depuis le QR ou le navigateur.", glow: true },
    { id: "mid-left", icon: Store, title: "Point de vente", description: "Commandes, caisse et stock connectés dans un seul flux.", glow: true },
    { id: "mid-right", icon: BarChart3, title: "Analyses avancées", description: "Tableaux de bord pour les ventes, les stocks et les décisions quotidiennes." },
    { id: "bottom-left", icon: ShieldCheck, title: "Panneau sanitaire", description: "Registres d’hygiène et de conformité prêts pour audit." },
    { id: "bottom-right", icon: CreditCard, title: "Paiements avec Blokko.io", description: "Cartes, SPEI, PIX et crypto liquidés en devise locale.", glow: true },
  ],
} as const

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function PeripheralCard({
  card,
  width,
  height,
  progressRatio,
}: {
  card: SuiteCard
  width: number
  height: number
  progressRatio: number
}) {
  const Icon = card.icon
  const barWidth = `${Math.round(42 + progressRatio * 44)}%`

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[22px] border p-3 shadow-[0_26px_75px_rgba(2,6,23,0.24)] antialiased [transform:translateZ(0)] [backface-visibility:hidden]",
        "bg-white/88 border-black/10 text-slate-900",
        "dark:bg-slate-950/60 dark:border-white/15 dark:text-white",
        card.glow && "ring-1 ring-primary/35"
      )}
      style={{ width, height }}
      role="img"
      aria-label={card.title}
    >
      <div className="flex items-start gap-2.5">
        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border",
            "border-black/10 bg-primary/12 text-primary",
            "dark:border-white/15 dark:bg-primary/18"
          )}
          aria-hidden
        >
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold leading-tight">{card.title}</p>
          <p className="mt-1 text-[10px] leading-snug text-slate-600 dark:text-white/68">{card.description}</p>
        </div>
      </div>

      <div className="mt-3">
        <div className="h-1.5 w-full rounded-full bg-black/10 dark:bg-white/10">
          <div
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              card.glow ? "bg-primary/75" : "bg-slate-500/70 dark:bg-white/45"
            )}
            style={{ width: barWidth }}
          />
        </div>
      </div>

      <div className="pointer-events-none absolute -right-14 -top-10 h-24 w-24 rounded-full bg-primary/12 blur-2xl dark:bg-primary/18" />
    </div>
  )
}

function PeripheralScreen({
  layout,
  card,
  index,
  progress,
  spreadMedium,
  spreadLong,
  viewportWidth,
}: {
  layout: PeripheralLayout
  card: SuiteCard
  index: number
  progress: MotionValue<number>
  spreadMedium: number
  spreadLong: number
  viewportWidth: number
}) {
  const xNear = layout.initialX
  const xMedium = layout.initialX * spreadMedium
  const xLongRaw = layout.initialX * spreadLong
  const xClampMax = viewportWidth > 0 ? Math.max(168, viewportWidth / 2 - 40) : Number.POSITIVE_INFINITY
  const xLong = Math.sign(layout.initialX) * Math.min(Math.abs(xLongRaw), xClampMax)

  const x = useTransform(progress, [0, 0.25, 0.62, 1], [xNear, xMedium, xLong, xLong])
  const y = useTransform(progress, [0, 0.25, 0.62, 1], [layout.initialY, layout.initialY + 10, layout.initialY + 44, layout.initialY + 76])
  const xRounded = useTransform(x, (value) => Math.round(value))
  const yRounded = useTransform(y, (value) => Math.round(value))
  const rotate = useTransform(progress, [0, 0.25, 0.62, 1], [layout.initialRotate, layout.initialRotate, layout.initialRotate * 1.1, layout.initialRotate * 1.2])
  const opacity = useTransform(progress, [0, 0.4, 0.72, 1], [1, 0.9, 0.56, 0.4])

  return (
    <motion.div
      style={{ x: xRounded, y: yRounded, rotate, opacity, willChange: "transform" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none [transform:translateZ(0)] [backface-visibility:hidden]"
    >
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, delay: index * 0.08, ease: EASE_OUT }}
      >
        <PeripheralCard card={card} width={layout.width} height={layout.height} progressRatio={0.55 + (index % 3) * 0.13} />
      </motion.div>
    </motion.div>
  )
}

export function ProductModules() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const scrollTrackRef = useRef<HTMLDivElement | null>(null)
  const reduceMotion = useReducedMotion()
  const [viewportWidth, setViewportWidth] = useState(0)
  const { locale } = useLocale()
  const { scrollYProgress } = useScroll({
    target: scrollTrackRef,
    offset: ["start start", "end start"],
  })

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth || 0)
    onResize()
    window.addEventListener("resize", onResize, { passive: true })
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const isMobile = viewportWidth > 0 ? viewportWidth < 768 : false

  const { spreadMedium, spreadLong } = useMemo(() => {
    const t = clamp((viewportWidth - 390) / (1440 - 390), 0, 1)
    if (isMobile) {
      return {
        spreadMedium: 1.15 + 0.28 * t,
        spreadLong: 1.4 + 0.58 * t,
      }
    }
    return {
      spreadMedium: 1.28 + 0.62 * t,
      spreadLong: 1.75 + 1.28 * t,
    }
  }, [isMobile, viewportWidth])

  const phoneFrame = useMemo(() => {
    const width = viewportWidth
    const t = clamp((width - 360) / (1600 - 360), 0, 1)
    const frameWidth = Math.round(220 + 110 * t)
    const frameHeight = Math.round(frameWidth * 2.08)
    const frameRadius = Math.round(38 + 14 * t)
    const bezel = Math.round(10 + 3 * t)
    return {
      width: frameWidth,
      height: frameHeight,
      radius: frameRadius,
      bezel,
    }
  }, [viewportWidth])

  const sceneHeight = useMemo(() => {
    const base = isMobile ? 620 : 760
    return Math.max(base, phoneFrame.height + (isMobile ? 124 : 172))
  }, [isMobile, phoneFrame.height])

  const scrollTrackHeight = useMemo(() => {
    const minHeight = isMobile ? 820 : 980
    const extra = isMobile ? 130 : 180
    return Math.max(minHeight, sceneHeight + extra)
  }, [isMobile, sceneHeight])

  const peripheralLayouts: PeripheralLayout[] = useMemo(
    () => [
      {
        id: "top-left",
        initialX: isMobile ? -98 : -260,
        initialY: isMobile ? -208 : -208,
        initialRotate: -6,
        width: isMobile ? 172 : 214,
        height: isMobile ? 142 : 154,
      },
      {
        id: "top-right",
        initialX: isMobile ? 98 : 260,
        initialY: isMobile ? -208 : -208,
        initialRotate: 6,
        width: isMobile ? 172 : 214,
        height: isMobile ? 142 : 154,
      },
      {
        id: "mid-left",
        initialX: isMobile ? -120 : -332,
        initialY: isMobile ? -26 : -22,
        initialRotate: -8,
        width: isMobile ? 192 : 250,
        height: isMobile ? 164 : 184,
      },
      {
        id: "mid-right",
        initialX: isMobile ? 120 : 332,
        initialY: isMobile ? -26 : -22,
        initialRotate: 8,
        width: isMobile ? 192 : 250,
        height: isMobile ? 164 : 184,
      },
      {
        id: "bottom-left",
        initialX: isMobile ? -92 : -252,
        initialY: isMobile ? 200 : 208,
        initialRotate: -5,
        width: isMobile ? 170 : 206,
        height: isMobile ? 144 : 150,
      },
      {
        id: "bottom-right",
        initialX: isMobile ? 92 : 252,
        initialY: isMobile ? 200 : 208,
        initialRotate: 5,
        width: isMobile ? 170 : 206,
        height: isMobile ? 144 : 150,
      },
    ],
    [isMobile]
  )

  const phoneScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.78, 1.08, 1.03, 1])
  const phoneY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [84, -8, -16, -22])
  const imageScale = useTransform(scrollYProgress, [0, 0.35, 1], [1.02, 1.1, 1.16])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -16])
  const depthOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 0.35, 0.56])
  const suiteCards = (suiteCardsByLocale[locale] ?? suiteCardsByLocale.es) as SuiteCard[]

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="relative overflow-x-hidden bg-muted/30 py-16 md:py-24"
      aria-label={locale === "es" ? "Módulos del restaurante en iPhone con periféricos animados" : locale === "fr" ? "Modules du restaurant sur iPhone avec périphériques animés" : locale === "pt" ? "Módulos do restaurante em iPhone com periféricos animados" : "Restaurant modules on iPhone with animated peripherals"}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            <TypingText text={locale === "es" ? "Todo lo que tu restaurante necesita" : locale === "fr" ? "Tout ce dont votre restaurant a besoin" : locale === "pt" ? "Tudo o que seu restaurante precisa" : "Everything your restaurant needs"} />
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            {locale === "es" ? "Seis módulos clave en una sola plataforma para operar mejor y crecer con orden." : locale === "fr" ? "Six modules clés sur une seule plateforme pour mieux opérer et grandir avec méthode." : locale === "pt" ? "Seis módulos principais em uma única plataforma para operar melhor e crescer com organização." : "Six key modules in one platform to run better and grow with structure."}
          </p>
        </motion.div>
      </div>

      <div ref={scrollTrackRef} className="relative" style={{ height: `${scrollTrackHeight}px` }}>
        <div className="sticky top-14 md:top-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative mx-auto w-full max-w-[1120px]" style={{ height: `${sceneHeight}px` }}>
              <div className="absolute inset-0">
                {peripheralLayouts.map((layout, index) => {
                  const card = suiteCards.find((item) => item.id === layout.id)
                  if (!card) return null

                  return (
                    <PeripheralScreen
                      key={layout.id}
                      layout={layout}
                      card={card}
                      index={index}
                      progress={scrollYProgress}
                      spreadMedium={spreadMedium}
                      spreadLong={spreadLong}
                      viewportWidth={viewportWidth}
                    />
                  )
                })}
              </div>

              <motion.div
                style={{ scale: phoneScale, y: phoneY }}
                className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className={cn(
                    "relative border shadow-[0_40px_120px_rgba(2,6,23,0.34)]",
                    "bg-gradient-to-b from-slate-100 to-slate-200 border-black/10",
                    "dark:from-slate-900 dark:to-slate-950 dark:border-white/15"
                  )}
                  style={{
                    width: phoneFrame.width,
                    height: phoneFrame.height,
                    borderRadius: phoneFrame.radius,
                  }}
                  aria-label="iPhone de módulos XocoCafe"
                >
                  <motion.div
                    className="absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-black/10 bg-black/85 dark:border-white/10"
                    initial={false}
                    animate={
                      reduceMotion
                        ? { width: 108, height: 28, y: 0 }
                        : {
                            width: [92, 130, 108, 120],
                            height: [28, 28, 28, 28],
                            y: [0, 1, 0, 0],
                          }
                    }
                    transition={reduceMotion ? undefined : { duration: 3.6, ease: EASE_OUT, repeat: Number.POSITIVE_INFINITY }}
                    aria-hidden
                  >
                    <div className="flex h-full items-center justify-between gap-2 px-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.65)]" />
                      <span className="h-1.5 w-8 rounded-full bg-white/25" />
                    </div>
                  </motion.div>

                  <div
                    className="absolute overflow-hidden border border-black/10 bg-black/95 dark:border-white/10"
                    style={{
                      top: phoneFrame.bezel,
                      right: phoneFrame.bezel,
                      bottom: phoneFrame.bezel,
                      left: phoneFrame.bezel,
                      borderRadius: Math.max(20, phoneFrame.radius - 8),
                    }}
                  >
                    <motion.div style={{ scale: imageScale, y: imageY }} className="absolute inset-0">
                      <Image
                        src="/XocoCafe.png"
                        alt="Pantalla principal XocoCafe"
                        fill
                        priority
                        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 32vw, 360px"
                        className="object-cover object-top"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/25 dark:from-black/25 dark:to-black/45" />
                    <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/35 to-transparent" />
                  </div>

                  <div className="absolute -left-1 top-[20%] h-16 w-1 rounded-full bg-black/20 dark:bg-white/12" aria-hidden />
                  <div className="absolute -left-1 top-[34%] h-11 w-1 rounded-full bg-black/20 dark:bg-white/12" aria-hidden />
                  <div className="absolute -right-1 top-[24%] h-24 w-1 rounded-full bg-black/20 dark:bg-white/12" aria-hidden />

                  <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.55),transparent_45%)] opacity-60 dark:opacity-25"
                    aria-hidden
                  />
                </div>
              </motion.div>

              {!reduceMotion && (
                <motion.div className="absolute inset-0 -z-10" style={{ opacity: depthOpacity }} aria-hidden>
                  <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/18" />
                  <div className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-3xl dark:bg-amber-300/10" />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mt-8">
          {locale === "es" ? "¿Quieres ver qué incluye cada plan?" : locale === "fr" ? "Voulez-vous voir ce que chaque offre inclut ?" : locale === "pt" ? "Quer ver o que cada plano inclui?" : "Want to see what each plan includes?"}{" "}
          <Link href="/prices" className="text-primary font-medium hover:underline">
            {locale === "es" ? "Revisa los planes aquí" : locale === "fr" ? "Consultez les offres ici" : locale === "pt" ? "Veja os planos aqui" : "Check the plans here"}
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
