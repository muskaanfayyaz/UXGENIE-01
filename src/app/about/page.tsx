'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Users, Target, Rocket, Zap, Heart, Lightbulb, Linkedin, Twitter } from 'lucide-react'

export default function AboutUXGenie() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 lg:py-32"
      >
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900" style={{ fontFamily: 'Parabole, sans-serif' }}>
            We&apos;re building the future of tech talent.
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            UXGENIE is a launchpad for the next generation of innovators, connecting ambitious minds with real-world opportunities to shape the future of technology.
          </p>
        </div>
      </motion.div>

      {/* Story Section */}
      <div className="py-20 lg:py-28 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded by <span className="text-[#00509E] font-semibold">Muskaan Fayyaz</span> and <span className="text-[#00509E] font-semibold">Maliha Iqbal</span>, UXGENIE was born from a shared vision: to bridge the gap between academic learning and the dynamic demands of the tech industry. We saw brilliant students with immense potential and companies searching for top-tier talent, and we decided to build the bridge.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our platform provides structured internships and competitions that go beyond textbooks, offering hands-on experience on impactful projects. We are more than just a company; we are a community dedicated to nurturing talent, fostering innovation, and building long-lasting professional relationships.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative h-full rounded-2xl overflow-hidden"
          >
            <Image src="/about.jpg" alt="Our Story" layout="fill" objectFit="cover" />
          </motion.div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Meet Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <FounderCard
              image="/muskaan.png"
              name="Muskaan Fayyaz"
              title="Co-Founder & CEO"
              bio="Muskaan is a visionary leader with a passion for empowering the next generation of tech talent. Her experience in product management and strategic growth drives UXGENIE's mission."
              social={{
                linkedin: "https://www.linkedin.com/in/muskaan-fayyaz/",
                twitter: "#",
              }}
            />
            <FounderCard
              image="/maliha.png"
              name="Maliha Iqbal"
              title="Co-Founder & COO"
              bio="Maliha brings operational excellence and a deep understanding of the tech landscape. She is dedicated to creating a seamless and impactful experience for interns and clients alike."
              social={{
                linkedin: "https://www.linkedin.com/in/maliha-iqbal-dev/",
                twitter: "#",
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Mission and Vision Section */}
      <div className="py-20 lg:py-28 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <InfoCard icon={Rocket} title="Our Mission" description="To empower aspiring professionals with real-world tech exposure, skill development, and mentorship, while delivering high-quality work to our clients." />
          <InfoCard icon={Target} title="Our Vision" description="To become the leading platform that connects passionate learners with industry opportunities, creating a global community of skilled and impactful professionals." />
          <InfoCard icon={Users} title="Our Community" description="To build a supportive and collaborative ecosystem where interns, mentors, and clients can connect, grow, and innovate together." />
        </div>
      </div>

      {/* Our Values Section */}
      <div className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard icon={Lightbulb} title="Innovation" description="We constantly seek new and better ways to solve problems and create value." />
            <ValueCard icon={Heart} title="Passion" description="We are driven by a genuine enthusiasm for technology and talent development." />
            <ValueCard icon={Zap} title="Excellence" description="We hold ourselves to the highest standards in everything we do." />
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub-components for cleaner structure

const FounderCard = ({ image, name, title, bio, social }: { image: string; name: string; title: string; bio: string; social: { linkedin: string, twitter: string } }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.8 }}
    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center"
  >
    <div className="relative w-60 h-60 rounded-full overflow-hidden mb-6">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
    <p className="text-[#00509E] font-semibold mb-4">{title}</p>
    <p className="text-gray-600 leading-relaxed mb-6">{bio}</p>
    <div className="flex gap-6 mt-auto">
      <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00509E] transition-colors">
        <Linkedin size={28} />
      </a>
      <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00509E] transition-colors">
        <Twitter size={28} />
      </a>
    </div>
  </motion.div>
);

const InfoCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <Icon className="w-12 h-12 text-[#00509E] mx-auto mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="p-8 border border-gray-200 rounded-2xl">
    <Icon className="w-10 h-10 text-[#00509E] mb-4" />
    <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);
