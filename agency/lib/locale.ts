/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import { cookies, headers } from "next/headers"

import { isLocale, type Locale, locales } from "@/agency/lib/site-content"

/* Resolución de idioma por cookie/Accept-Language.
 * No persiste datos de negocio; solo decide la experiencia del usuario en la capa de presentación.
 */
export async function getLocaleFromCookies(): Promise<Locale> {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value
  if (isLocale(cookieLocale)) {
    return cookieLocale
  }

  const headerStore = await headers()
  const acceptLanguage = headerStore.get("accept-language") ?? ""
  const preferredLocales = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean)

  for (const preferred of preferredLocales) {
    const base = preferred.split("-")[0]
    if (locales.includes(base as Locale)) {
      return base as Locale
    }
  }

  return "es"
}
