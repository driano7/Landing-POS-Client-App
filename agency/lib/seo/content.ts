/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
export interface ServiceContent {
  slug: string
  name: string
  description: string
  serviceType?: string
  updatedAt: string
}

export interface BlogContent {
  slug: string
  headline: string
  description: string
  articleSection?: string
  datePublished: string
  dateModified: string
  updatedAt: string
}

export interface CaseStudyContent {
  slug: string
  headline: string
  description: string
  datePublished: string
  dateModified: string
  updatedAt: string
}

/* Contenido SEO de ejemplo.
 * En producción, estos slugs/títulos deben venir del contenido aprobado del cliente o de un CMS contratado.
 */
const services: ServiceContent[] = [
  {
    slug: "creacion-sitios-web",
    name: "Creación de sitios web",
    description: "Diseño y desarrollo de sitios web orientados a conversión, rendimiento y SEO técnico",
    serviceType: "Web Development",
    updatedAt: "2026-04-01",
  },
  {
    slug: "seo-empresas",
    name: "SEO para empresas",
    description: "Arquitectura, contenido y optimización técnica para ganar visibilidad orgánica",
    serviceType: "Search Engine Optimization",
    updatedAt: "2026-04-01",
  },
]

const blogPosts: BlogContent[] = [
  {
    slug: "seo-tecnico-nextjs",
    headline: "SEO técnico en Next.js App Router",
    description: "Cómo estructurar metadata, JSON-LD y rutas indexables en un proyecto con App Router",
    articleSection: "SEO técnico",
    datePublished: "2026-03-28",
    dateModified: "2026-03-30",
    updatedAt: "2026-03-30",
  },
]

const caseStudies: CaseStudyContent[] = [
  {
    slug: "sitio-web-corporativo",
    headline: "Sitio web corporativo para una empresa de servicios",
    description: "Ejemplo de caso de uso para páginas orientadas a entidades y rendimiento orgánico",
    datePublished: "2026-03-22",
    dateModified: "2026-03-27",
    updatedAt: "2026-03-27",
  },
]

export async function getServiceBySlug(slug: string) {
  return services.find((item) => item.slug === slug) ?? null
}

export async function getBlogBySlug(slug: string) {
  return blogPosts.find((item) => item.slug === slug) ?? null
}

export async function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((item) => item.slug === slug) ?? null
}

export async function listSeoRoutes() {
  return {
    services,
    blogPosts,
    caseStudies,
  }
}
