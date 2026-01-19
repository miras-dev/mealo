import { Header69 } from "@/components/plans/Header69";
import { Layout513 } from "@/components/plans/Layout513";
import { Pricing20 } from "@/components/plans/Pricing20";
import { Layout419 } from "@/components/plans/Layout419";
import { Layout357 } from "@/components/plans/Layout357";
import { Faq9 } from "@/components/plans/Faq9";
import { Cta31 } from "@/components/shared/Cta31";
import { generateMetadata as generateSEOMetadata, generateProductSchema } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Plans that fit you - Choose your meal plan",
  description: "Flexible meal plans starting from AED 25. Choose from Essential, Growth, or Weightloss plans. Pause, resume, or change plans whenever you need.",
  url: "/plans",
  keywords: ["meal plans", "pricing", "subscription", "AED 25", "AED 35", "AED 28", "calorie aligned meals"],
});

export default function PlansPage() {
  // Generate Product Schema for SEO
  const productSchema = generateProductSchema({
    name: "Mealo Meal Plans",
    description: "Authentic Kerala meal delivery plans with calorie-aligned portions",
    image: "/plans-og.jpg",
    price: "25",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Header69 />
      <Layout513 />
      <Pricing20 />
      <Layout419 />
      <Layout357 />
      <Faq9 />
      <Cta31 />
    </>
  );
}
