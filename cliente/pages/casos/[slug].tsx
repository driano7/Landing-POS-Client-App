/* Titularidad del cliente: este archivo contiene el contenido editorial del sitio de Donovan Riaño.
 * Los builders SEO importados desde `agency/` conservan su licencia o cesión original.
 */
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Seo } from "@/agency/components/seo/Seo"
import { seoConfig } from "@/agency/lib/seo/config"
import {
  buildArticleEntity,
  buildBreadcrumbList,
  buildLocalBusinessEntity,
} from "@/agency/lib/seo/entities"
import { buildPageMetadata } from "@/agency/lib/seo/buildMetadata"
import { getCaseStudyBySlug } from "@/agency/lib/seo/content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    return {}
  }

  return buildPageMetadata(seoConfig, {
    title: caseStudy.headline,
    description: caseStudy.description,
    canonicalPath: `/casos/${caseStudy.slug}`,
    openGraph: {
      type: "article",
    },
  })
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  const localBusiness = buildLocalBusinessEntity({}, seoConfig)
  const entities = [
    buildArticleEntity(
      {
        kind: "Article",
        headline: caseStudy.headline,
        slug: caseStudy.slug,
        description: caseStudy.description,
        datePublished: caseStudy.datePublished,
        dateModified: caseStudy.dateModified,
        articleSection: "Casos de estudio",
      },
      seoConfig,
    ),
    buildBreadcrumbList(
      [
        { name: "Inicio", path: "/" },
        { name: "Casos", path: "/casos" },
        { name: caseStudy.headline, path: `/casos/${caseStudy.slug}` },
      ],
      seoConfig,
    ),
    ...(localBusiness ? [localBusiness] : []),
  ]

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-20">
      <Seo entities={entities} />
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Caso</p>
        <h1 className="text-4xl font-semibold">{caseStudy.headline}</h1>
        <p className="max-w-2xl text-lg text-neutral-600">{caseStudy.description}</p>
      </header>
    </main>
  )
}
