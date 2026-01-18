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
    <Card className="group relative overflow-hidden bg-card border border-border flex flex-col h-full rounded-xl hover:shadow-xl hover:border-[#09757a]/30 transition-all duration-500 active:scale-[0.98]">
      {/* Product Image Section */}
      <div className="relative h-[160px] sm:h-[180px] md:h-[220px] lg:h-[250px] w-full overflow-hidden bg-muted">
        <Link href={`/product/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            loading="lazy"
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
          className="absolute bottom-2 right-2 z-30 h-8 w-8 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0"
        >
          <MessageCircle className="h-4 w-4 fill-current" />
        </button>

        {/* SKU Badge - Compact */}
        <div className="absolute top-2 left-2 z-20 pointer-events-none">
          <span className="bg-background/80 backdrop-blur-md text-foreground/70 text-[7px] md:text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-border">
            {product.sku}
          </span>
        </div>

        {/* Stock Status - Tiny */}
        {product.inStock && (
          <div className="absolute top-2 right-2 z-20 pointer-events-none">
            <div className="flex items-center gap-1 bg-emerald-500/90 backdrop-blur-md px-1.5 py-0.5 rounded shadow-sm">
              <div className="h-1 w-1 rounded-full bg-white animate-pulse" />
              <span className="text-[7px] font-black text-white uppercase tracking-tighter">In Stock</span>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-2 sm:p-3 md:p-4 flex-grow flex flex-col bg-card">
        {/* Brand */}
        <div className="mb-0.5">
          <span className="text-[8px] md:text-[9px] font-black text-[#09757a] uppercase tracking-widest">
            {product.brand}
          </span>
        </div>

        {/* Product Name - Compact for 2 Columns */}
        <Link href={`/product/${product.id}`} className="group-hover:text-[#09757a] transition-colors">
          <h3 className="font-bold text-[11px] sm:text-xs md:text-sm lg:text-base text-foreground mb-1 leading-tight line-clamp-2 uppercase tracking-tight">
            {product.name}
          </h3>
        </Link>

        {/* Description - Hidden on small mobile to stay compact */}
        <p className="hidden sm:line-clamp-2 text-[10px] text-muted-foreground mb-3 font-medium leading-relaxed">
          {product.description}
        </p>

        {/* Premium Detail Link */}
        <div className="mt-auto pt-2 flex items-center justify-between border-t border-border">
          <Link href={`/product/${product.id}`} className="text-[8px] md:text-[9px] font-black text-muted-foreground hover:text-[#09757a] uppercase tracking-widest flex items-center gap-1 transition-all">
            View <ArrowRight className="h-2.5 w-2.5" />
          </Link>

          <span className="text-[9px] font-black text-[#09757a] uppercase tracking-widest bg-[#09757a]/5 px-2 py-0.5 rounded">
            Enquire
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
