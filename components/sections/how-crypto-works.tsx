import { CheckCircle, QrCode, Shield, Smartphone, Wallet, Zap } from "lucide-react"

const steps = [
  {
    number: 1,
    icon: QrCode,
    title: "Cliente escanea QR del pedido",
    description: "Desde la App Cliente Xoco o directamente desde el ticket físico del POS",
  },
  {
    number: 2,
    icon: Wallet,
    title: "Elige su método preferido",
    description: "Bitcoin Lightning (instantáneo) o redes EVM (Polygon, Ethereum, Arbitrum)",
  },
  {
    number: 3,
    icon: Smartphone,
    title: "Conecta su wallet",
    description: "MetaMask, Trust Wallet, Coinbase Wallet, Alby. Compatible con 700+ wallets",
  },
  {
    number: 4,
    icon: Zap,
    title: "Confirma el pago",
    description: "Transacción encriptada y confirmada en segundos en blockchain",
  },
  {
    number: 5,
    icon: CheckCircle,
    title: "POS actualiza automáticamente",
    description: "Tu staff ve la confirmación en tiempo real. Ticket digital enviado al cliente",
  },
]

export default function HowCryptoWorks() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium">
            Fácil y Rápido
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold">¿Cómo Funciona el Pago con Cripto?</h2>
            <p className="text-lg text-orange-200">
              Tu cliente paga en 4 pasos simples. Sin apps de terceros, sin complicaciones.
            </p>
          </div>
        </div>

        <div className="space-y-10">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.number} className="space-y-2">
                <div className="flex items-start gap-6 transform transition duration-200 ease-out hover:scale-105">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-orange-500 text-white text-2xl font-bold flex items-center justify-center flex-shrink-0">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3 text-orange-300">
                      <Icon size={24} />
                      <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index !== steps.length - 1 && (
                  <div className="border-l-2 border-dashed border-gray-700 ml-8 h-8" aria-hidden="true" />
                )}
              </div>
            )
          })}
        </div>

        <div className="rounded-3xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-l-4 border-green-500 px-6 py-5 flex items-start gap-4">
          <Shield size={28} className="text-green-300 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-semibold text-white">Sin Volatilidad</h3>
            <p className="text-gray-200 leading-relaxed">
              Acepta stablecoins (USDC, USDT, DAI) para recibir el equivalente en dólares sin riesgo de fluctuación
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
