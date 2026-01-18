"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Product } from "@/lib/products"
import { CheckCircle, Send } from "lucide-react"
import { useState } from "react"

interface ProductInquiryFormProps {
    product: Product
}

export function ProductInquiryForm({ product }: ProductInquiryFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        const data = {
            name: formData.get("name") as string,
            mobile: formData.get("mobile") as string,
            email: formData.get("email") as string,
            quantity: formData.get("quantity") as string,
            message: formData.get("message") as string,
        }

        // Construct WhatsApp Message
        const text = `*New Product Inquiry*\n\n*Product:* ${product.name}\n*SKU:* ${product.sku}\n\n*Customer Details:*\nName: ${data.name}\nMobile: ${data.mobile}\nEmail: ${data.email}\nQuantity: ${data.quantity}\n\n*Message:*\n${data.message}`

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
                    <p className="text-xs text-muted-foreground mb-4 font-medium">Redirecting you to WhatsApp to complete your order...</p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase font-bold tracking-widest h-8">
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
                <p className="text-[10px] text-muted-foreground font-medium">Fill details below for bulk pricing & availability.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="text-muted-foreground font-bold text-[9px] uppercase tracking-wider">Your Name *</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="bg-muted/50 border-border focus:border-[#09757a] h-8 text-[10px] rounded-md font-medium"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="mobile" className="text-muted-foreground font-bold text-[9px] uppercase tracking-wider">Mobile *</Label>
                        <Input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            placeholder="+91..."
                            required
                            className="bg-muted/50 border-border focus:border-[#09757a] h-8 text-[10px] rounded-md font-medium"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-muted-foreground font-bold text-[9px] uppercase tracking-wider">Email Address</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Optional"
                            className="bg-muted/50 border-border focus:border-[#09757a] h-8 text-[10px] rounded-md font-medium"
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="quantity" className="text-muted-foreground font-bold text-[9px] uppercase tracking-wider">Quantity / Measure *</Label>
                        <Input
                            id="quantity"
                            name="quantity"
                            placeholder="Ex: 5 Sets, 10 Pcs"
                            required
                            className="bg-muted/50 border-border focus:border-[#09757a] h-8 text-[10px] rounded-md font-medium"
                        />
                    </div>
                </div>

                <div className="space-y-1">
                    <Label htmlFor="message" className="text-muted-foreground font-bold text-[9px] uppercase tracking-wider">Message *</Label>
                    <Textarea
                        id="message"
                        name="message"
                        placeholder="I am interested in this product and would like to know..."
                        rows={2}
                        required
                        className="bg-muted/50 border-border focus:border-[#09757a] text-[10px] rounded-md resize-none font-medium min-h-[60px]"
                    />
                </div>

                <Button type="submit" className="w-full h-9 bg-[#09757a] hover:bg-foreground hover:text-background text-white font-black uppercase tracking-[0.2em] shadow-md text-[9px] rounded-md transition-all" disabled={isLoading}>
                    {isLoading ? (
                        <span className="flex items-center gap-2">Processing...</span>
                    ) : (
                        <span className="flex items-center gap-2"><Send className="h-3 w-3" /> Send Enquiry</span>
                    )}
                </Button>
            </form>
        </div>
    )
}
