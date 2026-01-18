"use client"

import type React from "react"
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { getProductsByCategory } from "@/lib/products"

export function TopProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)

  const topProducts = getProductsByCategory("measurement").concat(getProductsByCategory("welding")).slice(0, 10)

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

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) goToNext()
    if (distance < -50) goToPrev()
    setTouchStart(null)
    setTouchEnd(null)
  }

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % topProducts.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + topProducts.length) % topProducts.length)

  const getVisibleItems = () => {
    const items = []
    for (let i = 0; i < Math.min(itemsToShow, topProducts.length); i++) {
      items.push(topProducts[(currentIndex + i) % topProducts.length])
    }
    return items
  }

  const isDisabled = topProducts.length <= itemsToShow

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden relative border-t border-border transition-colors">
      {/* Light Pattern Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#09757a]/5 blur-[100px] rounded-full opacity-50 dark:opacity-20" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#09757a]/5 blur-[100px] rounded-full opacity-50 dark:opacity-20" />

      <div className="w-full px-4 md:px-12 relative z-10">

        {/* Section Header - Enhanced Typography */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded-full mb-3 shadow-sm">
            <Star className="h-2 w-2 text-[#09757a] fill-[#09757a]" />
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em] leading-none">Featured Series</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-foreground mb-2 tracking-tighter uppercase leading-none">
            Precision <span className="text-[#09757a]">Diagnostic Tools</span>
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm font-bold max-w-2xl mx-auto uppercase tracking-widest opacity-80">
            Engineered for Accuracy. Built for the Modern Workshop.
          </p>
        </div>

        {/* Mobile View: 2x2 Grid (Static) */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-8">
          {topProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Desktop/Tablet View: Carousel */}
        <div
          className="hidden sm:block relative group touch-pan-y px-4 md:px-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            disabled={isDisabled}
            className="hidden lg:flex absolute -left-6 xl:-left-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border text-[#09757a] transition-all hover:bg-[#09757a] hover:text-white shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {getVisibleItems().map((product, index) => (
              <div key={`${currentIndex}-${index}`} className="h-full">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            disabled={isDisabled}
            className="hidden lg:flex absolute -right-6 xl:-right-12 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background border border-border text-[#09757a] transition-all hover:bg-[#09757a] hover:text-white shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Link href="/shop">
            <Button size="lg" className="bg-foreground hover:bg-[#09757a] text-background font-bold uppercase tracking-[0.2em] text-[10px] px-8 h-10 rounded-md transition-all shadow-lg active:scale-95 group">
              Browse All Professional Tools
              <ArrowRight className="ml-3 h-3 w-3 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
