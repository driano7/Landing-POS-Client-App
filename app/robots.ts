/* Adaptador de infraestructura SEO global para el sitio de Donovan Riaño.
 * No contiene contenido comercial ni lógica de negocio.
 */
import type { MetadataRoute } from "next"
import { seoConfig } from "@/agency/lib/seo/config"
import { buildCanonicalUrl } from "@/agency/lib/seo/url"
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
