/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import { seoConfig } from "@/agency/lib/seo/config"
import { buildCanonicalUrl } from "@/agency/lib/seo/url"
import type {
  SeoArticleEntity,
  SeoBreadcrumbEntity,
  SeoConfig,
  SeoLocalBusinessEntity,
  SeoOrganizationEntity,
  SeoServiceEntity,
  SeoWebSiteEntity,
  SeoPostalAddress,
} from "@/agency/lib/seo/types"

/* Schema builders reutilizables. Separan la estructura SEO del contenido real del sitio. */
function organizationId(config: SeoConfig) {
  return `${new URL(config.site.siteUrl).origin}#organization`
}

function websiteId(config: SeoConfig) {
  return `${new URL(config.site.siteUrl).origin}#website`
}

function hasItems(value: string | readonly string[] | undefined) {
  return Array.isArray(value) ? value.length > 0 : Boolean(value)
}

function normalizeAreaServed(value: string | readonly string[] | undefined): string | string[] | undefined {
  if (!hasItems(value)) {
    return undefined
  }

  if (Array.isArray(value)) {
    return [...value]
  }

  return value as string
}

function normalizeStringList(value: readonly string[] | undefined): string[] | undefined {
  if (!value || value.length === 0) {
    return undefined
  }

  return [...value]
}

export function buildOrganizationEntity(config: SeoConfig = seoConfig): SeoOrganizationEntity {
  const entity: SeoOrganizationEntity = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId(config),
    name: config.brand.brandName,
    url: config.brand.brandUrl,
    logo: config.brand.brandLogo,
  }

  if (config.brand.brandSameAs.length > 0) {
    entity.sameAs = [...config.brand.brandSameAs]
  }

  if (config.brand.brandTelephone) {
    entity.telephone = config.brand.brandTelephone
  }

  if (config.brand.brandEmail) {
    entity.email = config.brand.brandEmail
  }

  if (config.brand.brandContactPoints.length > 0) {
    entity.contactPoint = config.brand.brandContactPoints.map((contactPoint) => ({
      "@type": "ContactPoint",
      contactType: contactPoint.contactType,
      telephone: contactPoint.telephone,
      email: contactPoint.email,
      areaServed: contactPoint.areaServed,
      availableLanguage: contactPoint.availableLanguage,
    }))
  }

  if (config.brand.brandLocation) {
    entity.address = config.brand.brandLocation
  }

  return entity
}

export function buildWebSiteEntity(config: SeoConfig = seoConfig): SeoWebSiteEntity {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(config),
    name: config.brand.brandName,
    url: config.site.siteUrl,
    publisher: {
      "@id": organizationId(config),
    },
    inLanguage: config.site.defaultLocale,
  }
}

export interface BuildServiceEntityInput {
  name: string
  slug: string
  description?: string
  serviceType?: string
  areaServed?: string | string[]
  url?: string
}

export function buildServiceEntity(
  input: BuildServiceEntityInput,
  config: SeoConfig = seoConfig,
): SeoServiceEntity {
  // Boundary: el servicio es una entidad reutilizable; el texto descriptivo debe venir del cliente o del brief aprobado.
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    url: input.url ?? buildCanonicalUrl(config, `/servicios/${input.slug}`),
    description: input.description,
    serviceType: input.serviceType,
    provider: {
      "@id": organizationId(config),
    },
    areaServed: normalizeAreaServed(input.areaServed) ?? normalizeAreaServed(config.brand.brandServiceArea),
  }
}

export interface BuildArticleEntityInput {
  kind: "Article" | "BlogPosting"
  headline: string
  slug: string
  description?: string
  url?: string
  image?: string | string[]
  datePublished?: string
  dateModified?: string
  articleSection?: string
}

export function buildArticleEntity(
  input: BuildArticleEntityInput,
  config: SeoConfig = seoConfig,
): SeoArticleEntity {
  // Boundary: blog/casos usan el mismo constructor; solo cambia el contenido editorial.
  return {
    "@context": "https://schema.org",
    "@type": input.kind,
    headline: input.headline,
    description: input.description,
    url: input.url ?? buildCanonicalUrl(config, input.kind === "BlogPosting" ? `/blog/${input.slug}` : `/casos/${input.slug}`),
    mainEntityOfPage: input.url ?? buildCanonicalUrl(config, input.kind === "BlogPosting" ? `/blog/${input.slug}` : `/casos/${input.slug}`),
    image: input.image,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    articleSection: input.articleSection,
    publisher: {
      "@id": organizationId(config),
    },
  }
}

export interface BuildBreadcrumbInput {
  name: string
  path?: string
}

export function buildBreadcrumbList(
  items: readonly BuildBreadcrumbInput[],
  config: SeoConfig = seoConfig,
): SeoBreadcrumbEntity {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path ? buildCanonicalUrl(config, item.path) : undefined,
    })),
  }
}

export interface BuildLocalBusinessEntityInput {
  name?: string
  url?: string
  telephone?: string
  email?: string
  address?: SeoPostalAddress
  areaServed?: string | string[]
  sameAs?: string[]
}

export function buildLocalBusinessEntity(
  input: BuildLocalBusinessEntityInput = {},
  config: SeoConfig = seoConfig,
): SeoLocalBusinessEntity | null {
  if (!config.brand.brandLocation && !input.address) {
    return null
  }

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: input.name ?? config.brand.brandName,
    url: input.url ?? config.brand.brandUrl,
    telephone: input.telephone ?? config.brand.brandTelephone,
    email: input.email ?? config.brand.brandEmail,
    address: input.address ?? config.brand.brandLocation,
    areaServed: normalizeAreaServed(input.areaServed) ?? normalizeAreaServed(config.brand.brandServiceArea),
    sameAs: normalizeStringList(input.sameAs) ?? normalizeStringList(config.brand.brandSameAs),
  }
}
