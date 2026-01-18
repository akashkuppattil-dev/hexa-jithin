"use client"

import { useState, useEffect } from "react"
import { CONTACT } from "@/lib/constants"
import { styles } from "@/lib/utils" // Assuming this exists or I'll just use classNames
import { MessageCircle, X, ChevronRight, ArrowLeft } from "lucide-react"
import { categories, brands } from "@/lib/products"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const [showGreeting, setShowGreeting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"menu" | "category" | "brand">("menu")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("")

  useEffect(() => {
    // Show greeting after 1 second
    const showTimer = setTimeout(() => {
      setShowGreeting(true)
    }, 1000)

    // Hide greeting after 3 seconds + 1 second delay = 4s total (or 3s of visibility)
    const hideTimer = setTimeout(() => {
      setShowGreeting(false)
    }, 4000)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [])

  const handleOpenChat = () => {
    setIsOpen(true)
    setShowGreeting(false)
  }

  const handleCloseChat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(false)
    setStep("menu")
    setSelectedCategory("")
    setSelectedBrand("")
  }

  const startWhatsAppChat = (text: string) => {
    window.open(`${CONTACT.WHATSAPP_URL}?text=${encodeURIComponent(text)}`, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-3 sm:bottom-4 md:bottom-6 right-3 sm:right-4 md:right-6 z-50 flex flex-col items-end gap-2">

      {/* Greeting Popup */}
      <div
        className={cn(
          "bg-white dark:bg-zinc-900 border border-border shadow-xl rounded-lg p-3 max-w-[200px] transition-all duration-500 origin-bottom-right mb-2",
          showGreeting ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none absolute bottom-full right-0"
        )}
      >
        <p className="text-xs font-bold text-foreground relative">
          Hi, looking for something?
          <span className="absolute -bottom-[18px] right-4 w-3 h-3 bg-white dark:bg-zinc-900 border-b border-r border-border transform rotate-45"></span>
        </p>
      </div>

      {/* Main Button */}
      {!isOpen && (
        <button
          onClick={handleOpenChat}
          className="group flex items-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={cn(
              "mr-2 sm:mr-3 bg-card shadow-xl rounded border border-border px-2.5 sm:px-3 py-1 sm:py-1.5 transition-all duration-300 hidden sm:block",
              isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
            )}
          >
            <p className="text-[9px] sm:text-[10px] font-black text-foreground uppercase tracking-wider sm:tracking-widest whitespace-nowrap">Chat Assistant</p>
            <p className="text-[7px] sm:text-[8px] font-bold text-[#25D366] uppercase tracking-wide sm:tracking-wider">Online Now</p>
          </div>

          <div className="relative active:scale-90 transition-transform">
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
            <div className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-2.5 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
              <MessageCircle className="h-5 w-5 fill-current" />
            </div>
          </div>
        </button>
      )}

      {/* Chat Bot Window */}
      {isOpen && (
        <div className="bg-background border border-border mt-2 rounded-xl shadow-2xl w-[280px] sm:w-[320px] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-[#128C7E] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-1.5 rounded-full">
                <MessageCircle className="h-4 w-4 text-white fill-current" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Hexamech Assistant</h3>
                <p className="text-[10px] text-white/80">Typically replies immediately</p>
              </div>
            </div>
            <button onClick={handleCloseChat} className="text-white/80 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-card max-h-[400px] overflow-y-auto min-h-[300px]">
            {step === "menu" && (
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-muted-foreground animate-in fade-in slide-in-from-left-2 mb-4">
                  Hello! 👋 How can we help you today?
                </div>

                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-between text-xs font-bold h-9" onClick={() => setStep("category")}>
                    Buying Products <ChevronRight className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between text-xs font-bold h-9" onClick={() => startWhatsAppChat("Hi, I have a technical support query.")}>
                    Technical Support <ChevronRight className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between text-xs font-bold h-9" onClick={() => startWhatsAppChat("Hi, I want to track my order.")}>
                    Track Order <ChevronRight className="h-3 w-3" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between text-xs font-bold h-9" onClick={() => startWhatsAppChat("Hi, I have a general enquiry.")}>
                    Talk to Sales <ChevronRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}

            {step === "category" && (
              <div className="space-y-3">
                <button onClick={() => setStep("menu")} className="text-[10px] flex items-center gap-1 text-muted-foreground hover:text-foreground mb-2">
                  <ArrowLeft className="h-3 w-3" /> Back
                </button>
                <div className="bg-muted p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-muted-foreground animate-in fade-in slide-in-from-left-2 mb-4">
                  Great! Which category are you interested in?
                </div>

                <div className="space-y-1.5 h-[250px] overflow-y-auto pr-1 custom-scrollbar">
                  {categories.map((cat) => (
                    <Button
                      key={cat.id}
                      variant="ghost"
                      className="w-full justify-start text-[10px] font-bold h-8 border border-border/50 hover:bg-accent"
                      onClick={() => {
                        setSelectedCategory(cat.name)
                        setStep("brand")
                      }}
                    >
                      {cat.name}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {step === "brand" && (
              <div className="space-y-3">
                <button onClick={() => setStep("category")} className="text-[10px] flex items-center gap-1 text-muted-foreground hover:text-foreground mb-2">
                  <ArrowLeft className="h-3 w-3" /> Back
                </button>
                <div className="bg-muted p-3 rounded-tr-xl rounded-bl-xl rounded-br-xl text-xs text-muted-foreground animate-in fade-in slide-in-from-left-2 mb-4">
                  Any specific brand preference?
                </div>

                <div className="space-y-1.5 h-[220px] overflow-y-auto pr-1 custom-scrollbar">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-[10px] font-bold h-8 border border-border/50 hover:bg-accent hover:text-[#128C7E]"
                    onClick={() => startWhatsAppChat(`Hi, I'm looking for ${selectedCategory}.`)}
                  >
                    No Preference / Any
                  </Button>
                  {brands.map((brand) => (
                    <Button
                      key={brand}
                      variant="ghost"
                      className="w-full justify-start text-[10px] font-bold h-8 border border-border/50 hover:bg-accent"
                      onClick={() => {
                        startWhatsAppChat(`Hi, I'm looking for ${selectedCategory} from ${brand}.`)
                      }}
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
