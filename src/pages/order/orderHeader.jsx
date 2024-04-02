import { Link } from "react-router-dom";
import Button from "../../components/button";
import { formatNumber } from "../../utils/helper";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OrderHeader({ selectedIngredients, onReset,  }) {
  const navigate = useNavigate();
  const burger = useSelector((state) => state?.burger?.burger);
  const totalPrice = burger?.TotalPrice || 0;
  const isEmptySelectedIngredients = selectedIngredients.length === 0;

  console.log(selectedIngredients);
  return (
    <section className="container mx-auto py-14">
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-bold">Total: Rp. {formatNumber(totalPrice)}</h3>
        <div className="flex items-center gap-4 max-w-sm w-full">
          <Link to="/order?done=true">
            <Button disabled={isEmptySelectedIngredients}>Order Burger</Button>
          </Link>
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
