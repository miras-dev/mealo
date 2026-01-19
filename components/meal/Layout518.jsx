"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const heroWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "55vw"]);
  const scaleHeight = useTransform(scrollYProgress, [0, 1], ["100vh", "90vh"]);
  const position = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const cardsXPosition = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const cardsWidth = useTransform(scrollYProgress, [0, 1], ["100vw", "35vw"]);

  // Pre-create card positions for each card
  const cardPosition0 = useTransform(
    scrollYProgress,
    [0, 0, 0.2, 1],
    ["100%", "100%", "0%", "0%"],
  );
  const cardPosition1 = useTransform(
    scrollYProgress,
    [0, 0.01, 0.7, 1],
    ["100%", "100%", "0%", "0%"],
  );

  const motionHeroStyles = {
    width: heroWidth,
    height: scaleHeight,
    y: position,
    x: position,
  };
  const motionCardsStyles = {
    width: cardsWidth,
    height: scaleHeight,
    y: position,
    x: cardsXPosition,
  };
  return {
    containerRef,
    cardPosition0,
    cardPosition1,
    motionHeroStyles,
    motionCardsStyles
  };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout518() {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const scrollAnimation = useRelume();
  return (
    <section
      id="relume"
      ref={scrollAnimation.containerRef}
      className="relative px-[5%] py-16 md:px-0 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <ConditionalRender condition={renderMobile.isMobile}>
        <div className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <div className="max-w-md text-center text-text-alternative">
            <p className="mb-3 font-semibold md:mb-4">Tagline</p>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Medium length section heading goes here
            </h2>
            <p className="md:text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
              <Button title="Button" variant="secondary-alt">
                Button
              </Button>
              <Button
                title="Button"
                variant="link-alt"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Button
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          <div className="flex border border-border-primary p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12 object-cover"
                  alt="Relume placeholder image 1"
                />
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                Short heading here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 md:mt-8"
              >
                Button
              </Button>
              <a
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                href={undefined}
              >
                Button
                <RxChevronRight />
              </a>
            </div>
          </div>
          <div className="flex border border-border-primary p-8 text-center">
            <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
              <div className="mb-3 md:mb-4">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                  className="size-12 object-cover"
                  alt="Relume placeholder image 2"
                />
              </div>
              <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl">
                Short heading here
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
              </p>
              <Button
                title="Button"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
                className="mt-6 md:mt-8"
              >
                Button
              </Button>
              <a
                className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                href={undefined}
              >
                Button
                <RxChevronRight />
              </a>
            </div>
          </div>
        </div>
      </ConditionalRender>
      <ConditionalRender condition={renderTablet.isTablet}>
        <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
          <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
            <motion.div
              style={scrollAnimation.motionHeroStyles}
              className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
            >
              <div className="max-w-md text-center text-text-alternative">
                <p className="mb-3 font-semibold md:mb-4">Nutrition</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Portions built for your body
                </h2>
                <p className="md:text-md">
                  Every meal is weighed and calculated to match your plan. No
                  guessing, no excess, just the right amount of food for your
                  goals.
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                  <Button title="See" variant="secondary-alt">
                    See
                  </Button>
                  <Button
                    title="More"
                    variant="link-alt"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    More
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 -z-10">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  className="size-full object-cover"
                  alt="Relume placeholder image"
                />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </motion.div>
            <motion.div
              style={scrollAnimation.motionCardsStyles}
              className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
            >
              <motion.div
                style={{ x: scrollAnimation.cardPosition0 }}
                className="flex border border-border-primary p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12 object-cover"
                      alt="Relume placeholder image 1"
                    />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                    Ingredients sourced carefully
                  </h3>
                  <p>
                    We work with trusted suppliers to bring you quality
                    vegetables, proteins, and spices every single day
                  </p>
                  <a
                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                    href={undefined}
                  >
                    Source
                    <RxChevronRight />
                  </a>
                </div>
              </motion.div>
              <motion.div
                style={{ x: scrollAnimation.cardPosition1 }}
                className="flex border border-border-primary p-8 text-center lg:max-w-[640px]"
              >
                <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
                  <div className="mb-3 md:mb-4">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                      className="size-12 object-cover"
                      alt="Relume placeholder image 2"
                    />
                  </div>
                  <h3 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
                    Hygiene certified
                  </h3>
                  <p>
                    Our kitchen meets strict food safety standards with daily
                    checks and proper storage for every ingredient
                  </p>
                  <a
                    className="focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0 text-text-primary gap-2 p-0 mt-6 md:mt-8"
                    href={undefined}
                  >
                    Trust
                    <RxChevronRight />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </ConditionalRender>
    </section>
  );
}
