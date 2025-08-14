'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'

const plans = {
  monthly: [
    {
      name: 'Starter',
      price: '$0',
      badge: 'Trial Ending Soon',
      features: [
        'Basic tracking',
        'Email insights',
        'Community support',
        '3-day free trial',
      ],
      image: '/logo.png',
    },
    {
      name: 'Pro',
      price: '$25/mo',
      stripePriceId: 'prod_ScrJ2JGVdqSqs8',
      features: [
        'Full tracking',
        'AI layout suggestions',
        'Dashboard access',
        'A/B testing (basic)',
        'Monthly usage reports',
      ],
      image: '/logo.png',
    },
    {
      name: 'Enterprise',
      price: '$99/mo',
      stripePriceId: 'prod_ScrOs4oEDrRrFv',
      features: [
        'Custom AI models',
        'White-label dashboard',
        'Advanced A/B testing',
        'Heatmaps & session replays',
        'Premium analytics',
        '24/7 Priority support',
      ],
      image: '/logo.png',
    },
  ],
  yearly: [
    {
      name: 'Starter',
      price: '$0',
      badge: 'Trial Ending Soon',
      features: [
        'Basic tracking',
        'Email insights',
        'Community support',
        '3-day free trial',
      ],
      image: '/logo.png',
    },
    {
      name: 'Pro',
      price: '$199/yr',
      stripePriceId: 'prod_ScrKpldq9b8DlO',
      features: [
        'Full tracking',
        'AI layout suggestions',
        'Dashboard access',
        'A/B testing (basic)',
        'Monthly usage reports',
      ],
      image: '/logo.png',
    },
    {
      name: 'Enterprise',
      price: '$799/yr',
      stripePriceId: 'prod_ScrNlQ63vktEbX',
      features: [
        'Custom AI models',
        'White-label dashboard',
        'Advanced A/B testing',
        'Heatmaps & session replays',
        'Premium analytics',
        '24/7 Priority support',
      ],
      image: '/logo.png',
    },
  ],
}

export function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="relative w-full min-h-screen py-24 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-60 bg-[#000814] text-white overflow-hidden">
      {/* Animated Bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[400px] h-[400px] bg-[#00509E]/20 rounded-full blur-3xl top-[-10%] left-[10%] animate-float-slow" />
        <div className="absolute w-[300px] h-[300px] bg-[#009edb]/30 rounded-full blur-2xl bottom-[10%] right-[15%] animate-float-fast" />
        <div className="absolute w-[200px] h-[200px] bg-[#001d3d]/40 rounded-full blur-2xl top-[30%] right-[25%] animate-float-medium" />
      </div>

      <div className="text-center mb-20">
        <Badge className="bg-[#00509E] text-white px-4 py-1 text-sm rounded-full mb-4 shadow-md tracking-wide">
          Pricing Plans
        </Badge>
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00509E] to-[#004f9ea1]"
          style={{ fontFamily: 'Parabole, sans-serif' }}
        >
          Choose the Right Plan
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto">
          From solo makers to enterprises — grow your product experience with confidence.
        </p>

        <div className="inline-flex mt-6 border border-[#1c436a] rounded-full p-1 bg-[#0e0e1c]/60 shadow-inner">
          <Button
            variant="ghost"
            onClick={() => setBilling('monthly')}
            className={clsx('rounded-full px-4 py-1 text-sm', billing === 'monthly' && 'bg-[#00509E] text-white')}
          >
            Monthly
          </Button>
          <Button
            variant="ghost"
            onClick={() => setBilling('yearly')}
            className={clsx('rounded-full px-4 py-1 text-sm', billing === 'yearly' && 'bg-[#00509E] text-white')}
          >
            Yearly
          </Button>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans[billing].map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="relative flex flex-col justify-between h-full bg-white/5 backdrop-blur-xl border border-[#1c436a] hover:border-[#00509E] transition-all duration-300 hover:shadow-[0_0_20px_#00c2ff66] rounded-3xl overflow-hidden">
              <CardContent className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-end mb-4">
                  {plan.badge && (
                    <Badge className="bg-red-600 animate-pulse text-white text-xs px-2 py-1 rounded">
                      {plan.badge}
                    </Badge>
                  )}
                </div>
                <Image src={plan.image} alt={plan.name} width={60} height={60} className="mb-4" />
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'Parabole, sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#00509E] text-3xl font-bold mb-5">{plan.price}</p>
                <ul className="text-gray-300 space-y-3 text-sm mb-6 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 mt-1 text-[#00509E]" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full mt-auto border-[#00509E] text-[#00509E] hover:bg-[#00509E] hover:text-white transition duration-300"
                  onClick={async () => {
                    // Handle Starter plan (no payment required)
                    if (plan.name === 'Starter') {
                      alert('Starter plan is free! You can start using it immediately.')
                      return
                    }

                    // Handle Enterprise plan (contact sales)
                    if (plan.name === 'Enterprise') {
                      alert('Please contact our sales team for Enterprise pricing.')
                      return
                    }

                    // Check if plan has a valid Stripe product ID
                    if (!plan.stripePriceId) {
                      alert('This plan is not yet configured for checkout. Please contact support.')
                      return
                    }

                    try {
                      const res = await fetch('/api/checkout', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ plan }),
                      })
                      
                      if (!res.ok) {
                        throw new Error(`HTTP error! status: ${res.status}`)
                      }
                      
                      const data = await res.json()
                      if (data.url) {
                        window.location.href = data.url
                      } else {
                        alert('Checkout failed: No URL received.')
                      }
                    } catch (error) {
                      console.error('Checkout error:', error)
                      alert('Checkout failed. Please try again later or contact support.')
                    }
                  }}
                >
                  {plan.name === 'Starter' ? 'Get Started Free' : 
                   plan.name === 'Enterprise' ? 'Contact Sales' : 'Subscribe Now'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
