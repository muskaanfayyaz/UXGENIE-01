"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa"
import { toast } from "react-hot-toast"

export default function ContactUs() {
  const FORM_ENDPOINT = "https://formspree.io/f/mqayngrp"

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    profession: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        toast.success("Message sent successfully!")
        setForm({
          name: "",
          email: "",
          subject: "",
          profession: "",
          message: "",
        })
      } else toast.error("Failed to send message.")
    } catch {
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    {
      name: "WhatsApp Community",
      link: "https://chat.whatsapp.com/KYFXr2vQ0rR8hSe5s8quwM?mode=ac_t",
      icon: <FaWhatsapp className="text-green-400 w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/OfficialUxgenie/",
      icon: <FaFacebook className="text-blue-400 w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/uxginie2/",
      icon: <FaInstagram className="text-pink-400 w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
      name: "Twitter",
      link: "https://x.com/OfficialUxgenie",
      icon: <FaTwitter className="text-sky-400 w-8 h-8 sm:w-9 sm:h-9" />,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/company/uxgenie",
      icon: <FaLinkedin className="text-blue-500 w-8 h-8 sm:w-9 sm:h-9" />,
    },
  ]

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden transition-colors duration-500">
      {/* 🌈 Background */}
      <div
        className="absolute inset-0 z-0 transition-all duration-700 bg-gradient-to-br from-white via-[#f4f7fb] to-[#e9eef5]"
      />

      {/* 🌟 Content Container */}
      <div className="relative z-10 max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 2xl:px-28">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1
            className="font-bold leading-snug text-gray-900"
            style={{
              fontFamily: "Parabole, sans-serif",
              fontSize: "clamp(2rem, 4vw, 4.5rem)",
            }}
          >
            📬 Get in Touch with{" "}
            <span className="text-[#00509E]">UXGENIE</span>
          </h1>
          <p
            className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700"
          >
            Have a project in mind or just want to say hello? Fill the form or
            connect through our platforms.
          </p>
        </motion.div>

        {/* 🧩 Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-start">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl p-6 sm:p-8 md:p-10 shadow-lg border backdrop-blur-md transition-all duration-300 bg-white border-gray-200"
          >
            <div className="flex flex-col gap-5 sm:gap-6">
              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  required
                  placeholder={
                    field.charAt(0).toUpperCase() + field.slice(1).toLowerCase()
                  }
                  value={form[field as keyof typeof form]}
                  onChange={handleChange}
                  className="px-4 py-3.5 rounded-xl border w-full outline-none transition text-base sm:text-lg bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#00509E]/40"
                />
              ))}

              {/* Profession Dropdown */}
              <select
                name="profession"
                required
                value={form.profession}
                onChange={handleChange}
                className="px-4 py-3.5 rounded-xl border w-full outline-none cursor-pointer transition text-base sm:text-lg bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#00509E]/40"
              >
                <option value="">Select Profession</option>
                <option>Python Developer</option>
                <option>Next.js Developer</option>
                <option>Full Stack Developer</option>
                <option>Frontend Developer</option>
                <option>Agentic AI Developer</option>
                <option>Graphic Designer</option>
              </select>

              {/* Message */}
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className="px-4 py-3.5 rounded-xl border w-full outline-none resize-none transition text-base sm:text-lg bg-gray-50 border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#00509E]/40"
              ></textarea>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={loading}
                className="bg-[#00509E] text-white py-3.5 rounded-xl font-semibold text-lg sm:text-xl hover:bg-[#003f7d] shadow-md transition disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </motion.form>

          {/* Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6 sm:gap-7 md:gap-8"
          >
            {contacts.map(({ name, link, icon }, idx) => (
              <motion.a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <Card
                  className="flex items-center gap-4 sm:gap-6 p-5 sm:p-6 md:p-7 rounded-2xl border shadow-md transition-all duration-300 bg-white border-gray-200 hover:border-[#00509E]/40"
                >
                  {icon}
                  <div>
                    <h3
                      className="font-semibold text-base sm:text-lg md:text-xl text-gray-800"
                    >
                      {name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#00509E] font-medium">
                      Click to Connect
                    </p>
                  </div>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}