import { useState } from "react";
import InputView from "./0.Input view";

const ReusableInputs = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
  });
  const [profileErr, setProfileErr] = useState({
    name: false,
    dob: false,
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
      <h1>Reusable Inputs</h1>
      <hr />
      <InputView
        name="name"
        value={profile.name}
        onInputChange={onInputChange}
        placeholder="Enter name"
        hasError={profileErr.name}
        errMsg="Please enter a valid name"
        label="Name"
      />

      <InputView
        name="email"
        type="email"
        value={profile.email}
        onInputChange={onInputChange}
        placeholder="Enter email"
        hasError={profileErr.email}
        errMsg="Please enter a valid email"
        label="Email"
      />

      <InputView
        type="password"
        name="password"
        value={profile.password}
        onInputChange={onInputChange}
        placeholder="Enter password"
        hasError={profileErr.password}
        errMsg="Please enter a valid password"
        label="Password"
      />

      <InputView
        type="date"
        name="dob"
        value={profile.dob}
        onInputChange={onInputChange}
        placeholder="Enter dob"
        hasError={profileErr.dob}
        errMsg="Please enter a valid dob"
        label="Date of birth"
      />

      <div className="form-element">
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default ReusableInputs;
