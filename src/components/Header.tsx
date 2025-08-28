'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/competitions', label: 'Competitions' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'Faq' },
]

export default function Header() {
  return (
    <header className="w-full bg-black text-[#F0F0F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={60} height={60} />
          <Link
            href="/"
            className="text-[1.5rem] font-semibold text-[#f9f6f6cb]"
            style={{ fontFamily: 'Parabole' }}
          >
            <span style={{ color: '#00509E' }}>U</span>X
            <span style={{ color: '#00509E' }}>G</span>EN
            <span style={{ color: '#00509E' }}>I</span>E
          </Link>
        </div>

        {/* Desktop Nav - Centered */}
<nav className="hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2 pr-12">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="hover:text-[#00509E] transition-colors duration-200"
    >
      {link.label}
    </Link>
  ))}
</nav>


        {/* Desktop CTA Buttons - Right Aligned */}
        <div className="hidden lg:flex gap-3">
          <Button
            asChild
            className="bg-[#00509E] hover:bg-[#1d1c6e] text-white px-5"
          >
            <Link href="/programs">Explore Opportunities</Link>
          </Button>
          <Button
          asChild
          className="border border-[#00509E] text-[#00509E] bg-transparent hover:bg-[#00509E] hover:text-white transition-all duration-200 rounded-lg px-5 shadow-sm"
          >
          <Link href="/campus-ambassador">Campus Ambassador</Link>
          </Button>

        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="text-[#F0F0F0] hover:text-[#00509E]">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#ffffff] text-[#000000] flex flex-col justify-between"
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
              {/* Mobile CTA Buttons */}
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
