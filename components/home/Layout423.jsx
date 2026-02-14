"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const slideVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
  },
};

export const Layout423 = (props) => {
  const { tagline, heading, description, features } = {
    ...Layout423Defaults,
    ...props,
  };

  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.url}
              className="relative flex w-full flex-col overflow-hidden rounded-2xl lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/40" />
                <img
                  src={feature.image.src}
                  alt={feature.image.alt}
                  className="size-full object-cover"
                />
              </div>
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10">
                  <p className="mb-2 font-semibold text-text-alternative">{feature.tagline}</p>
                  <h3 className="text-2xl font-bold text-text-alternative md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {feature.heading}
                  </h3>
                  <div className="lg:hidden">
                    <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                    <div className="mt-6 md:mt-8">
                      <Button {...feature.button} className="text-text-alternative">
                        {feature.button.title}
                      </Button>
                    </div>
                  </div>
                </div>
                <AnimatePresence>
                  {hoveredFeatureIdx === index && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[340px]"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-5 text-text-alternative md:mt-6">{feature.description}</p>
                      <div className="mt-6 md:mt-8">
                        <Button {...feature.button} className="text-text-alternative">
                          {feature.button.title}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout423Defaults = {
  tagline: "Why Mealo",
  heading: "What makes us different",
  description: "Real Kerala flavours, prepared the way they should be",
  features: [
    {
      tagline: "Authentic",
      url: "#",
      heading: "Every meal calorie-aligned to your daily goals",
      description:
        "Portions matched to your nutrition targets, not guesswork",
      image: {
        src: "/images/Food/Cover.png",
        alt: "Two people discussing meal plans at a cafe",
      },
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Flexible",
      url: "#",
      heading: "Pause, resume, or change plans whenever you need",
      description:
        "Your schedule changes. Your meal plan should too",
      image: {
        src: "https://images.pexels.com/photos/30945104/pexels-photo-30945104.jpeg",
        alt: "Woman working on laptop managing her meal plan",
      },
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Reliable",
      url: "#",
      heading: "Daily delivery you can count on, every single day",
      description:
        "Delivered fresh to your door at the same time, always",
      image: {
        src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=1200&q=80",
        alt: "Delivery person handing meal to customer",
      },
      button: {
        title: "Learn more",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
