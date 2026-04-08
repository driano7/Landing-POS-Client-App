/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import { type CSSProperties } from "react"

export type CardBrand = "visa" | "mastercard" | "amex" | "default"

/* UI demo-only: la tarjeta simula un checkout y no procesa PAN, CVV ni pagos reales. */
const brandProfiles: Record<CardBrand, { label: string; colors: string; text: string }> = {
  visa: { label: "VISA", colors: "from-sky-500 to-sky-700", text: "text-sky-900" },
  mastercard: {
    label: "Mastercard",
    colors: "from-orange-500 to-red-500",
    text: "text-slate-900",
  },
  amex: { label: "Amex", colors: "from-teal-400 to-teal-700", text: "text-slate-900" },
  default: { label: "Criptec", colors: "from-slate-400 to-slate-600", text: "text-slate-900" },
}

const brandPatterns: Record<CardBrand, number[]> = {
  visa: [4, 4, 4, 4],
  mastercard: [4, 4, 4, 4],
  amex: [4, 6, 5],
  default: [4, 4, 4, 4],
}

const brandLengths: Record<CardBrand, number> = {
  visa: 16,
  mastercard: 16,
  amex: 15,
  default: 16,
}

const slipPlaceholder = (brand: CardBrand) => "•".repeat(brandLengths[brand])

function chunkByPattern(value: string, pattern: number[]) {
  const chunks: string[] = []
  let offset = 0
  for (const length of pattern) {
    chunks.push(value.slice(offset, offset + length))
    offset += length
  }
  return chunks
}

function formatNumber(value: string, brand: CardBrand) {
  const digits = value.replace(/\\D/g, "")
  const targetLength = brandLengths[brand]
  const padded = (digits + slipPlaceholder(brand)).slice(0, targetLength)
  const pattern = brandPatterns[brand]
  return chunkByPattern(padded, pattern).join(" ")
}

export function detectCardBrand(cardNumber: string): CardBrand {
  const digits = cardNumber.replace(/\\D/g, "")
  if (/^3[47]/.test(digits)) {
    return "amex"
  }
  if (/^4/.test(digits)) {
    return "visa"
  }
  if (/^(5[1-5]|2[2-7])/.test(digits)) {
    return "mastercard"
  }
  return "default"
}

export interface FlipCardProps {
  cardNumber: string
  cardHolder: string
  expiry: string
  cvv: string
  brand: CardBrand
  flipped?: boolean
}

export function FlipCard({ cardNumber, cardHolder, expiry, cvv, brand, flipped }: FlipCardProps) {
  const displayNumber = formatNumber(cardNumber, brand)
  const brandProfile = brandProfiles[brand]
  const defaultHolder = cardHolder.trim() ? cardHolder.toUpperCase() : "NOMBRE COMPLETO"
  const defaultExpiry = expiry.trim() ? expiry : "MM/AA"
  const displayCvv = cvv.trim() ? cvv : "•••"

  const transformStyle: CSSProperties = {
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  }

  return (
    <div className="relative h-64 w-80" style={{ perspective: 1300 }}>
      <div
        className="relative h-full w-full duration-700 ease-in-out"
        style={transformStyle}
      >
        <div
          className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-5 text-white shadow-2xl shadow-slate-900/50"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="h-8 w-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500" aria-hidden />
              <div className="h-1 w-12 rounded-full bg-white/40" aria-hidden />
            </div>
            <div className={`rounded-full bg-gradient-to-br ${brandProfile.colors} px-4 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.3em] ${brandProfile.text}`}>
              {brandProfile.label}
            </div>
          </div>
          <div className="mt-6 font-mono text-2xl tracking-[0.4em] text-white">{displayNumber}</div>
          <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300">
            <div>
              <p className="text-[0.55rem] tracking-[0.6em] text-slate-400">Titular</p>
              <p className="text-base text-white">{defaultHolder}</p>
            </div>
            <div>
              <p className="text-[0.55rem] tracking-[0.6em] text-slate-400">Expira</p>
              <p className="text-base text-white">{defaultExpiry}</p>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-white shadow-2xl shadow-slate-900/70"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="h-12 w-full rounded-3xl bg-black/70" aria-hidden />
          <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-400">
            <p>Firma</p>
            <p>CVV</p>
          </div>
          <div className="mt-2 flex items-center gap-4">
            <div className="flex-1 rounded-xl border border-white/20 bg-white/40 p-3 text-xs text-slate-900">Firma digital</div>
            <div className="w-20 rounded-xl border border-white/20 bg-white/90 p-3 text-center text-xl font-semibold text-slate-900">
              {displayCvv}
            </div>
          </div>
          <div className="mt-6 text-xs uppercase tracking-[0.4em] text-slate-500">Pago seguro Criptec</div>
        </div>
      </div>
    </div>
  )
}
