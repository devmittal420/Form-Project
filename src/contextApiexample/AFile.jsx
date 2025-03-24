import React from "react";
import { useCount } from "./context";
import BContext from "./BFile";

const AComponent = () => {
  const { count, setCount } = useCount();
  return (
    <div>
      <p>count A: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment A</button>
      <BContext />
    </div>
  );
};

export default AComponent;
