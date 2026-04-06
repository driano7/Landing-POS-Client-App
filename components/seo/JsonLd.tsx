import { serializeJsonLd } from "@/lib/seo/buildJsonLd"
import type { SeoJsonLdInput } from "@/lib/seo/types"

interface JsonLdProps {
  data: SeoJsonLdInput
  id?: string
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  )
}

