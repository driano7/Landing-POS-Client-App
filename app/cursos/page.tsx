"use client"

import Link from "next/link"

import { Navigation } from "@/components/sections/navigation"
import FinalCTA from "@/components/sections/final-cta"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"

const modules = [
  {
    title: "Fundamentos Cripto",
    description:
      "Repasamos la arquitectura del POS, las clases de pagos híbridos y los componentes de compliance que necesitan los equipos de operaciones para actuar en segundos.",
    badge: "Modulo 1",
    stats: ["Compliance", "Pagos", "Monitoreo"],
  },
  {
    title: "Talleres de Certificación",
    description:
      "Simulaciones guiadas donde el equipo practica flujos de cajas, conciliación y gestión de alertas regulatorias para México, USA y Brasil.",
    badge: "Modulo 2",
    stats: ["Simulaciones", "Dashboards", "Reportes"],
  },
  {
    title: "Repasos Ejecutivos",
    description:
      "Presentaciones listas para juntas con socios y tesorería que explican los beneficios de integrar Lightning, tarjetas y pagos fiduciarios con Xoco.",
    badge: "Modulo 3",
    stats: ["Pitch", "Roadmap", "Partners"],
  },
]

export default function CursosPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-950 opacity-60" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Educación Cripto Certificada</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Cursos que condensan cada componente del ecosistema raversado</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Cada módulo reune componentes clave (compliance, pagos, marketing y operaciones) para tu equipo. El botón "Cursos" del header es donde ahora descansas esta experiencia completa.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/60">
              <Link href="/pago">Añadir certificado</Link>
            </Button>
            <Button variant="outline" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Ver el plan completo
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {modules.map((module) => (
            <article key={module.title} className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.4)] backdrop-blur">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-emerald-300">
                <span>{module.badge}</span>
                <span>Componentes</span>
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">{module.title}</h2>
                <p className="mt-3 text-sm text-slate-300">{module.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-slate-300">
                {module.stats.map((stat) => (
                  <span key={stat} className="rounded-full border border-white/10 px-3 py-1 uppercase tracking-[0.3em] text-white/80">
                    {stat}
                  </span>
                ))}
              </div>
              <Button asChild variant="ghost" className="mt-auto rounded-full border border-emerald-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-300">
                <Link href="/login">Ver calendario</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-slate-100 shadow-[0_25px_60px_rgba(2,6,23,0.55)] backdrop-blur">
          <h3 className="text-3xl font-semibold text-white">Componentes exclusivos</h3>
          <p className="mt-4 text-sm text-slate-300">
            Trabajamos con beacons en CDMX, Querétaro y Miami para monitorear métricas en tiempo real. Cada curso incluye accesos personalizados a esas estaciones para que tu operación tenga datos reales.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-amber-300">
            <span>Sesiones en vivo</span>
            <span>Materiales descargables</span>
            <span>Soporte directo con Criptec</span>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Footer />
    </main>
  )
}
