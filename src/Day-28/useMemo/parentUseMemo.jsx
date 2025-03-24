import React, { useState } from "react";
import Child from "./childUseMemo";

const Parent = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setNum(num + 1)}>Increment num</button>
      <button onClick={() => setCount(count + 1)}>Increment count</button>

      <Child num={num} />
    </div>
  );
};

export default Parent;
