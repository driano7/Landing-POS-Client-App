import type React from "react"
import { Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocaleProvider } from "@/components/locale-provider"
import { Seo } from "@/components/seo/Seo"
import { ThemeProvider } from "@/components/theme-provider"
import { buildLayoutMetadata } from "@/lib/seo/buildMetadata"
import { seoConfig } from "@/lib/seo/config"
import { buildOrganizationEntity, buildWebSiteEntity } from "@/lib/seo/entities"
import { getLocaleFromCookies } from "@/lib/locale"
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
        <LocaleProvider initialLocale={locale}>
          <ThemeProvider defaultTheme="dark" storageKey="xoco-theme">
            <Seo entities={[buildOrganizationEntity(seoConfig), buildWebSiteEntity(seoConfig)]} />
            {children}
          </ThemeProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
