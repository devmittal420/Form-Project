import { useState } from "react";
import ExpensiveCalculation from "./useMemo";

const CallMemo = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ExpensiveCalculation num={count} />
    </div>
  );
};

export default CallMemo;
