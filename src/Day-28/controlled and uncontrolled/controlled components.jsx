import { useState } from "react";

const Controlled = () => {
  const [name, setName] = useState("");

  console.log("name: ", name);

  const onHandleSubmit = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" value={name} onChange={onHandleSubmit} />
      </form>
    </div>
  );
};

export default Controlled;
