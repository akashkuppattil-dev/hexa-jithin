"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Award, ChevronLeft, ChevronRight, Eye, MapPin, Rocket, Target, Truck, Users, Wrench, ShieldCheck, Star } from "lucide-react"
import Image from "next/image"
import React, { useState, useEffect } from "react"

const stats = [
  { label: "Annual Turnover", value: "1.5-10", suffix: "Cr", iconName: "Award" as const },
  { label: "Team Strength", value: "25+", suffix: "+", iconName: "Users" as const },
  { label: "Tools & SKUs", value: "1000", suffix: "+", iconName: "Package" as const },
  { label: "Workshops Served", value: "4000", suffix: "+", iconName: "ThumbsUp" as const },
]

const icons = {
  Award,
  Truck,
  Wrench,
  Users,
  ShieldCheck,
  Star,
}

export default function AboutClientPage() {
  const [trustIndex, setTrustIndex] = useState(0)

  // Auto-rotate trust items
  useEffect(() => {
    const timer = setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustItems.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const trustItems = [
    { icon: "Star", title: "4.5★ TrustScore", description: "4,000+ Workshops" },
    { icon: "Truck", title: "Fast Delivery", description: "PAN India Service" },
    { icon: "Wrench", title: "Tool Specialist", description: "Expert Support" },
    { icon: "ShieldCheck", title: "GST Verified", description: "B2B Manufacturer" },
  ]

  const founders = [
    { name: "Jithin Mullasseri Chulliyil", role: "Co-Founder", image: "/images/jithin-mullasseri.jpg" },
    { name: "Lineesh TP", role: "Co-Founder", image: "/images/lineesh-tp.jpg" },
    { name: "Shaibeesh TP", role: "Co-Founder", image: "/images/shaibeesh-tp.jpg" },
  ]

  return (
    <div className="w-full bg-background min-h-screen text-foreground transition-colors">

      {/* HERO SECTION */}
      <section className="relative py-6 sm:py-8 md:py-12 lg:py-16 bg-secondary border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-2 sm:mb-3">
            <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-wider sm:tracking-widest leading-none">Established 2023</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground mb-2 sm:mb-3 tracking-tighter uppercase leading-tight px-2">
            Powering India&apos;s Workshops with <span className="text-[#09757a]">Professional Tools</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed px-2">
            Hexamech Linich Tools is Kerala&apos;s leading B2B automotive tools supplier, delivering genuine equipment to over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* IDENTITY SECTION */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-muted border border-border rounded mb-2 sm:mb-3">
            <span className="text-[8px] sm:text-[9px] font-black text-muted-foreground uppercase tracking-wider sm:tracking-widest leading-none">Our Identity</span>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-4 sm:mb-5 md:mb-6 tracking-tighter uppercase leading-tight">Who We Are</h2>
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-[13px] md:text-sm text-muted-foreground leading-relaxed font-medium px-2">
            <p>
              <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba, Kerala — with a single mission: to provide automotive workshops with reliable access to genuine, professional-grade tools at wholesale prices.
            </p>
            <p>
              Today, we proudly serve <span className="text-[#09757a] font-bold">4,000+ workshops</span> with over <span className="text-[#09757a] font-bold">1,000+ SKUs</span> from world-renowned brands.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-1.5 sm:mb-2 tracking-tighter uppercase leading-tight">The <span className="text-[#09757a]">Difference</span></h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-wider sm:tracking-widest opacity-80">Why workshops trust Hexamech.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {trustItems.map((item) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <div key={item.title} className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center text-center shadow-lg sm:shadow-2xl hover:border-[#09757a]/40 transition-all duration-500 group active:scale-[0.98]">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-background border border-border flex items-center justify-center text-[#09757a] group-hover:bg-[#09757a] group-hover:text-white mb-2.5 sm:mb-3 md:mb-4 transition-all">
                    {IconComponent && <IconComponent className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />}
                  </div>
                  <h3 className="font-black text-foreground text-[11px] sm:text-xs md:text-sm lg:text-base uppercase tracking-tight mb-0.5 sm:mb-1 group-hover:text-[#09757a] transition-colors leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-[9px] sm:text-[10px] md:text-xs leading-relaxed font-medium">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-1.5 sm:mb-2 tracking-tighter uppercase leading-tight">The <span className="text-[#09757a]">Visionaries</span></h2>
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-wider sm:tracking-widest opacity-80">Driving innovation in automotive sales.</p>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-5 md:gap-8">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center group">
                <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-3 sm:mb-4 md:mb-6 border-2 sm:border-3 md:border-4 border-border group-hover:border-[#09757a] transition-all duration-700 shadow-lg sm:shadow-xl md:shadow-2xl">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09757a]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-[10px] sm:text-xs md:text-sm lg:text-lg font-black text-foreground uppercase tracking-tight mb-0.5 sm:mb-1 leading-tight">{founder.name}</h3>
                <p className="text-[7px] sm:text-[8px] md:text-[9px] font-black text-[#09757a] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-8 sm:py-10 md:py-14 lg:py-16 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            <div className="bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-2xl border-l-[3px] border-l-[#09757a] group hover:border-[#09757a]/40 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#09757a]" />
                <h3 className="font-black text-foreground text-xs sm:text-sm md:text-base uppercase tracking-tight">Our Mission</h3>
              </div>
              <p className="text-muted-foreground text-[11px] sm:text-xs md:text-[13px] leading-relaxed font-medium">
                To empower workshops with genuine tools, expert guidance, and reliable service. We provide the infrastructure for automotive excellence.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-2xl border-l-[3px] border-l-muted-foreground group hover:border-muted-foreground/50 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <Eye className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-muted-foreground" />
                <h3 className="font-black text-foreground text-xs sm:text-sm md:text-base uppercase tracking-tight">Our Vision</h3>
              </div>
              <p className="text-muted-foreground text-[11px] sm:text-xs md:text-[13px] leading-relaxed font-medium">
                To become India&apos;s most trusted B2B tools supplier — recognized for integrity, availability, and industrial precision.
              </p>
            </div>

            <div className="bg-background border border-border rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-lg sm:shadow-2xl border-l-[3px] border-l-[#09757a] group hover:border-[#09757a]/40 transition-all active:scale-[0.99]">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 md:mb-4">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#09757a]" />
                <h3 className="font-black text-foreground text-xs sm:text-sm md:text-base uppercase tracking-tight">Our Future</h3>
              </div>
              <p className="text-muted-foreground text-[11px] sm:text-xs md:text-[13px] leading-relaxed font-medium">
                Expand to 5,000+ SKUs and serve 25,000+ workshops across all of India, setting the standard for tool distribution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-[#09757a]">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-2 sm:p-2.5 md:p-3 bg-[#09757a]/10 rounded-full mb-4 sm:mb-5 md:mb-6 border border-[#09757a]/20">
            <MapPin className="h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#09757a]" />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-foreground mb-1.5 sm:mb-2 tracking-tighter uppercase leading-tight">Head Office</h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium mb-0.5 sm:mb-1 uppercase tracking-wide px-2">Door No 17/346, Chulliparamba, Near Farook College</p>
          <p className="text-[#09757a] font-black text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em]">Calicut, Kerala – India</p>
        </div>
      </section>
    </div>
  )
}
