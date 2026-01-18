"use client"

import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"
import { Mail, Menu, Phone, X, ChevronDown, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState, useRef } from "react"
import { BrandsMenu } from "./brands-menu"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<"products" | "brands" | "categories" | null>(null)

  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

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

  const handleMouseEnter = (menuType: "products" | "brands" | "categories") => {
    setActiveMenu(menuType);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md text-foreground py-2 md:py-2.5 shadow-sm border-b border-border transition-colors"
        onMouseLeave={handleMenuLeave}
      >
        <div className="w-full px-4 md:px-12 flex items-center justify-between gap-4">

          {/* Mobile Phone Number Bar (Left on Mobile) */}
          <div className="lg:hidden flex items-center gap-2">
            <a href={`tel:${CONTACT.PHONE}`} className="h-8 w-8 rounded-full bg-[#09757a]/10 dark:bg-orange-500/10 border border-[#09757a]/20 dark:border-orange-500/20 flex items-center justify-center text-[#09757a] dark:text-orange-500 active:scale-90 transition-all">
              <Phone className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Logo Section - Centered on Mobile */}
          <Link href="/" className="flex flex-col items-center leading-none mx-auto lg:mx-0 lg:mr-10 group active:scale-95 transition-transform">
            <span className="text-xl md:text-2xl font-black tracking-tighter uppercase font-sans text-foreground transition-colors">
              HEXAMECH
            </span>
            <span className="text-[8px] md:text-[8px] font-bold bg-black text-white px-1.5 py-0.5 rounded-sm uppercase tracking-[0.35em] mt-0.5">
              LINICH TOOLS
            </span>
          </Link>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-foreground">
            {/* ... items ... */}
            <Link href="/" className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Home</Link>
            <div className="relative group/nav" onMouseEnter={() => handleMouseEnter("products")}>
              <Link href="/shop" className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all flex items-center gap-2">
                Products <ChevronDown className="h-3 w-3 group-hover/nav:rotate-180 transition-transform opacity-50" />
              </Link>
              {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>
            <Link href="/brands" className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Brands</Link>
            <Link href="/about" className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">About</Link>
            <Link href="/contact" className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Contact</Link>
          </nav>

          {/* Right Actions - Theme & Desktop CTAs */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-6">
              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center gap-2.5 group">
                <div className="h-8 w-8 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all">
                  <Phone className="h-3.5 w-3.5 text-orange-500" />
                </div>
                <span className="text-[10px] font-black tracking-tight">{CONTACT.PHONE}</span>
              </a>
            </div>

            <ThemeToggle />

            <Link href="/contact" className="hidden sm:block">
              <Button className="bg-[#111] hover:bg-orange-500 text-white px-5 h-9 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all active:scale-95 shadow-lg">
                Get Quote
              </Button>
            </Link>

            <Button variant="ghost" size="icon" className="lg:hidden h-9 w-9 hover:bg-black/5 active:scale-95" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sticky Bottom Navigation - Mobile Only */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-[100] h-14 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl flex items-center justify-around px-2 text-muted-foreground animate-in slide-in-from-bottom-10 duration-500">
        <Link href="/" className={`flex flex-col items-center transition-all ${pathname === '/' ? 'text-[#09757a] dark:text-orange-500 scale-110' : 'hover:text-foreground'}`}>
          <Menu className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Home</span>
        </Link>
        <Link href="/shop" className={`flex flex-col items-center transition-all ${pathname.startsWith('/shop') ? 'text-[#09757a] dark:text-orange-500 scale-110' : 'hover:text-foreground'}`}>
          <div className="relative">
            <div className="h-5 w-5 mb-0.5 rounded border-2 border-current" />
            <div className="absolute inset-x-1 top-1 h-1 bg-current rounded-full" />
          </div>
          <span className="text-[8px] font-black uppercase tracking-tighter">Shop</span>
        </Link>
        <Link href={CONTACT.WHATSAPP_URL} target="_blank" className="flex flex-col items-center -translate-y-4">
          <div className="h-12 w-12 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 active:scale-90 transition-transform">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width={24} height={24} className="invert" />
          </div>
        </Link>
        <Link href="/brands" className={`flex flex-col items-center transition-all ${pathname === '/brands' ? 'text-[#09757a] dark:text-orange-500 scale-110' : 'hover:text-foreground'}`}>
          <Users className="h-5 w-5 mb-0.5" />
          <span className="text-[8px] font-black uppercase tracking-tighter">Brands</span>
        </Link>
        <Link href="/contact" className={`flex flex-col items-center transition-all ${pathname === '/contact' ? 'text-[#09757a] dark:text-orange-500 scale-110' : 'hover:text-foreground'}`}>
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
            <div className="flex flex-col gap-6">
              <Link href="/" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Home</Link>
              <Link href="/shop" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Shop</Link>
              <Link href="/brands" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Brands</Link>
              <Link href="/about" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">About</Link>
              <Link href="/contact" className="text-xl font-black uppercase tracking-widest hover:text-[#09757a] dark:hover:text-orange-500 transition-all">Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
