// js/products-data.js
// Shared product catalogue for NicyFoods — used by products.html and product-detail.html

const PRODUCTS = [
  {
    id: "nachni-ragi-laddu", name: "Nachni(Ragi) Laddu", cat: "millet",
    desc: "Nachni (ragi) laddu made with nachni, ghee, cashew, almond, and cardamom. An ancient superfood choice with strong nutritional value.",
    price: 329, weights: [{ label: "1 Kg", price: 350 }, { label: "500 Gm", price: 180 }, { label: "250 Gm", price: 90 }],
    img: "https://nicyfoods.com/images/products/nachni_ladoo/1.jpeg",
    features: ["Good Source of Iron, Calcium and Fiber", "Helps in Weight Management", "Supports Bone Health", "Ancient Superfood Nutrition"],
    ingredients: ["Nachni (Ragi)", "Ghee", "Cashew", "Almond", "Cardamom"],
    benefits: ["Good Source of Iron, Calcium and Fiber", "Helps in Weight Management", "Supports Bone Health", "Ancient Superfood Nutrition"]
  },
  {
    id: "aaliv-laddu", name: "Aaliv Laddu", cat: "traditional",
    desc: "Nutritious Aaliv laddu with haliv, coconut, jaggery, and warming spices.",
    price: 349, weights: [{ label: "1 Kg", price: 440 }, { label: "500 Gm", price: 220 }, { label: "250 Gm", price: 110 }],
    img: "https://nicyfoods.com/images/products/aaliv_ladoo/1.jpeg",
    features: ["Rich in Iron and Protein", "Traditional Postnatal Nutrition", "Naturally Warming", "No Refined Sugar"],
    ingredients: ["Haliv (Aaliv) Seeds", "Coconut", "Jaggery", "Ghee", "Warming Spices"],
    benefits: ["Rich in Iron and Protein", "Traditional Postnatal Nutrition", "Naturally Warming", "No Refined Sugar"]
  },
  {
    id: "dink-laddu", name: "Dink Laddu (Gond Laddu)", cat: "traditional",
    desc: "Traditional Dink (Gond) laddu with dry fruits, jaggery, and ghee.",
    price: 369, weights: [{ label: "1 Kg", price: 540 }, { label: "500 Gm", price: 270 }, { label: "250 Gm", price: 140 }],
    img: "https://nicyfoods.com/images/products/dink_ladoo/1.jpg",
    features: ["Strengthens Joints and Bones", "Great Winter Energy Booster", "Rich in Healthy Fats", "Traditional Recipe"],
    ingredients: ["Edible Gum (Dink)", "Dry Fruits", "Jaggery", "Ghee", "Wheat Flour"],
    benefits: ["Strengthens Joints and Bones", "Great Winter Energy Booster", "Rich in Healthy Fats", "Traditional Recipe"]
  },
  {
    id: "mug-laddu", name: "Mug Laddu", cat: "traditional",
    desc: "Wholesome mug laddu with ghee, jaggery, and dry fruits.",
    price: 339, weights: [{ label: "1 Kg", price: 350 }, { label: "500 Gm", price: 180 }, { label: "250 Gm", price: 90 }],
    img: "https://nicyfoods.com/images/products/mug_ladoo/1.jpeg",
    features: ["High in Plant Protein", "Easy to Digest", "Good Source of Energy", "No Artificial Additives"],
    ingredients: ["Moong Dal", "Ghee", "Jaggery", "Dry Fruits", "Cardamom"],
    benefits: ["High in Plant Protein", "Easy to Digest", "Good Source of Energy", "No Artificial Additives"]
  },
  {
    id: "paustik-laddu", name: "Paustik Laddu", cat: "traditional",
    desc: "Nutrient-rich paustik laddu with wheat flour, dry fruits, dink, and jaggery.",
    price: 379, weights: [{ label: "1 Kg", price: 500 }, { label: "500 Gm", price: 250 }, { label: "250 Gm", price: 130 }],
    img: "https://nicyfoods.com/images/products/paustik_ladoo/1.jpeg",
    features: ["All-Round Nutrition", "Sustained Energy Release", "Rich in Fiber", "Family Favorite Recipe"],
    ingredients: ["Wheat Flour", "Dry Fruits", "Edible Gum (Dink)", "Jaggery", "Ghee"],
    benefits: ["All-Round Nutrition", "Sustained Energy Release", "Rich in Fiber", "Family Favorite Recipe"]
  },
  {
    id: "methi-laddu", name: "Methi Laddu", cat: "traditional",
    desc: "Traditional methi laddu with dry fruits, dink, ghee and jaggery.",
    price: 359, weights: [{ label: "1 Kg", price: 480 }, { label: "500 Gm", price: 240 }, { label: "250 Gm", price: 120 }],
    img: "https://nicyfoods.com/images/products/methi_ladoo/1.jpeg",
    features: ["Supports Postpartum Recovery", "Aids Digestion", "Rich in Iron", "Traditional Warming Recipe"],
    ingredients: ["Fenugreek (Methi)", "Dry Fruits", "Edible Gum (Dink)", "Ghee", "Jaggery"],
    benefits: ["Supports Postpartum Recovery", "Aids Digestion", "Rich in Iron", "Traditional Warming Recipe"]
  },
  {
    id: "sugar-free-methi-laddu", name: "Sugar Free Methi Laddu", cat: "traditional",
    desc: "Sugar-free methi laddu with dates, raisins, seeds, dry fruits, and ghee.",
    price: 389, weights: [{ label: "1 Kg", price: 600 }, { label: "500 Gm", price: 300 }, { label: "250 Gm", price: 150 }],
    img: "https://nicyfoods.com/images/products/sugarfree_methi_ladoo/1.jpeg",
    features: ["Zero Added Sugar", "Naturally Sweetened with Dates", "Diabetic-Friendly Option", "Rich in Fiber"],
    ingredients: ["Fenugreek (Methi)", "Dates", "Raisins", "Seeds", "Dry Fruits", "Ghee"],
    benefits: ["Zero Added Sugar", "Naturally Sweetened with Dates", "Diabetic-Friendly Option", "Rich in Fiber"]
  },
  {
    id: "khajur-laddu", name: "Khajur (Dates) Laddu", cat: "traditional",
    desc: "Khajur laddu with peanut and gulkand for natural sweetness.",
    price: 329, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "https://nicyfoods.com/images/products/khajoor_ladoo/1.jpg",
    features: ["Naturally Sweetened", "Good Source of Iron", "Instant Energy Booster", "No Refined Sugar"],
    ingredients: ["Dates (Khajur)", "Peanut", "Gulkand", "Ghee"],
    benefits: ["Naturally Sweetened", "Good Source of Iron", "Instant Energy Booster", "No Refined Sugar"]
  },
  {
    id: "besan-laddu", name: "Besan (Ghee) Laddu", cat: "traditional",
    desc: "Rich besan ghee laddu with dry fruits and cardamom.",
    price: 349, weights: [{ label: "1 Kg", price: 400 }, { label: "500 Gm", price: 200 }, { label: "250 Gm", price: 100 }],
    img: "https://nicyfoods.com/images/products/besan_ladoo/1.jpg",
    features: ["Classic Festive Favorite", "Rich, Authentic Taste", "Made with Pure Ghee", "No Preservatives"],
    ingredients: ["Besan (Gram Flour)", "Ghee", "Sugar", "Dry Fruits", "Cardamom"],
    benefits: ["Classic Festive Favorite", "Rich, Authentic Taste", "Made with Pure Ghee", "No Preservatives"]
  },
  {
    id: "murmura-laddu", name: "Murmura Laddu", cat: "traditional",
    desc: "Light and crunchy murmura laddu sweetened with jaggery.",
    price: 229, weights: [{ label: "1 Kg", price: 200 }, { label: "500 Gm", price: 100 }, { label: "250 Gm", price: 50 }],
    img: "https://nicyfoods.com/images/products/murmura_ladoo/1.jpeg",
    features: ["Light and Low-Calorie Snack", "Naturally Sweetened", "Crunchy Texture", "Great for Kids"],
    ingredients: ["Puffed Rice (Murmura)", "Jaggery", "Peanuts"],
    benefits: ["Light and Low-Calorie Snack", "Naturally Sweetened", "Crunchy Texture", "Great for Kids"]
  },
  {
    id: "rajgira-laddu", name: "Rajgira Laddu", cat: "millet",
    desc: "Nutritious rajgira laddu with natural jaggery sweetness.",
    price: 249, weights: [{ label: "1 Kg", price: 240 }, { label: "500 Gm", price: 120 }, { label: "250 Gm", price: null }],
    img: "https://nicyfoods.com/images/products/rajgira_ladoo/1.jpeg",
    features: ["Gluten-Free Superfood", "Rich in Protein and Calcium", "Popular Fasting Snack", "Naturally Sweetened"],
    ingredients: ["Rajgira (Amaranth)", "Jaggery"],
    benefits: ["Gluten-Free Superfood", "Rich in Protein and Calcium", "Popular Fasting Snack", "Naturally Sweetened"]
  },
  {
    id: "peanut-laddu", name: "Peanut Laddu", cat: "traditional",
    desc: "Energy booster peanut laddu made with jaggery and no added sugar.",
    price: 299, weights: [{ label: "1 Kg", price: 220 }, { label: "500 Gm", price: 110 }, { label: "250 Gm", price: 60 }],
    img: "https://nicyfoods.com/images/products/peanut_ladoo/1.jpeg",
    features: ["High Protein Snack", "No Added Sugar", "Great Pre/Post Workout Bite", "Budget-Friendly Energy"],
    ingredients: ["Peanuts", "Jaggery"],
    benefits: ["High Protein Snack", "No Added Sugar", "Great Pre/Post Workout Bite", "Budget-Friendly Energy"]
  },
  {
    id: "til-laddu", name: "Til (Sesame) Laddu", cat: "traditional",
    desc: "Calcium-rich til laddu with sesame, peanut, and jaggery.",
    price: 259, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "https://nicyfoods.com/images/products/til_ladoo/1.jpeg",
    features: ["Rich Source of Calcium", "Good for Winter Wellness", "Naturally Sweetened", "Traditional Makar Sankranti Treat"],
    ingredients: ["Sesame Seeds (Til)", "Peanut", "Jaggery"],
    benefits: ["Rich Source of Calcium", "Good for Winter Wellness", "Naturally Sweetened", "Traditional Makar Sankranti Treat"]
  },
  {
    id: "beet-laddu", name: "Beet (Beetroot) Laddu", cat: "traditional",
    desc: "Nutritious beetroot laddu with peanut and jaggery.",
    price: 279, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "https://nicyfoods.com/images/products/beetroot_ladoo/1.jpeg",
    features: ["Supports Healthy Blood Count", "Natural Root Vegetable Goodness", "Antioxidant Rich", "Naturally Sweetened"],
    ingredients: ["Beetroot", "Peanut", "Jaggery"],
    benefits: ["Supports Healthy Blood Count", "Natural Root Vegetable Goodness", "Antioxidant Rich", "Naturally Sweetened"]
  },
  {
    id: "tulshi-laddu", name: "Tulshi Laddu", cat: "herbal",
    desc: "Herbal tulshi laddu with peanut and jaggery.",
    price: 289, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "https://nicyfoods.com/images/products/tulshi_ladoo/1.jpeg",
    features: ["Boosts Immunity", "Herbal Wellness Recipe", "Naturally Sweetened", "Supports Respiratory Health"],
    ingredients: ["Tulsi (Holy Basil)", "Peanut", "Jaggery"],
    benefits: ["Boosts Immunity", "Herbal Wellness Recipe", "Naturally Sweetened", "Supports Respiratory Health"]
  },
  {
    id: "chocolate-laddu", name: "Chocolate Laddu", cat: "traditional",
    desc: "Chocolate laddu with cocoa, peanut, and jaggery.",
    price: 299, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "https://nicyfoods.com/images/products/chocolate_ladoo/1.jpg",
    features: ["Kid-Friendly Healthy Treat", "Naturally Sweetened with Jaggery", "Rich Cocoa Flavor", "No Refined Sugar"],
    ingredients: ["Cocoa", "Peanut", "Jaggery"],
    benefits: ["Kid-Friendly Healthy Treat", "Naturally Sweetened with Jaggery", "Rich Cocoa Flavor", "No Refined Sugar"]
  },
  {
    id: "dryfruit-laddu", name: "Dryfruit Laddu", cat: "traditional",
    desc: "Premium dryfruit laddu packed with nuts, seeds, and natural sweetness.",
    price: 449, weights: [{ label: "1 Kg", price: 640 }, { label: "500 Gm", price: 320 }, { label: "250 Gm", price: 160 }],
    img: "https://nicyfoods.com/images/products/dryfruit_ladoo/1.jpg",
    features: ["Loaded with Premium Nuts", "Rich Source of Healthy Fats", "Great Festive Gifting Option", "No Maida or Preservatives"],
    ingredients: ["Almonds", "Cashews", "Pistachios", "Dates", "Seeds", "Ghee"],
    benefits: ["Loaded with Premium Nuts", "Rich Source of Healthy Fats", "Great Festive Gifting Option", "No Maida or Preservatives"]
  },
  {
    id: "sugar-free-dryfruit-laddu", name: "Sugar Free Dryfruit Laddu", cat: "traditional",
    desc: "Sugar-free dryfruit laddu with nuts, seeds, and natural date sweetness.",
    price: 499, weights: [{ label: "1 Kg", price: 800 }, { label: "500 Gm", price: 400 }, { label: "250 Gm", price: 200 }],
    img: "https://nicyfoods.com/images/products/sugarfree_dryfruit_ladoo/1.jpeg",
    features: ["Zero Added Sugar", "Naturally Sweetened with Dates", "Premium Nut Blend", "Diabetic-Friendly Option"],
    ingredients: ["Almonds", "Cashews", "Pistachios", "Dates", "Seeds"],
    benefits: ["Zero Added Sugar", "Naturally Sweetened with Dates", "Premium Nut Blend", "Diabetic-Friendly Option"]
  },
  {
    id: "bajri-laddu", name: "Bajri Laddu", cat: "millet",
    desc: "Warm and nourishing bajri laddu with ghee, nuts, and cardamom.",
    price: 319, weights: [{ label: "1 Kg", price: 400 }, { label: "500 Gm", price: 200 }, { label: "250 Gm", price: 100 }],
    img: "images/products/bajri-laddu.jpg",
    features: ["Rich in Fiber and Iron", "Naturally Warming Grain", "Supports Digestive Health", "Wholesome Millet Nutrition"],
    ingredients: ["Bajri (Pearl Millet)", "Ghee", "Nuts", "Cardamom", "Jaggery"],
    benefits: ["Rich in Fiber and Iron", "Naturally Warming Grain", "Supports Digestive Health", "Wholesome Millet Nutrition"]
  },
  {
    id: "sugar-free-nachni-laddu", name: "Sugar Free Nachni Laddu", cat: "millet",
    desc: "Sugar-free nachni laddu with dates, nuts, ghee, and cardamom.",
    price: 359, weights: [{ label: "1 Kg", price: 500 }, { label: "500 Gm", price: 250 }, { label: "250 Gm", price: 130 }],
    img: "images/products/sugar-free-nachni-laddu.jpg",
    features: ["Zero Added Sugar", "Good Source of Iron and Calcium", "Naturally Sweetened with Dates", "Ancient Superfood Nutrition"],
    ingredients: ["Nachni (Ragi)", "Dates", "Nuts", "Ghee", "Cardamom"],
    benefits: ["Zero Added Sugar", "Good Source of Iron and Calcium", "Naturally Sweetened with Dates", "Ancient Superfood Nutrition"]
  },
  {
    id: "bel-laddu", name: "Bel Laddu", cat: "herbal",
    desc: "Traditional bel fruit laddu with herbal goodness.",
    price: 329, weights: [{ label: "1 Kg", price: 300 }, { label: "500 Gm", price: 150 }, { label: "250 Gm", price: 80 }],
    img: "images/products/bel-laddu.jpg",
    features: ["Supports Digestive Health", "Traditional Herbal Recipe", "Naturally Sweetened", "Cooling Wellness Snack"],
    ingredients: ["Bel Fruit (Wood Apple)", "Jaggery", "Ghee"],
    benefits: ["Supports Digestive Health", "Traditional Herbal Recipe", "Naturally Sweetened", "Cooling Wellness Snack"]
  },
  {
    id: "millet-laddu", name: "Millet Laddu", cat: "millet",
    desc: "Wholesome millet laddu rich in iron and calcium.",
    price: 299, weights: [{ label: "1 Kg", price: 400 }, { label: "500 Gm", price: 200 }, { label: "250 Gm", price: 100 }],
    img: "images/products/millet-laddu.jpg",
    features: ["Rich in Iron and Calcium", "Wholesome Millet Blend", "Gluten-Friendly Nutrition", "Naturally Sweetened"],
    ingredients: ["Mixed Millets", "Jaggery", "Ghee", "Nuts"],
    benefits: ["Rich in Iron and Calcium", "Wholesome Millet Blend", "Gluten-Friendly Nutrition", "Naturally Sweetened"]
  },
  {
    id: "moringa-laddu", name: "Moringa Laddu", cat: "herbal",
    desc: "Nutrient-rich moringa laddu for immunity and energy.",
    price: 339, weights: [{ label: "1 Kg", price: 500 }, { label: "500 Gm", price: 250 }, { label: "250 Gm", price: 130 }],
    img: "images/products/moringa-laddu.jpg",
    features: ["Boosts Immunity", "Rich in Vitamins and Minerals", "Natural Energy Booster", "Herbal Superfood"],
    ingredients: ["Moringa Leaf Powder", "Jaggery", "Ghee", "Nuts"],
    benefits: ["Boosts Immunity", "Rich in Vitamins and Minerals", "Natural Energy Booster", "Herbal Superfood"]
  },
  {
    id: "motichur-laddu", name: "Motichur Laddu", cat: "traditional",
    desc: "Classic motichur laddu made with besan and sugar.",
    price: 309, weights: [{ label: "1 Kg", price: 240 }, { label: "500 Gm", price: 120 }, { label: "250 Gm", price: 60 }],
    img: "images/products/motichur-laddu.jpg",
    features: ["Classic Festive Sweet", "Soft, Melt-in-Mouth Texture", "Traditional Recipe", "Perfect for Celebrations"],
    ingredients: ["Besan (Gram Flour)", "Sugar", "Ghee", "Cardamom"],
    benefits: ["Classic Festive Sweet", "Soft, Melt-in-Mouth Texture", "Traditional Recipe", "Perfect for Celebrations"]
  },
  {
    id: "urad-dal-laddu", name: "Urad Dal Laddu", cat: "traditional",
    desc: "Wholesome urad dal laddu with ghee and jaggery.",
    price: 339, weights: [{ label: "1 Kg", price: 400 }, { label: "500 Gm", price: 200 }, { label: "250 Gm", price: 100 }],
    img: "images/products/urad-dal-laddu.jpg",
    features: ["High in Protein", "Traditional Winter Recipe", "Good Source of Energy", "Naturally Sweetened"],
    ingredients: ["Urad Dal", "Ghee", "Jaggery", "Dry Fruits"],
    benefits: ["High in Protein", "Traditional Winter Recipe", "Good Source of Energy", "Naturally Sweetened"]
  },
];

const CATEGORY_LABEL = { millet: "MILLET", traditional: "TRADITIONAL", herbal: "HERBAL" };