"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import { blogsData } from "@/lib/blogsData";
import Link from "next/link";

const MotionTabsContent = motion.create(TabsContent);

const useRelume = ({ defaultValue }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const isActive = (tabValue) => {
    return activeTab === tabValue ? 1 : 0;
  };

  return {
    activeTab,
    setActiveTab,
    isActive,
  };
};

// Blog Card Component
const BlogCard = ({ blog }) => (
  <div className="flex size-full flex-col items-center justify-start border border-border-primary">
    <Link href={`/blogs/${blog.slug}`} className="w-full max-w-full">
      <div className="w-full overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="aspect-video size-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
    </Link>
    <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
      <div className="rb-4 mb-4 flex w-full items-center justify-start">
        <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
          {blog.category}
        </p>
        <p className="inline text-sm font-semibold">{blog.readTime}</p>
      </div>
      <Link className="mb-2" href={`/blogs/${blog.slug}`}>
        <h2 className="text-xl font-bold md:text-2xl hover:underline">
          {blog.title}
        </h2>
      </Link>
      <p>{blog.excerpt}</p>
      <Link href={`/blogs/${blog.slug}`}>
        <Button
          title="Read more"
          variant="link"
          size="link"
          iconRight={<RxChevronRight />}
          className="mt-6 flex items-center justify-center gap-x-2"
        >
          Read more
        </Button>
      </Link>
    </div>
  </div>
);

export function Blog14() {
  const useActive = useRelume({ defaultValue: "view-all" });

  // Get unique categories
  const categories = ["View all", ...new Set(blogsData.map(blog => blog.category))];

  // Filter blogs by category
  const getFilteredBlogs = (category) => {
    if (category === "View all") return blogsData;
    return blogsData.filter(blog => blog.category === category);
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Stories</p>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              Nutrition and wellness insights
            </h1>
            <p className="md:text-md">
              Explore our latest articles on balanced eating and Kerala cuisine
            </p>
          </div>
        </div>
        <Tabs
          value={useActive.activeTab}
          onValueChange={useActive.setActiveTab}
          className="flex flex-col justify-center"
        >
          <TabsList className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            <TabsTrigger
              value="view-all"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              View all
            </TabsTrigger>
            {categories.slice(1).map((category) => (
              <TabsTrigger
                key={category}
                value={category.toLowerCase()}
                className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <AnimatePresence initial={false}>
            <MotionTabsContent
              value="view-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("view-all") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                {getFilteredBlogs("View all").map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </MotionTabsContent>
            {categories.slice(1).map((category) => (
              <MotionTabsContent
                key={category}
                value={category.toLowerCase()}
                initial={{ opacity: 0 }}
                animate={{ opacity: useActive.isActive(category.toLowerCase()) }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                  {getFilteredBlogs(category).map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} />
                  ))}
                </div>
              </MotionTabsContent>
            ))}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
