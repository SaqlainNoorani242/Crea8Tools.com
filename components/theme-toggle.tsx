"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="w-9 px-0">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  const toggleTheme = () => {
    const newTheme = isDark ? "light" : "dark"
    console.log("[v0] Theme toggle clicked, changing from", resolvedTheme, "to", newTheme)
    setTheme(newTheme)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-9 px-0 transition-all duration-200 hover:bg-accent"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
