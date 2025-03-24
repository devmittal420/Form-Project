import React, { useState, useLayoutEffect } from "react";

const UseLayoutEffectComponent = () => {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    console.log("🚀 useLayoutEffect: Runs before paint");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>useLayoutEffect Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseLayoutEffectComponent;
