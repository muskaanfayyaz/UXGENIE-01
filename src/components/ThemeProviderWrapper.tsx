'use client'

import { ThemeProvider } from 'next-themes'

export function ThemeProviderWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"   // 🌤️ Light mode default
      enableSystem={false}   // Ignore OS theme
    >
      {children}
    </ThemeProvider>
  )
}
