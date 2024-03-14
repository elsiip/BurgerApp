import { useState } from 'react';
import { formatNumber } from '../../utils/helper';
import OrderSummary from './orderSummary';

export default function OrderIngredientsPicker({
  allIngredients = [],
  manageIngredients,
  isReachMax
}) {
  const disabledStyle = "bg-gray-400"

  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientSelection = (ingredientId) => {
    if (isReachMax) return;

    const ingredientIndex = selectedIngredients.findIndex(
      (ingredient) => ingredient.id === ingredientId
    );

    if (ingredientIndex !== -1) {
      const updatedIngredients = [...selectedIngredients];
      updatedIngredients[ingredientIndex].quantity++;
      setSelectedIngredients(updatedIngredients);
    } else {
      const ingredientToAdd = allIngredients.find(
        (ingredient) => ingredient.id === ingredientId
      );
      setSelectedIngredients([
        ...selectedIngredients,
        { ...ingredientToAdd, quantity: 1 },
      ]);
    }

    manageIngredients(ingredientId);
  };

  return (
    <section className="container mx-auto">
      {isReachMax && <p className="text-center">You reach the maximal quantity of ingredients</p>}
      <div className="grid grid-cols-4 gap-8 max-w-sm w-full mx-auto">
        {allIngredients.map((item) => (
          <div
            key={item?.id}
            className={`flex flex-col items-center cursor-pointer hover:scale-[0.95] active:opacity-80 bg-amber-300 rounded-md p-2 ${isReachMax && disabledStyle}`}
            onClick={() => handleIngredientSelection(item?.id)}
          >
            <p className="font-bold">{item?.name}</p>
            <p className="text-sm">Rp{formatNumber(item?.price)}</p>
            <p className="text-xs">Jumlah: {selectedIngredients.find((ingredient) => ingredient.id === item.id)?.quantity || 0}</p>
          </div>
        ))}
      </div>
      <OrderSummary selectedIngredients={selectedIngredients} />
    </section>
  );
}
