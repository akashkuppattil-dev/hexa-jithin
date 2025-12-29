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
    <Card className="group relative overflow-hidden bg-card border border-border flex flex-col h-full rounded-xl hover:shadow-xl hover:border-[#09757a]/30 transition-all duration-500">
      <Link href={`/product/${product.id}`} className="flex flex-col h-full">
        {/* Product Image - Improved for theme awareness */}
        <div className="relative h-[220px] md:h-[250px] w-full overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />

          {/* Theme-aware Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 dark:from-black/40 via-transparent to-transparent opacity-60" />

          {/* SKU Badge */}
          <div className="absolute top-3 left-3 z-20">
            <span className="bg-background/80 backdrop-blur-md text-foreground/70 text-[8px] font-bold uppercase tracking-[0.2em] px-2 py-1 rounded border border-border">
              {product.sku}
            </span>
          </div>

          {/* Stock Status */}
          {product.inStock && (
            <div className="absolute top-3 right-3 z-20">
              <div className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-md px-2 py-1 rounded shadow-md border border-white/20">
                <div className="h-1 w-1 rounded-full bg-white animate-pulse" />
                <span className="text-[8px] font-bold text-white uppercase tracking-widest">In Stock</span>
              </div>
            </div>
          )}

          {/* Improved Share Button */}
          <button
            onClick={handleShare}
            className="absolute bottom-3 right-3 z-30 h-8 w-8 bg-background border border-border text-foreground hover:bg-[#09757a] hover:text-white rounded-md flex items-center justify-center shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
            title="Share Product"
          >
            <Share2 className="h-4 w-4" />
          </button>
        </div>

        <CardContent className="p-4 flex-grow flex flex-col bg-card">
          {/* Brand */}
          <div className="mb-1">
            <span className="text-[9px] font-bold text-[#09757a] uppercase tracking-[0.3em]">
              {product.brand}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-sm md:text-base text-foreground mb-2 leading-tight group-hover:text-[#09757a] transition-colors line-clamp-2 uppercase tracking-tight">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-[10px] text-muted-foreground line-clamp-2 mb-4 font-medium leading-relaxed">
            {product.description}
          </p>

          {/* Actions - Refined UI */}
          <div className="mt-auto pt-4 flex items-center justify-between gap-3 border-t border-border">
            <Link href={`/product/${product.id}`} className="text-[9px] font-bold text-muted-foreground hover:text-foreground uppercase tracking-widest flex items-center gap-1.5 transition-all group/details">
              Details <ArrowRight className="h-3 w-3 group-hover/details:translate-x-1 transition-transform" />
            </Link>

            <Button
              className="bg-foreground hover:bg-[#09757a] text-background px-4 h-9 rounded-md text-[9px] font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md"
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
