import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Members() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Family Members</h1>

      <input type="text" placeholder="Member Name" />
      <input type="email" placeholder="Email" />
      <select>
        <option>Admin</option>
        <option>Viewer</option>
      </select>

      <button>Add Member</button>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Members;
