import { Navbar5 } from "@/components/shared/Navbar5";
import { Header69 } from "@/components/meal/Header69";
import { Layout358 } from "@/components/meal/Layout358";
import { Gallery18 } from "@/components/meal/Gallery18";
import { Layout370 } from "@/components/meal/Layout370";
import { Layout518 } from "@/components/meal/Layout518";
import { Cta31 } from "@/components/shared/Cta31";
import { Faq9 } from "@/components/meal/Faq9";
import { Footer1 } from "@/components/shared/Footer1";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "This Week's Menu - Browse fresh Kerala meals",
  description: "Explore this week's menu featuring authentic Kerala dishes. Each meal shows calories, macros, and ingredients. Made fresh daily.",
  url: "/meals",
  keywords: ["weekly menu", "meal menu", "Kerala dishes", "calories", "macros", "ingredients"],
});

export default function MealsPage() {
  return (
    <div>
      <Navbar5 />
      <Header69 />
      <Layout358 />
      <Gallery18 />
      <Layout370 />
      <Layout518 />
      <Cta31 />
      <Faq9 />
      <Footer1 />
    </div>
  );
}
