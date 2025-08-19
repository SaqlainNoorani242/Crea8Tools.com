import type { Metadata } from "next"
import Link from "next/link"
import { ExternalLink, FileText, Home, Info, Mail, Shield, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Sitemap - Crea8Tools",
  description: "Complete sitemap of all pages and AI writing tools available on Crea8Tools platform.",
  robots: "index, follow",
}

export default function SitemapPage() {
  const mainPages = [
    { name: "Home", href: "/", icon: Home, description: "Main landing page with all AI writing tools" },
    { name: "Tools", href: "/tools", icon: Wrench, description: "Browse all available AI writing tools" },
    { name: "About", href: "/about", icon: Info, description: "Learn about Crea8Tools and our mission" },
    { name: "Contact", href: "/contact", icon: Mail, description: "Get in touch with our team" },
  ]

  const tools = [
    { name: "FAQ Generator", href: "/tools/faq-generator", description: "Generate comprehensive FAQ sections" },
    { name: "Quote Generator", href: "/tools/quote-generator", description: "Create inspiring quotes and sayings" },
    { name: "Script Generator", href: "/tools/script-generator", description: "Write scripts for shorts and reels" },
    {
      name: "Pinterest Generator",
      href: "/tools/pinterest-generator",
      description: "Create Pinterest pin titles and descriptions",
    },
    {
      name: "Tagline Generator",
      href: "/tools/tagline-generator",
      description: "Generate catchy taglines and slogans",
    },
    { name: "Paraphrasing Tool", href: "/tools/paraphrasing-tool", description: "Rewrite and paraphrase content" },
    {
      name: "Product Description",
      href: "/tools/product-description",
      description: "Write compelling product descriptions",
    },
    {
      name: "Meta Description",
      href: "/tools/meta-description",
      description: "Create SEO-optimized meta descriptions",
    },
    { name: "Blog Title Generator", href: "/tools/blog-title", description: "Generate engaging blog titles and ideas" },
    {
      name: "YouTube Generator",
      href: "/tools/youtube-generator",
      description: "Create YouTube titles and descriptions",
    },
  ]

  const legalPages = [
    { name: "Privacy Policy", href: "/privacy", description: "How we handle your data and privacy" },
    { name: "Terms of Service", href: "/terms", description: "Terms and conditions for using our platform" },
    { name: "Disclaimer", href: "/disclaimer", description: "Important disclaimers about AI-generated content" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Navigate through all pages and AI writing tools available on Crea8Tools. Find exactly what you're looking
            for with our comprehensive site directory.
          </p>
        </div>

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Home className="h-6 w-6 mr-2 text-blue-600" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mainPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <page.icon className="h-5 w-5 text-blue-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* AI Writing Tools */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Wrench className="h-6 w-6 mr-2 text-blue-600" />
              AI Writing Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{tool.description}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 mr-2 text-blue-600" />
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {legalPages.map((page) => (
                <Link
                  key={page.name}
                  href={page.href}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-start space-x-3">
                    <FileText className="h-5 w-5 text-blue-600 mt-1 group-hover:scale-110 transition-transform" />
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {page.name}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
