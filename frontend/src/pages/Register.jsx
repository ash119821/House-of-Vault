import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Register() {
  const navigate = useNavigate();

  const [familyName, setFamilyName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!familyName || !name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/register", {
        familyName, // safe to send even if backend ignores it
        name,
        email,
        password,
      });

      alert("Family account created successfully. Please login.");
      navigate("/");
    } catch (err) {
      alert(
        err.response?.data?.error || "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Create Family Vault</h1>

      <input
        type="text"
        placeholder="Family Name"
        value={familyName}
        onChange={(e) => setFamilyName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Admin Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleRegister} disabled={loading}>
        {loading ? "Registering..." : "Register"}
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