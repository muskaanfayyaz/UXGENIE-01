'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'Faq' },
]

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-500 shadow-sm ${
        theme === 'dark'
          ? 'bg-black text-[#F0F0F0]'
          : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={theme === 'dark' ? '/logo.png' : '/logo1.png'}
            alt="logo"
            width={55}
            height={55}
            priority
          />
          <Link
            href="/"
            className="text-[1.5rem] font-semibold tracking-tight"
            style={{ fontFamily: 'Parabole' }}
          >
            <span className="text-[#00509E]">U</span>X
            <span className="text-[#00509E]">G</span>EN
            <span className="text-[#00509E]">I</span>E
          </Link>
        </div>

        {/* Desktop Nav - moved closer to logo */}
        <nav className="hidden xl:flex gap-6 absolute left-[41%] transform -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-[#00509E] transition-colors duration-200 ${
                theme === 'dark' ? 'text-[#F0F0F0]' : 'text-gray-800'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden xl:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-[#00509E] hover:bg-[#00509E] hover:text-white transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <Button
            asChild
            className="bg-[#00509E] hover:bg-[#1c436a] text-white px-5"
          >
            <Link href="/programs">Explore Opportunities</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border border-[#00509E] text-[#00509E] hover:bg-[#00509E] hover:text-white px-5"
          >
            <Link href="/campus-ambassador">Campus Ambassador</Link>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden flex items-center gap-2">
          {/* Theme Toggle (Mobile) */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full border border-[#00509E] hover:bg-[#00509E] hover:text-white transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`flex flex-col justify-between ${
                theme === 'dark'
                  ? 'bg-black text-white'
                  : 'bg-white text-black border-l border-gray-300'
              }`}
            >
              <div className="mt-10">
                <nav className="flex flex-col gap-4 mt-8 ml-6 font-semibold">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg hover:text-[#00509E] transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-8 mb-4 flex flex-col gap-3 px-6">
                <Button
                  asChild
                  className="bg-[#00509E] hover:bg-[#1c436a] text-white w-full"
                >
                  <Link href="/programs">Explore Opportunities</Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-[#00509E] border border-[#00509E] hover:bg-gray-100 w-full"
                >
                  <Link href="/campus-ambassador">Campus Ambassador</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
