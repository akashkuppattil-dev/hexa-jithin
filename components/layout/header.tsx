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
        <div className="w-full px-4 sm:px-6 md:px-12 flex items-center gap-2 sm:gap-4 xl:gap-6 py-2 md:py-3">
          {/* Logo Section - Full Brand - Slim & Clean */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="relative w-36 xs:w-44 sm:w-52 md:w-60 h-10 sm:h-12 md:h-14 overflow-hidden">
              <Image
                src="/hexamech-logo.png"
                alt="Hexamech Linich Tools"
                fill
                className="object-contain object-left scale-150 origin-left"
                priority
              />
            </div>
          </Link>

          {/* Navigation - Grouped closely with Logo */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 shrink-0 pl-2 py-0.5">
            <Link href="/" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all text-muted-foreground">Home</Link>
            <div className="relative group/nav" onMouseEnter={() => handleMouseEnter("products")}>
              <Link href="/shop" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all flex items-center gap-1.5 text-muted-foreground">
                Products <ChevronDown className="h-3 w-3 group-hover/nav:rotate-180 transition-transform opacity-60" />
              </Link>
              {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>
            <Link href="/brands" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all text-muted-foreground">Brands</Link>
            <Link href="/about" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all text-muted-foreground">About</Link>
            <Link href="/gallery" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all text-muted-foreground">Gallery</Link>
            <Link href="/contact" className="text-[11px] xl:text-[12px] font-medium uppercase tracking-wide hover:text-foreground hover:text-[#09757a] transition-all text-muted-foreground">Contact</Link>
          </nav>

          {/* Fully Expanded Search Box - Anchored to Right Actions */}
          <div ref={searchRef} className="hidden lg:flex flex-1 relative group/search ml-4 xl:ml-8">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-muted-foreground group-focus-within/search:text-[#09757a] transition-colors" />
            </div>
            <Input
              type="text"
              placeholder="Search 10,000+ Industrial tools, equipment, or brands..."
              className="h-10 w-full pl-10 pr-4 text-[12px] font-medium text-foreground placeholder:text-muted-foreground bg-muted/40 border-border rounded-xl focus-visible:ring-2 focus-visible:ring-[#09757a]/20 focus-visible:border-[#09757a] transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && debouncedQuery.length >= 2 && (
              <div className="absolute top-full left-0 right-0 z-[60] mt-1 lg:max-w-xl">
                <SearchDropdown query={debouncedQuery} onClose={() => setIsSearchFocused(false)} />
              </div>
            )}
          </div>

          {/* Mobile Search Bar - Visible on Small Screens */}
          <div className="flex lg:hidden flex-1 mx-1 xs:mx-2 relative group/search">
            <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="h-8 w-full pl-8 pr-3 text-[10px] font-bold bg-muted/40 border-border rounded-lg focus-visible:ring-1 focus-visible:ring-[#09757a]/50 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
            />
            {isSearchFocused && debouncedQuery.length >= 2 && (
              <div className="absolute top-full left-0 right-0 z-[60] mt-1">
                <SearchDropdown query={debouncedQuery} onClose={() => setIsSearchFocused(false)} />
              </div>
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0 ml-0">
            <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 hover:bg-black/5 active:scale-95 rounded-full" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Navigation - Mobile Only */}
      <div className={`lg:hidden fixed bottom-4 left-4 right-4 z-[100] h-14 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex items-center justify-around px-1 text-muted-foreground transition-all duration-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <Link href="/" className={`flex flex-col items-center transition-all ${pathname === '/' ? 'text-[#09757a] scale-110' : 'text-gray-600 hover:text-gray-800'}`}>
          <Menu className="h-4.5 w-4.5 mb-0.5" />
          <span className="text-[8px] font-bold uppercase tracking-tight">Home</span>
        </Link>
        <Link href="/shop" className={`flex flex-col items-center transition-all ${pathname.startsWith('/shop') ? 'text-[#09757a] scale-110' : 'text-gray-600 hover:text-gray-800'}`}>
          <Package className="h-4.5 w-4.5 mb-0.5" />
          <span className="text-[8px] font-bold uppercase tracking-tight">Shop</span>
        </Link>
        <Link href="/gallery" className={`flex flex-col items-center transition-all ${pathname === '/gallery' ? 'text-[#09757a] scale-110' : 'text-gray-600 hover:text-gray-800'}`}>
          <div className="h-4.5 w-4.5 mb-0.5 flex items-center justify-center">
            <Users className="h-4.5 w-4.5" /> {/* Using Users icon as placeholder for Gallery if customized icon needed let me know, reused generic icon for now based on available imports */}
          </div>
          <span className="text-[8px] font-bold uppercase tracking-tight">Gallery</span>
        </Link>
        <Link href="/brands" className={`flex flex-col items-center transition-all ${pathname === '/brands' ? 'text-[#09757a] scale-110' : 'text-gray-600 hover:text-gray-800'}`}>
          <Users className="h-4.5 w-4.5 mb-0.5" />
          <span className="text-[8px] font-bold uppercase tracking-tight">Brands</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center transition-all ${pathname === '/contact' ? 'text-[#09757a] scale-110' : 'text-gray-600 hover:text-gray-800'}`}>
          <Phone className="h-4.5 w-4.5 mb-0.5" />
          <span className="text-[8px] font-bold uppercase tracking-tight">Contact</span>
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
              <Link href="/gallery" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Gallery</Link>
              <Link href="/contact" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] transition-all border-b border-border/50 pb-2">Contact</Link>
            </div>

            {/* Mobile Menu Footer */}
            <div className="mt-auto space-y-4 pt-6 border-t border-border">
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
