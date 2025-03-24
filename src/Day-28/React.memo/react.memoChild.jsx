import React from "react";

const ChildReactMemo = React.memo(({ count }) => {
  console.log("child render");

  return (
    <div>
      <h1>count from child:{count}</h1>
    </div>
  );
});

export default ChildReactMemo;
