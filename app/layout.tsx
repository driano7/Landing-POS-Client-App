/* Capa global de rutas y shell del sitio de Donovan Riaño.
 * Este archivo actúa como adaptador de infraestructura compartida: SEO, locale, tema y analítica.
 * Cualquier base reusable importada desde agency/ o terceros/ conserva su titularidad y licencia original.
 */
import type React from "react"
import { Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/agency/components/locale-provider"
import { Seo } from "@/agency/components/seo/Seo"
import { ThemeProvider } from "@/terceros/components/theme-provider"
import { buildLayoutMetadata } from "@/agency/lib/seo/buildMetadata"
import { seoConfig } from "@/agency/lib/seo/config"
import { buildOrganizationEntity, buildWebSiteEntity } from "@/agency/lib/seo/entities"
import { getLocaleFromCookies } from "@/agency/lib/locale"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
})

export const metadata = {
  ...buildLayoutMetadata(seoConfig, {
  defaultTitle: seoConfig.site.defaultTitle,
  description: seoConfig.site.defaultDescription,
  canonicalPath: "/",
  }),
  generator: "Next.js",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocaleFromCookies()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${lato.className} font-sans antialiased transition-colors duration-500`}>
        {/* Boundary: locale y theme son infraestructura compartida; el contenido renderizado debajo pertenece al sitio del cliente. */}
        <LocaleProvider initialLocale={locale}>
          <ThemeProvider defaultTheme="dark" storageKey="xoco-theme">
            <Seo entities={[buildOrganizationEntity(seoConfig), buildWebSiteEntity(seoConfig)]} />
            {children}
          </ThemeProvider>
        </LocaleProvider>
        {/* Third-party integration: Vercel Analytics solo observa navegación y uso agregado, no procesa pagos ni datos sensibles. */}
        <Analytics />
      </body>
    </html>
  )
}
