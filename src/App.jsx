import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Product from "./Component/Product";
import Cart from "./Component/Cart";

function App() {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   const isProductInCart = cartItems.some((item) => item.id === product.id);

  //   if (isProductInCart) {
  //     const updatedCart = cartItems.map((item) =>
  //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCartItems(updatedCart);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   }
  // };
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
