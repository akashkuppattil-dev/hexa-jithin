"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoading) return
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name")?.toString().trim() || "",
      mobile: formData.get("mobile")?.toString().trim() || "",
      email: formData.get("email")?.toString().trim() || "",
      message: formData.get("message")?.toString().trim() || "",
      product_name: "General Enquiry",
      form_type: "Contact Form",
    }

    // 🔒 Validation
    if (!data.name || !data.email || !data.mobile || !data.message) {
      alert("Please fill in all required fields.")
      setIsLoading(false)
      return
    }

    if (!/^\d{10}$/.test(data.mobile)) {
      alert("Please enter a valid 10-digit mobile number.")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send enquiry")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Contact form submission error:", error)
      alert("Unable to send enquiry. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  /* ---------------- SUCCESS STATE ---------------- */
  if (isSubmitted) {
    return (
      <Card className="glass border-[#09757a]/20">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#09757a]/10 mb-3 border border-[#09757a]/20">
            <CheckCircle className="h-8 w-8 text-[#09757a]" />
          </div>
          <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight">
            Enquiry Received!
          </h3>
          <p className="text-foreground font-black mb-4 text-xs sm:text-sm">
            Thank you for contacting us. We'll get back to you shortly.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsSubmitted(false)}
            className="text-[10px] uppercase font-black tracking-widest border-foreground"
          >
            Send Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  /* ---------------- FORM STATE ---------------- */
  return (
    <div className="w-full max-w-lg mx-auto lg:mx-0">
      <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
        {/* Name */}
        <div className="space-y-1.5">
          <Label className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">
            Name *
          </Label>
          <Input
            name="name"
            placeholder="Full Name"
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-medium"
          />
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">
            Email Address *
          </Label>
          <Input
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-medium"
          />
        </div>

        {/* Mobile */}
        <div className="space-y-1.5">
          <Label className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">
            Mobile Number *
          </Label>
          <Input
            name="mobile"
            type="tel"
            placeholder="9876543210"
            required
            pattern="\d{10}"
            title="Please enter a 10 digit mobile number"
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-medium"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <Label className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">
            Message / Requirement *
          </Label>
          <Textarea
            name="message"
            placeholder="Describe your requirements..."
            rows={4}
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] text-xs rounded-xl resize-none shadow-sm font-medium"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 bg-[#09757a] hover:bg-[#075a5e] text-white font-black uppercase tracking-[0.2em] shadow-lg text-[10px] rounded-lg transition-all"
        >
          {isLoading ? (
            <>
              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5 mr-2" />
              Submit Enquiry
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
