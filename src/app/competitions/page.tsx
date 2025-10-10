'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Hourglass, Construction, Sparkles } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function CompetitionPage() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <section
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden transition-colors duration-700 
        ${isDark ? 'bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] text-white' : 'bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5] text-black'}`}
    >
      {/* Particle & Glow Only for Dark Theme */}
      {isDark && (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
          <div className="absolute -top-28 -left-28 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-[#00509E]/10 blur-[100px] sm:blur-[120px] rounded-full z-0" />
          <div className="absolute -bottom-28 -right-28 w-[280px] sm:w-[350px] h-[280px] sm:h-[350px] bg-[#00509E]/15 blur-[110px] sm:blur-[140px] rounded-full z-0" />
        </>
      )}

      <div className="relative z-10 max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20 lg:mb-24"
        >
          <div className="relative inline-block">
            <div
              className={`absolute -inset-6 rounded-full blur-3xl transition-all duration-500 
                ${isDark ? 'bg-[#00509E]/20' : 'bg-[#00509E]/10'}`}
            />
            <h1
              className={`relative font-bold leading-snug transition-colors duration-500 
                ${isDark ? 'text-white' : 'text-[#0a0a0a]'}`}
              style={{
                fontFamily: 'Parabole, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)',
              }}
            >
              ⚡ UXGenie Competitions
            </h1>
          </div>

          <p
            className={`mt-6 max-w-3xl mx-auto px-2 transition-colors duration-500 
              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.25rem)' }}
          >
            Exciting challenges are on the way! Our competition platform is under development
            to give you real-world tech problems, recognition, and rewards.
          </p>
        </motion.div>

        {/* Placeholder Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8 max-w-7xl mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {[
            { title: 'Hackathons', icon: Hourglass, desc: 'Coming Soon...' },
            { title: 'Design Challenges', icon: Sparkles, desc: 'Work in Progress' },
            { title: 'Coding Competitions', icon: Construction, desc: 'Launching Soon' },
          ].map(({ title, desc, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
              <Card
                className={`h-full flex flex-col justify-center items-center rounded-2xl backdrop-blur-md 
                  transition-all duration-300 shadow-md hover:shadow-2xl border 
                  ${
                    isDark
                      ? 'bg-[#0f172a]/60 border-[#00509E]/40 hover:border-[#00509E]'
                      : 'bg-white border-gray-200 hover:border-[#00509E]/50'
                  }`}
              >
                <CardContent className="p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center gap-6 flex-grow">
                  <Icon
                    className={`w-10 h-10 sm:w-12 sm:h-12 animate-pulse transition-colors duration-500 
                      ${isDark ? 'text-[#00509E]' : 'text-[#00509E]'}`}
                  />
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold 
                      ${isDark ? 'text-white' : 'text-gray-800'}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base lg:text-lg italic 
                      ${isDark ? 'text-gray-300' : 'text-gray-500'}`}
                  >
                    {desc}
                  </p>
                  <div
                    className={`h-3 w-28 sm:w-32 lg:w-40 rounded-full overflow-hidden 
                      ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`}
                  >
                    <motion.div
                      className="h-full bg-[#00509E]"
                      animate={{ width: ['0%', '70%', '0%'] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className={`mt-14 sm:mt-20 lg:mt-28 text-sm sm:text-base lg:text-lg transition-colors duration-500 
            ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          🚀 Stay tuned — our competition portal will launch soon.
        </motion.div>
      </div>
    </section>
  )
}
