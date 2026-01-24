import { Metadata } from "next"
import { GalleryContent } from "./gallery-content"

export const metadata: Metadata = {
    title: "Gallery | Hexamech Linich Tools",
    description: "Explore our workshop, products, and company moments at Hexamech Linich Tools",
}

export default function GalleryPage() {
    return <GalleryContent />
}
