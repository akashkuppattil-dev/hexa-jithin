"use client"

import { brands, products } from "@/lib/products"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ChevronRight } from "lucide-react"

export function BrandsMenu({ onClose }: { onClose: () => void }) {
    const [selectedBrand, setSelectedBrand] = useState(brands[0])

    const filteredProducts = products.filter(p => p.brand === selectedBrand)

    return (
        <div
            className="absolute top-full left-1/2 -translate-x-[20%] mt-0 pt-2 w-[850px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-popover shadow-2xl rounded-lg border border-border overflow-hidden flex h-[450px]">
                {/* Left Column: Brands List */}
                <div className="w-[220px] bg-muted/50 border-r border-border flex flex-col">
                    <div className="p-3 border-b border-border bg-popover">
                        <span className="text-[10px] font-black text-[#09757a] uppercase tracking-widest">Our Brands</span>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {brands.map((brand) => (
                            <button
                                key={brand}
                                onMouseEnter={() => setSelectedBrand(brand)}
                                onClick={() => {
                                    window.location.href = `/shop?brand=${encodeURIComponent(brand)}`
                                    onClose()
                                }}
                                className={`w-full text-left px-5 py-3 text-[11px] font-black transition-all flex items-center justify-between group ${selectedBrand === brand
                                    ? "bg-popover text-[#09757a] border-l-4 border-[#09757a]"
                                    : "text-foreground hover:bg-muted/80 hover:text-[#09757a]"
                                    }`}
                            >
                                {brand}
                                <ChevronRight className={`h-3 w-3 transition-transform ${selectedBrand === brand ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Featured Products */}
                <div className="flex-1 bg-popover flex flex-col overflow-hidden">
                    <div className="p-5 pb-2 flex items-center justify-between">
                        <h3 className="text-sm font-black text-foreground uppercase tracking-tight">{selectedBrand} <span className="text-zinc-500 font-bold">Tools</span></h3>
                        <Link
                            href={`/shop?brand=${encodeURIComponent(selectedBrand)}`}
                            onClick={onClose}
                            className="text-[10px] font-black text-[#09757a] hover:underline uppercase tracking-widest"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="flex-1 overflow-y-auto p-5 pt-2 custom-scrollbar">
                        <div className="grid grid-cols-3 gap-3">
                            {filteredProducts.map((product) => (
                                <Link
                                    key={product.id}
                                    href={`/product/${product.id}`}
                                    onClick={onClose}
                                    className="group flex flex-col overflow-hidden rounded border border-border/50 hover:border-[#09757a]/20 hover:shadow-sm transition-all bg-card"
                                >
                                    <div className="relative aspect-square w-full overflow-hidden bg-white">
                                        <Image
                                            src={product.image || "/placeholder.svg"}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-2 space-y-0.5">
                                        <p className="text-[10px] font-black text-foreground group-hover:text-[#09757a] transition-colors line-clamp-2 leading-tight uppercase tracking-tight">
                                            {product.name}
                                        </p>
                                        <p className="text-[8px] text-[#09757a] font-black uppercase tracking-widest">{product.sku}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="p-3 border-t border-border bg-muted/30">
                        <Link
                            href="/shop"
                            className="text-[9px] text-center block font-black text-muted-foreground hover:text-[#09757a] transition-colors uppercase tracking-[0.2em]"
                            onClick={onClose}
                        >
                            EXPLORE ALL PROFESSIONAL TOOLS
                        </Link>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #f1f1f1;
                    border-radius: 10px;
                }
                 .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #e5e7eb;
                }
            `}</style>
        </div>
    )
}
