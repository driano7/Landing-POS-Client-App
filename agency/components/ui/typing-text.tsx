"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import { useEffect, useRef, useState } from "react"

import { cn } from "@/agency/lib/utils"

/* Animación reusable de texto mecanografiado con respetos a `prefers-reduced-motion`. */
type TypingTextProps = {
  text: string
  className?: string
  speedMs?: number
  startDelayMs?: number
  once?: boolean
}

export function TypingText({
  text,
  className,
  speedMs = 24,
  startDelayMs = 0,
  once = true,
}: TypingTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [displayedText, setDisplayedText] = useState("")
  const hasAnimatedRef = useRef(false)
  const containerRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (mediaQuery.matches) {
      setDisplayedText(text)
      hasAnimatedRef.current = true
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [once, text])

  useEffect(() => {
    if (!isVisible) return
    if (once && hasAnimatedRef.current) return

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let intervalId: ReturnType<typeof setInterval> | null = null

    const startTyping = () => {
      setDisplayedText("")
      let index = 0

      intervalId = setInterval(() => {
        index += 1
        setDisplayedText(text.slice(0, index))

        if (index >= text.length) {
          if (intervalId) clearInterval(intervalId)
          hasAnimatedRef.current = true
        }
      }, speedMs)
    }

    timeoutId = setTimeout(startTyping, startDelayMs)

    return () => {
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [isVisible, once, speedMs, startDelayMs, text])

  return (
    <span ref={containerRef} className={cn("inline", className)} aria-label={text}>
      {displayedText}
    </span>
  )
}
