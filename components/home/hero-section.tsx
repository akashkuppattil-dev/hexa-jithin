"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, MessageCircle, Search, ShieldCheck, CheckCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Image from "next/image"

const heroImages = [
  "/images/hero/hero-bg-1.jpg",
  "/images/hero/hero-bg-2.jpg"
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[65vh] md:h-[75vh] lg:h-[85vh] min-h-[480px] md:min-h-[600px] flex flex-col justify-center items-center overflow-hidden bg-zinc-950">

      {/* Optimized Background Composition */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg-2.jpg"
          alt="Hexamech Hero Background"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_10%,_#09090b_95%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl pt-6 pb-4 md:pt-10 md:pb-8">
        <div className="flex flex-col items-center text-center">

          {/* Cursive Welcome Text */}
          <h2 className={`text-3xl md:text-5xl text-orange-500 mb-4 transition-all duration-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`} style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
            Welcome to Hexamech
          </h2>

          {/* Search Bar - Full Length, Decreased Height */}
          <div className={`w-full max-w-md md:max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (searchQuery.trim()) {
                  router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
                }
              }}
              className="relative group"
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 md:h-5 md:w-5 text-zinc-500 group-focus-within:text-orange-500 transition-colors" />
              </div>
              <Input
                type="text"
                placeholder="Search tools, brands, models..."
                className="w-full h-10 md:h-12 pl-12 md:pl-14 pr-24 md:pr-28 bg-black/40 border-white/10 text-white text-sm md:text-base placeholder:text-zinc-500 rounded-xl md:rounded-[1.25rem] focus:border-orange-500/50 focus:bg-black/60 transition-all backdrop-blur-xl shadow-2xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-5 md:px-8 bg-orange-600 hover:bg-orange-500 text-white rounded-lg md:rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest shadow-lg shadow-orange-900/40 transition-all active:scale-95 flex items-center justify-center"
              >
                Search
              </button>
            </form>
          </div>

          {/* Main Title - Professional Supplier */}
          <h1 className={`flex flex-col items-center font-black tracking-tighter text-white mb-3 md:mb-4 uppercase transition-all duration-300 delay-75 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
            <div className="flex flex-col items-center text-center gap-0 relative">
              <span className="text-sm leading-[0.9] sm:text-lg md:text-xl lg:text-2xl font-black text-white tracking-tighter uppercase z-10 drop-shadow-2xl">
                Professional Automotive
              </span>
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-orange-500 my-[-3px] md:my-[-10px] relative z-20 drop-shadow-lg" style={{ fontFamily: 'var(--font-great-vibes), cursive' }}>
                &
              </span>
              <span className="text-xs leading-[0.9] sm:text-lg md:text-xl lg:text-2xl font-black text-zinc-300 tracking-tighter uppercase z-10 drop-shadow-2xl">
                Industrial Tools Supplier
              </span>
            </div>

            <div className="mt-8 mb-8 inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-full backdrop-blur-md transition-all hover:border-orange-500/40 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <p className="text-orange-500 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs group-hover:text-orange-400 transition-colors">
                Kerala's Premier Wholesale Partner
              </p>
            </div>
          </h1>

          {/* Trust Strip with Icons */}
          <div className={`flex flex-wrap justify-center gap-4 md:gap-8 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <ShieldCheck className="h-4 w-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">GST-Verified Supplier</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <CheckCircle className="h-4 w-4 text-blue-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">Authorised Brands</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg">
              <Truck className="h-4 w-4 text-orange-500" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide">PAN-India Delivery</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
