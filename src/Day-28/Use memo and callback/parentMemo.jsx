import { useCallback, useState } from "react";
import ChildCount from "./childMemo";

const ParentCount = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("parent re-render");

  const onHandleChange = useCallback(() => {
    console.log("function recreated");
    setCount((prev) => prev + 1);
  }, [setCount]);

  return (
    <div>
      <p>
        {count}-{count2}
      </p>
      <button onClick={onHandleChange}>count 1 from parent</button>
      <button onClick={() => setCount2((prev) => prev + 1)}>
        count 2 from parent
      </button>
      <ChildCount counter={count} onIncrement={onHandleChange} />
    </div>
  );
};

export default ParentCount;
