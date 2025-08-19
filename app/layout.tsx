import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Crea8Tools - Smart AI Writing Tools for Creators & Marketers",
  description:
    "Free AI-powered writing tools for creators, students, marketers, and business owners. Generate content, optimize SEO, and boost productivity with our smart toolkit.",
  generator: "Crea8Tools",
  keywords:
    "AI writing tools, content generator, SEO tools, marketing tools, free AI tools, FAQ generator, quote generator, script generator, Pinterest generator, tagline generator, paraphrasing tool, product description generator, meta description generator, blog title generator, YouTube generator",
  authors: [{ name: "Crea8Tools" }],
  creator: "Crea8Tools",
  publisher: "Crea8Tools",
  robots: "index, follow",
  category: "Technology",
  classification: "AI Writing Tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Crea8Tools - Smart AI Writing Tools for Creators & Marketers",
    description:
      "Free AI-powered writing tools for creators, students, marketers, and business owners. Generate content, optimize SEO, and boost productivity with our smart toolkit.",
    url: "https://crea8tools.com",
    siteName: "Crea8Tools",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://crea8tools.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crea8Tools - Smart AI Writing Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crea8Tools - Smart AI Writing Tools for Creators & Marketers",
    description: "Free AI-powered writing tools for creators, students, marketers, and business owners.",
    images: ["https://crea8tools.com/og-image.png"],
    creator: "@crea8tools",
    site: "@crea8tools",
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  alternates: {
    canonical: "https://crea8tools.com",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Crea8Tools",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3271205527151622"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Crea8Tools" />
        <meta name="application-name" content="Crea8Tools" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
