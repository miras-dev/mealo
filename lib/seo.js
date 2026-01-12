/**
 * SEO Utilities for Mealo
 * Provides reusable functions for meta tags, Open Graph, Twitter cards, and JSON-LD
 */

export const siteConfig = {
  name: "Mealo",
  description: "Authentic Kerala meals, balanced for your life. Real Kerala flavours prepared fresh each morning. Calorie-aligned portions matched to your goals, not guesswork.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://mealo.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/mealo",
    instagram: "https://instagram.com/mealo",
    facebook: "https://facebook.com/mealo",
  },
};

/**
 * Generate metadata for Next.js pages
 * @param {Object} options - Metadata options
 * @returns {Object} Next.js metadata object
 */
export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
  keywords = [],
  noindex = false,
}) {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "Kerala meals",
      "meal delivery",
      "calorie aligned meals",
      "healthy food delivery",
      "authentic Kerala cuisine",
      ...keywords,
    ],
    authors: [{ name: "Mealo" }],
    creator: "Mealo",
    publisher: "Mealo",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@mealo",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for Organization
 * @returns {Object} JSON-LD schema
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.instagram,
      siteConfig.links.facebook,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@mealo.com",
    },
  };
}

/**
 * Generate JSON-LD structured data for LocalBusiness
 * @returns {Object} JSON-LD schema
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    servesCuisine: "Kerala Cuisine",
    priceRange: "AED 25-150",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AE",
    },
  };
}

/**
 * Generate JSON-LD structured data for Article (Blog posts)
 * @param {Object} article - Article data
 * @returns {Object} JSON-LD schema
 */
export function generateArticleSchema(article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };
}

/**
 * Generate JSON-LD structured data for Product (Meal plans)
 * @param {Object} product - Product data
 * @returns {Object} JSON-LD schema
 */
export function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/plans`,
    },
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
  };
}

/**
 * Generate JSON-LD structured data for Recipe
 * @param {Object} recipe - Recipe data
 * @returns {Object} JSON-LD schema
 */
export function generateRecipeSchema(recipe) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.name,
    description: recipe.description,
    image: recipe.image,
    recipeCategory: recipe.category,
    recipeCuisine: "Kerala",
    recipeYield: recipe.servings,
    nutrition: {
      "@type": "NutritionInformation",
      calories: recipe.calories,
      proteinContent: recipe.protein,
      carbohydrateContent: recipe.carbs,
      fatContent: recipe.fats,
    },
  };
}

/**
 * Generate breadcrumb JSON-LD structured data
 * @param {Array} items - Breadcrumb items
 * @returns {Object} JSON-LD schema
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
