"use client"

import StatsCounter from "@/components/about/stats-counter"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Award, ChevronLeft, ChevronRight, Eye, MapPin, Rocket, Target, Truck, Users, Wrench, ShieldCheck, Star } from "lucide-react"
import Image from "next/image"
import React, { useState } from "react"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { useEffect } from "react"

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
  const [foundersIndex, setFoundersIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-rotate trust items
  useEffect(() => {
    const timer = setInterval(() => {
      setTrustIndex((prev) => (prev + 1) % trustItems.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  // Trust items
  const trustItems = [
    {
      icon: "Star",
      title: "4.5★ TrustScore",
      description: "4,000+ Workshops",
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "PAN India Service",
    },
    {
      icon: "Wrench",
      title: "Tool Specialist",
      description: "Expert Support",
    },
    {
      icon: "ShieldCheck",
      title: "GST Verified",
      description: "B2B Manufacturer",
    },
  ]

  // Founders data
  const founders = [
    {
      name: "Jithin Mullasseri Chulliyil",
      role: "Co-Founder of Hexamech",
      image: "/images/jithin-mullasseri.jpg",
    },
    {
      name: "Lineesh TP",
      role: "Co-Founder of Hexamech",
      image: "/images/lineesh-tp.jpg",
    },
    {
      name: "Shaibeesh TP",
      role: "Co-Founder of Hexamech",
      image: "/images/shaibeesh-tp.jpg",
    },
  ]

  // Handle touch for carousels
  const handleTrustTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleTrustTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleTrustSwipe()
  }
  const handleTrustSwipe = () => {
    const isLeftSwipe = touchStart - touchEnd > 50
    const isRightSwipe = touchEnd - touchStart > 50
    if (isLeftSwipe) {
      setTrustIndex((prev) => (prev + 1) % trustItems.length)
    }
    if (isRightSwipe) {
      setTrustIndex((prev) => (prev - 1 + trustItems.length) % trustItems.length)
    }
  }

  const handleFoundersTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const handleFoundersTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX)
    handleFoundersSwipe()
  }
  const handleFoundersSwipe = () => {
    const isLeftSwipe = touchStart - touchEnd > 50
    const isRightSwipe = touchEnd - touchStart > 50
    if (isLeftSwipe) {
      setFoundersIndex((prev) => (prev + 1) % founders.length)
    }
    if (isRightSwipe) {
      setFoundersIndex((prev) => (prev - 1 + founders.length) % founders.length)
    }
  }

  return (
    <div className="pt-2 sm:pt-4 md:pt-18 w-full overflow-x-hidden bg-gradient-to-br from-[#0f172a] via-[#0b0c10] to-[#0f172a] min-h-screen">
      {/* Background Patterns */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Dynamic Glow Elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="relative py-4 md:py-10 overflow-hidden z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
            <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">Trusted Since 2023</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter uppercase leading-tight">
            Powering India's Workshops with <span className="text-orange-500">Professional Tools</span>
          </h1>
          <p className="text-sm md:text-base text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed italic">
            Hexamech Linich Tools is Kerala's leading B2B automotive tools supplier, delivering genuine equipment to over 4,000 workshops across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-3">
              <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Our Identity</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter uppercase transition-all duration-300">Who We Are</h2>
            <div className="space-y-4 text-sm md:text-base text-slate-400 leading-relaxed">
              <p>
                <strong className="text-white">Hexamech Linich Tools</strong> was founded in 2023 in Chulliparamba, Kerala — with a single mission: to provide automotive workshops with reliable access to genuine, professional-grade tools at wholesale prices.
              </p>
              <p>
                We are not just a supplier; we are a <strong className="text-white">trusted partner</strong> to workshops, service centers, and industrial buyers across India. Today, we proudly serve <strong className="text-orange-500">4,000+ workshops</strong> with over <strong className="text-orange-500">1,000+ SKUs</strong> from world-renowned brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase">Why Workshops Trust <span className="text-orange-500">Hexamech</span></h2>
            <p className="text-slate-400 text-xs md:text-sm italic">
              The Hexamech difference.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {trustItems.map((item) => {
              const IconComponent = icons[item.icon as keyof typeof icons]
              return (
                <div key={item.title} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 hover:border-orange-500/40 transition-all duration-700 group rounded-xl p-6 flex flex-col items-center text-center shadow-xl">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-orange-600 blur-2xl opacity-0 group-hover:opacity-10 transition-opacity" />
                    <div className="relative w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-xl">
                      {IconComponent && React.createElement(IconComponent, { className: "h-6 w-6" })}
                    </div>
                  </div>
                  <h3 className="font-black text-sm text-slate-100 mb-2 uppercase tracking-tight group-hover:text-orange-500 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">{item.description}</p>
                </div>
              )
            })}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="bg-[#1a2235] border border-orange-500/20 rounded-xl p-6 text-center flex-1 h-40 flex flex-col justify-center items-center shadow-2xl shadow-orange-500/5">
                <h3 className="font-black text-white text-base mb-2 uppercase tracking-tight">{trustItems[trustIndex].title}</h3>
                <p className="text-sm text-slate-400">{trustItems[trustIndex].description}</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
              <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em]">Leadership</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase">Meet the <span className="text-orange-500">Founders</span></h2>
            <p className="text-slate-400 text-xs md:text-sm max-w-2xl mx-auto italic">
              Visionaries driving the automotive tools revolution in India.
            </p>
          </div>

          {/* Desktop Grid (3 Columns) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-slate-900/40 backdrop-blur-md border border-slate-800/50 hover:border-orange-500/30 transition-all rounded-xl overflow-hidden shadow-xl">
                <div className="flex flex-col items-center p-6 text-center">
                  <div className="relative w-40 h-40 mb-4">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="object-cover object-top rounded-full border-4 border-slate-700 shadow-md"
                    />
                  </div>
                  <h3 className="text-xl font-black text-white mb-1 uppercase tracking-tight">{founder.name}</h3>
                  <p className="text-orange-400 font-bold text-sm">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile/Tab View: Vertical Stacks */}
          <div className="md:hidden space-y-4">
            {founders.map((founder) => (
              <div key={founder.name} className="bg-[#1a2235] border border-slate-700/50 rounded-xl p-6 shadow-2xl">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={founder.image || "/placeholder.svg"}
                    alt={founder.name}
                    fill
                    className="object-cover object-top rounded-full border-4 border-slate-700 shadow-md"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{founder.name}</h3>
                  <p className="text-orange-400 font-bold text-xs">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE HEXAMECH TEAM */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-3">
            <span className="text-[9px] font-black text-orange-400 uppercase tracking-widest">Our People</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tighter uppercase">The Hexamech <span className="text-orange-500">Team</span></h2>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed italic">
            Behind every successful delivery is a dedicated team of professionals who understand the automotive industry from the ground up: technical experts, procurement specialists, and logistics coordinators working to help workshops operate efficiently.
          </p>
        </div>
      </section>

      {/* MISSION / VISION / FUTURE */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase">What Drives Us <span className="text-orange-500">Forward</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1a2235]/80 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/40 transition-all rounded-xl p-6 shadow-xl border-l-4 border-l-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <Target className="h-6 w-6 text-orange-500" />
                <h3 className="font-black text-white text-lg uppercase tracking-tight">Our Mission</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                To empower automotive workshops across India with genuine tools, expert guidance, and reliable service.
              </p>
            </div>

            <div className="bg-[#1a2235]/80 backdrop-blur-md border border-slate-700/50 hover:border-blue-500/40 transition-all rounded-xl p-6 shadow-xl border-l-4 border-l-blue-500">
              <div className="flex items-center gap-3 mb-3">
                <Eye className="h-6 w-6 text-blue-400" />
                <h3 className="font-black text-white text-lg uppercase tracking-tight">Our Vision</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                To become India's most trusted B2B automotive tools supplier — recognized for integrity and lasting partnerships.
              </p>
            </div>

            <div className="bg-[#1a2235]/80 backdrop-blur-md border border-slate-700/50 hover:border-orange-500/40 transition-all rounded-xl p-6 shadow-xl border-l-4 border-l-orange-500">
              <div className="flex items-center gap-3 mb-3">
                <Rocket className="h-6 w-6 text-orange-500" />
                <h3 className="font-black text-white text-lg uppercase tracking-tight">Our Future</h3>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Expand to 5,000+ SKUs, establish regional distribution centers, and serve 25,000+ workshops.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 bg-gradient-to-r from-orange-600 to-orange-500 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black mb-1 text-white uppercase tracking-tight">Hexamech by the Numbers</h2>
              <p className="text-white/80 text-sm font-medium">Trust reflected in growth.</p>
            </div>
            <div className="flex-1 w-full md:w-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat) => (
                  <StatsCounter key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT */}
      <section className="py-8 md:py-12 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-black text-white mb-2 tracking-tighter uppercase">Visit <span className="text-orange-500">Us</span></h2>
            <p className="text-slate-400 text-xs md:text-sm italic">Based in Kerala, serving workshops across India.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-slate-900/40 backdrop-blur-md border border-slate-800/50 hover:border-orange-500/40 transition-all rounded-xl p-6 flex flex-col items-center text-center shadow-xl">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="font-black text-lg mb-2 text-white uppercase tracking-tight">Head Office</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Door No 17/346, Chulliparamba<br />
                Near Farook College<br />
                <span className="font-bold text-orange-400">Calicut, Kerala – India</span>
              </p>
            </div>

            <div className="group bg-slate-900/40 backdrop-blur-md border border-slate-800/50 hover:border-orange-500/40 transition-all rounded-xl p-6 flex flex-col items-center text-center shadow-xl">
              <div className="w-14 h-14 bg-orange-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Truck className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="font-black text-lg mb-2 text-white uppercase tracking-tight">Delivery Coverage</h3>
              <div className="flex flex-col items-center gap-2 w-full max-w-[200px]">
                <div className="bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide w-full">Kerala – Fast Delivery</div>
                <div className="bg-blue-500/20 text-blue-400 border border-blue-500/30 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wide w-full">All India Shipping</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
