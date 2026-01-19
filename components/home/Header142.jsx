"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useCallback } from "react";

const imagePositions = {
  group1: [
    "bottom-[5%] left-[-8%] z-10 max-w-[18%] sm:bottom-[10%] lg:bottom-auto",
    "left-[30%] top-[8%] z-10 max-w-[18%] sm:top-[10%] sm:max-w-[12%] lg:left-[40%] lg:top-[5%]",
    "bottom-[-5%] right-[-5%] z-10 max-w-[25%] lg:max-w-[18%]",
    "bottom-[-2%] left-[20%] z-10 max-w-[18%] sm:bottom-[-5%] sm:max-w-[16%] lg:bottom-[-10%]",
  ],
  group2: [
    "left-[2%] top-[-5%] max-w-[30%] sm:left-[5%] sm:max-w-[18%] lg:left-[10%] lg:top-[-10%]",
    "right-[20%] top-[-2%] max-w-[25%] sm:top-[5%] sm:max-w-[16%] lg:right-[20%] lg:top-[-10%]",
    "right-[-5%] top-[10%] max-w-[20%] sm:max-w-[15%] lg:top-[25%]",
    "bottom-[5%] right-[32%] max-w-[18%] sm:right-[30%] sm:max-w-[15%] lg:bottom-[5%] lg:max-w-[12%]",
  ],
};

const useMouseMove = () => {
  const mouseX = useMotionValue(0.55);
  const mouseY = useMotionValue(0.55);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 500 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 500 });

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      mouseX.set(x);
      mouseY.set(y);
    },
    [mouseX, mouseY],
  );

  return { smoothMouseX, smoothMouseY, handleMouseMove };
};

export const Header142 = (props) => {
  const { heading, description, buttons, group1Images, group2Images } = {
    ...Header142Defaults,
    ...props,
  };

  const { smoothMouseX, smoothMouseY, handleMouseMove } = useMouseMove();
  const isMobile = useMediaQuery("(max-width: 991px)");
  const Animate = isMobile ? "div" : motion.div;

  // Canvas transform
  const canvasX = useTransform(smoothMouseX, [0, 1], ["10vw", "-5vw"]);
  const canvasY = useTransform(smoothMouseY, [0, 1], ["10vh", "-5vh"]);
  const canvasTransform = { x: canvasX, y: canvasY };

  // Group 1 transform
  const group1X = useTransform(smoothMouseX, [0, 1], ["8%", "-8%"]);
  const group1Y = useTransform(smoothMouseY, [0, 1], ["8%", "-8%"]);
  const group1Transform = { x: group1X, y: group1Y };

  // Group 2 transform
  const group2X = useTransform(smoothMouseX, [0, 1], ["2%", "-2%"]);
  const group2Y = useTransform(smoothMouseY, [0, 1], ["2%", "-2%"]);
  const group2Transform = { x: group2X, y: group2Y };

  const renderImages = (
    images,
    positions,
    transformStyles,
  ) => (
    <Animate
      className="absolute inset-0 flex origin-bottom items-center justify-center"
      style={transformStyles}
    >
      {images.map((image, index) => (
        <div key={index} className={`absolute w-full ${positions[index]}`}>
          <img src={image.src} alt={image.alt} className="size-full" />
        </div>
      ))}
    </Animate>
  );

  return (
    <section
      id="relume"
      className="relative flex h-svh items-center justify-center overflow-hidden lg:h-screen"
      onMouseMove={handleMouseMove}
    >
      <div className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container max-w-lg">
          <div className="relative z-10 text-center">
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button key={index} {...button}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Animate className="absolute size-full" style={canvasTransform}>
        {renderImages(group1Images, imagePositions.group1, group1Transform)}
        {renderImages(group2Images, imagePositions.group2, group2Transform)}
      </Animate>
    </section>
  );
};

export const Header142Defaults = {
  heading: "Authentic Kerala meals, balanced for your life",
  description:
    "Real Kerala flavours prepared fresh each morning. Calorie-aligned portions matched to your goals, not guesswork. Reliable delivery at the same time, every day.",
  buttons: [
    { title: "Choose a plan" },
    { title: "View weekly menu", variant: "secondary" }
  ],
  group1Images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Kerala meal 1",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Kerala meal 2",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Kerala meal 3",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Kerala meal 4",
    },
  ],
  group2Images: [
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Kerala meal 5",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
      alt: "Kerala meal 6",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Kerala meal 7",
    },
    {
      src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
      alt: "Kerala meal 8",
    },
  ],
};
