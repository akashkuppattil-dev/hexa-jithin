"use client"

import { Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"

interface ProductShareButtonProps {
    product: Product
    className?: string
}

export function ProductShareButton({ product, className }: ProductShareButtonProps) {
    const handleShare = async () => {
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
            alert("Link copied to clipboard!")
        }
    }

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={handleShare}
            className={`rounded-full bg-[#09757a] hover:bg-white text-white hover:text-[#09757a] border-none shadow-lg transition-all h-9 w-9 ${className}`}
            title="Share Product"
        >
            <Share2 className="h-4 w-4" />
        </Button>
    )
}
