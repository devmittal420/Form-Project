import { useCallback, useState } from "react";
import ChildCompUseCB from "./child";
const ParentCompUseCB = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  console.log("Parent Re-Render: ", { counter, counter2 });

  const onIncrement = useCallback(() => {
    console.log("Counter2: ", counter2);
    console.log("recreted");
    
    setCounter((prev) => prev + 1);
  }, [setCounter]);

  //   const onIncrement = useCallback(() => {
  //     console.log("Counter2: ", counter2);

  //     setCounter(counter + 1);
  //   }, [counter]);

  return (
    <div>
      <h1>
        Val in Parent: {counter}-{counter2}
      </h1>
      <button onClick={onIncrement}>Increment C1 from parent</button>
      <button onClick={() => setCounter2((prev) => prev + 1)}>
        Increment C2 from parent
      </button>
      <hr />
      <ChildCompUseCB count={counter} onIncrement={onIncrement} />
    </div>
  );
};

export default ParentCompUseCB;
