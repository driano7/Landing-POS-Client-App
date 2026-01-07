import type React from "react"
import type { Metadata } from "next"
import { Lato } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: "Xoco Suite - Plataforma SaaS para Restaurantes en México",
  description:
    "Suite tecnológica integral para restaurantes que integra POS, métricas avanzadas, cumplimiento COFEPRIS y app cliente",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${lato.className} font-sans antialiased transition-colors duration-500`}>
        <ThemeProvider defaultTheme="light" storageKey="xoco-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
