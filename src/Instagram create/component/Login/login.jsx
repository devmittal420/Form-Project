import { signInWithPopup } from "firebase/auth"; // used to open google login popup
import { auth, googleProvider } from "../../FirebaseLogin/firebase";
import GoogleLogo from "../../assets/images/GoogleLogo.svg";

const Login = ({ setUser, setShowLogin }) => {
  const handleGoogleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      setUser(response.user);
      localStorage.setItem("user", JSON.stringify(response.user)); // after reload user didnt logout
      setShowLogin(false);
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        style={{
          border: "none",
          background: "transparent",
          cursor: "pointer",
        }}
      >
        <img
          src={GoogleLogo}
          alt="Google Login"
          style={{
            width: "30px",
            height: "30px",
            border: "none",
            borderRadius: "40%",
            padding: "2px",
          }}
        />
      </button>
    </div>
  );
};

export default Login;
