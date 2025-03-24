import { useState } from "react";

const ToDOForm = () => {
  const [form, setForm] = useState({
    name: "",
    city: "",
  });
  console.log("fporm: ", form);

  const [cart, setCart] = useState([]);
  console.log("cart: ", cart);

  const onHandleInput = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setCart([...cart, form]);
    setForm({
      name: "",
      city: "",
    });
  };

  const onHandleRemove = (index) => {
    const removeItem = cart.filter((_, id) => id !== index);
    setCart(removeItem);
  };
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <div>
          <p>Name:</p>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder="Enter your name"
            onChange={onHandleInput}
          />
          <br />
          <p>City:</p>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={form.city}
            onChange={onHandleInput}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h1>Todo list</h1>
        <ul>
          {cart.map((item, id) => (
            <li key={id}>
              <p>Name: {item.name}</p>
              <p>City: {item.city}</p>
              <br />
              <button onClick={() => onHandleRemove(id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ToDOForm;
