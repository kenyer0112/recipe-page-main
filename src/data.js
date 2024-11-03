export const main = {
  title: "Simple Omelette Recipe",
  paragraph:" An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."

};


export const prerationTime = [
  { title: "Total:", context: "Approximately 10 minutes" },
  { title: "Preparation:", context: "5 minutes" },
  { title: "Cooking:", context: "5 minutes" },
];

export const ingredients = [
  ["2-3 large eggs"],
  ["Salt, to taste"],
  ["Pepper, to taste"],
  ["1 tablespoon of butter or oil"],
  ["Optional fillings: cheese, diced vegetables, cooked meats, herbs"],
];

export const instructions = [
  {
    title: "Beat the eggs:",
    context:
      "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
  },
  {
    title: "Heat the pan:",
    context:
      "Place a non-stick frying pan over medium heat and add butter or oil.",
  },
  {
    title: "Cook the omelette:",
    context:
      "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
  },
  {
    title: "Add fillings (optional):",
    context:
      "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
  },
  {
    title: "Fold and serve:",
    context:
      "As the omelette continues to cook, carefully lift one edge and fold it over the  fillings. Let it cook for another minute, then slide it onto a plate.",
  },
  {
    title: "Enjoy",
    context: "Serve hot, with additional salt and pepper if needed.",
  },
];
