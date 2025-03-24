import { useCallback, useState } from "react";
import Child from "./useCallbackChild";

const Parent = () => {
  const [count, setCount] = useState(0);

  const onHandleClick = useCallback(() => {
    console.log("Button clicked");
  });
  console.log("parent re-render");

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={onHandleClick} />
    </div>
  );
};

export default Parent;
