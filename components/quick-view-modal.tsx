"use client"

import Image from "next/image"
import { MessageCircle, Lock } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useCart } from "@/context/cart-context"
import type { Product } from "@/lib/products"

interface QuickViewModalProps {
  product: Product
  open: boolean
  onClose: () => void
}

export function QuickViewModal({ product, open, onClose }: QuickViewModalProps) {
  const [quantity, setQuantity] = useState(product.minOrderQty)
  const { addToCart, addToWishlist, isInWishlist, addToCompare, isInCompare } = useCart()

  const handleAddToCart = () => {
    // Note: Prices would need to be fetched from a separate source
    // as the Product interface doesn't include pricing
    addToCart({
      id: product.id,
      name: product.name,
      sku: product.sku,
      price: 0, // Price not available in Product interface
      minOrderQty: product.minOrderQty,
      image: product.image,
      quantity,
    })
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="relative aspect-square bg-secondary/50 rounded-lg overflow-hidden">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain p-6" />
            {product.isOffer && product.offerBadge && (
              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{product.offerBadge}</Badge>
            )}
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">{product.brand}</p>
              <h2 className="text-2xl font-bold text-foreground">{product.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">SKU: {product.sku}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Pricing</p>
              <p className="text-lg font-bold text-primary">Contact for Quote</p>
              <p className="text-xs text-muted-foreground mt-1">Wholesale pricing available</p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            {/* Specs */}
            <div className="border border-border rounded-lg overflow-hidden">
              <div className="bg-secondary/50 px-4 py-2">
                <h4 className="font-semibold text-sm">Specifications</h4>
              </div>
              <div className="p-4 space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-2 border-t border-border">
                  <span className="text-muted-foreground">HSN Code</span>
                  <span className="font-medium">{product.hsn}</span>
                </div>
              </div>
            </div>

            {/* Actions - updated with Request Price and WhatsApp buttons side by side */}
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 h-10 text-sm border-primary/30 bg-primary/5 hover:bg-primary/10 font-medium"
                disabled
              >
                <Lock className="h-4 w-4 mr-2" />
                Request Price
              </Button>
              <Button
                className="flex-1 h-10 text-sm bg-[#25D366] hover:bg-[#128C7E] text-white"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(
                    `https://wa.me/919037872505?text=I'm%20interested%20in%20${encodeURIComponent(product.name)}%20${product.sku}`,
                    "_blank",
                  )
                }}
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Stock Status */}
            <div className={`text-sm font-medium ${product.inStock ? "text-primary" : "text-destructive"}`}>
              {product.inStock ? "✓ In Stock" : "✗ Out of Stock"}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
