"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/products"
import { MessageCircle, ArrowRight, ShieldCheck, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { memo } from "react"

interface ProductCardProps {
  product: Product
}

function ProductCardComponent({ product }: ProductCardProps) {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const url = `${window.location.origin}/product/${product.id}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.name,
          text: `Check out ${product.name} on Hexamech`,
          url: url,
        })
      } catch (err) { }
    } else {
      navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Card className="group relative overflow-hidden bg-white border border-border flex flex-col h-full rounded-2xl p-0 gap-0 hover:shadow-2xl hover:border-[#09757a]/40 transition-all duration-500 active:scale-[0.98]">
      {/* Product Image Section - Pure Edge-to-Edge */}
      <div className="relative h-[200px] sm:h-[220px] md:h-[240px] lg:h-[260px] w-full overflow-hidden bg-white rounded-t-2xl">
        <Link href={`/product/${product.id}`} className="block h-full w-full">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-all duration-700 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
            priority={parseInt(product.id) <= 4}
          />
        </Link>

        {/* Floating Quick Share */}
        <button
          onClick={handleShare}
          className="absolute bottom-2 right-2 z-30 h-7 w-7 bg-background/80 backdrop-blur-md text-[#09757a] border border-[#09757a]/20 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          <Share2 className="h-3.5 w-3.5" />
        </button>

        {/* Stock Status - Tiny */}
        {product.inStock && (
          <div className="absolute top-2 right-2 z-20 pointer-events-none">
            <div className="flex items-center gap-1 bg-emerald-500/90 backdrop-blur-md px-1.5 py-0.5 rounded shadow-sm">
              <div className="h-1 w-1 rounded-full bg-white animate-pulse" />
              <span className="text-[6px] font-black text-white uppercase tracking-tighter">Stock</span>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-3 sm:p-4 flex-grow flex flex-col bg-card">
        {/* Brand & SKU */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="text-[10px] sm:text-[11px] md:text-[12px] font-bold text-[#09757a] uppercase tracking-wide truncate">
            {product.brand}
          </span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-gray-500 uppercase whitespace-nowrap">
            {product.sku}
          </span>
        </div>

        {/* Product Name - Compact for 2-4 Columns */}
        <Link href={`/product/${product.id}`} className="group-hover:text-[#09757a] transition-colors">
          <h3 className="font-extrabold text-[12px] sm:text-xs md:text-sm lg:text-base text-foreground mb-2 leading-tight line-clamp-2 uppercase tracking-tight">
            {product.name}
          </h3>
        </Link>

        {/* Key Features */}
        {product.features && product.features.length > 0 && (
          <div className="flex-grow space-y-1 mb-3">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#09757a]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="h-1 w-1 rounded-full bg-[#09757a]" />
                </div>
                <span className="text-[11px] sm:text-[12px] text-gray-700 leading-tight line-clamp-1 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Premium Detail Link */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-border/50">
          <Link href={`/product/${product.id}`} className="text-[10px] sm:text-[11px] font-bold text-gray-700 hover:text-[#09757a] uppercase tracking-wide flex items-center gap-1 transition-all">
            DETAILS <ArrowRight className="h-2.5 w-2.5" />
          </Link>

          <span className="text-[10px] sm:text-[11px] font-bold text-[#09757a] uppercase tracking-wide flex items-center gap-1">
            ENQUIRE
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
