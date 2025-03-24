import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home page</h1>

      <div style={{ display: "flex", gap: "12px" }}>
        <a href="/about">About</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Home;