'use client'

import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"
// Removed useTheme, useEffect, useState imports as they are no longer needed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white text-gray-700 pt-16 sm:pt-20 pb-8 sm:pb-10 overflow-hidden">
      {/* Removed Glow accents */}

      {/* Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-12 sm:mb-16">
          
          {/* Brand */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/logo1.png" alt="UXGenie Logo" width={55} height={55} priority className="w-10 sm:w-[55px] h-10 sm:h-[55px]" /> {/* Hardcoded light logo */}
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0a0a0a] transition-colors duration-500" // Hardcoded text-gray
                style={{ fontFamily: "Parabole" }}
              >
                <span className="text-[#00509E]">U</span>X
                <span className="text-[#00509E]">G</span>EN
                <span className="text-[#00509E]">I</span>E
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base transition-colors duration-500"> {/* Hardcoded text-gray-600 */}
              Empowering future tech leaders 🚀 through hands-on internships, 
              thrilling competitions, and strategic partnerships.  
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mb-4 sm:mb-5 transition-colors duration-500"> {/* Hardcoded text-gray */}
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"> {/* Hardcoded text-gray-700 */}
              {[
                { label: "Home", href: "/" },
                { label: "Programs", href: "/programs" },
                { label: "Competitions", href: "/competitions" },
                { label: "Portfolio", href: "/portfolio" },
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
            <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mb-4 sm:mb-5 transition-colors duration-500"> {/* Hardcoded text-gray */}
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"> {/* Hardcoded text-gray-700 */}
              <li><Link href="/opportunities" className="hover:text-[#00509E] transition-colors duration-300">Opportunities</Link></li>
              <li><Link href="/campus-ambassador" className="hover:text-[#00509E] transition-colors duration-300">Campus Ambassador</Link></li>
              <li><Link href="https://drive.google.com/file/d/1XU5cdtVB7vZ12PQdgn418nAVuO-rGjLm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300">Booklet</Link></li>
              <li><Link href="/terms" className="hover:text-[#00509E] transition-colors duration-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#00509E] transition-colors duration-300">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info (New Column) */}
          <div className="flex flex-col">
            <h3 className="text-base sm:text-lg font-semibold text-[#0a0a0a] mb-4 sm:mb-5 transition-colors duration-500"> {/* Hardcoded text-gray */}
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700"> {/* Hardcoded text-gray-700 */}
              <li><a href="mailto:info@uxgenie.com" className="hover:text-[#00509E] transition-colors duration-300">info@uxgenie.com</a></li>
              <li><a href="tel:+923323811858" className="hover:text-[#00509E] transition-colors duration-300">+92 332 3811858</a></li>
              <li className="flex gap-4 sm:gap-5 text-lg sm:text-xl pt-2">
                <Link href="https://www.facebook.com/OfficialUxgenie/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300"><FaFacebook /></Link>
                <Link href="https://www.instagram.com/uxginie2/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300"><FaInstagram /></Link>
                <Link href="https://x.com/OfficialUxgenie" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300"><FaTwitter /></Link>
                <Link href="https://www.linkedin.com/company/uxgenie" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300"><FaLinkedin /></Link>
                <Link href="https://chat.whatsapp.com/KYFXr2vQ0rR8hSe5s8quwM?mode=ac_t" target="_blank" rel="noopener noreferrer" className="hover:text-[#00509E] transition-colors duration-300"><FaWhatsapp /></Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6 sm:my-8 transition-colors duration-500"></div> {/* Hardcoded border-gray-300 */}

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 text-xs sm:text-sm md:text-base text-gray-600 transition-colors duration-500"> {/* Hardcoded text-gray-600 */}
          <p className="text-center sm:text-left">
            © {currentYear} UXGENIE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
