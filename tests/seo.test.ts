import { describe, expect, it } from "vitest"
import { seoConfig } from "@/lib/seo/config"
import { buildCanonicalUrl } from "@/lib/seo/url"
import {
  buildBreadcrumbList,
  buildOrganizationEntity,
  buildServiceEntity,
  buildArticleEntity,
  buildLocalBusinessEntity,
} from "@/lib/seo/entities"
import { buildPageMetadata } from "@/lib/seo/buildMetadata"
import { escapeJsonLd, serializeJsonLd } from "@/lib/seo/buildJsonLd"

describe("seo helpers", () => {
  it("builds canonical urls without trailing slash for nested paths", () => {
    expect(buildCanonicalUrl(seoConfig, "/servicios/seo-empresas/")).toBe(
      `${seoConfig.site.siteUrl.replace(/\/+$/, "")}/servicios/seo-empresas`,
    )
  })

  it("builds layout metadata with canonical alternates", () => {
    const metadata = buildPageMetadata(seoConfig, {
      title: "SEO para empresas",
      description: "Servicio de SEO",
      canonicalPath: "/servicios/seo-empresas",
    })

    expect(metadata.title).toBe("SEO para empresas")
    expect(metadata.alternates?.canonical).toBe(`${seoConfig.site.siteUrl.replace(/\/+$/, "")}/servicios/seo-empresas`)
    expect(metadata.openGraph?.title).toBe("SEO para empresas")
  })

  it("escapes json ld payloads", () => {
    expect(escapeJsonLd('<script>alert("x")</script>')).toBe("\\u003cscript>alert(\"x\")\\u003c/script>")
    expect(serializeJsonLd({ "@context": "https://schema.org", "@type": "Thing", name: "<danger>" })).toContain(
      "\\u003cdanger>",
    )
  })

  it("builds breadcrumb lists with absolute items", () => {
    const breadcrumbs = buildBreadcrumbList(
      [
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
      ],
      seoConfig,
    )

    expect(breadcrumbs.itemListElement).toHaveLength(2)
    expect(breadcrumbs.itemListElement[1].item).toBe(`${seoConfig.site.siteUrl.replace(/\/+$/, "")}/servicios`)
  })

  it("builds entity graphs for organization, service and article", () => {
    const organization = buildOrganizationEntity(seoConfig)
    const service = buildServiceEntity(
      {
        slug: "seo-empresas",
        name: "SEO para empresas",
      },
      seoConfig,
    )
    const article = buildArticleEntity(
      {
        kind: "BlogPosting",
        slug: "seo-tecnico-nextjs",
        headline: "SEO técnico en Next.js App Router",
      },
      seoConfig,
    )

    expect(organization["@type"]).toBe("Organization")
    expect(service["@type"]).toBe("Service")
    expect(article["@type"]).toBe("BlogPosting")
  })

  it("returns local business only when location data exists", () => {
    expect(buildLocalBusinessEntity({}, seoConfig)).toBeNull()

    const localBusiness = buildLocalBusinessEntity(
      {
        address: {
          addressLocality: "Ciudad de México",
          addressCountry: "MX",
        },
      },
      seoConfig,
    )

    expect(localBusiness?.["@type"]).toBe("LocalBusiness")
  })
})
