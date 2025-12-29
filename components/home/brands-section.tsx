"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const brandImageFiles = [
  "black-decker.jpg",
  "blue-point-snapon.jpg",
  "chicago-pneumatic.jpg",
  "devilbiss-refinish.jpg",
  "dewalt.jpg",
  "force.jpg",
  "german-polish.jpg",
  "karcher.jpg",
  "kovax.jpg",
  "linich-logo.jpg",
  "menzerna-logo.jpg",
  "mr-tools.jpg",
  "progrip.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.05_50cf4637.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_24105a75.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.06_27e1b7c5.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_309c0c3a.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_8f761bd4.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.07_f9e6ad78.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_4ab9343f.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.08_8163f38d.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_74981a3c.jpg",
  "WhatsApp Image 2025-12-18 at 18.01.09_c255bd56.jpg",
];

const brands = brandImageFiles.map((file) => ({
  name: file.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
  logo: `/images/brands/${file}`,
}));

export function BrandsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Duplicate list to ensure seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands]

  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-background border-t border-border transition-colors">
      {/* Background Subtle Patterns */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />

      {/* Dynamic Glow Elements */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#09757a]/5 blur-[150px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#09757a]/5 blur-[150px] rounded-full pointer-events-none opacity-50" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded-full mb-4 shadow-sm">
            <Star className="h-2.5 w-2.5 text-[#09757a] fill-current" />
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em]">Authorized Inventory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-2 tracking-tighter uppercase leading-none">
            Our Brand <span className="text-[#09757a]">Partners</span>
          </h2>
          <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest opacity-80 max-w-2xl mx-auto">
            Curated selection of high-performance global brands.
          </p>
        </div>

        {/* FEATURED BRAND: LINICH TOOLS */}
        <div className="mb-12">
          <Link href="/shop?brand=Linich">
            <div className="max-w-5xl mx-auto p-[1px] bg-gradient-to-r from-border via-border/50 to-border rounded-2xl group/featured shadow-xl">
              <Card className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-10 transition-all hover:bg-accent/5 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#09757a]/5 blur-[80px] rounded-full pointer-events-none group-hover/featured:bg-[#09757a]/10 transition-all duration-500" />

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 relative z-10">
                  <div className="relative w-48 h-28 md:w-64 md:h-36 flex-shrink-0 group-hover/featured:scale-105 transition-transform duration-500 p-6 bg-white rounded-xl shadow-2xl flex items-center justify-center">
                    <Image
                      src="/images/brands/linich-logo.jpg"
                      alt="LINICH Primary Partner"
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="text-center md:text-left flex-1">
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tighter uppercase italic">LINICH TOOLS</h3>
                      <Badge className="bg-[#09757a] text-white border-none text-[8px] font-bold uppercase tracking-widest px-3 py-1 shadow-md shadow-[#09757a]/20">Exclusive Partner</Badge>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed max-w-xl mb-6">
                      Standardizing industrial durability across India. Exclusive supplier of precision-engineered equipment for modern workshops.
                    </p>
                    <div className="inline-flex items-center gap-3 text-[#09757a] font-black text-[10px] uppercase tracking-[0.4em] group-hover/featured:gap-5 transition-all">
                      Discover the Professional Line <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </Link>
        </div>

        {/* Infinite Scrolling Logo Marquee */}
        <div className="relative flex overflow-hidden group/marquee py-2">
          <div className="flex animate-marquee group-hover/marquee:pause gap-8">
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="relative flex-shrink-0 w-28 h-28 md:w-40 md:h-32 flex items-center justify-center p-4 bg-background rounded-2xl border border-border shadow-md overflow-hidden"
              >
                <div className="absolute inset-0 bg-background" />
                <div className="w-full h-full relative z-10">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain p-1.5"
                    sizes="(max-width: 768px) 112px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Fade Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-20 pointer-events-none" />
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .group-hover\/marquee\:pause:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>

        <div className="mt-12 text-center">
          <Link href="/shop" className="text-[10px] font-black text-zinc-500 hover:text-[#09757a] uppercase tracking-[0.4em] transition-all">
            Explore the complete brand portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
