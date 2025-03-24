import { useEffect, useState } from "react";
import SecondLoaderView from "./secondloader";
import axios from "axios";

const SecondProductListHOC = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        setProducts(response.data);
      } catch (err) {
        console.log("Error: ", err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <SecondLoaderView
      loading={isLoading}
      loadingMsg="Please wait"
      data={products}
      noDataMsg="No products available"
    >
      <div>
        <h1>Product List</h1>
        <hr />
        <ul>
          <p>{products?.title}</p>
        </ul>
      </div>
    </SecondLoaderView>
  );
};

export default SecondProductListHOC;
