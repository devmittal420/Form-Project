import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const UseRefWithQueryParameter = () => {
  const inputRefA = useRef();
  const inputRefB = useRef();
  const inputRefC = useRef();
  const inputRefD = useRef();
  const [searchQuery] = useSearchParams();

  useEffect(() => {
    const query = searchQuery.get("focus");

    if (query === "first") {
      inputRefA.current.focus();
    } else if (query === "second") {
      inputRefB.current.focus();
    } else if (query === "third") {
      inputRefC.current.focus();
    } else if (query === "fourth") {
      inputRefD.current.focus();
    }
  }, []);

  return (
    <div>
      <div className="box">
        <input type="text" ref={inputRefA} />
        <button onClick={() => inputRefA.current.focus()}>Toggle A</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefB} />
        <button onClick={() => inputRefB.current.focus()}>Toggle B</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefC} />
        <button onClick={() => inputRefC.current.focus()}>Toggle C</button>
      </div>
      <div className="box">
        <input type="text" ref={inputRefD} />
        <button onClick={() => inputRefD.current.focus()}>Toggle D</button>
      </div>
    </div>
  );
};

export default UseRefWithQueryParameter;
