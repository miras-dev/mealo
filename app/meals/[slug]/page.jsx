"use client";

import { Navbar5 } from "@/components/shared/Navbar5";
import { Footer1 } from "@/components/shared/Footer1";
import { Cta31 } from "@/components/shared/Cta31";
import { useParams } from "next/navigation";

export default function MealDetailPage() {
  const params = useParams();
  const slug = params.slug;

  // TODO: Fetch meal data based on slug
  // This is a placeholder - you'll integrate with your CMS or API
  const meal = {
    name: "Sample Kerala Meal",
    description: "Authentic Kerala flavors with perfectly balanced nutrition",
    calories: "450 kcal",
    protein: "25g",
    carbs: "55g",
    fats: "12g",
    image: "/meal-placeholder.jpg",
    ingredients: [
      "Rice",
      "Curry",
      "Vegetables",
      "Spices"
    ],
    allergens: ["None"],
    spiceLevel: "Medium",
  };

  return (
    <div>
      <Navbar5 />

      {/* Meal Detail Hero */}
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Meal Image */}
            <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
              {/* TODO: Replace with actual image */}
              <div className="flex h-full items-center justify-center text-gray-400">
                Meal Image Placeholder
              </div>
            </div>

            {/* Meal Info */}
            <div>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                {meal.name}
              </h1>
              <p className="mb-8 text-lg text-gray-600 md:text-xl">
                {meal.description}
              </p>

              {/* Nutrition Info */}
              <div className="mb-8 rounded-lg border border-gray-200 p-6">
                <h2 className="mb-4 text-2xl font-bold">Nutrition Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Calories</p>
                    <p className="text-xl font-bold">{meal.calories}</p>
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
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>
                <ul className="list-inside list-disc space-y-2">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              {/* Additional Info */}
              <div className="space-y-2">
                <p><strong>Spice Level:</strong> {meal.spiceLevel}</p>
                <p><strong>Allergens:</strong> {meal.allergens.join(", ")}</p>
              </div>

              <p className="mt-8 text-sm text-gray-600">
                This is a dynamic meal detail page for: <strong>{slug}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta31 />
      <Footer1 />
    </div>
  );
}
