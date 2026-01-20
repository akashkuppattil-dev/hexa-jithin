"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Award, ChevronLeft, ChevronRight, Eye, MapPin, Rocket, Target, Truck, Users, Wrench, ShieldCheck, Star, Factory, Landmark, Globe } from "lucide-react"
import Image from "next/image"
import React, { useState, useEffect } from "react"

const stats = [
  { label: "Authorized Brands", value: "25", suffix: "+", iconName: "Award" as const },
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
  Factory,
  Landmark,
  Globe,
}

export default function AboutClientPage() {
  const trustItems = [
    { icon: "Star", title: "4.5★ TrustScore", description: "Trusted by 4,000+ Workshops nationwide" },
    { icon: "Truck", title: "Fast Delivery", description: "PAN India Service with real-time tracking" },
    { icon: "Wrench", title: "Tool Specialist", description: "Certified expert support for every tool" },
    { icon: "ShieldCheck", title: "Genuine Quality", description: "100% authentic B2B manufacturing tools" },
  ]

  const founders = [
    { name: "Jithin Mullasseri Chulliyil", role: "Co-Founder", image: "/images/jithin-mullasseri.jpg" },
    { name: "Lineesh TP", role: "Co-Founder", image: "/images/lineesh-tp.jpg" },
    { name: "Shaibeesh TP", role: "Co-Founder", image: "/images/shaibeesh-tp.jpg" },
  ]

  return (
    <div className="w-full bg-background min-h-screen text-foreground transition-colors overflow-x-hidden">

      {/* HERO SECTION - More Compact */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#09757a]/20 via-background to-background" />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#09757a]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#09757a]/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] sm:text-xs font-bold text-[#09757a] uppercase tracking-widest leading-none flex items-center gap-1.5">
              <Star className="h-3 w-3" /> Established 2023
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-foreground mb-6 tracking-tighter uppercase leading-[0.9] px-2 max-w-5xl mx-auto drop-shadow-sm">
            Powering India&apos;s Workshops with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09757a] to-[#0bc0c8]">Professional Tools</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-foreground font-black max-w-2xl mx-auto leading-relaxed px-2">
            Hexamech Linich Tools is Kerala&apos;s premier B2B automotive ecosystem, delivering industrial excellence to over 4,000 workshops across the nation.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <div className="h-0.5 w-12 bg-[#09757a] rounded-full mx-auto" />
          </div>
        </div>
      </section>

      {/* IDENTITY SECTION - Tighter Split Layout */}
      <section className="py-12 sm:py-16 md:py-20 bg-secondary/30 relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border rounded-full">
                <span className="text-[10px] sm:text-xs font-black text-foreground uppercase tracking-widest leading-none">The Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tighter uppercase leading-none">Who We Are</h2>
              <div className="space-y-4 text-sm sm:text-base text-foreground leading-relaxed font-bold">
                <p className="border-l-2 border-[#09757a] pl-4 italic">
                  &quot;Access to professional tools shouldn&apos;t be a luxury for any Indian workshop.&quot;
                </p>
                <p>
                  <strong className="text-foreground">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba, Kerala — with a single mission: to revolutionize the automotive service industry by providing reliable access to genuine, professional-grade tools at wholesale prices.
                </p>
                <p>
                  What started as a regional enterprise has rapidly evolved. Today, we proudly serve <span className="text-[#09757a] font-black">4,000+ workshops</span> with a curated inventory of over <span className="text-[#09757a] font-black">1,000+ specialized SKUs</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white relative group border border-border shadow-inner">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80')] bg-cover bg-center transition-all duration-700" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#09757a] flex items-center justify-center text-white shrink-0">
                      <Landmark className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-black uppercase text-sm tracking-tight text-foreground">Kozhikode, Kerala</h4>
                      <p className="text-[10px] text-[#09757a] font-black uppercase tracking-widest">Our Strategic Hub</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - Tighter Grid */}
      <section className="py-16 sm:py-20 border-y border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#09757a]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">The <span className="text-[#09757a]">Hexamech</span> Edge</h2>
            <p className="text-xs sm:text-sm text-foreground font-black uppercase tracking-[0.3em]">Defining Industry Standards</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trustItems.map((item, idx) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <div key={item.title} className="group relative">
                  <div className="absolute inset-0 bg-[#09757a] opacity-0 group-hover:opacity-[0.03] transition-opacity rounded-3xl" />
                  <div className="bg-card border border-border/50 rounded-3xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-2xl hover:border-[#09757a]/30 transition-all duration-500 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-[#09757a]/5 border border-[#09757a]/10 flex items-center justify-center text-[#09757a] group-hover:bg-[#09757a] group-hover:text-white mb-6 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 shadow-inner">
                      {IconComponent && <IconComponent className="h-7 w-7" />}
                    </div>
                    <h3 className="font-black text-foreground text-base lg:text-lg uppercase tracking-tight mb-3 group-hover:text-[#09757a] transition-colors leading-tight">{item.title}</h3>
                    <p className="text-foreground text-xs leading-relaxed font-black">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOUNDERS SECTION - Tighter Presentation */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">The <span className="text-[#09757a]">Visionaries</span></h2>
            <p className="text-xs sm:text-sm text-foreground font-black uppercase tracking-[0.3em]">Driving Automotive Innovation</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col items-center text-center group cursor-default">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-8">
                  {/* Decorative Rings */}
                  <div className="absolute inset-0 border border-[#09757a]/20 rounded-full group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-2 border border-[#09757a]/40 rounded-full group-hover:rotate-180 transition-transform duration-1000 border-dashed" />

                  <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-background bg-white shadow-2xl z-10">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover object-top scale-110 group-hover:scale-125 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09757a]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-black text-foreground uppercase tracking-tight mb-2 leading-tight group-hover:text-[#09757a] transition-colors duration-300">{founder.name}</h3>
                <div className="h-0.5 w-8 bg-[#09757a]/30 mb-2 group-hover:w-16 transition-all duration-500" />
                <p className="text-[10px] md:text-xs font-black text-[#09757a] uppercase tracking-[0.4em]">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION - Tighter Grid */}
      <section className="py-16 sm:py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background border border-border/60 rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-t-[#09757a] transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#09757a]/10 flex items-center justify-center text-[#09757a] group-hover:bg-[#09757a] group-hover:text-white transition-colors shadow-sm">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-black text-foreground text-xl uppercase tracking-tighter">Our Mission</h3>
              </div>
              <p className="text-foreground text-sm lg:text-base leading-relaxed font-black">
                To empower Indian workshops with genuine, high-performance tools, expert industrial guidance, and unmatched wholesale distribution. We build the backbone for automotive excellence.
              </p>
            </div>

            <div className="bg-background border border-border/60 rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-t-[#0bc0c8] transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0bc0c8]/10 flex items-center justify-center text-[#0bc0c8] group-hover:bg-[#0bc0c8] group-hover:text-white transition-colors shadow-sm">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-black text-foreground text-xl uppercase tracking-tighter">Our Vision</h3>
              </div>
              <p className="text-foreground text-sm lg:text-base leading-relaxed font-black">
                To become Asia&apos;s most influential B2B automotive gear supplier — recognized for industrial precision, unshakeable integrity, and universal accessibility.
              </p>
            </div>

            <div className="bg-background border border-border/60 rounded-3xl p-8 md:p-10 shadow-xl border-t-4 border-t-[#09757a] transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#09757a]/10 flex items-center justify-center text-[#09757a] group-hover:bg-[#09757a] group-hover:text-white transition-colors shadow-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-black text-foreground text-xl uppercase tracking-tighter">Our Future</h3>
              </div>
              <p className="text-foreground text-sm lg:text-base leading-relaxed font-black">
                Expanding our digital footprint to serve 25,000+ workshops across all 28 Indian states, while maintaining the personal touch of our Kerala roots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION - High Intensity */}
      <section className="py-20 sm:py-28 relative bg-[#09757a] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION - Tighter Style */}
      <section className="py-16 sm:py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-[#09757a] to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#09757a]/10 rounded-full mb-8 border border-[#09757a]/20 group hover:scale-110 transition-transform duration-500 shadow-xl">
            <MapPin className="h-8 w-8 text-[#09757a]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none px-4 flex flex-col gap-2">
            <span>Our Regional</span>
            <span className="text-[#09757a]">Command Center</span>
          </h2>
          <div className="max-w-xl mx-auto mb-10">
            <p className="text-sm sm:text-base md:text-lg text-foreground font-black uppercase tracking-widest leading-relaxed mb-2">Door No 17/346, Chulliparamba, Near Farook College</p>
            <p className="text-[#09757a] font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.5em] mt-4">Calicut, Kerala – India</p>
          </div>

          <a
            href="https://maps.google.com/?q=Hexamech+Linich+Tools+Chulliparamba+Calicut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-black text-xs uppercase tracking-widest rounded-xl hover:bg-[#09757a] hover:text-white transition-all duration-300 group shadow-xl active:scale-95 transition-all"
          >
            <MapPin className="h-4 w-4" />
            View on Map
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="h-px w-24 bg-[#09757a]/30 mx-auto mt-12" />
        </div>
      </section>
    </div>
  )
}
