"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CONTACT, SOCIAL_LINKS } from "@/lib/constants"
import { categories } from "@/lib/products"
import { Facebook, Instagram, Mail, MapPin, Phone, Send, Twitter, Youtube, Linkedin, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground pt-8 sm:pt-10 md:pt-12 pb-4 sm:pb-5 md:pb-6 overflow-hidden relative border-t border-border transition-colors">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-[#09757a]/5 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="w-full px-3 sm:px-4 md:px-8 lg:px-12 relative z-10">
        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8 mb-6 sm:mb-8 md:mb-10">

          {/* Company Info */}
          <div className="flex flex-col gap-3 sm:gap-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col leading-none group">
              <span className="text-lg sm:text-xl font-black tracking-tighter uppercase font-sans text-foreground group-hover:text-[#09757a] transition-colors">
                HEXAMECH
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold text-foreground uppercase tracking-[0.3em] sm:tracking-[0.4em] mt-0.5 sm:mt-1 opacity-80">
                LINICH TOOLS
              </span>
            </Link>
            <p className="text-gray-600 text-[11px] sm:text-xs font-semibold leading-relaxed max-w-xs">
              Kerala&apos;s leading B2B automotive tools specialist. Delivering precision engineered diagnostic systems and industrial equipment across India.
            </p>
            <div className="flex gap-2 sm:gap-3">
              {[
                { icon: Facebook, href: SOCIAL_LINKS.FACEBOOK },
                { icon: Instagram, href: SOCIAL_LINKS.INSTAGRAM },
                { icon: Youtube, href: SOCIAL_LINKS.YOUTUBE },
                { icon: Linkedin, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-secondary border border-border flex items-center justify-center text-[#09757a] hover:bg-[#09757a] hover:text-white hover:border-[#09757a] transition-all transform hover:-translate-y-1 shadow-sm active:scale-90"
                >
                  <social.icon className="h-3 w-3 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#09757a]">Navigation</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {["Home", "Shop", "Brands", "About", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-[#09757a] transition-colors text-[11px] sm:text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2 group"
                  >
                    <span className="h-0.5 w-0 bg-[#09757a] transition-all group-hover:w-2 sm:group-hover:w-3" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#09757a]">Key Categories</h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/shop?category=${category.id}`}
                    className="text-gray-600 hover:text-[#09757a] transition-colors text-[11px] sm:text-[12px] font-semibold uppercase tracking-wide flex items-center gap-2 group"
                  >
                    <span className="h-0.5 w-0 bg-[#09757a] transition-all group-hover:w-2 sm:group-hover:w-3" />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 col-span-2 lg:col-span-1">
            <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wide text-[#09757a]">Contact Us</h4>
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* Service */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#09757a]">Service & Repairs</p>
                <a href={`tel:${CONTACT.SERVICE_PHONE}`} className="text-[11px] sm:text-[12px] text-gray-700 font-semibold hover:text-[#09757a] transition-colors">{CONTACT.SERVICE_PHONE}</a>
                <a href={`mailto:${CONTACT.SERVICE_EMAIL}`} className="text-[11px] sm:text-[12px] text-gray-700 font-semibold hover:text-[#09757a] transition-colors break-all">{CONTACT.SERVICE_EMAIL}</a>
              </div>

              {/* Support */}
              <div className="flex flex-col gap-1.5">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#09757a]">Support & Help</p>
                <div className="flex flex-col gap-0.5">
                  <a href={`tel:${CONTACT.SUPPORT_PHONES[0]}`} className="text-[11px] sm:text-[12px] text-gray-700 font-semibold hover:text-[#09757a] transition-colors">{CONTACT.SUPPORT_PHONES[0]}</a>
                  <a href={`tel:${CONTACT.SUPPORT_PHONES[1]}`} className="text-[11px] sm:text-[12px] text-gray-700 font-semibold hover:text-[#09757a] transition-colors">{CONTACT.SUPPORT_PHONES[1]}</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1.5 pt-1">
                <p className="text-[9px] font-bold uppercase tracking-wide text-[#09757a]">Headquarters</p>
                <p className="text-[11px] sm:text-[12px] text-gray-700 font-semibold leading-tight italic">{CONTACT.BUSINESS_ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 sm:pt-6 md:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[9px] sm:text-[10px] font-semibold text-gray-600 uppercase tracking-wide text-center md:text-left">
            © {currentYear} HEXAMECH LINICH TOOLS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4 sm:gap-6 md:gap-8">
            <Link href="/privacy" className="text-[9px] sm:text-[10px] font-semibold text-gray-600 hover:text-[#09757a] uppercase tracking-wide transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[9px] sm:text-[10px] font-semibold text-gray-600 hover:text-[#09757a] uppercase tracking-wide transition-colors">Terms</Link>
            <Link href="/gst" className="text-[9px] sm:text-[10px] font-semibold text-gray-600 hover:text-[#09757a] uppercase tracking-wide transition-colors">GST Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
