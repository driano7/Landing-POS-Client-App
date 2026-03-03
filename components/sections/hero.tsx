"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Monitor, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-lighter via-background to-background dark:from-primary-lighter/10 dark:via-background dark:to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary">Tu restaurante, digitalizado por completo</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            El sistema que tu restaurante{" "}
            <span className="text-primary">necesitaba</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            POS, app para tus clientes, métricas con predicción IA, cumplimiento COFEPRIS, programa de lealtad con Google Pay y Apple Pay, y pagos con tarjeta, SPEI y cripto — todo en una sola plataforma.
          </p>

          {/* Mini feature pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {[
              { icon: Monitor, label: "POS + Métricas avanzadas" },
              { icon: Smartphone, label: "App cliente mobile" },
              { icon: Star, label: "Lealtad en Google Pay / Apple Pay" },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground border border-border">
                <Icon className="w-3.5 h-3.5" />
                {label}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a
                href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar demo gratis
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://xococafe.site" target="_blank" rel="noopener noreferrer">
                Ver app cliente en vivo
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
            {[
              { value: "5 en 1", label: "Módulos integrados" },
              { value: "AES-256", label: "Cifrado de datos" },
              { value: "COFEPRIS", label: "Cumplimiento sanitario" },
              { value: "Crypto+SPEI", label: "Métodos de pago" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
