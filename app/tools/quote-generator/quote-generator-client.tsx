"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateQuote(topic: string, style?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const quotes = [
    `"Success in ${topic} comes not from avoiding challenges, but from embracing them as opportunities to grow and innovate."`,
    `"The journey of ${topic} begins with a single step, but it's the persistence to keep walking that leads to extraordinary destinations."`,
    `"In the world of ${topic}, those who dare to dream differently are the ones who change everything."`,
    `"Excellence in ${topic} is not a destination, but a continuous journey of improvement and dedication."`,
    `"The most powerful tool in ${topic} is not technology or strategy, but the unwavering belief in your vision."`,
  ]

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  return `${randomQuote}

---

Additional Inspirational Quotes:

"Every expert in ${topic} was once a beginner who refused to give up."

"The difference between ordinary and extraordinary in ${topic} is that little 'extra' effort you put in every day."

"Innovation in ${topic} happens when you combine passion with purpose and persistence."

"Your potential in ${topic} is limitless when you believe in yourself and take consistent action."

"The best time to start your ${topic} journey was yesterday. The second best time is now."

*Note: These quotes are AI-generated for inspiration. Feel free to modify and personalize them for your specific use case.*`
}

export default function QuoteGeneratorClient() {
  const styleOptions = [
    { value: "motivational", label: "Motivational" },
    { value: "inspirational", label: "Inspirational" },
    { value: "business", label: "Business" },
    { value: "life", label: "Life Wisdom" },
  ]

  return (
    <ToolPageLayout
      title="AI Quote Generator"
      description="Generate inspiring quotes and motivational content for social media, presentations, and marketing campaigns. Create engaging quotes that resonate with your audience and boost engagement across all platforms."
      inputLabel="Topic or Theme"
      inputPlaceholder="Enter a topic or theme for your quotes (e.g., 'entrepreneurship', 'success', 'creativity', 'leadership')..."
      selectLabel="Quote Style"
      selectOptions={styleOptions}
      selectPlaceholder="Select quote style"
      onGenerate={generateQuote}
    />
  )
}
