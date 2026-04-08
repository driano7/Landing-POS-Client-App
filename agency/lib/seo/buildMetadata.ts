/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import type { Metadata } from "next"
import { seoConfig } from "@/agency/lib/seo/config"
import { buildCanonicalUrl } from "@/agency/lib/seo/url"
import type {
  SeoConfig,
  SeoLayoutMetadataInput,
  SeoPageMetadataInput,
  SeoOpenGraphImage,
  SeoTwitterImage,
} from "@/agency/lib/seo/types"

/* Helpers reutilizables de metadata técnica: canonical, Open Graph, Twitter y robots. */
function normalizeOpenGraphImages(images?: SeoOpenGraphImage[]) {
  return images?.map((image) => ({
    url: image.url,
    width: image.width,
    height: image.height,
    alt: image.alt,
  }))
}

function normalizeTwitterImages(images?: SeoTwitterImage[]) {
  return images?.map((image) => {
    if (typeof image === "string") {
      return image
    }

    return {
      url: image.url,
      width: image.width,
      height: image.height,
      alt: image.alt,
    }
  })
}

export function buildLayoutMetadata(
  config: SeoConfig = seoConfig,
  input: SeoLayoutMetadataInput = {},
): Metadata {
  const canonical = buildCanonicalUrl(config, input.canonicalPath)

  return {
    metadataBase: new URL(config.site.siteUrl),
    title: {
      default: input.defaultTitle ?? config.site.defaultTitle,
      template: config.site.titleTemplate,
    },
    description: input.description ?? config.site.defaultDescription,
    alternates: {
      canonical,
    },
    robots: input.robots ?? {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      siteName: config.brand.brandName,
      title: input.defaultTitle ?? config.site.defaultTitle,
      description: input.description ?? config.site.defaultDescription,
      url: canonical,
      type: "website",
      images: [
        {
          url: config.brand.brandLogo,
          alt: config.brand.brandName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.defaultTitle ?? config.site.defaultTitle,
      description: input.description ?? config.site.defaultDescription,
      images: [config.brand.brandLogo],
    },
  }
}

export function buildPageMetadata(
  config: SeoConfig = seoConfig,
  input: SeoPageMetadataInput,
): Metadata {
  const canonical = buildCanonicalUrl(config, input.canonicalPath)
  const openGraphInput = input.openGraph ?? {}
  const { images: openGraphImages, ...openGraphRest } = openGraphInput
  const twitterInput = input.twitter ?? {}
  const { images: twitterImages, ...twitterRest } = twitterInput
  const openGraphType = openGraphRest.type ?? "website"
  const twitterCard = twitterRest.card ?? "summary_large_image"

  return {
    title: input.title,
    description: input.description,
    alternates: {
      ...input.alternates,
      canonical,
    },
    robots: input.robots ?? {
      index: true,
      follow: true,
    },
    openGraph: {
      siteName: config.brand.brandName,
      title: input.title,
      description: input.description,
      url: canonical,
      type: openGraphType,
      locale: config.site.defaultLocale,
      ...openGraphRest,
      images: normalizeOpenGraphImages(openGraphImages),
    },
    twitter: {
      card: twitterCard,
      title: input.title,
      description: input.description,
      ...twitterRest,
      images: normalizeTwitterImages(twitterImages),
    },
  }
}
