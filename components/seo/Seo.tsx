import { JsonLd } from "@/components/seo/JsonLd"
import type { SeoJsonLdInput } from "@/lib/seo/types"

interface SeoProps {
  entities?: SeoJsonLdInput | null
}

export function Seo({ entities }: SeoProps) {
  if (!entities) {
    return null
  }

  return <JsonLd data={entities} />
}

