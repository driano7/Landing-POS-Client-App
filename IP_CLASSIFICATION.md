# Clasificación de Propiedad Intelectual

Titular del proyecto: Donovan Riaño.

Este documento organiza el repositorio en tres carpetas lógicas:

- `cliente`: contenido, branding, assets, copy y datos de Donovan Riaño.
- `agency`: código reusable, arquitectura base, SEO técnico, componentes compartidos y lógica core que solo puede reutilizarse si existe cesión o licencia válida a favor de Donovan Riaño.
- `terceros`: integraciones, SDKs, librerías y assets sujetos a licencia de proveedores externos.

Estructura física actual del repositorio:

- `cliente/`
- `agency/`
- `terceros/`
- `app/` queda como capa de rutas/adaptadores de Next.js

## Texto legal base

1. Todo contenido, identidad visual, textos, imágenes, datos y materiales aportados por Donovan Riaño pertenecen a Donovan Riaño.
2. Todo código reusable, arquitectura base, componentes compartidos, helpers, patrones de animación, SEO técnico, JSON-LD y sistemas visuales desarrollados para el proyecto deben tratarse como parte del paquete `agency` únicamente si existe cesión, licencia o autorización escrita que así lo permita. En ausencia de esa documentación, su uso debe marcarse como `requiere revisión legal/contractual`.
3. Toda integración de terceros queda sujeta a la licencia original del proveedor, sus términos de uso y sus restricciones de marca.
4. Cualquier archivo que mezcle contenido de Donovan con código reusable o integración de terceros debe marcarse como `MIXED` y documentar claramente qué porción pertenece a cada carpeta lógica.
5. Nada de lo anterior implica cesión automática de derechos. Si un derecho no está expresamente documentado, debe considerarse no otorgado.

## Criterio operativo

- Si el archivo contiene branding, copy, imágenes, precios, contacto, testimonios o datos del negocio de Donovan, va a `cliente`.
- Si el archivo contiene infraestructura reusable, sistema base, SEO técnico, layout system, helpers, animación distintiva o primitives UI, va a `agency`.
- Si el archivo depende de un proveedor externo, SDK, librería o servicio de terceros, va a `terceros`.
- Si el archivo mezcla dos o más de esas capas, va a `MIXED` y debe separarse por comentarios de frontera.
