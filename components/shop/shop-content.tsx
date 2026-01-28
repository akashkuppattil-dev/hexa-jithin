"use client"

import { ProductCard } from "@/components/product-card"
import { ShopFilters } from "@/components/shop/shop-filters"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { brands, categories, products } from "@/lib/products"
import { Award, Filter, MessageCircle, Package, SlidersHorizontal, ChevronRight, ChevronLeft, Search, Zap } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useRef, useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { SearchableFilterDropdown } from "@/components/shop/searchable-filter-dropdown"
import { SearchDropdown } from "@/components/search-dropdown"

const ITEMS_PER_PAGE_MOBILE = 8
const ITEMS_PER_PAGE_DESKTOP = 16

type SortOption = "popularity" | "latest" | "price-low" | "price-high" | "rating"

export function ShopContent() {
  const productsRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const router = useRouter()
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null)
  const [availability, setAvailability] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>("popularity")
  const [currentPage, setCurrentPage] = useState(1)
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState(searchParams.get("search") || "")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchParams.get("search") || "")
  const searchBarRef = useRef<HTMLDivElement>(null)

  // 2. URL SYNC (INITIAL & UPDATES): Sync state with URL params
  useEffect(() => {
    const search = searchParams.get("search") || ""
    const category = searchParams.get("category")
    const brand = searchParams.get("brand")
    const product = searchParams.get("product")

    const availabilityParam = searchParams.get("availability")

    setSearchInputValue(search)
    setDebouncedSearchQuery(search)

    // Correctly parse and reset categories/brands from URL for multi-select
    setSelectedCategories(category ? category.split(",").filter(Boolean) : [])
    setSelectedBrands(brand ? brand.split(",").filter(Boolean) : [])
    setAvailability(availabilityParam ? availabilityParam.split(",").filter(Boolean) : [])
    setSelectedProduct(product || null)
  }, [searchParams])

  // 3. SEARCH DEBOUNCE: Update URL when typing stops
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchInputValue)

      const params = new URLSearchParams(window.location.search)
      if (searchInputValue) {
        params.set("search", searchInputValue)
      } else {
        params.delete("search")
      }
      const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`
      window.history.replaceState({ ...window.history.state, as: newUrl, url: newUrl }, '', newUrl)
    }, 400)
    return () => clearTimeout(timer)
  }, [searchInputValue])

  const handleSearchChange = (term: string) => {
    setSearchInputValue(term)
    setCurrentPage(1)
  }

  // Handle clicks outside the search bar to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchBarRef.current && !searchBarRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Handle mobile detection
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

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCategories, selectedBrands, selectedProduct, availability, searchInputValue])

  // 4. FILTERING LOGIC: Filter the product array dynamically
  const filteredProducts = useMemo(() => {
    // Start with all products
    let filtered = [...products]

    const searchQuery = searchInputValue.toLowerCase()
    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery) ||
          p.description.toLowerCase().includes(searchQuery) ||
          p.brand.toLowerCase().includes(searchQuery) ||
          p.sku.toLowerCase().includes(searchQuery) ||
          categories.find(c => c.id === p.category)?.name.toLowerCase().includes(searchQuery),
      )
    }

    // Category Filter: Match IDs exactly
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((p) => selectedCategories.includes(p.category))
    }

    // Brand Filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((p) => selectedBrands.includes(p.brand))
    }

    // Specific Product Match
    if (selectedProduct) {
      filtered = filtered.filter((p) => p.id === selectedProduct)
    }

    // Availability Filter
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

    // Deduplicate logic to ensure no visual gaps
    const seen = new Set()
    return filtered.filter(p => {
      const duplicate = seen.has(p.id)
      seen.add(p.id)
      return !duplicate
    })
  }, [selectedCategories, selectedBrands, selectedProduct, availability, sortBy, searchInputValue])

  // 5. PAGINATION: Slice the filtered list
  const itemsPerPage = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // 6. ACTION HANDLERS: React immediately to user input
  const handleCategorySelect = (ids: string[]) => {
    setSelectedCategories(ids)
    setSelectedProduct(null)
    setCurrentPage(1)

    // Sync to URL
    const params = new URLSearchParams(window.location.search)
    if (ids.length > 0) params.set("category", ids.join(","))
    else params.delete("category")
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const handleBrandSelect = (ids: string[]) => {
    setSelectedBrands(ids)
    setSelectedProduct(null)
    setCurrentPage(1)

    // Sync to URL
    const params = new URLSearchParams(window.location.search)
    if (ids.length > 0) params.set("brand", ids.join(","))
    else params.delete("brand")
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedBrands([])
    setSelectedProduct(null)
    setAvailability([])
    setCurrentPage(1)
    setSearchInputValue("")
    setDebouncedSearchQuery("")
    router.replace('/shop', { scroll: false })
  }

  const setAvailabilityWithUrl = (newAvailability: string[]) => {
    setAvailability(newAvailability)
    setCurrentPage(1)
    const params = new URLSearchParams(window.location.search)
    if (newAvailability.length > 0) params.set("availability", newAvailability.join(","))
    else params.delete("availability")
    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const activeFiltersCount = selectedCategories.length + selectedBrands.length + availability.length + (selectedProduct ? 1 : 0)

  return (
    <div className="bg-background min-h-screen pb-10 sm:pb-12 transition-colors">
      {/* Header Section */}
      <div className="relative bg-background border-b border-border overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert"></div>

        <div className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 relative z-10">
          <div className="max-w-4xl space-y-2 sm:space-y-3">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <div className="flex items-center gap-1 sm:gap-1.5 bg-[#09757a]/20 border border-[#09757a]/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded backdrop-blur-sm">
                <Zap className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-[#09757a] fill-current" />
                <span className="text-[8px] sm:text-[9px] text-[#09757a] font-black uppercase tracking-wider sm:tracking-widest">GST Verified</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5 bg-muted border border-border px-2 sm:px-3 py-0.5 sm:py-1 rounded backdrop-blur-sm">
                <Award className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-foreground" />
                <span className="text-[8px] sm:text-[9px] text-foreground font-black uppercase tracking-tight">IndiaMART Verified</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-foreground leading-tight tracking-tighter uppercase">
              Professional <span className="text-[#09757a]">Automotive & Industrial</span> Tools
            </h1>

            {/* Description */}
            <p className="text-[10px] sm:text-xs md:text-sm text-foreground max-w-2xl leading-relaxed font-black">
              Supplying reliable, workshop‑grade tools to service centers, garages, and industrial buyers across India.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 mt-4 sm:mt-5">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Sidebar Filters */}
          <aside className="hidden lg:block w-64 shrink-0 h-fit sticky top-20">
            <div className="bg-card p-4 sm:p-5 rounded-xl border border-border shadow-2xl">
              <div className="mb-4 sm:mb-5">
                <h3 className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-[#09757a] mb-4 sm:mb-5">Filter Catalog</h3>
                <ShopFilters
                  categories={categories}
                  brands={brands}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={handleCategorySelect}
                  selectedBrands={selectedBrands}
                  setSelectedBrands={handleBrandSelect}
                  availability={availability}
                  setAvailability={setAvailabilityWithUrl}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>

              <div className="mt-5 pt-5 border-t border-border">
                <div className="p-3 rounded-lg bg-[#09757a]/10 border border-[#09757a]/20 text-center">
                  <p className="text-[9px] font-black text-[#09757a] uppercase tracking-widest mb-1.5">B2B Support</p>
                  <p className="text-[10px] text-foreground font-black leading-relaxed mb-2">Talk to an expert for bulk discounts.</p>
                  <a href="https://wa.me/919037872505" className="inline-flex items-center justify-center gap-1.5 text-[10px] font-black text-[#09757a] hover:gap-2 transition-all">
                    WHATSAPP US <ChevronRight className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-3">
              {/* Search Bar & Extra Dropdowns Container */}
              <div className="flex flex-col md:flex-row flex-1 items-stretch md:items-center gap-2">
                <div ref={searchBarRef} className="relative flex-1 group/search">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-muted-foreground group-focus-within/search:text-[#09757a] transition-colors" />
                  </div>
                  <Input
                    type="text"
                    placeholder="Search tools, brands or categories..."
                    className="w-full h-11 pl-11 pr-4 bg-muted/40 border-border text-sm text-foreground rounded-lg focus:ring-4 focus:ring-[#09757a]/10 focus:border-[#09757a]/50 transition-all shadow-sm font-black placeholder:text-zinc-500"
                    value={searchInputValue}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                  />
                  {isSearchFocused && debouncedSearchQuery.length >= 2 && (
                    <div className="absolute top-full left-0 right-0 z-[60] mt-1">
                      <SearchDropdown
                        query={debouncedSearchQuery}
                        onClose={() => {
                          setIsSearchFocused(false)
                        }}
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar sm:pb-0 sm:overflow-visible">
                  <div className="flex items-center gap-2 min-w-max sm:min-w-0">
                    <SearchableFilterDropdown
                      label="Category"
                      items={categories}
                      isMulti={true}
                      selectedIds={selectedCategories}
                      onMultiSelect={handleCategorySelect}
                      placeholder="Search category..."
                      width="w-[130px] sm:w-[160px]"
                    />

                    <SearchableFilterDropdown
                      label="Brand"
                      items={brands.map(b => ({ id: b, name: b })).filter(b => {
                        if (selectedCategories.length === 0) return true
                        return products.some(p => p.brand === b.id && selectedCategories.includes(p.category))
                      })}
                      isMulti={true}
                      selectedIds={selectedBrands}
                      onMultiSelect={handleBrandSelect}
                      placeholder="Search brand..."
                      width="w-[130px] sm:w-[160px]"
                    />

                    <SearchableFilterDropdown
                      label="Product"
                      items={products
                        .filter(p => {
                          const catMatch = selectedCategories.length === 0 || selectedCategories.includes(p.category)
                          const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand)
                          return catMatch && brandMatch
                        })
                        .map(p => ({ id: p.id, name: p.name }))
                      }
                      selectedId={selectedProduct}
                      onSelect={(id) => {
                        setSelectedProduct(id)
                        setCurrentPage(1)
                      }}
                      placeholder="Search product..."
                      width="w-[160px] sm:w-[200px]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between xl:justify-end gap-2 md:w-auto">
                {/* Mobile Filter Toggle */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden h-11 px-3 rounded-lg border-[#09757a]/20 font-black text-[10px] uppercase tracking-widest gap-2 bg-[#09757a]/5 text-[#09757a] shadow-sm">
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[280px] p-0 border-r border-border bg-background shadow-2xl">
                    <div className="h-full overflow-y-auto p-6 custom-scrollbar">
                      <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#09757a] mb-6">Filters</h3>
                      <ShopFilters
                        categories={categories}
                        brands={brands}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={handleCategorySelect}
                        selectedBrands={selectedBrands}
                        setSelectedBrands={handleBrandSelect}
                        availability={availability}
                        setAvailability={setAvailabilityWithUrl}
                        onClearFilters={clearFilters}
                        activeFiltersCount={activeFiltersCount}
                      />
                    </div>
                  </SheetContent>
                </Sheet>

              </div>
            </div>

            {/* Status & Chips */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border/50 pt-3">
              <p className="text-[10px] font-black text-foreground uppercase tracking-widest">
                <span className="text-[#09757a]">{filteredProducts.length}</span> Equipment Found
              </p>

              {activeFiltersCount > 0 && (
                <div className="flex flex-wrap items-center gap-1.5">
                  <button onClick={clearFilters} className="text-[8px] font-black uppercase text-[#09757a] hover:underline px-2 mr-1">Reset</button>
                  {selectedCategories.map((cat) => (
                    <Badge key={cat} className="bg-[#09757a]/10 text-[#09757a] border-none px-2 py-0.5 rounded text-[7px] font-black uppercase">
                      {categories.find((c) => c.id === cat)?.name}
                    </Badge>
                  ))}
                  {selectedBrands.map((brand) => (
                    <Badge key={brand} className="bg-muted text-foreground border-border px-2 py-0.5 rounded text-[7px] font-black uppercase">
                      {brand}
                    </Badge>
                  ))}
                  {availability.map((avail) => (
                    <Badge key={avail} className="bg-[#09757a]/5 text-[#09757a] border-[#09757a]/20 px-2 py-0.5 rounded text-[7px] font-black uppercase">
                      {avail === "in-stock" ? "Ready to Ship" : avail === "on-offer" ? "Special Deals" : avail}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Product Grid Header - Result Count */}
            <div className="flex justify-between items-center mb-4 px-1">
              <p className="text-[10px] sm:text-[11px] font-bold text-muted-foreground uppercase tracking-wide">
                Showing <span className="text-foreground font-black">{(currentPage - 1) * itemsPerPage + 1}</span> - <span className="text-foreground font-black">{Math.min(currentPage * itemsPerPage, filteredProducts.length)}</span> of <span className="text-foreground font-black">{filteredProducts.length}</span> results
              </p>
            </div>

            {/* Product Grid */}
            <div ref={productsRef} className="scroll-mt-32 md:scroll-mt-40">
              {paginatedProducts.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 md:gap-4">
                  {paginatedProducts.map((product) => (
                    <div key={product.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-card rounded-xl border border-border">
                  <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-lg font-black text-foreground mb-1 uppercase tracking-tighter">No Equipment Found</p>
                  <p className="text-xs text-foreground font-black mb-6">Try clearing your filters or changing your search terms.</p>
                  <Button onClick={clearFilters} className="bg-[#09757a] text-white font-black uppercase tracking-widest text-[10px] px-8 h-10 shadow-lg">Clear All</Button>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-8 sm:pt-10 md:pt-12 border-t border-border">
                <div className="flex flex-col items-center sm:items-start leading-none gap-0.5 sm:gap-1">
                  <p className="text-[8px] sm:text-[9px] font-black text-foreground uppercase tracking-[0.2em] sm:tracking-[0.3em]">Catalog Navigation</p>
                  <p className="text-[9px] sm:text-[10px] font-black text-foreground uppercase tracking-wider sm:tracking-widest">Page {currentPage} of {totalPages}</p>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      if (currentPage > 1) {
                        setCurrentPage(prev => prev - 1)
                        // Scroll to products list slightly delayed to ensure render
                        setTimeout(() => {
                          productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 50)
                      }
                    }}
                    disabled={currentPage <= 1}
                    className="h-9 sm:h-10 w-9 sm:w-10 md:w-auto md:px-4 lg:px-5 rounded-lg border-border bg-card text-muted-foreground hover:text-foreground hover:border-[#09757a]/50 transition-all disabled:opacity-30 flex items-center justify-center p-0"
                  >
                    <ChevronLeft className="h-4 w-4 sm:mr-0 md:mr-1.5" />
                    <span className="hidden md:inline text-[8px] sm:text-[9px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em]">Back</span>
                  </Button>

                  <div className="hidden md:flex gap-1 sm:gap-1.5">
                    {[...Array(totalPages)].map((_, i) => {
                      const pageNum = i + 1
                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? "default" : "ghost"}
                          className={`h-9 sm:h-10 w-9 sm:w-10 rounded-lg font-black text-[9px] sm:text-[10px] transition-all duration-300 ${currentPage === pageNum ? "bg-[#09757a] text-white shadow-xl shadow-[#09757a]/20 scale-105" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}
                          onClick={() => {
                            setCurrentPage(pageNum)
                            productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }}
                        >
                          {pageNum}
                        </Button>
                      )
                    })}
                  </div>

                  {/* Current Page Indicator for Mobile */}
                  <div className="md:hidden h-9 sm:h-10 px-4 sm:px-5 flex items-center justify-center bg-muted border border-border rounded-lg text-[#09757a] font-black text-[9px] sm:text-[10px]">
                    {currentPage} / {totalPages}
                  </div>

                  <Button
                    variant="default"
                    onClick={() => {
                      if (currentPage < totalPages) {
                        setCurrentPage(prev => prev + 1)
                        setTimeout(() => {
                          productsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        }, 50)
                      }
                    }}
                    disabled={currentPage >= totalPages}
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
