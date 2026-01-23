import { useNavigate } from "react-router-dom";
import "../styles/style.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Family Dashboard</h1>

      <div className="grid">
        <div
          className="card"
          onClick={() => navigate("/documents")}
        >
          📁 Documents
        </div>

        <div className="card" onClick={() => navigate("/medical")}>
  🩺 Medical
</div>

        <div className="card" onClick={() => navigate("/emergency")}>
  📞 Emergency
</div>

        <div className="card" onClick={() => navigate("/members")}>
  👨‍👩‍👧 Members
</div>

      </div>
    </div>
  );
}

export default Dashboard;
