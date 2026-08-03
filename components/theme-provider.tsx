"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <ThemeToggleGestures />
      {children}
    </NextThemesProvider>
  )
}

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.tagName === "SELECT"
  )
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return Boolean(
    target.closest("a, button, input, textarea, select, [role='button']"),
  )
}

const REQUIRED_CLICKS = 3
const CLICK_INTERVAL_MS = 500

function ThemeToggleGestures() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  React.useEffect(() => {
    let count = 0
    let timer: ReturnType<typeof setTimeout> | null = null

    function reset() {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }

      count = 0
    }

    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) {
        return
      }

      if (isTypingTarget(event.target) || isInteractiveTarget(event.target)) {
        reset()
        return
      }

      count += 1

      if (count >= REQUIRED_CLICKS) {
        reset()
        navigator.vibrate?.(20)
        toggleTheme()
        return
      }

      if (timer !== null) {
        clearTimeout(timer)
      }

      timer = setTimeout(reset, CLICK_INTERVAL_MS)
    }

    window.addEventListener("click", onClick)

    return () => {
      reset()
      window.removeEventListener("click", onClick)
    }
  }, [toggleTheme])

  return null
}

export { ThemeProvider }
