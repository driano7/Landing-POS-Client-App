"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export function Checkbox({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-gray-300 text-amber-600 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-0",
        className,
      )}
      {...props}
    />
  )
}
