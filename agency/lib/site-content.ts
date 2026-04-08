/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
export type Locale = "es" | "en" | "pt" | "fr"

/* Registro compartido de locales y etiquetas.
 * Es reusable como infraestructura; las copias y flags visibles son datos de interfaz.
 */
export const locales: readonly Locale[] = ["es", "en", "pt", "fr"] as const

export const localeLabels: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  pt: "PT",
  fr: "FR",
}

export const localeFlags: Record<Locale, string> = {
  es: "🇲🇽",
  en: "🇺🇸",
  pt: "🇵🇹",
  fr: "🇫🇷",
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en" || value === "pt" || value === "fr"
}
