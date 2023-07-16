import React, { useState, useEffect } from "react";
import './style.css'
import { Link } from 'react-router-dom';
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const result = await response.json();
        setProducts(result.products);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getProducts();
  }, []);
  console.log({ products });
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
    <div className="product">
      {products.map((item) => (
        <div key={item.id} className="key">
          <h3>{item.title}</h3>
          <img  src={item.images[3]} className="image" />
        <p className="price">Price: ksh{item.price}</p>
        <button className="cart">Add to cart</button>
        <br/>
        <br/>
        <Link to={`/ProductDetails/${item.id}` }className="buton">
            <button type="submit" className="button">View details</button >
          </Link>
          <p className="category">Category: {item.category}</p>
          <p className="stock">Stock quantity: {item.stock}</p>
          <p className="rate">Ratings: {item.rating}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
