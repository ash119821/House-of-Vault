import { Link } from "react-router-dom";

import Header from "../components/Header";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">
      
      <div className="w-[90%] max-w-[420px] bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
        
        <h1 className="text-center mb-6 text-2xl font-semibold tracking-wide">
          FamVault
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 my-2 rounded-lg outline-none text-black"
        />

        {/* Login → Dashboard */}
        <Link
          to="/dashboard"
          className="block w-full p-3 mt-4 bg-[#e6c27a] hover:bg-[#f1d18a] rounded-lg text-black font-semibold transition text-center"
        >
          Login
        </Link>

        {/* Register */}
        <Link
          to="/register"
          className="block text-center mt-4 cursor-pointer underline hover:text-gray-300 transition"
        >
          Create Family Account
        </Link>

      </div>
    </div>
  );
}

export default Login;
