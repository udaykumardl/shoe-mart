import React, { useMemo, useState } from "react";
import CartContext from "./CartContext";
import { data } from "../constants";

const CartProvider = ({ children }) => {
  const [dataList, setDataList] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [bill, setBill] = useState(0);
  const [cartCount, setCartCount] = useState(null);

  const cartContext = useMemo(() => {
    return {
      dataList,
      setDataList,
      cartItems,
      setCartItems,
      bill,
      setBill,
      cartCount,
      setCartCount,
    };
  }, [dataList, cartItems, bill, cartCount]);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;