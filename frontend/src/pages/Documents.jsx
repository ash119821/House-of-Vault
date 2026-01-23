import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Documents() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Documents Locker</h1>

      <input type="text" placeholder="Document Name" />
      <input type="text" placeholder="Document Details" />

      <button>Add Document</button>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Documents;
