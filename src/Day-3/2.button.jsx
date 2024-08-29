import { useState } from "react";

// const Counter = () =>{
//     const [count, setCount] =useState(0);
//     const onIncrement = ()  => {
//         setCount( count + 1);
//     }


//     return (
//         <div>
//             <button onClick = {onIncrement}></button>
//         </div>
//     )
// }




const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    console.log("External Increment Clicked");
    setCount(count + 1);
  }
  const onDecrement = () => {
    console.log("External Decrement Clicked");
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button 
          onClick={() => {
            console.log("Increment Clicked");
            setCount(count + 1);
          }}
        >
          Increment by inline method
        </button>
        <button
          onClick={() => {
            console.log("Decrement Clicked");
            setCount(count - 1);
          }}
        >
          Decrement by inline method
        </button>
      </div>

      <hr />

      <div>
        <button onClick={onIncrement}>Increment by External method</button>
        <button onClick={onDecrement}>Decrement by External method</button>
      </div>
    </div>
  );
};

export default Counter;