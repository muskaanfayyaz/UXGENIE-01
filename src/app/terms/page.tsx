"use client"

import { motion } from "framer-motion"

export default function TermsConditionsPage() {
  return (
    <section className="relative w-full min-h-screen bg-[#0a0a0a] text-white py-16 px-6 md:px-20 lg:px-40 xl:px-60">
      {/* Page Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "#00509E" }}>
          Terms & Conditions
        </h1>
        <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
          Please read these Terms & Conditions carefully before using our platform.  
        </p>
      </motion.div>

      {/* Content */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.6 }}
        className="space-y-10 text-gray-200 leading-relaxed"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our services, you agree to be bound by these Terms and Conditions and 
            all applicable laws and regulations. If you do not agree, please discontinue use of our platform.  
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            2. Use of Services
          </h2>
          <p>
            Our services are provided for lawful purposes only. You agree not to misuse, disrupt, or 
            exploit our platform in any way that could damage our reputation or security.  
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            3. Intellectual Property
          </h2>
          <p>
            All content, branding, logos, and materials provided on this platform are owned by us or our 
            licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.  
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            4. Limitation of Liability
          </h2>
          <p>
            We are not liable for any damages, losses, or disruptions resulting from your use of our 
            platform, including but not limited to technical issues, unauthorized access, or misuse.  
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            5. Changes to Terms
          </h2>
          <p>
            We may update or revise these Terms & Conditions at any time. Continued use of the platform 
            after updates constitutes acceptance of the revised terms.  
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-3" style={{ color: "#00509E" }}>
            6. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about these Terms & Conditions, please reach out to us 
            at <span style={{ color: "#00509E" }}>support@uxgenie.com</span>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
