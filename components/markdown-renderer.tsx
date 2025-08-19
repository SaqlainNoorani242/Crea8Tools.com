"use client"

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Convert markdown to HTML
  const renderMarkdown = (text: string) => {
    return (
      text
        // Convert headers
        .replace(/^# (.*$)/gm, '<h1 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">$1</h1>')
        .replace(/^## (.*$)/gm, '<h2 class="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">$1</h2>')
        .replace(/^### (.*$)/gm, '<h3 class="text-lg font-medium mb-2 text-gray-700 dark:text-gray-200">$1</h3>')
        // Convert bold text
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>')
        // Convert italic text
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        // Convert bullet points
        .replace(/^- (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
        // Convert numbered lists
        .replace(/^\d+\. (.*$)/gm, '<li class="ml-4 mb-1">$1</li>')
        // Convert line breaks
        .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 dark:text-gray-300">')
        // Wrap in paragraphs
        .replace(/^(?!<[h|l])/gm, '<p class="mb-4 text-gray-700 dark:text-gray-300">')
        .replace(/(?<!>)$/gm, "</p>")
        // Clean up empty paragraphs
        .replace(/<p class="mb-4 text-gray-700 dark:text-gray-300"><\/p>/g, "")
        // Wrap lists in ul tags
        .replace(/(<li class="ml-4 mb-1">.*<\/li>)/gs, '<ul class="list-disc list-inside mb-4 space-y-1">$1</ul>')
    )
  }

  return (
    <div
      className="prose prose-gray dark:prose-invert max-w-none"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  )
}
