"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

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
