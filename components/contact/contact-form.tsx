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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <Card className="glass">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">Our team will respond within 30 minutes during working hours.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)}>
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
            <Label htmlFor="name" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Full Name"
              required
              className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="mobile" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Mobile Number *</Label>
            <Input
              id="mobile"
              name="mobile"
              type="tel"
              placeholder="+91 00000 00000"
              required
              className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="company" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Company / Workshop</Label>
            <Input
              id="company"
              name="company"
              placeholder="Company Name"
              className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="gst" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">GST Number</Label>
            <Input
              id="gst"
              name="gst"
              placeholder="Optional"
              className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="purpose" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Purpose of Enquiry *</Label>
          <Select name="purpose" required>
            <SelectTrigger className="bg-background border-input text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm">
              <SelectValue placeholder="Select Purpose" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border text-popover-foreground">
              <SelectItem value="purchase" className="focus:bg-primary focus:text-primary-foreground cursor-pointer text-xs uppercase font-bold">New Purchase (Buying)</SelectItem>
              <SelectItem value="service" className="focus:bg-primary focus:text-primary-foreground cursor-pointer text-xs uppercase font-bold">Service / Repair</SelectItem>
              <SelectItem value="partner" className="focus:bg-primary focus:text-primary-foreground cursor-pointer text-xs uppercase font-bold">Become a Dealer</SelectItem>
              <SelectItem value="other" className="focus:bg-primary focus:text-primary-foreground cursor-pointer text-xs uppercase font-bold">General Information</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="interest" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Product Interest *</Label>
          <Select name="interest" required>
            <SelectTrigger className="bg-background border-input text-muted-foreground focus:border-primary/50 h-9 text-xs rounded-lg shadow-sm">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent className="bg-popover border-border text-popover-foreground">
              {productInterests.map((interest) => (
                <SelectItem key={interest.value} value={interest.value} className="focus:bg-primary focus:text-primary-foreground cursor-pointer text-xs uppercase font-bold">
                  {interest.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-muted-foreground font-black text-[9px] uppercase tracking-[0.2em]">Message / Requirement *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your requirements..."
            rows={4}
            required
            className="bg-background border-input text-foreground placeholder:text-muted-foreground focus:border-primary/50 text-xs rounded-xl resize-none shadow-sm"
          />
        </div>

        <Button type="submit" className="w-full h-10 bg-primary hover:bg-foreground hover:text-background text-primary-foreground font-black uppercase tracking-[0.2em] shadow-lg text-[10px] rounded-lg transition-all border border-transparent hover:border-primary" disabled={isLoading}>
          {isLoading ? (
            <>
              <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5 mr-2" />
              Submit Request
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
