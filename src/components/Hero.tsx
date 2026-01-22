"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  Brain,
  Zap,
  Briefcase,
  Trophy,
  CheckCircle2,
  Users,
  Star,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatVariants = (delay = 0) => ({
  animate: {
    y: [-8, 8, -8],
    transition: {
      duration: 5 + delay * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  },
});

// Dynamic Content
const rotatingTexts = [
  "AI-Powered Internships",
  "Real-World Competitions",
  "Shape Your Tech Future",
  "Land Your Dream Job",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100vh] w-full flex items-center justify-center overflow-hidden bg-neutral-950 text-white py-16 sm:py-20 md:py-28 lg:py-32">
      {/* Background Styling */}
      <div className="absolute inset-0 z-0">
        {/* Main background gradient matching existing theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#000814] via-[#001233] to-[#000d1a]" />
        
        {/* Animated Gradient Orbs - Adjusted to match theme */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-gradient-to-br from-[#00509E]/30 to-[#1c436a]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[15%] right-[15%] w-[25vw] h-[25vw] max-w-[400px] max-h-[400px] bg-gradient-to-tr from-[#1c436a]/25 to-[#00509E]/15 rounded-full blur-3xl"
        />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
      </div>

      {/* Floating UI Elements */}
      {[
        { icon: Brain, text: "AI Matching", delay: 0, top: "15%", left: "10%" },
        { icon: Briefcase, text: "Live Projects", delay: 1.5, top: "60%", left: "85%" },
        { icon: Trophy, text: "Top Tier Competitions", delay: 2.5, top: "75%", left: "5%" },
      ].map((item) => (
        <motion.div
          key={item.text}
          variants={floatVariants(item.delay)}
          animate="animate"
          className="absolute hidden lg:flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-lg"
          style={{ top: item.top, left: item.left }}
        >
          <item.icon className="w-5 h-5 text-[#00509E]" /> {/* Adjusted color */}
          <span className="text-sm text-white/80">{item.text}</span>
        </motion.div>
      ))}
      
      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl mx-auto text-center px-4"
      >
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <Link href="/programs" passHref>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex cursor-pointer items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute h-full w-full rounded-full bg-[#00509E] opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00509E]" /></span> {/* Adjusted color */}
              <span className="text-sm font-medium text-white/90">The Future of Tech Talent Starts Here</span>
              <ArrowRight className="w-4 h-4 text-white/50" />
            </motion.div>
          </Link>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4" style={{ fontFamily: 'Parabole, sans-serif' }}>
          Your Career,{" "}
          <span className="relative whitespace-nowrap">
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-[#00509E] to-blue-400 bg-clip-text text-transparent">Supercharged by AI</span> {/* Adjusted gradient */}
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-8 mb-8 overflow-hidden">
          <motion.p key={textIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ ease: [0.22, 1, 0.36, 1] }} className="text-lg sm:text-xl text-neutral-300">
            {rotatingTexts[textIndex]}
          </motion.p>
        </motion.div>

        <motion.p variants={itemVariants} className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          UXGENIE bridges the gap between ambition and opportunity. We provide AI-driven pathways for aspiring professionals to innovate, grow, and lead.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Button asChild size="lg" className="w-full sm:w-auto bg-gradient-to-r from-[#00509E] to-[#1c436a] hover:from-blue-600 hover:to-blue-800 text-white font-semibold text-base px-8 py-6 shadow-lg shadow-[#00509E]/20 hover:shadow-xl hover:shadow-[#00509E]/30 border-0 transition-all duration-300"><Link href="https://docs.google.com/forms/d/e/1FAIpQLSeolmCu2hyteI8tpjwPNoVLFaMh2hS_8BZF-HTJTS8JheAUAQ/viewform?usp=header"><Sparkles className="w-5 h-5 mr-2.5" />Apply Now</Link></Button></motion.div> {/* Adjusted gradient and shadow */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}><Button asChild variant="secondary" size="lg" className="w-full sm:w-auto bg-transparent text-white border-2 border-white/20 hover:bg-white/10 hover:border-white/30 hover:text-white font-semibold text-base px-8 py-6 transition-all duration-300"><Link href="/programs">Explore Opportunities</Link></Button></motion.div>
        </motion.div>

        {/* AI Command Preview */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto mt-16">
            <motion.div whileHover={{ scale: 1.02 }} className="relative p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <div className="relative flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00509E] to-[#1c436a] flex items-center justify-center shadow-lg"><Wand2 className="w-5 h-5 text-white" /></div> {/* Adjusted gradient */}
                <div className="flex-1 text-left"><p className="text-white/60 text-sm">Try asking our AI...</p><p className="text-white font-medium">"Match me with a remote internship in AI"</p></div>
              </div>
            </motion.div>
        </motion.div>
        
        {/* Trust Indicators */}
        <motion.div variants={itemVariants} className="mt-20 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "100+", label: "Partner Companies", icon: Briefcase },
                { value: "500+", label: "Interns Placed", icon: CheckCircle2 },
                { value: "1,000+", label: "Community Members", icon: Users },
                { value: "4.9/5", label: "User Rating", icon: Star },
              ].map((stat) => (
                <motion.div key={stat.label} whileHover={{ y: -5 }} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><span className="text-3xl font-bold text-white">{stat.value}</span></div>
                  <p className="text-sm text-neutral-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
