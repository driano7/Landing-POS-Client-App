"use client"

import { Bitcoin, Shield, Smartphone, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Bitcoin,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-100",
    title: "Pagos del Futuro",
    description:
      "Acepta Bitcoin, ETH, USDC y USDT directamente en tu POS. Sin intermediarios, sin comisiones abusivas.",
    stat: "Ahorra hasta 80%",
    statLabel: "en comisiones",
  },
  {
    icon: Shield,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    title: "Cumplimiento COFEPRIS",
    description:
      "Panel dedicado para registros de higiene, control de plagas y inventario alimentario. Exporta reportes mensuales.",
    stat: "100% Compliant",
    statLabel: "Listo para auditorías",
  },
  {
    icon: Smartphone,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    title: "App Cliente Completa",
    description:
      "Tus clientes hacen pedidos desde su celular y pagan con su wallet crypto. Sin apps de terceros.",
    stat: "0% comisión",
    statLabel: "en pedidos directos",
  },
  {
    icon: TrendingUp,
    iconColor: "text-green-500",
    bgColor: "bg-green-100",
    title: "Métricas en Tiempo Real",
    description:
      "Dashboards de ventas, productos más vendidos y horas pico. Decisiones respaldadas por datos.",
    stat: "Insights",
    statLabel: "en segundos",
  },
]

export function WhyComplete() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center rounded-full bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-600">
            Ventajas Competitivas
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold text-gray-900">¿Por Qué Xoco Suite?</h2>
            <p className="text-lg text-gray-600">
              La única plataforma que combina POS, crypto y compliance en un solo sistema
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <article
                key={benefit.title}
                className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
              >
                <div
                  className={`${benefit.bgColor} mb-6 flex h-16 w-16 items-center justify-center rounded-full`}
                >
                  <Icon size={32} className={`${benefit.iconColor}`} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{benefit.description}</p>
                <div className="mt-auto space-y-1">
                  <p className="text-3xl font-bold text-gray-900">{benefit.stat}</p>
                  <p className="text-sm text-gray-500 uppercase tracking-wide">{benefit.statLabel}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
