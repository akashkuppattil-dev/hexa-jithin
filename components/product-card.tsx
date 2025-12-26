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
import { toast } from "sonner" // Assuming sonner is used or generic alert

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
      } catch (err) {
        // user cancelled
      }
    } else {
      navigator.clipboard.writeText(url)
      // If we don't have a toast component easily available, just rely on the action being done or use standard alert
      // But assuming there is one, or just standard alert for now if unsure. 
      // User didn't specify feedback, but clipboard copy is standard fallback.
      alert("Link copied to clipboard!")
    }
  }

  return (
    <Card className="group relative overflow-hidden bg-[#1a2235] border border-white/10 flex flex-col h-full rounded-2xl hover:shadow-2xl hover:border-orange-500/40 transition-all duration-300 !pt-0">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Product Image - Dominant & Clear */}
        <div className="relative h-[320px] md:h-[360px] w-full overflow-hidden bg-white">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* SKU Badge - Minimal */}
          <div className="absolute top-6 left-6 z-20">
            <span className="bg-black/80 backdrop-blur-md text-white border border-white/20 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-xl">
              {product.sku}
            </span>
          </div>

          {/* Stock Status */}
          {product.inStock && (
            <div className="absolute top-6 right-6 z-20">
              <div className="flex items-center gap-2 bg-green-600 text-white px-3 py-1.5 rounded-lg shadow-xl">
                <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-widest">In Stock</span>
              </div>
            </div>
          )}

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="absolute bottom-6 right-6 z-30 h-10 w-10 bg-[#1a2235]/80 backdrop-blur-md hover:bg-orange-500 text-white border border-white/10 rounded-xl flex items-center justify-center shadow-2xl transform transition-all hover:scale-110 active:scale-95 group/share"
            title="Share Product"
          >
            <Share2 className="h-5 w-5 group-hover/share:rotate-12 transition-transform" />
          </button>

          {/* Overlay Gradient for Text Contrast (Bottom only) */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6 flex-grow flex flex-col">
          {/* Brand & Stats */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="rounded text-[10px] font-bold uppercase tracking-wider border-white/10 text-zinc-500">
                {product.brand}
              </Badge>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-lg text-white mb-2 leading-snug group-hover:text-orange-500 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 mb-6">
            {product.description}
          </p>

          {/* Action Buttons - Always Visible & Strong */}
          <div className="mt-auto grid grid-cols-2 gap-3">
            <Button
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg h-10 text-[10px] font-black uppercase tracking-widest transition-all"
              onClick={(e) => e.stopPropagation()} // Let Link handle view
            >
              View Details
            </Button>

            <Button
              className="bg-orange-600 hover:bg-orange-500 text-white rounded-lg h-10 text-[10px] font-black uppercase tracking-widest shadow-xl shadow-orange-900/40 transition-all active:scale-95"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(
                  `https://wa.me/917510638693?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20SKU:%20${product.sku}`,
                  "_blank",
                )
              }}
            >
              Get Quote
            </Button>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
