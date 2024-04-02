import { useEffect, useState } from "react";
import OrderBurgerDisplay from "./orderBurgerDisplay";
import OrderHeader from "./orderHeader";
import OrderIngredientsPicker from "./orderIngredientsPicker";
import { Link, useLocation, useRoutes } from "react-router-dom";
import Navbar from "../../components/navbar";

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
  const [isReachMax, isReachMaxSet] = useState(false);
  const [isDone, isDoneSet] = useState(false);

  const { search } = useLocation();

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

  useEffect(() => {
    if (selectedIngredients.length >= 10) {
      isReachMaxSet(true);
    }
  }, [selectedIngredients]);

  useEffect(() => {
    if (new URLSearchParams(search).get("done") === "true") {
      isDoneSet(true);
    }
  }, [search]);

  if (isDone)
    return (
      <div style={{ paddingTop: "20rem" }}>
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="font-bold">Your order has been received</h1>
            <Link to="/">Back to home</Link>
          </div>
        </div>
      </div>
    );

  function removeIngredient(idx) {
    selectedIngredientsSet((prev) => {
      const updatedIngredients = [...prev];
      updatedIngredients.splice(idx, 1); // Hapus elemen pada index yang diberikan
      return updatedIngredients;
    });
  }

  return (
    <div style={{ paddingTop: "4rem" }}>
      <Navbar />
      <section>
        {/* <OrderHeader allIngredients={allIngredients} selectedIngredients={selectedIngredients} onReset={() => selectedIngredientsSet([])} /> */}
        <OrderHeader selectedIngredients={selectedIngredients} onReset={() => selectedIngredientsSet([])} />
        <OrderBurgerDisplay selectedIngredients={selectedIngredients} removeIngredient={(idx) => manageIngredients("remove", undefined, idx)} />
        <OrderIngredientsPicker allIngredients={allIngredients} manageIngredients={(id) => manageIngredients("add", id)} isReachMax={isReachMax} />
      </section>
    </div>
  );
}