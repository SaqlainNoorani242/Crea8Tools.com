"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex items-center">
            <div className="relative">
              <Zap className="h-9 w-9 text-blue-600 group-hover:text-blue-700 transition-all duration-300 drop-shadow-sm" />
              <div className="absolute inset-0 bg-blue-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 ml-2">
              Crea<span className="text-blue-600 text-3xl">8</span>Tools
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-gray-700 hover:text-blue-600 font-semibold text-lg transition-all duration-300 group py-2 px-1"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button
            asChild
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-0"
          >
            <Link href="/tools">Get Started Free</Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-3 min-h-[48px] min-w-[48px] rounded-lg hover:bg-gray-100 transition-all duration-300"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </div>
          </Button>
        </div>
      </div>

      <div
        className={`md:hidden border-t border-gray-200 bg-white transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="container mx-auto px-4 py-8 space-y-6">
          {navigation.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-700 hover:text-blue-600 font-semibold text-xl transition-all duration-300 py-3 px-2 rounded-lg hover:bg-gray-50 transform hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg mt-6"
          >
            <Link href="/tools">Get Started Free</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
