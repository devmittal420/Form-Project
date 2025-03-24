import { useState } from "react";
import { useCount } from "./UseContext";
import B from "./Bcomp";

const A = () => {
  const { count, setCount } = useCount();
  return (
    <div>   
      <p>count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <B/>
    </div>
  );
};
export default A;
