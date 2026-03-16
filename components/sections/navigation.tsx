"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "/sitio-web", label: "Sitio web" },
  { href: "/app-cliente", label: "App Cliente" },
  { href: "/pos", label: "Punto de venta" },
  { href: "/prices", label: "Precios" },
  { href: "/pagos", label: "Pagos Blokko" },
]

const mobileDockLinks = [
  {
    href: "/sitio-web",
    label: "Sitio web",
    lightIcon: "/docIcons/sitio-web claro.png",
    darkIcon: "/docIcons/sitio-web oscuro.png",
    darkIconClassName: "invert brightness-125 contrast-125",
  },
  {
    href: "/app-cliente",
    label: "Web",
    lightIcon: "/docIcons/app claro.png",
    darkIcon: "/docIcons/app oscuro.png",
  },
  {
    href: "/pos",
    label: "POV",
    lightIcon: "/docIcons/punto-de-venta claro.png",
    darkIcon: "/docIcons/punto-de-venta oscuro.png",
    darkIconClassName: "invert brightness-125 contrast-125",
  },
  {
    href: "/prices",
    label: "Precios",
    lightIcon: "/docIcons/precio claro.png",
    darkIcon: "/docIcons/precio oscuro.png",
  },
  {
    href: "/pagos",
    label: "Blokko.io",
    lightIcon: "/docIcons/pos.png",
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  const isLinkActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
      >
        <div
          className={`relative rounded-2xl border transition-all duration-300 ${
            scrolled
              ? "bg-gradient-to-r from-[#4e342e]/85 to-[#3e2723]/85 dark:from-[#0d0a08]/90 dark:to-[#0958403]/90 backdrop-blur-3xl border-[#8d6e63]/30 shadow-2xl"
              : "bg-gradient-to-r from-[#5d4037]/75 to-[#4e342e]/75 dark:from-[#1a1410]/80 dark:to-[#0d0a08]/80 backdrop-blur-2xl border-[#8d6e63]/20 shadow-lg"
          }`}
        >
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 group">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="w-8 h-8 bg-white/90 dark:bg-white/95 rounded-lg flex items-center justify-center shadow-md"
                >
                  <span className="text-[#5d4037] font-bold text-lg">X</span>
                </motion.div>
                <span className="font-bold text-xl text-white">Xoco Suite</span>
              </Link>

              <div className="hidden lg:flex items-center gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] transition-colors relative group ${
                      isLinkActive(link.href) ? "text-white font-medium" : "text-white/80 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all ${
                        isLinkActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <ThemeToggle />
                <WhatsAppCTAButton
                  href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                  label="Agenda demo"
                  size="sm"
                  className="hidden md:inline-flex"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="lg:hidden fixed bottom-3 inset-x-0 z-50 px-3 pointer-events-none">
        <div className="mx-auto max-w-md pointer-events-auto rounded-2xl border border-border/70 bg-background/85 backdrop-blur-xl shadow-xl">
          <div className="grid grid-cols-5 gap-1 p-2">
            {mobileDockLinks.map((item) => {
              const active = isLinkActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex flex-col items-center justify-center rounded-xl px-1 py-2 transition-all ${
                    active ? "bg-primary/15" : "hover:bg-muted/60"
                  }`}
                >
                  <div className="h-8 w-8 flex items-center justify-center">
                    <img
                      src={item.lightIcon}
                      alt={item.label}
                      className={`max-h-6 max-w-6 object-contain dark:hidden ${active ? "scale-105" : ""}`}
                    />
                    {item.darkIcon ? (
                      <img
                        src={item.darkIcon}
                        alt={item.label}
                        className={`hidden dark:block max-h-6 max-w-6 object-contain ${item.darkIconClassName ?? ""} ${active ? "scale-105" : ""}`}
                      />
                    ) : (
                      <img
                        src={item.lightIcon}
                        alt={item.label}
                        className={`hidden dark:block max-h-6 max-w-6 object-contain ${active ? "scale-105" : ""}`}
                      />
                    )}
                  </div>
                  <span className={`mt-1 text-[10px] leading-none ${active ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
