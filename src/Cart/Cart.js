import React, { useContext, useEffect } from "react";
import CartContext from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import Modal from "../components/UI/Modal";

const Cart = (props) => {
  const { cartItems, setBill } = useContext(CartContext);

  useEffect(() => {
    const totalPrice = cartItems.reduce(
      (acc, curr) => acc + curr.totalPrice,
      0
    );
    setBill(totalPrice);
  });

  return (
    <Modal onClose={props.onClose}>
      <CartItem />
    </Modal>
  );
};

export default Cart;