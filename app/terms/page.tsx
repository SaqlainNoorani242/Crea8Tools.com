import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Terms of Service - Crea8Tools | Usage Terms and Conditions",
  description:
    "Read our terms of service to understand the rules and guidelines for using Crea8Tools AI writing platform and services.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                By accessing and using Crea8Tools, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use License</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Permission is granted to temporarily use Crea8Tools for personal and commercial purposes. This is the
                grant of a license, not a transfer of title, and under this license you may:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                <li>• Use our AI writing tools for content generation</li>
                <li>• Download and use generated content for your projects</li>
                <li>• Share generated content with proper attribution</li>
              </ul>
              <p className="text-muted-foreground text-sm">
                This license shall automatically terminate if you violate any of these restrictions and may be
                terminated by us at any time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• You are responsible for reviewing and editing AI-generated content before use</li>
                <li>• You must not use our services for illegal or harmful purposes</li>
                <li>• You must not attempt to reverse engineer or copy our AI models</li>
                <li>• You must not overload our servers with excessive requests</li>
                <li>• You must respect intellectual property rights of others</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>AI-Generated Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Our AI tools generate content based on your inputs. Please note:
              </p>
              <ul className="space-y-2 text-muted-foreground text-sm ml-4">
                <li>• AI-generated content may not always be accurate or appropriate</li>
                <li>• You are responsible for fact-checking and editing generated content</li>
                <li>• We do not guarantee the originality of generated content</li>
                <li>• Generated content should be reviewed for compliance with your local laws</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law,
                this Company excludes all representations, warranties, conditions and terms whether express or implied.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                In no event shall Crea8Tools or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Crea8Tools' website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Crea8Tools may revise these terms of service at any time without notice. By using this website, you are
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                If you have any questions about these Terms of Service, please contact us at legal@crea8tools.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
