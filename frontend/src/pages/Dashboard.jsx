import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Dashboard() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await api.get("/family/members");
        setMembers(res.data);
      } catch (err) {
        console.error("Failed to load members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="container">
      <h1>Family Dashboard</h1>

      {/* BASIC INFO SHOWN ON LOAD */}
      {loading ? (
        <p>Loading family info...</p>
      ) : (
        <div style={{ marginBottom: "20px" }}>
          <h3>Family Members</h3>
          {members.length === 0 && <p>No members found</p>}

          {members.map((member, index) => (
            <div
              key={index}
              style={{
                padding: "8px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>{member.name}</strong> | {member.bloodGroup} |{" "}
              {member.contactNumber}
            </div>
          ))}
        </div>
      )}

      {/* NAVIGATION CARDS */}
      <div className="grid">
        <div
          className="card"
          onClick={() => navigate("/documents")}
        >
          📁 Documents
        </div>

        <div
          className="card"
          onClick={() => navigate("/medical")}
        >
          🩺 Medical
        </div>

        <div
          className="card"
          onClick={() => navigate("/emergency")}
        >
          📞 Emergency
        </div>

        <div
          className="card"
          onClick={() => navigate("/members")}
        >
          👨‍👩‍👧 Members
        </div>
      </div>
    </div>
  );
}

export default Dashboard;