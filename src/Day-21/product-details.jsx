import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FetchProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((data) => data.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log("Error:", err));
  }, [productId]);

  if (!product) {
    return <p>No product found!</p>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.image} width="200" height="200" />
    </div>
  );
};

export default FetchProductDetails;
