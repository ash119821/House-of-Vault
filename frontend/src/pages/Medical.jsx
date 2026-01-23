import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Medical() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Medical Records</h1>

      <input type="text" placeholder="Blood Group" />
      <input type="text" placeholder="Allergies" />
      <input type="text" placeholder="Ongoing Medications" />

      <button>Save Medical Info</button>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Medical;
