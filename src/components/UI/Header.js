import React, { useContext } from "react";
import "./Header.css";


const Header = (props) => {
  

  const handleClick = () => {
    props.onShowCart();
  };

  return (
    <div className="header">
      <h1 className="title">👟SHOE MART👟</h1>
      <div className="options">
        <li className="header-option">Home🏠</li>
        <li className="header-option">About Us👤</li>
        <li className="header-option">Contact us📞</li>
        <button className="header-option" onClick={handleClick}>
          Cart🛒
        </button>
      </div>
    </div>
  );
};

export default Header;