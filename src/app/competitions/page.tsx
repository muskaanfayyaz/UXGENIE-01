'use client'

import { motion } from 'framer-motion'
// Removed Card, CardContent imports as they are replaced by div for direct styling
import { Hourglass, Construction, Sparkles } from 'lucide-react'
// Removed useTheme import
// Removed useEffect, useState imports as they are no longer needed

export default function CompetitionPage() {
  // Removed const { theme } = useTheme()
  // Removed mounted state and useEffect
  const isDark = false // Force light theme

  return (
    <section
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-36 xl:py-44 overflow-hidden transition-colors duration-700 bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5] text-black`} // Forced light theme
    >
      {/* Particle & Glow Only for Dark Theme - now removed */}
      
      <div className="relative z-10 max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16 text-center">
        {/* Title Section - Styled like Programs Page */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span
            className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-wider uppercase font-medium backdrop-blur-md border-[#00509E]/40 text-[#00509E] bg-[#00509E]/10`} // Forced light theme badge
          >
            🏆 UXGenie Competitions
          </span>

          <h1
            className={`mt-6 font-bold leading-snug text-gray-900`} // Forced light theme text
            style={{
              fontFamily: 'Parabole, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            }}
          >
            Test Your Skills, Win Big 🚀
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-600`} // Forced light theme text
          >
            Exciting challenges are on the way! Our competition platform is under development to bring you real-world tech problems, recognition, and amazing rewards.
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
              <div // Replaced Card with div for more direct styling
                className={`h-full flex flex-col justify-center items-center rounded-2xl backdrop-blur-md 
                  transition-all duration-300 shadow-md hover:shadow-2xl border bg-white border-gray-200 hover:border-[#00509E]/50`} // Forced light theme card
              >
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center gap-6 flex-grow"> {/* Replaced CardContent */}
                  <Icon
                    className={`w-10 h-10 sm:w-12 sm:h-12 animate-pulse transition-colors duration-500 text-[#00509E]`}
                  />
                  <h3
                    className={`text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800`} // Forced light theme text
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base lg:text-lg italic text-gray-500`} // Forced light theme text
                  >
                    {desc}
                  </p>
                  <div
                    className={`h-3 w-28 sm:w-32 lg:w-40 rounded-full overflow-hidden bg-gray-200`} // Forced light theme progress bar background
                  >
                    <motion.div
                      className="h-full bg-[#00509E]"
                      animate={{ width: ['0%', '70%', '0%'] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className={`mt-14 sm:mt-20 lg:mt-28 text-sm sm:text-base lg:text-lg text-gray-600`} // Forced light theme text
        >
          🚀 Stay tuned — our competition portal will launch soon.
        </motion.div>
      </div>
    </section>
  )
}
