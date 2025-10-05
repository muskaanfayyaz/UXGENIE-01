import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/footer'
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper'

export const metadata: Metadata = {
  title: 'UXGENIE',
  description: 'Empowering future tech leaders 🚀',
  icons: {
    icon: '/LOGO.jpg',
    shortcut: '/LOGO.jpg',
    apple: '/LOGO.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8066070674854021"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8066070674854021"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProviderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
