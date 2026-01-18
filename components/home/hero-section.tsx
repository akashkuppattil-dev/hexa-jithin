"use client"

import { useEffect, useState, useRef } from "react"
import { Search, ShieldCheck, CheckCircle, Truck, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { products, categories, brands } from "@/lib/products"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestions, setSuggestions] = useState<{ type: string, text: string, id: string }[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)

    // Click outside to close suggestions
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle Input Change & Suggestions
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.length > 0) {
      const lowerQuery = query.toLowerCase()
      const newSuggestions: { type: string, text: string, id: string }[] = []

      // Products
      products.forEach(p => {
        if (p.name.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'product', text: p.name, id: p.id })
        }
      })
      // Categories
      categories.forEach(c => {
        if (c.name.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'category', text: c.name, id: c.id })
        }
      })
      // Brands
      brands.forEach(b => {
        if (b.toLowerCase().includes(lowerQuery)) {
          newSuggestions.push({ type: 'brand', text: b, id: b })
        }
      })

      setSuggestions(newSuggestions.slice(0, 6)) // Limit to 6 suggestions
      setShowSuggestions(true)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  // Handle Search Submission
  const handleSearch = (e?: React.FormEvent, overrideQuery?: string) => {
    e?.preventDefault()
    const query = overrideQuery || searchQuery.trim()
    if (!query) return

    const lowerQuery = query.toLowerCase()

    // 1. Direct Product Match
    const productMatch = products.find(p => p.name.toLowerCase() === lowerQuery)
    if (productMatch) {
      router.push(`/product/${productMatch.id}`)
      return
    }

    // 2. Direct Category Match
    const categoryMatch = categories.find(c => c.name.toLowerCase() === lowerQuery)
    if (categoryMatch) {
      router.push(`/shop?category=${categoryMatch.id}`)
      return
    }

    // 3. Direct Brand Match
    const brandMatch = brands.find(b => b.toLowerCase() === lowerQuery)
    if (brandMatch) {
      router.push(`/shop?brand=${encodeURIComponent(brandMatch)}`) // Brands often have spaces
      return
    }

    // 4. Fallback to Search Page
    router.push(`/search?q=${encodeURIComponent(query)}`)
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

  /* Background Slider Logic */
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const heroImages = [
    "/images/hero/hero-1.png",
    "/images/hero/hero-2.png",
    "/images/hero/hero-3.png"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-[480px] h-[55vh] sm:h-[60vh] md:h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-background py-8 sm:py-0">

      {/* Dynamic Background Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((img, index) => (
          <div
            key={img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10000ms]"
              style={{ backgroundImage: `url(${img})` }}
            />
            {/* 10% Subtle Dark Overlay for 'Clean' look and text contrast */}
            <div className="absolute inset-0 bg-black/10" />

          </div>
        ))}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-none">
        <div className="flex flex-col items-center text-center">

          {/* Search Bar - Full Width Top */}
          <div ref={wrapperRef} className={`relative w-full max-w-[1600px] mb-12 sm:mb-16 transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-y-0 shadow-[0_20px_60px_-10px_rgba(9,117,122,0.4)] sm:shadow-[0_30px_100px_-10px_rgba(9,117,122,0.5)]' : 'opacity-0 translate-y-8'}`}>
            <form
              onSubmit={handleSearch}
              className="relative flex items-center h-12 sm:h-14 md:h-16 bg-background dark:bg-card rounded-xl p-2 overflow-hidden border border-[#09757a]/20 shadow-2xl z-20"
            >
              <div className="pl-4 sm:pl-6 flex items-center pointer-events-none">
                <Search className="h-5 w-5 sm:h-6 sm:w-6 text-[#09757a]" />
              </div>

              <Input
                type="text"
                placeholder="Search tools, brands..."
                className="flex-1 h-full border-none bg-transparent text-foreground text-base sm:text-lg md:text-xl placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 px-4 sm:px-6 font-bold"
                value={searchQuery}
                onChange={handleInputChange}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
              />

              <button
                type="submit"
                className="h-full px-6 sm:px-10 md:px-14 bg-[#09757a] hover:bg-[#075f63] text-white font-black text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] rounded-lg transition-all active:scale-95 shadow-md flex items-center justify-center border border-[#09757a]"
              >
                Search
              </button>
            </form>

            {/* Suggestions Dropdown */}
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-xl shadow-2xl overflow-hidden z-30 animate-in fade-in zoom-in-95 duration-200">
                <ul className="py-2">
                  {suggestions.map((suggestion, idx) => (
                    <li key={idx}>
                      <button
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-6 py-3 hover:bg-muted/50 transition-colors flex items-center justify-between group"
                      >
                        <span className="font-bold text-foreground text-sm sm:text-base">
                          {suggestion.text}
                        </span>
                        <span className="text-[10px] uppercase font-black tracking-widest text-[#09757a]/70 group-hover:text-[#09757a] flex items-center gap-1">
                          {suggestion.type} <ArrowRight className="h-3 w-3" />
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Cursive Welcome - Changed to White for readability on images */}
          <h2 className={`text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white drop-shadow-2xl mb-6 sm:mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
            Welcome to <span className="text-orange-500 drop-shadow-none">Hexamech</span>
          </h2>

          {/* Main Title - White with shadow */}
          <h1 className={`flex flex-col items-center font-black tracking-tight text-white mb-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl uppercase leading-tight drop-shadow-md mb-2">
              Authorised Automotive
            </span>
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl uppercase leading-tight tracking-tight drop-shadow-md">
              & Industrial <span className="text-orange-500 drop-shadow-none">Tools</span> Supplier
            </span>
          </h1>

          {/* Hero CTAs */}
          <div className={`flex flex-row items-center gap-2 sm:gap-4 mb-10 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/shop" className="flex-1 sm:w-auto">
              <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-3 sm:px-8 h-12 sm:h-14 text-[10px] sm:text-sm font-black uppercase tracking-widest sm:tracking-[0.2em] rounded-xl shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-2 sm:gap-3">
                Shop <span className="hidden xs:inline">Collection</span> <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </Link>
            <Link href="/brands" className="flex-1 sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto px-3 sm:px-8 h-12 sm:h-14 text-[10px] sm:text-sm font-black uppercase tracking-widest sm:tracking-[0.2em] rounded-xl border-white/30 text-white bg-white/10 backdrop-blur-md hover:bg-white hover:text-black active:scale-95 transition-all">
                Brands
              </Button>
            </Link>
          </div>

          {/* Trust Strip - Now Horizontal on Mobile */}
          <div className={`mt-6 sm:mt-10 flex flex-row justify-center items-center gap-3 sm:gap-6 md:gap-12 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {[
              { icon: ShieldCheck, text: "GST", fullText: "GST-Verified" },
              { icon: CheckCircle, text: "Authorised", fullText: "Authorised" },
              { icon: Truck, text: "PAN-India", fullText: "PAN-India" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-white group drop-shadow-md">
                <div className="h-7 w-7 sm:h-9 md:h-10 sm:w-9 md:w-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:border-orange-500 group-hover:bg-orange-500/10 transition-all shadow-md">
                  <item.icon className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                </div>
                <span className="text-[7px] sm:text-[10px] md:text-[11px] font-black uppercase tracking-widest sm:tracking-[0.2em]">
                  <span className="sm:hidden">{item.text}</span>
                  <span className="hidden sm:inline">{item.fullText}</span>
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
