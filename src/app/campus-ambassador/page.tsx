'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function CampusAmbassador() {
  const { theme } = useTheme()

  const isDark = theme === 'dark'

  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden transition-colors duration-700 
        ${isDark ? 'bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] text-white' : 'bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5] text-black'}`}
    >
      {/* Decorative Background */}
      {isDark && (
        <>
          <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
          <div className="absolute -top-40 -left-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#00509E]/20 blur-[150px] rounded-full z-0" />
          <div className="absolute -bottom-40 -right-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#1c436a]/30 blur-[200px] rounded-full z-0" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 lg:py-40">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Badge */}
          <span
            className={`px-4 py-1.5 rounded-full border text-[10px] sm:text-sm tracking-wider uppercase font-medium backdrop-blur-md whitespace-nowrap transition-all duration-500
              ${isDark
                ? 'border-white/50 text-white bg-white/10'
                : 'border-[#00509E]/40 text-[#00509E] bg-[#00509E]/10'
              }`}
          >
            📌 UXGenie Campus Ambassador Program
          </span>

          {/* Title */}
          <h1
            style={{ fontFamily: 'Parabole, sans-serif' }}
            className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight max-w-4xl mx-auto"
          >
            Be the{' '}
            <span className="text-[#00509E]">Leader</span> of Innovation
            <br />
            at Your Campus 🚀
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed transition-colors duration-500
              ${isDark ? 'text-gray-300' : 'text-gray-700'}`}
          >
            Represent <span className="text-[#00509E] font-medium">UXGenie</span>, gain real-world
            <span className="text-[#00509E] font-medium"> experience</span>, grow your
            <span className="text-[#00509E] font-medium"> network</span>, and unlock exclusive
            <span className="text-[#00509E] font-medium"> rewards & opportunities</span>.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSeBiKpvw7Rs3aA7sUzB2x9vW0KuPI1FlikIOm6cYnylp9MFHQ/viewform?usp=header"
              target="_blank"
            >
              <Button
                className="bg-gradient-to-r from-[#00509E] to-[#0074D9] hover:from-[#004080] hover:to-[#00509E]
                px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all text-white"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                variant="outline"
                className={`px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all
                  ${isDark
                    ? 'border-white text-white hover:bg-white/10'
                    : 'border-[#00509E] text-[#00509E] hover:bg-[#00509E]/10'
                  }`}
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            'Hands-on experience in marketing & promotions',
            'Professional mentorship & networking',
            'Certificate upon completion',
            'Experience & Recommendation Letters',
            'Priority for UXGenie internships',
            'Exclusive rewards & growth perks',
          ].map((offer, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl border shadow-lg hover:shadow-[#00509E]/30 transition-all 
                ${isDark ? 'bg-[#0f172a]/60 border-[#00509E]/30' : 'bg-[#f9fafb] border-[#00509E]/20'}`}
            >
              <CheckCircle
                className={`w-6 h-6 mb-4 ${isDark ? 'text-[#00509E]' : 'text-[#00509E]'}`}
              />
              <p className={`${isDark ? 'text-gray-200' : 'text-gray-700'} text-base sm:text-lg`}>
                {offer}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-28"
        >
          <h2
            style={{ fontFamily: 'Parabole, sans-serif' }}
            className="text-2xl sm:text-4xl font-bold text-center mb-12"
          >
            ⚡ Your Role as a{' '}
            <span className="text-[#00509E]">Campus Ambassador</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              'Promote UXGenie internships & services on social media',
              'Bring interns through referrals & outreach',
              'Connect potential clients for web, app & design services',
              'Act as a bridge between your campus & Team UXGenie',
            ].map((role, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border shadow-md 
                  ${isDark ? 'bg-[#0f172a]/60 border-[#00509E]/30' : 'bg-[#f9fafb] border-[#00509E]/20'}`}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#00509E] mb-3">
                  {i + 1}. {role.split(' ')[0]}
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{role}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Note Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <p
            className={`text-sm sm:text-base md:text-lg leading-relaxed 
              ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
          >
            📝 <span className="font-medium text-[#00509E]">Certificates, rewards & recommendation letters</span>{' '}
            will only be awarded upon fulfilling responsibilities. Outstanding ambassadors will receive{' '}
            <span className="text-[#00509E] font-medium">additional perks & growth opportunities</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
