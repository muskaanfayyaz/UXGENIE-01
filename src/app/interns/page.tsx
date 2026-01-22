'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function InternWelcomePage() {
  const cards = Array.from({ length: 30 }, (_, i) => `/interns/${i + 1}.png`)

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-50 text-gray-800"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4e3ff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* Title */}
      <div className="text-center mb-16">
        <h1
          className="text-5xl md:text-7xl font-bold text-gray-900"
          style={{ fontFamily: 'Parabole, sans-serif' }}
        >
          Welcome to <span className="text-[#00509E]">Team UXGENIE</span>
        </h1>
        <p className="text-lg text-gray-600 mt-2">Meet our talented interns from around the globe.</p>
      </div>


      {/* Infinite scroll container */}
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[...cards, ...cards].map((src, index) => (
            <motion.div
              key={index}
              className="inline-block mx-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 bg-white"
              style={{
                width: 280,
                height: 340,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 10px 30px -5px rgba(0, 80, 158, 0.3)',
                y: -5,
              }}
            >
              <Image
                src={src}
                alt={`Internee ${index + 1}`}
                width={280}
                height={340}
                className="object-cover w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

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
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  )
}
