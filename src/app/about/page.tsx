'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Rocket } from 'lucide-react'

export default function AboutUXGenie() {
  return (
    <>
      <section className="relative w-full py-14 sm:py-20 md:py-28 lg:py-32 xl:py-40 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] z-0" />

      {/* Particle Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />

      {/* Decorative Glows */}
      <div className="absolute -top-32 -left-32 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-[#00509E]/10 blur-[100px] sm:blur-[120px] rounded-full z-0" />
      <div className="absolute -bottom-32 -right-32 w-[300px] sm:w-[350px] h-[300px] sm:h-[350px] bg-[#00509E]/15 blur-[110px] sm:blur-[140px] rounded-full z-0" />

      <div className="relative z-10 max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-12 xl:px-16">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-6 bg-[#00509E]/20 blur-3xl rounded-full"></div>
            <h1
              className="relative font-bold leading-snug text-white"
              style={{ 
                fontFamily: 'Parabole, sans-serif',
                fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)'
              }}
            >
              About <span className="text-[#00509E]">U</span>X
              <span className="text-[#00509E]">G</span>EN
              <span className="text-[#00509E]">I</span>E
            </h1>
          </div>
          <p className="mt-6 text-gray-300 max-w-3xl mx-auto px-2"
            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.25rem)' }}>
            UXGenie is a startup founded by <span className="text-[#00509E] font-semibold">Muskaan Fayyaz</span> and <span className="text-[#00509E] font-semibold">Maliha Iqbal</span> with the vision of nurturing young tech talent while building long-term professional relationships with clients.
          </p>
        </motion.div>

        {/* About | Vision | Mission */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } }
          }}
          viewport={{ once: true }}
          className="grid gap-6 sm:gap-8"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {[
            {
              title: "About Us",
              desc: "We provide structured internships where interns learn, grow, and contribute to impactful projects while preparing for successful careers. Our programs are designed to bridge the gap between academic knowledge and real-world application.",
              icon: Users,
              extra: "💡 Interns work on live projects, gaining practical exposure and confidence."
            },
            {
              title: "Vision",
              desc: "To become a recognized platform that connects passionate learners with industry opportunities, gains impactful projects from clients, and delivers them with the highest quality standards.",
              icon: Target,
              extra: "🌍 We aim to create a global community of skilled professionals."
            },
            {
              title: "Mission",
              desc: "To empower aspiring professionals with real-world tech exposure, skill development, and mentorship opportunities while delivering high-quality work to clients and maintaining long-lasting professional relationships.",
              icon: Rocket,
              extra: "🚀 Our mission is to shape the leaders of tomorrow through innovation."
            }
          ].map(({ title, desc, extra, icon: Icon }, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex"
            >
              <Card className="relative flex flex-col w-full min-h-[360px] sm:min-h-[380px] justify-between rounded-2xl overflow-hidden backdrop-blur-md bg-white/80 shadow-md hover:shadow-2xl border border-gray-200 hover:border-[#00509E]/50 hover:bg-gradient-to-br hover:from-white hover:to-[#f0f7ff] transition-all duration-300">
                
                {/* Blue Top Line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#00509E]" />

                <CardContent className="pt-10 p-6 sm:p-8 flex flex-col items-center text-center gap-4 flex-grow">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#00509E]" />
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">{title}</h3>
                  <p className="text-gray-600 flex-grow text-sm sm:text-base lg:text-lg">{desc}</p>

                  {/* Bottom extra */}
                  <div className="mt-auto">
                    <p className="text-xs sm:text-sm lg:text-base text-[#00509E] font-medium">{extra}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  )
}
