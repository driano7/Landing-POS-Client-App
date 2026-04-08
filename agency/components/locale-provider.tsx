"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import { createContext, useContext, useState, type ReactNode } from "react"

import type { Locale } from "@/agency/lib/site-content"

type LocaleContextValue = {
  locale: Locale
  setLocale: (nextLocale: Locale) => void
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

type LocaleProviderProps = {
  initialLocale: Locale
  children: ReactNode
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  const [locale, setLocale] = useState<Locale>(initialLocale)

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
