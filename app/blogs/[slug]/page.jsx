"use client";

import { Navbar5 } from "@/components/shared/Navbar5";
import { Footer1 } from "@/components/shared/Footer1";
import { Cta31 } from "@/components/shared/Cta31";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;

  // TODO: Fetch blog post data based on slug
  // This is a placeholder - you'll integrate with your CMS or API
  const blogPost = {
    title: "Sample Blog Post",
    description: "This is a sample blog post description.",
    content: "Blog post content goes here...",
    image: "/blog-placeholder.jpg",
    publishedAt: new Date().toISOString(),
    author: "Mealo Team",
  };

  return (
    <div>
      <Navbar5 />

      {/* Blog Post Hero */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <p className="mb-4 text-sm text-gray-600">
              {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              {blogPost.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
            {/* TODO: Replace with actual image */}
            <div className="flex h-full items-center justify-center text-gray-400">
              Featured Image Placeholder
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <p>{blogPost.content}</p>
            <p>
              This is a dynamic blog post page for: <strong>{slug}</strong>
            </p>
            <p>
              You can integrate this with your CMS (Contentful, Sanity, Strapi, etc.)
              or a headless CMS to fetch and display actual blog content.
            </p>
          </div>
        </div>
      </section>

      <Cta31 />
      <Footer1 />
    </div>
  );
}
