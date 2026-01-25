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

  return (
    <section className="relative min-h-[500px] h-fit lg:h-[80vh] flex flex-col justify-center overflow-hidden bg-white py-8 sm:py-12 lg:py-0">
      {/* Hero Background - Animated Logo Wallpaper */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        {/* Large Animated Logo Background - Desktop */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center opacity-[0.08] animate-slow-zoom pointer-events-none transform scale-125">
          <Image
            src="/hexamech-logo.png"
            alt="Hexamech Branding Wallpaper"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Mobile Background - Static & Clean */}
        <div className="lg:hidden absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          <Image
            src="/hexamech-logo.png"
            alt="Hexamech Branding Wallpaper"
            fill
            className="object-contain scale-125"
            priority
          />
        </div>

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-0" />

        {/* Minimal Decorative Touches */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#09757a]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center text-center space-y-6 sm:space-y-8 lg:space-y-10">

          {/* Tech Typography */}
          <div className={`space-y-4 sm:space-y-5 lg:space-y-6 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#111] leading-[1.1] sm:leading-[1.05] tracking-tighter uppercase px-2 sm:px-0">
              Premium <span className="hidden sm:inline"><br /></span>
              <span className="text-[#09757a]">Industrial</span> Solutions.
            </h1>
            <p className="max-w-xl sm:max-w-2xl lg:max-w-3xl mx-auto text-[12px] xs:text-[13px] sm:text-[14px] md:text-[15px] lg:text-base font-semibold text-muted-foreground leading-relaxed px-4">
              Supplying India's automotive and manufacturing sectors with precision-engineered equipment from global technology leaders.
            </p>
          </div>


          {/* Sleek CTAs */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} w-full sm:w-auto px-4`}>
            <Link href="/shop" className="group w-full sm:w-auto">
              <Button className="bg-[#09757a] hover:bg-[#111] text-white w-full sm:w-auto px-10 lg:px-12 h-12 lg:h-14 text-[11px] lg:text-xs font-black uppercase tracking-widest rounded-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3">
                Shop Catalog <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/brands" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-10 lg:px-12 h-12 lg:h-14 text-[11px] lg:text-xs font-black uppercase tracking-widest rounded-lg border-border bg-slate-100 text-[#111] hover:bg-slate-200 hover:text-[#111] transition-all">
                Explore Our Brands
              </Button>
            </Link>
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
        @media (max-width: 1023px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
           html {
             scroll-behavior: smooth;
             -webkit-overflow-scrolling: touch;
           }
        }
      `}</style>

      {/* Subtle Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-slate-100/50" />
    </section>
  )
}
