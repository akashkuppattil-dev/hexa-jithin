"use client"

import Link from "next/link"
import Image from "next/image"
import { useMemo } from "react"
import { searchProducts, categories } from "@/lib/products"

interface SearchDropdownProps {
  query: string
  onClose: () => void
}

export function SearchDropdown({ query, onClose }: SearchDropdownProps) {
  const results = useMemo(() => searchProducts(query).slice(0, 5), [query])
  const matchingCategories = useMemo(() =>
    categories.filter((c) => c.name.toLowerCase().includes(query.toLowerCase())).slice(0, 3),
    [query])

  if (results.length === 0 && matchingCategories.length === 0) {
    return (
      <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-2xl p-3 z-50">
        <p className="text-[11px] text-muted-foreground italic">No results found for "{query}"</p>
      </div>
    )
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-1.5 bg-popover border border-border rounded-lg shadow-2xl overflow-hidden z-50 transition-all">
      {matchingCategories.length > 0 && (
        <div className="p-2.5 border-b border-border">
          <p className="text-[9px] font-black text-muted-foreground mb-2 uppercase tracking-[0.2em]">Categories</p>
          <div className="flex flex-wrap gap-1.5">
            {matchingCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/shop?category=${cat.id}`}
                onClick={onClose}
                className="text-[10px] bg-muted/50 text-muted-foreground px-2.5 py-0.5 rounded border border-border hover:bg-[#09757a] hover:text-white transition-all font-black uppercase tracking-tight"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {results.length > 0 && (
        <div className="p-2.5">
          <p className="text-[9px] font-black text-muted-foreground mb-2 uppercase tracking-[0.2em]">Top Matches</p>
          <div className="space-y-1">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={onClose}
                className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-accent/50 transition-all group"
              >
                <div className="relative h-8 w-8 rounded overflow-hidden bg-muted">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-bold truncate text-foreground/80 group-hover:text-foreground transition-colors uppercase tracking-tight">{product.name}</p>
                  <p className="text-[9px] text-[#09757a] font-black truncate uppercase tracking-widest">
                    {product.brand}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href={`/shop?search=${encodeURIComponent(query)}`}
            onClick={onClose}
            className="block text-center text-[10px] text-[#09757a] font-black mt-2.5 pt-2 border-t border-border hover:text-[#0b8d93] transition-colors uppercase tracking-widest"
          >
            Full Result Set →
          </Link>
        </div>
      )}
    </div>
  )
}
