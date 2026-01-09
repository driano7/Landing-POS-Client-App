"use client"

import Link from "next/link"
import { MessageCircle, Linkedin, ExternalLink, Mail, Send } from "lucide-react"
import { motion } from "framer-motion"

const MotionLink = motion(Link)

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">X</span>
              </div>
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
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
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
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Xoco Suite. Desarrollado por Donovan Riaño.</p>
            <div className="flex items-center gap-6">
              <MotionLink
                href="#privacidad"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Privacidad
              </MotionLink>
              <MotionLink
                href="#terminos"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Términos
              </MotionLink>
              <MotionLink
                href="#cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Cookies
              </MotionLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
