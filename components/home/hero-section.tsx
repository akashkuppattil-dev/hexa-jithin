"use client"

import { useEffect, useState, useRef } from "react"
import { Search, ShieldCheck, CheckCircle, Truck, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { products, categories, brands } from "@/lib/products"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [suggestions, setSuggestions] = useState<{ type: string, text: string, id: string }[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      const lowerQuery = debouncedQuery.toLowerCase()
      const newSuggestions: { type: string, text: string, id: string }[] = []

      products.forEach(p => {
        if (p.name.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'product', text: p.name, id: p.id })
        }
      })
      categories.forEach(c => {
        if (c.name.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'category', text: c.name, id: c.id })
        }
      })
      brands.forEach(b => {
        if (b.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'brand', text: b, id: b })
        }
      })

      setSuggestions(newSuggestions.slice(0, 6))
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [debouncedQuery])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearch = (e?: React.FormEvent, overrideQuery?: string) => {
    e?.preventDefault()
    const query = overrideQuery || searchQuery.trim()
    if (!query) return

    const lowerQuery = query.toLowerCase()
    const productMatch = products.find(p => p.name.toLowerCase() === lowerQuery)
    if (productMatch) {
      router.push(`/product/${productMatch.id}`)
      return
    }

    const categoryMatch = categories.find(c => c.name.toLowerCase() === lowerQuery)
    if (categoryMatch) {
      router.push(`/shop?category=${categoryMatch.id}`)
      return
    }

    const brandMatch = brands.find(b => b.toLowerCase() === lowerQuery)
    if (brandMatch) {
      router.push(`/shop?brand=${encodeURIComponent(brandMatch)}`)
      return
    }

    router.push(`/shop?search=${encodeURIComponent(query)}`)
  }

  const handleSuggestionClick = (suggestion: { type: string, text: string, id: string }) => {
    setSearchQuery(suggestion.text)
    setShowSuggestions(false)

    if (suggestion.type === 'product') {
      router.push(`/product/${suggestion.id}`)
    } else if (suggestion.type === 'category') {
      router.push(`/shop?category=${suggestion.id}`)
    } else if (suggestion.type === 'brand') {
      router.push(`/shop?brand=${encodeURIComponent(suggestion.id)}`)
    }
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[500px] h-fit lg:h-[80vh] flex flex-col justify-center overflow-hidden bg-white py-8 sm:py-12 lg:py-0">

      {/* Hero Background - Optimized with next/image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white" />

        {/* Static Mobile Background - Performance Optimized */}
        <div className="absolute right-0 top-0 w-full h-full lg:hidden overflow-hidden">
          <Image
            src={heroImages[0]}
            alt="Hexamech Industrial Tools"
            fill
            priority
            className="object-cover object-center opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white/90" />
        </div>

        {/* Animated Background Slider - Desktop Only */}
        <div className="absolute right-0 top-0 w-full lg:w-[60%] h-full hidden lg:block overflow-hidden">
          {heroImages.map((img, index) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentImageIndex ? 'opacity-90' : 'opacity-0'}`}
            >
              <Image
                src={img}
                alt={`Hero ${index + 1}`}
                fill
                priority={index === 0}
                className={`object-cover object-center transition-transform duration-[20000ms] ease-out ${index === currentImageIndex ? 'scale-110' : 'scale-100'}`}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          ))}
          {/* Subtle fade to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent w-1/2" />
        </div>

        {/* Minimal Decorative Touches */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#09757a]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 hidden lg:block" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-6">
        <div className="w-full flex justify-start">
          <div className={`max-w-3xl space-y-4 sm:space-y-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111] text-white text-[8px] font-black uppercase tracking-[0.25em] rounded">
              <span className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
              Verified Distributor
            </div>

            {/* Tech Typography - Shifted Left */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black text-[#111] leading-[0.9] tracking-tighter uppercase">
                Premium <br />
                <span className="text-[#09757a]">Industrial</span> <br />
                Solutions.
              </h1>
              <p className="max-w-lg text-[12px] sm:text-[13px] md:text-[14px] font-black text-[#111] uppercase tracking-wider leading-relaxed pt-2">
                Supplying India&apos;s automotive and manufacturing sectors with precision-engineered equipment from global technology leaders.
              </p>
            </div>

            {/* Context Chips - Scaled Down */}
            <div className="flex flex-wrap gap-4 sm:gap-6 py-3 sm:py-4 border-y border-border/40 max-w-fit">
              {[
                { label: "Products", val: "10,000+" },
                { label: "Partners", val: "25+ Brands" },
                { label: "Coverage", val: "Pan India" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-[0.15em]">{stat.label}</span>
                  <span className="text-base sm:text-lg font-black text-[#111] uppercase tracking-tighter">{stat.val}</span>
                </div>
              ))}
            </div>

            {/* Sleek CTAs - Slightly More Compact */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <Link href="/shop" className="group">
                <Button className="bg-[#09757a] hover:bg-[#111] text-white px-6 sm:px-8 h-11 sm:h-12 text-[9px] font-black uppercase tracking-widest rounded-lg shadow-xl active:scale-95 transition-all flex items-center gap-2 sm:gap-3">
                  Shop Catalog <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/brands">
                <Button variant="outline" className="px-6 sm:px-8 h-11 sm:h-12 text-[9px] font-black uppercase tracking-widest rounded-lg border-border bg-white text-[#111] hover:bg-[#111] hover:text-white transition-all">
                  Our Brand Partners
                </Button>
              </Link>
            </div>

            {/* Supporting Trust Bit */}
            <div className="flex items-center gap-4 pt-4 sm:pt-6">
              <p className="text-[8px] sm:text-[9px] font-black text-[#111] uppercase tracking-[0.2em]">Trusted By Professionals Nationwide</p>
              <div className="h-px w-16 sm:w-24 bg-zinc-200" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @media (min-width: 1024px) {
          .animate-slow-zoom {
            animation: slow-zoom 20s ease-in-out infinite;
          }
        }
        /* Mobile performance optimizations */
        @media (max-width: 1023px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          body {
            overscroll-behavior-y: none;
          }
          img, picture, video {
            will-change: auto;
          }
        }
      `}</style>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100/50" />
    </section>
  )
}
