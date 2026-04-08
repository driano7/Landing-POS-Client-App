"use client"

/*
 * Titular y titularidad: Donovan Riaño.
 * Este archivo forma parte del código reusable contractual del proyecto.
 * Cualquier cesión, sublicencia o reutilización externa requiere acuerdo escrito firmado por Donovan Riaño.
 */

import { cn } from "@/agency/lib/utils"
import { useTheme } from "next-themes"
import { CSSProperties, useEffect, useMemo, useRef, useState } from "react"

type MouseGradientProps = {
  containerClassName?: string
}

/* Tratamiento visual reutilizable y distintivo del sitio: gradient blob que sigue el puntero y adapta la paleta al tema. */
export function MouseGradient({ containerClassName }: MouseGradientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const curXRef = useRef(0)
  const curYRef = useRef(0)
  const tgXRef = useRef(0)
  const tgYRef = useRef(0)
  const frameRef = useRef<number | null>(null)
  const [isSafari, setIsSafari] = useState(false)
  const { theme, resolvedTheme } = useTheme()
  const currentTheme = resolvedTheme ?? theme ?? "dark"

  const palette = useMemo(() => {
    if (currentTheme === "dark") {
      return {
        first: "232, 220, 198",
        second: "214, 198, 169",
        third: "244, 233, 213",
        fourth: "203, 186, 156",
        fifth: "228, 214, 188",
        pointer: "232, 220, 198",
        blendingValue: "screen",
      }
    }

    return {
      first: "134, 90, 66",
      second: "198, 146, 103",
      third: "165, 116, 84",
      fourth: "120, 78, 57",
      fifth: "210, 160, 116",
      pointer: "184, 132, 92",
      blendingValue: "soft-light",
    }
  }, [currentTheme])

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
  }, [])

  useEffect(() => {
    const initializeCenter = () => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      curXRef.current = rect.width / 2
      curYRef.current = rect.height / 2
      tgXRef.current = curXRef.current
      tgYRef.current = curYRef.current
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      tgXRef.current = event.clientX - rect.left
      tgYRef.current = event.clientY - rect.top
    }

    initializeCenter()
    window.addEventListener("resize", initializeCenter)
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    return () => {
      window.removeEventListener("resize", initializeCenter)
      window.removeEventListener("pointermove", handlePointerMove)
    }
  }, [])

  useEffect(() => {
    const animateMovement = () => {
      if (!interactiveRef.current) {
        frameRef.current = window.requestAnimationFrame(animateMovement)
        return
      }

      curXRef.current = curXRef.current + (tgXRef.current - curXRef.current) * 0.12
      curYRef.current = curYRef.current + (tgYRef.current - curYRef.current) * 0.12
      interactiveRef.current.style.transform = `translate(${Math.round(curXRef.current)}px, ${Math.round(curYRef.current)}px)`
      frameRef.current = window.requestAnimationFrame(animateMovement)
    }

    frameRef.current = window.requestAnimationFrame(animateMovement)
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const vars = {
    "--first-color": palette.first,
    "--second-color": palette.second,
    "--third-color": palette.third,
    "--fourth-color": palette.fourth,
    "--fifth-color": palette.fifth,
    "--pointer-color": palette.pointer,
    "--size": "80%",
    "--blending-value": palette.blendingValue,
  } as CSSProperties

  return (
    <div
      ref={containerRef}
      style={vars}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", containerClassName)}
      aria-hidden="true"
    >
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="xoco-mouse-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={cn("h-full w-full blur-lg", isSafari ? "blur-2xl" : "[filter:url(#xoco-mouse-goo)_blur(40px)]")}>
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:center_center]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--first-color),0.9) 0, rgba(var(--first-color),0) 50%) no-repeat",
            animation: "moveVertical 30s ease infinite",
          }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--second-color),0.8) 0, rgba(var(--second-color),0) 50%) no-repeat",
            animation: "moveInCircle 20s reverse infinite",
          }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--third-color),0.8) 0, rgba(var(--third-color),0) 50%) no-repeat",
            animation: "moveInCircle 40s linear infinite",
          }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-70 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--fourth-color),0.8) 0, rgba(var(--fourth-color),0) 50%) no-repeat",
            animation: "moveHorizontal 40s ease infinite",
          }}
        />
        <div
          className="absolute left-[calc(50%-var(--size)/2)] top-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] opacity-100 [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+800px)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--fifth-color),0.8) 0, rgba(var(--fifth-color),0) 50%) no-repeat",
            animation: "moveInCircle 20s ease infinite",
          }}
        />
        <div
          ref={interactiveRef}
          className="absolute -left-1/2 -top-1/2 h-full w-full opacity-70 [mix-blend-mode:var(--blending-value)]"
          style={{
            background:
              "radial-gradient(circle at center, rgba(var(--pointer-color),0.8) 0, rgba(var(--pointer-color),0) 50%) no-repeat",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  )
}
