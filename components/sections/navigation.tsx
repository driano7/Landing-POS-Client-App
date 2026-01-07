"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl"
    >
      <div
        className={`relative rounded-2xl border transition-all duration-300 ${
          scrolled
            ? // Increased blur to backdrop-blur-3xl and made more transparent with adjusted opacity
              "bg-gradient-to-r from-[#4e342e]/85 to-[#3e2723]/85 dark:from-[#0d0a08]/90 dark:to-[#050403]/90 backdrop-blur-3xl border-[#8d6e63]/30 shadow-2xl"
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

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#productos"
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                Productos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
              <Link href="#precios" className="text-sm text-white/80 hover:text-white transition-colors relative group">
                Precios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
              <Link
                href="#seguridad"
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                Seguridad
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
              <Link
                href="#cofepris"
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                COFEPRIS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
              <Link
                href="#contacto"
                className="text-sm text-white/80 hover:text-white transition-colors relative group"
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="hidden sm:inline-flex text-white/80 hover:text-white hover:bg-white/10"
                  >
                    Documentación
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-card border-border">
                  <DropdownMenuItem asChild>
                    <a
                      href="https://github.com/driano7/Xoco-POS"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      Documentación POS
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="https://github.com/driano7/XocoCafe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      Documentación App Cliente
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" className="bg-white hover:bg-white/90 text-[#5d4037] font-semibold shadow-lg" asChild>
                <a
                  href="https://wa.me/525512291607?text=Hola%2C%20me%20interesa%20agendar%20una%20demo%20de%20Xoco%20Suite"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Agenda demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
