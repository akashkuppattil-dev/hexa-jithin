"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { categories } from "@/lib/products"

export function CategoriesGrid() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return
      if (window.innerWidth < 640) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else if (window.innerWidth < 1280) setItemsToShow(3)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 768) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % categories.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const getVisibleCategories = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, categories.length); i++) {
      items.push(categories[(currentIndex + i) % categories.length])
    }
    return items
  }

  // Mapping real product images to categories for a better look
  const categoryImages: Record<string, string> = {
    "collision-repair": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    "welding": "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    "spray-guns": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "lifting": "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    "transmission": "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
    "pneumatic": "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800",
    "hydraulic": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "painting": "https://images.unsplash.com/photo-1572819411640-0b16d6e5e55e?auto=format&fit=crop&q=80&w=800",
    "measurement": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    "power-tools": "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800",
    "hand-tools": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
    "cleaning": "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800",
    "tyre-service": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800",
  }

  const getCategoryImage = (id: string) => {
    return categoryImages[id] || `https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800&sig=${id}`
  }

  return (
    <section className="py-10 md:py-16 bg-background overflow-hidden relative transition-colors">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />

      <div className="w-full px-4 md:px-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-[#09757a]/20 rounded mb-4">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">Professional Inventory</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-4 tracking-tighter uppercase leading-none">
            Explore Our <span className="text-[#09757a]">Specialized</span> Toolsets
          </h2>
          <p className="text-foreground text-sm font-black uppercase tracking-widest leading-relaxed">
            Wholesale distribution of premium diagnostic and industrial toolsets.
          </p>
        </div>

        <div className="hidden md:flex flex-shrink-0 mb-1">
          <Link href="/shop">
            <Button className="h-10 px-8 bg-foreground hover:bg-[#09757a] text-background border border-transparent font-bold text-[9px] uppercase tracking-[0.2em] rounded transition-all shadow-lg">
              View All Categories
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile View: 2x2 Grid (Static) */}
      <div className="md:hidden px-4 grid grid-cols-2 gap-4 mb-8">
        {categories.slice(0, 4).map((category, idx) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.id}`}
            className="group relative h-56 overflow-hidden rounded-xl border border-border shadow-md active:scale-95 transition-transform"
          >
            <Image
              src={getCategoryImage(category.id)}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-[#09757a] mb-1">Series 0{idx + 1}</p>
              <h3 className="text-sm font-black uppercase tracking-tighter text-white leading-tight">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
        <div className="col-span-2 mt-4">
          <Link href="/shop" className="block w-full">
            <Button variant="outline" className="w-full h-12 border-[#09757a]/20 text-[#09757a] font-black uppercase tracking-widest text-[11px] rounded-lg">
              View Full Collection
            </Button>
          </Link>
        </div>
      </div>

      {/* Desktop/Tablet View: Carousel */}
      <div className="hidden md:block relative group/carousel">
        {/* Navigation Buttons */}
        <div className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-[#09757a] hover:text-white transition-all shadow-xl"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>
        <div className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20">
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border-border bg-background/80 backdrop-blur-sm text-foreground hover:bg-[#09757a] hover:text-white transition-all shadow-xl"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </Button>
        </div>

        <div className="px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {getVisibleCategories().map((category, idx) => (
            <Link
              key={`${category.id}-${idx}`}
              href={`/shop?category=${category.id}`}
              className="group relative w-full h-[340px] md:h-[420px] rounded-xl overflow-hidden shadow-xl border border-border animate-in fade-in duration-500"
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
