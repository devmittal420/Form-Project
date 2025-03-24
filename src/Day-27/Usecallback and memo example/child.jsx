import { memo } from "react";

const ChildCompUseCB = ({ count, onIncrement }) => {
  console.log("Re-render ChildCompUseCB");
  return (
    <div style={{ backgroundColor: "tomato", color: "#fff", padding: 12 }}>
      <h1>Child Component Count: {count}</h1>
      <button onClick={onIncrement}>Increment Counter form Child</button>
    </div>
  );
};

export default memo(ChildCompUseCB);