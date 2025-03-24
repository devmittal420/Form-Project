import { useState } from "react";
const NormalInputs = () => {
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });
  const [profileErr, setProfileErr] = useState({
    name: false,
    email: false,
    password: false,
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {
    if (!profile.name) {
      setProfileErr((prev) => ({ ...prev, name: true }));
    } else {
      setProfileErr((prev) => ({ ...prev, name: false }));
    }

    if (!profile.email) {
      setProfileErr((prev) => ({ ...prev, email: true }));
    } else {
      setProfileErr((prev) => ({ ...prev, email: false }));
    }

    if (!profile.password) {
      setProfileErr((prev) => ({ ...prev, password: true }));
    } else {
      setProfileErr((prev) => ({ ...prev, password: false }));
    }

    if (!profile.dob) {
      setProfileErr((prev) => ({ ...prev, dob: true }));
    } else {
      setProfileErr((prev) => ({ ...prev, dob: false }));
    }
  };
  return (
    <div>
      <div className="form-element">
        <p>Name</p>
        <input
          type="text"
          placeholder="Enter name"
          value={profile.name}
          name="name"
          onChange={onInputChange}
        />
        {profileErr.name && (
          <p style={{ color: "red" }}>Please enter a valid name</p>
        )}
      </div>
      <div className="form-element">
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={profile.email}
          onChange={onInputChange}
        />
        {profileErr.email && (
          <p style={{ color: "red" }}>Please enter a valid email</p>
        )}
      </div>
      <div className="form-element">
        <p>Password</p>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={profile.password}
          onChange={onInputChange}
        />
        {profileErr.password && (
          <p style={{ color: "red" }}>Please enter a valid password</p>
        )}
      </div>

      <div className="form-element">
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default NormalInputs;
