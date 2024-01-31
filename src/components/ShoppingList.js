import React,{ useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory]=useState('All')
  
  function handleChange(e){
    setSelectedCategory(e.target.value);
  }

  const productsToDisplay = items.filter((item)=>{
    if(selectedCategory === 'All'){
      return true;
    }
    else{ return selectedCategory === item.category }
  })

  const products = productsToDisplay.map((item)=>{
    return(<Item key={item.id} name={item.name} category={item.category} />)
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e)=>handleChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {products}
      </ul>
    </div>
  );
}

export default ShoppingList;
