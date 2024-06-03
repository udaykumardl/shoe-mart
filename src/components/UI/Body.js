import React from "react";
import "./Body.css";
import AddNewItem from "./AddNewItem";
import ShowItem from "./ShowItem";

const Body = () => {
  return (
    <div className="body-comp">
      <h2>Items</h2>
      <AddNewItem />
      <ShowItem />
    </div>
  );
};

export default Body;