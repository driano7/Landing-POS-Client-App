/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import { JsonLd } from "@/agency/components/seo/JsonLd"
import type { SeoJsonLdInput } from "@/agency/lib/seo/types"

interface SeoProps {
  entities?: SeoJsonLdInput | null
}

/* Componente puente para incrustar schemas reutilizables sin mezclar la estructura SEO con la copia del sitio. */
export function Seo({ entities }: SeoProps) {
  if (!entities) {
    return null
  }

  return <JsonLd data={entities} />
}
