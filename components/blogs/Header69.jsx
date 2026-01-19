"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Balanced Kerala living
        </h1>
        <p className="text-text-alternative md:text-md">
          Discover nutrition wisdom, authentic recipes, and meal planning
          strategies from Mealo
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Meal image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
