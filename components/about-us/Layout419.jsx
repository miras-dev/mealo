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
                <p className="mb-3 font-semibold md:mb-4">Clean</p>
                <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                  Every meal prepared with absolute care
                </h2>
                <p className="md:text-md">
                  We don't cut corners on what matters. Our kitchens follow
                  strict hygiene protocols, our ingredients are sourced fresh
                  daily, and every meal is checked before it reaches your door.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                  <Button title="Learn" variant="secondary">
                    Learn
                  </Button>
                  <Button
                    title="Standards"
                    variant="link"
                    size="link"
                    iconRight={<RxChevronRight />}
                  >
                    Standards
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
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80"
                  alt="Professional kitchen workspace"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Kitchen protocols
              </h3>
              <p>
                Our team works in certified kitchens with temperature-controlled
                storage and regular health inspections. We follow food safety
                standards that exceed local requirements.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=80"
                  alt="Fresh vegetable preparation"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Kitchen protocols
              </h3>
              <p>
                Our team works in certified kitchens with temperature-controlled
                storage and regular health inspections. We follow food safety
                standards that exceed local requirements.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Hygiene certified kitchen"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Kitchen protocols
              </h3>
              <p>
                Our team works in certified kitchens with temperature-controlled
                storage and regular health inspections. We follow food safety
                standards that exceed local requirements.
              </p>
            </div>
          </div>
          <div className="sticky top-0 flex h-screen flex-col justify-center border-t border-t-border-primary bg-background-secondary px-[5%] py-10 md:px-10">
            <div className="max-w-md">
              <div className="mb-6 md:mb-8">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb4c?w=800&q=80"
                  alt="Food quality inspection"
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-md font-bold md:mb-4 md:text-2xl">
                Kitchen protocols
              </h3>
              <p>
                Our team works in certified kitchens with temperature-controlled
                storage and regular health inspections. We follow food safety
                standards that exceed local requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
