import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const WithoutUseMemo = () => {
  const [products, setProducts] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(10);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log("1. @AJ Response: ", response);
        setProducts(response.data);

        const afterFilters = response.data.filter(
          (product) => product.price < selectedPrice
        );

        setFilteredProducts(afterFilters);
      } catch (err) {
        console.log("Err: ", err);
      }
    })();
  }, []);

  // const fProduct = products?.filter((item) => {
  //   console.log("2. ReCalculating: ", item.id);
  //   return item.price < selectedPrice;
  // });

  useEffect(() => {
    const afterFilters = products?.filter(
      (product) => product.price < selectedPrice
    );
    setFilteredProducts(afterFilters);
  }, [selectedPrice]);

  console.log("1. @AJ Re-Render: ", products, filteredProducts);

  return (
    <div>
      <h1>My Products : {filteredProducts?.length}</h1>
      <div>
        <button onClick={() => setSelectedPrice(10)}>Below 10</button>
        <button onClick={() => setSelectedPrice(20)}>Below 20</button>
        <button onClick={() => setSelectedPrice(30)}>Below 30</button>
        <button onClick={() => setCounter(counter + 1)}>Increment </button>
      </div>
      <div>
        <ul>
          {filteredProducts?.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default WithoutUseMemo;