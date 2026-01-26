import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function Medical() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFiles([...files, selectedFile]);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">

      <div className="flex gap-10">

        {/* ⬅️ LEFT: Upload Form */}
        <div className="w-[420px] bg-white/10 backdrop-blur-md
        rounded-xl p-8 shadow-2xl">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Medical Records
          </h2>

          <input
            type="text"
            placeholder="Blood Group"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            type="text"
            placeholder="Allergies"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            type="text"
            placeholder="Ongoing Medications"
            className="w-full p-3 mb-6 rounded-lg text-black"
          />

          <input
            type="file"
            onChange={handleUpload}
            className="mb-4"
          />

          <button className="w-full p-3 bg-[#e6c27a]
          hover:bg-[#f1d18a] text-black font-semibold rounded-lg">
            Save Medical Info
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full mt-3 p-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg"
          >
            Back to Dashboard
          </button>
        </div>

        {/* ➡️ RIGHT: Uploaded Files List */}
        <div className="w-[420px] bg-white/10 backdrop-blur-md
        rounded-xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-4 text-center">
            Uploaded Documents
          </h2>

          {files.length === 0 ? (
            <p className="text-center text-gray-300">
              No documents uploaded yet
            </p>
          ) : (
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center
                  bg-white/20 p-3 rounded-lg"
                >
                  <span>{file.name}</span>
                  <button className="text-sm underline">
                    View
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}

export default Medical;
