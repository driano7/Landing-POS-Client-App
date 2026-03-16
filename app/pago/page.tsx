"use client"

import { useState } from "react"

import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Navigation } from "@/components/sections/navigation"
import { Footer } from "@/components/sections/footer"
import { FlipCard, detectCardBrand, type CardBrand } from "@/components/payment/flip-card"
import { TypingText } from "@/components/ui/typing-text"

const paymentHighlights = [
  {
    title: "Flip card 3D",
    description: "La tarjeta gira al enfocar el CVV y mantiene la información del frente para el resto del flujo.",
  },
  {
    title: "Validación visual",
    description: "Detectamos Visa, Mastercard y Amex en tiempo real para mostrar el logo y los requisitos del issuer.",
  },
  {
    title: "Seguridad",
    description: "Sin procesos reales: toda la UI se construyó con composiciones visuales y estados interactivos.",
  },
]

const itemsInCart = [
  { label: "Manual de pagos híbridos", price: "$149 USD" },
  { label: "Playbook de marketing", price: "$99 USD" },
]

const brandLabels: Record<CardBrand, string> = {
  visa: "Visa",
  mastercard: "Mastercard",
  amex: "American Express",
  default: "Criptec",
}

export default function PagoPage() {
  const [cardNumber, setCardNumber] = useState("")
  const [cardHolder, setCardHolder] = useState("")
  const [expiry, setExpiry] = useState("")
  const [cvv, setCvv] = useState("")
  const [cvvFocused, setCvvFocused] = useState(false)

  const brand = detectCardBrand(cardNumber)

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navigation />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs uppercase tracking-[0.5em] text-amber-300">Pasarela Criptec</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">
          <TypingText text="Formulario de pago con flip-card interactivo" />
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-300">
          Recorre la UI completa del checkout para productos del ecosistema Xoco. Todo es experiencia de usuario,
          sin procesar pagos reales ni conectar servicios externos.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
              <div className="flex w-full justify-center">
                <FlipCard
                  cardNumber={cardNumber}
                  cardHolder={cardHolder}
                  expiry={expiry}
                  cvv={cvv}
                  brand={brand}
                  flipped={cvvFocused}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-slate-400">
                  <Sparkles className="text-amber-300" size={16} aria-hidden />
                  <span>{brandLabels[brand]}</span>
                </div>
                <p className="text-sm text-slate-300">
                  Número detectado como <strong>{brandLabels[brand]}</strong>. La animación responde al foco del campo CVV para mostrar el reverso.
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  {itemsInCart.map((item) => (
                    <li key={item.label} className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <span className="font-semibold text-amber-300">{item.price}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between border-t border-white/10 pt-3">
                    <span className="text-xs uppercase tracking-[0.4em] text-slate-400">Total</span>
                    <span className="text-lg font-semibold text-white">$248 USD</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {paymentHighlights.map((highlight) => (
                <div key={highlight.title} className="rounded-2xl border border-white/5 bg-slate-900/40 p-4 text-sm">
                  <p className="flex items-center gap-2 text-amber-300">
                    <ShieldCheck size={16} aria-hidden />
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-slate-300">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur">
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Nombre del titular</label>
                <Input
                  placeholder="Nombre completo"
                  value={cardHolder}
                  onChange={(event) => setCardHolder(event.target.value)}
                  autoComplete="cc-name"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Correo</label>
                <Input
                  placeholder="hola@criptec.io"
                  type="email"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Número de tarjeta</label>
                <Input
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(event) => setCardNumber(event.target.value)}
                  maxLength={19}
                  inputMode="numeric"
                  autoComplete="cc-number"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-slate-400">Expiración</label>
                  <Input
                    placeholder="MM/AA"
                    value={expiry}
                    onChange={(event) => setExpiry(event.target.value)}
                    maxLength={5}
                    inputMode="numeric"
                    autoComplete="cc-exp"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.4em] text-slate-400">CVV</label>
                  <Input
                    placeholder="123"
                    value={cvv}
                    onChange={(event) => setCvv(event.target.value)}
                    onFocus={() => setCvvFocused(true)}
                    onBlur={() => setCvvFocused(false)}
                    maxLength={4}
                    inputMode="numeric"
                    autoComplete="cc-csc"
                  />
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 text-sm text-slate-200">
                <p>Solo se muestran estados visuales; todavía no se conecta a ninguna pasarela real.</p>
              </div>

              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-amber-600 to-orange-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-amber-900/70"
                >
                  Continuar al pago
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white/80"
                >
                  <Link href="/" className="flex items-center justify-center gap-2">
                    Volver al inicio <ArrowRight size={16} aria-hidden />
                  </Link>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
