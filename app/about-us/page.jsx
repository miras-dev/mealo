import { Header69 } from "@/components/about-us/Header69";
import { Layout149 } from "@/components/about-us/Layout149";
import { Layout419 } from "@/components/about-us/Layout419";
import { Layout373 } from "@/components/about-us/Layout373";
import { Testimonial17 } from "@/components/about-us/Testimonial17";
import { Logo4 } from "@/components/about-us/Logo4";
import { Cta31 } from "@/components/shared/Cta31";
import { generateMetadata as generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Our Story - Built on Kerala roots and a simple belief",
  description: "Learn about Mealo's journey to bring authentic Kerala meals to your doorstep. Our story, values, and commitment to quality.",
  url: "/about-us",
  keywords: ["about mealo", "our story", "Kerala cuisine", "meal delivery service"],
});

export default function AboutUsPage() {
  return (
    <>
      <Header69 />
      <Layout149 />
      <Layout419 />
      <Layout373 />
            aaaa
      
      <Testimonial17 />
      <Logo4 />
      <Cta31 />
    </>
  );
}
