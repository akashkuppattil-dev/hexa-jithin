"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Product } from "@/lib/products"
import { CheckCircle, Send, Plus, Minus } from "lucide-react"
import { useState } from "react"

interface ProductInquiryFormProps {
    product: Product
}

export function ProductInquiryForm({ product }: ProductInquiryFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [qty, setQty] = useState(0)

    const increment = () => setQty(prev => prev + 1)
    const decrement = () => setQty(prev => Math.max(0, prev - 1))

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name") as string,
            mobile: formData.get("mobile") as string,
            email: formData.get("email") as string,
            quantity: qty,
            message: formData.get("message") as string,
        }

        // Mobile Validation: 10 digits
        if (!/^\d{10}$/.test(data.mobile)) {
            alert("Please enter a valid 10-digit mobile number.")
            setIsLoading(false)
            return
        }

        // Construct WhatsApp Message
        const text = `*New Purchase Inquiry*\n\n*Product:* ${product.name}\n*SKU:* ${product.sku}\n\n*Customer Details:*\nName: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\nQuantity: ${data.quantity}\n\n*Message:*\n${data.message}`

        const whatsappUrl = `https://wa.me/917510638693?text=${encodeURIComponent(text)}`

        // Simulate small delay then open WhatsApp
        await new Promise((resolve) => setTimeout(resolve, 800))
        window.open(whatsappUrl, "_blank")

        setIsLoading(false)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#09757a]/10 mb-3 border border-[#09757a]/20">
                        <CheckCircle className="h-6 w-6 text-[#09757a]" />
                    </div>
                    <h3 className="text-lg font-black text-foreground mb-1 uppercase tracking-tight">Inquiry Sent!</h3>
                    <p className="text-xs text-foreground mb-4 font-black text-center">Redirecting you to WhatsApp to complete your order...</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase font-black tracking-widest h-8 border-foreground">
                        Send Another
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <div className="bg-card border border-border rounded-xl p-4 sm:p-5 shadow-lg mt-6">
            <div className="mb-4">
                <h3 className="text-sm font-black text-foreground uppercase tracking-wider mb-1">Make a Purchase Inquiry</h3>
                <p className="text-[10px] text-foreground font-black">Fill details below for bulk pricing & availability.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Name Field (Auto-filled) */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">Inquiry For Product</Label>
                    <Input
                        value={product.name}
                        readOnly
                        className="bg-muted border-border h-8 text-[11px] rounded-md font-black text-foreground"
                    />
                </div>

                {/* Quantity with +/- Icons */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">Required Quantity</Label>
                    <div className="flex items-center gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={decrement}
                            className="h-8 w-8 rounded-md border-border bg-background hover:bg-muted"
                        >
                            <Minus className="h-3 w-3 text-foreground" />
                        </Button>
                        <div className="w-12 text-center text-[13px] font-black text-foreground">
                            {qty}
                        </div>
                        <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={increment}
                            className="h-8 w-8 rounded-md border-border bg-background hover:bg-muted"
                        >
                            <Plus className="h-3 w-3 text-foreground" />
                        </Button>
                        <span className="text-[10px] font-black text-zinc-500 uppercase ml-2">Units</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="text-foreground font-black text-[9px] uppercase tracking-wider">Your Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-black text-foreground placeholder:text-zinc-400"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="mobile" className="text-foreground font-black text-[9px] uppercase tracking-wider">Mobile (10 Digits) *</Label>
                        <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            placeholder="9876543210"
                            required
                            pattern="\d{10}"
                            title="Please enter a 10 digit mobile number"
                            className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-black text-foreground placeholder:text-zinc-400"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="email" className="text-foreground font-black text-[9px] uppercase tracking-wider">Email Address *</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-black text-foreground placeholder:text-zinc-400"
                    />
                </div>

                <div className="space-y-1">
                    <Label htmlFor="message" className="text-foreground font-black text-[9px] uppercase tracking-wider">Additional Message (Optional)</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="I am interested in bulk pricing for this product..."
                        rows={2}
                        className="bg-muted/30 border-border focus:border-[#09757a] text-[11px] rounded-md resize-none font-black text-foreground min-h-[60px] placeholder:text-zinc-400"
                    />
                </div>

                {/* Submit button as Blue Color */}
                <Button
                    type="submit"
                    className="w-full h-10 bg-[#0066cc] hover:bg-[#0052a3] text-white font-black uppercase tracking-[0.2em] shadow-md text-[10px] rounded-md transition-all mt-2"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">Processing Enquiry...</span>
                    ) : (
                        <span className="flex items-center gap-2"><Send className="h-3.5 w-3.5" /> Send Purchase Inquiry</span>
                    )}
                </Button>
            </form>
        </div>
    )
}
