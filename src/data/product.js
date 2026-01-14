// src/data/product.js

import whiteBanana from "../assets/products/white-banana.png";
import rawBanana from "../assets/products/raw-banana.png";
import khandeshi from "../assets/products/khandeshi.png";

// If in future any image is missing, you can add a placeholder in assets/products/placeholder.png
// import placeholder from "../assets/products/placeholder.png";

const products = [
  {
    id: 1,
    name: "White Green Banana Powder",
    image: whiteBanana, // fallback: placeholder
    pricePerKg: 280,
    description: [
      "Fine quality white green banana powder",
      "Used in baby food & health mixes",
      "100% natural & gluten-free",
    ],
    packaging: "1kg, 5kg, 25kg HDPE Bags",
    details: {
      cultivation: "Natural Farming",
      packagingType: "Food Grade HDPE",
      energy: "346 kcal",
      protein: "3.9 g",
      fats: "0.6 g",
      carbohydrates: "80 g",
      shelfLife: "12 Months",
    },
  },
  {
    id: 2,
    name: "Raw Green Banana Powder",
    image: rawBanana,
    pricePerKg: 240,
    description: [
      "Processed from fresh raw green bananas",
      "High resistant starch content",
      "Ideal for diabetic-friendly foods",
    ],
    packaging: "1kg, 5kg, 25kg",
    details: {
      cultivation: "Traditional",
      packagingType: "HDPE Bags",
      energy: "330 kcal",
      protein: "3.5 g",
      fats: "0.5 g",
      carbohydrates: "78 g",
      shelfLife: "12 Months",
    },
  },
  {
    id: 3,
    name: "Assal Khandeshi Masala",
    image: khandeshi,
    pricePerKg: 420,
    description: [
      "Authentic Khandesh spice blend",
      "Traditional recipe",
      "Strong aroma & natural color",
    ],
    packaging: "500g, 1kg, 5kg",
    details: {
      cultivation: "Natural Spices",
      packagingType: "Vacuum Sealed",
      energy: "312 kcal",
      protein: "12 g",
      fats: "9 g",
      carbohydrates: "48 g",
      shelfLife: "9 Months",
    },
  },
];

export default products;