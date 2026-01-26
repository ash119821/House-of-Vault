import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">

      {/* 🌄 BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: "url('/family-bg.jpg')", // put image in public/
        }}
      />

      {/* 🌫️ BLUR + DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* 🔷 CONTENT */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center px-4">

        {/* 🔍 Top Bar */}
        <div className="w-full max-w-6xl flex items-center justify-between mt-6">
          <h2 className="text-xl font-semibold tracking-wide">
            FamVault
          </h2>

          <input
            type="text"
            placeholder="Search..."
            className="w-64 p-2 rounded-lg bg-white/10 backdrop-blur-md
            text-white placeholder-gray-300 outline-none"
          />
        </div>

        {/* 🌐 Main Content */}
        <div className="flex flex-col items-center justify-center flex-grow text-center -translate-y-8">

          <h1 className="text-5xl font-bold tracking-wide mb-4">
            FamVault
          </h1>

          <p className="text-lg max-w-xl text-gray-200 mb-2">
            A secure digital vault designed to store, organize, and protect
            your family’s most important information.
          </p>

          <p className="text-lg max-w-xl text-gray-200 mb-8">
            Access everything you need, anytime, anywhere safely and privately.
          </p>

          {/* 🔘 Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => navigate("/family")}
              className="px-6 py-3 bg-[#e6c27a] hover:bg-[#f1d18a]
              text-black font-semibold rounded-lg transition"
            >
              Enter Existing Family
            </button>

            <button
              onClick={() => navigate("/login")}
              className="px-6 py-3 bg-white/10 hover:bg-white/20
              border border-white/20 rounded-lg font-semibold transition"
            >
              Login as Admin
            </button>
          </div>
        </div>

       
        
  <div className="w-full max-w-4xl mb-10 text-center">
  <button
    onClick={() => navigate("/about")}
    className="px-8 py-3 bg-white/10 hover:bg-white/20
    border border-white/20 rounded-xl
    font-semibold text-lg transition"
  >
    About Us
  </button>
</div>



        <div className="w-full max-w-4xl mb-10 text-center">
          
          <p className="text-gray-300">
            FamVault is built to simplify family data management by providing
            a centralized, secure platform for documents, medical records,
            emergency contacts, and more all protected with modern security.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
