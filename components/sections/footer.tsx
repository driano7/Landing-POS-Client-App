"use client"

import Link from "next/link"
import { MessageCircle, Linkedin, ExternalLink, Mail } from "lucide-react"
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
                <MessageCircle className="w-5 h-5" />
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
