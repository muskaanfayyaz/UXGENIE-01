'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function TestimonialsSection() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const testimonials = [
    {
      name: 'Abdul Mannan Ahmed',
      role: 'Graphic Designer',
      message:
        'My internship with UXGENIE has been a great learning experience. Working with the UXGENIE team was exciting and insightful, helping me enhance my skills and gain practical exposure.',
    },
    {
      name: 'Moiz Waseem',
      role: 'Frontend Developer',
      message:
        'My initial weeks as a Remote Frontend Developer Intern at UXGENIE have been highly effective. The structured preparation and mentorship helped me start strong.',
    },
    {
      name: 'Maryam Safdar',
      role: 'Agentic AI Developer',
      message:
        'My experience with UXGENIE was really good! The team was friendly, responsive, and focused on both design and user experience.',
    },
  ]

  return (
    <section
      className={`w-full py-24 transition-colors duration-700 ${
        isDark ? 'bg-[#0a0a0a] text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-4"
        style={{ fontFamily: 'Parabole, sans-serif' }}>
          Read experiences, <span className="text-[#00509E]">grow with confidence.</span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-10 text-gray-600 text-sm">
          <Star className="text-[#00B67A] w-5 h-5" />
          <span className="font-medium text-gray-800">4.9/5</span>
          <span className="text-gray-500">· Based on 50+ reviews</span>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`p-6 rounded-2xl border ${
                isDark ? 'border-gray-700 bg-[#111]' : 'border-gray-200 bg-gray-50'
              } shadow-sm hover:shadow-md transition-all`}
            >
              <p
                className={`text-base leading-relaxed italic mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                “{t.message}”
              </p>

              <div className="flex items-center gap-3 border-t pt-4">
                <div className="text-left">
                  <h3 className="font-semibold text-[#00509E]">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
