'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // ✅ Avoid hydration mismatch
  if (!mounted) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-black text-white">
        <p className="animate-pulse text-lg">Loading...</p>
      </section>
    )
  }

  return (
    <section
      className={`relative w-full py-20 md:py-28 lg:py-36 overflow-hidden transition-colors duration-500 ${
        resolvedTheme === 'dark' ? 'text-[#F0F0F0]' : 'text-gray-900'
      }`}
    >
      {/* ✅ Background video (place /hero.mp4 inside public folder) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-[1.15] contrast-[1.05]"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-black/35 z-[1]" />

      {/* ✅ Gradient overlay */}
      <div
        className={`absolute inset-0 z-[2] transition-colors duration-700 ${
          resolvedTheme === 'dark'
            ? 'bg-gradient-to-br from-black/50 via-[#0a0a23]/50 to-[#000d1a]/50'
            : 'bg-gradient-to-br from-white/80 via-[#f4f7fb]/80 to-[#e9eef5]/80'
        }`}
      />

      {/* ✅ Optional subtle particles for dark mode */}
      {resolvedTheme === 'dark' && (
        <div className="absolute inset-0 z-[3] pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
      )}

      {/* ✅ Glow effects */}
      <div
        className={`absolute -top-40 -left-40 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full blur-[150px] z-[3] ${
          resolvedTheme === 'dark' ? 'bg-[#00509E]/25' : 'bg-[#00509E]/10'
        }`}
      />
      <div
        className={`absolute -bottom-40 -right-40 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] rounded-full blur-[200px] z-[3] ${
          resolvedTheme === 'dark' ? 'bg-[#1c436a]/30' : 'bg-[#00509E]/10'
        }`}
      />

      {/* ✅ Main content */}
      <div className="relative z-[4] max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`mb-5 sm:mb-6 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-[0.7rem] sm:text-sm md:text-base tracking-wide uppercase font-medium backdrop-blur-md ${
            resolvedTheme === 'dark'
              ? 'border border-white text-white bg-white/10'
              : 'border border-[#00509E]/40 text-[#00509E] bg-[#00509E]/10'
          }`}
        >
          The Future of Tech Leaders Starts Here
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight max-w-4xl px-2"
          style={{ fontFamily: 'Parabole, sans-serif' }}
        >
          <span
            className={resolvedTheme === 'dark' ? 'text-[#F0F0F0]' : 'text-gray-900'}
          >
            UXGENIE
          </span>{' '}
          — <span className="text-[#00509E]">Empowering Innovation</span>
          <br className="hidden sm:block" />
          Through AI, Internships & Competitions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl px-2 ${
            resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <Typewriter
            words={[
              'Hands-on Internships 🚀',
              'Thrilling IT Competitions 🏆',
              'Strategic Partnerships 🤝',
              'Shaping the Next-Gen Tech Leaders 🌍',
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={60}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={`mt-4 sm:mt-6 max-w-xs sm:max-w-xl md:max-w-3xl text-sm sm:text-base md:text-lg leading-relaxed px-2 ${
            resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}
        >
          We bridge the gap between{' '}
          <span className="text-[#00509E] font-medium">ambition</span> and{' '}
          <span className="text-[#00509E] font-medium">opportunity</span>. From
          industry-driven internships to competitions that spark creativity,
          UXGenie creates real-world pathways for aspiring professionals to
          innovate, grow, and lead.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center"
        >
          <Button className="bg-[#00509E] hover:bg-[#004080] text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-[#00509E]/90 hover:scale-105 rounded-xl sm:rounded-2xl w-full sm:w-auto">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeolmCu2hyteI8tpjwPNoVLFaMh2hS_8BZF-HTJTS8JheAUAQ/viewform?usp=header">
              Apply Now
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-[#00509E] text-[#00509E] hover:bg-[#00509E]/10 hover:border-[#00509E] px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-[#00509E]/90 hover:scale-105 rounded-xl sm:rounded-2xl w-full sm:w-auto"
          >
            <Link href="/programs">Explore Opportunities</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
