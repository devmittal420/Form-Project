import { useState } from "react";

const FormTask = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState({
    name: false,
    email: false,
    password: false,
  });

  const validateName = (name) => /^[a-zA-Z ]{2,40}$/.test(name);
  const validateEmail = (email) =>
    /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/.test(email);
  const validatePassword = (password) =>
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    !/[aeiou]/.test(password) &&
    /^[@#][A-Za-z0-9]{7,13}$/.test(password);

  const onHandleValidation = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setErr((prev) => ({ ...prev, name: !validateName(value) }));
    } else if (name === "email") {
      setErr((prev) => ({ ...prev, emailm: !validateEmail(value) }));
    } else if (name === "password") {
      setErr((prev) => ({ ...prev, password: !validatePassword(value) }));
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    onHandleValidation(e);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const validName = validateName(formData.name);
    const validEmail = validateEmail(formData.email);
    const validPassword = validatePassword(formData.password);

    setErr({
      name: !validName,
      email: !validEmail,
      password: !validPassword,
    });
    if (validName && validEmail && validPassword) {
      console.log("Form submitted", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      setErr({ name: false, email: false, password: false });
    }
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <p>Name:</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Enter Your Name"
        onChange={onHandleChange}
      />
      {err.name && <p style={{ color: "red" }}>Invalid name format</p>}
      <p>Email:</p>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter Your Email"
        onChange={onHandleChange}
      />
      {err.email && <p style={{ color: "red" }}>Invalid email format</p>}
      <p>Password:</p>
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter Your Password"
        onChange={onHandleChange}
      />
      {err.password && <p style={{ color: "red" }}>Invalid password format</p>}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default FormTask;
