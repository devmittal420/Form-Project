import { useEffect, useState } from "react";

const CallApi = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result))
      .catch((err) => console.log("err".err));
  }, []);
  console.log("products", products);
};

export default CallApi;
