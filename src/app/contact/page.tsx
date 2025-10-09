'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useTheme } from 'next-themes'

export default function ContactUs() {
  const { theme } = useTheme()

  const contacts = [
    { name: 'WhatsApp Community', link: 'https://chat.whatsapp.com/KYFXr2vQ0rR8hSe5s8quwM?mode=ac_t', icon: <FaWhatsapp className="text-green-400 w-8 h-8" /> },
    { name: 'WhatsApp Channel', link: 'https://whatsapp.com/channel/0029VbB9CLICnA7mSj348D0k', icon: <FaWhatsapp className="text-green-400 w-8 h-8" /> },
    { name: 'Facebook', link: 'https://www.facebook.com/OfficialUxgenie/', icon: <FaFacebook className="text-blue-400 w-8 h-8" /> },
    { name: 'Instagram', link: 'https://www.instagram.com/uxginie2/', icon: <FaInstagram className="text-pink-400 w-8 h-8" /> },
    { name: 'Twitter', link: 'https://x.com/OfficialUxgenie', icon: <FaTwitter className="text-sky-400 w-8 h-8" /> },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/company/uxgenie', icon: <FaLinkedin className="text-blue-500 w-8 h-8" /> },
  ]

  const isDark = theme === 'dark'

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden transition-colors duration-500">
      {/* Background */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-700 ${
          isDark
            ? 'bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a]'
            : 'bg-white'
        }`}
      />

      {/* Particle Overlay (visible only in dark mode) */}
      {isDark && (
        <div className="absolute inset-0 z-0 pointer-events-none bg-[url('/particles.svg')] bg-cover opacity-20" />
      )}

      {/* Decorative Glows (dark mode only) */}
      {isDark && (
        <>
          <div className="absolute -top-32 -left-32 w-[350px] h-[350px] bg-[#00509E]/15 blur-[140px] rounded-full z-0" />
          <div className="absolute -bottom-32 -right-32 w-[350px] h-[350px] bg-[#00509E]/20 blur-[160px] rounded-full z-0" />
        </>
      )}

      <div className="relative z-10 max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative inline-block">
            {isDark && <div className="absolute -inset-6 bg-[#00509E]/20 blur-3xl rounded-full"></div>}
            <h1
              className={`relative font-bold leading-snug ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
              style={{ 
                fontFamily: 'Parabole, sans-serif',
                fontSize: 'clamp(2rem, 4vw, 4.5rem)'
              }}
            >
              📩 Contact{' '}
              <span
                className={`${
                  isDark ? 'text-[#00509E]' : 'text-[#00509E]'
                }`}
              >
                UXGENIE
              </span>
            </h1>
          </div>
          <p
            className={`mt-6 max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
            style={{ fontSize: 'clamp(0.95rem, 1.3vw, 1.3rem)' }}
          >
            Reach out to us anytime! Join our communities or connect with us on social platforms.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          viewport={{ once: true }}
          className="grid gap-8 max-w-5xl mx-auto"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {contacts.map(({ name, link, icon }, idx) => (
            <motion.a
              key={idx}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="block"
            >
              <Card
                className={`h-full flex flex-col items-center justify-center gap-4 rounded-2xl backdrop-blur-md border shadow-md transition-all duration-300 
                ${
                  isDark
                    ? 'bg-[#0f172a]/70 border-[#00509E]/30 hover:border-[#00509E]/50 hover:shadow-[#00509E]/40'
                    : 'bg-white border-gray-200 hover:border-[#00509E]/40 hover:shadow-lg'
                }`}
              >
                <CardContent className="p-8 flex flex-col items-center justify-center gap-4">
                  {icon}
                  <h3
                    className={`font-semibold ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}
                  >
                    {name}
                  </h3>
                  <span
                    className={`font-medium text-sm ${
                      isDark ? 'text-[#00509E]' : 'text-[#00509E]'
                    }`}
                  >
                    Click to Connect
                  </span>
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          viewport={{ once: true }}
          className={`mt-20 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}
        >
          💡 We’d love to hear from you — whether it’s collaboration, feedback, or just a hello!
        </motion.div>
      </div>
    </section>
  )
}
