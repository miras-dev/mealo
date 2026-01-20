"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCheck } from "react-icons/bi";

export function Pricing20() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">Plans</p>
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Our plans
          </h1>
          <p className="md:text-md">
            Pick what works for your body and your day
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Normal plan
            </h2>
            <p>Three meals daily</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 99
            </h3>
            <p>per week</p>
            <div className="mt-6 md:mt-8">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
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
                <p>Veg and non-veg options</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Pause anytime, resume later</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Executive plan
            </h2>
            <p>Premium portions, same meals</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 149
            </h3>
            <p>per week</p>
            <div className="mt-6 md:mt-8">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Choose plan
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Larger serving sizes</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Priority delivery slot</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Customise spice levels</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Flexible meal swaps</p>
              </div>
            </div>
          </div>
          <div className="h-full border border-border-primary px-6 py-8 md:p-8">
            <h2 className="mb-1 text-md font-bold leading-[1.4] md:text-xl">
              Weight loss plan
            </h2>
            <p>Calorie-controlled meals</p>
            <div className="my-8 h-px w-full bg-border-primary" />
            <h3 className="my-2 text-6xl font-bold md:text-9xl lg:text-10xl">
              AED 119
            </h3>
            <p>per week</p>
            <div className="mt-6 md:mt-8">
              <Button className="w-full bg-black text-white hover:bg-gray-800">
                Choose plan
              </Button>
            </div>
            <div className="my-8 h-px w-full bg-border-primary" />
            <div className="grid grid-cols-1 gap-y-4 py-2">
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>1200–1500 calorie range</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Macro-balanced portions</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Low-oil cooking method</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Weekly progress tracking</p>
              </div>
              <div className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <BiCheck className="size-6" />
                </div>
                <p>Nutritionist consultation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
