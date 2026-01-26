import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";

function Travelling() {
  const navigate = useNavigate();

  const documents = [
    "Aadhar Card",
    "PAN Card",
    "Passport",
    "Travel Tickets",
  ];

  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleUpload = (docName) => {
    if (!uploadedDocs.includes(docName)) {
      setUploadedDocs([...uploadedDocs, docName]);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      {/* TWO COLUMN LAYOUT */}
      <div className="flex gap-10">

        {/* LEFT CARD — TRAVELLING DOCUMENTS */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center">
            ✈️ Travelling Documents
          </h2>

          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex justify-between items-center
                bg-white/20 px-4 py-3 rounded-xl"
              >
                <span className="font-medium">{doc}</span>

                <button
                  onClick={() => handleUpload(doc)}
                  className="px-4 py-2 bg-[#e6c27a] hover:bg-[#f1d18a]
                  text-black font-semibold rounded-lg transition"
                >
                  Upload
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full mt-6 py-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* RIGHT CARD — STORED DOCUMENTS */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 justify-center">
            📂 Stored Documents
          </h2>

          {uploadedDocs.length === 0 ? (
            <p className="text-gray-300 text-center">
              No documents added yet
            </p>
          ) : (
            <div className="space-y-3">
              {uploadedDocs.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white/20 px-4 py-3 rounded-xl"
                >
                  {doc}
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Travelling;
