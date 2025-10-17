import { Button } from "@/components/ui/button"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - Pallyflo Agro-Commodities Portfolio",
  description: "Comprehensive agro-commodities product portfolio including pulses, legumes, oil seeds, and cereals. Premium quality products from Canada and worldwide.",
  keywords: "agro-commodities products, pulses, grains, oil seeds, lentils, beans, peas, cereals, Canadian products",
  openGraph: {
    title: "Products - Pallyflo Agro-Commodities Portfolio",
    description: "Comprehensive agro-commodities product portfolio including pulses, legumes, oil seeds, and cereals.",
    type: "website",
  },
}

export default function Products() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Agro-Commodities Products",
    "description": "Comprehensive range of premium agro-commodities including pulses, grains, and oil seeds",
    "brand": {
      "@type": "Brand",
      "name": "Pallyflo"
    },
    "category": "Agricultural Products",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  }

  const productCategories = [
    {
      title: "Pulses & Legumes",
      items: ["Lentils", "Peas", "Beans"]
    },
    {
      title: "Oil Seeds & Grains", 
      items: ["Soybeans", "Canola Seeds", "Mustard Seeds", "Linseeds/Flax Seeds"]
    },
    {
      title: "Cereals & Specialty Crops",
      items: ["Barley", "Durum Wheat", "Oats", "Canary Seeds"]
    }
  ]

  const lentilVarieties = [
    {
      name: "Whole Red Lentil",
      description: "Crimson lentils (Lens Esculenta) Red Lentils Whole, the lentil's skin is taken off, but the inside of the seed is left whole (not split). The end result is a beautiful, polished, intact, orange-red product.",
      benefits: "High protein content, cooks faster than other lentils"
    },
    {
      name: "Red Split Lentil", 
      description: "The whole red lentil is cut in half to make split red lentils. After the skin is taken off, the reddish-orange seed that is left is cut in half.",
      benefits: "Cooks quickly, perfect for soups and purees"
    },
    {
      name: "Eston Lentils",
      description: "A small (4.5–5.5 mm), green lentil with a yellow cotyledon. Because of its low starch and colour content, it is frequently used to make clear soups and as a tasty addition to salads.",
      benefits: "Neutral flavor, low starch content"
    },
    {
      name: "Richlea Lentils",
      description: "Green-skinned, medium-sized (5.5–6.0 mm), yellow cotyledon lentil. Its mild taste makes it perfect for soups.",
      benefits: "Mild taste, perfect for soups"
    },
    {
      name: "Laird Green Lentils",
      description: "Green-skinned and yellow cotyledon large (6.0–7.0 mm) lentils. Its flavour and texture are more robust than those of smaller types, though these qualities vary greatly depending on the location of origin.",
      benefits: "Robust flavor and texture, large size"
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-hero text-brand-primary mb-6">
                PRODUCTS
              </h1>
              <p className="text-body-large text-brand-gray max-w-3xl mx-auto">
                Comprehensive agro-commodities product portfolio including pulses, legumes, oil seeds, and cereals
              </p>
            </div>
          </div>
        </section>

        {/* Agro Commodities Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                AGRO COMMODITIES
              </h2>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto mb-6">
                As a major player in the international trading industry, we specialize in the purchase, sale, and delivery of raw and processed goods from all over the world. Through domestic and international sourcing, trading, processing, and distribution, we serve as a bridge between the producers and consumers of the below mentioned products.
              </p>
              <p className="text-body text-brand-gray">
                Here are just a few of our exports now enjoying success on global markets:
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {productCategories.map((category, index) => (
                <div key={index} className="text-center p-6 border border-brand-light-gray rounded-lg">
                  <h3 className="text-subsection-title text-brand-primary mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-body text-brand-gray">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lentils Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                LENTILS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lentilVarieties.map((lentil, index) => (
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6">
                  <h3 className="text-subsection-title text-brand-primary mb-3">{lentil.name}</h3>
                  <p className="text-body text-brand-gray mb-4">{lentil.description}</p>
                  <p className="text-body-small text-brand-secondary font-medium">
                    Benefits: {lentil.benefits}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Quality Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                Product Quality & Standards
              </h2>
              <p className="text-body-large text-brand-gray max-w-4xl mx-auto">
                We maintain the highest standards of quality and sustainability across all our products.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-subsection-title text-brand-primary mb-3">Premium Quality</h3>
                <p className="text-body text-brand-gray">
                  High-quality products from Canada and worldwide farms
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-subsection-title text-brand-primary mb-3">Non-GMO Options</h3>
                <p className="text-body text-brand-gray">
                  Identity-preserved, food-grade products available
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-subsection-title text-brand-primary mb-3">Sustainability</h3>
                <p className="text-body text-brand-gray">
                  Sustainably grown products meeting international standards
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-subsection-title text-brand-primary mb-3">Export Ready</h3>
                <p className="text-body text-brand-gray">
                  Meeting international export requirements and certifications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-section-title mb-4">Interested in Our Products?</h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Contact us to learn more about our comprehensive agro-commodities portfolio and quality standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Contact Sales
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-primary">
                Download Catalog
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
