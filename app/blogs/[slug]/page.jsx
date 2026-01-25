"use client";

import { Navbar5 } from "@/components/shared/Navbar5";
import { Footer1 } from "@/components/shared/Footer1";
import { Cta31 } from "@/components/shared/Cta31";
import { useParams } from "next/navigation";
import { getBlogBySlug } from "@/lib/blogsData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug;
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const post = getBlogBySlug(slug);
    setBlogPost(post);
  }, [slug]);

  if (!blogPost) {
    return (
      <div>
        <Navbar5 />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Blog post not found</h1>
            <p className="mt-4 text-gray-600">The blog post you're looking for doesn't exist.</p>
            <a href="/blogs" className="mt-6 inline-block text-blue-600 hover:underline">
              Back to Blog
            </a>
          </div>
        </div>
        <Footer1 />
      </div>
    );
  }

  return (
    <div>

      {/* Blog Post Hero */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-8">
            <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
              <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                {blogPost.category}
              </span>
              <span>
                {new Date(blogPost.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <span>·</span>
              <span>{blogPost.readTime}</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {blogPost.title}
            </h1>
            <p className="text-lg text-gray-600 md:text-xl">
              {blogPost.description}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              By {blogPost.author}
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-12 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
            <img
              src={blogPost.image}
              alt={blogPost.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-p:mb-4 prose-ul:mb-4 prose-li:mb-2">
            <ReactMarkdown>{blogPost.content}</ReactMarkdown>
          </div>

          {/* Author Info */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200">
                <span className="text-2xl font-bold text-gray-600">
                  {blogPost.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-semibold">{blogPost.author}</p>
                <p className="text-sm text-gray-600">Author at Mealo Balance Kitchen</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta31 />
    </div>
  );
}
