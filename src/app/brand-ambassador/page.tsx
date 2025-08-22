'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle } from 'lucide-react'

export default function CampusAmbassador() {
  return (
    <section className="relative min-h-screen w-full text-[#F0F0F0] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] z-0" />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
      <div className="absolute -top-40 -left-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#00509E]/20 blur-[150px] rounded-full z-0" />
      <div className="absolute -bottom-40 -right-40 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] bg-[#1c436a]/30 blur-[200px] rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-24 md:py-32 lg:py-40">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <span className="px-4 py-1.5 rounded-full border border-[#00509E]/40 text-xs sm:text-sm tracking-wider uppercase text-[#00509E] font-medium bg-[#00509E]/10 backdrop-blur-md">
            📌 UXGenie Campus Ambassador Program
          </span>

          <h1 style={{ fontFamily: 'Parabole, sans-serif' }} className="mt-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight max-w-4xl mx-auto">
            Be the <span className="text-[#00509E]">Leader</span> of Innovation
            <br />
            at Your Campus 🚀
          </h1>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-sm sm:text-lg md:text-xl leading-relaxed">
            Represent <span className="text-[#00509E] font-medium">UXGenie</span>, gain real-world 
            <span className="text-[#00509E] font-medium"> experience</span>, grow your 
            <span className="text-[#00509E] font-medium"> network</span>, and unlock exclusive 
            <span className="text-[#00509E] font-medium"> rewards & opportunities</span>.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href='https://docs.google.com/forms/d/e/1FAIpQLSeBiKpvw7Rs3aA7sUzB2x9vW0KuPI1FlikIOm6cYnylp9MFHQ/viewform?usp=header'
              target="_blank"
            >
              <Button className="bg-[#00509E] hover:bg-[#004080] px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all">
                Apply Now
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                variant="outline"
                className="border-[#00509E] text-[#00509E] hover:bg-[#00509E]/10 px-8 py-5 text-lg font-semibold rounded-2xl shadow-lg hover:scale-105 transition-all"
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
            "Hands-on experience in marketing & promotions",
            "Professional mentorship & networking",
            "Certificate upon completion",
            "Experience & Recommendation Letters",
            "Priority for UXGenie internships",
            "Exclusive rewards & growth perks"
          ].map((offer, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0f172a]/60 border border-[#00509E]/30 shadow-lg hover:shadow-[#00509E]/30 transition-all"
            >
              <CheckCircle className="w-6 h-6 text-[#00509E] mb-4" />
              <p className="text-gray-200 text-base sm:text-lg">{offer}</p>
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
          <h2 style={{ fontFamily: 'Parabole, sans-serif' }} className="text-2xl sm:text-4xl font-bold text-center mb-12">
            ⚡ Your Role as a <span className="text-[#00509E]">Campus Ambassador</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              "Promote UXGenie internships & services on social media",
              "Bring interns through referrals & outreach",
              "Connect potential clients for web, app & design services",
              "Act as a bridge between your campus & Team UXGenie"
            ].map((role, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-[#0f172a]/60 border border-[#00509E]/30 shadow-md"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#00509E] mb-3">
                  {i + 1}. {role.split(" ")[0]}
                </h3>
                <p className="text-gray-300">{role}</p>
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
          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
            📝 <span className="text-white font-medium">Certificates, rewards & recommendation letters </span> 
            will only be awarded upon fulfilling responsibilities.  
            Outstanding ambassadors will receive <span className="text-[#00509E] font-medium">additional perks & growth opportunities</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
