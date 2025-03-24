import { useMemo } from "react";

const ExpensiveCalculation = ({ num }) => {
  const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 0; i < 100000; i++) {} // Simulating a slow process
    return num * 2;
  };

  // useMemo caches the result unless 'num' changes
  const result = useMemo(() => slowFunction(num), [num]);

  return <p>Result: {result}</p>;
};

export default ExpensiveCalculation;
