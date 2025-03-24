import React, { memo } from "react";

const ChildMemo = React.memo(({ prop }) => {
  console.log("child comp");

  return (
    <div>
      <p>child:{prop}</p>
    </div>
  );
});

export default ChildMemo;
