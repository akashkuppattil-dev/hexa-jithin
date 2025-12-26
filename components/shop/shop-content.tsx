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
    <div className="bg-[#0a0a0a] min-h-screen pb-20 transition-colors">
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-[#0f0f0f] border-b border-white/5 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-4xl space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Zap className="h-3 w-3 text-blue-400 fill-current" />
                <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">GST Verified Supplier</span>
              </div>
              <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                <Award className="h-3 w-3 text-orange-400" />
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-tight">IndiaMART Verified Seller</span>
              </div>
            </div>

            {/* Title */}
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black text-white leading-none tracking-tighter">
              Professional <span className="text-orange-500">Automotive & Industrial</span> Tools
            </h1>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-300 max-w-3xl leading-relaxed font-medium">
              Supplying reliable, workshop‑grade tools to service centers, garages, and industrial buyers across India.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 md:mt-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-72 shrink-0 h-fit sticky top-28">
            <div className="bg-[#1a2235]/40 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
              <div className="mb-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500 mb-6">Filter Catalog</h3>
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

              <div className="mt-6 pt-6 border-t border-white/5">
                <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                  <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-2">B2B Support</p>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed mb-3">Talk to an expert for bulk discounts.</p>
                  <a href="https://wa.me/917510638693" className="inline-flex items-center gap-2 text-xs font-black text-orange-500 hover:gap-3 transition-all">
                    WHATSAPP US <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">

            {/* In-Page Search Bar - Split Layout */}
            <div className="flex flex-col md:grid md:grid-cols-3 gap-3 md:gap-4">
              {/* Product Name Search */}
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-500" />
                </div>
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full h-11 md:h-12 pl-10 pr-4 bg-[#1a2235]/60 border-white/10 text-sm text-white placeholder:text-zinc-500 rounded-xl focus:border-orange-500/50 transition-all shadow-xl backdrop-blur-sm"
                  value={searchInputValue}
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 md:contents gap-3">
                {/* Category Select */}
                <Select onValueChange={(val) => setSelectedCategories([val])}>
                  <SelectTrigger className="h-11 md:h-12 bg-[#1a2235]/60 border-white/10 text-zinc-300 rounded-xl backdrop-blur-sm">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" className="bg-[#05060a] border-white/20 max-h-[300px] z-[100]">
                    {categories.map((c) => (
                      <SelectItem key={c.id} value={c.id} className="text-zinc-300 focus:bg-orange-500 focus:text-white">{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Brand Select */}
                <Select onValueChange={(val) => setSelectedBrands([val])}>
                  <SelectTrigger className="h-11 md:h-12 bg-[#1a2235]/60 border-white/10 text-zinc-300 rounded-xl backdrop-blur-sm">
                    <SelectValue placeholder="Brand" />
                  </SelectTrigger>
                  <SelectContent position="popper" side="bottom" className="bg-[#05060a] border-white/20 max-h-[300px] z-[100]">
                    {brands.map((b) => (
                      <SelectItem key={b} value={b} className="text-zinc-300 focus:bg-orange-500 focus:text-white">{b}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-[#111111] p-3 md:p-4 rounded-xl border border-white/5 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-between w-full md:w-auto gap-4">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden h-11 px-6 rounded-xl border-orange-500/20 font-black text-[11px] uppercase tracking-widest gap-2 bg-orange-500/5 text-orange-500 hover:bg-orange-500 hover:text-white transition-all shadow-lg active:scale-95">
                      <SlidersHorizontal className="h-4 w-4" />
                      Configure Filters
                      {activeFiltersCount > 0 && <span className="ml-1 px-2 py-0.5 bg-white text-orange-600 rounded-full text-[9px] font-black">{activeFiltersCount}</span>}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] p-0 border-r border-white/10 bg-[#050505] shadow-2xl">
                    <div className="h-full overflow-y-auto p-8 custom-scrollbar">
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] text-orange-500 mb-8">Filters</h3>
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

                <p className="text-[10px] md:text-xs font-black text-zinc-400 uppercase tracking-widest">
                  Showing <span className="text-white font-black">{filteredProducts.length}</span> results
                </p>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortOption)}>
                  <SelectTrigger className="flex-1 md:w-48 h-10 rounded-lg border-white/10 font-bold text-xs bg-[#0a0a0a] text-zinc-300 shadow-none ring-0">
                    <SelectValue placeholder="Ordering" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-white/20 bg-[#000000]">
                    <SelectItem value="popularity" className="text-zinc-300 focus:bg-orange-500 focus:text-white">Popular Products</SelectItem>
                    <SelectItem value="latest" className="text-zinc-300 focus:bg-orange-500 focus:text-white">New Arrivals</SelectItem>
                  </SelectContent>
                </Select>

                <div className="hidden md:flex items-center bg-[#0a0a0a] rounded-lg p-1 border border-white/5">
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 rounded-md transition-all ${gridCols === 3 ? "bg-orange-500 text-white shadow-sm" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setGridCols(3)}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`h-8 w-8 rounded-md transition-all ${gridCols === 4 ? "bg-orange-500 text-white shadow-sm" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
                    onClick={() => setGridCols(4)}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Active Filter Chips */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {selectedCategories.map((cat) => (
                  <Badge key={cat} className="bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-tight">{categories.find((c) => c.id === cat)?.name}</span>
                    <button onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))} className="text-xs font-bold px-1 hover:bg-orange-500/20 rounded cursor-pointer">×</button>
                  </Badge>
                ))}
                {selectedBrands.map((brand) => (
                  <Badge key={brand} className="bg-white/5 text-zinc-300 border border-white/10 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <span className="text-[9px] font-black uppercase tracking-tight">{brand}</span>
                    <button onClick={() => setSelectedBrands((prev) => prev.filter((b) => b !== brand))} className="text-xs font-bold px-1 hover:bg-white/10 rounded cursor-pointer">×</button>
                  </Badge>
                ))}
                <button onClick={clearFilters} className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-orange-500 transition-colors ml-2 underline underline-offset-4 decoration-zinc-700">Reset</button>
              </div>
            )}

            {/* Product Grid */}
            {paginatedProducts.length > 0 ? (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-${gridCols} gap-6`}
              >
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-[#111111] rounded-2xl border-2 border-dashed border-white/5">
                <Package className="h-16 w-16 mx-auto text-zinc-800 mb-6" />
                <p className="text-xl font-black text-white mb-2">No Equipment Found</p>
                <p className="text-sm text-zinc-500 mb-8 max-w-xs mx-auto">Try clearing your filters or changing your search terms.</p>
                <Button onClick={clearFilters} className="rounded-lg px-10 h-12 font-black uppercase tracking-widest text-xs shadow-lg shadow-orange-900/20 bg-orange-600 hover:bg-orange-500">Expand Search</Button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-8 pt-16 border-t border-white/5">
                <div className="flex flex-col items-center sm:items-start">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-1">Catalog Navigation</p>
                  <p className="text-xs font-bold text-white uppercase tracking-widest">Showing Page {currentPage} of {totalPages}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentPage((p) => Math.max(1, p - 1))
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === 1}
                    className="h-12 w-12 sm:w-auto sm:px-6 rounded-2xl border-white/10 bg-[#111111] text-zinc-400 hover:text-white hover:border-orange-500/50 transition-all disabled:opacity-20 flex items-center justify-center"
                  >
                    <ChevronLeft className="h-5 w-5 sm:mr-2" />
                    <span className="hidden sm:inline text-[10px] font-black uppercase tracking-[0.2em]">Previous</span>
                  </Button>

                  <div className="hidden md:flex gap-2">
                    {[...Array(totalPages)].map((_, i) => (
                      <Button
                        key={i}
                        variant={currentPage === i + 1 ? "default" : "ghost"}
                        className={`h-12 w-12 rounded-2xl font-black text-[11px] transition-all duration-300 ${currentPage === i + 1 ? "bg-orange-600 text-white shadow-xl shadow-orange-600/30 scale-110" : "text-zinc-500 hover:text-white hover:bg-white/5"}`}
                        onClick={() => {
                          setCurrentPage(i + 1)
                          window.scrollTo({ top: 400, behavior: 'smooth' })
                        }}
                      >
                        {i + 1}
                      </Button>
                    ))}
                  </div>

                  {/* Current Page Indicator for Mobile */}
                  <div className="md:hidden h-12 px-6 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-orange-500 font-black text-[11px]">
                    {currentPage} / {totalPages}
                  </div>

                  <Button
                    variant="default"
                    onClick={() => {
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                      window.scrollTo({ top: 400, behavior: 'smooth' })
                    }}
                    disabled={currentPage === totalPages}
                    className="h-12 w-12 sm:w-auto sm:px-8 rounded-2xl bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-[0.2em] shadow-lg shadow-orange-900/40 transition-all active:scale-95 disabled:opacity-20 flex items-center justify-center"
                  >
                    <span className="hidden sm:inline text-[10px] mr-2">Next Page</span>
                    <ChevronRight className="h-5 w-5" />
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
