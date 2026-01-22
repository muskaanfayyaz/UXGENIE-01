'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react' // Removed Moon, Sun icons

// Nav links were here
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'Faq' },
]

export default function Header() {
  // Removed useTheme, useState(mounted), useEffect(mounted)

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-colors duration-500 shadow-sm bg-black text-[#F0F0F0]`} // Hardcoded dark theme classes
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={'/logo.png'} // Hardcoded dark logo
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
              className={`hover:text-[#00509E] transition-colors duration-200 text-[#F0F0F0]`} // Hardcoded dark theme text color
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="hidden xl:flex items-center gap-4">
          {/* Theme Toggle Button - REMOVED */}

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
          {/* Theme Toggle (Mobile) - REMOVED */}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className="p-2 rounded-md hover:bg-gray-800"> {/* Adjusted hover background */}
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className={`flex flex-col justify-between bg-black text-white`} // Hardcoded dark theme classes
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