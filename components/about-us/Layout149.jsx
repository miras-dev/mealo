"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout149() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 md:mb-18 lg:mb-20">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <p className="mb-3 font-semibold md:mb-4">Authentic</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                Built on Kerala roots and a simple belief
              </h2>
              <p className="mb-5 md:mb-6 md:text-md">
                We started Mealo because we saw a gap. People in Abu Dhabi
                craved authentic Kerala home cooking, but couldn't find it
                paired with real nutrition and reliability. We grew up eating
                our grandmother's food—simple, honest, balanced. That's what we
                bring to your table every day. Fresh ingredients, traditional
                recipes, calorie-aligned portions, and the kind of care that
                comes from knowing exactly what goes into every meal.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 py-2">
             
                <img
                  src="/images/CompanyLogo.svg"
                  alt="Company logo"
                  className="max-h-6"
                />
                <img
                  src="/images/CompanyLogo.svg"
                  alt="Company logo"
                  className="max-h-6"
                />
                <img
                  src="/images/CompanyLogo.svg"
                  alt="Company logo"
                  className="max-h-6"
                />
                <img
                  src="/images/CompanyLogo.svg"
                  alt="Company logo"
                  className="max-h-6"
                />
               
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
                <Button title="View" variant="secondary">
                  View
                </Button>
                <Button
                  title="Menu"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Menu
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
            className="size-full object-cover"
            alt="Meal image"
          />
        </div>
      </div>
    </section>
  );
}
