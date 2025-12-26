import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

/* ===================== BRAND DATA ===================== */
const brands = [
    { name: "ProGrip", logo: "/images/brands/progrip.jpg" },
    { name: "Mitutoyo", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.05_50cf4637.jpg" },
    { name: "Gallop", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.06_24105a75.jpg" },
    { name: "ARO", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.06_27e1b7c5.jpg" },
    { name: "SATA", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.07_309c0c3a.jpg" },
    { name: "3M", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.07_8f761bd4.jpg" },
    { name: "Bosch", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.08_8163f38d.jpg" },
    { name: "Stanley", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.09_74981a3c.jpg" },
    { name: "Black & Decker", logo: "/images/brands/black-decker.jpg" },
    { name: "DeWalt", logo: "/images/brands/dewalt.jpg" },
    { name: "Karcher", logo: "/images/brands/karcher.jpg" },
    { name: "Chicago Pneumatic", logo: "/images/brands/chicago-pneumatic.jpg" },
    { name: "Menzerna", logo: "/images/brands/menzerna-logo.jpg" },
    { name: "Devilbiss Refinish", logo: "/images/brands/devilbiss-refinish.jpg" },
    { name: "German Polish", logo: "/images/brands/german-polish.jpg" },
    { name: "Kovax", logo: "/images/brands/kovax.jpg" },
    { name: "PCL-SUMO", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.08_4ab9343f.jpg" },
    { name: "Force", logo: "/images/brands/force.jpg" },
    { name: "Taparia", logo: "/images/brands/WhatsApp Image 2025-12-18 at 18.01.09_c255bd56.jpg" },
    { name: "Mr Tools", logo: "/images/brands/mr-tools.jpg" },
]

export default function BrandsPage() {
    return (
        <div className="min-h-screen bg-[#05060a] text-zinc-100">
            {/* ================= HERO ================= */}
            <div className="relative overflow-hidden py-24 border-b border-white/5 bg-gradient-to-b from-[#0f172a] to-[#05060a]">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">
                            Official Distributors
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                        Our Trusted <span className="text-orange-500">Brand Partners</span>
                    </h1>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-sm md:text-base font-medium">
                        We supply genuine, professional-grade tools from the world’s leading
                        manufacturers to workshops and industries across India.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">

                {/* ================= FEATURED LINICH ================= */}
                <div className="mb-14">
                    <Link href="/shop?brand=Linich Tools">
                        <div className="group relative bg-[#1a2235]/60 block backdrop-blur-md rounded-3xl border border-white/10 hover:border-orange-500/40 transition-all duration-500 overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px]" />
                            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-10 relative z-10 items-center">
                                <div className="bg-white rounded-xl p-8 flex items-center justify-center min-h-[220px] shadow-inner">
                                    <Image
                                        src="/images/brands/linich-logo.jpg"
                                        alt="Linich Tools"
                                        width={320}
                                        height={140}
                                        className="object-contain mix-blend-multiply"
                                    />
                                </div>
                                <div className="space-y-4 text-center md:text-left">
                                    <span className="inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-widest bg-orange-500/10 border border-orange-500/20 text-orange-500">
                                        Strategic Partner
                                    </span>
                                    <h2 className="text-2xl md:text-3xl font-black uppercase italic">
                                        Linich Tools
                                    </h2>
                                    <p className="text-zinc-400 text-sm">
                                        Our primary partnership delivering exclusive access to Linich’s
                                        premium industrial tool range.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-orange-500 pb-1">
                                        Explore Products <ArrowRight className="h-4 w-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {brands.map((brand, idx) => (
                        <Link
                            key={brand.name}
                            href={`/shop?brand=${encodeURIComponent(brand.name)}`}
                            className={`animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[${idx * 50}ms]`}
                        >
                            <Card className="group bg-[#1a2235]/40 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-300 overflow-hidden rounded-2xl h-full flex flex-col">
                                <div className="bg-white px-4 py-8 flex items-center justify-center flex-1">
                                    <div className="relative w-full h-[60px] md:h-[80px]">
                                        <Image
                                            src={brand.logo}
                                            alt={brand.name}
                                            fill
                                            className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                                <div className="px-4 py-4 text-center border-t border-white/5 bg-black/20">
                                    <h3 className="text-[11px] md:text-xs font-black uppercase tracking-widest text-zinc-300 group-hover:text-orange-500 transition-colors">
                                        {brand.name}
                                    </h3>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="max-w-2xl mx-auto bg-[#1a2235]/40 backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[90px]" />
                        <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 tracking-tighter">
                            Want to collaborate with Hexamech?
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base mb-10 font-medium">
                            If you are a tool manufacturer or brand looking to expand your reach in
                            India, partner with us for distribution and growth.
                        </p>
                        <Link href="/contact" className="inline-block transform transition hover:scale-105 active:scale-95">
                            <Button className="h-14 px-10 font-black uppercase tracking-[0.2em] bg-orange-600 hover:bg-orange-500 text-white rounded-xl shadow-xl shadow-orange-900/30">
                                Become a Brand Partner
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
