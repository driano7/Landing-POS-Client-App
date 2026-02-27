"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type AccordionContextValue = {
  type: "single" | "multiple"
  value: string | string[] | null
  setValue: (value: string | string[] | null) => void
  collapsible: boolean
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)
const AccordionItemContext = React.createContext<{
  value: string
  isOpen: boolean
  toggle: () => void
} | null>(null)

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple"
  collapsible?: boolean
}

export function Accordion({ type = "single", collapsible = false, children, className, ...props }: AccordionProps) {
  const [value, setValue] = React.useState<string | string[] | null>(type === "multiple" ? [] : null)

  return (
    <AccordionContext.Provider value={{ type, value, setValue, collapsible }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
}

export function AccordionItem({ children, value, className, ...props }: AccordionItemProps) {
  const context = React.useContext(AccordionContext)
  if (!context) return null

  const isMultiple = context.type === "multiple"
  const isOpen = isMultiple
    ? Array.isArray(context.value) && context.value.includes(value)
    : context.value === value

  const toggle = () => {
    if (isMultiple) {
      const current = Array.isArray(context.value) ? [...context.value] : []
      if (isOpen) {
        context.setValue(current.filter((item) => item !== value))
      } else {
        context.setValue([...current, value])
      }
    } else {
      if (isOpen) {
        if (context.collapsible) {
          context.setValue(null)
        }
      } else {
        context.setValue(value)
      }
    }
  }

  return (
    <AccordionItemContext.Provider value={{ value, isOpen, toggle }}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  const context = React.useContext(AccordionItemContext)
  if (!context) return null

  return (
    <button type="button" onClick={context.toggle} className={cn("w-full text-left", className)} {...props}>
      {children}
    </button>
  )
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function AccordionContent({ children, className, ...props }: AccordionContentProps) {
  const context = React.useContext(AccordionItemContext)
  if (!context || !context.isOpen) return null

  return (
    <div className={cn("mt-2", className)} {...props}>
      {children}
    </div>
  )
}
