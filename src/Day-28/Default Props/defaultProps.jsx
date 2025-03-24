import React from "react";

const InputComponent = ({ type }) => {
  console.log({ type });
  return <input type={type} />;
};

InputComponent.defaultProps = {
  type: "text",
};

export default InputComponent;
