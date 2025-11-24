'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    
    document.documentElement.classList.add('theme-transitioning')
    
    setTheme(newTheme)
    
    setTimeout(() => {
      document.documentElement.classList.remove('theme-transitioning')
    }, 600)
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-lg bg-primary/10 animate-pulse" />
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/80 transition-all duration-300 flex items-center justify-center group active:scale-95"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 absolute" />
      <Moon className="h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 absolute" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}