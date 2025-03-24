import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FetchProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProductData(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {productData.map((item) => (
          <li key={item.id}>
            <Link to={`/details/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchProductList;
