"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT } from "@/lib/constants"
import {
  CheckCircle,
  Clock,
  ExternalLink,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useEffect, useState } from "react"

const contactMethods = [
  {
    icon: Phone,
    title: "General Enquiries",
    value: CONTACT.OFFICIAL_EMAIL,
    href: `mailto:${CONTACT.OFFICIAL_EMAIL}`,
    subValue: CONTACT.OFFICIAL_PHONE,
    subHref: `tel:${CONTACT.OFFICIAL_PHONE.replace(/\s+/g, '')}`,
    description: "Official business and sales enquiries",
  },
  {
    icon: Headphones,
    title: "Service",
    value: CONTACT.SERVICE_EMAIL,
    href: `mailto:${CONTACT.SERVICE_EMAIL}`,
    subValue: CONTACT.SERVICE_PHONE,
    subHref: `tel:${CONTACT.SERVICE_PHONE}`,
    description: "Installation and repair services",
  },
  {
    icon: MessageCircle,
    title: "Support",
    value: CONTACT.SUPPORT_PHONES[0],
    href: `tel:${CONTACT.SUPPORT_PHONES[0]}`,
    subValue: CONTACT.SUPPORT_PHONES[1],
    subHref: `tel:${CONTACT.SUPPORT_PHONES[1]}`,
    description: "Technical help & general support",
  },
  {
    icon: MapPin,
    title: "Address",
    value: CONTACT.BUSINESS_ADDRESS,
    description: "Our main workshop & office",
  },
]

export function ContactClientPage() {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7886594826486!2d75.99156897507685!3d11.280481188914985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c0b5e5a5b0b%3A0x5e5a5b0b5e5a5b0b!2sHexamech%20Linich%20Tools!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`
  const googleMapsLink = `https://maps.app.goo.gl/oAKCXkhXS9HwkDNs6`

  return (
    <div className="pt-8 sm:pt-10 md:pt-12 bg-background min-h-screen transition-colors">
      {/* Background Patterns */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert" />

      {/* Hero Section */}
      <section className="py-4 sm:py-5 md:py-6 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8 text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-1.5 sm:mb-2 tracking-tighter uppercase leading-tight px-2">
            Contact <span className="text-[#09757a]">Hexamech</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-foreground font-black max-w-2xl mx-auto italic px-2">
            Professional automotive tools & workshop solutions. Reach out for service, support, or enquiries.
          </p>
        </div>
      </section>

      {/* Info Boxes Section */}
      <section className="py-6 sm:py-8 md:py-10 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <div key={method.title} className="bg-card border border-border hover:border-[#09757a]/40 transition-all rounded-lg sm:rounded-xl p-4 sm:p-5 flex flex-col items-center text-center shadow-md group">
                  <div className="p-2.5 sm:p-3 bg-[#09757a]/10 rounded-full mb-3 group-hover:bg-[#09757a] group-hover:text-white transition-all">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#09757a] group-hover:text-white" />
                  </div>
                  <h3 className="font-black text-foreground text-xs sm:text-sm uppercase tracking-wider mb-2">{method.title}</h3>
                  <div className="space-y-1">
                    {method.href ? (
                      <a href={method.href} className="text-sm sm:text-base text-foreground hover:text-[#09757a] font-black break-all block transition-colors leading-tight">{method.value}</a>
                    ) : (
                      <p className="text-sm sm:text-base text-foreground font-black leading-tight">{method.value}</p>
                    )}
                    {method.subValue && (
                      <a href={method.subHref} className="text-sm sm:text-base text-foreground hover:text-[#09757a] font-black block transition-colors leading-tight">{method.subValue}</a>
                    )}
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-black mt-2 uppercase tracking-tight">{method.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Grid: Map & Form */}
      <section className="py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
        <div className="w-full px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* LEFT COLUMN: Map & Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-wider">Find Us</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-foreground uppercase tracking-tight mb-4">Visit Our Location</h2>

                <div className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-lg mb-6">
                  <div className="relative w-full h-[300px] sm:h-[400px]">
                    <iframe
                      src={mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                      title="Hexamech Linich Tools Location"
                    />
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
                    {/* Address Detail */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#09757a]/10 rounded-lg">
                          <MapPin className="h-5 w-5 text-[#09757a]" />
                        </div>
                        <h4 className="font-black text-foreground text-xs sm:text-sm uppercase tracking-wider">Business Address</h4>
                      </div>
                      <p className="text-sm text-foreground font-black leading-relaxed italic border-l-2 border-[#09757a]/20 pl-4 py-1">
                        {CONTACT.BUSINESS_ADDRESS}
                      </p>
                    </div>

                    {/* Hours Detail */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-[#09757a]/10 rounded-lg">
                          <Clock className="h-5 w-5 text-[#09757a]" />
                        </div>
                        <h4 className="font-black text-foreground text-xs sm:text-sm uppercase tracking-wider">Business Hours</h4>
                      </div>
                      <div className="space-y-1.5 border-l-2 border-[#09757a]/20 pl-4 py-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground font-bold">Mon - Sat:</span>
                          <span className="text-foreground font-black">9:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-muted-foreground font-bold">Sunday:</span>
                          <span className="text-[#09757a]/70 font-black">Closed</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center pt-2 border-t border-border/50">
                    <a
                      href={googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-3.5 bg-[#09757a] hover:bg-[#075a5e] text-white rounded-lg font-black uppercase tracking-widest text-xs transition-all shadow-xl active:scale-95"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="lg:col-span-5">
              <div className="bg-card border border-border rounded-lg sm:rounded-xl p-6 sm:p-8 shadow-2xl sticky top-24">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-muted border border-border rounded mb-2 sm:mb-3">
                    <span className="text-[8px] sm:text-[9px] font-black text-foreground uppercase tracking-wider">Get in Touch</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-foreground tracking-tighter uppercase leading-tight mb-2">
                    Message Us
                  </h2>
                  <p className="text-xs text-muted-foreground font-black italic">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
