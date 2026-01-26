import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function Documents() {
  const navigate = useNavigate();

  const [docName, setDocName] = useState("");
  const [docDetails, setDocDetails] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleAddDocument = () => {
    if (!docName || !docDetails) return;

    setDocuments([
      ...documents,
      { name: docName, details: docDetails },
    ]);

    setDocName("");
    setDocDetails("");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">

      <div className="flex gap-10">

        {/* ⬅️ LEFT : ADD DOCUMENT */}
        <div className="w-[420px] bg-white/10 backdrop-blur-md
        rounded-xl p-8 shadow-2xl">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Documents Locker
          </h2>

          <input
            type="text"
            placeholder="Document Name"
            value={docName}
            onChange={(e) => setDocName(e.target.value)}
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            type="text"
            placeholder="Document Details"
            value={docDetails}
            onChange={(e) => setDocDetails(e.target.value)}
            className="w-full p-3 mb-6 rounded-lg text-black"
          />

          <button
            onClick={handleAddDocument}
            className="w-full p-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Add Document
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full mt-3 p-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* ➡️ RIGHT : DOCUMENT LIST */}
        <div className="w-[420px] bg-white/10 backdrop-blur-md
        rounded-xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-4 text-center">
            Stored Documents
          </h2>

          {documents.length === 0 ? (
            <p className="text-center text-gray-300">
              No documents added yet
            </p>
          ) : (
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white/20 p-4 rounded-lg"
                >
                  <p className="font-medium">{doc.name}</p>
                  <p className="text-sm text-gray-300">
                    {doc.details}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default Documents;
