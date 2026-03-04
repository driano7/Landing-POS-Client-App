"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"

const ebooks = [
  {
    id: "criptec-hybrid",
    tag: "Guía esencial",
    price: "$149 USD",
    priceNote: "Por licencia individual",
    title: "Manual Criptec para pagos híbridos en restaurantes",
    description:
      "Cubre la arquitectura del checkout, la validación del POS y respaldos regulatorios para México, EE. UU. y Brasil, con plantillas listas para tu equipo.",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=60",
    highlights: [
      "Checklist COFEPRIS / FDA / ANVISA",
      "Storyboarding del flujo de pago",
      "Plantillas de comunicación para clientes",
    ],
  },
  {
    id: "criptec-marketing",
    tag: "Recurso premium",
    price: "$99 USD",
    priceNote: "Incluye workshops internos",
    title: "Playbook de marketing y eCommerce de Criptec",
    description:
      "Secuencia de lanzamientos, argumentos de venta y métricas para que el equipo comercial explique el valor del POS y las criptomonedas.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=60",
    highlights: [
      "Mapas de viaje del cliente",
      "Kits de lanzamiento para socios",
      "Guiones de upsell de suscripciones",
    ],
  },
]

export default function EbooksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pt-28 pb-16">
        <div className="absolute inset-0 opacity-40 blur-3xl" aria-hidden />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-6">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.6em] text-amber-300">Colección Criptec</p>
            <h1 className="text-4xl font-semibold sm:text-5xl">EBooks diseñados desde el corazón fintech de Criptec</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
              Dos publicaciones que condensan estrategias de pagos híbridos, compliance y marketing para que tu equipo lleve el POS
              Xoco a cada rincón del restaurante.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] shadow-lg shadow-amber-900/60">
              <Link href="/pago">Ir al carrito</Link>
            </Button>
            <Button variant="ghost" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Descargar muestra gratuita
            </Button>
          </div>
          <div className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 shadow-[0_20px_60px_rgba(15,23,42,0.8)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.5em] text-amber-300">Instantáneo</p>
            <p className="mt-3 text-lg text-white">Descarga digital inmediata + actualizaciones trimestrales vinculadas a criptec.io.</p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.4em] text-white/60">
              <span>PDF compatible</span>
              <span>Plantillas editables</span>
              <span>Licencia corporativa</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {ebooks.map((ebook) => (
            <article
              key={ebook.id}
              className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-transparent p-6 shadow-[0_25px_60px_rgba(2,6,23,0.65)] backdrop-blur"
            >
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={ebook.image}
                  alt={ebook.title}
                  width={900}
                  height={550}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-amber-300">
                  <span>{ebook.tag}</span>
                  <span>{ebook.price}</span>
                </div>
                <h2 className="text-3xl font-bold text-white">{ebook.title}</h2>
                <p className="text-sm text-slate-200">{ebook.description}</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  {ebook.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" aria-hidden />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{ebook.priceNote}</p>
              </div>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3">
                <Button
                  variant="secondary"
                  className="rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-amber-900/70"
                >
                  Añadir al carrito
                </Button>
                <div className="flex items-center gap-2 text-xs text-amber-200">
                  <span>Entrega digital</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(2,6,23,0.55)] backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Carrito mínimo</p>
              <h3 className="mt-2 text-3xl font-semibold text-white">Dos eBooks + soporte de Criptec</h3>
              <p className="mt-2 text-sm text-slate-300">
                Añade ambos títulos al carrito y accede a la pasarela de pagos con la flip card que se mostrará en /pago.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 text-white">
              <p className="text-3xl font-semibold">$248 USD</p>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Total estimado</p>
            </div>
            <Button asChild className="rounded-full bg-gradient-to-r from-slate-100 to-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 shadow-lg shadow-amber-900/50">
              <Link href="/pago">Ir a pagar</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
