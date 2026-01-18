import dynamic from "next/dynamic"
import { HeroSection } from "@/components/home/hero-section"
import { TrustBand } from "@/components/home/trust-band"

// Lazy load heavy components for better initial page load
const TopProductsCarousel = dynamic(() => import("@/components/home/top-products-carousel").then(mod => ({ default: mod.TopProductsCarousel })), {
  loading: () => <div className="h-64 bg-secondary/20 animate-pulse rounded-lg" />,
})

const CategoriesGrid = dynamic(() => import("@/components/home/categories-grid").then(mod => ({ default: mod.CategoriesGrid })), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse rounded-lg" />,
})

const BrandsSection = dynamic(() => import("@/components/home/brands-section").then(mod => ({ default: mod.BrandsSection })), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse rounded-lg" />,
})

const TrustedCustomersSection = dynamic(() => import("@/components/home/trusted-customers-section").then(mod => ({ default: mod.TrustedCustomersSection })), {
  loading: () => <div className="h-64 bg-secondary/20 animate-pulse rounded-lg" />,
})



const WhyHexamech = dynamic(() => import("@/components/home/why-hexamech").then(mod => ({ default: mod.WhyHexamech })), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse rounded-lg" />,
})



const FaqSection = dynamic(() => import("@/components/home/faq-section").then(mod => ({ default: mod.FaqSection })), {
  loading: () => <div className="h-80 bg-secondary/20 animate-pulse rounded-lg" />,
})

const BusinessDetails = dynamic(() => import("@/components/home/business-details").then(mod => ({ default: mod.BusinessDetails })), {
  loading: () => <div className="h-64 bg-secondary/20 animate-pulse rounded-lg" />,
})



export default function HomePage() {
  return (
    <div className="">
      <HeroSection />
      <TrustBand />
      <TopProductsCarousel />
      <CategoriesGrid />
      <BrandsSection />
      <WhyHexamech />
      <TrustedCustomersSection />
      <BusinessDetails />
      <FaqSection />
    </div>
  )
}
