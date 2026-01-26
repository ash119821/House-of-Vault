import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Header from "../components/Header";

function Emergency() {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({
    family: "",
    name: "",
    phone: "",
    relation: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addContact = () => {
    if (form.name && form.phone) {
      setContacts([...contacts, form]);
      setForm({ family: "", name: "", phone: "", relation: "" });
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"
    >
      {/* TWO COLUMN LAYOUT */}
      <div className="flex gap-10">

        {/* LEFT CARD — EMERGENCY FORM */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            🚨 Emergency Contacts
          </h2>

          <input
            name="family"
            value={form.family}
            onChange={handleChange}
            placeholder="Family Name"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Contact Name"
            className="w-full p-3 mb-4 rounded-lg text-black"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number"
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
            onClick={addContact}
            className="w-full py-3 mb-4 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Add Contact
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full py-3 bg-[#e6c27a]
            hover:bg-[#f1d18a] text-black font-semibold rounded-lg transition"
          >
            Back to Dashboard
          </button>
        </div>

        {/* RIGHT CARD — STORED CONTACTS */}
        <div
          className="w-[420px] bg-white/10 backdrop-blur-md
          rounded-2xl p-8 shadow-2xl"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            📞 Stored Contacts
          </h2>

          {contacts.length === 0 ? (
            <p className="text-gray-300 text-center">
              No emergency contacts added yet
            </p>
          ) : (
            <div className="space-y-4">
              {contacts.map((c, index) => (
                <div
                  key={index}
                  className="bg-white/20 p-4 rounded-xl"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-gray-300">
                    {c.relation} • {c.family}
                  </p>
                  <p className="mt-1">📞 {c.phone}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Emergency;
