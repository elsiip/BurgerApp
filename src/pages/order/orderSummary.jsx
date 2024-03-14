import React from 'react';
import { formatNumber } from '../../utils/helper';

function OrderSummary({ selectedIngredients }) {
  const grandTotal = selectedIngredients.reduce(
    (total, ingredient) => total + ingredient.price * ingredient.quantity,
    0
  );

  return (
    <div className="container w-96 h-auto mt-10 mx-auto border border-black p-2 rounded-xl">
      <h2 className="text-xl font-bold mb-2">Order Summary</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left font-semibold">Ingredient</th>
            <th className="text-right font-semibold">Price</th>
            <th className="text-right font-semibold">Quantity</th>
            <th className="text-right font-semibold">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {selectedIngredients.map((ingredient) => {
            const subTotal = ingredient.price * ingredient.quantity;
            return (
              <tr key={ingredient.id}>
                <td>{ingredient.name}</td>
                <td className="text-right">{formatNumber(ingredient.price)}</td>
                <td className="text-right">{ingredient.quantity}</td>
                <td className="text-right">Rp.{formatNumber(subTotal)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr className="my-2" />
      <div className="flex justify-between font-bold text-lg">
        <span>Grand total:</span>
        <span>Rp{formatNumber(grandTotal)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
