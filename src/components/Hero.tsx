'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="relative w-full text-[#F0F0F0] py-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] z-0" />

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />

      {/* Content Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-32 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-20">
        
        {/* Text Content (second on mobile, first on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1
            className="text-2xl sm:text-4xl md:text-[2.4rem] lg:text-[2.7rem] xl:text-6xl font-semibold leading-tight"
            style={{ fontFamily: 'Parabole, sans-serif' }}
          >
            Let <span className="text-[#00509E]">AI Fix Your UX</span> — While Users Browse
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            <span className="text-[#00509E] font-medium flex flex-col lg:flex-row items-center gap-2">
              <Typewriter
                words={['No more static UX — AI watches, learns & improves.']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={2000}
              />
            </span>
          </p>

          <p className="mt-4 text-gray-400 max-w-lg text-sm sm:text-base md:text-lg mx-auto lg:mx-0">
            UXGenie’s AI agent monitors user behavior — clicks, scrolls, rage exits — and deploys real-time layout improvements using LLM logic. Fully automated. No developer needed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
            <Button className="bg-[#00509E] hover:bg-[#1c436a] w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-[#00509E]/50 transform hover:scale-105">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-[#00509E] text-[#00509E] hover:border-[#1c436a] hover:text-[#1c436a] w-full sm:w-auto transition-all duration-300 shadow-lg hover:shadow-[#00509E]/50 transform hover:scale-105"
            >
              See Features
            </Button>
          </div>
        </motion.div>

        {/* Image (first on mobile, second on desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <Image
            src="/hero3.png"
            alt="UXGenie AI working"
            width={600}
            height={600}
            className="w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  )
}
