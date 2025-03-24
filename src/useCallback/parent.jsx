import { useCallback, useState } from "react";
import ChildComponent from "./child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  });
  console.log("parent rendered");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent handleClick={handleClick} />
    </div>
  );
};

export default Parent;
