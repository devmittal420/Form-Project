import { useState } from "react";
import ChildReactMemo from "./react.memoChild";

const ReactMemoParent = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("parent render");

  return (
    <div>
      <p>
        {count}: {count2}
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>count 1</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>count 2</button>
      <ChildReactMemo count={count} />
    </div>
  );
};
export default ReactMemoParent;
