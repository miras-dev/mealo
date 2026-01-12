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

export function Blog14() {
  const useActive = useRelume({ defaultValue: "view-all" });
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
            <TabsTrigger
              value="category-one"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Nutrition
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Recipes
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Wellness
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="px-4 data-[state=active]:border data-[state=active]:border-border-primary data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-neutral-black"
            >
              Lifestyle
            </TabsTrigger>
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
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Nutrition
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Macros matter more than you think
                      </h2>
                    </a>
                    <p>
                      Understanding protein, carbs, and fats for your fitness
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Nutrition
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Macros matter more than you think
                      </h2>
                    </a>
                    <p>
                      Understanding protein, carbs, and fats for your fitness
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Nutrition
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Macros matter more than you think
                      </h2>
                    </a>
                    <p>
                      Understanding protein, carbs, and fats for your fitness
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Nutrition
                      </p>
                      <p className="inline text-sm font-semibold">6 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Macros matter more than you think
                      </h2>
                    </a>
                    <p>
                      Understanding protein, carbs, and fats for your fitness
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </MotionTabsContent>
            <MotionTabsContent
              value="category-one"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-one") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Recipes
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Kerala avial beyond the dinner plate
                      </h2>
                    </a>
                    <p>
                      Discover how this traditional vegetable curry fits your
                      daily nutrition
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Recipes
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Kerala avial beyond the dinner plate
                      </h2>
                    </a>
                    <p>
                      Discover how this traditional vegetable curry fits your
                      daily nutrition
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Recipes
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Kerala avial beyond the dinner plate
                      </h2>
                    </a>
                    <p>
                      Discover how this traditional vegetable curry fits your
                      daily nutrition
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Recipes
                      </p>
                      <p className="inline text-sm font-semibold">5 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Kerala avial beyond the dinner plate
                      </h2>
                    </a>
                    <p>
                      Discover how this traditional vegetable curry fits your
                      daily nutrition
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </MotionTabsContent>
            <MotionTabsContent
              value="category-two"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-two") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Wellness
                      </p>
                      <p className="inline text-sm font-semibold">7 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Meal prep without the stress
                      </h2>
                    </a>
                    <p>
                      How subscription meals simplify your week and support your
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Wellness
                      </p>
                      <p className="inline text-sm font-semibold">7 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Meal prep without the stress
                      </h2>
                    </a>
                    <p>
                      How subscription meals simplify your week and support your
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Wellness
                      </p>
                      <p className="inline text-sm font-semibold">7 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Meal prep without the stress
                      </h2>
                    </a>
                    <p>
                      How subscription meals simplify your week and support your
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Wellness
                      </p>
                      <p className="inline text-sm font-semibold">7 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Meal prep without the stress
                      </h2>
                    </a>
                    <p>
                      How subscription meals simplify your week and support your
                      goals
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </MotionTabsContent>
            <MotionTabsContent
              value="category-three"
              initial={{ opacity: 0 }}
              animate={{ opacity: useActive.isActive("category-three") }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Lifestyle
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Busy professionals deserve better food
                      </h2>
                    </a>
                    <p>
                      Why authentic Kerala meals beat takeaway every single time
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Lifestyle
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Busy professionals deserve better food
                      </h2>
                    </a>
                    <p>
                      Why authentic Kerala meals beat takeaway every single time
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Lifestyle
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Busy professionals deserve better food
                      </h2>
                    </a>
                    <p>
                      Why authentic Kerala meals beat takeaway every single time
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
                <div className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <a href="#" className="w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                        alt="Relume placeholder image"
                        className="aspect-video size-full object-cover"
                      />
                    </div>
                  </a>
                  <div className="flex h-full flex-col items-start justify-center px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        Lifestyle
                      </p>
                      <p className="inline text-sm font-semibold">4 min read</p>
                    </div>
                    <a className="mb-2" href="#">
                      <h2 className="text-xl font-bold md:text-2xl">
                        Busy professionals deserve better food
                      </h2>
                    </a>
                    <p>
                      Why authentic Kerala meals beat takeaway every single time
                    </p>
                    <Button
                      title="Read more"
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                    </Button>
                  </div>
                </div>
              </div>
            </MotionTabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
