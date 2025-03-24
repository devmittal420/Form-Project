import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Welcome to About page</h1>
      <div style={{ display: "flex", gap: "12px" }}>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default About;