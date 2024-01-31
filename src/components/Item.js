import React,{ useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(true);
   
  function  handleClick() {
      setIsAdded((isAdded)=>!isAdded)
  }
  return (
    <li className={isAdded ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isAdded ? 'Add to Cart':'Remove From Cart'}</button>
    </li>
  );
}

export default Item;
