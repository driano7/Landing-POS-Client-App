<<<<<<< HEAD
"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Monitor, Star, Zap, Shield, TrendingUp, Coffee, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
=======
import { Button } from "@/components/ui/button"
import { Bitcoin, Coins, Wallet } from "lucide-react"
>>>>>>> c135cd15 (addings perplexity)

export function Hero() {
  return (
<<<<<<< HEAD
    <section className="relative pt-20 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-background">
      {/* Gradient blobs inspired by XocoCafe app */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-gradient-radial from-primary/15 via-primary/5 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gradient-to-r from-primary/8 via-warning/5 to-primary/8 blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(121,85,72,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(121,85,72,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
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
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
          >
            <Coffee className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide">Hecho para restaurantes latinoamericanos</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance"
          >
            Tu restaurante merece{" "}
            <span className="bg-gradient-to-r from-primary via-warning to-primary bg-clip-text text-transparent animate-pulse">
              más que un POS
            </span>
          </motion.h1>

          {/* Subheadline - corto y directo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            POS, app para clientes, métricas IA, cumplimiento COFEPRIS, lealtad con Google Pay y pagos con cripto.
            <span className="text-primary font-medium"> Todo en una sola plataforma.</span>
          </motion.p>

          {/* Feature pills con iconos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-2 pt-2"
          >
            {[
              { icon: Monitor, label: "POS + Métricas IA" },
              { icon: Smartphone, label: "App cliente mobile" },
              { icon: Star, label: "Lealtad Google / Apple Pay" },
              { icon: Shield, label: "COFEPRIS incluido" },
              { icon: Zap, label: "Cripto + SPEI" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground border border-border hover:border-primary/30 hover:text-primary transition-colors">
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
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold px-6 py-3 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a href="https://wa.me/5215512345678?text=Hola%2C%20quiero%20una%20demo%20de%20Xoco%20Suite" target="_blank" rel="noopener noreferrer">
                Agendar demo gratis <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 font-medium px-6 py-3 rounded-xl"
              asChild
            >
              <a href="https://xococafe.site" target="_blank" rel="noopener noreferrer">
                Ver app cliente en vivo
              </a>
            </Button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border/50"
          >
            {[
              { icon: "🇲🇽", label: "Hecho en México", sub: "Para LATAM" },
              { icon: "🔐", label: "AES-256", sub: "Datos cifrados" },
              { icon: "🏥", label: "COFEPRIS", sub: "Cumplimiento" },
              { icon: "⚡", label: "Cripto+SPEI", sub: "Pagos" },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="text-center group">
                <div className="text-2xl mb-1 group-hover:scale-110 transition-transform">{icon}</div>
                <div className="text-sm font-bold text-foreground">{label}</div>
                <div className="text-xs text-muted-foreground">{sub}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center pt-2"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
          </motion.div>
        </motion.div>
=======
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50/30 to-amber-50/50" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
              Powered by RainbowKit & Bitcoin Lightning
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Xoco Suite: El POS con Cripto que tu Restaurante Necesita
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Sistema completo de punto de venta, métricas avanzadas y app cliente con pagos en Bitcoin, ETH y stablecoins.
              Sin comisiones abusivas, sin intermediarios.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-orange-200">
                <p className="text-2xl font-semibold text-gray-900">Ahorra hasta 80%</p>
                <p className="text-sm text-gray-500">en comisiones vs tarjetas</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-orange-200">
                <p className="text-2xl font-semibold text-gray-900">Confirmación en segundos</p>
                <p className="text-sm text-gray-500">con Lightning Network</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
                Agenda Demo Gratis
              </Button>
              <Button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition-all">
                Ver Precios
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <div className="absolute -left-6 top-6 w-14 h-14 bg-white/80 rounded-full shadow-lg flex items-center justify-center opacity-70 animate-bounce">
                <Bitcoin className="text-amber-500" size={32} />
              </div>
              <div className="absolute -right-4 bottom-10 w-12 h-12 bg-white/80 rounded-full shadow-lg flex items-center justify-center opacity-70 animate-pulse">
                <Coins className="text-orange-500" size={28} />
              </div>
              <div className="absolute left-1/2 -bottom-8 w-16 h-16 bg-white/80 rounded-full shadow-lg flex items-center justify-center opacity-70 -translate-x-1/2 animate-bounce">
                <Wallet className="text-amber-600" size={36} />
              </div>
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl flex items-center justify-center">
                <p className="text-white text-2xl font-bold">Mockup POS - Payment Screen</p>
                {/* TODO: Replace with actual POS mockup showing crypto payment buttons */}
              </div>
            </div>
          </div>
        </div>
>>>>>>> c135cd15 (addings perplexity)
      </div>
    </section>
  )
}
