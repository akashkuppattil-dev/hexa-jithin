import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { TopInfoBar } from "@/components/layout/top-info-bar"
import { ThemeProvider } from "@/components/theme-provider"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CartProvider } from "@/context/cart-context"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Barlow, Inter, Great_Vibes } from "next/font/google"
import type React from "react"
import "./globals.css"

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
  preload: true,
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://hi-hexa.vercel.app"),
  title: "Hexamech Linich Tools | Automotive Tools Wholesaler Kerala | Chulliparamba, Malappuram",
  description:
    "Hexamech Linich Tools – Kerala's premier automotive tools wholesaler in Chulliparamba, near Farook College, Malappuram. Wholesale spray guns, welders, power tools, garage equipment with fast delivery across Kerala & All India.",
  keywords: [
    "automotive tools",
    "wholesale tools kerala",
    "spray guns",
    "welding machines",
    "power tools",
    "garage equipment",
    "malappuram",
    "kerala",
    "hexamech",
    "linich tools",
  ],
  authors: [{ name: "Hexamech Linich Tools" }],
  icons: {
    icon: [
      {
        url: "/images/hexamech-logo-new.jpg",
        sizes: "120x120",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/images/hexamech-logo-new.jpg",
        sizes: "120x120",
        type: "image/jpeg",
      },
    ],
  },
  openGraph: {
    title: "Hexamech Linich Tools - Kerala's Premier Automotive Tools Wholesaler",
    description:
      "Wholesale spray guns, welders, power tools & garage equipment with fast delivery across Kerala & All India.",
    type: "website",
    images: [
      {
        url: "/images/hexamech-logo-new.jpg",
        width: 1200,
        height: 630,
        alt: "Hexamech Linich Tools Logo",
      },
    ],
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/images/hexamech-logo-new.jpg"
        />
        <link
          rel="apple-touch-icon"
          href="/images/hexamech-logo-new.jpg"
        />
      </head>
      <body className={`${barlow.variable} ${inter.variable} ${greatVibes.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1 relative">{children}</main>
              <Footer />
            </div>
            <WhatsAppButton />
          </CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
