"use client"

import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/constants"
import { Mail, Menu, Phone, X, ChevronDown } from "lucide-react"
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
        className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-md text-foreground py-1.5 md:py-2.5 shadow-sm border-b border-border transition-colors"
        onMouseLeave={handleMenuLeave}
      >
        <div className="w-full px-4 md:px-12 flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex flex-col items-center leading-none mr-4 md:mr-10 group active:scale-95 transition-transform">
            <span className="text-lg md:text-2xl font-black tracking-tighter uppercase font-sans text-foreground transition-colors">
              HEXAMECH
            </span>
            <span className="text-[7px] md:text-[8px] font-bold bg-black text-white px-1.5 py-0.5 rounded-sm uppercase tracking-[0.35em] mt-0.5">
              LINICH TOOLS
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-foreground">
            <Link
              href="/"
              className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] transition-all"
            >
              Home
            </Link>

            <div className="relative group/nav" onMouseEnter={() => handleMouseEnter("products")}>
              <Link
                href="/shop"
                className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] transition-all flex items-center gap-2"
              >
                Products
                <ChevronDown className="h-3 w-3 group-hover/nav:rotate-180 transition-transform opacity-50" />
              </Link>
              {activeMenu === "products" && <BrandsMenu onClose={() => setActiveMenu(null)} />}
            </div>

            <Link
              href="/brands"
              className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] transition-all"
            >
              Brands
            </Link>

            <Link
              href="/about"
              className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] transition-all"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-[9px] font-bold uppercase tracking-widest hover:text-[#09757a] transition-all active:scale-95"
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 xl:gap-8">
            <div className="hidden md:flex items-center gap-6">
              <a href={`tel:${CONTACT.PHONE}`} className="flex flex-col items-start leading-none group cursor-pointer active:scale-95 transition-transform">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-[#09757a]/50 group-hover:bg-[#09757a]/5 transition-all shadow-sm">
                    <Phone className="h-3 w-3 text-[#09757a]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black group-hover:text-[#09757a] transition-colors tracking-tight">{CONTACT.PHONE}</span>
                  </div>
                </div>
              </a>

              <a href={`mailto:${CONTACT.EMAIL}`} className="hidden xl:flex flex-col items-start leading-none group cursor-pointer border-l border-border pl-6 active:scale-95 transition-transform">
                <div className="flex items-center gap-2.5">
                  <div className="h-7 w-7 rounded-full bg-background flex items-center justify-center border border-border group-hover:border-[#09757a]/50 group-hover:bg-[#09757a]/5 transition-all shadow-sm">
                    <Mail className="h-3 w-3 text-[#09757a]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black group-hover:text-[#09757a] transition-colors tracking-tight lowercase">{CONTACT.EMAIL}</span>
                  </div>
                </div>
              </a>
            </div>

            {/* WhatsApp Quick Link */}
            <a
              href={CONTACT.WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500 hover:border-emerald-500 transition-all active:scale-90"
            >
              <div className="h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <span className="text-[9px] font-black text-emerald-500 group-hover:text-white transition-colors uppercase tracking-widest">Connect</span>
            </a>

            <ThemeToggle />

            <Link href="/contact">
              <Button
                className="hidden sm:flex bg-[#09757a] hover:bg-[#0a0a0a] text-white px-4 h-8 text-[9px] font-bold uppercase tracking-widest rounded transition-all active:scale-95 shadow-lg flex-shrink-0"
              >
                Get Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-3 absolute right-4 top-1/2 -translate-y-1/2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-accent active:scale-95 transition-all" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[1000] lg:hidden animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-lg" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-[320px] bg-background border-l border-border p-0 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-secondary/30">
              <div className="flex flex-col items-start">
                <span className="text-xl font-black text-foreground tracking-tighter uppercase">HEXAMECH</span>
                <span className="text-[9px] font-bold text-[#09757a] tracking-[0.25em] uppercase">LINICH TOOLS</span>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="h-11 w-11 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl active:scale-95 transition-all">
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Navigation Links - Larger Touch Targets */}
            <div className="p-4 flex flex-col gap-1.5 flex-1 overflow-y-auto">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 text-foreground text-[15px] font-black hover:bg-accent active:bg-accent/80 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98]">
                <span className="w-2 h-2 rounded-full bg-[#09757a]"></span>
                Home
              </Link>
              <Link href="/shop" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 text-foreground text-[15px] font-black hover:bg-accent active:bg-accent/80 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98]">
                <span className="w-2 h-2 rounded-full bg-[#09757a]"></span>
                Products
              </Link>
              <Link href="/brands" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 text-foreground text-[15px] font-black hover:bg-accent active:bg-accent/80 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98]">
                <span className="w-2 h-2 rounded-full bg-[#09757a]"></span>
                Brands
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 text-foreground text-[15px] font-black hover:bg-accent active:bg-accent/80 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98]">
                <span className="w-2 h-2 rounded-full bg-[#09757a]"></span>
                About
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-4 text-foreground text-[15px] font-black hover:bg-accent active:bg-accent/80 rounded-xl uppercase tracking-wider transition-all active:scale-[0.98]">
                <span className="w-2 h-2 rounded-full bg-[#09757a]"></span>
                Contact
              </Link>
            </div>

            {/* Mobile Menu Footer - Contact CTAs */}
            <div className="p-5 border-t border-border bg-secondary/20 space-y-3">
              <a href={`tel:${CONTACT.PHONE}`} className="flex items-center gap-4 p-3 text-foreground bg-background hover:bg-accent rounded-xl transition-all group active:scale-[0.98]">
                <div className="h-11 w-11 rounded-full bg-[#09757a]/10 border border-[#09757a]/20 flex items-center justify-center group-hover:bg-[#09757a] transition-all">
                  <Phone className="h-5 w-5 text-[#09757a] group-hover:text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Call Us Now</span>
                  <span className="text-sm font-black tracking-wide">{CONTACT.PHONE}</span>
                </div>
              </a>
              <a
                href={CONTACT.WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 text-white bg-emerald-500 hover:bg-emerald-600 rounded-xl transition-all group active:scale-[0.98]"
              >
                <div className="h-11 w-11 rounded-full bg-white/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold text-white/80 uppercase tracking-widest">Instant Chat</span>
                  <span className="text-sm font-black tracking-wide">WhatsApp Us</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
