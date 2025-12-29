import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Phone, ShoppingCart, Info, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { ProductShareButton } from "@/components/product/product-share-button"

export const metadata = {
  title: "Product Details | Hexamech Linich Tools",
  description: "View detailed specifications of our automotive tools",
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params
  const product = products.find((p) => p.id === resolvedParams.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground pb-12 sm:pb-16 transition-colors">
      <div className="pt-3 sm:pt-4 md:pt-6 lg:pt-10">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-[1400px]">

          {/* Breadcrumb */}
          <div className="mb-4 sm:mb-5 md:mb-6">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-[#09757a] transition-colors text-[9px] sm:text-[10px] font-black uppercase tracking-widest active:scale-95"
            >
              <ArrowLeft className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 md:gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Large Product Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 mb-4 sm:mb-5 md:mb-6 lg:mb-0">
              <div className="bg-card block backdrop-blur-md rounded-xl sm:rounded-2xl border border-border relative overflow-hidden group shadow-xl sm:shadow-2xl">
                <div className="relative aspect-square w-full">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 600px"
                  />
                </div>

                {product.isOffer && product.offerBadge && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
                    <Badge className="bg-[#09757a] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 border-none shadow-lg">
                      {product.offerBadge}
                    </Badge>
                  </div>
                )}

                <ProductShareButton product={product} className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-20" />
              </div>
            </div>

            {/* RIGHT COLUMN: details & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">

              {/* Header Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                  <span className="text-[#09757a] px-1.5 sm:px-2 py-0.5 bg-[#09757a]/10 rounded border border-[#09757a]/20">{product.brand}</span>
                  <span className="text-border hidden sm:inline">|</span>
                  <span className="text-muted-foreground font-bold">SKU: {product.sku}</span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight tracking-tighter uppercase">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-relaxed border-l-[2px] sm:border-l-[3px] border-[#09757a] pl-3 sm:pl-4 md:pl-5 italic">
                  {product.description}
                </p>
              </div>

              {/* Specs Grid form */}
              <div className="bg-card backdrop-blur-md rounded-lg sm:rounded-xl border border-border overflow-hidden shadow-lg sm:shadow-xl">
                <div className="bg-muted px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 border-b border-border flex items-center gap-1.5 sm:gap-2">
                  <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#09757a]" />
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-muted-foreground">Specifications</span>
                </div>
                <div className="p-0.5 sm:p-1">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={key} className={`flex justify-between items-center px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 ${idx !== Object.entries(product.specs).length - 1 ? 'border-b border-border' : ''}`}>
                      <span className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{key}</span>
                      <span className="text-[10px] sm:text-[11px] font-black text-foreground text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Area */}
              <div className="space-y-2.5 sm:space-y-3 pt-2 sm:pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <div className="flex flex-col">
                    <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-widest text-muted-foreground/60">Procurement</span>
                    <span className="text-muted-foreground font-bold text-[10px] sm:text-xs uppercase">Bulk Orders Available</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[8px] sm:text-[9px] uppercase font-black tracking-widest text-muted-foreground/60">Min Order</span>
                    <span className="text-foreground font-bold text-[10px] sm:text-xs uppercase">{product.minOrderQty}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917510638693?text=I am interested in ${encodeURIComponent(product.name)} (SKU: ${product.sku})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-10 sm:h-11 md:h-12 bg-[#09757a] hover:bg-white hover:text-[#09757a] text-white rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 sm:gap-2.5 border border-transparent hover:border-[#09757a]">
                    <MessageCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
                    Get Quote on WhatsApp
                  </Button>
                </a>

                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <a href="tel:+917510638693">
                    <Button variant="outline" className="w-full h-9 sm:h-10 border-border bg-card hover:bg-[#09757a] text-muted-foreground hover:text-white font-black uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] rounded-lg transition-all active:scale-95">
                      <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1.5 sm:mr-2" />
                      <span className="hidden sm:inline">Call Sales</span>
                      <span className="sm:hidden">Call</span>
                    </Button>
                  </a>
                  <a href={`mailto:hexamechlinichtools@gmail.com?subject=Enquiry: ${product.name}`}>
                    <Button variant="outline" className="w-full h-9 sm:h-10 border-border bg-card hover:bg-[#09757a] text-muted-foreground hover:text-white font-black uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] rounded-lg transition-all active:scale-95">
                      <Mail className="h-3 w-3 sm:h-3.5 sm:w-3.5 mr-1.5 sm:mr-2" />
                      <span className="hidden sm:inline">Email Enquiry</span>
                      <span className="sm:hidden">Email</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 sm:pt-4">
                <div className="bg-card p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-0.5 sm:mb-1"><Info className="h-3 w-3 sm:h-3.5 sm:w-3.5" /></div>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wide sm:tracking-wider text-muted-foreground">Genuine</span>
                </div>
                <div className="bg-card p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-0.5 sm:mb-1"><Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5" /></div>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wide sm:tracking-wider text-muted-foreground">Support</span>
                </div>
                <div className="bg-card p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-0.5 sm:mb-1"><ShoppingCart className="h-3 w-3 sm:h-3.5 sm:w-3.5" /></div>
                  <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wide sm:tracking-wider text-muted-foreground">Fast Ship</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
