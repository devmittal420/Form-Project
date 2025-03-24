import React, { memo } from "react";

const ChildComponent = React.memo(({ handleClick }) => {
  console.log("Child re-rendered!");
  return <button onClick={handleClick}>Click Me</button>;
});

export default ChildComponent;
