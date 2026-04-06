export type Locale = "es" | "en" | "pt" | "fr"

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
