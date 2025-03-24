import React, { memo } from "react";

const ChildCount = ({ counter, onIncrement }) => {
  console.log("child re-render");

  return (
    <div>
      <h1>Child Component: {counter}</h1>
      <button onClick={onIncrement}>Increment Counter form Child</button>
    </div>
  );
};

export default memo(ChildCount);
