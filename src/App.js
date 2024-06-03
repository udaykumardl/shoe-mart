import Header from "./components/UI/Header";
import "./App.css";
import Body from "./components/UI/Body/Body";
import CartProvider from "./Cart/CartProvider";
import { useState } from "react";
import Cart from "./Cart/Cart";

function App() {
  const [cartShow, setCartShow] = useState(false);

  const closeCart = () => {
    setCartShow(false);
  };

  const openCart = () => {
    setCartShow(true);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={closeCart} />}
      <Header onShowCart={openCart} />
      <Body />
      <div className="footer-bottom">
        <p>&copy; 2024 Shoe Mart. All rights reserved.</p>
      </div>
    </CartProvider>
  );
}

export default App;