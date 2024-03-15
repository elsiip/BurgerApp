import React from "react";
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom
import Button from "../../components/button";
import { formatNumber } from "../../utils/helper";

export default function OrderHeader({
  allIngredients = [],
  selectedIngredients = [],
  onReset,
}) {
  const history = useHistory(); // Initialize useHistory

  const isEmptySelectedIngredients = selectedIngredients.length === 0;

  const totalCost = () => {
    const filterBySelectedIngredients = selectedIngredients.map(
      (id) => allIngredients.find((item) => item?.id === id)?.price
    );
    return `Rp${formatNumber(
      filterBySelectedIngredients.reduce((a, b) => a + b, 0)
    )}`;
  };

  // Function to handle order completion
  const handleOrderCompletion = () => {
    // Redirect to /order=done
    history.push("/order=done");
  };

  return (
    <section className="container mx-auto py-14">
      <div className="flex justify-between items-center">
        {!isEmptySelectedIngredients && (
          <div>
            <h3 className="text-3xl font-bold">Total: {totalCost()}</h3>
          </div>
        )}
        <div className="flex items-center gap-4 max-w-sm w-full">
          <Button
            disabled={isEmptySelectedIngredients}
            onClick={handleOrderCompletion} // Add onClick event to call handleOrderCompletion
          >
            Order Burger
          </Button>
          {!isEmptySelectedIngredients && (
            <Button variant="secondary" onClick={onReset}>
              Reset
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
