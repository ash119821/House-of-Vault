import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Medical() {
  const navigate = useNavigate();

  const [bloodGroup, setBloodGroup] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMedicalRecords();
  }, []);

  const fetchMedicalRecords = async () => {
    try {
      const res = await api.get("/medical");
      setRecords(res.data);
    } catch (err) {
      console.error("Failed to fetch medical records");
    }
  };

  const handleSave = async () => {
    if (!bloodGroup && !allergies && !medications) {
      alert("Please enter at least one medical detail");
      return;
    }

    try {
      setLoading(true);

      await api.post("/medical", {
        bloodGroup,
        allergies,
        medications,
      });

      // reset form
      setBloodGroup("");
      setAllergies("");
      setMedications("");

      fetchMedicalRecords();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to save medical info");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Medical Records</h1>

      {/* MEDICAL FORM */}
      <input
        type="text"
        placeholder="Blood Group"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
      />

      <input
        type="text"
        placeholder="Allergies"
        value={allergies}
        onChange={(e) => setAllergies(e.target.value)}
      />

      <input
        type="text"
        placeholder="Ongoing Medications"
        value={medications}
        onChange={(e) => setMedications(e.target.value)}
      />

      <button onClick={handleSave} disabled={loading}>
        {loading ? "Saving..." : "Save Medical Info"}
      </button>

      {/* MEDICAL RECORDS LIST */}
      <div style={{ marginTop: "20px" }}>
        <h3>Saved Medical Records</h3>

        {records.length === 0 ? (
          <p>No medical records added</p>
        ) : (
          records.map((rec) => (
            <div
              key={rec._id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>Blood Group:</strong> {rec.bloodGroup || "N/A"} <br />
              <strong>Allergies:</strong> {rec.allergies || "N/A"} <br />
              <strong>Medications:</strong> {rec.medications || "N/A"}
            </div>
          ))
        )}
      </div>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
}

export default Medical;