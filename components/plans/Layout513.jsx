"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = ({ data }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Pre-compute styles for each of the 4 items
  const dataLength = data.length;

  // Item 0
  const opacity0 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 0 / dataLength - 0.07),
      0 / dataLength,
      1 / dataLength - 0.07,
      Math.min(1, 1 / dataLength),
    ],
    [0, 1, 1, 0],
  );
  const y0 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 0 / dataLength - 0.1),
      0 / dataLength,
      1 / dataLength - 0.1,
      Math.min(1, 1 / dataLength),
    ],
    [100, 0, 0, -100],
  );

  // Item 1
  const opacity1 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 1 / dataLength - 0.07),
      1 / dataLength,
      2 / dataLength - 0.07,
      Math.min(1, 2 / dataLength),
    ],
    [0, 1, 1, 0],
  );
  const y1 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 1 / dataLength - 0.1),
      1 / dataLength,
      2 / dataLength - 0.1,
      Math.min(1, 2 / dataLength),
    ],
    [100, 0, 0, -100],
  );

  // Item 2
  const opacity2 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 2 / dataLength - 0.07),
      2 / dataLength,
      3 / dataLength - 0.07,
      Math.min(1, 3 / dataLength),
    ],
    [0, 1, 1, 0],
  );
  const y2 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 2 / dataLength - 0.1),
      2 / dataLength,
      3 / dataLength - 0.1,
      Math.min(1, 3 / dataLength),
    ],
    [100, 0, 0, -100],
  );

  // Item 3
  const opacity3 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 3 / dataLength - 0.07),
      3 / dataLength,
      4 / dataLength - 0.07,
      Math.min(1, 4 / dataLength),
    ],
    [0, 1, 1, 0],
  );
  const y3 = useTransform(
    scrollYProgress,
    [
      Math.max(0, 3 / dataLength - 0.1),
      3 / dataLength,
      4 / dataLength - 0.1,
      Math.min(1, 4 / dataLength),
    ],
    [100, 0, 0, -100],
  );

  const styles = [
    { opacity: opacity0, y: y0 },
    { opacity: opacity1, y: y1 },
    { opacity: opacity2, y: y2 },
    { opacity: opacity3, y: y3 },
  ];

  const getStyles = (index) => styles[index];
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout513() {
  const [mounted, setMounted] = useState(false);
  const tablet = useTablet();
  const mobile = useMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  const useSctoll = useRelume({
    data: [
      {
        heading: "01 Feature one",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
      },
      {
        heading: "02 Feature two",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
      },
      {
        heading: "03 Feature three",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
      },
      {
        heading: "04 Feature four",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
      },
    ],
  });
  return (
    <section
      ref={useSctoll.containerRef}
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-20">
          <div className="flex flex-col gap-y-16 md:sticky md:top-20 md:mt-20 md:h-[calc(100vh_-10rem)] md:justify-center">
            <div className="flex flex-col">
              <p className="mb-3 font-semibold md:mb-4">Plans</p>
              <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Five plans built for your goals
              </h2>
              <p className="md:text-md">
                Whether you're chasing weight loss, building muscle, or simply
                eating well, we have a plan that matches your needs. Each one
                delivers authentic Kerala meals, calorie-aligned and ready when
                you are.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                <Button title="Compare" variant="secondary">
                  Compare
                </Button>
                <Button
                  title="→"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  →
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8">
              {mounted && (
                <>
                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">Normal plan</h5>
                      <p>
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                          alt="Relume placeholder image 1"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(0).opacity,
                        y: useSctoll.getStyles(0).y,
                      }}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="md:relative"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Normal plan
                      </h5>
                      <p className="md:text-md">
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                    </motion.div>
                  </ConditionalRender>

                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">Executive plan</h5>
                      <p>
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                          alt="Relume placeholder image 2"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(1).opacity,
                        y: useSctoll.getStyles(1).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute md:top-0"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Executive plan
                      </h5>
                      <p className="md:text-md">
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                    </motion.div>
                  </ConditionalRender>

                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        Weight loss plan
                      </h5>
                      <p>
                        Higher-calorie portions designed to support steady
                        muscle and weight gain with balanced nutrition.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                          alt="Relume placeholder image 3"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(2).opacity,
                        y: useSctoll.getStyles(2).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute md:top-0"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Weight loss plan
                      </h5>
                      <p className="md:text-md">
                        Higher-calorie portions designed to support steady
                        muscle and weight gain with balanced nutrition.
                      </p>
                    </motion.div>
                  </ConditionalRender>

                  <ConditionalRender condition={mobile.isMobile}>
                    <div>
                      <h5 className="mb-3 text-xl font-bold">
                        Weight gain plan
                      </h5>
                      <p>
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                      <div className="mt-4">
                        <img
                          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                          alt="Relume placeholder image 4"
                          className="size-full"
                        />
                      </div>
                    </div>
                  </ConditionalRender>
                  <ConditionalRender condition={tablet.isTablet}>
                    <motion.div
                      style={{
                        opacity: useSctoll.getStyles(3).opacity,
                        y: useSctoll.getStyles(3).y,
                      }}
                      initial={false}
                      animate={{}}
                      transition={{}}
                      className="md:absolute md:top-0"
                    >
                      <h5 className="font-bold md:mb-4 md:text-2xl">
                        Weight gain plan
                      </h5>
                      <p className="md:text-md">
                        Larger portions of the same meals, with priority
                        delivery and spice customisation.
                      </p>
                    </motion.div>
                  </ConditionalRender>
                </>
              )}
            </div>
          </div>
          <div className="hidden md:grid md:grid-cols-1 md:gap-4">
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg"
                alt="Relume placeholder image 1"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg"
                alt="Relume placeholder image 2"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg"
                alt="Relume placeholder image 3"
                className="size-full"
              />
            </div>
            <div className="h-screen overflow-hidden">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg"
                alt="Relume placeholder image 4"
                className="size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
