"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="h-7 w-7 rounded-full border border-border bg-secondary" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="group h-7 w-7 rounded-full bg-secondary border border-border flex items-center justify-center hover:border-[#09757a]/50 hover:bg-[#09757a]/10 transition-all shadow-sm active:scale-90"
        >
            <div className="relative flex items-center justify-center">
                <Sun className={`h-[1.1rem] w-[1.1rem] transition-all duration-500 ${theme === "dark" ? "rotate-0 scale-100 text-amber-400" : "-rotate-90 scale-0 opacity-0"}`} />
                <Moon className={`absolute h-[1rem] w-[1rem] transition-all duration-500 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 text-[#09757a]"}`} />
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    )
}
