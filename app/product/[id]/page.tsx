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
    <div className="min-h-screen bg-[#05060a] text-zinc-100 pb-20">
      <div className="pt-4 md:pt-10">
        <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">

          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors text-xs font-bold uppercase tracking-widest"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Large Product Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 mb-8 lg:mb-0">
              <div className="bg-[#1a2235]/60 block backdrop-blur-md rounded-3xl p-6 border border-white/10 relative overflow-hidden group shadow-2xl">
                <div className="relative aspect-square w-full flex items-center justify-center">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain mix-blend-multiply contrast-125 transition-transform duration-700 group-hover:scale-105"
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>

                {product.isOffer && product.offerBadge && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 border-none shadow-lg">
                      {product.offerBadge}
                    </Badge>
                  </div>
                )}

                <ProductShareButton product={product} className="absolute bottom-4 right-4 z-20" />
              </div>
            </div>

            {/* RIGHT COLUMN: details & Actions */}
            <div className="lg:col-span-7 space-y-8">

              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                  <span className="text-orange-500 px-3 py-1 bg-orange-500/10 rounded">{product.brand}</span>
                  <span className="text-zinc-500">|</span>
                  <span className="text-zinc-400 font-bold">SKU: {product.sku}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
                  {product.name}
                </h1>
                <p className="text-base md:text-lg text-zinc-200 font-medium leading-relaxed border-l-4 border-zinc-700 pl-6">
                  {product.description}
                </p>
              </div>

              {/* Specs Grid form */}
              <div className="bg-[#1a2235]/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden shadow-xl">
                <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-orange-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">Specifications</span>
                </div>
                <div className="p-2">
                  {Object.entries(product.specs).map(([key, value], idx) => (
                    <div key={key} className={`flex justify-between items-center p-4 ${idx !== Object.entries(product.specs).length - 1 ? 'border-b border-white/5' : ''}`}>
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{key}</span>
                      <span className="text-sm font-black text-white text-right">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action Area */}
              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Procurement</span>
                    <span className="text-white font-bold text-sm">Bulk Orders Available</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Min Order</span>
                    <span className="text-white font-bold text-sm">{product.minOrderQty}</span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/917510638693?text=I am interested in ${encodeURIComponent(product.name)} (SKU: ${product.sku})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-16 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-lg font-black uppercase tracking-widest shadow-lg shadow-orange-900/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-3">
                    <span className="bg-white/20 p-1.5 rounded-full"><MessageCircle className="h-5 w-5 fill-current" /></span>
                    Get Quote on WhatsApp
                  </Button>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a href="tel:+917510638693">
                    <Button variant="outline" className="w-full h-12 border-zinc-800 bg-[#111111] hover:bg-white text-zinc-400 hover:text-black font-bold uppercase tracking-widest text-xs rounded-xl">
                      <Phone className="h-4 w-4 mr-2" /> Call Sales
                    </Button>
                  </a>
                  <a href={`mailto:hexamechlinichtools@gmail.com?subject=Enquiry: ${product.name}`}>
                    <Button variant="outline" className="w-full h-12 border-zinc-800 bg-[#111111] hover:bg-white text-zinc-400 hover:text-black font-bold uppercase tracking-widest text-xs rounded-xl">
                      <Mail className="h-4 w-4 mr-2" /> Email Enquiry
                    </Button>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-2 pt-6">
                <div className="bg-[#1a2235]/60 p-4 rounded-xl border border-white/10 text-center shadow-lg">
                  <div className="text-orange-500 flex justify-center mb-1"><Info className="h-4 w-4" /></div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-300">Genuine</span>
                </div>
                <div className="bg-[#1a2235]/60 p-4 rounded-xl border border-white/10 text-center shadow-lg">
                  <div className="text-orange-500 flex justify-center mb-1"><Activity className="h-4 w-4" /></div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-300">Support</span>
                </div>
                <div className="bg-[#1a2235]/60 p-4 rounded-xl border border-white/10 text-center shadow-lg">
                  <div className="text-orange-500 flex justify-center mb-1"><ShoppingCart className="h-4 w-4" /></div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-300">Fast Ship</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
