import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 sm:py-32 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950/20 animate-gradient-x">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float animation-delay-400"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 animate-fade-in-up shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Sparkles className="mr-2 h-4 w-4 animate-pulse" />
            Free AI-Powered Writing Tools
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white animate-fade-in-up animation-delay-200">
            Crea8Tools – Smart AI Writing Tools for{" "}
            <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Creators & Marketers
            </span>
          </h1>

          <p className="mb-10 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Boost your productivity with our comprehensive suite of AI-powered writing tools. Generate high-quality
            content, optimize for SEO, and streamline your creative workflow – all completely free. Perfect for
            creators, students, marketers, and business owners looking to save time and enhance their content quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Link href="#tools">
                Start Creating with AI – It's Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/20 transform hover:scale-105 transition-all duration-300"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 animate-fade-in-up animation-delay-600">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-blue-600 group-hover:animate-pulse">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">AI Writing Tools</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-emerald-600 group-hover:animate-pulse">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Free to Use</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-3xl font-bold text-amber-600 group-hover:animate-pulse">Instant</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Results</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
