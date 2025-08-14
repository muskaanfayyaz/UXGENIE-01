'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
]

const authLinks = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Sign Up' },
]

export default function Header() {
  return (
    <header className="w-full bg-black text-[#F0F0F0] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className='flex items-center gap-0'>
        <Image src="/logo.png" alt="logo" width={60} height={60} />
        <Link href="/" className="text-[1.5rem] font-normal text-[#f9f6f6cb]">
        <span className='font-semibold' style={{ fontFamily: 'Parabole',  color: '#00509E' }}>U</span>X<span className='font-semibold' style={{ fontFamily: 'Parabole',  color: '#00509E' }}>G</span>EN<span className='font-semibold' style={{ fontFamily: 'Parabole',  color: '#00509E' }}>I</span>E
        </Link>
        </div>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
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

        {/* Desktop Auth Buttons - Right Aligned */}
        <div className="hidden lg:flex gap-3">
          {authLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant={link.label === 'Login' ? 'outline' : 'default'}
              className={link.label === 'Login' 
                ? 'border-[#00509E] text-[#00509E] hover:border-[#004f9ee3] hover:text-[#004f9ee3]' 
                : 'bg-[#00509E] hover:bg-[#004f9ee3]'}
            >
              <Link href={link.href}>
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger className="text-[#F0F0F0] hover:text-[#00509E]">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#ffffff] text-[#000000] flex flex-col justify-between">
              <div className='mt-10'>
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
              <div className="flex gap-3 mt-8 mb-4 ml-6">
                {authLinks.map((link) => (
                  <Button
                    key={link.href}
                    asChild
                    variant={link.label === 'Login' ? 'outline' : 'default'}
                    className={link.label === 'Login' 
                      ? 'border border-[#00509E] text-[#00509E] hover:border-[#1c436a] hover:text-[#1c436a]' 
                      : 'border bg-[#00509E] text-white hover:bg-[#1c436a]'}                    
                  >
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
