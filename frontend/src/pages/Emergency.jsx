import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Emergency() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Emergency Contacts</h1>

      <input type="text" placeholder="Contact Name" />
      <input type="tel" placeholder="Phone Number" />
      <input type="text" placeholder="Relation" />

      <button>Add Contact</button>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Emergency;
