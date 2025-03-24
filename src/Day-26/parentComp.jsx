import React,{useState} from "react";
import Child from "./childComp";

const Parent = () => {
  const [changeCityName, setChangeCityName] = useState("morena");
  // const city = "Morena";
  const onHandleClick = () =>{
    setChangeCityName("Gwalior");
  }
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={onHandleClick}>Click</button>
      <Child cityName={changeCityName} />
    </div>
  );
};
export default Parent;
