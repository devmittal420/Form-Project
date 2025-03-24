import React from "react";
const Child = ({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <p>Increment from child</p>
      <button onClick={onClick}>Click me </button>
    </div>
  );
}
export default Child;
