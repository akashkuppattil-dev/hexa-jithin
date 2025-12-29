"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { categories } from "@/lib/products"

export function CategoriesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  // Mapping real product images to categories for a better look
  const categoryImages: Record<string, string> = {
    "collision-repair": "/images/products/3-car-o-liner-ctr9.jpg",
    "welding": "/images/products/6-automig-mw-250.jpg",
    "spray-guns": "/images/products/18-sata-spray.jpg",
    "lifting": "/images/products/7-two-post-lift.jpg",
    "transmission": "/images/products/13-trans-jack-1t.jpg",
    "pneumatic": "/images/products/25-linich-compressor-50l.jpg",
    "hydraulic": "/images/products/15-press-20t.jpg",
    "painting": "/images/products/23-infrared-booth.jpg",
    "measurement": "/images/products/35-micrometer.jpg",
    "power-tools": "/images/products/39-bosch-drill.jpg",
    "special-tools": "/images/products/15-bearing-puller-set.jpg",
    "nitrogen": "/images/products/4-pcl-sumo-nitrogen-generator.jpg",
    "storage": "/images/products/45-tool-storage-chest.jpg",
  }

  const getCategoryImage = (id: string) => {
    return categoryImages[id] || `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&id=${id}`
  }

  return (
    <section className="py-20 bg-background overflow-hidden relative transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />

      <div className="w-full px-4 md:px-12 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-[#09757a]/20 rounded mb-4">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">Professional Inventory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            Explore Our <span className="text-[#09757a]">Specialized</span> Toolsets
          </h2>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest leading-relaxed">
            Wholesale distribution of premium diagnostic and industrial toolsets.
          </p>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/shop">
            <Button className="h-10 px-8 bg-foreground hover:bg-[#09757a] text-background border border-transparent font-bold text-[9px] uppercase tracking-[0.2em] rounded transition-all shadow-lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative group/carousel">
        {/* Side Buttons */}
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden xl:block">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            className="h-12 w-12 rounded-full border-border bg-background text-foreground hover:bg-[#09757a] hover:text-white transition-all shadow-xl"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 group-hover/carousel:opacity-100 transition-opacity hidden xl:block">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            className="h-12 w-12 rounded-full border-border bg-background text-foreground hover:bg-[#09757a] hover:text-white transition-all shadow-xl"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-8 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.id}`}
              className="group relative flex-shrink-0 w-[240px] md:w-[320px] h-[340px] md:h-[420px] rounded-xl overflow-hidden snap-start shadow-xl border border-border"
            >
              <Image
                src={getCategoryImage(category.id)}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#09757a] text-[9px] font-bold uppercase tracking-[0.4em] mb-2">Explore</p>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 uppercase tracking-tighter leading-none">{category.name}</h3>
                <div className="flex items-center gap-2 text-white text-[9px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Discover Tools <ArrowRight className="h-3 w-3 text-[#09757a]" />
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute top-0 left-0 w-2 h-0 bg-[#09757a] transition-all duration-500 group-hover:h-full" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
