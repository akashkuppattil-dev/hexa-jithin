"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"
import { useState } from "react"

const productInterests = [
  { value: "general", label: "General Enquiry" },
  { value: "spray-guns", label: "Spray Guns & Paint Equipment" },
  { value: "welding", label: "Welding Machines" },
  { value: "engine-cranes", label: "Engine Cranes & Lifting" },
  { value: "power-tools", label: "Power Tools" },
  { value: "special-tools", label: "Special Service Tools" },
  { value: "bulk-order", label: "Bulk Order" },
  { value: "workshop-setup", label: "Workshop Setup" },
  { value: "others", label: "Others" },
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Construct WhatsApp message data
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      mobile: formData.get("mobile") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      gst: formData.get("gst") as string,
      purpose: formData.get("purpose") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    }

    const text = `*New Contact Enquiry*\n\n*Name:* ${data.name}\n*Mobile:* ${data.mobile}\n*Email:* ${data.email}\n*Company:* ${data.company || 'N/A'}\n*GST:* ${data.gst || 'N/A'}\n*Purpose:* ${data.purpose}\n*Interest:* ${data.interest}\n\n*Requirement:*\n${data.message}`
    const whatsappUrl = `https://wa.me/917510638693?text=${encodeURIComponent(text)}`

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    window.open(whatsappUrl, "_blank")

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="glass border-[#0066cc]/20">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0066cc]/10 mb-3 border border-[#0066cc]/20">
            <CheckCircle className="h-8 w-8 text-[#0066cc]" />
          </div>
          <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight">Enquiry Received!</h3>
          <p className="text-foreground font-black mb-4 text-xs sm:text-sm">Redirecting you to WhatsApp to discuss your requirement...</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase font-black tracking-widest border-foreground">
            Send Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="mobile" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Mobile Number (10 Digits) *</Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="9876543210"
              required
              pattern="\d{10}"
              title="Please enter a 10 digit mobile number"
              className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Company / Workshop</Label>
            <Input
              id="company"
              name="company"
              placeholder="Company Name"
              className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gst" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">GST Number</Label>
            <Input
              id="gst"
              name="gst"
              placeholder="Optional"
              className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="purpose" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Purpose of Enquiry *</Label>
          <Select name="purpose" required>
            <SelectTrigger className="bg-muted/30 border-border text-foreground focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black">
              <SelectValue placeholder="Select Purpose" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border text-popover-foreground">
              <SelectItem value="purchase" className="focus:bg-[#0066cc] focus:text-white cursor-pointer text-[10px] uppercase font-black">New Purchase (Buying)</SelectItem>
              <SelectItem value="service" className="focus:bg-[#0066cc] focus:text-white cursor-pointer text-[10px] uppercase font-black">Service / Repair</SelectItem>
              <SelectItem value="partner" className="focus:bg-[#0066cc] focus:text-white cursor-pointer text-[10px] uppercase font-black">Become a Dealer</SelectItem>
              <SelectItem value="other" className="focus:bg-[#0066cc] focus:text-white cursor-pointer text-[10px] uppercase font-black">General Information</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="interest" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Product Interest *</Label>
          <Select name="interest" required>
            <SelectTrigger className="bg-muted/30 border-border text-foreground focus:border-[#0066cc] h-9 text-xs rounded-lg shadow-sm font-black">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border text-popover-foreground">
              {productInterests.map((interest) => (
                <SelectItem key={interest.value} value={interest.value} className="focus:bg-[#0066cc] focus:text-white cursor-pointer text-[10px] uppercase font-black">
                  {interest.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Message / Requirement *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your requirements..."
            rows={3}
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#0066cc] text-xs rounded-xl resize-none shadow-sm font-black"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-[#0066cc] hover:bg-[#0052a3] text-white font-black uppercase tracking-[0.2em] shadow-lg text-[10px] rounded-lg transition-all border border-transparent"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5 mr-2" />
              Submit Official Enquiry
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
