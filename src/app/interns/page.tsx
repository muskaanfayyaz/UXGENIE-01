'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function InternWelcomePage() {
  const { resolvedTheme } = useTheme()
  const cards = Array.from({ length: 30 }, (_, i) => `/interns/${i + 1}.png`)

  return (
    <section
      className={`relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden transition-colors duration-500 ${
        resolvedTheme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black'
      }`}
    >
      {/* Title */}
      <h1
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
        style={{ fontFamily: 'Parabole, sans-serif' }}
      >
        Welcome to <span className="text-[#00509E]">Team UXGENIE 🚀</span>
      </h1>

      {/* Infinite scroll container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...cards, ...cards].map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className={`inline-block mx-4 rounded-3xl overflow-hidden shadow-xl hover:shadow-[#00509E]/50 transition-all duration-300 ${
                resolvedTheme === 'dark' ? 'bg-[#111]' : 'bg-[#f8f8f8]'
              }`}
              style={{
                width: 260,
                height: 320,
              }}
            >
              <Image
                src={src}
                alt={`Internee ${index + 1}`}
                width={260}
                height={320}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background glow */}
      <motion.div
        className={`absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[150px] opacity-40 z-0 ${
          resolvedTheme === 'dark' ? 'bg-[#00509E]/40' : 'bg-[#00509E]/15'
        }`}
        animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* CSS Animation */}
      <style jsx global>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  )
}
