import axios from "axios";
import { useEffect } from "react";

const ApiCalling = () => {
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data, "response");
      } catch (err) {
        console.log("err: ", err);
      }
    };
    fetchProduct();
  }, []);

  return <div></div>;
};

export default ApiCalling;
