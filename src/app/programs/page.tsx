'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Code2, Layers, Paintbrush, Bot, Layout, Globe } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function InternshipProgram() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <section
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden transition-colors duration-700 ${
        theme === 'dark' ? 'text-[#F0F0F0]' : 'text-gray-900'
      }`}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 z-0 transition-colors duration-700 ${
          theme === 'dark'
            ? 'bg-gradient-to-br from-[#000814] via-[#001233] to-[#000d1a]'
            : 'bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5]'
        }`}
      />

      {/* Particles (Dark only) */}
      {theme === 'dark' && (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
      )}

      {/* Glows */}
      <div
        className={`absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full blur-[140px] z-0 ${
          theme === 'dark' ? 'bg-[#00509E]/20' : 'bg-[#00509E]/10'
        }`}
      />
      <div
        className={`absolute -bottom-32 -right-32 w-[350px] h-[350px] rounded-full blur-[180px] z-0 ${
          theme === 'dark' ? 'bg-[#00509E]/30' : 'bg-[#00509E]/10'
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-wider uppercase font-medium backdrop-blur-md ${
              theme === 'dark'
                ? 'border-white text-white bg-white/10'
                : 'border-[#00509E]/40 text-[#00509E] bg-[#00509E]/10'
            }`}
          >
            📌 UXGenie Internship Program
          </span>

          <h2
            className={`mt-6 font-bold leading-snug ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
            style={{
              fontFamily: 'Parabole, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            }}
          >
            Empowering Future Tech Leaders 🚀
          </h2>

          <p
            className={`mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            A <span className="text-[#00509E] font-semibold">5-week journey</span> with real-world projects,
            mentorship, and opportunities that shape your career.
          </p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true }}
          className="grid gap-8 mb-28"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {[
            'Hands-on experience with live projects',
            'Professional mentorship & skill-building sessions',
            'Career guidance during & after internship',
            'Internship Certificate upon completion',
            'Experience & Recommendation Letters',
            'Networking with industry professionals',
          ].map((offer, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className={`p-6 rounded-2xl border shadow-lg transition-all ${
                theme === 'dark'
                  ? 'bg-[#0f172a]/60 border-[#00509E]/30 hover:shadow-[#00509E]/30'
                  : 'bg-white border-[#00509E]/20 hover:shadow-[#00509E]/20'
              }`}
            >
              <CheckCircle className="w-6 h-6 text-[#00509E] mb-4" />
              <p
                className={`text-base sm:text-lg ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                {offer}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Roles Offered */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`relative font-bold leading-snug block mt-3 text-transparent bg-clip-text ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-white via-[#f8f9fa] to-[#eef1f4]'
                : 'bg-gradient-to-r from-[#003366] via-[#00509E] to-[#00509E]'
            }`}
            style={{ fontFamily: 'Parabole, sans-serif', fontSize: 'clamp(2rem, 3vw, 4rem)' }}
          >
            ⚡ Internship Roles Offered
          </h2>

          <div
            className="grid gap-8 max-w-6xl mx-auto mt-12"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {[
              { role: 'Python Developer', icon: Code2 },
              { role: 'Next.js Developer', icon: Layers },
              { role: 'Full Stack Developer', icon: Globe },
              { role: 'Frontend Developer', icon: Layout },
              { role: 'Agentic AI Developer', icon: Bot },
              { role: 'Graphic Designer', icon: Paintbrush },
            ].map(({ role, icon: Icon }, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                className={`p-6 flex flex-col items-center justify-center rounded-2xl border shadow-md transition-all ${
                  theme === 'dark'
                    ? 'bg-[#0f172a]/60 border-[#00509E]/30 hover:shadow-[#00509E]/30'
                    : 'bg-white border-[#00509E]/20 hover:shadow-[#00509E]/20'
                }`}
              >
                <Icon className="w-10 h-10 text-[#00509E]" />
                <span
                  className={`mt-3 font-medium text-center text-base sm:text-lg ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                  }`}
                >
                  {role}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#050957] via-[#00509E] to-[#050957] opacity-95 animate-gradient-x" />
          <div className="relative z-10 text-center py-12 sm:py-16 px-4 sm:px-10">
            <h2
              className="font-bold text-white mb-4"
              style={{
                fontFamily: 'Parabole, sans-serif',
                fontSize: 'clamp(1.3rem, 2.5vw, 2.5rem)',
              }}
            >
              Ready to Shape Your Future with UXGenie?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Join an elite group of learners and innovators building the next generation of tech leaders.
            </p>

            {/* Apply Now Button */}
            <Button
              className={`px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all ${
                theme === 'dark'
                  ? 'bg-[#e0edff] text-[#003366] hover:bg-[#c9dfff]'
                  : 'bg-[#e0edff] text-[#003366] hover:bg-[#c9dfff]'
              }`}
            >
              <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeolmCu2hyteI8tpjwPNoVLFaMh2hS_8BZF-HTJTS8JheAUAQ/viewform?usp=header">
                Apply Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
