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
<<<<<<< HEAD
              <span className="font-bold text-lg text-foreground">Xoco Suite</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Suite tecnológica completa para restaurantes en México
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-2">
              <li>
                <MotionLink
                  href="#productos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Xoco POS
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="#productos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Métricas avanzadas
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="#productos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  App Cliente
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="#cofepris"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Panel COFEPRIS
                </MotionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="https://github.com/driano7/Xoco-POS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Documentación POS
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com/driano7/XocoCafe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Documentación Cliente
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </li>
              <li>
                <MotionLink
                  href="#seguridad"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Seguridad
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="#precios"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Precios
                </MotionLink>
              </li>
              <li>
                <MotionLink
                  href="#contacto"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  POCs
                </MotionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <div className="flex gap-4 mb-6">
              <motion.a
                href="https://wa.me/525512291607"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:donovan@criptec.io"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://t.me/driano7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/driano7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
            <motion.a
              href="https://studio--donovan-riao-portfolio.us-central1.hosted.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Studio / Portfolio
              <ExternalLink className="w-3 h-3" />
            </motion.a>
=======
              <p className="text-xs text-gray-500">Recibe updates sobre nuevas features</p>
            </form>
>>>>>>> c135cd15 (addings perplexity)
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
