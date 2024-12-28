import { Route, Routes, useNavigate } from "react-router-dom";
import NavTopBar from "./components/NavTopBar/NavTopBar";
import Home from "./components/Home/Home";
import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";
import Contact from "./components/Contact/Contact";
import NoMatch from "./components/NoMatch/NoMatch";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Reviews from "./components/Reviews/Reviews";
import Specifications from "./components/Specification/Specification";

function App() {
  const route = useNavigate();

  const handleNavigation = () => {
    route("/products");
  };

  return (
    <>
      <NavTopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/products/:productId" element={<ProductDetails />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="specifications" element={<Specifications />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <button className="text-2xl bg-primary p-3" onClick={handleNavigation}>
        Click me
      </button> */}
    </>
  );
}

export default App;
