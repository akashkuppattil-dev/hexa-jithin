"use client"

import { SearchDropdown } from "@/components/search-dropdown"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, X, ChevronDown, Home, Package, Award, Phone, Info, ChevronRight, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { BrandsMenu } from "./brands-menu"

const COMPANY_LOGO = "/images/logo.jpg"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | null>(null)

  const pathname = usePathname()
  const router = useRouter()
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setActiveMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

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

  const handleMenuLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Node | null;
    if (relatedTarget instanceof Node && headerRef.current && !headerRef.current.contains(relatedTarget)) {
      setActiveMenu(null);
    }
  }

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 w-full transition-[padding,background-color] duration-300 ${mobileMenuOpen ? "z-[50]" : "z-40"} ${isScrolled
          ? "py-3 shadow-xl bg-black/60 backdrop-blur-xl"
          : "py-5"
          }`}
        onMouseLeave={handleMenuLeave}
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/header-bg.jpg"
            alt="Header Texture"
            fill
            className="object-cover opacity-100 brightness-[0.7] contrast-125"
            priority
          />
          {/* Gradient Overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Section */}
            <Link href="/" className="flex flex-col group min-w-[200px] sm:min-w-[280px]">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex-shrink-0 bg-white/5 rounded-xl border border-white/10 overflow-hidden group-hover:border-orange-500/30 transition-all">
                  <Image
                    src="/images/logo.jpg"
                    alt="Hexamech Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col pl-0.5 sm:pl-1 items-start md:items-center">
                  <h1 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-[0.7] md:leading-none tracking-tighter uppercase group-hover:text-orange-500 transition-colors">
                    Hexamech
                  </h1>
                  <div className="flex items-center gap-1.5 mt-0.5 md:mt-1">
                    <div className="h-[1px] w-2 md:h-[1.5px] md:w-3 bg-orange-600 group-hover:w-3 md:group-hover:w-5 transition-all" />
                    <span className="text-[8px] sm:text-[10px] md:text-[11px] text-orange-500 font-black uppercase tracking-[0.2em] leading-none">
                      Linich Tools
                    </span>
                    <div className="hidden md:block h-[1.5px] w-3 bg-orange-600 group-hover:w-5 transition-all" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[8px] sm:text-[9px] text-zinc-300 mt-2 font-bold uppercase tracking-widest pl-1 leading-none">
                <span>Professional Automotive</span>
                <span className="text-orange-500 font-black text-[10px] sm:text-[11px]">&</span>
                <span>Industrial Tools Supplier</span>
              </div>
            </Link>

            {/* Center Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              <Link
                href="/"
                className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}
              >
                Home
              </Link>

              <div className="relative h-12 flex items-center group cursor-pointer" onMouseEnter={() => setActiveMenu("products")}>
                <Link href="/shop" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors flex items-center gap-1 ${pathname.startsWith("/shop") ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>
                  Products
                  <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${activeMenu === "products" ? "rotate-180" : ""}`} />
                </Link>
                {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
              </div>

              <Link href="/brands" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${activeMenu === "brands" || pathname === "/brands" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>
                Brands
              </Link>

              <Link href="/about" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/about" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>About Us</Link>

              <Link href="/contact" className={`text-[13px] font-bold uppercase tracking-wider hover:text-orange-500 transition-colors ${pathname === "/contact" ? "text-orange-500" : "text-zinc-300 hover:text-white"}`}>Contact</Link>

              {/* Search Bar - Near Contact */}
              <form onSubmit={handleSearchSubmit} className="relative group">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search tools, brands..."
                    className="w-[240px] focus:w-[300px] h-9 bg-white/10 border-white/20 text-white focus:bg-white/15 focus:border-orange-500/50 transition-all rounded-full text-[13px] placeholder:text-zinc-400 pl-4 pr-10 shadow-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="button" onClick={() => handleSearchSubmit()} className="absolute right-0 top-0 h-full px-3 flex items-center cursor-pointer text-zinc-400 hover:text-orange-500 transition-colors">
                    <Search className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <Link href="/contact" className="hidden sm:flex">
                <button className="flex items-center gap-2 px-4 h-9 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded transition-all shadow-lg shadow-orange-900/20 active:scale-95">
                  <span>Get Quote</span>
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white hover:bg-orange-500/10 h-10 w-10 active:scale-90 transition-transform" onClick={() => setMobileMenuOpen(true)}>
                  <Menu className="h-7 w-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* Mobile Menu - Detached from Header for Perfect Full-Screen View */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden animate-in fade-in duration-300">
          {/* Deep Dark Overlay */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md" onClick={() => setMobileMenuOpen(false)} />

          <div className="absolute inset-y-0 left-0 w-[85vw] max-w-[360px] bg-[#050505] flex flex-col animate-in slide-in-from-left duration-300 overflow-hidden border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.8)] z-[1001]">
            {/* Menu Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black">
              <div className="flex flex-col">
                <span className="font-black text-2xl text-white tracking-widest uppercase">HEXAMECH</span>
                <span className="text-[10px] text-orange-500 font-black tracking-[0.4em] uppercase -mt-1">Linich Tools</span>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="text-white bg-white/10 hover:bg-orange-500 border border-white/10 h-12 w-12 rounded-xl transition-all duration-300 shadow-lg shadow-black/50"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </Button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 overflow-y-auto pt-4 pb-8 px-4 custom-scrollbar">
              {/* Mobile Search */}
              <div className="mb-8 px-2">
                <form onSubmit={handleSearchSubmit} className="relative group">
                  <Input
                    type="text"
                    placeholder="Search tools, brands..."
                    className="w-full h-11 bg-white/10 border-white/20 text-white placeholder:text-zinc-500 rounded-xl pl-11 focus:border-orange-500/50 focus:bg-white/15 transition-all shadow-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 group-focus-within:text-orange-500 transition-colors" />
                </form>
              </div>

              <div className="mb-10">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em] mb-4 pl-4">Navigation</p>
                {[
                  { name: "Home", href: "/", icon: Home },
                  { name: "Products", href: "/shop", icon: Package },
                  { name: "Brands", href: "/brands", icon: Award },
                  { name: "About Us", href: "/about", icon: Info },
                  { name: "Contact", href: "/contact", icon: Phone },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group mb-1
                      ${pathname === item.href
                        ? "bg-orange-600 text-white shadow-lg shadow-orange-900/20"
                        : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5"}
                    `}
                  >
                    <item.icon className={`h-5 w-5 transition-transform duration-300 group-hover:scale-110 ${pathname === item.href ? "text-white" : "text-zinc-600 group-hover:text-orange-500"}`} />
                    <span className="font-black uppercase tracking-wider text-sm">{item.name}</span>
                    <ChevronRight className={`ml-auto h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${pathname === item.href ? "opacity-100 translate-x-0" : ""}`} />
                  </Link>
                ))}
              </div>

              {/* Support Info */}
              <div className="mx-2 p-6 rounded-2xl bg-white/5 border border-white/10 group hover:border-orange-500/30 transition-all shadow-inner">
                <p className="text-[9px] font-black text-orange-500 uppercase tracking-widest mb-2">B2B Support</p>
                <p className="text-xs text-zinc-400 font-medium leading-relaxed group-hover:text-zinc-200 transition-colors">
                  Get exclusive wholesale quotes for your industrial workshop.
                </p>
              </div>
            </div>

            {/* Footer Contact */}
            <div className="p-6 bg-black border-t border-white/5">
              <a
                href="https://wa.me/917510638693"
                className="flex items-center justify-center gap-3 w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 shadow-xl shadow-green-900/20 transition-all active:scale-95 group font-black uppercase tracking-widest text-xs"
              >
                <MessageCircle className="h-5 w-5 fill-white/20" />
                Chat with Experts
              </a>
              <p className="text-[9px] text-zinc-700 text-center font-bold uppercase tracking-widest mt-6">
                © 2025 Hexamech Linich
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
