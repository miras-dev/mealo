"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const HeroContent = ({ tagline, heading, description, buttons, image }) => (
  <>
    <div className="relative z-10 max-w-md text-center">
      <p className="mb-3 font-semibold text-text-alternative md:mb-4">{tagline}</p>
      <h2 className="mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
        {heading}
      </h2>
      <p className="text-text-alternative md:text-md">{description}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
        {buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    </div>
    <div className="absolute inset-0 z-0">
      <img src={image.src} className="size-full object-cover" alt={image.alt} />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  </>
);

const CardContent = ({ card, variant = "mobile" }) => (
  <div className="mx-auto flex max-w-md flex-col items-center justify-center lg:max-w-full">
    <div className="mb-3 md:mb-4">
      <img src={card.image.src} className="size-12 object-cover" alt={card.image.alt} />
    </div>
    <h3
      className={
        variant === "desktop"
          ? "mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl"
          : "mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl"
      }
    >
      {card.heading}
    </h3>
    <p>{card.description}</p>
    <Button {...card.button} className="mt-6 md:mt-8">
      {card.button.title}
    </Button>
  </div>
);

const AnimatedCard = ({ card, index, scrollYProgress }) => {
  const x = useTransform(
    scrollYProgress,
    [0, index * 0.01, 0.2 + index * 0.5, 1],
    ["100%", "100%", "0%", "0%"]
  );
  return (
    <motion.div
      style={{ x }}
      className="flex border border-border-primary p-8 text-center lg:max-w-[640px]"
    >
      <CardContent card={card} variant="desktop" />
    </motion.div>
  );
};

export function Layout518(props) {
  const { image, tagline, heading, description, buttons, cards } = {
    ...Layout518Defaults,
    ...props,
  };

  const isMobile = useMediaQuery("(max-width: 991px)");
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

  if (isMobile) {
    return (
      <section id="relume" className="relative px-[5%] py-16 md:py-24">
        <div className="relative mb-6 flex items-center justify-center px-6 py-16 md:mb-8 md:px-8 md:py-24">
          <HeroContent
            tagline={tagline}
            heading={heading}
            description={description}
            buttons={buttons}
            image={image}
          />
        </div>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8">
          {cards.map((card, index) => (
            <div key={index} className="flex border border-border-primary p-8 text-center">
              <CardContent card={card} variant="mobile" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      id="relume"
      ref={containerRef}
      className="relative py-16 md:py-24 lg:h-[250vh] lg:py-0"
    >
      <div className="mx-auto w-[90vw] lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-full lg:items-center lg:justify-center lg:overflow-hidden">
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:h-[90vh] lg:w-[90vw] lg:grid-cols-[55vw_35vw] lg:gap-y-0">
          <motion.div
            style={motionHeroStyles}
            className="relative flex items-center justify-center px-6 py-16 md:px-8 md:py-24 lg:p-3"
          >
            <HeroContent
              tagline={tagline}
              heading={heading}
              description={description}
              buttons={buttons}
              image={image}
            />
          </motion.div>
          <motion.div
            style={motionCardsStyles}
            className="grid grid-cols-1 gap-y-6 md:gap-y-8 lg:pl-8"
          >
            {cards.map((card, index) => (
              <AnimatedCard key={index} card={card} index={index} scrollYProgress={scrollYProgress} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const Layout518Defaults = {
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
  tagline: "Nutrition",
  heading: "Precision in Every Meal",
  description:
    "Every meal is weighed and calculated to match your plan. No guessing, no excess, just the right amount of food for your goals.",
  buttons: [
    { title: "See", variant: "secondary-alt" },
    {
      title: "More",
      variant: "link-alt",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
  cards: [
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume placeholder image 1",
      },
      heading: "Ingredients sourced carefully",
      description:
        "We work with trusted suppliers to bring you quality vegetables, proteins, and spices every single day",
      button: {
        title: "Source",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg",
        alt: "Relume placeholder image 2",
      },
      heading: "Hygiene certified",
      description:
        "Our kitchen meets strict food safety standards with daily checks and proper storage for every ingredient",
      button: {
        title: "Trust",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
