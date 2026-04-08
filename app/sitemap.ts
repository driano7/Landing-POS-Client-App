/* Adaptador de infraestructura SEO global para el sitio de Donovan Riaño.
 * Expone rutas derivadas de contenido y configuración aprobada.
 */
import type { MetadataRoute } from "next"
import { seoConfig } from "@/agency/lib/seo/config"
import { buildCanonicalUrl } from "@/agency/lib/seo/url"
import { listSeoRoutes } from "@/agency/lib/seo/content"
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { services, blogPosts, caseStudies } = await listSeoRoutes()

  return [
    {
      url: buildCanonicalUrl(seoConfig, "/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: buildCanonicalUrl(seoConfig, "/sitio-web"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: buildCanonicalUrl(seoConfig, "/pos"),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...services.map((item) => ({
      url: buildCanonicalUrl(seoConfig, `/servicios/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((item) => ({
      url: buildCanonicalUrl(seoConfig, `/blog/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...caseStudies.map((item) => ({
      url: buildCanonicalUrl(seoConfig, `/casos/${item.slug}`),
      lastModified: new Date(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]
}
