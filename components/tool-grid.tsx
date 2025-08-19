import { ToolCard } from "@/components/tool-card"
import {
  HelpCircle,
  Quote,
  Video,
  ImageIcon,
  Lightbulb,
  RefreshCw,
  Package,
  Search,
  PenTool,
  Youtube,
} from "lucide-react"

const tools = [
  {
    id: "faq-generator",
    title: "FAQ Generator",
    description:
      "Create comprehensive FAQ sections for your website or product with AI-generated questions and answers.",
    icon: HelpCircle,
    href: "/tools/faq-generator",
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    id: "quote-generator",
    title: "Quote Generator",
    description: "Generate inspiring quotes and motivational content for social media, presentations, and marketing.",
    icon: Quote,
    href: "/tools/quote-generator",
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    id: "script-generator",
    title: "Script Generator for Shorts/Reels",
    description: "Create engaging scripts for short-form video content on TikTok, Instagram Reels, and YouTube Shorts.",
    icon: Video,
    href: "/tools/script-generator",
    color: "text-pink-600",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
  },
  {
    id: "pinterest-generator",
    title: "Pinterest Pin Title & Description",
    description: "Optimize your Pinterest pins with SEO-friendly titles and descriptions that drive engagement.",
    icon: ImageIcon,
    href: "/tools/pinterest-generator",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
  {
    id: "tagline-generator",
    title: "Tagline / Slogan Generator",
    description: "Create memorable taglines and slogans for your brand, product, or marketing campaigns.",
    icon: Lightbulb,
    href: "/tools/tagline-generator",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
  },
  {
    id: "paraphrasing-tool",
    title: "Paraphrasing Tool (AI Rewriter)",
    description: "Rewrite and improve your content while maintaining the original meaning and context.",
    icon: RefreshCw,
    href: "/tools/paraphrasing-tool",
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    id: "product-description",
    title: "Product Description Generator",
    description: "Generate compelling product descriptions that convert visitors into customers for e-commerce.",
    icon: Package,
    href: "/tools/product-description",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    id: "meta-description",
    title: "Meta Description Generator",
    description:
      "Create SEO-optimized meta descriptions that improve your search engine rankings and click-through rates.",
    icon: Search,
    href: "/tools/meta-description",
    color: "text-teal-600",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
  },
  {
    id: "blog-title",
    title: "Blog Title & Idea Generator",
    description: "Generate catchy blog titles and content ideas that attract readers and boost your SEO performance.",
    icon: PenTool,
    href: "/tools/blog-title",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
  {
    id: "youtube-generator",
    title: "YouTube Title & Description",
    description:
      "Optimize your YouTube videos with compelling titles and descriptions that increase views and engagement.",
    icon: Youtube,
    href: "/tools/youtube-generator",
    color: "text-red-600",
    bgColor: "bg-red-50 dark:bg-red-900/20",
  },
]

export function ToolGrid() {
  return (
    <section id="tools" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-gray-100/50 dark:bg-grid-gray-800/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl mb-4">
            Choose Your AI Writing Tool
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select from our collection of powerful AI tools designed to streamline your content creation process and
            boost productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <div key={tool.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
