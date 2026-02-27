"use client"

import { cloneElement, createContext, useContext, useEffect, useState, type ReactElement, type ReactNode } from "react"

const SheetContext = createContext<{
  open: boolean
  setOpen: (open: boolean) => void
} | null>(null)

export function Sheet({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  return <SheetContext.Provider value={{ open, setOpen }}>{children}</SheetContext.Provider>
}

export function SheetTrigger({ children }: { children: ReactElement }) {
  const context = useContext(SheetContext)
  if (!context) return null

  return cloneElement(children, {
    ...children.props,
    onClick(event: React.MouseEvent) {
      context.setOpen(true)
      children.props.onClick?.(event)
    },
  })
}

export function SheetContent({
  children,
  side = "right",
  className = "",
}: {
  children: ReactNode
  side?: "left" | "right"
  className?: string
}) {
  const context = useContext(SheetContext)

  useEffect(() => {
    if (!context?.open || typeof document === "undefined") return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [context?.open])

  if (!context?.open) return null

  const positionClass = side === "left" ? "left-0" : "right-0"

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={() => context.setOpen(false)} />
      <div
        className={`absolute inset-y-0 ${positionClass} z-10 w-full max-w-xs overflow-y-auto bg-white shadow-2xl transition duration-200 ${className}`}
      >
        {children}
      </div>
    </div>
  )
}

export function useSheet() {
  const context = useContext(SheetContext)
  if (!context) {
    throw new Error("useSheet must be used within a Sheet")
  }
  return context
}
