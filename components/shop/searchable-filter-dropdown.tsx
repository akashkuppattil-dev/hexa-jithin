"use client"

import * as React from "react"
import { Check, ChevronDown, Search, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

interface SearchableFilterDropdownProps {
    label: string
    items: { id: string; name: string }[]
    selectedId?: string | null
    selectedIds?: string[]
    onSelect?: (id: string | null) => void
    onMultiSelect?: (ids: string[]) => void
    placeholder?: string
    width?: string
    isMulti?: boolean
}

export function SearchableFilterDropdown({
    label,
    items,
    selectedId,
    selectedIds = [],
    onSelect,
    onMultiSelect,
    placeholder = "Search...",
    width = "w-[160px]",
    isMulti = false,
}: SearchableFilterDropdownProps) {
    const [open, setOpen] = React.useState(false)

    // Find selected item for single select
    const selectedItem = !isMulti ? items.find((item) => item.id === selectedId) : null
    const selectedCount = isMulti ? selectedIds.length : 0

    const handleSelect = (id: string) => {
        if (!isMulti) {
            onSelect?.(id === selectedId ? null : id)
            setOpen(false)
        } else {
            const newIds = selectedIds.includes(id)
                ? selectedIds.filter((i) => i !== id)
                : [...selectedIds, id]
            onMultiSelect?.(newIds)
        }
    }

    const clearAll = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (isMulti) {
            onMultiSelect?.([])
        } else {
            onSelect?.(null)
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "h-11 justify-between rounded-lg border-border bg-card font-black text-[10px] uppercase tracking-widest shadow-sm hover:border-[#09757a]/50 hover:text-[#09757a] transition-all px-3",
                        width
                    )}
                >
                    <div className="flex items-center gap-2 truncate">
                        {isMulti ? (
                            selectedCount > 0 ? (
                                <div className="flex items-center gap-1.5">
                                    <Badge className="bg-[#09757a] text-white rounded-md px-1.5 h-5 text-[9px] font-black border-none">
                                        {selectedCount}
                                    </Badge>
                                    <span>{label}</span>
                                </div>
                            ) : (
                                label
                            )
                        ) : (
                            selectedItem ? selectedItem.name : label
                        )}
                    </div>
                    <div className="flex items-center gap-1 shrink-0 ml-auto">
                        {(isMulti ? selectedCount > 0 : !!selectedId) && (
                            <X
                                className="h-3 w-3 hover:text-red-500 transition-colors mr-1 cursor-pointer"
                                onClick={clearAll}
                            />
                        )}
                        <ChevronDown className="h-3 w-3 opacity-50" />
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent
                className={cn("p-0 shadow-2xl border-border z-[70] max-h-[400px] overflow-hidden rounded-xl",
                    width.includes("w-") ? width.replace("w-", "min-w-") : "min-w-[200px]"
                )}
                align="start"
            >
                <Command className="w-full">
                    <CommandInput placeholder={placeholder} className="h-10 text-base font-bold" />
                    <CommandList className="custom-scrollbar max-h-[320px] overflow-y-auto">
                        <CommandEmpty className="py-4 text-[10px] font-bold text-muted-foreground text-center">No matches found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem
                                value="all_items_reset_selection"
                                onSelect={() => {
                                    if (isMulti) onMultiSelect?.([])
                                    else onSelect?.(null)
                                    setOpen(false)
                                }}
                                className="text-[10px] font-black uppercase tracking-wider cursor-pointer py-2.5 px-3 aria-selected:bg-[#09757a]/10"
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-3.5 w-3.5 text-[#09757a] shrink-0",
                                        (isMulti ? selectedCount === 0 : !selectedId) ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                All {label === "Category" ? "Categories" : label + "s"}
                            </CommandItem>

                            {items.map((item) => {
                                const isSelected = isMulti
                                    ? selectedIds.includes(item.id)
                                    : selectedId === item.id

                                return (
                                    <CommandItem
                                        key={item.id}
                                        value={item.id + " " + item.name}
                                        onSelect={() => handleSelect(item.id)}
                                        className="text-[10px] font-bold uppercase tracking-wider cursor-pointer flex items-center py-2.5 px-3 aria-selected:bg-[#09757a]/10"
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-3.5 w-3.5 text-[#09757a] shrink-0 transition-opacity",
                                                isSelected ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        <span className={cn(
                                            "truncate transition-colors",
                                            isSelected ? "text-[#09757a] font-black" : "font-black text-foreground/80"
                                        )}>
                                            {item.name}
                                        </span>
                                    </CommandItem>
                                )
                            })}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
