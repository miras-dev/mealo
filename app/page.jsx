import { Header142 } from "@/components/home/Header142";
import { Layout423 } from "@/components/home/Layout423";
// import { Layout353 } from "@/components/home/Layout353";
// import { Pricing20 } from "@/components/shared/Pricing20";
import { Layout504 } from "@/components/home/Layout504";
import { Testimonial17 } from "@/components/shared/Testimonial17";
import { Layout192 } from "@/components/shared/Layout192";
import { Faq9 } from "@/components/shared/Faq9";
import { Cta31 } from "@/components/shared/Cta31";

export default function HomePage() {
  return (
    <>
      <Header142 />
      <Layout423 />
      {/* <Layout353 /> */}
      <Layout504 />
      {/* <Pricing20 /> */}
      <Testimonial17 />
      <Layout192 />
      <Faq9 />
      <Cta31 />
    </>
  );
}
