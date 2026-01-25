import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MessageCircle, Mail, Phone, ShoppingCart, Info, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { CONTACT } from "@/lib/constants"
import { ProductShareButton } from "@/components/product/product-share-button"
import { ProductInquiryForm } from "@/components/product/product-inquiry-form"

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
        <div className="w-full px-4 sm:px-6 md:px-8">

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
                    className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  />
                </div>

                {product.isOffer && product.offerBadge && (
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-20">
                    <Badge className="bg-[#09757a] text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest px-1.5 sm:px-2 py-0.5 border-none shadow-lg">
                      {product.offerBadge}
                    </Badge>
                  </div>
                )}

                {/* Stock Status - Updated for Urgency */}
                {product.inStock && (
                  <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 z-20 pointer-events-none">
                    <div className="flex items-center gap-1.5 bg-emerald-500/90 backdrop-blur-md px-2 py-1 rounded-lg shadow-md border border-white/20">
                      <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-[8px] sm:text-[9px] font-black text-white uppercase tracking-widest">Ready to Ship - 24h</span>
                    </div>
                  </div>
                )}

                <ProductShareButton product={product} className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 z-20" />
              </div>
            </div>

            {/* RIGHT COLUMN: details & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">

              {/* Header Info */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-black uppercase tracking-widest leading-none">
                  <span className="text-[#09757a] px-2 py-1 bg-[#09757a]/10 rounded border border-[#09757a]/20">{product.brand}</span>
                  <span className="text-border hidden sm:inline">|</span>
                  <span className="text-foreground font-black">SKU: {product.sku}</span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-foreground leading-tight tracking-tighter uppercase mt-1">
                  {product.name}
                </h1>
                <p className="text-[13px] sm:text-sm md:text-base text-foreground font-black leading-relaxed border-l-[2px] sm:border-l-[3px] border-[#09757a] pl-3 sm:pl-4 md:pl-5 italic mt-2">
                  {product.description}
                </p>
              </div>

              {/* Specs Grid form */}
              <div className="bg-card backdrop-blur-md rounded-lg sm:rounded-xl border border-border overflow-hidden shadow-lg sm:shadow-xl">
                <div className="bg-muted px-4 md:px-5 py-2.5 md:py-3 border-b border-border flex items-center gap-2">
                  <Activity className="h-3.5 w-3.5 text-[#09757a]" />
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground">Specifications</span>
                </div>
                <div className="p-0.5 sm:p-1">
                  {/* Enhanced Specs List matching IndiaMart style */}
                  {[
                    ["Brand", product.brand],
                    ["Model Number", product.sku],
                    ["HSN Code", product.hsn],
                    ...Object.entries(product.specs)
                  ].map(([key, value], idx, arr) => (
                    value && (
                      <div key={key} className={`flex justify-between items-center px-4 md:px-5 py-2.5 md:py-3 ${idx !== arr.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/50 transition-colors`}>
                        <span className="text-[10px] sm:text-[11px] font-black text-foreground uppercase tracking-widest">{key}</span>
                        <span className="text-[11px] sm:text-[12px] font-black text-foreground text-right">{value}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>

              {/* Call to Action Area */}
              <div className="space-y-3 pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-foreground">Procurement</span>
                    <span className="text-foreground font-black text-[11px] sm:text-xs uppercase">Bulk Orders Available</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] sm:text-[10px] uppercase font-black tracking-widest text-foreground">Min Order</span>
                    <span className="text-foreground font-black text-[11px] sm:text-xs uppercase">{product.minOrderQty} Units</span>
                  </div>
                </div>

                <a
                  href={`${CONTACT.WHATSAPP_URL}?text=I am interested in ${encodeURIComponent(product.name)} (SKU: ${product.sku})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-12 bg-[#09757a] hover:bg-white hover:text-[#09757a] text-white rounded-lg text-xs font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 border border-transparent hover:border-[#09757a]">
                    <MessageCircle className="h-4 w-4 fill-current" />
                    Get Quote on WhatsApp
                  </Button>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${CONTACT.OFFICIAL_PHONE.replace(/\s+/g, '')}`}>
                    <Button variant="outline" className="w-full h-10 border-foreground bg-card hover:bg-[#09757a] text-foreground hover:text-white font-black uppercase tracking-widest text-[10px] rounded-lg transition-all active:scale-95">
                      <Phone className="h-3.5 w-3.5 mr-2" />
                      <span className="hidden sm:inline">Call Sales</span>
                      <span className="sm:hidden">Call</span>
                    </Button>
                  </a>
                  <a href={`mailto:${CONTACT.OFFICIAL_EMAIL}?subject=Enquiry: ${product.name}`}>
                    <Button variant="outline" className="w-full h-10 border-foreground bg-card hover:bg-[#09757a] text-foreground hover:text-white font-black uppercase tracking-widest text-[10px] rounded-lg transition-all active:scale-95">
                      <Mail className="h-3.5 w-3.5 mr-2" />
                      <span className="hidden sm:inline">Email Enquiry</span>
                      <span className="sm:hidden">Email</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              <ProductInquiryForm product={product} />

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-4">
                <div className="bg-card p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-1"><Info className="h-3.5 w-3.5" /></div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-foreground">Genuine</span>
                </div>
                <div className="bg-card p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-1"><Activity className="h-3.5 w-3.5" /></div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-foreground">Support</span>
                </div>
                <div className="bg-card p-2.5 md:p-3 rounded-lg sm:rounded-xl border border-border text-center shadow-md sm:shadow-lg group hover:border-[#09757a]/40 transition-colors active:scale-[0.98]">
                  <div className="text-[#09757a] flex justify-center mb-1"><ShoppingCart className="h-3.5 w-3.5" /></div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-foreground">Fast Ship</span>
                </div>
              </div>

            </div>
          </div>

          {/* Related Products Section */}
          {(() => {
            // Logic to get 5 related items: Priority 1: Category, Priority 2: Others (Fallback)
            const sameCategory = products.filter((p) => p.category === product.category && p.id !== product.id)
            const others = products.filter((p) => p.category !== product.category && p.id !== product.id)
            const displayProducts = [...sameCategory, ...others].slice(0, 5)

            if (displayProducts.length === 0) return null

            return (
              <div className="mt-12 sm:mt-16 border-t border-border pt-8 sm:pt-10">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-tighter">
                    Explore <span className="text-[#09757a]">Related Equipment</span>
                  </h3>
                  <Link href="/shop" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto h-10 border-[#09757a]/30 text-[#09757a] hover:bg-[#09757a] hover:text-white text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all">
                      View More Products
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {displayProducts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/product/${related.id}`}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-[#09757a]/50 transition-all hover:shadow-lg flex flex-col"
                    >
                      <div className="relative aspect-square bg-muted">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, 200px"
                        />
                      </div>
                      <div className="p-3 sm:p-4 flex-1 flex flex-col">
                        <div className="mb-2">
                          <p className="text-[9px] sm:text-[10px] font-bold text-[#09757a] uppercase tracking-wider mb-1">{related.brand}</p>
                          <h4 className="text-[11px] sm:text-xs font-black text-foreground uppercase leading-tight line-clamp-2 group-hover:text-[#09757a] transition-colors">
                            {related.name}
                          </h4>
                        </div>
                        <div className="mt-auto space-y-1.5 pt-2 border-t border-border/50">
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">SKU</span>
                            <span className="text-[9px] text-foreground font-bold">{related.sku}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[9px] text-muted-foreground uppercase font-bold tracking-tighter">MOQ</span>
                            <span className="text-[9px] text-foreground font-bold">{related.minOrderQty} Unit</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })()}
        </div>
      </div>
    </div>
  )
}
