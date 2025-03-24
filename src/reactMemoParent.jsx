import { useState } from "react";
import ChildMemo from "./reactmemoChild";

const ParentMemo = () => {
  const [btn, setBtn] = useState(0);
  const [btn2, setBtn2] = useState(0);
  console.log("parent comp");

  return (
    <div>
      <p>count: {btn2}</p>
      <button onClick={() => setBtn((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setBtn2((prev) => prev + 1)}>Increment btn2</button>
      <ChildMemo prop={btn} />
    </div>
  );
};

export default ParentMemo;
