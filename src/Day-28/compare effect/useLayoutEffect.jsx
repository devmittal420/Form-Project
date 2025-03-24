import React, { useState, useEffect, useLayoutEffect } from "react";

const EffectExample = () => {
  const [count, setCount] = useState(0);  
  // useEffect: Runs after paint
  useEffect(() => {
    console.log("🔥 useEffect: After paint");
  }, [count]);

  // useLayoutEffect: Runs before paint
  useLayoutEffect(() => {
    console.log("🚀 useLayoutEffect: Before paint");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EffectExample;
