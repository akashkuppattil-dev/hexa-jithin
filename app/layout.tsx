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
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
        sizes: "120x120",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
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
        url: "https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg",
        width: 120,
        height: 120,
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
          href="https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg"
        />
        <link
          rel="apple-touch-icon"
          href="https://5.imimg.com/data5/SELLER/Logo/2024/11/463774909/FM/DK/XY/135087769/imtemp1727699006-120x120.jpeg"
        />
      </head>
      <body className={`${barlow.variable} ${inter.variable} ${greatVibes.variable} font-sans antialiased bg-zinc-950`} suppressHydrationWarning>
        <ThemeProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen bg-zinc-950">
              <TopInfoBar />
              <Header />
              <main className="flex-1 bg-zinc-950 relative">{children}</main>
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
