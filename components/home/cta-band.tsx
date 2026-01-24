import Link from "next/link"
import { MessageCircle, FileText, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBand() {
  return (
    <section className="py-8 bg-primary relative overflow-hidden text-white transition-colors">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-black mb-2 tracking-tighter">
              B2B Workshop Solutions
            </h2>
            <p className="text-sm text-primary-foreground/90 font-black uppercase tracking-widest">
              Bulk pricing, GST invoicing, and PAN India delivery support.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-zinc-100 font-black uppercase tracking-widest text-[10px] h-10 px-6 rounded-lg">
                <FileText className="mr-2 h-3.5 w-3.5" />
                Get Quote
              </Button>
            </Link>
            <a href="https://wa.me/919037872505" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="bg-[#2E7D32] hover:bg-[#1B5E20] text-white border-0 font-black uppercase tracking-widest text-[10px] h-10 px-6 rounded-lg shadow-lg">
                <MessageCircle className="mr-2 h-3.5 w-3.5" />
                WhatsApp
              </Button>
            </a>
            <div className="h-10 w-px bg-white/20 hidden sm:block mx-2" />
            <a href="https://instagram.com/hexamech_linich_tools" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
              <div className="p-2 rounded-xl bg-white/10 group-hover:bg-white/20 transition-all">
                <Instagram className="h-4 w-4 text-white" />
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">Follow Us</p>
                <p className="text-[9px] text-primary-foreground/60 font-medium">@hexamech_tools</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
