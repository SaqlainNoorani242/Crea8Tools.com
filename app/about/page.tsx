import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us - Crea8Tools | AI Writing Tools for Creators",
  description:
    "Learn about Crea8Tools mission to empower creators, marketers, and business owners with free AI-powered writing tools. Discover our story and commitment to innovation.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Crea8Tools</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering creators with intelligent AI writing tools
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Crea8Tools, we believe that everyone deserves access to powerful writing tools that can help them
                create compelling content. Our mission is to democratize AI-powered writing assistance, making it
                accessible to creators, marketers, students, and business owners worldwide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're passionate about helping you overcome writer's block, optimize your content for search engines,
                and create engaging material that resonates with your audience. Our suite of AI writing tools is
                designed to be intuitive, efficient, and completely free to use.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">What We Offer</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Content Generation</h3>
                  <p className="text-muted-foreground text-sm">
                    From FAQ sections to product descriptions, our AI tools help you create professional content in
                    seconds.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">SEO Optimization</h3>
                  <p className="text-muted-foreground text-sm">
                    Generate meta descriptions, blog titles, and SEO-friendly content that ranks higher in search
                    results.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Social Media Tools</h3>
                  <p className="text-muted-foreground text-sm">
                    Create engaging Pinterest pins, YouTube descriptions, and social media scripts that capture
                    attention.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">Writing Enhancement</h3>
                  <p className="text-muted-foreground text-sm">
                    Paraphrase content, generate quotes, and create compelling taglines that make your brand memorable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">Our Commitment</h2>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to providing high-quality, reliable AI writing tools that respect your privacy and help
                you achieve your creative goals. Our platform is built with user experience in mind, ensuring that you
                can focus on what matters most – creating amazing content.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
