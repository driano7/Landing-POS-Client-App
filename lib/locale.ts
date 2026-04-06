import { cookies, headers } from "next/headers"

import { isLocale, type Locale, locales } from "@/lib/site-content"

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
