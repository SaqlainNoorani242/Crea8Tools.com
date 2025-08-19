"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Copy, Download, Loader2 } from "lucide-react"
import { AdSenseBlock } from "@/components/adsense-block"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useToast } from "@/hooks/use-toast"
import { MarkdownRenderer } from "@/components/markdown-renderer"

interface ToolOption {
  value: string
  label: string
}

interface ToolPageLayoutProps {
  title: string
  description: string
  inputLabel: string
  inputPlaceholder: string
  selectLabel?: string
  selectOptions?: ToolOption[]
  selectPlaceholder?: string
  onGenerate: (input: string, selectedOption?: string) => Promise<string>
  children?: React.ReactNode
}

export function ToolPageLayout({
  title,
  description,
  inputLabel,
  inputPlaceholder,
  selectLabel,
  selectOptions,
  selectPlaceholder,
  onGenerate,
  children,
}: ToolPageLayoutProps) {
  const [input, setInput] = useState("")
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [output, setOutput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const characterCount = input.length
  const maxCharacters = 2000

  const handleGenerate = async () => {
    if (!input.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some text to generate content.",
        variant: "destructive",
      })
      return
    }

    if (characterCount > maxCharacters) {
      toast({
        title: "Input Too Long",
        description: `Please keep your input under ${maxCharacters} characters.`,
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const result = await onGenerate(input, selectedOption)
      setOutput(result)
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCopy = async () => {
    if (!output) return
    try {
      await navigator.clipboard.writeText(output)
      toast({
        title: "Copied!",
        description: "Content copied to clipboard.",
      })
    } catch (error) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy to clipboard.",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    if (!output) return
    const blob = new Blob([output], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${title.toLowerCase().replace(/\s+/g, "-")}-output.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    toast({
      title: "Downloaded!",
      description: "File saved to your downloads folder.",
    })
  }

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Breadcrumbs />

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{description}</p>
        </div>

        {/* Input Section */}
        <Card className="mb-6 sm:mb-8">
          <CardHeader className="pb-4 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Input</CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Enter your content below to generate AI-powered results.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="input" className="text-sm sm:text-base">
                  {inputLabel}
                </Label>
                <span
                  className={`text-xs sm:text-sm ${characterCount > maxCharacters ? "text-destructive" : "text-muted-foreground"}`}
                >
                  {characterCount}/{maxCharacters}
                </span>
              </div>
              <Textarea
                id="input"
                placeholder={inputPlaceholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[120px] sm:min-h-[140px] resize-none text-sm sm:text-base"
                maxLength={maxCharacters}
              />
            </div>

            {selectOptions && (
              <div className="space-y-2">
                <Label htmlFor="select" className="text-sm sm:text-base">
                  {selectLabel}
                </Label>
                <Select value={selectedOption} onValueChange={setSelectedOption}>
                  <SelectTrigger className="text-sm sm:text-base">
                    <SelectValue placeholder={selectPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {selectOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="text-sm sm:text-base">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {children}

            <Button
              onClick={handleGenerate}
              disabled={isLoading || characterCount > maxCharacters}
              className="w-full bg-blue-600 hover:bg-blue-700 h-12 sm:h-11 text-base sm:text-sm font-medium"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                "Generate Content"
              )}
            </Button>
          </CardContent>
        </Card>

        {/* AdSense Block */}
        <AdSenseBlock />

        {/* Output Section */}
        {output && (
          <Card className="mt-6 sm:mt-8">
            <CardHeader className="pb-4 sm:pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-lg sm:text-xl">Generated Content</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    Your AI-generated content is ready to use.
                  </CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:space-x-2 sm:gap-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopy}
                    className="h-10 sm:h-9 text-sm bg-transparent"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="h-10 sm:h-9 text-sm bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-4 sm:p-6">
                <MarkdownRenderer content={output} />
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
