import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/auth.slice";
// import { setIngredientsData} from "../../store/slices/burgerIngredients.slice";

export default function HomeBanner() {
  const authStore = useSelector(state => state.auth);
  // const burgerIngredients = useSelector(state => state.burgerIngredients); 

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(setUserData({
      displayName: "John Doe",
      email: "john@example.com",
      id: "1234",
      isActive: true
    }))
  }, [])

  console.log(authStore)

  return (
    <section className="bg-green-600">
      <div className="container mx-auto py-8 text-center flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-white">Welcome to BurgerApp</h1>
        <p className="text-sm text-white max-w-xs mx-auto">Where the taste of its burger, matched with the efficiency when you're ordering!</p>
      </div>
    </section>
  );
}