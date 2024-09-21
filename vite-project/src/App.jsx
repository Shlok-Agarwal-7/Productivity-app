import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/DashBoard";
import Register from "./pages/Register";
import Calender from "./pages/Calender";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/login" element={<Login/>} /> 
      </Routes>
    </Router>
   
  );
}

export default App;
