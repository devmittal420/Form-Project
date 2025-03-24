import { Link } from "react-router-dom";

const NotFound = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center",
      color: "#333",
    },
    title: {
      fontSize: "10rem",
      margin: 0,
      animation: "bounce 2s infinite",
    },
    message: {
      fontSize: "1.5rem",
      marginTop: "1rem",
    },
    link: {
      marginTop: "2rem",
      padding: "0.75rem 1.5rem",
      backgroundColor: "#007bff",
      color: "#fff",
      textDecoration: "none",
      borderRadius: "5px",
    },
    "@keyframes bounce": {
      "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
      "40%": { transform: "translateY(-20px)" },
      "60%": { transform: "translateY(-10px)" },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>
        Oops! The page you are looking for does nott exist.
      </p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NotFound;