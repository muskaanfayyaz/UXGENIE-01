'use client'

import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export default function FAQUXGenie() {
  const faqs = [
    {
      q: "What is the duration of the UXGENIE Internship Program?",
      a: "The internship runs for 5 weeks, focusing on task-based learning, real-world projects, and professional mentorship."
    },
    {
      q: "Do I need prior experience to apply?",
      a: "No prior professional experience is required. Basic knowledge in your chosen field is recommended, but we provide mentorship and 24/7 guidance."
    },
    {
      q: "Is the internship paid?",
      a: "Currently, our internships are unpaid learning opportunities. However, top interns get future paid project opportunities and recognition on our platform."
    },
    {
      q: "What do I receive after completing the internship?",
      a: "All interns receive an Internship Certificate and Experience Letter. Top performers also get a Recommendation Letter and their portfolio projects showcased on UXGENIE’s website."
    },
    {
      q: "What roles are currently offered?",
      a: "We offer roles such as Python Developer, Next.js Developer, Full Stack Developer, Frontend Developer, Backend Developer, and Graphic Designer."
    },
    {
      q: "Is the internship flexible?",
      a: "Yes, it’s fully online and flexible. You can manage your tasks and meetings according to your availability while ensuring timely submissions."
    },
    {
      q: "How does mentorship work at UXGENIE?",
      a: "Mentors provide project guidance, career advice, and technical support with 24/7 availability to help you grow."
    },
    {
      q: "Will UXGENIE host competitions?",
      a: "Yes! We’re building a competition platform with Hackathons, Design Challenges, and Coding Competitions — launching soon."
    },
    {
      q: "How can I contact UXGENIE?",
      a: "You can reach us anytime through our WhatsApp Community, WhatsApp Channel, official number (+92 332 3811858), and social media platforms (Facebook, Instagram, Twitter, LinkedIn)."
    }
  ]

  return (
    <section className="relative w-full py-20 md:py-28 lg:py-36 overflow-hidden transition-colors duration-700">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5]"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h1
            className="relative font-extrabold tracking-tight text-gray-900"
            style={{ 
              fontFamily: 'Parabole, sans-serif',
              fontSize: 'clamp(1.8rem, 3.5vw, 4.5rem)'
            }}
          >
            Frequently Asked{' '}
            <span className="text-[#00509E]">
              Questions
            </span>
          </h1>
          <p
            className="mt-6 max-w-2xl mx-auto leading-relaxed text-gray-700"
            style={{ fontSize: 'clamp(1rem, 1.3vw, 1.25rem)' }}
          >
            Everything you need to know about{' '}
            <span className="text-[#00509E] font-semibold">
              UXGENIE
            </span>{' '}
            internships, mentorship, and competitions.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
          viewport={{ once: true }}
          className="rounded-3xl shadow-xl overflow-hidden backdrop-blur-lg border transition-all duration-500 bg-white border-gray-200"
        >
          <Accordion type="single" collapsible className="w-full divide-y divide-gray-200">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0 }
                }}
                transition={{ type: "spring", stiffness: 180, damping: 22 }}
              >
                <AccordionItem 
                  value={`faq-${idx}`} 
                  className="px-6 sm:px-8 transition-colors hover:bg-gray-50"
                >
                  <AccordionTrigger
                    className="text-left py-5 flex items-center font-medium text-lg sm:text-xl text-gray-900 hover:text-[#00509E]"
                  >
                    <HelpCircle
                      className="w-5 h-5 mr-3 flex-shrink-0 text-[#00509E]"
                    />
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="pb-5 text-sm sm:text-base leading-relaxed pl-8 text-gray-700"
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}