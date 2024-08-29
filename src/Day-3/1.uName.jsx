import { useState } from "react";

const UNameExample = () => {
  const [uName, setUName] = useState("Dev");

  return (
    <div>
      <button onClick={() => setUName("Dev Bhai")}>Change name to Dev Bhai</button>
      <h1>Name: {uName}</h1>
    </div>
  );
};

export default UNameExample;
