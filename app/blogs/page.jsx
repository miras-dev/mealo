import { Header69 } from "@/components/blogs/Header69";
import { Blog14 } from "@/components/blogs/Blog14";
import { Cta2 } from "@/components/blogs/Cta2";
import { Cta31 } from "@/components/shared/Cta31";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Nutrition and wellness insights - Mealo Blog",
  description: "Discover nutrition tips, wellness insights, and Kerala cuisine stories. Learn about balanced eating and healthy living.",
  url: "/blogs",
  keywords: ["blog", "nutrition", "wellness", "Kerala food", "healthy eating", "meal prep"],
});

export default function BlogsPage() {
  return (
    <>
      <Header69 />
      <Blog14 />
      <Cta2 />
      <Cta31 />
    </>
  );
}
