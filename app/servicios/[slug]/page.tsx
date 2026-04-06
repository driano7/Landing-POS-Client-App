import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Seo } from "@/components/seo/Seo"
import { seoConfig } from "@/lib/seo/config"
import {
  buildBreadcrumbList,
  buildServiceEntity,
} from "@/lib/seo/entities"
import { buildPageMetadata } from "@/lib/seo/buildMetadata"
import { getServiceBySlug } from "@/lib/seo/content"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return buildPageMetadata(seoConfig, {
    title: service.name,
    description: service.description,
    canonicalPath: `/servicios/${service.slug}`,
    openGraph: {
      type: "article",
    },
  })
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const service = await getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const entities = [
    buildServiceEntity(service, seoConfig),
    buildBreadcrumbList(
      [
        { name: "Inicio", path: "/" },
        { name: "Servicios", path: "/servicios" },
        { name: service.name, path: `/servicios/${service.slug}` },
      ],
      seoConfig,
    ),
  ]

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col gap-6 px-6 py-20">
      <Seo entities={entities} />
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">Servicio</p>
        <h1 className="text-4xl font-semibold">{service.name}</h1>
        <p className="max-w-2xl text-lg text-neutral-600">{service.description}</p>
      </header>
    </main>
  )
}
