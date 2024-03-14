import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import OrderPage from "./pages/order";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
}

export default App;