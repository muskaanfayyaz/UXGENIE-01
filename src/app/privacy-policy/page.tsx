'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function PrivacyPolicyPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    <section
      className={`relative w-full py-16 md:py-24 lg:py-32 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 transition-all duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-black via-[#0a0a23] to-[#00111f] text-gray-300'
          : 'bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5] text-gray-800'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 ${
            isDark ? 'text-[#00509E]' : 'text-[#00509E]'
          }`}
        >
          Privacy Policy
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={`text-base sm:text-lg md:text-xl mb-10 leading-relaxed text-center ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          At{' '}
          <span
            className={`font-semibold ${
              isDark ? 'text-white' : 'text-[#00509E]'
            }`}
          >
            UXGENIE
          </span>
          , your privacy is our priority. This Privacy Policy explains how we
          collect, use, and protect your information when you interact with our
          services.
        </motion.p>

        {/* Content */}
        <div className={`space-y-8 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {[
            {
              title: '1. Information We Collect',
              content:
                'We may collect personal details such as your name, email address, and usage data to improve your experience. Some of this information is provided directly by you, while other data is collected automatically.',
            },
            {
              title: '2. How We Use Your Information',
              content:
                'We use your data to provide, maintain, and improve our services. This may include sending updates, responding to inquiries, or analyzing user behavior for better performance.',
            },
            {
              title: '3. Data Protection',
              content:
                'We implement security measures to protect your data from unauthorized access, alteration, or disclosure. However, no online system can be completely secure.',
            },
            {
              title: '4. Third-Party Services',
              content:
                'We may use third-party services such as analytics tools or payment providers. These services may collect information under their own privacy policies.',
            },
            {
              title: '5. Your Rights',
              content:
                'You have the right to access, update, or delete your personal data. If you wish to exercise any of these rights, please contact us.',
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className={`text-2xl font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-[#00509E]'
                }`}
              >
                {section.title}
              </h2>
              <p className="leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-12 text-center text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </section>
  )
}
