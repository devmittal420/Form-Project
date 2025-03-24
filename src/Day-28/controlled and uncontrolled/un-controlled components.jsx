import { useRef } from "react";

const Uncontrolled = () => {
  const name = useRef(null);

  const onHandleChange = (e) => {
    e.preventDefault();
    console.log("Name: " + name.current.value);
  };

  return (
    <div>
      <form onSubmit={onHandleChange}>
        <input type="text" ref={name} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Uncontrolled;
