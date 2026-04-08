/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import type { SeoConfig, SeoPostalAddress } from "@/agency/lib/seo/types"

/* Configuración base de SEO y marca.
 * La identidad visible aquí es dato del proyecto; su uso/licencia final debe validarse para Donovan Riaño.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"

const brandLocation: SeoPostalAddress | undefined = undefined

export const seoConfig: SeoConfig = {
  brand: {
    brandName: process.env.NEXT_PUBLIC_BRAND_NAME ?? "Tu Agencia Web & SEO",
    brandUrl: process.env.NEXT_PUBLIC_BRAND_URL ?? siteUrl,
    brandLogo: process.env.NEXT_PUBLIC_BRAND_LOGO ?? "/placeholder-logo.svg",
    brandDescription:
      process.env.NEXT_PUBLIC_BRAND_DESCRIPTION ??
      "Agencia especializada en creación de sitios web y servicios de SEO para empresas y negocios",
    brandSameAs: [
      ...(process.env.NEXT_PUBLIC_BRAND_SAMEAS?.split(",").map((value) => value.trim()).filter(Boolean) ?? []),
    ],
    brandTelephone: process.env.NEXT_PUBLIC_BRAND_TELEPHONE,
    brandEmail: process.env.NEXT_PUBLIC_BRAND_EMAIL,
    brandLocation,
    brandServiceArea: process.env.NEXT_PUBLIC_BRAND_SERVICE_AREA
      ? process.env.NEXT_PUBLIC_BRAND_SERVICE_AREA.split(",").map((value) => value.trim()).filter(Boolean)
      : [],
    brandContactPoints: [],
  },
  site: {
    siteUrl,
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "es",
    locales: (process.env.NEXT_PUBLIC_SITE_LOCALES?.split(",").map((value) => value.trim()).filter(Boolean) ?? [
      "es",
      "en",
    ]),
    titleTemplate: process.env.NEXT_PUBLIC_TITLE_TEMPLATE ?? "%s | Tu Agencia Web & SEO",
    defaultTitle: process.env.NEXT_PUBLIC_DEFAULT_TITLE ?? "Tu Agencia Web & SEO",
    defaultDescription:
      process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION ??
      "Creación de sitios web, SEO técnico y posicionamiento orgánico para empresas y negocios",
  },
}
