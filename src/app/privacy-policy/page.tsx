'use client'

import { motion } from 'framer-motion'

export default function PrivacyPolicyPage() {
  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 2xl:px-80 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-[#00509E]"
        >
          Privacy Policy
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 leading-relaxed text-center"
        >
          At <span className="text-[#00509E] font-semibold">UXGENIE</span>, your privacy is our priority. 
          This Privacy Policy explains how we collect, use, and protect your information when you interact with our services.
        </motion.p>

        {/* Content */}
        <div className="space-y-8 text-gray-300">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00509E] mb-2">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We may collect personal details such as your name, email address, and usage data 
              to improve your experience. Some of this information is provided directly by you, 
              while other data is collected automatically.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00509E] mb-2">2. How We Use Your Information</h2>
            <p className="leading-relaxed">
              We use your data to provide, maintain, and improve our services. 
              This may include sending updates, responding to inquiries, or 
              analyzing user behavior for better performance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00509E] mb-2">3. Data Protection</h2>
            <p className="leading-relaxed">
              We implement security measures to protect your data from unauthorized 
              access, alteration, or disclosure. However, no online system can be 
              completely secure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00509E] mb-2">4. Third-Party Services</h2>
            <p className="leading-relaxed">
              We may use third-party services such as analytics tools or 
              payment providers. These services may collect information 
              under their own privacy policies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-[#00509E] mb-2">5. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, update, or delete your personal data. 
              If you wish to exercise any of these rights, please contact us.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center text-gray-400 text-sm"
        >
          Last updated: {new Date().toLocaleDateString()}
        </motion.p>
      </div>
    </section>
  )
}
