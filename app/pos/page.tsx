"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ReceiptText, Users, Building2, FileSpreadsheet, BarChart3, ShieldCheck, WifiOff, ArrowRight } from "lucide-react"

import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"

const dailyOps = [
  "Toma de pedidos con roles por equipo (caja, cocina, admin).",
  "Inventario con alertas de stock mínimo para evitar quiebres.",
  "Flujo conectado con app cliente para reservas, IDs y pedidos.",
  "Escaneo inteligente de QR (reserva, pedido o lealtad) y búsqueda rápida.",
]

const advancedManagement = [
  "Empleados y socios: información, pagos, vacaciones y vistas por rol.",
  "Sucursales: ventas, inventario y clientes por cada ubicación.",
  "Filtros y ordenaciones inteligentes para encontrar y extraer información más rápido.",
  "Pagos a proveedores y control operativo de nómina.",
  "Exportación de datos a CSV/Excel para control y reportes.",
]

const metricsAndHygiene = [
  "Dashboards con machine learning: ventas, productos, horas pico y mejores clientes.",
  "Forecasting de inventario y análisis de tiempos de preparación/rotación.",
  "Panel sanitario: limpieza, plagas, temperaturas, caducidades e incidentes (tipo COFEPRIS/FDA/ANVISA).",
  "Exportación de auditorías para inspecciones y revisiones internas.",
  "Métricas de comportamiento sobre qué partes del sitio se consultan más.",
  "Modo offline: sigue operando sin internet y sincroniza al volver la conexión.",
]

export default function PosPage() {
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
            <Badge className="mb-4 border-primary/30 bg-primary/10 text-primary">🧾 Punto de venta</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-balance">Punto de venta operativo que sí habla con tu sitio y tu app cliente</h1>
            <p className="mt-4 text-base md:text-lg text-muted-foreground text-pretty">
              Pedidos, empleados, sucursales, inventario, métricas e higiene, todo conectado.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 py-10">
        <div className="grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <ReceiptText className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">Operación diaria</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {dailyOps.map((item) => (
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
              <Users className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">Gestión avanzada</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {advancedManagement.map((item) => (
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
            transition={{ duration: 0.35, delay: 0.12 }}
            whileHover={{ y: -4 }}
          >
            <Card className="h-full p-5 border border-border hover:border-primary/35 hover:shadow-md transition-all">
              <BarChart3 className="h-5 w-5 text-primary mb-3" />
              <h2 className="text-xl font-semibold mb-3">Métricas e higiene</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {metricsAndHygiene.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
        >
          <Card className="p-6 md:p-8 border-2 border-primary/30 bg-primary/10">
            <h2 className="text-xl md:text-2xl font-bold mb-3">Machine Learning en tu punto de venta: tu copiloto de decisiones</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Machine Learning es una capa de inteligencia que aprende de tu historial de ventas, inventario, horarios y comportamiento de clientes. No reemplaza a tu equipo: te sugiere dónde ajustar para mejorar números en la operación diaria.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-foreground/90">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Detecta patrones entre líneas: horas pico reales, productos que rotan mejor y caídas de demanda.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Proyecta ventas e inventario para que compres mejor y reduzcas faltantes o mermas.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>Te ayuda a tomar decisiones con datos, como si tuvieras un copiloto operando contigo.</span>
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
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
              <span className="inline-flex items-center gap-2">
                <Building2 className="h-4 w-4 text-primary" />
                Multi-sucursal conectada
              </span>
              <span className="inline-flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-primary" />
                Exportación lista para reportes
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Cumplimiento sanitario
              </span>
              <span className="inline-flex items-center gap-2">
                <WifiOff className="h-4 w-4 text-primary" />
                Operación offline + sincronización
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <WhatsAppCTAButton
                href="https://wa.me/525512291607?text=Hola%2C%20quiero%20conocer%20el%20m%C3%B3dulo%20de%20Punto%20de%20venta%20de%20Xoco%20Suite"
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
