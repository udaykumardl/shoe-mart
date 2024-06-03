import React, { useContext } from "react";
import "./ShowItem.css";
import CartContext from "../../../Cart/CartContext";

const ShowItem = () => {
  const {
    dataList,
    setDataList,
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
  } = useContext(CartContext);

  const handleSizeSelection = (obj, size) => {
    const { quantityAvailable, selected, price } = obj;
    if (quantityAvailable[size] > 0) {
      quantityAvailable[size]--;
      selected[size]++;
      obj.totalPrice =
        (selected.Large + selected.Medium + selected.Small) * parseInt(price);

      const updatedData = dataList.map(item =>
        item.id === obj.id
          ? {
              ...item,
              quantityAvailable: { ...item.quantityAvailable, [size]: quantityAvailable[size] },
            }
          : item
      );

      setDataList(updatedData);

      const existingItem = cartItems.find(item => item.id === obj.id);
      if (existingItem) {
        const updatedCartItems = cartItems.map(item =>
          item.id === obj.id
            ? { ...item, selected: { ...item.selected, [size]: selected[size] }, totalPrice: obj.totalPrice }
            : item
        );
        setCartItems(updatedCartItems);
      } else {
        setCartItems([...cartItems, obj]);
      }
      setCartCount(cartCount + 1);
    }
  };

  return (
    <div className="items">
      {dataList.length === 0 ? (
        <h2>Sorry No products are available at the moment!</h2>
      ) : (
        dataList.map((item, index) => (
          <li className="item-card" key={index}>
            <span>{item.name}</span>
            <img className="img" src={item.image} alt="logo" />
            <span>Price: ${item.price}</span>
            <span>
              <button className="input-btn" onClick={() => handleSizeSelection(item, 'Large')}>
                L {item.quantityAvailable.Large}
              </button>
              <button className="input-btn" onClick={() => handleSizeSelection(item, 'Medium')}>
                M {item.quantityAvailable.Medium}
              </button>
              <button className="input-btn" onClick={() => handleSizeSelection(item, 'Small')}>
                S {item.quantityAvailable.Small}
              </button>
            </span>
          </li>
        ))
      )}
    </div>
  );
};

export default ShowItem;