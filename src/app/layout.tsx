import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/footer';
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper';
import { Toaster } from 'react-hot-toast'

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
        {/* ✅ Keep only one Google Ads script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8066070674854021"
          crossOrigin="anonymous"
        />
      </head>
      <body suppressHydrationWarning>
        {/* ✅ Theme provider ensures dark/light mode sync */}
        <ThemeProviderWrapper>
          <Header />
          <main>{children}</main>
          <Toaster position="bottom-right" />
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
