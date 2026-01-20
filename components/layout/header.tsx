"use client"

import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"
import { Mail, Menu, Phone, X, ChevronDown, Users, Package, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { BrandsMenu } from "./brands-menu"
import { Input } from "@/components/ui/input"
import { SearchDropdown } from "@/components/search-dropdown"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | "categories" | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
    setIsSearchFocused(false)
    setSearchQuery("")
  }, [pathname])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const handleMenuLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (relatedTarget instanceof Node && headerRef.current && !headerRef.current.contains(relatedTarget)) {
      setActiveMenu(null);
    }
  }

  const handleMouseEnter = (menuType: "products" | "brands" | "categories") => {
    setActiveMenu(menuType);
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 w-full z-50 bg-background text-foreground transition-all duration-300 shadow-sm border-b border-border ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseLeave={handleMenuLeave}
      >
        <div className="w-full px-3 md:px-12 flex items-center gap-3 md:gap-6 xl:gap-8 py-3 md:py-4">
          {/* Logo Section - Left Aligned */}
          <Link href="/" className="flex flex-col items-start leading-none group active:scale-95 transition-transform shrink-0">
            <span className="text-lg sm:text-xl md:text-2xl font-black tracking-tighter uppercase font-sans text-foreground transition-colors">
              HEXAMECH
            </span>
            <span className="text-[7px] sm:text-[8px] md:text-[8px] font-bold bg-black text-white px-1 sm:px-1.5 py-0.5 rounded-sm uppercase tracking-[0.25em] sm:tracking-[0.35em] mt-0.5">
              LINICH TOOLS
            </span>
          </Link>

          {/* Navigation - Grouped closely with Logo */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-foreground shrink-0 border-l border-border pl-5 xl:pl-7 py-0.5">
            <Link href="/" className="text-[9px] font-black uppercase tracking-widest hover:text-[#09757a] transition-all">Home</Link>
            <div className="relative group/nav" onMouseEnter={() => handleMouseEnter("products")}>
              <Link href="/shop" className="text-[9px] font-black uppercase tracking-widest hover:text-[#09757a] transition-all flex items-center gap-1.5">
                Products <ChevronDown className="h-2.5 w-2.5 group-hover/nav:rotate-180 transition-transform opacity-50" />
              </Link>
              {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>
            <Link href="/brands" className="text-[9px] font-black uppercase tracking-widest hover:text-[#09757a] transition-all">Brands</Link>
            <Link href="/about" className="text-[9px] font-black uppercase tracking-widest hover:text-[#09757a] transition-all">About</Link>
            <Link href="/contact" className="text-[9px] font-black uppercase tracking-widest hover:text-[#09757a] transition-all">Contact</Link>
          </nav>

          {/* Fully Expanded Search Box - Anchored to Right Actions */}
          <div ref={searchRef} className="hidden lg:flex flex-1 relative group/search ml-4 xl:ml-8">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground group-focus-within/search:text-[#09757a] transition-colors" />
            </div>
            <Input
              type="text"
              placeholder="Search 10,000+ Industrial tools, equipment, or brands..."
              className="h-10 w-full pl-10 pr-4 text-[11px] font-black text-black placeholder:text-zinc-500 bg-muted/40 border-border rounded-xl focus-visible:ring-2 focus-visible:ring-[#09757a]/20 focus-visible:border-[#09757a] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && debouncedQuery.length >= 2 && (
              <SearchDropdown query={debouncedQuery} onClose={() => setIsSearchFocused(false)} />
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0 ml-auto">
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button className="bg-[#111] hover:bg-[#09757a] text-white px-4 h-9 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all active:scale-95 shadow-md">
                  Get Quote
                </Button>
              </Link>

              <div className="h-8 w-px bg-border mx-1" />

              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center gap-2.5 group">
                <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-[#09757a]/50 group-hover:bg-[#09757a]/5 transition-all">
                  <Phone className="h-3.5 w-3.5 text-[#09757a]" />
                </div>
                <span className="text-[10px] font-black tracking-tight">{CONTACT.PHONE}</span>
              </a>

            </div>

            <Button variant="ghost" size="icon" className="lg:hidden h-10 w-10 hover:bg-black/5 active:scale-95 rounded-full" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Navigation - Mobile Only */}
      <div className={`lg:hidden fixed bottom-4 left-4 right-4 z-[100] h-14 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex items-center justify-around px-2 text-muted-foreground transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <Link href="/" className={`flex flex-col items-center transition-all ${pathname === '/' ? 'text-[#09757a] scale-110' : 'hover:text-foreground'}`}>
          <Menu className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Home</span>
        </Link>
        <Link href="/shop" className={`flex flex-col items-center transition-all ${pathname.startsWith('/shop') ? 'text-[#09757a] scale-110' : 'hover:text-foreground'}`}>
          <Package className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
        <Link href="/about" className={`flex flex-col items-center transition-all ${pathname === '/about' ? 'text-[#09757a] scale-110' : 'hover:text-foreground'}`}>
          <div className="h-5 w-5 mb-0.5 rounded-full border-2 border-current flex items-center justify-center">
            <span className="text-[10px] font-black">i</span>
          </div>
          <span className="text-[8px] font-black uppercase tracking-tighter">About</span>
        </Link>
        <Link href="/brands" className={`flex flex-col items-center transition-all ${pathname === '/brands' ? 'text-[#09757a] scale-110' : 'hover:text-foreground'}`}>
          <Users className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Brands</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center transition-all ${pathname === '/contact' ? 'text-[#09757a] scale-110' : 'hover:text-foreground'}`}>
          <Phone className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Call</span>
        </Link>
      </div>

      {/* Mobile Menu Slide-out */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-[280px] bg-background border-l border-border p-6 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-10">
              <span className="font-black text-xl uppercase tracking-tighter">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {/* Links and other items */}
            {/* Mobile Search */}
            <div className="mb-6 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Search tools..."
                className="h-11 pl-10 bg-muted/50 border-border rounded-xl text-sm font-bold"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {debouncedQuery.length >= 2 && (
                <div className="absolute top-full left-0 right-0 z-[110] mt-1">
                  <SearchDropdown query={debouncedQuery} onClose={() => {
                    setMobileMenuOpen(false)
                    setSearchQuery("")
                  }} />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5 flex-1 overflow-y-auto">
              <Link href="/" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Home</Link>
              <Link href="/shop" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Shop</Link>
              <Link href="/brands" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Brands</Link>
              <Link href="/about" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">About</Link>
              <Link href="/contact" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Contact</Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-auto space-y-4 pt-6 border-t border-border">
              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-[#09757a]/10 flex items-center justify-center text-[#09757a]">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#09757a]">Call Us</span>
                  <span className="text-sm font-bold">{CONTACT.PHONE}</span>
                </div>
              </a>
              <a href={CONTACT.WHATSAPP_URL} target="_blank" className="flex items-center gap-3 group">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">WhatsApp</span>
                  <span className="text-sm font-bold">Inquiry on WA</span>
                </div>
              </a>
              <div className="pt-2">
                <p className="text-[9px] font-bold text-muted-foreground uppercase leading-relaxed tracking-wider">
                  {CONTACT.BUSINESS_ADDRESS}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
