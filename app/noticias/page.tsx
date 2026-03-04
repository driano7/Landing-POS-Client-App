"use client"

import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/sections/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, ShieldCheck, BookOpenCheck } from "lucide-react"

const newsStories = [
  {
    id: "pasarela",
    tag: "NUEVO",
    title: "Pasarela Criptec Pay lista para tu carrito",
    description:
      "El nuevo flujo de pago mantiene a los clientes dentro de Xoco Suite antes de saltar a Lightning o tarjetas, y va acompañado de una UI optimizada en móviles.",
    date: "2 de marzo de 2026",
    actionLabel: "Ir a la pasarela",
    actionHref: "/pago",
    icon: Sparkles,
  },
  {
    id: "ebooks",
    tag: "RECURSO",
    title: "Dos eBooks que condensan la experiencia Criptec",
    description:
      "Títulos curados sobre pagos híbridos y compliance que ayudan a tus equipos a entender a tus clientes fintech y a aprovechar el POS Xoco.",
    date: "27 de febrero de 2026",
    actionLabel: "Explorar eBooks",
    actionHref: "/ebooks",
    icon: BookOpenCheck,
  },
  {
    id: "compliance",
    tag: "IMPACTO",
    title: "Actualizaciones regulatorias bajo la lupa",
    description:
      "Monitoreamos COFEPRIS, FDA y ANVISA para que la suite cumpla y tus puntos de venta puedan operar sin demoras en México, USA y Brasil.",
    date: "20 de febrero de 2026",
    actionLabel: "Ver actualizaciones",
    actionHref: "/#faq",
    icon: ShieldCheck,
  },
]

export default function NoticiasPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-950 to-slate-900 opacity-70" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Lo que pasa en el Ecosistema</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Noticias y actualizaciones críticas para tu operación</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            Aquí vive el contenido que antes ocupaba el home: alianzas, lanzamientos y movimientos regulatorios del ecosistema Criptec. El botón Noticias te lleva directamente a este pulso.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-gradient-to-r from-emerald-500 to-sky-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] shadow-lg shadow-emerald-900/60">
              <Link href="/pago">Ver pasarela</Link>
            </Button>
            <Button variant="ghost" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Más de Criptec
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {newsStories.map((story) => {
            const Icon = story.icon
            return (
              <article
                key={story.id}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.45)] transition-all hover:-translate-y-1 hover:border-emerald-400/40"
              >
                <div className="flex items-center justify-between">
                  <Badge className="border border-white/20 bg-slate-900/70 text-white">{story.tag}</Badge>
                  <span className="text-xs uppercase tracking-[0.4em] text-slate-400">{story.date}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 text-emerald-300">
                  <Icon size={20} aria-hidden className="shrink-0" />
                  <h3 className="text-xl font-semibold text-white">{story.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{story.description}</p>
                <Link
                  href={story.actionHref}
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-emerald-300 transition hover:text-emerald-200"
                >
                  {story.actionLabel}
                  <span aria-hidden>→</span>
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  )
}
