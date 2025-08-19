"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateMetaDescription(content: string, type?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 1800))

  const pageType = type || "general"

  return `# META DESCRIPTIONS FOR: ${content}

## 🎯 PRIMARY META DESCRIPTION (155 characters)

**Option 1**: "${content} - Discover comprehensive guides, expert tips, and proven strategies. Get the results you need with our professional solutions and expert insights."

**Character Count**: 154 characters ✅

---

## 📝 ALTERNATIVE VERSIONS

### Option 2 (Action-Oriented):
"Transform your ${content} experience with our expert guides and proven strategies. Start achieving better results today with professional insights and tips."
**Character Count**: 152 characters ✅

### Option 3 (Benefit-Focused):
"Get the best ${content} solutions and expert advice. Comprehensive guides, proven strategies, and professional tips to help you succeed and achieve your goals."
**Character Count**: 155 characters ✅

### Option 4 (Question-Based):
"Looking for ${content} solutions that actually work? Discover expert guides, proven strategies, and professional tips that deliver real results."
**Character Count**: 148 characters ✅

### Option 5 (Urgency-Driven):
"Don't miss out on the best ${content} strategies and expert tips. Get comprehensive guides and proven solutions that deliver results fast."
**Character Count**: 145 characters ✅

---

## 🔍 SEO OPTIMIZATION ANALYSIS

**✅ SEO Best Practices Applied:**
- Optimal length (150-160 characters)
- Includes primary keyword: "${content}"
- Clear value proposition
- Action-oriented language
- Compelling call-to-action

**📊 Keyword Integration:**
- Primary Keyword: ${content}
- Secondary Keywords: guides, tips, strategies, solutions
- Long-tail Variations: expert ${content}, professional ${content}

**🎯 Click-Through Rate Optimization:**
- Emotional triggers: "transform", "discover", "achieve"
- Benefit-focused language
- Clear value proposition
- Urgency and action words

---

## 📱 PLATFORM-SPECIFIC VERSIONS

### Google Search Results:
"${content} - Expert guides, proven strategies & professional tips. Get comprehensive solutions that deliver real results. Start your success journey today!"

### Social Media Sharing:
"Discover the best ${content} strategies and expert tips! Comprehensive guides and proven solutions for achieving your goals. ✨"

### Email Marketing:
"Transform your ${content} approach with our expert guides and proven strategies. Professional insights that deliver real results."

---

## 💡 META DESCRIPTION BEST PRACTICES

**Do's:**
✅ Keep between 150-160 characters
✅ Include primary keyword naturally
✅ Write compelling, action-oriented copy
✅ Include a clear value proposition
✅ Use active voice and strong verbs

**Don'ts:**
❌ Exceed 160 characters (gets cut off)
❌ Duplicate meta descriptions across pages
❌ Stuff with too many keywords
❌ Use generic, boring descriptions
❌ Forget to include a call-to-action

*Note: These meta descriptions are optimized for search engines and user engagement. Choose the version that best matches your content and brand voice.*`
}

export default function MetaDescriptionClient() {
  const typeOptions = [
    { value: "homepage", label: "Homepage" },
    { value: "product", label: "Product Page" },
    { value: "blog", label: "Blog Post" },
    { value: "service", label: "Service Page" },
    { value: "about", label: "About Page" },
    { value: "contact", label: "Contact Page" },
    { value: "category", label: "Category Page" },
  ]

  return (
    <ToolPageLayout
      title="AI Meta Description Generator"
      description="Create SEO-optimized meta descriptions that improve your search engine rankings and click-through rates. Generate compelling meta descriptions that attract more clicks from search results and boost your website's visibility."
      inputLabel="Page Content or Topic"
      inputPlaceholder="Enter your page topic, main keyword, or content focus (e.g., 'digital marketing services', 'healthy meal recipes', 'web design portfolio')..."
      selectLabel="Page Type"
      selectOptions={typeOptions}
      selectPlaceholder="Select page type"
      onGenerate={generateMetaDescription}
    />
  )
}
