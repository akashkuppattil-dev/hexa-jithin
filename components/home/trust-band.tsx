"use client"

import { useEffect, useRef, useState } from "react"
import { Star, Truck, Wrench, Shield } from "lucide-react"

const trustItems = [
  {
    icon: Star,
    title: "4.5★ TrustScore",
    subtitle: "4,000+ Workshops",
    color: "text-[#09757a]",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    subtitle: "PAN India Service",
    color: "text-blue-400",
  },
  {
    icon: Wrench,
    title: "Tool Specialist",
    subtitle: "Expert Support",
    color: "text-zinc-400",
  },
  {
    icon: Shield,
    title: "GST Verified",
    subtitle: "B2B Manufacturer",
    color: "text-emerald-400",
  },
]

export function TrustBand() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 bg-background border-y border-border relative overflow-hidden h-[240px] md:h-[260px] lg:h-[280px] transition-colors">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[100%] bg-gradient-to-r from-transparent via-[#09757a]/5 to-transparent pointer-events-none" />

      {/* Floating Styles */}
      <style jsx>{`
        @keyframes float1 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(10px, -20px) } 50% { transform: translate(-5px, 15px) } 75% { transform: translate(-15px, -10px) } }
        @keyframes float2 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(-15px, 20px) } 50% { transform: translate(15px, -15px) } 75% { transform: translate(8px, 15px) } }
        @keyframes float3 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(20px, 15px) } 50% { transform: translate(-8px, -20px) } 75% { transform: translate(-20px, 8px) } }
        @keyframes float4 { 0%, 100% { transform: translate(0, 0) } 25% { transform: translate(-15px, -20px) } 50% { transform: translate(20px, 8px) } 75% { transform: translate(8px, -15px) } }
        
        .animate-float-1 { animation: float1 10s ease-in-out infinite; }
        .animate-float-2 { animation: float2 11s ease-in-out infinite reverse; }
        .animate-float-3 { animation: float3 12s ease-in-out infinite; }
        .animate-float-4 { animation: float4 13s ease-in-out infinite reverse; }
        
        .pause-animation:hover { animation-play-state: paused; }
      `}</style>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 w-full max-w-6xl mx-auto">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className={`group relative flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-xl bg-card border border-border hover:bg-secondary hover:border-[#09757a]/40 transition-all duration-500 shadow-2xl backdrop-blur-xl animate-float-${(index % 4) + 1} pause-animation z-10 aspect-square text-center max-w-[140px] md:max-w-none mx-auto active:scale-95`}
              style={{
                animationDelay: `${index * 0.7}s`,
              }}
            >
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-xl bg-background border border-border group-hover:border-[#09757a]/50 group-hover:bg-[#09757a]/10 transition-all duration-500 shadow-xl mb-1">
                <item.icon className={`h-5 w-5 md:h-7 md:w-7 ${item.color} group-hover:text-[#09757a] transition-colors duration-500`} />
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-black text-foreground text-[10px] md:text-xs lg:text-base uppercase tracking-wider leading-tight mb-0.5 group-hover:text-[#09757a] transition-colors">{item.title}</h3>
                <p className="text-[9px] md:text-[10px] text-muted-foreground font-bold uppercase tracking-[0.2em] group-hover:text-[#09757a] transition-colors">{item.subtitle}</p>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 right-0 w-10 h-10 pointer-events-none overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-4 h-4 bg-[#09757a] rotate-45 translate-x-2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
