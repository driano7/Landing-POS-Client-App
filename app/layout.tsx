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
  title: "Xoco Suite - Plataforma SaaS para Restaurantes en México, USA y Brasil",
  description:
    "Suite tecnológica para restaurantes que integra POS, métricas avanzadas, panel sanitario configurable (COFEPRIS/FDA/ANVISA) y app cliente",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Xoco Suite — POS, métricas y app cliente para restaurantes en MX/US/BR",
    description:
      "Suite tecnológica completa para restaurantes con POS operativo, analítica avanzada, cumplimiento sanitario y app de cliente integrada",
    url: "https://xoco-suite.vercel.app",
    siteName: "Xoco Suite",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Xoco Suite - POS y app para restaurantes",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xoco Suite — POS, métricas y app cliente para restaurantes en MX/US/BR",
    description:
      "Suite tecnológica completa para restaurantes con POS operativo, analítica avanzada, cumplimiento sanitario y app de cliente integrada",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const themeInitScript = `
    (function() {
      var storageKey = "xoco-theme";
      var manualKey = "xoco-theme-manual";
      var root = document.documentElement;
      var storedTheme = null;
      var isManual = false;
      try {
        storedTheme = localStorage.getItem(storageKey);
        isManual = localStorage.getItem(manualKey) === "1";
      } catch (e) {}

      var isStoredValid = storedTheme === "light" || storedTheme === "dark";
      var theme = "dark";

      if (isManual && isStoredValid) {
        theme = storedTheme;
      } else {
        try {
          if (window.matchMedia) {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
              theme = "dark";
            } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
              theme = "light";
            }
          }
          localStorage.setItem(storageKey, theme);
        } catch (e) {
          theme = "dark";
        }
      }

      root.classList.remove("light", "dark");
      root.classList.add(theme);
      root.style.colorScheme = theme;
    })();
  `

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${lato.className} font-sans antialiased transition-colors duration-500`}>
        <ThemeProvider defaultTheme="dark" storageKey="xoco-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
