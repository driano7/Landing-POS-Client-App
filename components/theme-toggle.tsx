"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "./theme-provider"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    const nextTheme = resolvedTheme === "light" ? "dark" : "light"
    setTheme(nextTheme)
    try {
      localStorage.setItem("xoco-theme-manual", "1")
    } catch {
      // Ignore storage write errors (private mode, blocked storage, etc.).
    }
  }

  return (
    <motion.button
      onClick={handleToggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm bg-white/20 border border-white/30 hover:border-white/50 transition-colors"
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-5 h-5 text-amber-500" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-5 h-5 text-blue-300" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
