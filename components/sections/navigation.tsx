"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { type MouseEvent, useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, useSheet } from "@/components/ui/sheet"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const navLinks = [
  { href: "#features", label: "Características" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
  { href: "/cursos", label: "Cursos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/ebooks", label: "eBooks" },
]

const consultingLink =
  "https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20consulta%20de%20Xoco%20Suite"

function scrollToAnchor(href: string) {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function isAnchor(link: typeof navLinks[number]) {
  return link.href.startsWith("#")
}

function MobileNavLink({ href, label }: typeof navLinks[number]) {
  const router = useRouter()
  const { setOpen } = useSheet()
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setOpen(false)
    if (href.startsWith("#")) {
      scrollToAnchor(href)
    } else {
      router.push(href)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-base font-medium text-gray-700 transition hover:border-orange-300 hover:text-gray-900 text-left w-full"
    >
      {label}
    </button>
  )
}

function SheetCloseButton() {
  const { setOpen } = useSheet()
  return (
    <button
      type="button"
      onClick={() => setOpen(false)}
      className="rounded-full border border-gray-200 p-2 text-gray-600 hover:border-gray-300"
    >
      <X size={20} />
    </button>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 py-3 shadow-md backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex w-[95%] max-w-7xl items-center justify-between px-2 md:px-0">
        <Link
          href="/"
          onClick={(event) => {
            event.preventDefault()
            scrollToAnchor("#hero")
          }}
          className="text-2xl font-bold text-gray-900"
        >
          <span className="text-orange-600">Xoco</span> Suite
        </Link>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) =>
              isAnchor(link) ? (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToAnchor(link.href)}
                  className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>

          <Button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-bold uppercase shadow-lg hover:shadow-xl md:inline-flex"
            onClick={() => window.open(consultingLink, "_blank")}
          >
            <WhatsAppIcon className="h-5 w-5" />
            <span>Iniciar consultoría ahora</span>
          </Button>

          <Sheet>
            <SheetTrigger>
              <Button className="md:hidden rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs px-4 py-6">
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">Xoco Suite</span>
                <SheetCloseButton />
              </div>
              <div className="mt-6 space-y-3">
                {navLinks.map((link) => (
                  <MobileNavLink key={link.href} href={link.href} label={link.label} />
                ))}
              </div>
              <div className="mt-6">
                <Button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-bold uppercase shadow-lg hover:shadow-xl"
                  onClick={() => window.open(consultingLink, "_blank")}
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Iniciar consultoría ahora
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white py-2 border-b border-white/5 last:border-0"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  size="sm"
                  className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                  >
                    Agenda demo gratis
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
