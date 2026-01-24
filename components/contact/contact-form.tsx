"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT } from "@/lib/constants"
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

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      mobile: formData.get("mobile") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to send enquiry')
      }

      setIsLoading(false)
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to send enquiry. Please try again or contact us directly.')
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="glass border-[#09757a]/20">
        <CardContent className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#09757a]/10 mb-3 border border-[#09757a]/20">
            <CheckCircle className="h-8 w-8 text-[#09757a]" />
          </div>
          <h3 className="text-xl font-black text-foreground mb-2 uppercase tracking-tight">Enquiry Received!</h3>
          <p className="text-foreground font-black mb-4 text-xs sm:text-sm">Thank you for contacting us. We'll respond to your enquiry shortly.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="text-[10px] uppercase font-black tracking-widest border-foreground">
            Send Another Enquiry
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="Full Name"
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-black"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-black"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="mobile" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Mobile Number *</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="9876543210"
            required
            pattern="\d{10}"
            title="Please enter a 10 digit mobile number"
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] h-10 text-xs rounded-lg shadow-sm font-black"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-foreground font-black text-[9px] uppercase tracking-[0.2em]">Message / Requirement *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Describe your requirements..."
            rows={4}
            required
            className="bg-muted/30 border-border text-foreground placeholder:text-zinc-500 focus:border-[#09757a] text-xs rounded-xl resize-none shadow-sm font-black"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-11 bg-[#09757a] hover:bg-[#075a5e] text-white font-black uppercase tracking-[0.2em] shadow-lg text-[10px] rounded-lg transition-all border border-transparent"
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
              Submit Enquiry
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
