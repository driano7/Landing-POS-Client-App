"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import * as React from "react"
import { cn } from "@/agency/lib/utils"

/* Input base reutilizable del sistema visual. */
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 transition focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  )
}
