import { useState } from "react";

const InputForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    checkBox: "",
    radio: "",
    dropdown: "",
    slider: "",
    textarea: "",
  });

  const formChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });

    setForm((pehleKaForm) => ({
      ...pehleKaForm,
      [name]: value,
    }));
  };

  return (
    <div
      className="form-container"
      style={{
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(to right,rgb(240, 240, 240), rgb(255, 182, 193), rgb(255, 255, 224))",
      }}
    >
      <h1>Form</h1>
      <div className="form">
        <p>Name: {form.name}</p>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={formChange}
        />
      </div>
      <div className="form">
        <p>Email: {form.email}</p>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={formChange}
        />
      </div>
      <div className="form">
        <p>Password:{form.password} </p>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={formChange}
        />
      </div>
      <div className="form">
        <p>Bio: {form.bio}</p>
        <input
          type="text"
          name="bio"
          placeholder="Write bio"
          onChange={formChange}
        />
      </div>
      <div className="form">
        <span>
          <input type="checkbox" name="checkBox" onChange={formChange} />
          Check me
        </span>
      </div>
      <div className="form">
        <span>
          <input type="radio" name="radio" onChange={formChange} />
          Radio
        </span>
      </div>
      <div className="form">
        <p>Dropdown: {form.dropdown}</p>
        <select type="dropdown" name="dropdown" onChange={formChange}>
          <option value="">Select an option</option>
          <option value="option 1">option 1</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
        </select>
      </div>
      <div className="form">
        <p>Color: {form.color}</p>
        <input type="color" name="color" onChange={formChange} />
      </div>
      <div className="form">
        <p>Slider: {form.slider}</p>
        <input type="range" name="slider" onChange={formChange} />
      </div>
      <div className="form">
        <p>Textarea: {form.textarea}</p>
        <textarea name="textarea" onChange={formChange}></textarea>
      </div>
    </div>
  );
};

export default InputForm;
