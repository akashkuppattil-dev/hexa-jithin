"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"

interface Category {
  id: string
  name: string
}

interface ShopFiltersProps {
  categories: Category[]
  brands: string[]
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedBrands: string[]
  setSelectedBrands: (brands: string[]) => void
  availability: string[]
  setAvailability: (availability: string[]) => void
  onClearFilters: () => void
  activeFiltersCount: number
}

export function ShopFilters({
  categories,
  brands,
  selectedCategories,
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  availability,
  setAvailability,
}: ShopFiltersProps) {
  const [brandSearch, setBrandSearch] = useState("")

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(
      selectedCategories.includes(categoryId)
        ? selectedCategories.filter((c) => c !== categoryId)
        : [...selectedCategories, categoryId],
    )
  }

  const toggleBrand = (brand: string) => {
    setSelectedBrands(
      selectedBrands.includes(brand) ? selectedBrands.filter((b) => b !== brand) : [...selectedBrands, brand],
    )
  }

  const toggleAvailability = (option: string) => {
    setAvailability(
      availability.includes(option) ? availability.filter((a) => a !== option) : [...availability, option],
    )
  }

  const filteredBrands = brands.filter(b => b.toLowerCase().includes(brandSearch.toLowerCase()))

  return (
    <div className="space-y-4">
      <Accordion type="multiple" defaultValue={["categories", "brands", "availability"]} className="w-full">
        {/* Categories Section */}
        <AccordionItem value="categories" className="border-none">
          <AccordionTrigger className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-[#09757a] py-3 hover:no-underline select-none">
            Categories
          </AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="space-y-2 pt-0.5 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2.5 group cursor-pointer" onClick={() => toggleCategory(category.id)}>
                  <Checkbox
                    id={`cat-${category.id}`}
                    checked={selectedCategories.includes(category.id)}
                    className="h-3.5 w-3.5 rounded border-border data-[state=checked]:bg-[#09757a] data-[state=checked]:border-[#09757a] transition-all"
                  />
                  <Label
                    htmlFor={`cat-${category.id}`}
                    className={`text-[11px] font-bold cursor-pointer transition-colors ${selectedCategories.includes(category.id) ? "text-[#09757a]" : "text-muted-foreground group-hover:text-foreground"}`}
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brands Section */}
        <AccordionItem value="brands" className="border-none">
          <AccordionTrigger className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-[#09757a] py-3 hover:no-underline select-none">
            Brands
          </AccordionTrigger>
          <AccordionContent className="pb-3 overflow-hidden">
            <div className="relative mb-3 group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground group-focus-within:text-[#09757a] transition-colors" />
              <Input
                placeholder="Search..."
                className="h-8 pl-9 text-[11px] bg-background border-border focus:bg-accent/5 rounded-lg transition-all font-medium"
                value={brandSearch}
                onChange={(e) => setBrandSearch(e.target.value)}
              />
            </div>
            <div className="space-y-2 pt-0.5 max-h-[180px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBrands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2.5 group cursor-pointer" onClick={() => toggleBrand(brand)}>
                  <Checkbox
                    id={`brand-${brand}`}
                    checked={selectedBrands.includes(brand)}
                    className="h-3.5 w-3.5 rounded border-border data-[state=checked]:bg-[#09757a] data-[state=checked]:border-[#09757a] transition-all"
                  />
                  <Label
                    htmlFor={`brand-${brand}`}
                    className={`text-[11px] font-bold cursor-pointer transition-colors ${selectedBrands.includes(brand) ? "text-[#09757a]" : "text-muted-foreground group-hover:text-foreground"}`}
                  >
                    {brand}
                  </Label>
                </div>
              ))}
              {filteredBrands.length === 0 && (
                <p className="text-[10px] text-muted-foreground italic py-2">No brands found.</p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Availability Section */}
        <AccordionItem value="availability" className="border-none">
          <AccordionTrigger className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground hover:text-[#09757a] py-3 hover:no-underline select-none">
            Quick Filter
          </AccordionTrigger>
          <AccordionContent className="pb-3">
            <div className="space-y-2 pt-0.5">
              {[
                { id: "in-stock", label: "Ready to Ship" },
                { id: "on-offer", label: "Special Deals" },
              ].map((option) => (
                <div key={option.id} className="flex items-center space-x-2.5 group cursor-pointer" onClick={() => toggleAvailability(option.id)}>
                  <Checkbox
                    id={option.id}
                    checked={availability.includes(option.id)}
                    className="h-3.5 w-3.5 rounded border-border data-[state=checked]:bg-[#09757a] data-[state=checked]:border-[#09757a] transition-all"
                  />
                  <Label htmlFor={option.id} className={`text-[11px] font-bold cursor-pointer transition-colors ${availability.includes(option.id) ? "text-[#09757a]" : "text-muted-foreground group-hover:text-foreground"}`}>
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 10px;
        }
        :global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #27272a;
        }
      `}</style>
    </div>
  )
}
