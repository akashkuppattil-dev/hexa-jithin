"use client"
import { useState } from "react"
import { Tag, Percent, Flame, Zap, Star, TrendingUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getTopProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const offerProducts = getTopProducts(6) // Get only 6 top products

export function OffersContent() {
  const hotDeals = offerProducts.slice(0, 6) // Use all 6 products as featured products
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setCurrentIndex((prev) => (prev + 1) % hotDeals.length)
    }
    if (isRightSwipe) {
      setCurrentIndex((prev) => (prev - 1 + hotDeals.length) % hotDeals.length)
    }
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div>
      <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-br from-accent/20 via-primary/10 to-background">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-4">
              <Badge className="bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold">
                <Flame className="h-4 w-4 mr-2" />
                Best Products
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm border-primary text-primary font-semibold">
                <Percent className="h-4 w-4 mr-2" />
                Premium Selection
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4 mr-2" />
                Wholesale Available
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              Featured <span className="text-accent">Products</span> &<br className="hidden sm:block" /> Best Sellers
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our most popular and trusted automotive tools from world-class brands. Perfect for workshops and
              professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 pt-4 border-t border-border/30">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Best Sellers</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Premium Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Professional Grade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-4 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent/10 rounded-full">
                <Tag className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{offerProducts.length}</p>
                <p className="text-sm text-muted-foreground">Premium Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{hotDeals.length}</p>
                <p className="text-sm text-muted-foreground">Featured Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-yellow-500/10 rounded-full">
                <Star className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Customer</p>
                <p className="text-sm text-muted-foreground">Trusted & Verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      {hotDeals.length > 0 && (
        <section className="py-6 md:py-8 bg-gradient-to-r from-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-accent rounded-lg">
                <Star className="h-6 w-6 text-accent-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">Featured Bestsellers</h2>
                <p className="text-muted-foreground">Most popular products trusted by professionals</p>
              </div>
            </div>

            {/* Desktop Grid - unchanged */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {hotDeals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="lg:hidden">
              <div
                className="cursor-grab active:cursor-grabbing select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div className="flex justify-center">
                  <div className="w-full max-w-sm">
                    <ProductCard key={hotDeals[currentIndex].id} product={hotDeals[currentIndex]} />
                  </div>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {hotDeals.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/60 w-3"
                      }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Swipe Instructions */}
              <p className="text-center text-sm text-muted-foreground mt-4">Swipe left or right to browse products</p>
            </div>
          </div>
        </section>
      )}

      <section className="py-8 md:py-12 bg-gradient-to-br from-primary via-primary/95 to-accent">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Zap className="h-3 w-3 mr-2" />
            Bulk Order Advantage
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Better Pricing? We've Got You Covered!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact our B2B sales team for exclusive bulk order pricing. Additional discounts available for orders above
            ₹50,000. GST invoices provided for all transactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919037872505?text=Hi%20Hexamech%2C%20I%20want%20to%20enquire%20about%20bulk%20order%20discounts"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 px-8">
                Get Bulk Quote on WhatsApp
              </Button>
            </a>
            <a href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 bg-transparent"
              >
                Request Detailed Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
