"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner, Auto Workshop",
    location: "Calicut",
    image: "/testimonial-1-indian-mechanic-workshop-owner.jpg",
    content: "Quality tools, fast delivery! Hexamech has been our go-to supplier for all automotive tools. Competitive wholesale prices.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mohammed Ashraf",
    role: "Manager, Body Shop",
    location: "Kochi",
    image: "/testimonial-2-indian-paint-booth-manager.jpg",
    content: "Our body shop spray guns are fully from Hexamech. Genuine products and excellent after-sales support.",
    rating: 5,
  },
  {
    id: 3,
    name: "Suresh Nair",
    role: "Service Manager",
    location: "Trivandrum",
    image: "/testimonial-3-indian-service-manager.jpg",
    content: "Reliable wholesale partner. They always have stock and delivery to Trivandrum is quick. Highly recommended!",
    rating: 5,
  },
  {
    id: 4,
    name: "Pradeep Menon",
    role: "Proprietor",
    location: "Thrissur",
    image: "/testimonial-4-indian-motors-owner.jpg",
    content: "Welding machines have been running perfectly for a year. They helped us choose the right equipment.",
    rating: 5,
  },
  {
    id: 5,
    name: "Anwar Ali",
    role: "Workshop Owner",
    location: "Malappuram",
    image: "/testimonial-5-indian-garage-proprietor.jpg",
    content: "The range of power tools available at Hexamech is unmatched. We received our order within 24 hours in Malappuram.",
    rating: 5,
  },
  {
    id: 6,
    name: "Shibu Thomas",
    role: "Chief Technician",
    location: "Kottayam",
    image: "/testimonial-7-indian-head-mechanic.jpg",
    content: "Highly impressed with the quality of pneumatic tools. Hexamech is definitely the best in Kerala for industrial tools.",
    rating: 5,
  },
]

export function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsToShow, setItemsToShow] = useState(4)
  const totalItems = testimonials.length

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsToShow(1)
      else if (window.innerWidth < 1024) setItemsToShow(2)
      else setItemsToShow(4)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % totalItems), [totalItems])
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems), [totalItems])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const visibleTestimonials = Array.from({ length: itemsToShow }).map(
    (_, i) => testimonials[(currentIndex + i) % totalItems],
  )

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a] transition-colors">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/20 border border-[#09757a]/30 rounded mb-4">
            <Star className="h-2.5 w-2.5 text-[#09757a] fill-current" />
            <span className="text-[9px] font-black text-[#09757a] uppercase tracking-widest">Customer Satisfaction</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 tracking-tighter uppercase">Voices of Trust</h2>
          <p className="text-xs md:text-sm text-zinc-500 font-medium max-w-xl mx-auto italic">
            Feedback from professional workshops and industrial partners across South India.
          </p>
        </div>

        <div className="relative group/testimonials max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-[#111] border-white/5 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-[#09757a] hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card key={`${testimonial.id}-${idx}`} className="bg-[#111] border border-white/5 shadow-xl hover:border-[#09757a]/40 transition-all rounded-2xl p-5 flex flex-col h-full animate-in fade-in duration-500">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-2 w-2 text-[#09757a] fill-current" />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-[#09757a]/20 mb-3" />
                <p className="text-[11px] text-zinc-400 font-medium leading-relaxed italic mb-5 flex-1">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-2.5 pt-3 border-t border-white/5">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[10px] text-white truncate uppercase tracking-tight">{testimonial.name}</h4>
                    <p className="text-[9px] text-[#09757a] font-black uppercase tracking-widest truncate">{testimonial.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-[#111] border-white/5 opacity-0 group-hover/testimonials:opacity-100 transition-all hover:bg-[#09757a] hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center gap-1.5 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 rounded-full transition-all ${index === currentIndex ? "w-6 bg-[#09757a]" : "w-1.5 bg-white/10 hover:bg-white/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
