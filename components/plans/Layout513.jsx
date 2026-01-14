"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout513() {
  const data = [
    {
      subheading: "Normal plan",
      description:
        "Larger portions of the same meals, with priority delivery and spice customisation.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
        alt: "Relume placeholder image 1",
      },
    },
    {
      subheading: "Executive plan",
      description:
        "Larger portions of the same meals, with priority delivery and spice customisation.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
        alt: "Relume placeholder image 2",
      },
    },
    {
      subheading: "Weight loss plan",
      description:
        "Higher-calorie portions designed to support steady muscle and weight gain with balanced nutrition.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
        alt: "Relume placeholder image 3",
      },
    },
    {
      subheading: "Weight gain plan",
      description:
        "Larger portions of the same meals, with priority delivery and spice customisation.",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
        alt: "Relume placeholder image 4",
      },
    },
  ];

  return (
    <section id="relume" className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
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
                  <Button variant="secondary">
                    Compare
                  </Button>
                  <Button
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Learn more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <div
              key={index}
              className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10"
            >
              <div className="max-w-md">
                <div className="mb-6 md:mb-8">
                  <img
                    src={item.image.src}
                    alt={item.image.alt}
                    className="size-full object-cover"
                  />
                </div>
                <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">{item.subheading}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
