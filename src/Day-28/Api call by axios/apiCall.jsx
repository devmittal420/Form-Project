import { useEffect, useState } from "react";
import axios from "axios";

// const ApiCalling = () => {
//   const [apiCall, setApiCall] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         console.log("response: ", response.data);
//         setApiCall(response.data);
//       } catch (err) {
//         console.log("err: ", err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {apiCall.map((item) => (
//         <div key={item.id}>
//           <p>{item.title}</p>
//           <p>{item.rating.rate}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ApiCalling;

const ApiCall = () => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("response: ", response.data);
        setProduct(response.data);
      } catch (err) {
        console.log("Err: ", err);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = product.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filteredProducts.length);

  return (
    <div>
      <input
        type="text"
        value={search}
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>{item.rating.rate}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};
export default ApiCall;

