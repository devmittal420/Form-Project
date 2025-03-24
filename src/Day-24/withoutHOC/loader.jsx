import { useEffect, useState } from "react";
import axios from "axios";
import "/src/index.css";

const ProductList = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    // axios
    //   .get("https://fakestoreapi.com/products")
    //   .then((results) => {
    //     setProducts(results.data);
    //   })
    //   .catch((err) => console.log("Err: ", err))
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    (async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        console.log("Error: ", err);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  /**
   * 1.  Check if products is null or isLoading true
   * 1.1 If true, then start showing spinner & return
   * 2.  If products are empty
   * 2.1 Show, no products available & return
   * 3. Render product list
   */

  if (products === null || isLoading) {
    return <div className="loader"></div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <hr />
      <ul>
        {products?.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
