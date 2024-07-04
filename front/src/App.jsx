import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import useTitle from "./hook/useTitle";
import "./App.css";
import Form from "./components/Form";
import AdminPanel from "./components/AdminPanel";
import MainSaidbar from "./components/MainSaidbar";
import HeaderSaidbar from "./components/HeaderSaidbar";
import Saidbar from "./components/Saidbar";
import Detailse from "./components/Detailse";
import Detailsse2 from "./components/Detailsse2";
import ProtectedRoute from "./components/ProductRoute";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    useTitle("سیستم جامع دانشگاهی گلستان");
    const token = localStorage.getItem("token");
    if (location.pathname === "/" && token) {
      navigate("/sinajabbari");
    }
  }, [location, navigate]);

  return (
    <div className="flex flex-col h-screen">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/sinajabbari/*"
          element={
            <ProtectedRoute
              element={() => (
                <>
                  <HeaderSaidbar />
                  <div className="flex flex-1">
                    <Saidbar />
                    <main className="flex-1 p-4">
                      <Routes>
                        <Route path="/" element={<MainSaidbar />} />
                        <Route path="admin" element={<AdminPanel />} />
                        <Route path="detailse" element={<Detailse />} />
                        <Route path="detailse2" element={<Detailsse2 />} />
                      </Routes>
                    </main>
                  </div>
                </>
              )}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
