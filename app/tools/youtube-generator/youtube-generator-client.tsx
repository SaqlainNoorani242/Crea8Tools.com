"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateYouTubeContent(topic: string, category?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2200))

  return `# YOUTUBE OPTIMIZATION FOR: ${topic}

## 🎬 COMPELLING VIDEO TITLES

### High-CTR Title Options:
1. "This ${topic} Method Changed Everything (You Won't Believe the Results!)"
2. "I Tried ${topic} for 30 Days - Here's What Happened"
3. "The ${topic} Secret That Nobody Talks About"
4. "Why Everyone Is Wrong About ${topic} (The Truth Revealed)"
5. "${topic} in 2024: What You NEED to Know"

### Educational Titles:
1. "Complete ${topic} Guide for Beginners (Step-by-Step)"
2. "Master ${topic} in 10 Minutes (Full Tutorial)"
3. "${topic} Explained: Everything You Need to Know"
4. "How to ${topic} Like a Pro (Expert Tips)"
5. "The Ultimate ${topic} Course (Free Training)"

### Trending/Viral Style:
1. "${topic} Goes WRONG (Epic Fail Compilation)"
2. "Reacting to ${topic} TikToks (You Won't Believe These!)"
3. "${topic} Challenge: 24 Hours Straight"
4. "Testing Viral ${topic} Hacks (Do They Actually Work?)"
5. "${topic} Tier List (Ranking Everything)"

---

## 📝 OPTIMIZED VIDEO DESCRIPTIONS

### MAIN DESCRIPTION:

Welcome back to the channel! In today's video, we're diving deep into ${topic} and I'm going to share everything you need to know to get started and see real results.

🎯 **What You'll Learn:**
• The fundamentals of ${topic} that everyone should know
• Step-by-step strategies that actually work
• Common mistakes to avoid (these could cost you!)
• Pro tips that will accelerate your progress
• Real examples and case studies

⏰ **TIMESTAMPS:**
00:00 - Introduction
01:30 - What is ${topic}?
03:45 - Getting Started Guide
07:20 - Advanced Strategies
12:15 - Common Mistakes
15:30 - Pro Tips & Tricks
18:45 - Final Thoughts & Next Steps

🔗 **HELPFUL RESOURCES:**
• Free ${topic} checklist: [Your Link]
• Recommended tools: [Your Link]
• Join our community: [Your Link]

📱 **CONNECT WITH ME:**
• Instagram: @yourusername
• Twitter: @yourusername
• Website: yourwebsite.com

---

### SHORT DESCRIPTION (For Mobile):

Everything you need to know about ${topic}! Complete guide with step-by-step strategies, pro tips, and real examples. Perfect for beginners and advanced users.

🎯 Free resources in description!
👍 Like if this helped you!
🔔 Subscribe for more ${topic} content!

---

## 🏷️ STRATEGIC TAGS & KEYWORDS

### Primary Tags:
${topic}, ${topic} tutorial, ${topic} guide, ${topic} tips, ${topic} 2024

### Long-Tail Tags:
how to ${topic}, ${topic} for beginners, best ${topic} strategies, ${topic} step by step, ${topic} explained

### Category-Specific Tags:
${category || "educational"} ${topic}, ${topic} course, ${topic} training, ${topic} secrets, ${topic} hacks

### Trending Tags:
${topic} viral, ${topic} trending, ${topic} challenge, ${topic} reaction, ${topic} review

---

## 📊 YOUTUBE SEO OPTIMIZATION

### Title Optimization:
✅ Include main keyword within first 60 characters
✅ Use emotional triggers and power words
✅ Keep under 60 characters for mobile display
✅ Include year (2024) for freshness
✅ Use brackets/parentheses for additional context

### Description Optimization:
✅ Include keyword in first 125 characters
✅ Add timestamps for better user experience
✅ Include relevant links and CTAs
✅ Use hashtags strategically (3-5 max)
✅ Add social media links

### Engagement Boosters:
✅ Ask questions to encourage comments
✅ Include clear call-to-actions
✅ Mention subscribing and notifications
✅ Tease upcoming content
✅ Encourage sharing and likes

---

## 🎨 THUMBNAIL IDEAS

**Text Overlay Suggestions:**
• "SHOCKING ${topic} RESULTS!"
• "${topic} CHANGED MY LIFE"
• "BEFORE vs AFTER"
• "YOU'RE DOING IT WRONG"
• "SECRET METHOD REVEALED"

**Visual Elements:**
• Bright, contrasting colors
• Your face with expressive emotion
• Before/after comparisons
• Arrow pointing to key element
• Bold, easy-to-read fonts

---

## 📈 CONTENT SERIES IDEAS

### ${topic} Series:
1. "${topic} Basics" (Week 1)
2. "Advanced ${topic}" (Week 2)  
3. "${topic} Case Studies" (Week 3)
4. "${topic} Q&A" (Week 4)
5. "${topic} Tools Review" (Week 5)

*Note: Customize this content based on your specific niche, audience, and brand voice. Always follow YouTube's community guidelines and best practices.*`
}

export default function YouTubeGeneratorClient() {
  const categoryOptions = [
    { value: "education", label: "Education" },
    { value: "entertainment", label: "Entertainment" },
    { value: "howto", label: "How-To & DIY" },
    { value: "technology", label: "Technology" },
    { value: "lifestyle", label: "Lifestyle" },
    { value: "business", label: "Business" },
    { value: "health", label: "Health & Fitness" },
    { value: "gaming", label: "Gaming" },
  ]

  return (
    <ToolPageLayout
      title="AI YouTube Title & Description Generator"
      description="Optimize your YouTube videos with compelling titles and descriptions that increase views and engagement. Generate SEO-friendly YouTube content that ranks higher in search, attracts more subscribers, and grows your channel faster."
      inputLabel="Video Topic or Content"
      inputPlaceholder="Enter your video topic or content idea (e.g., 'cooking tutorial', 'tech review', 'fitness workout', 'business tips')..."
      selectLabel="Video Category"
      selectOptions={categoryOptions}
      selectPlaceholder="Select video category"
      onGenerate={generateYouTubeContent}
    />
  )
}
