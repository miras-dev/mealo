"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Layout419() {
  return (
    <section className="pt-24 md:pt-0">
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-y-0">
        <div>
          <div className="md:sticky md:top-0 md:gap-y-0">
            <div className="flex flex-col items-end md:h-screen md:justify-center">
              <div className="mx-[5%] max-w-md md:ml-[5vw] md:mr-12 lg:mr-20">
                <p className="mb-3 font-semibold md:mb-4">Details</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  What each plan includes
                </h2>
                <p className="md:text-md">
                  Every plan comes with three meals a day, flexible pausing, and
                  the option to swap meals. Choose your spice level and dietary
                  preference—we handle the rest.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Select" variant="secondary">
                    Select
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
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1589301773859-858076b3ad1b?w=800&q=80"
                  alt="Traditional Kerala breakfast"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Breakfast
              </h3>
              <p>
                Puttu, idiyappam, and appam with sambar or coconut curry. Warm,
                filling, and ready by 7 AM.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1606851681591-0e2830e92fda?w=800&q=80"
                  alt="Healthy lunch option"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Breakfast
              </h3>
              <p>
                Puttu, idiyappam, and appam with sambar or coconut curry. Warm,
                filling, and ready by 7 AM.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80"
                  alt="Nutritious dinner meal"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Breakfast
              </h3>
              <p>
                Puttu, idiyappam, and appam with sambar or coconut curry. Warm,
                filling, and ready by 7 AM.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1603073163308-9c29e7192fdb?w=800&q=80"
                  alt="Balanced meal portions"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Breakfast
              </h3>
              <p>
                Puttu, idiyappam, and appam with sambar or coconut curry. Warm,
                filling, and ready by 7 AM.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
