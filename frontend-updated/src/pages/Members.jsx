import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";

function Members() {
  const navigate = useNavigate();

  const [members, setMembers] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    relation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addMember = () => {
    if (form.name && form.email) {
      setMembers([...members, form]);
      setForm({ name: "", email: "", relation: "" });
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      {/* TWO COLUMN LAYOUT */}
      <div className="flex gap-10">

        {/* LEFT CARD — ADD MEMBER */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            👨‍👩‍👧 Family Members
          </h2>

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Member Name"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            name="relation"
            value={form.relation}
            onChange={handleChange}
            placeholder="Relation"
            className="w-full p-3 mb-6 rounded-lg text-black"
          />

          <button
            onClick={addMember}
            className="w-full py-3 mb-4 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Add Member
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* RIGHT CARD — STORED MEMBERS */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            📋 Stored Members
          </h2>

          {members.length === 0 ? (
            <p className="text-gray-300 text-center">
              No family members added yet
            </p>
          ) : (
            <div className="space-y-4">
              {members.map((m, index) => (
                <div
                  key={index}
                  className="bg-white/20 p-4 rounded-xl"
                >
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-gray-300">{m.relation}</p>
                  <p className="text-sm mt-1">{m.email}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Members;
