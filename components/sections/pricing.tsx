import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$99",
    period: "USD/mes",
    description: "Para restaurantes que inician",
    features: [
      { text: "Xoco POS completo", included: true },
      { text: "Roles de usuario (Admin, Cajero, Cocina)", included: true },
      { text: "Inventario básico y alertas", included: true },
      { text: "Programa de lealtad con QR", included: true },
      { text: "Pagos: Efectivo, Tarjeta, Transferencia", included: true },
      { text: "Pagos con Cripto", included: false },
      { text: "Métricas avanzadas", included: false },
      { text: "App Cliente", included: false },
    ],
    cta: "Empezar Gratis",
    highlight: false,
  },
  {
    name: "Premium",
    price: "$249",
    period: "USD/mes",
    badge: "Más Popular",
    description: "Todo lo que necesitas para crecer",
    features: [
      { text: "Todo lo del Plan Básico", included: true },
      { text: "Pagos con Bitcoin Lightning, ETH y Stablecoins", included: true, highlight: true },
      { text: "Métricas avanzadas y dashboards", included: true },
      { text: "Panel COFEPRIS completo", included: true },
      { text: "App Cliente Xoco (móvil + desktop)", included: true },
      { text: "3 tipos de QR (lealtad, pedidos, reservaciones)", included: true },
      { text: "Cifrado AES-GCM", included: true },
      { text: "Integración con wallets (RainbowKit + Bitcoin Connect)", included: true },
    ],
    cta: "Agenda Demo",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contactar",
    period: "",
    description: "Para cadenas y multi-sucursales",
    features: [
      { text: "Todo lo del Premium", included: true },
      { text: "Multi-sucursal ilimitado", included: true },
      { text: "API custom para integraciones", included: true },
      { text: "Conversión automática crypto-a-fiat", included: true },
      { text: "Soporte prioritario 24/7", included: true },
      { text: "Onboarding personalizado", included: true },
      { text: "SLA garantizado", included: true },
    ],
    cta: "Hablar con Ventas",
    highlight: false,
  },
  {
    name: "Suite Completa",
    emoji: "🏆",
    subtitle: "IA + COFEPRIS + Marketing",
    price: "$1,500",
    period: "/mes",
    description: "Predicción IA + Panel COFEPRIS + Campañas",
    featuresShort: ["Todo Negocio", "IA", "COFEPRIS", "Marketing"],
    featuresFull: [
      "Todo lo del plan Negocio",
      "Métricas avanzadas con predicción IA",
      "Panel COFEPRIS / FDA / ANVISA",
      "Exportación de auditorías",
      "Campañas de marketing segmentadas",
      "Notificaciones push a clientes",
      "Soporte prioritario + onboarding",
    ],
    cta: "Solicitar demo",
    variant: "outline" as const,
  },
]

const addons = [
  { icon: CreditCard, label: "Terminal Blokko.io", desc: "Acepta cripto + PIX, recibe pesos MXN al día siguiente", badge: "Add-on" },  { icon: Wrench, label: "Setup & Configuración", desc: "Montaje inicial", badge: "$800+" },
  { icon: GraduationCap, label: "Capacitación extra", desc: "Entrenamiento equipo", badge: "$500+" },
  { icon: HeadphonesIcon, label: "Soporte premium", desc: "7 días/semana", badge: "$300/mes" },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">Planes y Precios</h2>
          <p className="text-lg text-gray-600">Sin contratos, cancela cuando quieras. Prueba gratis 14 días.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl bg-white border border-gray-200 p-8 shadow-lg transition-shadow hover:shadow-2xl ${
                plan.highlight ? "border-orange-500 border-2" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute right-6 top-6 rounded-full bg-orange-500/10 text-orange-500 text-xs font-semibold px-3 py-1">
                  {plan.badge}
                </div>
              )}

              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Plan</p>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                <div className="flex items-baseline gap-2">
                  <p className="text-5xl font-bold text-gray-900">{plan.price}</p>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>

                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-start gap-3">
                    {feature.included ? (
                      <CheckCircle
                        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${
                          feature.highlight ? "text-orange-600" : "text-green-600"
                        }`}
                      />
                    ) : (
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    )}
                    <span
                      className={`text-sm ${
                        feature.included
                          ? feature.highlight
                            ? "text-orange-600 font-semibold"
                            : "text-gray-800"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                {plan.highlight ? (
                  <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold text-lg py-4 shadow-lg hover:shadow-xl transition-all">
                    {plan.cta}
                  </Button>
                ) : (
                  <Button className="w-full border-2 border-gray-800 text-gray-800 font-semibold text-lg py-4 hover:bg-gray-800 hover:text-white transition-all">
                    {plan.cta}
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons - también resumidos en móvil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-muted/30 border border-border rounded-2xl p-4 md:p-6"
        >
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-1">🛠️ Servicios adicionales</h3>
            <p className="text-xs md:text-sm text-muted-foreground">Agrega lo que necesites</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {addons.map(({ icon: Icon, label, desc, badge }) => (
              <div
                key={label}
                className="flex flex-col md:flex-row items-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-1.5 md:p-2 rounded-lg bg-primary/10 flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs md:text-sm font-medium text-foreground block mb-0.5">{label}</span>
                  <p className="text-[10px] md:text-xs text-muted-foreground hidden md:block">{desc}</p>
                  <span className="text-[10px] md:text-xs text-primary font-medium mt-0.5 inline-block">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fine print */}
        <p className="text-center text-[10px] md:text-xs text-muted-foreground mt-4 md:mt-6 px-2">
          Precios en MXN. Cotización especial para 2+ sucursales.{" "}
          <a href="https://wa.me/525512291607" className="text-primary hover:underline">
            Háblanos
          </a>
        </p>
      </div>
    </section>
  )
}
