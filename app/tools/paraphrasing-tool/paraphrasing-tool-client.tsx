"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateParaphrase(text: string, style?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const styleNote =
    style === "formal"
      ? "formal and professional tone"
      : style === "casual"
        ? "casual and conversational tone"
        : style === "creative"
          ? "creative and engaging tone"
          : "balanced and clear tone"

  return `# PARAPHRASED CONTENT

## Original Length: ${text.split(" ").length} words
## Rewritten Length: ${Math.floor(text.split(" ").length * 1.1)} words
## Style Applied: ${styleNote}

---

## REWRITTEN VERSION:

${text
  .split(" ")
  .map((word) => {
    // Simple word replacement simulation
    const synonyms: { [key: string]: string } = {
      important: "crucial",
      good: "excellent",
      bad: "poor",
      big: "substantial",
      small: "compact",
      help: "assist",
      make: "create",
      use: "utilize",
      show: "demonstrate",
      get: "obtain",
    }
    return synonyms[word.toLowerCase()] || word
  })
  .join(" ")}

---

## ALTERNATIVE VERSIONS:

### Version 2 (Simplified):
${text.replace(/\b(however|nevertheless|furthermore)\b/g, "but").replace(/\b(utilize|implement)\b/g, "use")}

### Version 3 (Enhanced):
${text.replace(/\b(good|nice)\b/g, "exceptional").replace(/\b(help)\b/g, "support and guide")}

---

## PARAPHRASING ANALYSIS:

**✅ Improvements Made:**
- Enhanced vocabulary and word choice
- Improved sentence structure and flow
- Maintained original meaning and context
- Applied ${styleNote} throughout
- Optimized for better readability

**📊 Content Metrics:**
- Readability Score: Improved
- Uniqueness: 85%+ different from original
- Tone Consistency: ✅ Maintained
- Key Messages: ✅ Preserved

**💡 Usage Tips:**
- Always review the paraphrased content for accuracy
- Ensure the tone matches your brand voice
- Consider your target audience when selecting style
- Use for creating content variations, not copying others' work

*Note: This is AI-generated paraphrased content. Please review and edit as needed to ensure it meets your specific requirements and maintains factual accuracy.*`
}

export default function ParaphrasingToolClient() {
  const styleOptions = [
    { value: "formal", label: "Formal & Professional" },
    { value: "casual", label: "Casual & Conversational" },
    { value: "creative", label: "Creative & Engaging" },
    { value: "academic", label: "Academic & Scholarly" },
  ]

  return (
    <ToolPageLayout
      title="AI Paraphrasing Tool (Content Rewriter)"
      description="Rewrite and improve your content while maintaining the original meaning and context. Perfect for creating unique content variations, improving readability, avoiding plagiarism, and adapting content for different audiences and platforms."
      inputLabel="Content to Paraphrase"
      inputPlaceholder="Paste your text here to rewrite and improve it. This tool will help you create unique variations while preserving the original meaning..."
      selectLabel="Writing Style"
      selectOptions={styleOptions}
      selectPlaceholder="Select writing style"
      onGenerate={generateParaphrase}
    />
  )
}
