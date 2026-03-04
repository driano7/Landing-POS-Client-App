"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { type MouseEvent, useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
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
      className="block rounded-2xl border border-gray-200 bg-white/90 px-4 py-3 text-base font-medium text-gray-700 transition hover:border-orange-300 hover:text-gray-900 text-left w-full"
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 py-2 shadow-md backdrop-blur" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex w-[95%] max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
          onClick={(event) => {
            event.preventDefault()
            scrollToAnchor("#hero")
          }}
        >
          <span className="text-orange-600">Xoco</span> Suite
        </Link>

        <div className="hidden items-center gap-6 md:flex">
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

        <div className="flex items-center gap-3">
          <Button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-2 text-sm font-bold uppercase shadow-lg hover:shadow-xl md:inline-flex"
            onClick={() => window.open(consultingLink, "_blank")}
          >
            <WhatsAppIcon className="h-4 w-4" />
            Consultoría
          </Button>

          <Sheet>
            <SheetTrigger>
              <button
                type="button"
                className="rounded-full border border-gray-200 bg-white p-2 text-gray-700 shadow-sm md:hidden"
                aria-label="Abrir menú"
              >
                <Menu size={20} />
              </button>
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
                  <WhatsAppIcon className="h-4 w-4" />
                  Consultoría
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
