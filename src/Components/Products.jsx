import {React, useState,useEffect } from "react";
// import Product from "./Product";
const Products =()=> {
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const fetchProducts = async ()=>{
      const res= await fetch('https://fakestoreapi.com/products');
      const data=await res.json();
      console.log(data);
      setProducts(data)
          
    };
   fetchProducts();
  }, []); 
  
  return <div className="products">
    {
      products.map(product=>(
          <div className="card" key={product.id}>
            <img src={product.image} alt="image" />
            <h2>{product.title}</h2>
            <h3>₹{product.price+500}</h3>
            <button>Add to cart</button>
          </div>

      ))
    }
  </div>;
}

export default Products;
