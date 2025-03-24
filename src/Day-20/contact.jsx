import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1>Welcome to Contact page</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Contact;