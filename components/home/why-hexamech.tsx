"use client"

import { Card } from "@/components/ui/card"
import { ShieldCheck, Truck, Users, Wrench, Globe, Clock, CheckCircle2 } from "lucide-react"
import React from "react"

const features = [
  {
    icon: ShieldCheck,
    title: "GST Verified B2B",
    points: [
      "100% Tax Compliant Operations",
      "Official Business Registration",
      "Instant B2B Digital Invoicing"
    ],
    color: "text-[#09757a]",
    bg: "bg-[#09757a]/10",
  },
  {
    icon: Truck,
    title: "Express Logistics",
    points: [
      "24-48 Hour Order Dispatch",
      "PAN India Doorstep Delivery",
      "Real-time Shipment Tracking"
    ],
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wrench,
    title: "Tool Specialists",
    points: [
      "Product Expert Consultation",
      "Garage Setup Planning",
      "On-site Tool Demonstrations"
    ],
    color: "text-[#09757a]",
    bg: "bg-[#09757a]/10",
  },
  {
    icon: Clock,
    title: "24/7 Digital Support",
    points: [
      "Dedicated WhatsApp Support",
      "Priority Problem Resolution",
      "Technical Guidance Anytime"
    ],
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "National Supply",
    points: [
      "Serving 4000+ Workshop Hubs",
      "Direct Manufacturer Links",
      "Regional Hub Distribution"
    ],
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Users,
    title: "Expert Team",
    points: [
      "20+ Years Industry Tenure",
      "Certified Service Engineers",
      "Advanced Equipment Training"
    ],
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
]

export function WhyHexamech() {
  const [activeIndex, setActiveIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 md:py-20 bg-background overflow-hidden relative transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded mb-4">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">The Hexamech Advantage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            Why Professionals <span className="text-[#09757a]">Choose Us</span>
          </h2>
          <p className="text-foreground text-sm font-black uppercase tracking-widest max-w-2xl mx-auto">
            Setting the standard in automotive and industrial tool distribution for over two decades.
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border border-border rounded-2xl p-6 lg:p-8 relative overflow-hidden group hover:border-[#09757a]/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#09757a]/5 blur-3xl group-hover:bg-[#09757a]/20 transition-all" />

              <div className="flex items-center gap-4 mb-6">
                <div className={`h-11 w-11 shrink-0 rounded-xl ${feature.bg} flex items-center justify-center border border-zinc-100/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h3 className="text-base lg:text-lg font-black text-foreground uppercase tracking-tight leading-none group-hover:text-[#09757a] transition-colors">{feature.title}</h3>
              </div>

              <div className="space-y-3 relative z-10">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-2.5 group/point">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#09757a] mt-0.5 shrink-0 opacity-70 group-hover/point:opacity-100 transition-opacity" />
                    <span className="text-foreground text-[11px] lg:text-xs font-black leading-tight">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#09757a] group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Mobile View - Auto-moving Carousel */}
        <div className="md:hidden relative h-[260px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-card border border-border rounded-2xl p-7 flex flex-col items-start shadow-md transition-all duration-1000 ${index === activeIndex ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-full opacity-0 scale-95'}`}
            >
              <div className="flex items-center gap-4 mb-6 w-full pb-4 border-b border-border/50">
                <div className={`h-10 w-10 rounded-xl ${feature.bg} flex items-center justify-center`}>
                  <feature.icon className={`h-5 w-5 ${feature.color}`} />
                </div>
                <h3 className="text-sm font-black text-foreground uppercase tracking-tight">{feature.title}</h3>
              </div>

              <div className="space-y-3.5 w-full">
                {feature.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#09757a] shrink-0" />
                    <span className="text-foreground text-[11px] font-black leading-none">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* Progress Indicators */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 focus:outline-none">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-6 bg-[#09757a]' : 'w-2 bg-border'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
