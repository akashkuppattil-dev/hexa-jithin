"use client"

import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop/shop-filters"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { brands, categories, products } from "@/lib/products"
import { Award, Filter, Grid3X3, LayoutGrid, MessageCircle, Package, SlidersHorizontal, ChevronRight, ChevronLeft, Search, Zap } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"

const ITEMS_PER_PAGE_MOBILE = 6
const ITEMS_PER_PAGE_DESKTOP = 12

type SortOption = "popularity" | "latest" | "price-low" | "price-high" | "rating"

export function ShopContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [availability, setAvailability] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [gridCols, setGridCols] = useState<3 | 4>(3)
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState(searchParams.get("search") || "")

  const handleSearch = (term: string) => {
    setSearchInputValue(term)
    const params = new URLSearchParams(searchParams.toString())
    if (term) {
      params.set("search", term)
    } else {
      params.delete("search")
    }
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
      }, 150)
    }
    setIsMobile(window.innerWidth < 768)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const category = searchParams.get("category")
    const brand = searchParams.get("brand")

    if (category) setSelectedCategories([category])
    if (brand) setSelectedBrands([brand])
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    const searchQuery = searchParams.get("search")?.toLowerCase()
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.brand.toLowerCase().includes(searchQuery) ||
          categories.find(c => c.id === p.category)?.name.toLowerCase().includes(searchQuery),
      )
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand))
    }

    if (availability.length > 0) {
      if (availability.includes("in-stock") && !availability.includes("out-of-stock")) {
        filtered = filtered.filter((p) => p.inStock)
      } else if (availability.includes("out-of-stock") && !availability.includes("in-stock")) {
        filtered = filtered.filter((p) => !p.inStock)
      }
      if (availability.includes("on-offer")) {
        filtered = filtered.filter((p) => p.isOffer)
      }
    }

    switch (sortBy) {
      case "latest":
        filtered.sort((a, b) => Number(b.id) - Number(a.id))
        break
      default:
        break
    }

    return filtered
  }, [selectedCategories, selectedBrands, availability, sortBy, searchParams])

  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setAvailability([])
    setCurrentPage(1)
  }

  const activeFiltersCount = selectedCategories.length + selectedBrands.length + availability.length

  return (
    <div className="bg-background min-h-screen pb-16 sm:pb-20 transition-colors">
      {/* Header Section */}
      <div className="relative bg-background border-b border-border overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert"></div>

        <div className="container mx-auto px-3 sm:px-4 py-5 sm:py-6 md:py-8 relative z-10">
          <div className="max-w-4xl space-y-3 sm:space-y-4 md:space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1 sm:gap-1.5 bg-[#09757a]/20 border border-[#09757a]/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded backdrop-blur-sm">
                <Zap className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-[#09757a] fill-current" />
                <span className="text-[8px] sm:text-[9px] text-[#09757a] font-black uppercase tracking-wider sm:tracking-widest">GST Verified</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 bg-muted border border-border px-2 sm:px-3 py-0.5 sm:py-1 rounded backdrop-blur-sm">
                <Award className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-muted-foreground" />
                <span className="text-[8px] sm:text-[9px] text-muted-foreground font-bold uppercase tracking-tight">IndiaMART Verified</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight tracking-tighter uppercase">
              Professional <span className="text-[#09757a]">Automotive & Industrial</span> Tools
            </h1>

            {/* Description */}
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground max-w-2xl leading-relaxed font-medium">
              Supplying reliable, workshop‑grade tools to service centers, garages, and industrial buyers across India.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-3 sm:px-4 mt-5 sm:mt-6 md:mt-8 lg:mt-12">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0 h-fit sticky top-24">
            <div className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-2xl">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#09757a] mb-4 sm:mb-5">Filter Catalog</h3>
                <ShopFilters
                  categories={categories}
                  brands={brands}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={setSelectedBrands}
                  availability={availability}
                  setAvailability={setAvailability}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="p-3 rounded-lg bg-[#09757a]/10 border border-[#09757a]/20 text-center">
                  <p className="text-[9px] font-black text-[#09757a] uppercase tracking-widest mb-1.5">B2B Support</p>
                  <p className="text-[10px] text-muted-foreground font-medium leading-relaxed mb-2">Talk to an expert for bulk discounts.</p>
                  <a href="https://wa.me/917510638693" className="inline-flex items-center justify-center gap-1.5 text-[10px] font-black text-[#09757a] hover:gap-2 transition-all">
                    WHATSAPP US <ChevronRight className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">

            {/* In-Page Search Bar - Split Layout */}
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 gap-2">
              {/* Product Name Search */}
              <div className="relative w-full sm:col-span-2 md:col-span-1">
                <div className="absolute inset-y-0 left-0 pl-2.5 sm:pl-3 flex items-center pointer-events-none">
                  <Search className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-muted-foreground" />
                </div>
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-9 sm:h-10 pl-8 sm:pl-9 pr-3 sm:pr-4 bg-card border-border text-[11px] sm:text-xs text-foreground placeholder:text-muted-foreground rounded-lg focus:border-[#09757a]/50 transition-all shadow-lg sm:shadow-xl"
                  value={searchInputValue}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                {/* Category Select */}
                <Select onValueChange={(val) => setSelectedCategories([val])}>
                  <SelectTrigger className="h-9 sm:h-10 bg-card border-border text-muted-foreground rounded-lg text-[10px] sm:text-xs">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" className="bg-popover border-border max-h-[300px] z-[100]">
                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id} className="text-foreground/70 focus:bg-[#09757a] focus:text-white text-[10px] sm:text-xs">{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Brand Select */}
                <Select onValueChange={(val) => setSelectedBrands([val])}>
                  <SelectTrigger className="h-9 sm:h-10 bg-card border-border text-muted-foreground rounded-lg text-[10px] sm:text-xs">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" className="bg-popover border-border max-h-[300px] z-[100]">
                    {brands.map((b) => (
                      <SelectItem key={b} value={b} className="text-foreground/70 focus:bg-[#09757a] focus:text-white text-[10px] sm:text-xs">{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-card p-2 sm:p-2.5 rounded-lg border border-border shadow-md sm:shadow-lg flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
              <div className="flex items-center justify-between w-full sm:w-auto gap-3 sm:gap-4">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden h-9 sm:h-10 px-3 sm:px-5 rounded-lg border-[#09757a]/20 font-black text-[9px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest gap-1.5 sm:gap-2 bg-[#09757a]/5 text-[#09757a] hover:bg-[#09757a] hover:text-white transition-all shadow-md sm:shadow-lg active:scale-95">
                      <SlidersHorizontal className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                      Filter
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[260px] sm:w-[280px] p-0 border-r border-border bg-background shadow-2xl">
                    <div className="h-full overflow-y-auto p-4 sm:p-6 custom-scrollbar">
                      <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#09757a] mb-4 sm:mb-6">Filters</h3>
                      <ShopFilters
                        categories={categories}
                        brands={brands}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={setSelectedBrands}
                        availability={availability}
                        setAvailability={setAvailability}
                        onClearFilters={clearFilters}
                        activeFiltersCount={activeFiltersCount}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

                <p className="text-[9px] sm:text-[10px] md:text-xs font-black text-muted-foreground uppercase tracking-wider sm:tracking-widest">
                  Showing <span className="text-foreground font-black">{filteredProducts.length}</span> results
                </p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                  <SelectTrigger className="flex-1 sm:w-32 md:w-40 h-8 sm:h-9 rounded-lg border-border font-bold text-[9px] sm:text-[10px] bg-background text-muted-foreground shadow-none ring-0">
                    <SelectValue placeholder="Sort" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-border bg-popover">
                    <SelectItem value="popularity" className="text-foreground/70 focus:bg-[#09757a] focus:text-white text-[9px] sm:text-[10px]">Popularity</SelectItem>
                    <SelectItem value="latest" className="text-foreground/70 focus:bg-[#09757a] focus:text-white text-[9px] sm:text-[10px]">Latest</SelectItem>
                  </SelectContent>
                </Select>

                <div className="hidden md:flex items-center bg-background rounded-lg p-0.5 border border-border">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-7 w-7 rounded-md transition-all ${gridCols === 3 ? "bg-[#09757a] text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                    onClick={() => setGridCols(3)}
                  >
                    <Grid3X3 className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-7 w-7 rounded-md transition-all ${gridCols === 4 ? "bg-[#09757a] text-white shadow-sm" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                    onClick={() => setGridCols(4)}
                  >
                    <LayoutGrid className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                {selectedCategories.map((cat) => (
                  <Badge key={cat} className="bg-[#09757a]/10 text-[#09757a] border border-[#09757a]/20 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-tight">{categories.find((c) => c.id === cat)?.name}</span>
                    <button onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))} className="text-[9px] sm:text-[10px] font-bold px-0.5 sm:px-1 hover:bg-[#09757a]/20 rounded cursor-pointer leading-none">×</button>
                  </Badge>
                ))}
                {selectedBrands.map((brand) => (
                  <Badge key={brand} className="bg-muted text-muted-foreground border border-border px-1.5 sm:px-2 py-0.5 sm:py-1 rounded flex items-center gap-1 sm:gap-1.5">
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-tight">{brand}</span>
                    <button onClick={() => setSelectedBrands((prev) => prev.filter((b) => b !== brand))} className="text-[9px] sm:text-[10px] font-bold px-0.5 sm:px-1 hover:bg-accent rounded cursor-pointer leading-none">×</button>
                  </Badge>
                ))}
                <button onClick={clearFilters} className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider sm:tracking-widest text-[#09757a] hover:text-white transition-colors ml-0.5 sm:ml-1 underline underline-offset-4 decoration-[#09757a]/40">Reset</button>
              </div>
            )}

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div
                className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-${gridCols} gap-2 sm:gap-3 md:gap-4`}
              >
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 sm:py-16 md:py-20 bg-card rounded-xl border border-border">
                <Package className="h-10 w-10 sm:h-12 sm:w-12 mx-auto text-muted-foreground mb-3 sm:mb-4" />
                <p className="text-base sm:text-lg font-black text-foreground mb-1 uppercase">No Equipment Found</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-4 sm:mb-6 max-w-xs mx-auto px-4">Try clearing your filters or changing your search terms.</p>
                <Button onClick={clearFilters} className="rounded-lg px-6 sm:px-8 h-9 sm:h-10 font-black uppercase tracking-wider sm:tracking-widest text-[9px] sm:text-[10px] shadow-lg bg-[#09757a] hover:bg-foreground hover:text-background border border-transparent hover:border-[#09757a]">Expand Search</Button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-12 border-t border-border">
                <div className="flex flex-col items-center sm:items-start leading-none gap-0.5 sm:gap-1">
                  <p className="text-[8px] sm:text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em] sm:tracking-[0.3em]">Catalog Navigation</p>
                  <p className="text-[9px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-wider sm:tracking-widest">Page {currentPage} of {totalPages}</p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1))
                      window.scrollTo({ top: isMobile ? 200 : 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    className="h-9 sm:h-10 w-9 sm:w-10 md:w-auto md:px-4 lg:px-5 rounded-lg border-border bg-card text-muted-foreground hover:text-foreground hover:border-[#09757a]/50 transition-all disabled:opacity-30 flex items-center justify-center p-0"
                  >
                    <ChevronLeft className="h-4 w-4 sm:mr-0 md:mr-1.5" />
                    <span className="hidden md:inline text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Prev</span>
                  </Button>

                  <div className="hidden md:flex gap-1 sm:gap-1.5">
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? "default" : "ghost"}
                        className={`h-9 sm:h-10 w-9 sm:w-10 rounded-lg font-black text-[9px] sm:text-[10px] transition-all duration-300 ${currentPage === i + 1 ? "bg-[#09757a] text-white shadow-xl shadow-[#09757a]/20 scale-105" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                        onClick={() => {
                          setCurrentPage(i + 1)
                          window.scrollTo({ top: isMobile ? 200 : 400, behavior: 'smooth' })
                        }}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>

                  {/* Current Page Indicator for Mobile */}
                  <div className="md:hidden h-9 sm:h-10 px-4 sm:px-5 flex items-center justify-center bg-muted border border-border rounded-lg text-[#09757a] font-black text-[9px] sm:text-[10px]">
                    {currentPage} / {totalPages}
                  </div>

                  <Button
                    variant="default"
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                      window.scrollTo({ top: isMobile ? 200 : 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    className="h-9 sm:h-10 w-9 sm:w-10 md:w-auto md:px-4 lg:px-6 rounded-lg bg-[#09757a] hover:bg-foreground hover:text-background text-white font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] shadow-lg transition-all active:scale-95 disabled:opacity-30 flex items-center justify-center border border-transparent hover:border-[#09757a] p-0"
                  >
                    <span className="hidden md:inline text-[8px] sm:text-[9px] mr-0 md:mr-1.5">Next</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div >
      </div >
    </div >
  )
}
