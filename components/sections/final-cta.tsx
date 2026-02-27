"use client"

import { Bitcoin, Ethereum } from "lucide-react"

const stats = [
  { value: "0% comisiones extra", label: "Comisiones" },
  { value: "Confirmación en segundos", label: "Tiempo" },
  { value: "700+ wallets compatibles", label: "Wallets" },
]

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 py-32 text-white">
      <div className="absolute -top-10 left-10 h-72 w-72 rounded-full bg-orange-500/40 blur-3xl opacity-20 animate-pulse" aria-hidden />
      <div className="absolute -right-10 bottom-20 h-80 w-80 rounded-full bg-white/10 blur-3xl opacity-20 animate-pulse" aria-hidden />
      <div className="absolute top-8 right-16 opacity-70 animate-bounce">
        <Bitcoin size={48} className="text-orange-300" aria-hidden />
      </div>
      <div className="absolute bottom-8 left-12 opacity-70 animate-bounce">
        <Ethereum size={48} className="text-cyan-300" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center rounded-full bg-orange-500/20 px-4 py-1 text-sm font-semibold text-orange-300">
          Listo para empezar?
        </span>
        <h2 className="mt-4 text-5xl font-bold leading-tight text-white">¿Listo para Revolucionar tu Restaurante?</h2>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300">
          Únete a los restaurantes más innovadores de LATAM que ya están aceptando pagos con criptomonedas. Prueba gratis 14 días,
          sin tarjeta de crédito.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p className="text-3xl font-bold text-orange-400">{stat.value}</p>
              <p className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-gray-900 shadow-2xl transition hover:bg-gray-100"
          >
            Agenda Demo Gratis
          </button>
          <button
            type="button"
            className="rounded-xl border-2 border-white px-10 py-5 text-lg font-bold text-white transition hover:bg-white/10"
          >
            Ver Precios
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          ¿Preguntas? Escríbenos a <a href="mailto:hola@xocosuite.com" className="text-orange-300 hover:underline">hola@xocosuite.com</a> o Telegram
          <a href="https://t.me/driano7" target="_blank" rel="noreferrer" className="ml-1 text-orange-300 hover:underline">
            @driano7
          </a>
        </p>
      </div>
    </section>
  )
}
