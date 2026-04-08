/*
 * Integración de tercero. Este archivo está sujeto a la licencia y términos originales del proveedor.
 * No concede derechos sobre la marca ni sobre el software del proveedor.
 */
import type { ComponentProps } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/agency/lib/utils"

import { Button } from "@/agency/components/ui/button"

type WhatsAppCTAButtonProps = {
  href: string
  label: string
  className?: string
  size?: ComponentProps<typeof Button>["size"]
  showArrow?: boolean
}

type WhatsAppIconButtonProps = {
  href: string
  className?: string
  ariaLabel?: string
}

const whatsappGradientClass =
  "group rounded-xl border border-[#8d6e63]/40 bg-gradient-to-r from-[#5c3025] via-[#7d4a30] to-[#b46f3c] text-white shadow-lg shadow-[#7d4a30]/35 transition-all hover:-translate-y-0.5 hover:from-[#6a3a2b] hover:via-[#8b5638] hover:to-[#c6854f] dark:border-[#1f8f52] dark:from-[#128C7E] dark:via-[#25D366] dark:to-[#1db954] dark:text-white dark:shadow-[#0d1626]/45"

/* Handoff externo a WhatsApp: este componente solo abre un deep link; no hay backend propio detrás. */
function WhatsAppThemeLogo({ className }: { className?: string }) {
  return (
    <>
      <img
        src="/whatsapp%20claro.png"
        alt=""
        aria-hidden="true"
        className={cn("h-3.5 w-3.5 object-contain dark:hidden", className)}
      />
      <img
        src="/whatsapp%20oscuro.png"
        alt=""
        aria-hidden="true"
        className={cn("hidden h-3.5 w-3.5 object-contain dark:block dark:[filter:brightness(0)_invert(1)]", className)}
      />
    </>
  )
}

export function WhatsAppCTAButton({
  href,
  label,
  className,
  size = "default",
  showArrow = false,
}: WhatsAppCTAButtonProps) {
  return (
    <Button asChild size={size} className={cn(whatsappGradientClass, className)}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <span className="inline-flex size-5 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30 dark:bg-white/30 dark:group-hover:bg-white/40">
          <WhatsAppThemeLogo />
        </span>
        <span>{label}</span>
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </a>
    </Button>
  )
}

export function WhatsAppIconButton({
  href,
  className,
  ariaLabel = "WhatsApp",
}: WhatsAppIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#8d6e63]/40 bg-gradient-to-r from-[#5c3025] via-[#7d4a30] to-[#b46f3c] text-white shadow-md shadow-[#7d4a30]/35 transition-all hover:-translate-y-0.5 hover:from-[#6a3a2b] hover:via-[#8b5638] hover:to-[#c6854f] dark:border-[#1f8f52] dark:from-[#128C7E] dark:via-[#25D366] dark:to-[#1db954] dark:text-white dark:shadow-[#0d1626]/45",
        className,
      )}
    >
      <img src="/whatsapp%20claro.png" alt="" aria-hidden="true" className="h-5 w-5 object-contain dark:hidden" />
      <img
        src="/whatsapp%20oscuro.png"
        alt=""
        aria-hidden="true"
        className="hidden h-5 w-5 object-contain dark:block dark:[filter:brightness(0)_invert(1)]"
      />
    </a>
  )
}
