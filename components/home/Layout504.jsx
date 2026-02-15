"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import { weeklyMenu } from "@/lib/mealsData";
import Link from "next/link";

function Badge({ children, variant = "default" }) {
  const base =
    "rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm";

  const styles = {
    default: "bg-white/90 text-gray-800",
    veg: "bg-green-100 text-green-800",
    nonveg: "bg-red-100 text-red-800",
  };

  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}


function MealCard({ meal, mealType }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-[#EDE8E0] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative aspect-[4/3] flex justify-center overflow-hidden rounded-t-3xl bg-[#EDE8E0]/30">
        <img
          src={meal.image}
          alt={meal.name}
          className="pt-5 transition-transform duration-300 group-hover:scale-105"
          style={{ height: "100%", width: "auto" }}
        />

        {/* Badges */}
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge>{mealType}</Badge>
          <Badge variant={meal.dishType === "Vegetarian" ? "veg" : "nonveg"}>
            {meal.dishType === "Vegetarian" ? "Veg" : "Non-Veg"}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="mb-2 text-xl font-bold leading-tight md:text-2xl">
          {meal.name}
        </h3>
        <p className="text-sm text-gray-600">
          {meal.items.join(" · ")}
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* Main Layout */
/* ---------------------------------- */

export function Layout504() {
  return (
    <section className="bg-white px-[5%] py-20 md:py-24 lg:py-28">
      <div className="container">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-xl text-center">
          <p className="mb-3 font-semibold text-[#e66025]">Menu</p>

          <h1 className="mb-5 text-4xl font-bold md:text-6xl">
            See what&apos;s cooking this week
          </h1>

          <p className="text-gray-600">
            Browse our weekly menu and see exactly what you&apos;ll be eating.
            Every meal shows calorie counts, allergen info, and veg or non-veg
            tags.
          </p>

          <div className="mt-8 flex items-center justify-center gap-x-4">
            <Link href="/meals">
              <button className="button-primary">View menu</button>
            </Link>

            
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue={weeklyMenu[0].day} className="flex flex-col items-center">

          <TabsList className="no-scrollbar mb-12 flex w-full max-w-3xl justify-center gap-8 overflow-auto border-b border-[#EDE8E0]">
            {weeklyMenu.map((dayMenu) => (
              <TabsTrigger
                key={dayMenu.day}
                value={dayMenu.day}
                className="border-0 border-b-2 border-transparent px-1 py-3 text-sm font-medium transition-all data-[state=active]:border-[#e66025] data-[state=active]:text-[#e66025]"
              >
                {dayMenu.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {weeklyMenu.map((dayMenu) => (
            <TabsContent
              key={dayMenu.day}
              value={dayMenu.day}
              className="w-full"
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {["breakfast", "lunch", "dinner"].map((type) => (
                  <MealCard
                    key={type}
                    meal={dayMenu[type]}
                    mealType={
                      type.charAt(0).toUpperCase() + type.slice(1)
                    }
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
