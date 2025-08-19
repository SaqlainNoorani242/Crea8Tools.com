import Script from "next/script"

interface StructuredDataProps {
  type?: "website" | "tool"
  toolName?: string
  toolDescription?: string
}

export function StructuredData({ type = "website", toolName, toolDescription }: StructuredDataProps) {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Crea8Tools",
    description:
      "Free AI-powered writing tools for creators, students, marketers, and business owners. Generate content, optimize SEO, and boost productivity with our smart toolkit.",
    url: "https://crea8tools.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://crea8tools.com/tools?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Crea8Tools",
      url: "https://crea8tools.com",
    },
  }

  const toolData =
    toolName && toolDescription
      ? {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: toolName,
          description: toolDescription,
          url: `https://crea8tools.com/tools/${toolName.toLowerCase().replace(/\s+/g, "-")}`,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web Browser",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: {
            "@type": "Organization",
            name: "Crea8Tools",
          },
        }
      : null

  const structuredData = type === "tool" && toolData ? toolData : websiteData

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}
