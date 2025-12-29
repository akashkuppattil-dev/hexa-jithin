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
    <div className="pt-8 sm:pt-10 md:pt-12 bg-background min-h-screen transition-colors">
      {/* Background Patterns */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert" />

      {/* Dynamic Glow Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-[#09757a]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-[#09757a]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="py-4 sm:py-5 md:py-6 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
            <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-[0.2em] sm:tracking-[0.3em]">Core Advantage</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-1.5 sm:mb-2 tracking-tighter uppercase leading-tight px-2">
            Get in Touch with <span className="text-[#09757a]">Hexamech</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium max-w-2xl mx-auto italic px-2">
            We're here to help with your automotive tools needs. Reach out for quotes, technical support, or bulk orders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-5 sm:py-6 md:py-8 relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8 items-start mb-8 sm:mb-10 md:mb-12">

            {/* RIGHT COLUMN: Contact Info ("Connect Directly") - TOP ON MOBILE */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 order-1 lg:order-2 w-full">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-muted border border-border rounded mb-2 sm:mb-3">
                  <span className="text-[8px] sm:text-[9px] font-black text-muted-foreground uppercase tracking-wider sm:tracking-widest">Connect Directly</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-foreground mb-3 sm:mb-4 uppercase tracking-tight">Direct Communication</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
                  {contactMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <div key={method.title} className="bg-card border border-border hover:border-[#09757a]/40 transition-all rounded-lg sm:rounded-xl p-3.5 sm:p-4 md:p-5 flex items-start gap-3 sm:gap-4 shadow-md sm:shadow-lg group active:scale-[0.99]">
                        <div className="p-2 sm:p-2.5 bg-background rounded-lg shrink-0 border border-border group-hover:bg-[#09757a] group-hover:text-white transition-all">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#09757a] group-hover:text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-black text-foreground text-[10px] sm:text-xs uppercase tracking-wide mb-0.5 sm:mb-1">{method.title}</h4>
                          {method.href ? (
                            <a href={method.href} className="text-sm sm:text-base text-foreground hover:text-[#09757a] font-bold break-all block transition-colors">{method.value}</a>
                          ) : (
                            <p className="text-sm sm:text-base text-foreground/80 font-bold">{method.value}</p>
                          )}
                          <p className="text-[9px] sm:text-[10px] text-muted-foreground font-medium mt-0.5">{method.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* LEFT COLUMN: Contact Form - SECOND ON MOBILE */}
            <div className="order-2 lg:order-1 w-full">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
                <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-wider sm:tracking-widest">Get in Touch</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-2 sm:mb-3 tracking-tighter uppercase leading-tight">
                Request a Quote / Business Enquiry
              </h2>
              <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground font-medium mb-4 sm:mb-5 md:mb-6 italic">
                Submit your requirement and our team will get back to you within <strong className="text-[#09757a]">30 minutes</strong> during business hours.
              </p>

              <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl sm:shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>

          {/* "Why Hexamech?" Section - Moved Below */}
          <div className="border-t border-border pt-8 sm:pt-10 md:pt-12">
            <div className="text-center mb-5 sm:mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
                <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-wider sm:tracking-widest">Why Hexamech?</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black text-foreground uppercase tracking-tight">The Professional Advantage</h2>
            </div>

            {/* Desktop View: Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {whyContactUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-card border border-border p-4 sm:p-5 rounded-xl flex flex-col items-center text-center hover:bg-secondary transition-colors group hover:-translate-y-1 duration-300 shadow-lg">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-[#09757a]/10 flex items-center justify-center shrink-0 border border-[#09757a]/20 group-hover:bg-[#09757a] transition-colors mb-2.5 sm:mb-3">
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#09757a] group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-foreground text-[10px] sm:text-[11px] uppercase tracking-wider mb-0.5 sm:mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-[9px] sm:text-[10px] leading-relaxed font-medium">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Mobile View: Grid instead of carousel for better UX */}
            <div className="md:hidden grid grid-cols-2 gap-2.5 sm:gap-3">
              {whyContactUs.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-card border border-border p-3.5 sm:p-4 rounded-lg flex flex-col items-center text-center shadow-md active:scale-[0.98]">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#09757a]/10 flex items-center justify-center border border-[#09757a]/20 mb-2 sm:mb-2.5">
                      <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-[#09757a]" />
                    </div>
                    <h3 className="font-black text-foreground text-[10px] sm:text-[11px] uppercase tracking-wide mb-0.5 leading-tight">{item.title}</h3>
                    <p className="text-muted-foreground text-[9px] sm:text-[10px] leading-relaxed font-medium">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-4 sm:py-5 md:py-6 relative z-10">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="text-center mb-4 sm:mb-5 md:mb-6">
            <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
              <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-[0.2em] sm:tracking-[0.3em]">Find Us</span>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black text-foreground mb-0.5 sm:mb-1 tracking-tighter uppercase">Visit Our Location</h2>
            <p className="text-[10px] sm:text-xs text-muted-foreground font-medium italic px-2">
              {CONTACT.BUSINESS_ADDRESS}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
            {/* Google Maps Embed */}
            <div className="bg-card border border-border rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl">
              <div className="relative w-full h-40 sm:h-48 md:h-64 lg:h-80">
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
            <div className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-lg sm:shadow-xl flex flex-col justify-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-[#09757a]/10 rounded-lg shrink-0">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#09757a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm uppercase tracking-tight">Business Address</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{CONTACT.BUSINESS_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="p-1.5 sm:p-2 bg-[#09757a]/10 rounded-lg shrink-0">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#09757a]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-0.5 sm:mb-1 text-xs sm:text-sm uppercase tracking-tight">Business Hours</h3>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-[#09757a] hover:bg-white hover:text-[#09757a] text-white rounded-lg transition-all text-[10px] sm:text-xs font-black uppercase tracking-wide shadow-lg border border-transparent hover:border-[#09757a] active:scale-95"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
