"use client"

import { categories } from "@/lib/products"
import Link from "next/link"
import React from "react"
import {
    ChevronRight,
    Wrench,
    Zap,
    Paintbrush,
    ArrowUpCircle,
    Settings2,
    Wind,
    Sun,
    Ruler,
    Hammer,
    Sparkles
} from "lucide-react"

const IconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="h-4 w-4" />,
    Paintbrush: <Paintbrush className="h-4 w-4" />,
    ArrowUpCircle: <ArrowUpCircle className="h-4 w-4" />,
    Settings2: <Settings2 className="h-4 w-4" />,
    Wrench: <Wrench className="h-4 w-4" />,
    Wind: <Wind className="h-4 w-4" />,
    Sun: <Sun className="h-4 w-4" />,
    Ruler: <Ruler className="h-4 w-4" />,
    Hammer: <Hammer className="h-4 w-4" />,
    Sparkles: <Sparkles className="h-4 w-4" />,
}

export function MegaMenu({ onClose }: { onClose: () => void }) {
    return (
        <div
            className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[750px] z-50 animate-in fade-in slide-in-from-top-1 duration-150"
            onMouseLeave={onClose}
        >
            <div className="bg-popover shadow-2xl rounded-xl border border-border p-6 relative overflow-hidden transition-all">
                <div className="flex items-center gap-2 mb-4 border-b border-border pb-3">
                    <Wrench className="h-3.5 w-3.5 text-[#09757a]" />
                    <span className="text-[10px] font-black text-[#09757a] uppercase tracking-widest">Product Categories</span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={`/shop?category=${category.id}`}
                            className="group flex items-center justify-between py-1.5 px-3 -mx-3 rounded-lg hover:bg-accent/50 transition-all text-muted-foreground hover:text-foreground"
                            onClick={onClose}
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 rounded-md bg-muted text-muted-foreground group-hover:bg-[#09757a]/10 group-hover:text-[#09757a] transition-colors">
                                    {IconMap[category.icon] || <Wrench className="h-3.5 w-3.5" />}
                                </div>
                                <span className="font-bold text-foreground group-hover:text-[#09757a] transition-colors text-[11px] uppercase tracking-tight">
                                    {category.name}
                                </span>
                            </div>
                            <ChevronRight className="h-2.5 w-2.5 text-muted-foreground group-hover:text-[#09757a] group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                </div>

                <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
                    <p className="text-[10px] text-muted-foreground italic">Authorized diagnostics & professional industrial solutions.</p>
                    <Link
                        href="/shop"
                        className="text-[10px] font-black text-[#09757a] hover:text-[#0b8d93] uppercase tracking-widest flex items-center gap-1.5 group"
                        onClick={onClose}
                    >
                        Full Catalog
                        <span className="p-1 bg-[#09757a]/10 rounded-full group-hover:bg-[#09757a] group-hover:text-white transition-all">
                            <ChevronRight className="h-2.5 w-2.5" />
                        </span>
                    </Link>
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#09757a]/5 rounded-full blur-3xl -z-10"></div>
            </div>
        </div>
    )
}
