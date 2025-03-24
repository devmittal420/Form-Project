import React, { useMemo } from "react";

const Child = ({ num }) => {
  console.log("Child render");

  const compute = () => {
    console.log("render");
    let result = 0;
    for (let i = 0; i < 100; i++) {
      result += i;
    }
    return num * result;
  };

  const computedValue = compute()

  return (
    <div>
      <h2>Computed Value: {computedValue}</h2>
    </div>
  );
};

export default Child;
