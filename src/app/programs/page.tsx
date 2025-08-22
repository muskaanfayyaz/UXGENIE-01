'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle, Code2, Layers, Paintbrush, Database, Layout, Globe } from 'lucide-react'

export default function InternshipProgram() {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] z-0" />

      {/* Particles + Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-[#00509E]/20 blur-[140px] rounded-full z-0" />
      <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#00509E]/30 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 text-[#F0F0F0]">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-1.5 rounded-full border border-[#00509E]/40 text-xs sm:text-sm tracking-wider uppercase text-[#00509E] font-medium bg-[#00509E]/10 backdrop-blur-md">
            📌 UXGenie Internship Program
          </span>
          <h2
            className="mt-6 relative font-bold leading-snug text-white"
            style={{ 
              fontFamily: 'Parabole, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 4.5rem)'
            }}
          >
            Empowering Future Tech Leaders 🚀
          </h2>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            A <span className="text-[#00509E] font-semibold">5-week journey</span> with real-world projects, mentorship, and opportunities that shape your career.
          </p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true }}
          className="grid gap-8 mb-28"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {[
            "Hands-on experience with live projects",
            "Professional mentorship & skill-building sessions",
            "Career guidance during & after internship",
            "Internship Certificate upon completion",
            "Experience & Recommendation Letters",
            "Networking with industry professionals"
          ].map((offer, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="p-6 rounded-2xl bg-[#0f172a]/60 border border-[#00509E]/30 shadow-lg hover:shadow-[#00509E]/30 transition-all"
            >
              <CheckCircle className="w-6 h-6 text-[#00509E] mb-4" />
              <p className="text-gray-200 text-base sm:text-lg">{offer}</p>
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
            className="text-white relative font-bold leading-snug block mt-3 text-transparent bg-clip-text bg-gradient-to-r "
            style={{ fontFamily: 'Parabole, sans-serif', fontSize: 'clamp(2rem, 3vw, 4rem)' }}
          >
            ⚡ Internship Roles Offered
          </h2>

          <div className="grid gap-8 max-w-6xl mx-auto mt-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              { role: "Python Developer", icon: Code2 },
              { role: "Next.js Developer", icon: Layers },
              { role: "Full Stack Developer", icon: Globe },
              { role: "Frontend Developer", icon: Layout },
              { role: "Backend Developer", icon: Database },
              { role: "Graphic Designer", icon: Paintbrush },
            ].map(({ role, icon: Icon }, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 220, damping: 14 }}
                className="p-6 flex flex-col items-center justify-center rounded-2xl bg-[#0f172a]/60 border border-[#00509E]/30 shadow-md hover:shadow-[#00509E]/30 transition-all"
              >
                <Icon className="w-10 h-10 text-[#00509E]" />
                <span className="mt-3 text-gray-200 font-medium text-center text-base sm:text-lg">
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
            <h2 className="font-bold text-white mb-4" style={{ fontFamily: 'Parabole, sans-serif', fontSize: 'clamp(1.3rem, 2.5vw, 2.5rem)' }}>
              Ready to Shape Your Future with UXGenie?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
              Join an elite group of learners and innovators building the next generation of tech leaders.
            </p>
            <Button className="bg-[#00509E] hover:bg-[#004080] px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all">
              <Link href='https://docs.google.com/forms/d/e/1FAIpQLSeolmCu2hyteI8tpjwPNoVLFaMh2hS_8BZF-HTJTS8JheAUAQ/viewform?usp=header'>
                Apply Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
