import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-4">

      <div className="w-full max-w-3xl
      bg-white/10 backdrop-blur-md
      rounded-2xl p-10 shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          👨‍💻 Team Enthusiast
        </h1>

        <p className="text-center text-gray-300 mb-8">
          We are a passionate team building FamVault to help families
          securely organize, protect, and access their most important
          information anytime, anywhere.
        </p>

        {/* TEAM MEMBERS */}
        <div className="space-y-4">

          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-semibold">Akanksha (Team Lead / Fronted)</p>
            <p className="text-sm text-gray-300">
              Project architecture and frontend 
            </p>
          </div>

          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-semibold">Aishvary</p>
            <p className="text-sm text-gray-300">
             Backend And Fronted and Backend Integration
            </p>
          </div>

          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-semibold">Manavi Singh</p>
            <p className="text-sm text-gray-300">
              Documentation & Testing
            </p>
          </div>

        </div>

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate("/")}
          className="w-full mt-8 py-3
          bg-[#e6c27a] hover:bg-[#f1d18a]
          text-black font-semibold rounded-lg transition"
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default About;
