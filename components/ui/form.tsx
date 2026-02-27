"use client"

import * as React from "react"
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldError,
  type FieldValues,
  type Path,
} from "react-hook-form"
import { cn } from "@/lib/utils"

const FormFieldContext = React.createContext<{ error?: FieldError } | null>(null)

type FormProps = React.PropsWithChildren<Record<string, unknown>>

export function Form({ children }: FormProps) {
  return <>{children}</>
}

export function FormItem({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {children}
    </div>
  )
}

export function FormLabel({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("block text-sm font-medium text-gray-700", className)} {...props} />
}

export function FormControl({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      {children}
    </div>
  )
}

interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> {
  control: Control<TFieldValues>
  name: TName
  render: ({ field }: { field: ControllerRenderProps<TFieldValues, TName> }) => React.ReactNode
}

export function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>({ control, name, render }: FormFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormFieldContext.Provider value={{ error: fieldState.error }}>
          {render({ field })}
        </FormFieldContext.Provider>
      )}
    />
  )
}

export function FormMessage({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const context = React.useContext(FormFieldContext)
  const message = children ?? context?.error?.message

  if (!message) {
    return null
  }

  return (
    <p className={cn("text-sm text-red-600", className)} {...props}>
      {message}
    </p>
  )
}
