import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import OrderPage from "./pages/order";
import Feedback from "./pages/feedback";
import Post from "./pages/post"
import Recipe from "./pages/recipe";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/post" element={<Post />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;