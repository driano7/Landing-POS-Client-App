# Inventario de Propiedad Intelectual

Proyecto: `Landing-POS-Client-App`

Titular contractual pretendido: Donovan Riaño.

Nota: en esta clasificación, `AGENCY_OWNED` significa "núcleo técnico reutilizable / base propietaria" y no sustituye la cesión o licencia contractual que corresponda. Cualquier módulo marcado `AGENCY_OWNED` o `MIXED` requiere revisión legal/contractual antes de reusarse fuera de este sitio.

Para uso operativo, la clasificación se agrupa en tres carpetas lógicas:

- `cliente`
- `agency`
- `terceros`

Las filas marcadas `MIXED` deben dividirse entre esas carpetas lógicas según corresponda.

Estructura física actual:

- `cliente/`
- `agency/`
- `terceros/`
- `app/` permanece como capa de rutas de Next.js que consume esas carpetas

Nota:
- Las rutas de archivo en la tabla apuntan a la ubicación física real de cada archivo.
- `app/` solo se conserva cuando actúa como adaptador de rutas de Next.js o capa global.
- Las páginas y secciones de negocio ya están inventariadas bajo `cliente/`, `agency/` y `terceros/`.

## Resumen funcional

- Sitio de marketing para Xoco Suite con secciones de POS, app cliente, sitio web, precios y pagos.
- Navegación global con header fijo, mobile dock, selector de idioma y switch de tema.
- Experiencia visual con `framer-motion`, `TypingText` y fondo reactivo al puntero.
- Contenido orientado a conversión por WhatsApp.
- SEO técnico con metadata, canonical, robots, sitemap, JSON-LD y entidades schema.org.
- Integración de analítica de Vercel.
- No se detectó backend propio, base de datos, auth, email marketing, CMS ni Stripe en este repo.
- La página de pagos usa UI demo y menciona a Blokko como proveedor externo, pero no implementa cobro real.

## Dependencias críticas y puntos de integración

- `next-themes` en [`terceros/components/theme-provider.tsx`](./terceros/components/theme-provider.tsx) y [`agency/components/theme-toggle.tsx`](./agency/components/theme-toggle.tsx).
- `@vercel/analytics/next` en [`app/layout.tsx`](./app/layout.tsx).
- `framer-motion` en las secciones UI principales y paneles interactivos.
- `@radix-ui/*` en [`terceros/components/ui/dropdown-menu.tsx`](./terceros/components/ui/dropdown-menu.tsx) y los primitives del sistema visual.
- `next/headers` en [`agency/lib/locale.ts`](./agency/lib/locale.ts) para cookie/Accept-Language.
- WhatsApp deep links en [`terceros/components/ui/whatsapp-cta.tsx`](./terceros/components/ui/whatsapp-cta.tsx) y varias páginas.
- Blokko como referencia de proveedor externo en [`cliente/pages/pagos.tsx`](./cliente/pages/pagos.tsx) y [`cliente/pages/prices.tsx`](./cliente/pages/prices.tsx).
- SEO routes internas en [`app/robots.ts`](./app/robots.ts) y [`app/sitemap.ts`](./app/sitemap.ts).
- No hay integración de base de datos, auth, email, CMS o Stripe detectada.

## Recomendación de separación

- Repo/app del cliente: páginas, copy aprobado, imágenes, precios, contactos y assets de marca.
- Paquete privado de la agencia: SEO builders, base UI reutilizable, shell de layout, helpers de locale y motion system.
- Terceros: Vercel Analytics, next-themes, Radix UI, Framer Motion, WhatsApp, y cualquier proveedor de pagos o identidad que se agregue después.

## Inventario

