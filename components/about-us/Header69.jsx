"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          Our story
        </h1>
        <p className="text-text-alternative md:text-md">
          Why Mealo Balance Kitchen exists, and what drives us every single day.
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
          className="size-full object-cover"
          alt="Traditional Kerala kitchen"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
