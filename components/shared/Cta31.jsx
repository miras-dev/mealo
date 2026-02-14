"use client";


import Link from "next/link";
import React from "react";

export function Cta31() {
  return (
    <section className="bg-black px-[5%] py-16 md:py-24 lg:py-28"
      style={{
        background: '#e66025'
      }}
    >
      <div className="container flex flex-col items-center">
        <div className="mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
            Start your balanced meal plan
          </h2>
          <p className="text-white md:text-md">
            Join hundreds eating better, feeling stronger, and living easier
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            <button 
            className="button-secondary bg-white "
            >Choose Plan
            </button>
            <Link 
              href="https://calendly.com/miras-azolute" target="_blank" rel="noopener noreferrer">
            <button 
              className="button-secondary"
            >
              Book Consultation
            </button>
            </Link>
          </div>
        </div>
        <img
          src="/images/Kitchen.png"
          className="size-full object-cover"
          alt="Meal image"
          style={{
            height: "600px",

          }}
        />
      </div>
    </section>
  );
}
