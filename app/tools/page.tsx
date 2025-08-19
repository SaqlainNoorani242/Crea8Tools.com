import { ToolGrid } from "@/components/tool-grid"

export const metadata = {
  title: "AI Writing Tools | Crea8Tools - Free Content Generation Suite",
  description:
    "Access our complete collection of free AI writing tools. Generate content, optimize SEO, and boost productivity with our smart toolkit for creators and marketers.",
}

export default function ToolsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl mb-6">AI Writing Tools</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of AI-powered writing tools designed to help creators, students, marketers,
            and business owners generate high-quality content instantly.
          </p>
        </div>
        <ToolGrid />
      </div>
    </div>
  )
}
