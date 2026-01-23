import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Members() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [familyId, setFamilyId] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await api.get("/family/members");
        setMembers(res.data);

        // familyId can be taken from first member (all same family)
        if (res.data.length > 0) {
          setFamilyId(res.data[0].familyId || "");
        }
      } catch (err) {
        console.error("Failed to fetch members");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div className="container">
      <h1>Family Members</h1>

      {loading ? (
        <p>Loading members...</p>
      ) : (
        <>
          {members.length === 0 ? (
            <p>No members found</p>
          ) : (
            <div style={{ marginBottom: "20px" }}>
              {members.map((member, index) => (
                <div
                  key={index}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #ddd",
                  }}
                >
                  <strong>{member.name}</strong> <br />
                  {member.email} <br />
                  Role: {member.role}
                </div>
              ))}
            </div>
          )}

          {/* FAMILY JOIN INFO */}
          {familyId && (
            <div
              style={{
                padding: "10px",
                background: "#f5f5f5",
                marginBottom: "20px",
              }}
            >
              <strong>Family ID:</strong> {familyId}
              <p style={{ fontSize: "12px" }}>
                Share this ID with family members to join
              </p>
            </div>
          )}
        </>
      )}

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Members;