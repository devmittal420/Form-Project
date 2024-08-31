import { useState } from "react";

const ToDoForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [getValue, setGetValue] = useState([]);

  const changeValue = (e) => {
    const { name, value } = e.target;
    setForm((pehlekaData) => ({
      ...pehlekaData,
      [name]: value,
    }));
  };

  const submitValue = (e) => {
    e.preventDefault();
    // console.log(form);
    // console.log(getValue);

    if (form.title && form.description) {
      setGetValue((pehlekaData) => [...pehlekaData, form]);
      setForm({
        title: "",
        description: "",
      });
    }
  };

  const editValue = (index) => {
    
  };

  const deleteValue = (index) => {
    setGetValue((pehlekaData) => pehlekaData.filter((_, i) => i !== index));
  };

  return (
    <div className="searchContainer">
      <span style={{ fontWeight: "bold", fontSize: "20px" }}>To-Do Form</span>
      <form onSubmit={submitValue}>
        <div className="searchForm" style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={changeValue}
            className="searchColor"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={form.description}
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
            <strong>Title: {item.title}</strong>
            <br />
            <strong>Description: {item.description}</strong>
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
