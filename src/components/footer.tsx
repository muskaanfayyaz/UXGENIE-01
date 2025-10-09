'use client'

import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative transition-colors duration-500 bg-white text-gray-700 dark:bg-gradient-to-br dark:from-black dark:via-[#0a0a23] dark:to-[#000d1a] dark:text-gray-300 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Glow accents (visible in dark mode only) */}
      <div className="absolute -top-32 -left-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#00509E]/10 dark:bg-[#00509E]/20 blur-[120px] sm:blur-[150px] rounded-full transition-all duration-500" />
      <div className="absolute -bottom-32 -right-32 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#00D4FF]/10 dark:bg-[#00D4FF]/20 blur-[140px] sm:blur-[180px] rounded-full transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo1.png" alt="UXGenie Logo" width={55} height={55} className="w-10 sm:w-[55px] h-10 sm:h-[55px]" />
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a0a0a] dark:text-white transition-colors duration-500"
                style={{ fontFamily: "Parabole" }}
              >
                <span className="text-[#00509E]">U</span>X
                <span className="text-[#00509E]">G</span>EN
                <span className="text-[#00509E]">I</span>E
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-500">
              Empowering future tech leaders 🚀 through hands-on internships, 
              thrilling competitions, and strategic partnerships.  
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] dark:text-white mb-4 sm:mb-5 transition-colors duration-500">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              {[
                { label: "Home", href: "/" },
                { label: "Programs", href: "/programs" },
                { label: "Competitions", href: "/competitions" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "FAQ", href: "/faq" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-[#00509E] transition-colors duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] dark:text-white mb-4 sm:mb-5 transition-colors duration-500">
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li><Link href="/opportunities" className="hover:text-[#00509E] transition-colors duration-300">Opportunities</Link></li>
              <li><Link href="/campus-ambassador" className="hover:text-[#00509E] transition-colors duration-300">Campus Ambassador</Link></li>
              <li><Link href="https://drive.google.com/file/d/1RFVxawkGO4SgJAcwVrJ_r2qcntiuxPXz/view?usp=drive_link" className="hover:text-[#00509E] transition-colors duration-300">Booklet</Link></li>
              <li><Link href="/terms" className="hover:text-[#00509E] transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#00509E] transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-white/10 my-6 sm:my-8 transition-colors duration-500"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 transition-colors duration-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} UXGENIE. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-5 text-lg sm:text-xl">
            <Link href="https://www.facebook.com/OfficialUxgenie/" target="_blank" className="hover:text-[#00509E] transition-colors duration-300"><FaFacebook /></Link>
            <Link href="https://www.instagram.com/uxginie2/" target="_blank" className="hover:text-[#00509E] transition-colors duration-300"><FaInstagram /></Link>
            <Link href="https://x.com/OfficialUxgenie" target="_blank" className="hover:text-[#00509E] transition-colors duration-300"><FaTwitter /></Link>
            <Link href="https://www.linkedin.com/company/uxgenie" target="_blank" className="hover:text-[#00509E] transition-colors duration-300"><FaLinkedin /></Link>
            <Link href="https://chat.whatsapp.com/KYFXr2vQ0rR8hSe5s8quwM?mode=ac_t" target="_blank" className="hover:text-[#00509E] transition-colors duration-300"><FaWhatsapp /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
