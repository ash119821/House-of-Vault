import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function Family() {
  const navigate = useNavigate();

  return (
    // 🌈 FULL PAGE GRADIENT
    <div className="w-full min-h-screen flex items-center justify-center
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]"
    >
      
      {/* Glass Card */}
      <div className="w-[90%] max-w-[420px] bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-white">
        
        <h1 className="text-center mb-5 font-semibold tracking-wide text-2xl">
          Create Family
        </h1>

        <input
          type="text"
          placeholder="Family Name"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        <input
          type="password"
          placeholder="Family Password"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full p-3 mt-4 bg-[#e6c27a] hover:bg-[#f1d18a]
            rounded-lg text-black font-semibold transition"
        >
          Create Family
        </button>

        <p
          onClick={() => navigate("/")}
          className="text-center mt-4 cursor-pointer text-[#e6c27a]"
        >
          Back to Login
        </p>

      </div>
    </div>
  );
}

export default Family;
