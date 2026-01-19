// Sample meal data - Replace with your actual CMS or API data
export const mealsData = [
  {
    slug: "kerala-fish-curry",
    name: "Kerala Fish Curry",
    description: "Traditional Kerala-style fish curry with coconut milk, served with steamed rice. A perfect blend of spices and coastal flavors.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "420",
    protein: "32g",
    carbs: "48g",
    fats: "10g",
    fiber: "4g",
    ingredients: [
      "Fresh fish (kingfish/pomfret)",
      "Coconut milk",
      "Curry leaves",
      "Mustard seeds",
      "Turmeric",
      "Red chili powder",
      "Coriander powder",
      "Ginger & garlic",
      "Tomatoes",
      "Onions",
      "Steamed rice"
    ],
    allergens: ["Fish"],
    spiceLevel: "Medium",
    dishType: "Non-Vegetarian",
    prepTime: "30 minutes",
    category: "Lunch/Dinner"
  },
  {
    slug: "vegetarian-thali",
    name: "Kerala Vegetarian Thali",
    description: "Complete vegetarian meal with sambar, avial, thoran, rice, and papadam. A wholesome and nutritious traditional Kerala meal.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "380",
    protein: "12g",
    carbs: "62g",
    fats: "8g",
    fiber: "10g",
    ingredients: [
      "Sambar (lentil curry)",
      "Avial (mixed vegetables in coconut)",
      "Cabbage thoran",
      "Steamed rice",
      "Papadam",
      "Pickle",
      "Coconut chutney"
    ],
    allergens: ["None"],
    spiceLevel: "Mild",
    dishType: "Vegetarian",
    prepTime: "35 minutes",
    category: "Lunch/Dinner"
  },
  {
    slug: "chicken-biriyani",
    name: "Kerala Chicken Biriyani",
    description: "Fragrant basmati rice layered with spiced chicken, herbs, and aromatic spices. Served with raita and pickle.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "520",
    protein: "28g",
    carbs: "68g",
    fats: "14g",
    fiber: "3g",
    ingredients: [
      "Basmati rice",
      "Chicken",
      "Yogurt",
      "Onions",
      "Tomatoes",
      "Ginger-garlic paste",
      "Biriyani masala",
      "Mint leaves",
      "Coriander leaves",
      "Ghee",
      "Raita",
      "Pickle"
    ],
    allergens: ["Dairy"],
    spiceLevel: "Medium-Hot",
    dishType: "Non-Vegetarian",
    prepTime: "45 minutes",
    category: "Lunch/Dinner"
  },
  {
    slug: "beef-fry",
    name: "Kerala Beef Fry",
    description: "Spicy and flavorful Kerala-style beef fry with coconut pieces, curry leaves, and aromatic spices. Served with porotta.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "480",
    protein: "35g",
    carbs: "42g",
    fats: "18g",
    fiber: "2g",
    ingredients: [
      "Beef cubes",
      "Coconut slices",
      "Curry leaves",
      "Shallots",
      "Ginger & garlic",
      "Kashmiri chili",
      "Garam masala",
      "Fennel seeds",
      "Black pepper",
      "Porotta (2 pieces)"
    ],
    allergens: ["None"],
    spiceLevel: "Hot",
    dishType: "Non-Vegetarian",
    prepTime: "50 minutes",
    category: "Lunch/Dinner"
  },
  {
    slug: "prawn-moilee",
    name: "Prawn Moilee",
    description: "Mild and creamy Kerala prawn curry cooked in coconut milk with subtle spices. Perfect for those who prefer less spicy food.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "340",
    protein: "26g",
    carbs: "36g",
    fats: "9g",
    fiber: "3g",
    ingredients: [
      "Fresh prawns",
      "Coconut milk",
      "Shallots",
      "Green chilies",
      "Ginger",
      "Turmeric",
      "Curry leaves",
      "Mustard seeds",
      "Vinegar",
      "Steamed rice"
    ],
    allergens: ["Shellfish"],
    spiceLevel: "Mild",
    dishType: "Non-Vegetarian",
    prepTime: "25 minutes",
    category: "Lunch/Dinner"
  },
  {
    slug: "puttu-kadala-curry",
    name: "Puttu & Kadala Curry",
    description: "Traditional Kerala breakfast of steamed rice cake (puttu) served with spicy black chickpea curry and banana.",
    image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    calories: "320",
    protein: "14g",
    carbs: "58g",
    fats: "5g",
    fiber: "8g",
    ingredients: [
      "Rice flour puttu",
      "Grated coconut",
      "Black chickpeas",
      "Onions",
      "Tomatoes",
      "Curry powder",
      "Curry leaves",
      "Coconut oil",
      "Banana"
    ],
    allergens: ["None"],
    spiceLevel: "Medium",
    dishType: "Vegetarian",
    prepTime: "30 minutes",
    category: "Breakfast"
  }
];

// Helper function to get meal by slug
export function getMealBySlug(slug) {
  return mealsData.find(meal => meal.slug === slug);
}

// Helper function to get all meal slugs (useful for static generation)
export function getAllMealSlugs() {
  return mealsData.map(meal => meal.slug);
}
