'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const features = [
  {
    title: 'Behavior Tracking',
    description:
      'Track user clicks, scrolls, and time on page to understand interaction patterns — all automated.',
  },
  {
    title: 'AI-Powered Suggestions',
    description:
      'Send real-time behavior logs to OpenAI and get layout improvement tips for any page.',
  },
  {
    title: 'No-Code Integration',
    description:
      'Just one script to start capturing and improving UX. No developer changes needed.',
  },
  {
    title: 'Live UX Tweaks (Demo)',
    description:
      'Let the agent trigger minor layout updates based on behavior — like moving CTAs or changing order.',
  },
  {
    title: 'UX Dashboard',
    description:
      'Track user behavior, see AI feedback, and monitor key metrics — all in one simple dashboard.',
  },
  {
    title: 'Improvement Reports',
    description:
      'Understand what’s working and what’s not, with heatmaps and summaries coming soon.',
  },
]

export default function Features() {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setScrollDirection('down')
      } else {
        setScrollDirection('up')
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="relative w-full py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-48 bg-gradient-to-br from-black via-[#0a0a23] to-[#000d1a] text-[#F0F0F0] overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0 bg-[url('/particles.svg')] bg-cover opacity-10 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center max-w-3xl mx-auto mb-16"
      >
        <Badge className="bg-[#00509E] text-white px-3 py-1 text-sm rounded-full mb-4 shadow-sm">
          Features
        </Badge>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: 'Parabole, sans-serif' }}
        >
          What You Get in MVP
        </h2>
        <p className="text-gray-400 text-base sm:text-lg">
          These core features are enough to prove UXGenie’s real-time AI value.
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: scrollDirection === 'down' ? 40 : -40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-[#0e0e1c]/80 backdrop-blur-md border border-[#1c436a] hover:border-[#00509E] hover:shadow-[#00509E]/30 shadow-md rounded-2xl transition-all duration-300 transform hover:scale-[1.03]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="text-[#00509E] w-6 h-6" />
                  <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
