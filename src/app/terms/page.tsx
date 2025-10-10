"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function TermsConditionsPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <section
      className={`relative w-full min-h-screen py-16 px-6 md:px-20 lg:px-40 xl:px-60 transition-all duration-500 ${
        isDark
          ? "bg-gradient-to-br from-black via-[#0a0a23] to-[#00111f] text-gray-300"
          : "bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5] text-gray-800"
      }`}
    >
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? "text-[#00509E]" : "text-[#00509E]"
          }`}
        >
          Terms & Conditions
        </h1>
        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Please read these Terms & Conditions carefully before using our
          platform.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={`space-y-10 leading-relaxed ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using our services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree, please discontinue use of our platform.",
          },
          {
            title: "2. Use of Services",
            content:
              "Our services are provided for lawful purposes only. You agree not to misuse, disrupt, or exploit our platform in any way that could damage our reputation or security.",
          },
          {
            title: "3. Intellectual Property",
            content:
              "All content, branding, logos, and materials provided on this platform are owned by us or our licensors. Unauthorized use, reproduction, or distribution is strictly prohibited.",
          },
          {
            title: "4. Limitation of Liability",
            content:
              "We are not liable for any damages, losses, or disruptions resulting from your use of our platform, including but not limited to technical issues, unauthorized access, or misuse.",
          },
          {
            title: "5. Changes to Terms",
            content:
              "We may update or revise these Terms & Conditions at any time. Continued use of the platform after updates constitutes acceptance of the revised terms.",
          },
          {
            title: "6. Contact Us",
            content: (
              <>
                If you have any questions or concerns about these Terms &
                Conditions, please reach out to us at{" "}
                <span
                  className={`font-semibold ${
                    isDark ? "text-white" : "text-[#00509E]"
                  }`}
                >
                  support@uxgenie.com
                </span>
                .
              </>
            ),
          },
        ].map((section, index) => (
          <div key={index}>
            <h2
              className={`text-xl md:text-2xl font-semibold mb-3 ${
                isDark ? "text-white" : "text-[#00509E]"
              }`}
            >
              {section.title}
            </h2>
            <p>{section.content}</p>
          </div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className={`mt-12 text-center text-sm ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Last updated: {new Date().toLocaleDateString()}
      </motion.p>
    </section>
  )
}
