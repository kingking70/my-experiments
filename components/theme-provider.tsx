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

const HOLD_DURATION_MS = 3000
const HOLD_MOVE_TOLERANCE_PX = 10

function ThemeToggleGestures() {
  const { resolvedTheme, setTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.defaultPrevented || event.repeat) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.altKey) {
        return
      }

      if (event.key.toLowerCase() !== "d") {
        return
      }

      if (isTypingTarget(event.target)) {
        return
      }

      toggleTheme()
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [toggleTheme])

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null
    let origin: { x: number; y: number } | null = null

    function cancelHold() {
      if (timer !== null) {
        clearTimeout(timer)
        timer = null
      }

      origin = null
    }

    function onTouchStart(event: TouchEvent) {
      cancelHold()

      if (event.touches.length !== 1) {
        return
      }

      const touch = event.touches[0]

      if (isTypingTarget(event.target) || isInteractiveTarget(event.target)) {
        return
      }

      origin = { x: touch.clientX, y: touch.clientY }

      timer = setTimeout(() => {
        timer = null
        origin = null
        navigator.vibrate?.(20)
        toggleTheme()
      }, HOLD_DURATION_MS)
    }

    function onTouchMove(event: TouchEvent) {
      if (origin === null) {
        return
      }

      const touch = event.touches[0]

      if (
        Math.abs(touch.clientX - origin.x) > HOLD_MOVE_TOLERANCE_PX ||
        Math.abs(touch.clientY - origin.y) > HOLD_MOVE_TOLERANCE_PX
      ) {
        cancelHold()
      }
    }

    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: true })
    window.addEventListener("touchend", cancelHold)
    window.addEventListener("touchcancel", cancelHold)

    return () => {
      cancelHold()
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", cancelHold)
      window.removeEventListener("touchcancel", cancelHold)
    }
  }, [toggleTheme])

  return null
}

export { ThemeProvider }
