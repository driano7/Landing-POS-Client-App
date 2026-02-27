"use client"

import Link from "next/link"
import { Github, Twitter, Linkedin, Send } from "lucide-react"

const productLinks = [
  { href: "#features", label: "Características" },
  { href: "#pricing", label: "Precios" },
  { href: "#product", label: "Integraciones" },
  { href: "#changelog", label: "Changelog" },
  { href: "#roadmap", label: "Roadmap" },
]

const resourceLinks = [
  { href: "https://github.com/driano7/Xoco-POS", label: "Documentación" },
  { href: "https://github.com/driano7/Xoco-POS", label: "API Reference" },
  { href: "#blog", label: "Blog" },
  { href: "#casos", label: "Casos de Estudio" },
  { href: "#ayuda", label: "Centro de Ayuda" },
]

const legalLinks = [
  { href: "#terminos", label: "Términos de Servicio" },
  { href: "#privacidad", label: "Política de Privacidad" },
  { href: "#cookies", label: "Política de Cookies" },
  { href: "#license", label: "Licencia Apache 2.0" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/driano7" },
  { icon: Twitter, href: "https://twitter.com/driano7" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/driano7" },
  { icon: Send, href: "https://t.me/driano7" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          <div className="space-y-4">
            <div>
              <span className="block text-2xl font-bold text-white">Xoco Suite</span>
            </div>
            <p className="text-sm text-gray-400">El POS con crypto que tu restaurante necesita</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 transition hover:text-orange-400"
                    aria-label="Social link"
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-sm">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-orange-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition hover:text-orange-400" target={link.href.startsWith("http") ? "_blank" : "_self"} rel={link.href.startsWith("http") ? "noreferrer" : ""}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm mb-6">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition hover:text-orange-400">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <form className="space-y-2" onSubmit={(event) => event.preventDefault()}>
              <div className="flex w-full items-center gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 rounded-lg border border-gray-800 bg-gray-900 px-4 py-2 text-sm text-gray-200 focus:border-orange-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="rounded-lg border border-orange-400 bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
                >
                  Suscribirse
                </button>
              </div>
              <p className="text-xs text-gray-500">Recibe updates sobre nuevas features</p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col gap-4 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 Xoco Suite. Made with ❤️ in CDMX</p>
            <p>
              Desarrollado por{" "}
              <Link
                href="https://studio--donovan-riao-portfolio.us-central1.hosted.app/"
                target="_blank"
                rel="noreferrer"
                className="text-orange-400 hover:underline"
              >
                Donovan Riaño
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
