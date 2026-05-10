export type Product = {
  id: string;
  name: string;
  description: string;
  color: string;
  bgLight: string;
  recipes: { title: string; content: string }[];
};

export const products: Product[] = [
  {
    id: "corn",
    name: "Boiled Corn Kernels",
    description: "Golden sun-ripened corn, boiled to perfection and then freeze-dried to lock in that natural sweetness and satisfying crunch. A nostalgic snack that brings the field to your pocket.",
    color: "text-yellow-700",
    bgLight: "bg-yellow-50",
    recipes: [
      { title: "Sweet & Salty Trail Mix", content: "Mix corn kernels with almonds, dark chocolate chips, and a pinch of sea salt for a balanced B2B energy snack." },
      { title: "Kids' 'Popcorn' Alternative", content: "A mess-free, nutritious alternative to popcorn. Perfect for lunchboxes and movie nights without the hulls." },
      { title: "Creamy Corn Chowder Garnish", content: "Sprinkle atop warm corn chowder just before serving to add a surprising textural contrast." },
      { title: "Southwest Salad Crunch", content: "Toss into a black bean and avocado salad for a sweet crunch that doesn't get soggy from the dressing." },
      { title: "Golden Morning Yogurt", content: "Add to Greek yogurt with a drizzle of honey for a unique, naturally sweet breakfast crunch." }
    ]
  },
  {
    id: "mango",
    name: "Tropical Mango",
    description: "The king of fruits, captured at its peak. Our mango slices are vibrant, intense, and naturally sweet. No added sugars, just the pure, velvety taste of the tropics in every bite.",
    color: "text-orange-700",
    bgLight: "bg-orange-50",
    recipes: [
      { title: "Mango-Lime Morning Bowl", content: "Crumble over coconut yogurt and finish with a squeeze of fresh lime for a refreshing start." },
      { title: "Tropical Fruit Infusion", content: "Drop a few slices into cold sparkling water for a subtle, natural sweetness that develops over time." },
      { title: "Kid-Friendly 'Fruit Leather' Bites", content: "Break into small pieces for a chewy-then-crunchy snack that children love as much as candy." },
      { title: "Exotic Spinach Salad", content: "Combine with baby spinach, goat cheese, and walnuts for a sophisticated salad topping." },
      { title: "Mango White Chocolate Bark", content: "Press into melted white chocolate and let set for a gourmet B2B gifting idea." }
    ]
  },
  {
    id: "pineapple",
    name: "Golden Pineapple",
    description: "Zesty, tangy, and incredibly crisp. Our pineapple is harvested when the aroma is most potent, ensuring each freeze-dried slice delivers a burst of sunshine and vitamin C.",
    color: "text-yellow-600",
    bgLight: "bg-yellow-50/50",
    recipes: [
      { title: "Pineapple Upside-Down Parfait", content: "Layer with vanilla pudding and crushed graham crackers for a deconstructed vintage dessert." },
      { title: "Zesty Aloha Smoothie Topper", content: "Add a handful to the top of a green smoothie for a burst of acidity and crunch." },
      { title: "Sweet & Sour Stir-Fry Garnish", content: "Sprinkle over a vegetable stir-fry at the very last second for a concentrated pineapple kick." },
      { title: "Pineapple Mint Refresher", content: "Muddle with fresh mint and water for a healthy, zero-calorie flavored beverage." },
      { title: "Gourmet Cheese Board Accent", content: "Pairs beautifully with sharp cheddar or creamy brie for a vintage-inspired charcuterie board." }
    ]
  },
  {
    id: "strawberry",
    name: "Vine-Ripened Strawberry",
    description: "The classic summer treat, available all year round. Our strawberries are deep red and full of soul. Each bite is a concentrated explosion of berry flavor, light as air and incredibly crisp.",
    color: "text-red-700",
    bgLight: "bg-red-50",
    recipes: [
      { title: "Pink Strawberry Milk", content: "Crush into a fine powder and stir into cold milk for a natural, chemical-free strawberry milk." },
      { title: "Berry Nutty Oatmeal", content: "Stir into hot oatmeal; the berries will partially rehydrate, creating pockets of intense flavor." },
      { title: "Strawberry Champagne Sparkler", content: "Drop a whole berry into a glass of sparkling wine for an elegant, vintage-style toast." },
      { title: "Kids' Berry Pancake Stack", content: "Press into pancake batter while cooking or sprinkle on top for a fun, colorful breakfast." },
      { title: "Dark Chocolate Dipped Berries", content: "Half-dip the freeze-dried berries into melted dark chocolate for a simple, healthy luxury." }
    ]
  }
];
