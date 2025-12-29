"use client"

import { Receipt, TrendingUp, Users } from "lucide-react"
import React from "react"

const businessDetails = [
  {
    icon: TrendingUp,
    label: "Annual Turnover",
    value: "1.5 - 10 Cr",
    color: "text-[#09757a]",
  },
  {
    icon: Users,
    label: "Team Strength",
    value: "25+ Specialists",
    color: "text-blue-400",
  },
  {
    icon: Receipt,
    label: "GST Registered",
    value: "32CWVPM3137R1ZP",
    color: "text-emerald-400",
  },
]

export function BusinessDetails() {
  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden relative border-t border-border transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#09757a]/5 blur-[120px] rounded-full pointer-events-none opacity-50 dark:opacity-20" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded mb-3 shadow-sm">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">Corporate Metrics</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-2 tracking-tighter uppercase leading-none">
            Business <span className="text-[#09757a]">Intelligence</span>
          </h2>
          <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-2xl mx-auto">
            Authorized wholesale operations serving 4,000+ service networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {businessDetails.map((detail, index) => {
            const IconComponent = detail.icon
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 md:p-8 flex flex-col items-center text-center shadow-md hover:border-[#09757a]/30 transition-all duration-500 group"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-[#09757a]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-background border border-border flex items-center justify-center ${detail.color} group-hover:bg-[#09757a] group-hover:text-white transition-all shadow-sm`}>
                    <IconComponent className="h-7 w-7 md:h-8 md:w-8" />
                  </div>
                </div>

                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-2 group-hover:text-[#09757a] transition-colors leading-none">
                  {detail.label}
                </p>
                <p className="font-bold text-lg md:text-xl text-foreground tracking-tight uppercase">
                  {detail.value}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center opacity-40">
          <p className="text-[9px] text-foreground font-bold uppercase tracking-[0.6em]">
            ISO 9001:2015 REGISTERED SUPPLY CHAIN
          </p>
        </div>
      </div>
    </section>
  )
}
