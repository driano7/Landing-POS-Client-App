import type { MetadataRoute } from "next"
import { seoConfig } from "@/lib/seo/config"
import { buildCanonicalUrl } from "@/lib/seo/url"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: buildCanonicalUrl(seoConfig, "/sitemap.xml"),
    host: seoConfig.site.siteUrl,
  }
}

