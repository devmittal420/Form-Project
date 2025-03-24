import React from "react";
import InputComponent from "./defaultProps";

const TestComp = () => {
  return (
    <div>
      <InputComponent type="password" />
      <InputComponent type="email" />
    </div>
  );
};

export default TestComp;
