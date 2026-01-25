"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Plans that fit you
        </h1>
        <p className="text-text-alternative md:text-md">
          Choose a meal plan aligned with your lifestyle, fitness goals, and
          taste preferences
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
          className="size-full object-cover"
          alt="Meal planning and preparation"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
