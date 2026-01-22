"use client"; // Ensure this is at the very top

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Globe } from 'lucide-react';
import React, { useRef, useState } from 'react';

const originalProjects = [
    { "title": "Jucier", "github": "https://github.com/Tahasaif3/jucier-website-clone-internship-project", "live": "https://jucier-website-clone-internship-pro.vercel.app/" },
    { "title": "Geluna", "github": "https://github.com/Muhammadhammad69/glace-template-clone-project-03", "live": "https://glace-template-clone.vercel.app/" },
    { "title": "Travel Planner AI", "github": "https://github.com/maryamsafdar/AI-Travel-Planner/tree/main/travel_planner_ai", "live": "https://ai-travel-planner-qzpuqt2qkhyinbfp3cm5kz.streamlit.app/" },
    { "title": "Vienino", "github": "https://github.com/abdud099/Vienino", "live": "https://vienino.vercel.app/" },
    { "title": "Stayscape", "github": "https://moizwaseem1.github.io/stayscape-clone", "live": "https://stayscape-clone.vercel.app/" },
    { "title": "GearShift", "github": "https://moizwaseem1.github.io/gearshift-static/index.html", "live": "https://gearshift-static.vercel.app" },
    { "title": "Lambo", "github": "https://github.com/Tahasaif3/lambo-redux", "live": "https://lambo-redux-project.vercel.app" },
    { "title": "Humace", "github": "https://github.com/Muhammadhammad69/humance-workflow-io-template-clone", "live": "https://humace-template-io.vercel.app/" },
    { "title": "BeTomorrow", "github": "https://github.com/abdud099/Ai-Agency", "live": "https://ai-agency-mauve.vercel.app/" },
    { "title": "Spotify", "github": "https://github.com/abdud099/Spotify-Clone", "live": "https://spotify-clone-six-zeta-58.vercel.app/" },
    { "title": "Foodery", "github": "https://github.com/Fai2a/Foodery.git", "live": "https://foodery-mm3w.vercel.app/" },
    { "title": "AI Blogging", "github": "https://github.com/Tahasaif3/UXGENIE_INTERNSHIP_PROJECT_AI_BLOGGING_WEBSITE", "live": "https://uxgenie-internship-project-ai-blogg.vercel.app/" },
    { "title": "LearnHub", "github": "https://github.com/Aeiman-Fayyaz/LearnHub", "live": "https://learn-hub-mauve.vercel.app/" },
    { "title": "FindaFix", "github": "https://github.com/Aeiman-Fayyaz/FindaFix", "live": "https://finda-fix.vercel.app/" },
    { "title": "AI Landing Page Generator", "github": "https://github.com/Muhammadhammad69/AI-Landing-Page-Generator-Project-01", "live": "https://ai-landing-page-generator-phi.vercel.app/" }
];

const featuredOrder = ['GearShift', 'Humace', 'Jucier', 'Vienino', 'Geluna', 'Stayscape', 'BeTomorrow', 'Lambo', 'Spotify'];

const cleanTitle = (title) => title.replace(/clone|template|conversion|redux|static|with Next\.js|– Full Multi-Page Fast-Food Website with Ordering|\/ Glace|AI Agency|Powered Blogging Website|New Freelancer Portfolio Builder/gi, '').trim();

const processedProjects = originalProjects.map(p => {
    const cleaned = cleanTitle(p.title);
    const videoName = cleaned.replace(/\s+/g, '') + '.mp4';
    return {
        ...p,
        title: cleaned,
        video: `/videos/${videoName}`
    };
});

const featuredProjects = featuredOrder.map(title => processedProjects.find(p => p.title === title)).filter(Boolean);
const otherProjects = processedProjects.filter(p => !featuredOrder.includes(p.title));
const sortedProjects = [...featuredProjects, ...otherProjects];

const ProjectCard = ({ project }) => {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
      if (videoRef.current) {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.error("Video play failed:", error);
          });
        }
      }
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    return (
      <motion.div
        variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-300 ${isHovered ? 'border-[#00509E]' : 'border-transparent'} shadow-lg hover:shadow-[#00509E]/30`}/> {/* Forced light theme shadow */}
        <video
          key={project.video}
          ref={videoRef}
          src={project.video}
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h3 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-12">
            {project.title}
          </h3>
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Button asChild size="sm" className="w-full bg-white/90 hover:bg-white text-black font-semibold">
              <Link href={project.live} target="_blank" rel="noopener noreferrer">
                <Globe className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button asChild size="sm" variant="secondary" className="w-full bg-neutral-700/80 hover:bg-neutral-600 text-white font-semibold">
              <Link href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </motion.div>
    );
};

export default function PortfolioPage() {
  const isDark = false; // Force light theme

  return (
    <section
      className={`relative w-full py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden transition-colors duration-700 text-gray-900`} // Forced light theme text
    >
      {/* Background */}
      <div
        className={`absolute inset-0 z-0 transition-colors duration-700 bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5]`} // Forced light theme background
      />

      {/* Particles (Dark only) - removed */}
      

      {/* Glows (Dark only) - removed */}
      

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <span
            className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm tracking-wider uppercase font-medium backdrop-blur-md border-[#00509E]/40 text-[#00509E] bg-[#00509E]/10`} // Forced light theme badge
          >
            Our Portfolio
          </span>

          <h1
            className={`mt-6 font-bold leading-snug text-gray-900`} // Forced light theme text
            style={{
              fontFamily: 'Parabole, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 4.5rem)',
            }}
          >
            Our Work 🚀
          </h1>

          <p
            className={`mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-600`} // Forced light theme text
          >
            A collection of projects built by our talented developers.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProjects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}