"use client"

import { ToolPageLayout } from "@/components/tool-page-layout"

async function generateProductDescription(product: string, category?: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 2200))

  return `# PRODUCT DESCRIPTION: ${product}

## 🛍️ MAIN PRODUCT DESCRIPTION

**Transform your experience with the ${product}** – the perfect blend of innovation, quality, and style designed for the modern consumer.

Crafted with precision and attention to detail, this ${product} delivers exceptional performance that exceeds expectations. Whether you're looking to enhance your daily routine or seeking a reliable solution for your specific needs, this product stands out as the ideal choice.

**Key Features:**
• Premium quality materials and construction
• User-friendly design with intuitive functionality  
• Versatile application suitable for various uses
• Durable build designed to last for years
• Stylish aesthetic that complements any setting

**Why Choose This ${product}?**
Our ${product} isn't just another item – it's a carefully engineered solution that addresses real needs. With its superior performance, elegant design, and unmatched reliability, you're not just buying a product; you're investing in quality and peace of mind.

---

## 🎯 SHORT DESCRIPTION (For Listings)

**${product}** – Premium quality meets exceptional value. Experience the difference with our top-rated ${product} that combines innovative design with reliable performance. Perfect for everyday use and built to last.

---

## 📝 BULLET POINT FEATURES

• **Superior Quality**: Made with premium materials for lasting durability
• **Smart Design**: Thoughtfully crafted for optimal user experience  
• **Versatile Use**: Perfect for multiple applications and settings
• **Easy Maintenance**: Simple care instructions for long-lasting performance
• **Satisfaction Guaranteed**: Backed by our quality assurance promise

---

## 🏷️ PRODUCT SPECIFICATIONS

**Category**: ${category || "Premium Products"}
**Material**: High-grade, durable construction
**Dimensions**: Optimally sized for practical use
**Weight**: Lightweight yet sturdy design
**Care Instructions**: Easy maintenance required
**Warranty**: Quality guarantee included

---

## 💬 CUSTOMER APPEAL COPY

**"Finally, a ${product} that actually delivers on its promises!"**

Join thousands of satisfied customers who have discovered the difference quality makes. This ${product} has earned rave reviews for its exceptional performance, stylish design, and unbeatable value.

**Perfect for:**
- Daily use and regular applications
- Gift-giving for special occasions  
- Professional and personal settings
- Anyone who values quality and reliability

---

## 🔍 SEO-OPTIMIZED TAGS

**Primary Keywords**: ${product}, premium ${product}, best ${product}, quality ${product}
**Long-tail Keywords**: affordable ${product}, durable ${product}, ${product} for sale
**Category Tags**: ${category || "premium products"}, quality goods, reliable products

*Note: Customize this description with specific product details, actual features, and your brand voice for best results.*`
}

export default function ProductDescriptionClient() {
  const categoryOptions = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing & Fashion" },
    { value: "home", label: "Home & Garden" },
    { value: "beauty", label: "Beauty & Personal Care" },
    { value: "sports", label: "Sports & Outdoors" },
    { value: "books", label: "Books & Media" },
    { value: "toys", label: "Toys & Games" },
    { value: "automotive", label: "Automotive" },
  ]

  return (
    <ToolPageLayout
      title="AI Product Description Generator"
      description="Generate compelling product descriptions that convert visitors into customers for e-commerce stores. Create professional, SEO-optimized product copy that highlights benefits, features, and drives sales across all platforms and marketplaces."
      inputLabel="Product Name or Details"
      inputPlaceholder="Enter your product name or key details (e.g., 'Wireless Bluetooth Headphones', 'Organic Cotton T-Shirt', 'Smart Home Security Camera')..."
      selectLabel="Product Category"
      selectOptions={categoryOptions}
      selectPlaceholder="Select product category"
      onGenerate={generateProductDescription}
    />
  )
}
