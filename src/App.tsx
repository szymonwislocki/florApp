import { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { DataContext } from "./providers/DataProvider";

function App() {
  const navigate = useNavigate();
  const { fetchData } = useContext(DataContext);
  useEffect(() => {
    if (localStorage.getItem("clientIP")) {
      navigate("/home");
      fetchData();
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
