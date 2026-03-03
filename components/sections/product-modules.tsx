"use client"
import { Card } from "@/components/ui/card"
import { ShoppingCart, TrendingUp, Shield, Smartphone, CreditCard, Megaphone, Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const modules = [
  {
    icon: Smartphone,
    title: "App Cliente",
    subtitle: "La cara digital de tu negocio",
    description: "Tus clientes ordenan, pagan y siguen su pedido en tiempo real desde su celular. Con programa de lealtad integrado en Google Pay y Apple Pay.",
    features: [
      "Sitio web del negocio con UI/UX premium",
      "Pedidos online con seguimiento en tiempo real",
      "Reservaciones con QR de confirmación",
      "Envíos propios (futura conexión Didi/Rappi)",
      "Métricas de consumo del cliente (alimentos, bebidas, paquetes)",
      "Programa de lealtad: enrola tarjeta a Google Pay o Apple Pay",
      "Descarga de datos personales (GDPR)",
      "Cifrado AES-CM en datos sensibles",
    ],
    color: "primary",
  },
  {
    icon: ShoppingCart,
    title: "POS Operativo",
    subtitle: "Control total del salón y la caja",
    description: "Gestiona mesas, caja, inventario, empleados, sucursales y proveedores desde un solo punto.",
    features: [
      "Pedidos por mesas y caja con roles de personal",
      "Inventario con alertas de stock mínimo",
      "Escaneo inteligente de QR (autodetecta tipo)",
      "Gestión de empleados, socios y sucursales",
      "Control de pagos a proveedores y nómina",
      "Registro de limpieza y verificación sanitaria",
      "Métricas de comportamiento en el sitio web",
    ],
    color: "info",
    featured: true,
  },
  {
    icon: TrendingUp,
    title: "Métricas Avanzadas",
    subtitle: "Inteligencia artificial para tu negocio",
    description: "Dashboards con algoritmos de predicción que analizan ventas, inventario y comportamiento para ayudarte a tomar mejores decisiones.",
    features: [
      "Dashboard de ventas, productos y horas pico",
      "Algoritmos de forecasting de inventario",
      "Métricas de clientes: frecuencia, ticket promedio",
      "Análisis de tiempo de preparación y rotación",
      "Tiempos en sitio web por sección",
      "Exportación de reportes CSV/XLSX",
    ],
    color: "success",
  },
  {
    icon: Shield,
    title: "Cumplimiento COFEPRIS",
    subtitle: "Registros que pide la ley, sin el dolor",
    description: "Panel sanitario configurable para llevar los registros que exige COFEPRIS (MX), FDA (US) o ANVISA (BR) de forma digital y exportable.",
    features: [
      "Checklist de higiene diario, semanal y mensual",
      "Seguimiento de caducidades y control de plagas",
      "Registro de temperaturas de alimentos",
      "Exportación de auditorías para inspecciones",
      "Alineado a NOM-251-SSA1-2009 y NOM-093",
      "Configurable para FDA Food Code y ANVISA RDC 216",
    ],
    color: "warning",
  },
  {
    icon: CreditCard,
    title: "Terminal Blokko.io",
    subtitle: "Acepta cualquier forma de pago",
    description: "Terminal física opcional que unifica tarjeta, SPEI/CoDi, PIX y criptomonedas en un solo dispositivo. Add-on disponible para todos los planes.",
    features: [
      "Tarjetas (Visa, Mastercard, Amex)",
      "SPEI / CoDi en México",
      "PIX en Brasil",
      "Cripto: EVM (ETH, ARB, OP) y Bitcoin Lightning",
      "Conversión automática a MXN / USD / BRL",
      "Comisión por transacción según Blokko.io",
    ],
    color: "primary",
    badge: "Add-on opcional",
  },
  {
    icon: Megaphone,
    title: "Marketing Digital",
    subtitle: "Llega a más clientes",
    description: "Crea campañas segmentadas usando los datos de tu propia base de clientes: envía notificaciones push, promociones y correos desde la plataforma.",
    features: [
      "Campañas de notificaciones push",
      "Segmentación por hábitos de consumo",
      "Promociones en programa de lealtad",
      "Estadísticas de apertura y conversión",
    ],
    color: "info",
    badge: "Próximamente",
  },
]

export function ProductModules() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  return (
    <section id="productos" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Todo lo que tu restaurante necesita
          </h2>
          <p className="text-lg text-muted-foreground">
            Seis módulos que trabajan juntos. Puedes empezar con lo esencial y escalar cuando estés listo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
          {modules.map((module, index) => {
            const Icon = module.icon
            const colorClass =
              module.color === "success" ? "text-success" : module.color === "info" ? "text-info" : module.color === "warning" ? "text-yellow-500" : "text-primary"
            const bgClass =
              module.color === "success" ? "bg-success/10" : module.color === "info" ? "bg-info/10" : module.color === "warning" ? "bg-yellow-500/10" : "bg-primary/10"

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ scale: 1.02, y: -3 }}
              >
                <Card className={`p-6 h-full bg-card/80 backdrop-blur-sm border-2 hover:border-primary/30 transition-all ${ module.featured ? "border-primary/40 shadow-lg shadow-primary/10" : "border-border"}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-2.5 rounded-xl ${bgClass}`}>
                      <Icon className={`w-5 h-5 ${colorClass}`} />
                    </div>
                    {module.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                        {module.badge}
                      </span>
                    )}
                    {module.featured && !module.badge && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-0.5">{module.title}</h3>
                  <p className="text-xs text-primary font-medium mb-2">{module.subtitle}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{module.description}</p>
                  <ul className="space-y-1.5">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${colorClass}`} />
                        <span className="text-xs text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
