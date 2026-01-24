import { Mail, Phone, CheckCircle2, MessageCircle } from "lucide-react"

export function TopInfoBar() {
  return (
    <div
      className="
        w-full
        h-8 md:h-10
        flex
        items-center
        text-zinc-400 md:text-zinc-300
        relative
        z-50
        border-b border-white/10
        bg-black
      "
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-full text-[10px] font-semibold uppercase tracking-widest">

        {/* LEFT */}
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <a
            href="tel:9037872505"
            className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
          >
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-widest">9037872505</span>
          </a>

          <a
            href="mailto:hexamechlinichtools@gmail.com"
            className="hidden sm:flex items-center gap-1.5 hover:text-orange-500 transition-colors"
          >
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-widest lowercase">hexamechlinichtools@gmail.com</span>
          </a>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-1.5 text-zinc-300">
            <CheckCircle2 className="h-3 w-3 md:h-4 md:w-4 text-[#09757a]" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black">GST Verified</span>
          </div>

          <a
            href="https://wa.me/919037872505"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
          >
            <span className="text-[9px] sm:text-[10px] md:text-xs font-black tracking-widest">WHATSAPP: 9037872505</span>
          </a>
        </div>
      </div>
    </div>
  )
}
