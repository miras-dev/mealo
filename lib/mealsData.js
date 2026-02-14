// Weekly menu data based on the Mealo menu

export const weeklyMenu = [
  {
    day: "Monday",
    breakfast: {
      name: "Idiyappam, Thengapal & Sugar",
      items: ["Idiyappam", "Thengapal", "Sugar"],
      image: "/images/Food/1.png",
      dishType: "Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Rice with Fish Curry Meal",
      items: ["Rice", "Fish Curry", "Veg Curry", "Cabbage Thoran", "Fish Fry", "Pickle", "Pappadam"],
      image: "/images/Food/2.png",
      dishType: "Non-Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Dosa, Sambar & Chutney",
      items: ["Dosa", "Sambar", "Chutney"],
      image: "/images/Food/3.png",
      dishType: "Vegetarian",
      category: "Dinner",
    },
  },
  {
    day: "Tuesday",
    breakfast: {
      name: "Vellappam & Egg Stew",
      items: ["Vellappam", "Egg Stew"],
      image: "/images/Food/4.png",
      dishType: "Non-Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Sadhya",
      items: ["Rice", "Sambar", "Avial", "Pachadi", "Thoran", "Ressam", "Pickle", "Pappadam", "Payassam"],
      image: "/images/Food/5.png",
      dishType: "Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Atta Dosa & Soya Curry",
      items: ["Atta Dosa", "Soya Curry"],
      image: "/images/Food/6.png",
      dishType: "Vegetarian",
      category: "Dinner",
    },
  },
  {
    day: "Wednesday",
    breakfast: {
      name: "Puttu & Kadala Curry",
      items: ["Puttu", "Kadala Curry"],
      image: "/images/Food/7.png",
      dishType: "Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Rice with Fish Mango Curry Meal",
      items: ["Rice", "Fish Mango Curry", "Kumbalanga Curry", "Payar Thoran", "Fish Fry", "Pickle", "Pappadam"],
      image: "/images/Food/8.png",
      dishType: "Non-Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Idiyappam & Veg Kuruma",
      items: ["Idiyappam", "Veg Kuruma"],
      image: "/images/Food/9.png",
      dishType: "Vegetarian",
      category: "Dinner",
    },
  },
  {
    day: "Thursday",
    breakfast: {
      name: "Boiled Egg & Banana",
      items: ["Boiled Egg", "Banana"],
      image: "/images/Food/10.png",
      dishType: "Non-Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Rice with Coconut Fish Curry Meal",
      items: ["Rice", "Coconut Fish Curry", "Aviyal", "Carrot Thoran", "Fish Fry", "Pickle", "Pappadam"],
      image: "/images/Food/2.png",
      dishType: "Non-Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Vellappam & Egg Stew",
      items: ["Vellappam", "Egg Stew"],
      image: "/images/Food/4.png",
      dishType: "Non-Vegetarian",
      category: "Dinner",
    },
  },
  {
    day: "Friday",
    breakfast: {
      name: "Masala Dosa",
      items: ["Masala Dosa"],
      image: "/images/Food/11.png",
      dishType: "Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Biriyani (Chicken / Beef)",
      items: ["Biriyani (Chicken / Beef)"],
      image: "/images/Food/12.png",
      dishType: "Non-Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Puttu & Chicken 65",
      items: ["Puttu", "Chicken 65"],
      image: "/images/Food/7.png",
      dishType: "Non-Vegetarian",
      category: "Dinner",
    },
  },
  {
    day: "Saturday",
    breakfast: {
      name: "Porichapathi & Beef Roast",
      items: ["Porichapathi", "Beef Roast"],
      image: "/images/Food/6.png",
      dishType: "Non-Vegetarian",
      category: "Breakfast",
    },
    lunch: {
      name: "Rice with Fish Curry Meal",
      items: ["Rice", "Fish Curry", "Moru Curry", "Beetroot Thoran", "Fish Fry", "Pickle", "Pappadam"],
      image: "/images/Food/8.png",
      dishType: "Non-Vegetarian",
      category: "Lunch",
    },
    dinner: {
      name: "Puttu & Chicken 65",
      items: ["Puttu", "Chicken 65"],
      image: "/images/Food/7.png",
      dishType: "Non-Vegetarian",
      category: "Dinner",
    },
  },
];

// Daily Pick info
export const dailyPick = {
  breakfast: {
    commonItems: ["Idli", "Dosa"],
    description: "One daily choice item, which changes every day",
  },
  dinner: {
    commonItems: ["Chapati", "Porotta"],
    description: "One daily choice item, which changes every day",
  },
};

// Side dish add-on info
export const sideDishInfo = {
  description: "Add extra dishes when you want. Choose additional dishes from a curated list shared one day before delivery. Available for Lunch & Dinner.",
  howItWorks: [
    "Add-on menu shared in advance",
    "Select your preferred side dishes",
    "Delivered along with your meal",
  ],
};

// Flatten all meals for listing/carousel purposes
export const mealsData = weeklyMenu.flatMap((dayMenu) => {
  const daySlug = dayMenu.day.toLowerCase();
  return [
    {
      slug: `${daySlug}-breakfast-${dayMenu.breakfast.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`,
      name: dayMenu.breakfast.name,
      day: dayMenu.day,
      items: dayMenu.breakfast.items,
      image: dayMenu.breakfast.image,
      dishType: dayMenu.breakfast.dishType,
      category: "Breakfast",
    },
    {
      slug: `${daySlug}-lunch-${dayMenu.lunch.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`,
      name: dayMenu.lunch.name,
      day: dayMenu.day,
      items: dayMenu.lunch.items,
      image: dayMenu.lunch.image,
      dishType: dayMenu.lunch.dishType,
      category: "Lunch",
    },
    {
      slug: `${daySlug}-dinner-${dayMenu.dinner.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-+$/, "")}`,
      name: dayMenu.dinner.name,
      day: dayMenu.day,
      items: dayMenu.dinner.items,
      image: dayMenu.dinner.image,
      dishType: dayMenu.dinner.dishType,
      category: "Dinner",
    },
  ];
});

// Helper function to get meal by slug
export function getMealBySlug(slug) {
  return mealsData.find((meal) => meal.slug === slug);
}

// Helper function to get all meal slugs
export function getAllMealSlugs() {
  return mealsData.map((meal) => meal.slug);
}

// Helper to get meals by category
export function getMealsByCategory(category) {
  return weeklyMenu.map((dayMenu) => ({
    day: dayMenu.day,
    meal: dayMenu[category.toLowerCase()],
  }));
}
