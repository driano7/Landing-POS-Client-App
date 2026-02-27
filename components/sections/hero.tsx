import { Button } from "@/components/ui/button"
import { Bitcoin, Coins, Wallet } from "lucide-react"

export function Hero() {
  return (
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
      </div>
    </section>
  )
}
