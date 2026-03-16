"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Globe, Palette, MenuSquare, MapPin, Sparkles, ArrowRight } from "lucide-react"

import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"

type IncludeItem = {
  icon: LucideIcon
  title: string
  text: string
  highlightedText?: string
  note?: string
}

const includes: IncludeItem[] = [
  {
    icon: Sparkles,
    title: "Diseño moderno",
    text: "Landing profesional con animaciones suaves y enfoque en conversión para tu restaurante.",
  },
  {
    icon: MenuSquare,
    title: "Menú dinámico",
    text: "Categorías, fotos y precios actualizables para mantener tu oferta siempre al día.",
  },
  {
    icon: MapPin,
    title: "Secciones clave",
    text: "Historia del lugar, horarios, ubicación y contenido útil para que te encuentren más rápido.",
  },
  {
    icon: Globe,
    title: "Dominio configurable",
    text: "Puedes conectar dominio personalizado;",
    highlightedText: "su costo depende de proveedores externos de dominio/hosting.",
    note: "El costo del dominio personalizable es a cotizar.",
  },
]

const websiteFunctions = [
  "UI/UX premium con colores, tipografías y bloques alineados a tu marca.",
  "Menú actualizado con categorías, fotos y precios para reducir dudas del cliente.",
  "Secciones de historia, horarios, ubicación y contacto para convertir visitas en reservas.",
  "Páginas promocionales para campañas, paquetes o eventos especiales.",
]

export default function SitioWebPage() {
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
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">🌐 Sitio web profesional</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">Tu sitio web profesional incluido</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              Landing moderna para tu restaurante, con menús dinámicos, colores y tipografía de tu marca.
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
          Qué incluye
        </motion.h2>
        <div className="grid gap-4 md:grid-cols-2">
          {includes.map((item, index) => {
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
                  <p className="text-sm text-muted-foreground">
                    {item.text}{" "}
                    {item.highlightedText && (
                      <span className="underline underline-offset-2 decoration-primary/70">{item.highlightedText}</span>
                    )}
                  </p>
                  {item.note && <p className="text-xs text-muted-foreground mt-2">{item.note}</p>}
                </Card>
              </motion.div>
            )
          })}
        </div>

        <Card className="mt-5 p-5 border border-border bg-card/70">
          <h3 className="text-lg font-semibold mb-3">Funciones clave de la capa web</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {websiteFunctions.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="p-6 md:p-8 border-2 border-border bg-card/85">
            <div className="flex items-center gap-2 mb-3">
              <Palette className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold">Más que restaurantes</h2>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              También construimos páginas web profesionales para cualquier negocio o persona, totalmente a medida.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20mi%20sitio%20web%20profesional%20con%20Xoco%20Suite"
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
