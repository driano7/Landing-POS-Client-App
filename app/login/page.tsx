"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/sections/navigation"
import Footer from "@/components/sections/footer"

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.9)]">
            <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Cuenta Criptec</p>
            <h1 className="text-4xl font-semibold">Acceso seguro para tu operación</h1>
            <p className="text-lg text-slate-300">
              Inicia sesión desde cualquier dispositivo sin perder el header ni el menú: el componente de navegación permanece visible y el scroll está alineado, incluso en escritorio.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>• Dashboard personalizado con métricas de pagos y compliance.</li>
              <li>• History completo de tickets y sesiones de consultoría.</li>
              <li>• Conexión nativa con Criptec Pay y nuestra pasarela de tarjetas.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_60px_rgba(0,0,0,0.55)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Login</h2>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Acceso seguro</p>
            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Correo</label>
                <Input placeholder="hola@empresa.com" type="email" autoComplete="email" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Contraseña</label>
                <Input placeholder="••••••••" type="password" autoComplete="current-password" />
              </div>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4 rounded border-gray-600 bg-slate-900 text-emerald-500" />
                  <span>Recordarme</span>
                </label>
                <a href="/acerca" className="text-emerald-300 hover:text-emerald-200">
                  Olvidé mi contraseña
                </a>
              </div>
              <Button className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-emerald-900/70">
                Acceder al panel
              </Button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
