"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateScript(topic: string, platform?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  const platformStyle =
    platform === "tiktok"
      ? "trendy and energetic"
      : platform === "instagram"
        ? "visually appealing and engaging"
        : "attention-grabbing and concise"

  return `# ${platform?.toUpperCase() || "SHORT-FORM"} VIDEO SCRIPT: ${topic}

## HOOK (0-3 seconds)
🎬 **OPENING LINE:**
"Wait... did you know this about ${topic}? This will blow your mind!"

**VISUAL:** Close-up shot, direct eye contact with camera
**ACTION:** Lean in slightly, raise eyebrows for emphasis

## MAIN CONTENT (3-25 seconds)

**POINT 1 (3-10 seconds):**
"First, here's what most people get wrong about ${topic}..."
- **VISUAL:** Quick transition, show common mistake
- **TEXT OVERLAY:** "MISTAKE #1"

**POINT 2 (10-18 seconds):**
"But here's the game-changer that nobody talks about..."
- **VISUAL:** Dramatic reveal or demonstration
- **TEXT OVERLAY:** "GAME CHANGER ✨"

**POINT 3 (18-25 seconds):**
"And this final tip will save you hours of frustration..."
- **VISUAL:** Show the solution in action
- **TEXT OVERLAY:** "PRO TIP 💡"

## CALL TO ACTION (25-30 seconds)
"If this helped you, smash that follow button for more ${topic} tips!"

**VISUAL:** Point to follow button, enthusiastic expression
**TEXT OVERLAY:** "FOLLOW FOR MORE!"

---

## ADDITIONAL SCRIPT VARIATIONS:

### SCRIPT 2: Question Format
**HOOK:** "Are you making these ${topic} mistakes?"
**BODY:** List 3 common mistakes with quick solutions
**CTA:** "Which mistake were you making? Comment below!"

### SCRIPT 3: Before/After
**HOOK:** "This ${topic} transformation is insane!"
**BODY:** Show dramatic before/after comparison
**CTA:** "Want to see more transformations? Follow now!"

## PRODUCTION NOTES:
- Keep energy HIGH throughout
- Use quick cuts every 2-3 seconds
- Add trending music/sounds
- Include captions for accessibility
- Film in vertical format (9:16)

*Note: Customize this script based on your specific content and brand voice.*`
}

export default function ScriptGeneratorClient() {
  const platformOptions = [
    { value: "tiktok", label: "TikTok" },
    { value: "instagram", label: "Instagram Reels" },
    { value: "youtube", label: "YouTube Shorts" },
    { value: "general", label: "General Short-Form" },
  ]

  return (
    <ToolPageLayout
      title="AI Script Generator for Shorts/Reels"
      description="Create engaging scripts for short-form video content on TikTok, Instagram Reels, and YouTube Shorts. Generate viral-worthy scripts that capture attention, drive engagement, and grow your audience with compelling storytelling."
      inputLabel="Video Topic or Concept"
      inputPlaceholder="Enter your video topic or concept (e.g., 'productivity tips', 'cooking hacks', 'fitness motivation', 'business advice')..."
      selectLabel="Platform"
      selectOptions={platformOptions}
      selectPlaceholder="Select target platform"
      onGenerate={generateScript}
    />
  )
}
