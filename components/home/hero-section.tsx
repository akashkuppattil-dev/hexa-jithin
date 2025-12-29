"use client"

import { useEffect, useState } from "react"
import { Search, ShieldCheck, CheckCircle, Truck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-[480px] h-[55vh] sm:h-[60vh] md:h-[65vh] flex flex-col justify-center items-center overflow-hidden bg-background py-8 sm:py-0">

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20">
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#09757a]/20 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#09757a]/30 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] invert dark:invert-0" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-6xl">
        <div className="flex flex-col items-center text-center">

          {/* Cursive Welcome - Responsive sizing */}
          <h2 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-[#09757a] mb-4 sm:mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`} style={{ fontFamily: '"Great Vibes", cursive' }}>
            Welcome to Hexamech
          </h2>

          {/* Main Title - Better mobile hierarchy */}
          <h1 className={`flex flex-col items-center font-black tracking-tight text-foreground mb-6 sm:mb-8 md:mb-10 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-base sm:text-xl md:text-2xl lg:text-3xl uppercase leading-[0.9] opacity-80">
              Authorised Automotive
            </span>
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#09757a] my-[-3px] sm:my-[-5px] md:my-[-15px]" style={{ fontFamily: '"Great Vibes", cursive' }}>
              &
            </span>
            <span className="text-sm sm:text-lg md:text-xl lg:text-2xl opacity-80 uppercase leading-[0.9] tracking-tight">
              Industrial Tools Supplier
            </span>
          </h1>

          {/* Search Bar - Mobile optimized */}
          <div className={`w-full max-w-2xl mx-auto mb-6 sm:mb-8 transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0 shadow-[0_20px_60px_-10px_rgba(9,117,122,0.4)] sm:shadow-[0_30px_100px_-10px_rgba(9,117,122,0.5)]' : 'opacity-0 translate-y-8'}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (searchQuery.trim()) {
                  router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
                }
              }}
              className="relative flex items-center h-11 sm:h-12 md:h-14 bg-background dark:bg-card rounded-lg p-1 overflow-hidden border border-[#09757a]/20 shadow-xl"
            >
              <div className="pl-3 sm:pl-4 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-[#09757a]" />
              </div>

              <Input
                type="text"
                placeholder="Search tools, brands..."
                className="flex-1 h-full border-none bg-transparent text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 px-2 sm:px-3 font-semibold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />

              <button
                type="submit"
                className="h-full px-4 sm:px-6 md:px-10 bg-[#09757a] hover:bg-[#075f63] text-white font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] rounded transition-all active:scale-95 shadow-md flex items-center justify-center"
              >
                Search
              </button>
            </form>
          </div>

          {/* Trust Strip - Mobile optimized with vertical layout on small screens */}
          <div className={`mt-6 sm:mt-10 md:mt-20 lg:mt-24 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12 lg:gap-16 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {[
              { icon: ShieldCheck, text: "GST-Verified Supplier" },
              { icon: CheckCircle, text: "Authorised Distributer" },
              { icon: Truck, text: "PAN-India Fast Delivery" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-3 text-muted-foreground group">
                <div className="h-8 w-8 sm:h-9 md:h-10 sm:w-9 md:w-10 rounded-full bg-secondary flex items-center justify-center border border-border group-hover:border-[#09757a] group-hover:bg-[#09757a]/10 transition-all shadow-md">
                  <item.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#09757a]" />
                </div>
                <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
