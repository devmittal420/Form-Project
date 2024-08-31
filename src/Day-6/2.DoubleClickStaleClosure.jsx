import { useState } from "react";

const Doubles = () => {
  const [doubleClick, setDoubleClick] = useState(2);

  const handleDoubleClick = () => {
    // setDoubleClick(doubleClick * 2);
    // setDoubleClick(doubleClick * 2);
    // setDoubleClick(doubleClick * 2);

    setDoubleClick((pehleKaData) => pehleKaData * 2);
    setDoubleClick((pehleKaData) => pehleKaData * 2);

    console.log("Double clicked! New count:", doubleClick * 2);
  };

  console.log("Render count:", doubleClick);

  return (
    <div>
      <h1>Double click: {doubleClick}</h1>
      <button onDoubleClick={handleDoubleClick}>Click two times</button>
    </div>
  );
};

export default Doubles;
