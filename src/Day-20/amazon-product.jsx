import { useParams } from "react-router-dom";

const AmazonProductDetails = () => {
  const { colorKey } = useParams();

  return (
    <div>
      <h1>Welcome to Amazon Product Details</h1>
      <h2>Product Color: {colorKey}</h2>
      <h3 style={{ color: colorKey }}>Hello, Your color Is {colorKey}</h3>
    </div>
  );
};

export default AmazonProductDetails;
