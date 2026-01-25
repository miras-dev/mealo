"use client";

import React from "react";

export function Layout192() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80"
              className="w-full object-cover rounded-lg"
              alt="Traditional Kerala kitchen"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-3 font-semibold md:mb-4">Story</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Why we started Mealo Balance Kitchen
            </h2>
            <p className="md:text-md">
              We saw busy professionals and families in Abu Dhabi struggling
              with two problems: finding authentic Kerala food and eating
              healthily without the daily cooking burden. Mealo was built to
              solve both. Every meal is made with the same care you'd give your
              own kitchen.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <button className="button-primary">
                Read our story
              </button>
              <button className="button-secondary">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
