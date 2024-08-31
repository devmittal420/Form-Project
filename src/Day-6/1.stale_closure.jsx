import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  const onCountChange = () => {
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);

    setCount((pehleKaData) => {
      return pehleKaData + 1;
    });
    setCount((pehleKaData) => {
      console.log(pehleKaData);
      return pehleKaData + 1;
    });
    setCount((pehleKaData) => {
      console.log(pehleKaData);
      return pehleKaData + 1;
    });
    setCount((pehleKaData) => {
      console.log(pehleKaData);
      return pehleKaData + 1;
    });

    console.log("count: ", count);
  };
  console.log("render count: ", count);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={onCountChange}>Increment</button>
    </div>
  );
};

export default Counters;
