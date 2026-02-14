import { Header69 } from "@/components/meal/Header69";
import { Layout358 } from "@/components/meal/Layout358";
import { Gallery18 } from "@/components/meal/Gallery18";
import { Layout370 } from "@/components/meal/Layout370";
import { Cta31 } from "@/components/shared/Cta31";
import { Faq9 } from "@/components/shared/Faq9";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "This Week's Menu - Browse fresh Kerala meals",
  description: "Explore this week's menu featuring authentic Kerala dishes for every day. Breakfast, lunch, and dinner — made fresh daily and delivered to your door.",
  url: "/meals",
  keywords: ["weekly menu", "meal menu", "Kerala dishes", "breakfast", "lunch", "dinner", "meal delivery Abu Dhabi"],
});

export default function MealsPage() {
  return (
    <>
      <Header69 />
      <Layout358 />
      <Gallery18 />
      <Layout370 />
      <Cta31 />
      <Faq9 />
    </>
  );
}
