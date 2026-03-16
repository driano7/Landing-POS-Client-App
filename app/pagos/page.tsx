"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CreditCard, Landmark, Coins, QrCode, HandCoins, Puzzle, TrendingUp, ArrowRight } from "lucide-react"

import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"

const paymentWays = [
  { icon: CreditCard, label: "Tarjetas" },
  { icon: Landmark, label: "SPEI / PIX" },
  { icon: Coins, label: "Cripto" },
  { icon: QrCode, label: "QR digital" },
]

const blokkoFunctions = [
  "Acepta tarjetas, SPEI/CoDi y PIX desde el mismo flujo de cobro.",
  "Soporta cobros en cripto y convierte para liquidar en moneda local.",
  "Pensado para LATAM, con operación simple para el equipo del restaurante.",
  "Comisiones por transacción definidas por Blokko.io.",
]

export default function PagosPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section className="relative overflow-hidden pt-28 pb-14">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" aria-hidden />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-4xl"
          >
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">💳 Pagos con Blokko</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">Cobros modernos con Blokko, sin complicarte.</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              Acepta tarjetas, SPEI, PIX y cripto desde un solo flujo. Recibe pesos mexicanos al día siguiente.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <HandCoins className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">Qué resuelve Blokko en Xoco Suite</h2>
              <p className="text-sm text-muted-foreground">
                Te permite aceptar múltiples medios de pago en una sola operación. El restaurante recibe moneda local
                (por ejemplo MXN) sin preocuparse por volatilidad.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {paymentWays.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.25, delay: index * 0.05 }}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-border bg-card/70 p-3 text-sm"
                    >
                      <Icon className="h-4 w-4 text-primary mb-1" />
                      <span className="text-foreground/90">{item.label}</span>
                    </motion.div>
                  )
                })}
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {blokkoFunctions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <Puzzle className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">Cómo se integra</h2>
              <p className="text-sm text-muted-foreground">
                Se usa como parte del flujo de cobro dentro de Xoco Suite. Tu equipo sigue operando desde la misma
                plataforma sin cambiar su rutina.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Las comisiones y tarifas de procesamiento son definidas por Blokko, no por Xoco Suite.
              </p>

              <div className="mt-5 rounded-xl border border-primary/25 bg-primary/10 p-4">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  En qué planes tiene más sentido
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Esta integración suele aportar más valor en planes avanzados, especialmente cuando el volumen de
                  cobros y la operación crecen.
                </p>
                <Link href="/prices" className="mt-2 inline-flex items-center text-sm text-primary font-medium hover:underline">
                  Ver planes y precios
                </Link>
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, delay: 0.08 }}
          className="mt-4"
        >
          <Card className="p-5 border border-primary/30 bg-primary/10">
            <h3 className="text-lg md:text-xl font-semibold mb-3">Cobro local en LATAM, sin fricción para tu cliente</h3>
            <ul className="space-y-2 text-sm text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>
                  Soporte para medios locales: <strong>SPEI en México</strong>, <strong>PIX en Brasil</strong>, métodos de
                  pago locales en <strong>Colombia, Perú y Chile</strong>, y wallets como <strong>Mercado Pago en
                  Argentina</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Tus clientes pagan desde sus plataformas habituales sin comisión adicional al momento de pagar.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Tú como comercio recibes tu dinero al día siguiente, completamente en MXN.</span>
              </li>
            </ul>
          </Card>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="p-6 md:p-8 border-2 border-border bg-card/85">
            <h3 className="text-xl md:text-2xl font-bold">Conecta cobros modernos sin complicar tu operación</h3>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Xoco Suite integra Blokko para que cobres mejor y mantengas una operación simple en el día a día.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20activar%20pagos%20con%20Blokko%20en%20Xoco%20Suite"
                label="Hablar por WhatsApp"
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  Ver planes y precios <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </Card>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
