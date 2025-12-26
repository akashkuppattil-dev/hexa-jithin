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
    title: "Phone Support",
    value: "+91 75106 38693",
    href: "tel:+917510638693",
    description: "Call our sales team for immediate assistance",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Business",
    value: "+91 75106 38693",
    href: "https://wa.me/917510638693?text=Hi%20Hexamech%2C%20I%27m%20interested%20in%20your%20products",
    description: "Fast RFQs & bulk enquiries via WhatsApp",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hexamechlinichtools@gmail.com",
    href: "mailto:hexamechlinichtools@gmail.com",
    description: "Detailed product or dealership enquiries",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon – Sat | 9 AM – 7 PM",
    description: "Response within 30 minutes",
  },
]

const whyContactUs = [
  {
    icon: Zap,
    title: "Quick Response",
    description: "Get quotes within 30 minutes",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Personal manager for bulk orders",
  },
  {
    icon: Headphones,
    title: "Expert Guidance",
    description: "Technical advice from pros",
  },
  {
    icon: CheckCircle,
    title: "Verified Supplier",
    description: "GST registered business",
  },
]

export function ContactClientPage() {
  const [currentAdvantage, setCurrentAdvantage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAdvantage((prev) => (prev + 1) % whyContactUs.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7886594826486!2d75.99156897507685!3d11.280481188914985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65c0b5e5a5b0b%3A0x5e5a5b0b5e5a5b0b!2sHexamech%20Linich%20Tools!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`
  const googleMapsLink = `https://maps.app.goo.gl/oAKCXkhXS9HwkDNs6`

  return (
    <div className="pt-12 sm:pt-14 md:pt-16 bg-gradient-to-br from-[#0f172a] via-[#0b0c10] to-[#0f172a] min-h-screen">
      {/* Background Patterns */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Dynamic Glow Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
            <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em]">Core Advantage</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tighter uppercase leading-none">
            Get in Touch with <span className="text-orange-500">Hexamech</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-2xl mx-auto italic">
            We're here to help with your automotive tools needs. Reach out for quotes, technical support, or bulk orders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-start mb-20">

            {/* RIGHT COLUMN: Contact Info ("Connect Directly") - TOP ON MOBILE */}
            <div className="space-y-8 order-1 lg:order-2 w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
                  <span className="text-[9px] font-black text-blue-400 uppercase tracking-widest">Connect Directly</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">Direct Communication</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div key={method.title} className="bg-[#1a2235] border border-slate-700/50 hover:border-orange-500/40 transition-all rounded-2xl p-6 flex items-start gap-5 shadow-lg group">
                        <div className="p-3 bg-slate-800/50 rounded-xl shrink-0 group-hover:bg-orange-500/20 transition-colors">
                          <Icon className="h-6 w-6 text-orange-500" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-black text-white text-sm uppercase tracking-wide mb-1">{method.title}</h4>
                          {method.href ? (
                            <a href={method.href} className="text-lg text-blue-400 hover:text-blue-300 font-bold break-all block">{method.value}</a>
                          ) : (
                            <p className="text-lg text-slate-300 font-bold">{method.value}</p>
                          )}
                          <p className="text-xs text-slate-500 font-medium mt-1">{method.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* LEFT COLUMN: Contact Form - SECOND ON MOBILE */}
            <div className="order-2 lg:order-1 w-full">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-3">
                <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Get in Touch</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase">
                Request a Quote / Business Enquiry
              </h2>
              <p className="text-sm md:text-base text-slate-400 font-medium mb-8 italic">
                Submit your requirement and our team will get back to you within <strong className="text-orange-500">30 minutes</strong> during business hours.
              </p>

              <div className="bg-[#1a2235]/90 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 md:p-8 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* "Why Hexamech?" Section - Moved Below */}
          <div className="border-t border-white/5 pt-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-3">
                <span className="text-[9px] font-black text-green-400 uppercase tracking-widest">Why Hexamech?</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">The Professional Advantage</h2>
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {whyContactUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-slate-900/40 border border-slate-800/50 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-slate-800/40 transition-colors group hover:-translate-y-1 duration-300 shadow-lg">
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors mb-4">
                      <Icon className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-black text-white text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile View: Auto-sliding Carousel */}
            <div className="md:hidden relative px-4 overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentAdvantage * 100}%)` }}
              >
                {whyContactUs.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="w-full shrink-0 px-2">
                      <div className="bg-[#1a2235] border border-slate-800/50 p-8 rounded-2xl flex flex-col items-center text-center shadow-2xl">
                        <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 mb-6">
                          <Icon className="h-8 w-8 text-orange-500" />
                        </div>
                        <h3 className="font-black text-white text-lg uppercase tracking-wider mb-3">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">Find Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-tighter uppercase">Visit Our Location</h2>
            <p className="text-sm text-slate-400 font-medium italic">
              {CONTACT.BUSINESS_ADDRESS}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Maps Embed */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 rounded-xl overflow-hidden shadow-xl">
              <div className="relative w-full h-64 sm:h-80 md:h-96">
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

            {/* Map Info Card */}
            <div className="bg-[#1a2235] border border-slate-700/50 rounded-xl p-6 shadow-xl flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg shrink-0">
                    <MapPin className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 uppercase tracking-tight">Business Address</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{CONTACT.BUSINESS_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-500/10 rounded-lg shrink-0">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2 uppercase tracking-tight">Business Hours</h3>
                    <p className="text-sm text-slate-400">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-sm text-slate-400">Sunday: Closed</p>
                  </div>
                </div>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-all text-sm font-bold uppercase tracking-wide shadow-lg"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
