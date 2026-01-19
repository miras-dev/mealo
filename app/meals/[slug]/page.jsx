"use client";

import { Cta31 } from "@/components/shared/Cta31";
import { useParams } from "next/navigation";
import { getMealBySlug } from "@/lib/mealsData";
import { useEffect, useState } from "react";

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
          <p className="mt-4 text-gray-600">The meal you're looking for doesn't exist.</p>
          <a href="/meals" className="mt-6 inline-block text-blue-600 hover:underline">
            Back to Meals
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Meal Detail Hero */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Meal Image */}
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              <img
                src={meal.image}
                alt={meal.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Meal Info */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                  {meal.dishType}
                </span>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                  {meal.spiceLevel}
                </span>
              </div>

              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                {meal.name}
              </h1>
              <p className="mb-8 text-lg text-gray-600 md:text-xl">
                {meal.description}
              </p>

              {/* Nutrition Info */}
              <div className="mb-8 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 text-2xl font-bold">Nutrition Information</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div>
                    <p className="text-sm text-gray-600">Calories</p>
                    <p className="text-xl font-bold">{meal.calories} kcal</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Protein</p>
                    <p className="text-xl font-bold">{meal.protein}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Carbs</p>
                    <p className="text-xl font-bold">{meal.carbs}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fats</p>
                    <p className="text-xl font-bold">{meal.fats}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Fiber</p>
                    <p className="text-xl font-bold">{meal.fiber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Prep Time</p>
                    <p className="text-xl font-bold">{meal.prepTime}</p>
                  </div>
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
                <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-600">✓</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="space-y-3 rounded-lg bg-gray-50 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Category:</span>
                  <span className="text-gray-600">{meal.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Spice Level:</span>
                  <span className="text-gray-600">{meal.spiceLevel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Allergens:</span>
                  <span className="text-gray-600">
                    {meal.allergens.join(", ") || "None"}
                  </span>
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
