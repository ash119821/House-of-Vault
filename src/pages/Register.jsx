import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Create Family Vault</h1>

      <input type="text" placeholder="Family Name" />
      <input type="text" placeholder="Admin Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={() => navigate("/")}>
        Register
      </button>

      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/")}
      >
        Already have an account? Login
      </p>
    </div>
  );
}

export default Register;
