import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("clientIP")) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
