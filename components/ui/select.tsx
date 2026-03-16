"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type SelectContextType = {
  open: boolean
  value: string
  onValueChange: (value: string) => void
  toggle: () => void
  close: () => void
}

const SelectContext = React.createContext<SelectContextType | null>(null)

function useSelectContext() {
  const context = React.useContext(SelectContext)
  if (!context) {
    throw new Error("Select components must be wrapped in a Select")
  }
  return context
}

export interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const [open, setOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!open) return
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [open])

  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  return (
    <SelectContext.Provider value={{ open, value, onValueChange, toggle, close }}>
      <div ref={containerRef} className="relative inline-flex w-full">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function SelectTrigger({ children, className, ...props }: SelectTriggerProps) {
  const { toggle } = useSelectContext()
  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault()
        toggle()
      }}
      className={cn(
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-left text-sm font-medium text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export interface SelectValueProps {
  placeholder?: string
  className?: string
}

export function SelectValue({ placeholder = "Selecciona", className }: SelectValueProps) {
  const { value } = useSelectContext()
  return (
    <span className={cn("block truncate text-sm", className)}>
      {value || placeholder}
    </span>
  )
}

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SelectContent({ children, className, ...props }: SelectContentProps) {
  const { open } = useSelectContext()
  if (!open) return null

  return (
    <div
      className={cn(
        "absolute left-0 top-full mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export interface SelectItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export function SelectItem({ value, children, className, ...props }: SelectItemProps) {
  const { onValueChange, close } = useSelectContext()
  return (
    <button
      type="button"
      className={cn(
        "w-full px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-gray-50",
        className,
      )}
      onClick={(event) => {
        event.preventDefault()
        onValueChange(value)
        close()
      }}
      {...props}
    >
      {children}
    </button>
  )
}
