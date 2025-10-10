'use client'

import { motion, useInView } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState, useRef } from 'react'

export default function InternshipStatsPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  // Counter animation
  const Counter = ({ value }: { value: number }) => {
    const ref = useRef<HTMLSpanElement | null>(null)
    const isInView = useInView(ref, { once: true, margin: '-50px' })
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isInView) return
      let current = 1
      setCount(1)
      const duration = 1600
      const fps = 60
      const steps = Math.ceil((duration / 1000) * fps)
      const increment = Math.max(1, Math.floor((value - 1) / steps))

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          current = value
          clearInterval(timer)
        }
        setCount(Math.floor(current))
      }, 1000 / fps)

      return () => clearInterval(timer)
    }, [isInView, value])

    return (
      <span
        ref={ref}
        aria-live="polite"
        className="tabular-nums tracking-wider"
        style={{
          fontFamily: 'Parabole, sans-serif',
          fontWeight: 700,
          letterSpacing: '1px',
          textShadow:
            theme === 'dark'
              ? '0 0 20px rgba(0,150,255,0.6), 0 0 40px rgba(0,150,255,0.4)'
              : '0 0 10px rgba(0,80,158,0.3)',
        }}
      >
        {count}
      </span>
    )
  }

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden transition-colors duration-700 ${
        theme === 'dark'
          ? 'text-white bg-gradient-to-br from-[#000814] via-[#001233] to-[#000d1a]'
          : 'text-gray-900 bg-gradient-to-br from-white via-[#eef2f7] to-[#dde7f2]'
      }`}
    >
      {/* Background Glow Elements */}
      <div
        className={`absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-[160px] ${
          theme === 'dark' ? 'bg-[#00509E]/30' : 'bg-[#00509E]/10'
        }`}
      />
      <div
        className={`absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full blur-[200px] ${
          theme === 'dark' ? 'bg-[#0096FF]/20' : 'bg-[#0096FF]/10'
        }`}
      />

      {theme === 'dark' && (
        <div className="absolute inset-0 z-0 bg-[url('/particles.svg')] bg-cover opacity-15 pointer-events-none" />
      )}

      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-20 py-20">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-bold mb-8 leading-snug"
          style={{
            fontFamily: 'Parabole, sans-serif',
            fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
          }}
        >
          <span className="uppercase text-[#00509E]">UXGENIE</span> Internship Impact ✨
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`max-w-2xl mx-auto mb-16 text-lg sm:text-xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          Every number represents passion, effort, and talent.
          <span className="block mt-2 font-semibold text-[#00509E]">
            We believe in selecting the top{' '}
            <span
              className={`${
                theme === 'dark' ? 'text-white' : 'text-black'
              } transition-colors duration-500`}
            >
              1%
            </span>{' '}
            best minds.
          </span>
        </motion.p>

        {/* Stats Section */}
        <div className="grid gap-10 sm:gap-14 md:gap-20 grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto">
          {[{ label: 'Applications Received', value: 500 },
            { label: 'Shortlisted', value: 200 },
            { label: 'Selected', value: 30 }].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.25, duration: 0.7, type: 'spring' }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12 }}
                className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background: `radial-gradient(circle at 30% 30%, #0066CC 0%, #003366 70%, #001122 100%)`,
                  boxShadow:
                    theme === 'dark'
                      ? 'inset 0 0 40px rgba(0,100,200,0.5), inset 0 0 80px rgba(255,255,255,0.15), 0 0 25px rgba(0,100,200,0.4)'
                      : 'inset 0 0 30px rgba(0,50,100,0.3), 0 0 15px rgba(0,50,100,0.25)',
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 70%)',
                    mixBlendMode: 'soft-light',
                  }}
                />
                <motion.span
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                  className="relative text-5xl sm:text-6xl text-white"
                >
                  <Counter value={stat.value} />
                </motion.span>
              </motion.div>

              <p
                className={`mt-6 font-medium text-lg sm:text-xl ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto my-20 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#00509E] to-transparent"
        />

        {/* Quote */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          viewport={{ once: true }}
          className={`font-semibold text-2xl sm:text-3xl leading-relaxed ${
            theme === 'dark'
              ? 'text-white'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-[#003366] via-[#00509E] to-[#0077FF]'
          }`}
        >
          “At UXGENIE, we don’t just hire interns —
          <br className="hidden sm:block" /> we shape the innovators of tomorrow.”
        </motion.h2>
      </div>
    </section>
  )
}
