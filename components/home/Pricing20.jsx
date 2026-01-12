"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing20() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Choose your plan
          </h1>
          <p className="md:text-md">
            Pick the plan that matches your routine and nutrition goals. All
            plans include veg and non-veg options.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Normal
            </h2>
            <p>Three meals daily</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 25
            </h3>
            <p>per day</p>
            <div className="mt-6 md:mt-8">
              <Button title="Choose plan" className="w-full">
                Choose plan
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Breakfast, lunch, dinner</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Calorie-aligned portions</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Veg and non-veg options</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Executive
            </h2>
            <p>Premium three meals</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 35
            </h3>
            <p>per day</p>
            <div className="mt-6 md:mt-8">
              <Button title="Choose plan" className="w-full">
                Choose plan
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Larger portions included</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Premium ingredient selection</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Flexible pause and resume</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Priority delivery window</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Weight Loss
            </h2>
            <p>Goal-focused nutrition</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 28
            </h3>
            <p>per day</p>
            <div className="mt-6 md:mt-8">
              <Button title="Choose plan" className="w-full">
                Choose plan
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Lower calorie targets</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Macro-balanced meals</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Portion-controlled servings</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Nutritionist-designed plans</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Weight Gain</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
