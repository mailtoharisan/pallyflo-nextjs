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
      benefits: "High protein content, cooks faster than other lentils",
      image: "/assets/products/lentils/Whole Red Lentil.jpg"
    },
    {
      name: "Red Split Lentil", 
      description: "The whole red lentil is cut in half to make split red lentils. After the skin is taken off, the reddish-orange seed that is left is cut in half.",
      benefits: "Cooks quickly, perfect for soups and purees",
      image: "/assets/products/lentils/Red Split Lentil.jpg"
    },
    {
      name: "Eston Lentils",
      description: "A small (4.5–5.5 mm), green lentil with a yellow cotyledon. Because of its low starch and colour content, it is frequently used to make clear soups and as a tasty addition to salads.",
      benefits: "Neutral flavor, low starch content",
      image: "/assets/products/lentils/Eston Lentils.jpg"
    },
    {
      name: "Richlea Lentils",
      description: "Green-skinned, medium-sized (5.5–6.0 mm), yellow cotyledon lentil. Its mild taste makes it perfect for soups.",
      benefits: "Mild taste, perfect for soups",
      image: "/assets/products/lentils/Richlea.jpg"
    },
    {
      name: "Laird Green Lentils",
      description: "Green-skinned and yellow cotyledon large (6.0–7.0 mm) lentils. Its flavour and texture are more robust than those of smaller types, though these qualities vary greatly depending on the location of origin.",
      benefits: "Robust flavor and texture, large size",
      image: "/assets/products/lentils/Laird Green Lentil.jpg"
    }
  ]

  const beanVarieties = [
    {
      name: "Dark Red Kidney Beans",
      description: "Many different kinds exist, most of which are kidney-shaped and deep glossy red (dark red kidneys) or deep glossy pink (light red kidneys). They taste and feel smoother.",
      usage: "Typically eaten with rice",
      image: "/assets/products/beans/Dark Red Kidney Beans.jpg"
    },
    {
      name: "Light Red Kidney Beans",
      description: "Medium-sized elongated red kidney beans. This bean is popular because of its flavor and is often used in most kitchens and baked beans.",
      usage: "Popular in kitchens and baked beans",
      image: "/assets/products/beans/Light Red KidneyBeans.jpg"
    },
    {
      name: "White Kidney Beans",
      description: "It is a type of haricot bean that was first grown in Argentina but has become a mainstay in Italian cooking and is used around the world. This variety has a very smooth texture with an elusive nutty flavor.",
      usage: "Italian cooking, worldwide use",
      image: "/assets/products/beans/White Kidney Beans.jpg"
    },
    {
      name: "Small Red Beans",
      description: "Small to medium-sized round beans that are plump and dark red. They taste and feel smoother than dark red kidney beans, which are often served with rice.",
      usage: "Often served with rice",
      image: "/assets/products/beans/Small Red Beans.jpg"
    },
    {
      name: "White Navy Beans",
      description: "Navy beans are small, white beans about the size of peas. They have a mild flavor and are thick and smooth.",
      benefits: "Mild flavor, thick and smooth texture",
      image: "/assets/products/beans/White Navy Beans.jpg"
    },
    {
      name: "Black Beans",
      description: "Oval shape, medium size, and dark black finish. Black beans have a mild, sweet flavor that's reminiscent of mushrooms, and a velvety texture.",
      benefits: "Mild, sweet flavor, velvety texture",
      image: "/assets/products/beans/Black Beans.jpg"
    },
    {
      name: "Cranberry Beans",
      description: "Tongues of Fire Beans are related to these beans and are popular in Spanish, Italian, and Portuguese dishes. They are white with red spots, or sometimes red with spots of white.",
      usage: "Spanish, Italian, and Portuguese dishes",
      image: "/assets/products/beans/Cranberry Beans.jpg"
    },
    {
      name: "Great Northern Beans",
      description: "Slightly larger than navy beans, white, and slightly oval in shape. They are used in casseroles, soup, and baked beans.",
      usage: "Casseroles, soup, and baked beans",
      image: "/assets/products/beans/Great Northern Beans.jpg"
    }
  ]

  const peaVarieties = [
    {
      name: "Green Peas",
      description: "About 6-7mm in diameter and typically a light green colour. They possess a flavor that is moderate and slightly sweet.",
      usage: "Coated and consumed as snacks, various other purposes",
      image: "/assets/products/peas/Green Peas.jpg"
    },
    {
      name: "Split Green Peas",
      description: "Whole green peas that have had their husks removed and have been split in half. The result is a dark green cotyledon that is between 4 and 5 mm long, a bit softer, and easier to cook.",
      usage: "Soups and casseroles, sometimes instead of lentils",
      image: "/assets/products/peas/Green Split Peas.jpg"
    },
    {
      name: "Whole Yellow Peas",
      description: "About 6-7 mm and pale yellow. Mild, sweet taste. They taste different from green peas and are used in soups and stews.",
      usage: "Soups and stews",
      image: "/assets/products/peas/Yellow White Peas.jpg"
    },
    {
      name: "Yellow Split Peas",
      description: "Whole yellow peas that have had their husks removed and have been processed to be split in half. The result is a 4.0 to 5.0 mm dark yellow cotyledon that is a bit softer and easier to cook.",
      benefits: "Softer and easier to cook",
      image: "/assets/products/peas/Yellow Split Peas.jpg"
    },
    {
      name: "Marrowfat Peas",
      description: "Unlike the typical garden pea, marrowfat peas are green mature peas that have been allowed to dry out naturally in the field before being picked.",
      usage: "Mushy peas, wasabi peas, fish and chips, traditional Northern English snack",
      image: "/assets/products/peas/Marrowfat Peas.jpg"
    }
  ]

  const seedVarieties = [
    {
      name: "Canola Seeds",
      description: "Canola is a crop that was developed in Canada in the 1970s using classic plant breeding techniques on rapeseed. The elimination of unwanted components from rapeseed makes canola a high-quality and edible crop.",
      benefits: "High-quality and edible crop, member of crucifer family",
      image: "/assets/products/seeds/Canola Seeds.jpg"
    },
    {
      name: "Black Mustard Seeds",
      description: "Brown Mustard seeds are about 2 to 3 millimetres long. They have a unique flavour and are often used in Indian food.",
      benefits: "Unique flavor, smaller and easier to harvest than black mustard",
      image: "/assets/products/seeds/Black Mustard.jpg"
    },
    {
      name: "Yellow Mustard Seeds",
      description: "Yellow mustard has mucilage, which is the outer covering of the seed and absorbs and retains liquids, which is quite useful in the production of prepared meats.",
      benefits: "Excellent emulsifier, essential for salad dressings",
      image: "/assets/products/seeds/Yellow Mustard.jpg"
    },
    {
      name: "Canary Seeds",
      description: "Phalaris canariensis is the official scientific name for Canary seed. Over 80% of Canary seed exports worldwide come from Canada.",
      varieties: "Hairless and itchy varieties",
      characteristics: "Cereal with shallow roots, less heat and drought resistant than wheat",
      image: "/assets/products/seeds/CanarySeeds.jpg"
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
        <section className="relative py-20 bg-gradient-subtle">
          <div className="absolute inset-0">
            <Image
              src="/assets/AgroProducts.jpg"
              alt="Agro Products"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={lentil.image}
                      alt={lentil.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
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

        {/* Beans Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                BEANS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {beanVarieties.map((bean, index) => (
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={bean.image}
                      alt={bean.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-subsection-title text-brand-primary mb-3">{bean.name}</h3>
                  <p className="text-body text-brand-gray mb-4">{bean.description}</p>
                  <p className="text-body-small text-brand-secondary font-medium">
                    {bean.usage && `Usage: ${bean.usage}`}
                    {bean.benefits && `Benefits: ${bean.benefits}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Peas Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                PEAS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {peaVarieties.map((pea, index) => (
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={pea.image}
                      alt={pea.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-subsection-title text-brand-primary mb-3">{pea.name}</h3>
                  <p className="text-body text-brand-gray mb-4">{pea.description}</p>
                  <p className="text-body-small text-brand-secondary font-medium">
                    {pea.usage && `Usage: ${pea.usage}`}
                    {pea.benefits && `Benefits: ${pea.benefits}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Oil Seeds Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-section-title text-brand-primary mb-6">
                OIL SEEDS
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {seedVarieties.map((seed, index) => (
                <div key={index} className="bg-white border border-brand-light-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={seed.image}
                      alt={seed.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-subsection-title text-brand-primary mb-3">{seed.name}</h3>
                  <p className="text-body text-brand-gray mb-4">{seed.description}</p>
                  <div className="space-y-2">
                    {seed.benefits && (
                      <p className="text-body-small text-brand-secondary font-medium">
                        Benefits: {seed.benefits}
                      </p>
                    )}
                    {seed.varieties && (
                      <p className="text-body-small text-brand-gray">
                        Varieties: {seed.varieties}
                      </p>
                    )}
                    {seed.characteristics && (
                      <p className="text-body-small text-brand-gray">
                        Characteristics: {seed.characteristics}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Quality Section */}
        <section className="py-16 bg-gradient-subtle">
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