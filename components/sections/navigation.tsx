"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
<<<<<<< HEAD
import { ThemeToggle } from "@/components/theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#productos", label: "Producto" },
  { href: "#precios", label: "Precios" },
  { href: "#seguridad", label: "Seguridad" },
  { href: "#sanidad", label: "Sanidad" },
]
=======
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
>>>>>>> c135cd15 (addings perplexity)

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
<<<<<<< HEAD
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
=======
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
>>>>>>> c135cd15 (addings perplexity)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 py-3 shadow-md backdrop-blur-md" : "bg-transparent py-6"
      }`}
    >
<<<<<<< HEAD
      <div
        className={`relative rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-[#4e342e]/85 to-[#3e2723]/85 dark:from-[#0d0a08]/90 dark:to-[#0958403]/90 backdrop-blur-3xl border-[#8d6e63]/30 shadow-2xl"
            : "bg-gradient-to-r from-[#5d4037]/75 to-[#4e342e]/75 dark:from-[#1a1410]/80 dark:to-[#0d0a08]/80 backdrop-blur-2xl border-[#8d6e63]/20 shadow-lg"
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-8 h-8 bg-white/90 dark:bg-white/95 rounded-lg flex items-center justify-center shadow-md"
              >
                <span className="text-[#5d4037] font-bold text-lg">X</span>
              </motion.div>
              <span className="font-bold text-xl text-white">Xoco Suite</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-white transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a
                  href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda demo
                </a>
              </Button>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
=======
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
>>>>>>> c135cd15 (addings perplexity)
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
