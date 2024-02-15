export const vegetableCategories = {
  leafyGreens: ["spinach", "lettuce", "kale", "collard greens", "swiss chard"],
  rootVegetables: ["carrot", "potato", "beetroot", "turnip", "radish"],
  cruciferousVegetables: [
    "broccoli",
    "cauliflower",
    "cabbage",
    "brussels sprouts",
    "bok choy",
  ],
  nightshadeVegetables: [
    "tomato",
    "bell pepper",
    "eggplant",
    "potato (technically)",
  ],
  alliumVegetables: ["onion", "garlic", "leek", "shallot", "scallion"],
  legumes: ["beans", "peas", "lentils", "chickpeas", "soybeans"],
};
export const fruitCategories = {
  citrus: ["orange", "lemon", "lime", "grapefruit"],
  tropical: ["banana", "pineapple", "mango", "papaya"],
  berries: ["strawberry", "blueberry", "raspberry", "blackberry"],
  stoneFruits: ["peach", "plum", "apricot", "cherry"],
  exotic: ["dragon fruit", "kiwi", "star fruit", "passion fruit"],
};
export const dairyCategory = {
  milkProducts: ["milk", "cheese", "yogurt", "butter", "cream"],
  eggs: ["chicken eggs", "duck eggs", "quail eggs"],
  others: ["sour cream", "cottage cheese", "whipped cream"],
};
const grainsCategory = {
  rice: ["white rice", "brown rice", "jasmine rice", "basmati rice"],
  bread: [
    "white bread",
    "whole wheat bread",
    "multigrain bread",
    "sourdough bread",
  ],
  pasta: ["spaghetti", "penne", "fettuccine", "linguine"],
  quinoa: ["white quinoa", "red quinoa", "black quinoa"],
  oats: ["rolled oats", "steel-cut oats", "instant oats"],
};
const proteinCategory = {
  meat: ["chicken", "beef", "pork", "lamb", "turkey"],
  fish: ["salmon", "tuna", "cod", "trout", "halibut"],
  legumes: ["beans", "lentils", "chickpeas", "black beans", "kidney beans"],
  tofu: [
    "firm tofu",
    "silken tofu",
    "smoked tofu",
    "baked tofu",
    "tofu scramble",
  ],
};

export const groceryCategories = {
  fruits: { data: fruitCategories, hide: "none" },
  vegetables: { data: vegetableCategories, hide: "none" },
  dairy: { data: dairyCategory, hide: "none" },
  grains: { data: grainsCategory, hide: "none" },
  protein:{data:proteinCategory,hide:"none"},
  // beverages: ["water", "juice", "soda", "coffee", "tea"],
  // snacks: ["chips", "nuts", "popcorn", "crackers", "pretzels"],
  // condiments: ["ketchup", "mustard", "mayonnaise", "salsa", "soy sauce"],
  // spices: ["salt", "pepper", "cinnamon", "oregano", "paprika"],
  // bakery: ["baguette", "croissant", "muffin", "sourdough", "bagel"],
  // frozenFoods: [
  //   "ice cream",
  //   "frozen vegetables",
  //   "pizza",
  //   "frozen fruits",
  //   "frozen meals",
  // ],
  // cannedGoods: ["beans", "soup", "tomatoes", "tuna", "corn"],
  // deli: ["ham", "turkey", "salami", "provolone", "roast beef"],
  // household: [
  //   "paper towels",
  //   "toilet paper",
  //   "cleaning spray",
  //   "trash bags",
  //   "dish soap",
  // ],
  // personalCare: ["shampoo", "toothpaste", "deodorant", "soap", "razors"],
};


