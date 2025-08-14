'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function About() {
  return (
    <section className="relative w-full py-24 px-6 sm:px-12 md:px-20 lg:px-28 xl:px-40 2xl:px-80 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] text-[#F0F0F0] overflow-hidden">
      {/* Glowing background bubbles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#00509E]/20 rounded-full blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-[#009EDB]/20 rounded-full blur-2xl animate-float-medium -z-10" />

      <div className="grid lg:grid-cols-2 gap-16 2xl:gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-full 2xl:max-w-[600px]"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl mb-6 leading-snug font-semibold"
            style={{ fontFamily: 'Parabole, sans-serif' }}
          >
            <span className="text-white">About </span>
            <span className="text-[#00509E]">U</span>
            <span className="text-white">X</span>
            <span className="text-[#00509E]">G</span>
            <span className="text-white">EN</span>
            <span className="text-[#00509E]">I</span>
            <span className="text-white">E</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            UXGenie was born from a simple belief: UX shouldn’t be fixed after failure —
            it should evolve while users interact. Our AI agent adapts layouts, tracks real usage,
            and suggests improvements in real-time, saving time, money, and frustration.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/hero2.png"
            alt="AI UX Agent"
            width={700}
            height={700}
            className="rounded-xl shadow-2xl w-full max-w-[420px] sm:max-w-[500px] md:max-w-[560px] xl:max-w-[620px] 2xl:max-w-[700px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
