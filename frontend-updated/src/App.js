import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Medical from "./pages/Medical";
import Emergency from "./pages/Emergency";
import Members from "./pages/Members";
import Landing from "./pages/Landing";
import Family from "./pages/Family";
import Note from "./pages/Note";
import Travelling from "./pages/Travelling";
import Header from "./components/Header";
import About from "./pages/About";






function App() {
  return (

     <div className="min-h-screen w-full
      bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white">

        {/* ꜰᴀᴍᴠᴀᴜʟᴛ */}
        <Header />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
 
         <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/family" element={<Family />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/members" element={<Members />} />
        <Route path="/notes" element={<Note />} />
        <Route path="/travelling" element={<Travelling />} />
        <Route path="/about" element={<About />} />




      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;



