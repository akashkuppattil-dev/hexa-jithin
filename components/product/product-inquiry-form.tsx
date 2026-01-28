"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Product } from "@/lib/products"
import { CheckCircle, Send } from "lucide-react"

interface ProductInquiryFormProps {
    product: Product
}

export function ProductInquiryForm({ product }: ProductInquiryFormProps) {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (isLoading) return
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)

        const data = {
            product_name: product.name,
            productSku: product.sku,
            name: formData.get("name")?.toString().trim() || "",
            mobile: formData.get("mobile")?.toString().trim() || "",
            email: formData.get("email")?.toString().trim() || "",
            message: formData.get("message")?.toString().trim() || "",
            form_type: "Product Inquiry",
        }

        /* ---------------- VALIDATION ---------------- */
        if (!data.name || !data.email || !data.mobile) {
            alert("Please fill in all required fields.")
            setIsLoading(false)
            return
        }

        if (!/^\d{10}$/.test(data.mobile)) {
            alert("Please enter a valid 10-digit mobile number.")
            setIsLoading(false)
            return
        }

        /* ---------------- SUBMIT ---------------- */
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error("Failed to send inquiry")
            }

            setIsSubmitted(true)
        } catch (error) {
            console.error("Product inquiry error:", error)
            alert("Failed to send enquiry. Please try again later.")
        } finally {
            setIsLoading(false)
        }
    }

    /* ---------------- SUCCESS STATE ---------------- */
    if (isSubmitted) {
        return (
            <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#09757a]/10 mb-3 border border-[#09757a]/20">
                        <CheckCircle className="h-6 w-6 text-[#09757a]" />
                    </div>
                    <h3 className="text-lg font-black text-foreground mb-1 uppercase tracking-tight">
                        Inquiry Sent!
                    </h3>
                    <p className="text-xs text-foreground mb-4 font-black">
                        Thank you for your interest. Our sales team will contact you shortly.
                    </p>
                    <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="text-[10px] uppercase font-black tracking-widest h-8 border-foreground"
                    >
                        Send Another
                    </Button>
                </CardContent>
            </Card>
        )
    }

    /* ---------------- FORM STATE ---------------- */
    return (
        <div className="bg-card border border-border rounded-xl p-3.5 xs:p-5 shadow-lg mt-4 sm:mt-6 max-w-lg mx-auto md:mx-0">
            <div className="mb-4">
                <h3 className="text-sm font-black text-foreground uppercase tracking-wider mb-1">
                    Make a Purchase Inquiry
                </h3>
                <p className="text-[10px] text-foreground font-black">
                    Fill details below for bulk pricing & availability.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product Name */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">
                        Inquiry For Product
                    </Label>
                    <Input
                        value={product.name}
                        readOnly
                        className="bg-muted border-border h-8 text-[11px] rounded-md font-medium text-muted-foreground"
                    />
                </div>

                {/* Name */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">
                        Your Name *
                    </Label>
                    <Input
                        name="name"
                        placeholder="Full Name"
                        required
                        className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-medium text-foreground placeholder:text-zinc-400"
                    />
                </div>

                {/* Mobile */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">
                        Mobile (10 Digits) *
                    </Label>
                    <Input
                        name="mobile"
                        type="tel"
                        placeholder="9876543210"
                        required
                        pattern="\d{10}"
                        title="Please enter a 10 digit mobile number"
                        className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-medium text-foreground placeholder:text-zinc-400"
                    />
                </div>

                {/* Email */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">
                        Email Address *
                    </Label>
                    <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        className="bg-muted/30 border-border focus:border-[#09757a] h-8 text-[11px] rounded-md font-medium text-foreground placeholder:text-zinc-400"
                    />
                </div>

                {/* Message */}
                <div className="space-y-1">
                    <Label className="text-foreground font-black text-[9px] uppercase tracking-wider">
                        Additional Message (Optional)
                    </Label>
                    <Textarea
                        name="message"
                        placeholder="I am interested in bulk pricing for this product..."
                        rows={2}
                        className="bg-muted/30 border-border focus:border-[#09757a] text-[11px] rounded-md resize-none font-medium text-foreground min-h-[60px] placeholder:text-zinc-400"
                    />
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-10 bg-[#0066cc] hover:bg-[#0052a3] text-white font-black uppercase tracking-[0.2em] shadow-md text-[10px] rounded-md transition-all mt-2"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            Processing Enquiry...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <Send className="h-3.5 w-3.5" />
                            Send Purchase Inquiry
                        </span>
                    )}
                </Button>
            </form>
        </div>
    )
}
