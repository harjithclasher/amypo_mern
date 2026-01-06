import React from "react";

const ProductList = ({cart = [] , setCart}) => {
    const addItem = (price)=>
    {
        setCart((C)=>[...C , price])
    }
  return (
    <div>
      <button  onClick ={()=>addItem(100)}>Add Rs.100</button>
      <button onClick ={()=>addItem(200)}>Add Rs.200</button>
      <button onClick ={()=>addItem(300)}>Add Rs.300</button>
      <button onClick ={()=>addItem(400)}>Add Rs.400</button>
    </div>
  );
};

export default ProductList;
