import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Medical from "./pages/Medical";
import Emergency from "./pages/Emergency";
import Members from "./pages/Members";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
