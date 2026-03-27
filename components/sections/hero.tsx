"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MouseGradient } from "@/components/MouseGradient"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"
import { Smartphone, Monitor, BarChart3, CreditCard, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      {/* Gradient blobs inspired by XocoCafe app */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-primary/10 via-primary/4 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-primary/8 via-primary/3 to-transparent blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(121,85,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(121,85,72,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <MouseGradient containerClassName="absolute inset-0 z-[2] overflow-hidden pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fff7ef]/90 border border-[#d8b79a]/70 text-[#7a533a] dark:bg-[#1b1714] dark:border-[#4f3a2a] dark:text-[#9a734f]"
          >
            <Coffee className="w-3 h-3 text-current" />
            <span className="text-xs font-medium tracking-wide text-current">Hecho para restaurantes latinoamericanos</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
          >
            Tu restaurante merece{" "}
            <span className="bg-gradient-to-r from-[#6d4633] via-[#96612d] to-[#744f3a] dark:from-[#cba06e] dark:via-[#e7b961] dark:to-[#bf9168] bg-clip-text text-transparent">
              más que un POS
            </span>
          </motion.h1>

          {/* Subheadline - corto y directo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-foreground dark:text-[#8a6547] leading-relaxed max-w-2xl mx-auto"
          >
            Sitio web, app cliente, POS, métricas e integración de pagos en una sola plataforma, con planes desde Starter hasta $1,499 MXN/mes.
          </motion.p>

          {/* Feature pills con iconos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {[
              { icon: Monitor, label: "Sitio web profesional" },
              { icon: Smartphone, label: "App cliente" },
              { icon: BarChart3, label: "POS + métricas" },
              { icon: CreditCard, label: "Pagos con Blokko.io" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors dark:bg-[#1b1714] dark:border-[#4f3a2a] dark:text-[#9a734f] dark:hover:border-[#7b5a3f] dark:hover:text-[#b88c61]"
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center pt-2"
          >
            <WhatsAppCTAButton
              href="https://wa.me/525512291607?text=Hola%2C%20quiero%20una%20demo%20de%20Xoco%20Suite"
              label="Agenda demo por WhatsApp"
              showArrow
              size="lg"
              className="font-semibold px-6 py-3 rounded-xl"
            />
            <Button
              variant="outline"
              size="lg"
              className="border-[#744d38]/40 text-[#4f3226] hover:bg-[#744d38]/10 dark:border-white/35 dark:text-white dark:hover:bg-white/10 font-medium px-6 py-3 rounded-xl"
              asChild
            >
              <Link href="/prices">Ver planes</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-2"
          >
            <p className="text-xs md:text-sm text-foreground dark:text-[#8a6547]">
              4 planes claros: Starter, $499, $899 y $1,499 MXN/mes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
