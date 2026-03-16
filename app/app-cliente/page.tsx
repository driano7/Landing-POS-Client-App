"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, QrCode, Clock3, WalletCards, ShieldCheck, LockKeyhole, ArrowRight } from "lucide-react"

import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"

const experienceItems = [
  {
    icon: QrCode,
    title: "Reservas y pedidos con QR",
    text: "Tus clientes escanean y reservan o piden en segundos, sin fricción ni procesos largos.",
  },
  {
    icon: Clock3,
    title: "Estado del pedido en vivo",
    text: "El cliente ve el avance de su pedido y quién lo prepara, con mayor transparencia.",
  },
  {
    icon: WalletCards,
    title: "Lealtad flexible",
    text: "Se puede guardar en Apple Wallet / Google Wallet o descargar y compartir como imagen PNG (según dispositivo).",
  },
]

const appFunctions = [
  "Pedidos online con seguimiento en tiempo real desde el celular.",
  "Reservaciones con QR de confirmación y gestión rápida.",
  "Métricas de consumo por cliente: frecuencia, ticket y hábitos.",
  "Descarga de datos personales y gestión ética bajo principios tipo GDPR.",
  "Soporte para envíos propios y extensiones futuras de entrega.",
]

const growthFunctions = [
  "Campañas segmentadas por hábitos de consumo.",
  "Promociones de lealtad y mensajes por canal digital.",
  "Estadísticas de apertura y conversión para medir resultados.",
]

export default function AppClientePage() {
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
            className="max-w-3xl"
          >
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">📱 App Cliente</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">App cliente sin descargar nada</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              Reservas, pedidos, lealtad y métricas desde el navegador o QR.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="text-2xl md:text-3xl font-bold mb-6"
        >
          Experiencia del cliente
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-3">
          {experienceItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                whileHover={{ y: -4 }}
              >
                <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="grid gap-4 lg:grid-cols-2 mt-5">
          <Card className="p-5 border border-border bg-card/70">
            <h3 className="text-lg font-semibold mb-3">Funciones del módulo App Cliente</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {appFunctions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5 border border-border bg-card/70">
            <h3 className="text-lg font-semibold mb-3">Relación y crecimiento con clientes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {growthFunctions.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Datos y privacidad</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-5 border border-border bg-card/85 hover:border-primary/35 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <LockKeyhole className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-semibold">Cifrado AES-GCM</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  AES-GCM actúa como una bóveda digital para cada mensaje. Cada dato se sella con una clave única antes
                  de enviarse, y solo el receptor con la clave correcta puede abrirlo. Es comunicación cifrada de grado
                  militar para que nadie más pueda leer la información.
                </p>
              </Card>
              <Card className="p-5 border border-border bg-card/85 hover:border-primary/35 transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h3 className="text-base font-semibold">Principios tipo GDPR</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Los principios tipo GDPR son prácticas usadas en Europa para el manejo ético de datos de usuarios.
                  Esto implica pedir consentimiento claro, usar la información solo para fines legítimos, dar
                  transparencia sobre su uso y facilitar el control de datos por parte del cliente.
                </p>
              </Card>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20conocer%20la%20App%20Cliente%20de%20Xoco%20Suite"
                label="Hablar por WhatsApp"
                className="font-semibold"
              />
              <Button asChild variant="outline" className="rounded-xl border-primary/35 text-primary hover:bg-primary/10 font-semibold">
                <Link href="/prices">
                  Ver planes y precios <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  )
}
