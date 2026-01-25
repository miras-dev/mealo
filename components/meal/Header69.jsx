"use client";

import React from "react";

export function Header69() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 max-w-lg text-center">
        <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
          This week's menu
        </h1>
        <p className="text-text-alternative md:text-md">
          Authentic Kerala dishes crafted for your nutrition goals, with every
          calorie counted
        </p>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596040033229-a0b3b8b7b8f3?w=1920&q=80"
          className="size-full object-cover"
          alt="Kerala meal spread"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
