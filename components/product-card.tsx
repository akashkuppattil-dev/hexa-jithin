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
            className="object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 250px"
            priority={parseInt(product.id) <= 4}
          />
        </Link>

        {/* Floating Quick WhatsApp - 'Fast' Enquiry */}
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            window.open(
              `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
              "_blank",
            )
          }}
          className="absolute bottom-2 right-2 z-30 h-7 w-7 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100"
        >
          <MessageCircle className="h-3.5 w-3.5 fill-current" />
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

      <CardContent className="p-2 sm:p-2.5 flex-grow flex flex-col bg-card">
        {/* Brand & SKU */}
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-[7px] md:text-[8px] font-black text-[#09757a] uppercase tracking-widest truncate">
            {product.brand}
          </span>
          <span className="text-[7px] md:text-[8px] font-black text-zinc-500 uppercase whitespace-nowrap">
            {product.sku}
          </span>
        </div>

        {/* Product Name - Compact for 2-4 Columns */}
        <Link href={`/product/${product.id}`} className="group-hover:text-[#09757a] transition-colors flex-grow">
          <h3 className="font-extrabold text-[10px] sm:text-[11px] md:text-xs lg:text-sm text-foreground mb-1 leading-tight line-clamp-2 uppercase tracking-tight">
            {product.name}
          </h3>
        </Link>

        {/* Premium Detail Link */}
        <div className="mt-2 flex items-center justify-between">
          <Link href={`/product/${product.id}`} className="text-[7px] md:text-[8px] font-black text-[#111] hover:text-[#09757a] uppercase tracking-widest flex items-center gap-1 transition-all">
            DETAILS <ArrowRight className="h-2 w-2" />
          </Link>

          <span className="text-[8px] font-black text-[#09757a] uppercase tracking-widest flex items-center gap-1">
            ENQUIRE
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
