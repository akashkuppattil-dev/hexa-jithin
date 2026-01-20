"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { categories, products } from "@/lib/products"
import { ChevronDown, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CategoryFilterDropdownProps {
    selectedCategory: string | null
    onSelectCategory: (category: string | null) => void
}

export function CategoryFilterDropdown({ selectedCategory, onSelectCategory }: CategoryFilterDropdownProps) {
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(selectedCategory || categories[0].id)
    const [isOpen, setIsOpen] = useState(false)

    const filteredProducts = products.filter(p => p.category === hoveredCategory).slice(0, 6)

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="w-full md:w-[140px] h-11 rounded-lg border-border font-black text-[10px] uppercase tracking-wider bg-card shrink-0 justify-between">
                    <span className="truncate">
                        {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : "Categories"}
                    </span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[80vw] max-w-[700px] p-0 border-border shadow-2xl overflow-hidden" align="start">
                <div className="flex h-[400px]">
                    {/* Left Column: Categories */}
                    <div className="w-[180px] bg-muted/30 border-r border-border flex flex-col">
                        <div className="p-3 border-b border-border bg-popover/50 flex justify-between items-center">
                            <span className="text-[10px] font-black text-[#09757a] uppercase tracking-widest">Shop By Category</span>
                            <button onClick={() => { onSelectCategory(null); setIsOpen(false); }} className="text-[8px] font-black hover:underline uppercase">Reset</button>
                        </div>
                        <ScrollArea className="flex-1">
                            <div className="flex flex-col">
                                <button
                                    onMouseEnter={() => setHoveredCategory(null)}
                                    onClick={() => { onSelectCategory(null); setIsOpen(false); }}
                                    className={`w-full text-left px-4 py-2.5 text-[10px] font-black uppercase transition-all flex items-center justify-between border-l-2 ${!selectedCategory ? "bg-popover text-[#09757a] border-[#09757a]" : "text-foreground border-transparent hover:bg-accent"}`}
                                >
                                    All Categories
                                </button>
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onMouseEnter={() => setHoveredCategory(cat.id)}
                                        onClick={() => { onSelectCategory(cat.id); setIsOpen(false); }}
                                        className={`w-full text-left px-4 py-2.5 text-[10px] font-black uppercase transition-all flex items-center justify-between border-l-2 ${selectedCategory === cat.id ? "bg-popover text-[#09757a] border-[#09757a]" : "text-foreground border-transparent hover:bg-accent"}`}
                                    >
                                        {cat.name}
                                        <ChevronRight className={`h-3 w-3 transition-opacity ${hoveredCategory === cat.id ? "opacity-100" : "opacity-0"}`} />
                                    </button>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    {/* Right Column: Mini Product Preview */}
                    <div className="flex-1 bg-popover flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-border bg-muted/10">
                            <h3 className="text-[11px] font-black text-foreground uppercase tracking-tight">
                                {hoveredCategory ? `${categories.find(c => c.id === hoveredCategory)?.name} Products` : "All Products"}
                            </h3>
                        </div>
                        <ScrollArea className="flex-1 p-4">
                            {hoveredCategory ? (
                                filteredProducts.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-3">
                                        {filteredProducts.map((product) => (
                                            <div
                                                key={product.id}
                                                onClick={() => { onSelectCategory(hoveredCategory); setIsOpen(false); }}
                                                className="group flex gap-3 p-2 rounded border border-border/50 bg-card hover:border-[#09757a]/30 transition-all cursor-pointer"
                                            >
                                                <div className="relative h-12 w-12 shrink-0 rounded overflow-hidden bg-white border border-border/50">
                                                    <Image
                                                        src={product.image}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain p-1"
                                                    />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[9px] font-black text-foreground truncate uppercase">{product.name}</p>
                                                    <p className="text-[8px] text-[#09757a] font-black uppercase">{product.sku}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="h-full flex flex-col items-center justify-center text-center p-6 bg-muted/10 rounded">
                                        <p className="text-[10px] font-black text-muted-foreground uppercase">No products found in this category</p>
                                    </div>
                                )
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                                    <p className="text-[10px] font-black text-muted-foreground uppercase italic px-4">Select a category to see details</p>
                                </div>
                            )}
                        </ScrollArea>
                        <div className="p-3 border-t border-border bg-muted/20">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full text-center text-[9px] font-black text-[#09757a] hover:underline uppercase tracking-widest"
                            >
                                Close Menu
                            </button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}
