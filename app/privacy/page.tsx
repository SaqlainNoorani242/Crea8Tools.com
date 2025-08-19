import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Privacy Policy - Crea8Tools | Your Data Protection Rights",
  description:
    "Learn how Crea8Tools protects your privacy and handles your data. Our comprehensive privacy policy explains our data collection, usage, and protection practices.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-2">Last updated: January 2025</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Usage Data</h3>
                <p className="text-muted-foreground text-sm">
                  We collect information about how you use our website, including pages visited, time spent, and
                  features used. This helps us improve our services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Input Content</h3>
                <p className="text-muted-foreground text-sm">
                  We temporarily process the text you input into our AI tools to generate results. This content is not
                  stored permanently on our servers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cookies and Tracking</h3>
                <p className="text-muted-foreground text-sm">
                  We use cookies to enhance your browsing experience and for analytics purposes. You can control cookie
                  settings in your browser.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• To provide and improve our AI writing tools</li>
                <li>• To analyze usage patterns and optimize performance</li>
                <li>• To respond to your inquiries and provide support</li>
                <li>• To comply with legal obligations</li>
                <li>• To display relevant advertisements through Google AdSense</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Google AdSense</h3>
                <p className="text-muted-foreground text-sm">
                  We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your
                  visits to our site and other sites on the Internet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Analytics</h3>
                <p className="text-muted-foreground text-sm">
                  We use analytics services to understand how our website is used. These services may collect
                  information about your device and browsing behavior.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We implement appropriate security measures to protect your information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100%
                secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Right to access your personal information</li>
                <li>• Right to correct inaccurate information</li>
                <li>• Right to delete your information</li>
                <li>• Right to restrict processing</li>
                <li>• Right to data portability</li>
                <li>• Right to object to processing</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                If you have any questions about this Privacy Policy, please contact us at privacy@crea8tools.com
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
