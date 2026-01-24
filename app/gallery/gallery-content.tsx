"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ZoomIn, Image as ImageIcon, Building2, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

// Gallery images - you can add the company logo and more images here
const galleryImages = [
    {
        id: 1,
        src: "/uploaded_media_1769225351955.png",
        alt: "Hexamech Linich Tools Logo",
        category: "brand",
        title: "Company Logo"
    },
    // Add more images as needed
]

const categories = [
    { id: "all", label: "All", icon: ImageIcon },
    { id: "brand", label: "Brand Identity", icon: Award },
    { id: "workshop", label: "Workshop", icon: Building2 },
    { id: "team", label: "Our Team", icon: Users },
]

export function GalleryContent() {
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

    const filteredImages = selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter(img => img.category === selectedCategory)

    return (
        <div className="min-h-screen bg-background pt-8 sm:pt-10 md:pt-12 pb-16 transition-colors">
            {/* Background Pattern */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] dark:invert-0 invert" />

            <div className="w-full px-4 sm:px-6 md:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#09757a]/10 border border-[#09757a]/20 rounded-full mb-4">
                        <ImageIcon className="h-3 w-3 text-[#09757a]" />
                        <span className="text-[9px] sm:text-[10px] font-black text-[#09757a] uppercase tracking-widest">Visual Journey</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4 tracking-tighter uppercase leading-tight">
                        Our <span className="text-[#09757a]">Gallery</span>
                    </h1>
                    <p className="text-sm sm:text-base text-foreground font-black max-w-2xl mx-auto italic">
                        Explore our journey, workspace, and the moments that define Hexamech Linich Tools
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                className={`h-9 sm:h-10 px-4 sm:px-6 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${selectedCategory === category.id
                                        ? "bg-[#09757a] text-white shadow-lg"
                                        : "border-border text-foreground hover:border-[#09757a]/50 hover:text-[#09757a]"
                                    }`}
                            >
                                <Icon className="h-3.5 w-3.5 mr-2" />
                                {category.label}
                            </Button>
                        )
                    })}
                </div>

                {/* Gallery Grid */}
                {filteredImages.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                        {filteredImages.map((image) => (
                            <div
                                key={image.id}
                                className="group relative aspect-square bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:border-[#09757a]/40 transition-all duration-500"
                                onClick={() => setSelectedImage(image)}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                                    <h3 className="text-white font-black text-sm sm:text-base uppercase tracking-tight mb-1">{image.title}</h3>
                                    <div className="flex items-center gap-2 text-white/80">
                                        <ZoomIn className="h-3.5 w-3.5" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">View Full Size</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-card rounded-xl border border-border max-w-2xl mx-auto">
                        <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                        <p className="text-lg font-black text-foreground mb-2 uppercase tracking-tight">No Images Found</p>
                        <p className="text-sm text-foreground font-black">Try selecting a different category</p>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-6 w-6" />
                    </Button>

                    <div className="relative max-w-6xl w-full max-h-[90vh] aspect-video" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                            sizes="90vw"
                            priority
                        />
                    </div>

                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                        <p className="text-white font-black text-sm uppercase tracking-widest text-center">{selectedImage.title}</p>
                    </div>
                </div>
            )}
        </div>
    )
}
