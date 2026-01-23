import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/style.css";

function Documents() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch documents on page load
  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const res = await api.get("/documents");
      setDocuments(res.data);
    } catch (err) {
      console.error("Failed to fetch documents");
    }
  };

  const handleUpload = async () => {
    if (!title || !type || !file) {
      alert("Please fill all fields and select a file");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("file", file);

    try {
      setLoading(true);
      await api.post("/documents/upload", formData);
      alert("Document uploaded successfully");

      // reset form
      setTitle("");
      setType("");
      setFile(null);

      // refresh list
      fetchDocuments();
    } catch (err) {
      alert(err.response?.data?.error || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Documents Locker</h1>

      {/* UPLOAD FORM */}
      <input
        type="text"
        placeholder="Document Name (Aadhar, PAN, etc.)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Document Type / Details"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Add Document"}
      </button>

      {/* DOCUMENT LIST */}
      <div style={{ marginTop: "20px" }}>
        <h3>Stored Documents</h3>

        {documents.length === 0 ? (
          <p>No documents uploaded</p>
        ) : (
          documents.map((doc) => (
            <div
              key={doc._id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <strong>{doc.title}</strong> <br />
              Type: {doc.type}
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

export default Documents;