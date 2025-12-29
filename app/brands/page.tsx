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
        <div className="min-h-screen bg-background text-foreground transition-colors">
            {/* ================= HERO ================= */}
            <div className="relative overflow-hidden py-8 sm:py-10 md:py-16 lg:py-20 border-b border-border bg-secondary">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert" />
                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-3 sm:mb-4">
                        <span className="text-[8px] sm:text-[9px] font-black text-[#09757a] uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                            Official Distributors
                        </span>
                    </div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black uppercase tracking-tighter mb-3 sm:mb-4 text-foreground leading-tight">
                        Our Trusted <span className="text-[#09757a]">Brand Partners</span>
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-xs sm:text-sm md:text-base font-medium px-2">
                        We supply genuine, professional-grade tools from the world's leading
                        manufacturers to workshops and industries across India.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 md:py-12">

                {/* ================= FEATURED LINICH ================= */}
                <div className="mb-6 sm:mb-8 md:mb-10">
                    <Link href="/shop?brand=Linich Tools">
                        <div className="group relative bg-card block backdrop-blur-md rounded-xl sm:rounded-2xl border border-border hover:border-[#09757a]/40 transition-all duration-500 overflow-hidden shadow-xl sm:shadow-2xl">
                            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-[#09757a]/5 blur-[80px] sm:blur-[100px] md:blur-[120px]" />
                            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 relative z-10 items-center">
                                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-center justify-center min-h-[120px] sm:min-h-[150px] md:min-h-[180px] shadow-inner order-1 md:order-none">
                                    <Image
                                        src="/images/brands/linich-logo.jpg"
                                        alt="Linich Tools"
                                        width={280}
                                        height={120}
                                        className="object-contain mix-blend-multiply w-[180px] sm:w-[220px] md:w-[280px]"
                                    />
                                </div>
                                <div className="space-y-2 sm:space-y-3 text-center md:text-left order-2 md:order-none">
                                    <span className="inline-flex px-2 py-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-widest bg-[#09757a]/10 border border-[#09757a]/20 text-[#09757a]">
                                        Strategic Partner
                                    </span>
                                    <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic text-foreground">
                                        Linich Tools
                                    </h2>
                                    <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">
                                        Our primary partnership delivering exclusive access to Linich's
                                        premium industrial tool range.
                                    </p>
                                    <span className="inline-flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-widest border-b border-[#09757a] pb-0.5 text-[#09757a]">
                                        Explore Products <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Brand Grid - 3 cols on mobile for better space usage */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
                    {brands.map((brand, idx) => (
                        <Link
                            key={brand.name}
                            href={`/shop?brand=${encodeURIComponent(brand.name)}`}
                            className={`block animate-in fade-in slide-in-from-bottom-4 duration-500 delay-[${idx * 30}ms]`}
                        >
                            <div className="group/brand-card relative aspect-square flex items-center justify-center p-2 sm:p-3 md:p-4 bg-card rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-[#09757a]/20 transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-border active:scale-95">
                                {/* Soft lighting effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-black/5 opacity-50" />

                                <div className="w-full h-full relative group-hover/brand-card:scale-110 transition-all duration-500 p-1 sm:p-2">
                                    <Image
                                        src={brand.logo}
                                        alt={brand.name}
                                        fill
                                        className="object-contain mix-blend-multiply"
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-10 sm:mt-12 md:mt-16 text-center">
                    <div className="max-w-xl mx-auto bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden shadow-xl sm:shadow-2xl">
                        <div className="absolute top-0 right-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-[#09757a]/10 blur-[60px] sm:blur-[80px] md:blur-[90px]" />
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase mb-2 sm:mb-3 tracking-tighter text-foreground leading-tight">
                            Want to collaborate with Hexamech?
                        </h3>
                        <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm mb-5 sm:mb-6 md:mb-8 font-medium px-2">
                            If you are a tool manufacturer or brand looking to expand your reach in
                            India, partner with us for distribution and growth.
                        </p>
                        <Link href="/contact" className="inline-block transform transition hover:scale-105 active:scale-95">
                            <Button className="h-10 sm:h-11 md:h-12 px-5 sm:px-6 md:px-8 font-black uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs bg-[#09757a] hover:bg-white hover:text-[#09757a] text-white rounded-lg shadow-xl border border-transparent hover:border-[#09757a]">
                                Become a Brand Partner
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
