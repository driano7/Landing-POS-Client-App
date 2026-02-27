"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, useSheet } from "@/components/ui/sheet"

const navLinks = [
  { href: "#features", label: "Características" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
]

const demoLink =
  "https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"

function scrollToAnchor(href: string) {
  const target = document.querySelector(href)
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" })
  }
}

function MobileNavLink({ href, label }: typeof navLinks[number]) {
  const { setOpen } = useSheet()
  return (
    <a
      href={href}
      onClick={(event) => {
        event.preventDefault()
        setOpen(false)
        scrollToAnchor(href)
      }}
      className="block rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-base font-medium text-gray-700 transition hover:border-orange-300 hover:text-gray-900"
    >
      {label}
    </a>
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
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  scrollToAnchor(link.href)
                }}
                className="text-sm font-medium text-gray-700 transition hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button
            type="button"
            className="hidden rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-white font-semibold uppercase shadow-lg hover:shadow-xl md:inline-flex"
            onClick={() => window.open(demoLink, "_blank")}
          >
            Agenda Demo
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
                  className="w-full rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-3 text-white font-semibold uppercase shadow-lg hover:shadow-xl"
                  onClick={() => window.open(demoLink, "_blank")}
                >
                  Agenda Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