| Archivo | Categoría | Razón de clasificación | Requiere licencia | Exponer al cliente |
|---|---|---|---|---|
| `app/layout.tsx` | MIXED | Shell global del sitio de Donovan: SEO, locale, tema y analítica compuestos con bases reutilizables y terceros. | Sí, revisión contractual | Sí |
| `app/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página principal del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/sitio-web/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/app-cliente/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/pos/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/pagos/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/pago/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/prices/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para la página comercial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/blog/[slug]/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para contenido editorial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/casos/[slug]/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para contenido editorial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `app/servicios/[slug]/page.tsx` | CLIENTE_OWNED | Adaptador de ruta para contenido editorial del sitio de Donovan; no agrega lógica propia. | No, salvo acuerdo interno | Sí |
| `cliente/pages/home.tsx` | MIXED | Composición principal del sitio de Donovan con SEO técnico y secciones reutilizables. | Sí, revisión contractual | Sí |
| `cliente/pages/sitio-web.tsx` | MIXED | Shell reutilizable con copy y alcance del cliente; incluye referencia a dominio externo. | Sí, revisión contractual | Sí, parcial |
| `cliente/pages/app-cliente.tsx` | MIXED | UI reusable con narrativa comercial y claims de privacidad del cliente. | Sí, revisión contractual | Sí, parcial |
| `cliente/pages/pos.tsx` | MIXED | Marketing del producto POS con shell reusable y texto específico del negocio. | Sí, revisión contractual | Sí, parcial |
| `cliente/pages/pagos.tsx` | MIXED | Página de proveedor externo; no integra cobro real, pero sí condiciones de tercero. | Sí, revisión contractual | Sí, parcial |
| `cliente/pages/pago.tsx` | MIXED | Demo visual de checkout; UI propietaria sin procesamiento real de pagos. | Sí, revisión contractual | Sí, parcial |
| `cliente/pages/prices.tsx` | MIXED | Pricing comercial + mención de Blokko; mezcla oferta del cliente y proveedor tercero. | Sí, revisión contractual | Sí |
| `cliente/pages/blog/[slug].tsx` | MIXED | Contenido editorial del sitio de Donovan con builders SEO reutilizables. | Sí, revisión contractual | Sí |
| `cliente/pages/casos/[slug].tsx` | MIXED | Contenido editorial del sitio de Donovan con builders SEO reutilizables. | Sí, revisión contractual | Sí |
| `cliente/pages/servicios/[slug].tsx` | MIXED | Contenido comercial y editorial del sitio de Donovan con patrón SEO reusable. | Sí, revisión contractual | Sí |
| `app/robots.ts` | MIXED | Infraestructura SEO técnica del sitio de Donovan derivada de configuración reusable. | Sí, revisión contractual | Sí |
| `app/sitemap.ts` | MIXED | Infraestructura SEO técnica del sitio de Donovan derivada de contenido y configuración reusable. | Sí, revisión contractual | Sí |
| `agency/components/sections/navigation.tsx` | MIXED | Header global y mobile dock reutilizables con enlaces/copy específicos. | Sí, revisión contractual | Sí |
| `agency/components/sections/hero.tsx` | MIXED | Hero reusable con copy y CTA del sitio. | Sí, revisión contractual | Sí |
| `agency/components/sections/how-we-help.tsx` | MIXED | Sección de argumentación comercial; layout reusable con copy del cliente. | Sí, revisión contractual | Sí |
| `agency/components/sections/why-complete.tsx` | MIXED | Sección de valor/reasons; mezcla claim reusable y marketing del cliente. | Sí, revisión contractual | Sí |
| `agency/components/sections/product-modules.tsx` | MIXED | Showcase reusable con texto de módulos del producto. | Sí, revisión contractual | Sí |
| `agency/components/sections/pricing.tsx` | MIXED | Planes/CTA con condiciones contractuales del cliente. | Sí, revisión contractual | Sí |
| `agency/components/sections/footer.tsx` | MIXED | Footer reusable con contactos, enlaces y claims visibles. | Sí, revisión contractual | Sí |
| `agency/components/sections/app-cliente-panel.tsx` | MIXED | Panel mixto: shell reusable y copy de privacidad/pagos del cliente. | Sí, revisión contractual | Sí |
| `agency/components/sections/kds-panel.tsx` | MIXED | Panel reusable con referencias externas y claims operativos. | Sí, revisión contractual | Sí |
| `agency/components/sections/security.tsx` | MIXED | Sección de seguridad; valor reusable, pero los claims deben validarse. | Sí, revisión contractual | Sí |
| `agency/components/sections/cofepris.tsx` | MIXED | Contenido regulatorio y claims sanitarios; requiere validación documental. | Sí, revisión contractual | Sí |
| `agency/components/sections/qr-flows.tsx` | MIXED | Flujo UI reusable con copy de producto y lógica de experiencia. | Sí, revisión contractual | Sí |
| `agency/components/sections/pocs.tsx` | MIXED | Oferta comercial y onboarding; reusable, pero dependiente del negocio. | Sí, revisión contractual | Sí |
| `agency/components/sections/crypto-comparison.tsx` | MIXED | Comparativa comercial con referencias de mercado y narrativa del producto. | Sí, revisión contractual | Sí |
| `agency/components/locale-provider.tsx` | AGENCY_OWNED | Estado compartido de localización para toda la app. | Sí, revisión contractual | Sí |
| `agency/components/language-switcher.tsx` | AGENCY_OWNED | Control de idioma; infraestructura de presentación, no contenido final. | Sí, revisión contractual | Sí |
| `terceros/components/theme-provider.tsx` | THIRD_PARTY_INTEGRATION | Wrapper de `next-themes`. | Sí, licencia del tercero | Sí |
| `agency/components/theme-toggle.tsx` | MIXED | UI de theme switch + integración con `next-themes`. | Sí, licencia del tercero | Sí |
| `agency/components/MouseGradient.tsx` | AGENCY_OWNED | Interacción visual distintiva y reusable. | Sí, revisión contractual | Sí |
| `agency/components/payment/flip-card.tsx` | AGENCY_OWNED | Demo visual de checkout; no procesa pagos reales. | Sí, revisión contractual | Sí |
| `agency/components/ui/button.tsx` | AGENCY_OWNED | Primitive reusable del design system. | Sí, revisión contractual | Sí |
| `agency/components/ui/badge.tsx` | AGENCY_OWNED | Primitive reusable del design system. | Sí, revisión contractual | Sí |
| `agency/components/ui/card.tsx` | AGENCY_OWNED | Primitive reusable del design system. | Sí, revisión contractual | Sí |
| `agency/components/ui/input.tsx` | AGENCY_OWNED | Primitive reusable del design system. | Sí, revisión contractual | Sí |
| `terceros/components/ui/dropdown-menu.tsx` | THIRD_PARTY_INTEGRATION | Wrapper de Radix UI para menus desplegables. | Sí, licencia del tercero | Sí |
| `agency/components/ui/typing-text.tsx` | AGENCY_OWNED | Animación reusable de texto con `prefers-reduced-motion`. | Sí, revisión contractual | Sí |
| `terceros/components/ui/whatsapp-cta.tsx` | THIRD_PARTY_INTEGRATION | Deep link a WhatsApp y uso de asset de marca externo. | Sí, licencia/brand guideline del tercero | Sí |
| `terceros/components/icons/whatsapp-icon.tsx` | THIRD_PARTY_INTEGRATION | Icono de marca WhatsApp en SVG local. | Sí, licencia/brand guideline del tercero | Sí |
| `agency/components/seo/Seo.tsx` | AGENCY_OWNED | Puente reusable para insertar schemas. | Sí, revisión contractual | Sí |
| `agency/components/seo/JsonLd.tsx` | AGENCY_OWNED | Serializador reusable de JSON-LD. | Sí, revisión contractual | Sí |
| `agency/lib/seo/config.ts` | AGENCY_OWNED | Configuración de marca/SEO base vía env vars. | Sí, revisión contractual | Sí |
| `agency/lib/seo/buildMetadata.ts` | AGENCY_OWNED | Builder reusable de metadata técnica. | Sí, revisión contractual | Sí |
| `agency/lib/seo/buildJsonLd.ts` | AGENCY_OWNED | Utilidad reusable de serialización segura de schema. | Sí, revisión contractual | Sí |
| `agency/lib/seo/entities.ts` | AGENCY_OWNED | Schema builders reutilizables para Organization, WebSite, Service, Article y Breadcrumb. | Sí, revisión contractual | Sí |
| `agency/lib/seo/buildBreadcrumbs.ts` | AGENCY_OWNED | Reexport de helper SEO reusable. | Sí, revisión contractual | Sí |
| `agency/lib/seo/content.ts` | MIXED | Dataset SEO de ejemplo + registry de rutas; debe reemplazarse con contenido aprobado si aplica. | Sí, revisión contractual | Sí, parcial |
| `agency/lib/seo/index.ts` | AGENCY_OWNED | Barrel de exports del núcleo SEO. | Sí, revisión contractual | Interno |
| `agency/lib/seo/types.ts` | AGENCY_OWNED | Tipos del framework SEO reutilizable. | Sí, revisión contractual | Interno |
| `agency/lib/seo/url.ts` | AGENCY_OWNED | Helper reusable de canonical URLs. | Sí, revisión contractual | Interno |
| `agency/lib/site-content.ts` | AGENCY_OWNED | Registro compartido de locales y etiquetas. | Sí, revisión contractual | Sí |
| `agency/lib/locale.ts` | AGENCY_OWNED | Resolución de idioma por cookie y headers. | Sí, revisión contractual | Interno |
| `agency/lib/utils.ts` | AGENCY_OWNED | Helper genérico `cn` para composición de clases. | Sí, revisión contractual | Interno |
| `app/globals.css` | MIXED | Design tokens y capa visual global del sitio de Donovan, consumidos por bases reutilizables. | Sí, revisión contractual | Sí |
| `styles/globals.css` | AGENCY_OWNED | Estilos globales legacy/alternos; revisar si sigue en uso. | Sí, revisión contractual | Interno |
| `package.json` | AGENCY_OWNED | Dependencias y scripts del proyecto. | Sí, revisión contractual | Interno |
| `next.config.mjs` | AGENCY_OWNED | Configuración base de Next.js. | Sí, revisión contractual | Interno |
| `README.md` | MIXED | Documentación comercial/técnica; mezcla material descriptivo y notas de producto. | Sí, revisión contractual | Sí |
| `public/XocoCafe.png` | CLIENTE_OWNED | Asset de marca del cliente. | No, salvo restricciones de marca propias | Sí |
| `public/favicon.svg` | CLIENTE_OWNED | Icono de marca del sitio. | No, salvo restricciones de marca propias | Sí |
| `public/icon.svg` | CLIENTE_OWNED | Icono de marca del sitio. | No, salvo restricciones de marca propias | Sí |
| `public/og-image.jpg` | CLIENTE_OWNED | Imagen social/branding del sitio. | No, salvo restricciones de marca propias | Sí |
| `public/docIcons/*.png` | CLIENTE_OWNED | Set visual del producto/branding del sitio. | No, salvo restricciones de marca propias | Sí |
| `public/placeholder*.{svg,png,jpg}` | AGENCY_OWNED | Placeholders genéricos reutilizables. | Sí, revisión contractual | Interno |
| `public/whatsapp claro.png` | THIRD_PARTY_INTEGRATION | Asset de marca de WhatsApp usado como CTA. | Sí, licencia/brand guideline del tercero | Sí |
| `public/whatsapp oscuro.png` | THIRD_PARTY_INTEGRATION | Asset de marca de WhatsApp usado como CTA. | Sí, licencia/brand guideline del tercero | Sí |

## Observaciones legales y técnicas

- No se detectó `stripe`, `auth`, `cms`, `email` ni `db` runtime en el árbol actual.
- Los claims de cifrado, privacidad, COFEPRIS y machine learning aparecen como copy o UI; requieren verificación si se van a usar contractualmente.
- Cualquier reutilización del núcleo técnico fuera de este proyecto requiere documentar licencia/custodia por escrito.
- Los assets de terceros deben respetar la licencia o la guía de marca original del proveedor.
