"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShieldCheck, Truck, Users, Wrench, Globe, Clock } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "GST Verified B2B",
    description: "Fully compliant industrial wholesale operations across PAN India.",
    color: "text-[#09757a]",
    bg: "bg-[#09757a]/10",
  },
  {
    icon: Truck,
    title: "Express Logistics",
    description: "Real-time tracking and priority delivery for critical equipment needs.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Wrench,
    title: "Tool Specialists",
    description: "Expert consultation on diagnostic systems and garage installations.",
    color: "text-[#09757a]",
    bg: "bg-[#09757a]/10",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock technical assistance for industrial tools.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Globe,
    title: "PAN India Supply",
    description: "Seamless distribution network serving 4000+ service centers.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Users,
    title: "Specialist Team",
    description: "Decades of experience in automotive tool engineering and supply.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
]

export function WhyHexamech() {
  return (
    <section className="py-20 bg-background overflow-hidden relative transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded mb-4">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">The Hexamech Advantage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            Why Professionals <span className="text-[#09757a]">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest max-w-2xl mx-auto">
            Setting the standard in automotive and industrial tool distribution for over two decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-card border border-border rounded-xl p-6 relative overflow-hidden group hover:border-[#09757a]/30 transition-all duration-500 shadow-sm hover:shadow-xl"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#09757a]/5 blur-3xl group-hover:bg-[#09757a]/20 transition-all" />

              <div className={`h-12 w-12 rounded-lg ${feature.bg} flex items-center justify-center mb-6 border border-zinc-100 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>

              <h3 className="text-lg font-black text-foreground mb-2 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground text-xs font-semibold leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#09757a] group-hover:w-full transition-all duration-500" />
            </Card>
          ))}
        </div>

        {/* Mobile View - Enhanced Carousel/Grid */}
        <div className="lg:hidden mt-12 grid grid-cols-1 gap-3">
          {features.slice(0, 3).map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-center gap-4 shadow-sm">
              <div className={`h-10 w-10 shrink-0 rounded-lg ${feature.bg} flex items-center justify-center`}>
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
              </div>
              <div>
                <h4 className="text-[10px] font-bold text-foreground uppercase tracking-wider">{feature.title}</h4>
                <p className="text-[9px] text-muted-foreground font-medium">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
