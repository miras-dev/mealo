"use client";

import { Cta31 } from "@/components/shared/Cta31";
import { useParams } from "next/navigation";
import { getMealBySlug } from "@/lib/mealsData";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MealDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const mealData = getMealBySlug(slug);
    setMeal(mealData);
  }, [slug]);

  if (!meal) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Meal not found</h1>
          <p className="mt-4 text-gray-600">The meal you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/meals" className="mt-6 inline-block text-[#F15A22] hover:underline">
            Back to Meals
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-6">
            <Link href="/meals" className="text-sm text-gray-500 hover:text-[#F15A22]">
              &larr; Back to menu
            </Link>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Meal Image */}
            <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-200">
              <img
                src={meal.image}
                alt={meal.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Meal Info */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#F15A22]/10 px-3 py-1 text-sm font-medium text-[#F15A22]">
                  {meal.day}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
                  {meal.category}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-sm font-medium ${
                    meal.dishType === "Vegetarian"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {meal.dishType}
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                {meal.name}
              </h1>

              {/* Items included */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">What&apos;s included</h2>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {meal.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#F15A22]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 rounded-xl bg-gray-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Day:</span>
                  <span className="text-gray-600">{meal.day}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Meal Type:</span>
                  <span className="text-gray-600">{meal.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Diet:</span>
                  <span className="text-gray-600">{meal.dishType}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta31 />
    </>
  );
}
