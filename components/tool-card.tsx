import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface Tool {
  id: string
  title: string
  description: string
  icon: LucideIcon
  href: string
  color: string
  bgColor: string
}

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon

  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 overflow-hidden relative">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>

      <CardHeader className="pb-4 relative z-10">
        <div
          className={`w-12 h-12 rounded-lg ${tool.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
        >
          <Icon className={`h-6 w-6 ${tool.color} group-hover:animate-pulse`} />
        </div>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
          {tool.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0 relative z-10">
        <CardDescription className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
          {tool.description}
        </CardDescription>
        <Button
          asChild
          className="w-full bg-blue-600 hover:bg-blue-700 group-hover:bg-blue-700 transform group-hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <Link href={tool.href}>
            Open Tool
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
