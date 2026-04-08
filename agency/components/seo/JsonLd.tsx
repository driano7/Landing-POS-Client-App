/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */
import { serializeJsonLd } from "@/agency/lib/seo/buildJsonLd"
import type { SeoJsonLdInput } from "@/agency/lib/seo/types"

interface JsonLdProps {
  data: SeoJsonLdInput
  id?: string
}

/* Reusable SEO primitive. Solo serializa datos; el contenido del schema se define en capas superiores. */
export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}
