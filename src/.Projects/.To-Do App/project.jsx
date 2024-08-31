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
            value={form.title}
            placeholder="Title"
            onChange={changeValue}
            className="searchColor"
          />
          <input
            type="text"
            name="description"
            value={form.description}
            placeholder="Description"
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
          <div key={index} style={{ marginBottom: "10px", border: "2px solid black", padding:"10px", width:"300px"}}>
            <strong>Title: </strong>{item.title}
            <br />
            <strong>Description: </strong>{item.description}
            <br />
            <button className="editClass" style={{margin:"4px"}} onClick={() => editValue(index)}>
              Edit
            </button>
            <button className="deleteClass" style={{margin: "4px"}} onClick={() => deleteValue(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoForm;
