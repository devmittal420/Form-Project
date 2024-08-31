import { useState } from "react";

const ToDoForm = () => {
  const [form, setForm] = useState("");
  const [getValue, setGetValue] = useState([]);

  const changeValue = (e) => {
    setForm(e.target.value);
  };

  const submitValue = (e) => {
    e.preventDefault();
    console.log(form);
    console.log(getValue);
    

    if (form) {
      setGetValue((prevValues) => [...prevValues, form]);
      setForm("");
    }
  };

  const editValue = (index) => {};

  const deleteValue = (index) => {
    setGetValue((prevValues) => prevValues.filter((_, i) => i !== index));
  };

  return (
    <div className="searchContainer">
      <span style={{ fontWeight: "bold", fontSize: "20px" }}>To-Do Form</span>
      <form onSubmit={submitValue}>
        <div className="searchForm" style={{ marginBottom: "10px" }}>
          <input
            type="search"
            placeholder="Search here"
            value={form}
            onChange={changeValue}
            className="searchColor"
          />
          <button type="submit" className="buttonColor">
            Search
          </button>
        </div>
      </form>
      <div>
        {getValue.map((item, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <span>{item}</span>
            <button className="editClass" onClick={() => editValue(index)}>
              Edit
            </button>
            <button className="deleteClass" onClick={() => deleteValue(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoForm;
