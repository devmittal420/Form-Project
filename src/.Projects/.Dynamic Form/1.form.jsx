import { useState } from "react";

const DynamicForm = () => {
  const [formFill, setFormFill] = useState([]);

  const [newField, setNewField] = useState({
    type: "",
    label: "",
    placeholder: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewField((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    setFormFill((prev) => [...prev, newField]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formFill: ", formFill);
  };

  return (
    <div>
      <h1>Form</h1>
      <div>
        <label>Type: </label>
        <select name="type" onChange={handleChange} style={{ marginRight: 12 }}>
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="Radio">Radio</option>
          <option value="date">Date</option>
        </select>

        <label>Label: </label>
        <input
          name="label"
          type="text"
          onChange={handleChange}
          style={{ marginRight: 12 }}
        />

        <label>Placeholder: </label>
        <input type="text" name="placeholder" onChange={handleChange} />

        <button onClick={handleAdd}> Add </button>
      </div>

      {formFill.map((item) => (
        <div key={item}>
          <p>{item.label}</p>
          <input
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            onChange={handleChange}
          />
          <button>Submit</button>
        </div>
      ))}
    </div>
  );
};

export default DynamicForm;
