/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import type { SeoConfig } from "@/agency/lib/seo/types"

function stripTrailingSlash(url: URL) {
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.replace(/\/+$/, "")
  }

  url.search = ""
  url.hash = ""

  if (url.pathname === "/") {
    return url.origin
  }

  return url.toString()
}

function normalizePath(path: string) {
  if (!path) {
    return "/"
  }

  const trimmed = path.trim()
  if (!trimmed) {
    return "/"
  }

  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`
}

export function buildCanonicalUrl(config: SeoConfig, path?: string) {
  if (!path) {
    return stripTrailingSlash(new URL(config.site.siteUrl))
  }

  try {
    const absoluteUrl = new URL(path)
    return stripTrailingSlash(absoluteUrl)
  } catch {
    const relativeUrl = new URL(normalizePath(path), config.site.siteUrl)
    return stripTrailingSlash(relativeUrl)
  }
}

export function buildSiteUrl(config: SeoConfig, path?: string) {
  return buildCanonicalUrl(config, path)
}
