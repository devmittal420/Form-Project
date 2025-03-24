import { useState } from "react";

const Conditional = () => {
  const [button, setButton] = useState("Akash");

  const onHandleClick = () => {
    button === "Akash" ? setButton("Hi") : setButton("Akash");
  };
  return (
    <div>
      <p>{button}</p>
      <button onClick={onHandleClick}>Change Name</button>
    </div>
  );
};

export default Conditional;
