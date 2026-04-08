"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import { Card } from "@/agency/components/ui/card"
import { TypingText } from "@/agency/components/ui/typing-text"
import { Shield, Lock, Key, Database, Eye, FileCheck } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

/* Sección de seguridad reusable para comunicar controles; no sustituye auditoría ni validación legal. */
const securityFeatures = [
  {
    icon: Lock,
    title: "Cifrado AES-GCM",
    description: "Todos los datos de clientes se cifran con AES-GCM de 256 bits",
  },
  {
    icon: Key,
    title: "Llaves derivadas",
    description: "Descifrado controlado por llaves derivadas de credenciales del staff",
  },
  {
    icon: Database,
    title: "Almacenamiento seguro",
    description: "Datos almacenados con múltiples capas de protección",
  },
  {
    icon: Eye,
    title: "Control de acceso",
    description: "Permisos granulares por rol de usuario",
  },
  {
    icon: FileCheck,
    title: "Políticas GDPR",
    description: "Retención, limpieza de inactivos y derechos del usuario",
  },
  {
    icon: Shield,
    title: "Auditoría completa",
    description: "Registro de todas las operaciones para trazabilidad",
  },
]

export function Security() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  return (
    <section id="seguridad" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 mb-6">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Seguridad empresarial</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              <TypingText text="Seguridad, cifrado y privacidad de grado empresarial" />
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              Los datos de tus clientes están protegidos con cifrado AES-GCM y gestionados conforme a políticas tipo
              GDPR. Cumplimiento y seguridad desde el diseño.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">🔐</span>
                <TypingText text="¿Qué es AES-GCM? (explicación simple)" />
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Imagina que tienes una caja fuerte súper especial que convierte toda la información de tus clientes en
                un código secreto que nadie puede leer (eso es el <strong>cifrado AES</strong>). Además, esta caja tiene
                un sello mágico que detecta si alguien intentó cambiar algo dentro (eso es el <strong>GCM</strong>
                ). Solo las personas con la llave correcta pueden abrir la caja y ver la información real. Así
                protegemos los datos sensibles de tus clientes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-4">
                <TypingText text="Flujo de seguridad" />
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                    1
                  </div>
                  <span className="text-sm text-foreground">Datos del cliente ingresados</span>
                </div>
                <div className="ml-3 w-px h-3 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                    2
                  </div>
                  <span className="text-sm text-foreground">Cifrado AES-GCM aplicado</span>
                </div>
                <div className="ml-3 w-px h-3 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold text-xs">
                    3
                  </div>
                  <span className="text-sm text-foreground">Almacenamiento seguro</span>
                </div>
                <div className="ml-3 w-px h-3 bg-border" />
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center text-success font-semibold text-xs">
                    4
                  </div>
                  <span className="text-sm text-foreground">Descifrado controlado</span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {securityFeatures.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow h-full bg-card/80 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-success" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">
                        <TypingText text={feature.title} />
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
            <div className="grid grid-cols-3 gap-3">
              {securityFeatures.slice(3, 6).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: (index + 3) * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <Card className="p-4 hover:shadow-lg transition-shadow h-full bg-card/80 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-success" />
                      </div>
                      <h3 className="font-semibold text-sm text-foreground mb-1">
                        <TypingText text={feature.title} />
                      </h3>
                      <p className="text-xs text-muted-foreground leading-tight">{feature.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
