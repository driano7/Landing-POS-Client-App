"use client"

/*
 * Integración de tercero. Este archivo está sujeto a la licencia y términos originales del proveedor.
 * No concede derechos sobre la marca ni sobre el software del proveedor.
 */
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

export { useTheme } from "next-themes"

/* Integración de tercero: next-themes controla la clase `dark` y la persistencia del tema. */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" enableSystem={false} defaultTheme="dark" {...props}>
      {children}
    </NextThemesProvider>
  )
}
