import Header from "../components/Header";

function Note() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white px-6">

      <div className="w-full max-w-3xl
      bg-white/10 backdrop-blur-md
      rounded-2xl p-8 shadow-2xl">

        <h1 className="text-2xl font-semibold mb-6 text-center">
          📝 Family Notes
        </h1>

        <div className="space-y-4">

          {/* NOTE 1 */}
          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-medium">Rahul Sharma</p>
            <p className="text-sm text-gray-300 mb-1">Father</p>
            <p className="text-sm">
              Passport is kept in the bedroom locker. 
              Medical insurance renewal is due next month.
            </p>
          </div>

          {/* NOTE 2 */}
          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-medium">Anita Sharma</p>
            <p className="text-sm text-gray-300 mb-1">Mother</p>
            <p className="text-sm">
              Electricity bill is paid. 
              Keep emergency cash in kitchen drawer.
            </p>
          </div>

          {/* NOTE 3 */}
          <div className="bg-white/20 p-4 rounded-xl">
            <p className="font-medium">Rohan Sharma</p>
            <p className="text-sm text-gray-300 mb-1">Son</p>
            <p className="text-sm">
              School ID card uploaded in Documents section.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Note;
