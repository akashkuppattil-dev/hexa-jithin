"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const customers = [
  { name: "Mahindra", logo: "/images/customers/mahindra.jpeg" },
  { name: "A.M. Motors", logo: "/images/customers/am-motors.png" },
  { name: "Amana Toyota", logo: "/images/customers/amana-toyota.png" },
  { name: "Luxon Tata", logo: "/images/customers/luxon-tata.jpeg" },
  { name: "APCO Holdings", logo: "/images/customers/apco.jpeg" },
  { name: "Classic Hyundai", logo: "/images/customers/classic-hyundai.jpeg" },
  { name: "Indus Motors", logo: "/images/customers/indus-motors.jpg" },
  { name: "Popular Vehicles", logo: "/images/customers/popular-vehicles.webp" },
  { name: "Palal Toyota", logo: "/images/customers/palal-toyota.png" },
  { name: "Toyota", logo: "/images/customers/toyota.jpeg" },
  { name: "Eram Motors", logo: "/images/customers/eram-motors.jpeg" },
  { name: "Bridgeway", logo: "/images/customers/bridgeway.jpeg" },
  { name: "DKH Kia", logo: "/images/customers/dkh-kia.jpg" },
].filter((customer) => customer.logo && customer.logo.trim() !== "")

export function TrustedCustomersSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Duplicate list to ensure seamless loop
  const duplicatedCustomers = [...customers, ...customers, ...customers]

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden relative border-t border-border transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#09757a]/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />

      <div className="w-full px-4 md:px-12 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded mb-3">
          <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">Global Network</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black text-foreground mb-2 tracking-tighter uppercase leading-none">
          Trusted by <span className="text-[#09757a]">Industry Leaders</span>
        </h2>
        <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-3xl mx-auto mb-10">
          Powering the largest automotive service networks across South India.
        </p>

        {/* Infinite Scrolling Marquee */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee group-hover:pause gap-6">
            {duplicatedCustomers.map((customer, index) => (
              <div
                key={`${customer.name}-${index}`}
                className="relative flex-shrink-0 w-32 h-20 md:w-48 md:h-32 flex items-center justify-center bg-white rounded-xl border border-border shadow-md overflow-hidden"
              >
                {/* Fixed visibility by ensuring high contrast on background */}
                <div className="w-full h-full relative z-10 p-2">
                  <Image
                    src={customer.logo || "/placeholder.svg"}
                    alt={customer.name}
                    fill
                    className="object-contain transition-transform hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 128px, 192px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays for Fade Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-20 pointer-events-none" />
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .group-hover:pause:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
