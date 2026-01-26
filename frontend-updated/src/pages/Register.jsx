import { Link } from "react-router-dom";

import Header from "../components/Header";

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      {/* Card */}
      <div className="w-[90%] max-w-[420px] bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        
        <h1 className="text-center mb-6 text-xl font-semibold tracking-wide">
          Create Family Vault
        </h1>

        {/* Family Name */}
        <input
          type="text"
          placeholder="Family Name"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        {/* Admin Name */}
        <input
          type="text"
          placeholder="Admin Name"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        {/* Register Button */}
        <button
          className="w-full p-3 mt-4 bg-[#f1d18a] hover:bg-[#e6c27a] rounded-lg text-black font-semibold transition"
        >
          Register
        </button>

        {/* Login link */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline cursor-pointer hover:text-gray-300 transition"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
