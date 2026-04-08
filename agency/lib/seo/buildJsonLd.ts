/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import type { SeoJsonLdInput } from "@/agency/lib/seo/types"

/* Serialización segura de JSON-LD.
 * Este módulo es infraestructura SEO reutilizable; los datos que entran aquí son los que cambian por página o por cliente.
 */
export function escapeJsonLd(value: string) {
  return value.replace(/</g, "\\u003c")
}

export function serializeJsonLd(value: unknown) {
  return escapeJsonLd(JSON.stringify(value))
}

export function normalizeJsonLdInput(value: SeoJsonLdInput) {
  return Array.isArray(value) ? value : [value]
}
