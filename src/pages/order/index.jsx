import { useState } from "react";
import OrderBurgerDisplay from "./orderBurgerDisplay";
import OrderHeader from "./orderHeader";
import OrderIngredientsPicker from "./orderIngredientsPicker";

const allIngredients = [
  {
    id: "cheese",
    name: "Cheese",
    price: 5000,
  },
  {
    id: "lettuce",
    name: "Lettuce",
    price: 1000,
  },
  {
    id: "tomato",
    name: "Tomato",
    price: 2500,
  },
  {
    id: "pickles",
    name: "Pickles",
    price: 2000,
  },
  {
    id: "meat",
    name: "Meat",
    price: 14000,
  },
  {
    id: "mayo",
    name: "Mayo",
    price: 4000,
  },
  {
    id: "sauce",
    name: "Sauce",
    price: 4000,
  },
];

export default function OrderPage() {
  const [selectedIngredients, selectedIngredientsSet] = useState([]);

  function manageIngredients(type, id, idx) {
    if (type === "add") {
      selectedIngredientsSet((prev) => [...prev, id]);
    }
    if (type === "remove") {
      selectedIngredientsSet((prev) => {
        const filtered = [...prev].filter((_, index) => index !== idx);
        return filtered;
      });
    }
  }
  console.log(selectedIngredients);
  return (
    <section>
      <OrderHeader
        allIngredients={allIngredients}
        selectedIngredients={selectedIngredients}
        onReset={() => selectedIngredientsSet([])}
      />
      <OrderBurgerDisplay
        selectedIngredients={selectedIngredients}
        removeIngredient={(idx) => manageIngredients("remove", undefined, idx)}
      />
      <OrderIngredientsPicker
        allIngredients={allIngredients}
        manageIngredients={(id) => manageIngredients("add", id)}
      />
    </section>
  );
}