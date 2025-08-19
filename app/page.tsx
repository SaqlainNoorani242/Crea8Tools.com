import { Hero } from "@/components/hero"
import { ToolGrid } from "@/components/tool-grid"
import { AdSenseBlock } from "@/components/adsense-block"
import { StructuredData } from "@/components/structured-data"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="website" />
      <Hero />
      <AdSenseBlock />
      <ToolGrid />
    </div>
  )
}
