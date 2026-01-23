import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Emergency() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relation, setRelation] = useState("");
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await api.get("/emergency");
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to fetch emergency contacts");
    }
  };

  const handleAddContact = async () => {
    if (!name || !phone || !relation) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await api.post("/emergency", {
        name,
        phone,
        relation,
      });

      // reset form
      setName("");
      setPhone("");
      setRelation("");

      fetchContacts();
    } catch (err) {
      alert(err.response?.data?.error || "Failed to add contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Emergency Contacts</h1>

      {/* ADD CONTACT FORM */}
      <input
        type="text"
        placeholder="Contact Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="text"
        placeholder="Relation"
        value={relation}
        onChange={(e) => setRelation(e.target.value)}
      />

      <button onClick={handleAddContact} disabled={loading}>
        {loading ? "Adding..." : "Add Contact"}
      </button>

      {/* CONTACT LIST */}
      <div style={{ marginTop: "20px" }}>
        <h3>Saved Contacts</h3>

        {contacts.length === 0 ? (
          <p>No emergency contacts added</p>
        ) : (
          contacts.map((c) => (
            <div
              key={c._id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>{c.name}</strong> <br />
              {c.phone} <br />
              Relation: {c.relation}
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

export default Emergency;