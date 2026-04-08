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
} from "@/agency/lib/seo/entities"
import { buildPageMetadata } from "@/agency/lib/seo/buildMetadata"
import { getBlogBySlug } from "@/agency/lib/seo/content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    return {}
  }

  return buildPageMetadata(seoConfig, {
    title: post.headline,
    description: post.description,
    canonicalPath: `/blog/${post.slug}`,
    openGraph: {
      type: "article",
    },
  })
}

export default async function BlogPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  const entities = [
    buildArticleEntity(
      {
        kind: "BlogPosting",
        headline: post.headline,
        slug: post.slug,
        description: post.description,
        datePublished: post.datePublished,
        dateModified: post.dateModified,
        articleSection: post.articleSection,
      },
      seoConfig,
    ),
    buildBreadcrumbList(
      [
        { name: "Inicio", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.headline, path: `/blog/${post.slug}` },
      ],
      seoConfig,
    ),
  ]

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-20">
      <Seo entities={entities} />
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Blog</p>
        <h1 className="text-4xl font-semibold">{post.headline}</h1>
        <p className="max-w-2xl text-lg text-neutral-600">{post.description}</p>
      </header>
    </main>
  )
}
