import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>FamVault</h1>

      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>

      <p
        style={{ cursor: "pointer", marginTop: "10px" }}
        onClick={() => navigate("/register")}
      >
        Create Family Account
      </p>
    </div>
  );
}

export default Login;

