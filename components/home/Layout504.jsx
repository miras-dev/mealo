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

const MealCard = ({ meal, mealType }) => (
  <div className="group flex flex-col overflow-hidden border border-border-primary bg-white transition-shadow hover:shadow-lg">
    <div className="relative aspect-[4/3] overflow-hidden">
      <img
        src={meal.image}
        className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        alt={meal.name}
      />
      <div className="absolute left-3 top-3 flex gap-2">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
          {mealType}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${
            meal.dishType === "Vegetarian"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {meal.dishType === "Vegetarian" ? "Veg" : "Non-Veg"}
        </span>
      </div>
    </div>
    <div className="flex flex-1 flex-col p-6 md:p-8">
      <h3 className="mb-2 text-xl font-bold leading-tight md:text-2xl">{meal.name}</h3>
      <p className="text-sm text-gray-600">
        {meal.items.join(" · ")}
      </p>
    </div>
  </div>
);

export function Layout504() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto max-w-lg text-center">
            <p className="mb-3 font-semibold md:mb-4">Menu</p>
            <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              See what&apos;s cooking this week
            </h1>
            <p className="md:text-md">
              Browse our weekly menu and see exactly what you&apos;ll be eating.
              Every meal shows calorie counts, allergen info, and veg or non-veg
              tags.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
              <Link href="/meals">
                <button className="button-primary">View menu</button>
              </Link>
              <Button
                title="Filter"
                variant="link"
                size="link"
                iconRight={<RxChevronRight />}
              >
                Filter
              </Button>
            </div>
          </div>
        </div>
        <Tabs defaultValue="Monday" className="flex flex-col items-center">
          <TabsList className="no-scrollbar relative mb-12 flex w-screen flex-nowrap items-center gap-x-6 overflow-auto px-[5vw] md:mb-16 md:w-auto md:max-w-full md:px-0">
            {weeklyMenu.map((dayMenu) => (
              <TabsTrigger
                key={dayMenu.day}
                value={dayMenu.day}
                className="border-0 border-b-[1.5px] border-transparent px-0 py-2 duration-0 data-[state=active]:border-border-primary data-[state=active]:bg-transparent data-[state=active]:text-text-primary"
              >
                {dayMenu.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {weeklyMenu.map((dayMenu) => (
            <TabsContent
              key={dayMenu.day}
              value={dayMenu.day}
              className="w-full data-[state=active]:animate-tabs"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <MealCard meal={dayMenu.breakfast} mealType="Breakfast" />
                <MealCard meal={dayMenu.lunch} mealType="Lunch" />
                <MealCard meal={dayMenu.dinner} mealType="Dinner" />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
