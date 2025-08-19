import Link from "next/link"
import { Zap } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Sitemap", href: "/sitemap" },
  ]

  return (
    <footer className="bg-white border-t dark:bg-gray-950 dark:border-gray-800">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Crea<span className="text-blue-600">8</span>Tools
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Smart AI writing tools for creators, students, marketers, and business owners. Generate high-quality
              content instantly with our free AI-powered toolkit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">© {currentYear} Crea8Tools. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="mx-2 text-gray-400">|</span>}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
