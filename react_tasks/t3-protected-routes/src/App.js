import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element=
        {<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
