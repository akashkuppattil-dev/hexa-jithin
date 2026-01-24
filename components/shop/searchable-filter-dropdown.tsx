"use client"

import * as React from "react"
import { Check, ChevronDown, Search } from "lucide-react"

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

interface SearchableFilterDropdownProps {
    label: string
    items: { id: string; name: string }[]
    selectedId: string | null
    onSelect: (id: string | null) => void
    placeholder?: string
    width?: string
}

export function SearchableFilterDropdown({
    label,
    items,
    selectedId,
    onSelect,
    placeholder = "Search...",
    width = "w-[160px]",
}: SearchableFilterDropdownProps) {
    const [open, setOpen] = React.useState(false)

    // Find selected item name safely
    const selectedItem = items.find((item) => item.id === selectedId)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                        "h-11 justify-between rounded-lg border-border bg-card font-black text-[10px] uppercase tracking-widest shadow-sm hover:border-[#09757a]/50 hover:text-[#09757a] transition-all",
                        width
                    )}
                >
                    <span className="truncate">
                        {selectedItem ? selectedItem.name : label}
                    </span>
                    <ChevronDown className="ml-2 h-3 w-3 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className={cn("p-0 shadow-xl", width)} align="start">
                <Command>
                    <CommandInput placeholder={placeholder} className="h-9 text-[10px] font-bold" />
                    <CommandList>
                        <CommandEmpty className="py-2 text-[10px] font-bold text-muted-foreground">No matches found.</CommandEmpty>
                        <CommandGroup>
                            <CommandItem
                                key="all"
                                value="all"
                                onSelect={() => {
                                    onSelect(null)
                                    setOpen(false)
                                }}
                                className="text-[10px] font-black uppercase tracking-wider"
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-3 w-3",
                                        selectedId === null ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                All {label}s
                            </CommandItem>
                            {items.map((item, idx) => (
                                <CommandItem
                                    key={`${item.id}-${idx}`}
                                    value={item.name}
                                    onSelect={() => {
                                        onSelect(item.id === selectedId ? null : item.id)
                                        setOpen(false)
                                    }}
                                    className="text-[10px] font-bold uppercase tracking-wider cursor-pointer"
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-3 w-3 text-[#09757a]",
                                            selectedId === item.id ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
