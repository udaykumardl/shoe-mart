import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "./CartContext";

const CartItem = () => {
  const { cartItems, setCartItems, bill } = useContext(CartContext);

  return (
    <div className="cart-div">
      <h1>Cart</h1>
      {cartItems.map((item, index) => (
        <li className="cart-list" key={index}>
          <div className="cart-item">
            <img className="cart-item-img" src={item.image} alt="logo" />
            <div>{item.name}</div>
            <div>${item.price}</div>
            {item.selected.Large !== null && (
              <span>L:{item.selected.Large}</span>
            )}
            {item.selected.Medium !== null && (
              <span>M:{item.selected.Medium}</span>
            )}
            {item.selected.Small !== null && (
              <span>S:{item.selected.Small}</span>
            )}
            <span>{item.totalprice}</span>
          </div>
        </li>
      ))}
      <div>
        <h2>Total: {bill}</h2>
      </div>
      <button className="cart-btn" onClick={() => {setCartItems([])}}>Clear Cart</button>
      <button className="cart-btn" onClick={() => {alert('Order Successful')}}>Order</button>
    </div>
  );
};

export default CartItem;