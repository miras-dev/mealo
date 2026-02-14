"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  {
    quote:
      "The food tastes like home. I've lost weight without feeling like I'm on a diet, and the delivery is always on time.",
    name: "Fatima Al Mansouri",
    role: "Office professional, Abu Dhabi",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote:
      "I was sceptical about meal subscriptions, but Mealo proved me wrong. Authentic Kerala taste and the portions are exactly what I need for my fitness goals.",
    name: "Ahmed Hassan",
    role: "Fitness enthusiast, Masdar City",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote:
      "Finally, someone who understands that healthy food should taste good. My family loves it, and I love not cooking every night.",
    name: "Priya Nair",
    role: "Family, Khalifa City",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

function TestimonialCard({ quote, name, role, image }) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-3xl border border-[#EDE8E0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-8">
      <div>
        <div className="mb-5 flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <BiSolidStar key={i} className="mr-1 size-6 text-[#e66025]" />
          ))}
        </div>

        <blockquote className="leading-relaxed text-gray-700">
          “{quote}”
        </blockquote>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <div className="rounded-full bg-[#e66025]/20 p-[2px]">
          <img
            src={image}
            alt={name}
            className="size-12 rounded-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonial17() {
  return (
    <section className="bg-[#EDE8E0]/40 px-[5%] py-20 md:py-24 lg:py-28">
      <div className="container">

        <div className="mx-auto mb-14 max-w-xl text-center">
          <h2 className="mb-5 text-4xl font-bold md:text-6xl">
            What customers say
          </h2>
          <p className="text-gray-600">
            Real feedback from people eating Mealo every day
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
