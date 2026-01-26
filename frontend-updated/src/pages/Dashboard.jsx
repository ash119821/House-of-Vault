import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">

      {/* MAIN WRAPPER */}
      <div className="w-full max-w-6xl flex gap-10 px-10">

        {/* ================= LEFT CARD ================= */}
        <div className="w-1/2 bg-white/10 backdrop-blur-md
        rounded-2xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            👨‍👩‍👧‍👦 Family Members
          </h2>

          <div className="space-y-4">

            {/* Member */}
            <div className="flex justify-between items-center
            bg-white/20 p-4 rounded-xl">
              <div>
                <p className="font-medium">Rahul Sharma</p>
                <p className="text-sm text-gray-300">Blood Group: O+</p>
              </div>
              <p>📞 9876543210</p>
            </div>

            <div className="flex justify-between items-center
            bg-white/20 p-4 rounded-xl">
              <div>
                <p className="font-medium">Anita Sharma</p>
                <p className="text-sm text-gray-300">Blood Group: A+</p>
              </div>
              <p>📞 9123456780</p>
            </div>

            <div className="flex justify-between items-center
            bg-white/20 p-4 rounded-xl">
              <div>
                <p className="font-medium">Rohan Sharma</p>
                <p className="text-sm text-gray-300">Blood Group: B+</p>
              </div>
              <p>📞 9988776655</p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="w-1/2 bg-white/10 backdrop-blur-md
        rounded-2xl p-6 shadow-2xl">

          <h2 className="text-xl font-semibold mb-6 text-center">
            Family Dashboard
          </h2>

          <div className="flex flex-col gap-4">

            <DashboardButton
              icon="📁"
              label="Documents"
              onClick={() => navigate("/documents")}
            />

            <DashboardButton
              icon="🩺"
              label="Medical"
              onClick={() => navigate("/medical")}
            />

            <DashboardButton
              icon="📞"
              label="Emergency"
              onClick={() => navigate("/emergency")}
            />

            <DashboardButton
              icon="👨‍👩‍👧"
              label="Members"
              onClick={() => navigate("/members")}
            />

            <DashboardButton
              icon="✈️"
              label="Travelling"
              onClick={() => navigate("/travelling")}
            />

            <DashboardButton
            icon="📝"
            label="Notes"
            onClick={() => navigate("/notes")}
            />


          </div>
        </div>

      </div>
    </div>
  );
}

/* ================= BUTTON COMPONENT ================= */
function DashboardButton({ icon, label, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white/20 p-5 rounded-xl
      text-center cursor-pointer
      hover:bg-white/30 transition
      flex items-center justify-center gap-2"
    >
      <span>{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  );
}

export default Dashboard;
