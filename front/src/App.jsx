import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import useTitle from "./hook/useTitle";
import "./App.css";
import Form from "./components/Form";
import AdminPanel from "./components/AdminPanel";
import MainSaidbar from "./components/MainSaidbar";
import HeaderSaidbar from "./components/HeaderSaidbar";
import Saidbar from "./components/Saidbar";
import Detailse from "./components/Detailse";
import Detailsse2 from "./components/Detailsse2";

import { useNavigate } from "react-router-dom";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isDefaultPage = location.pathname === "/";
  const isDetailsePage = location.pathname === "/sinajabbari/detailse";
  const isDetailsse2Page = location.pathname === "/sinajabbari/detailse2";

  useEffect(() => {
    useTitle("سیستم جامع دانشگاهی گلستان");
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex flex-col h-screen">
      {isDefaultPage && <Form />}
      {!isDefaultPage && !isDetailsePage && !isDetailsse2Page && (
        <>
          <HeaderSaidbar />
          <div className="flex flex-1">
            <Saidbar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/sinajabbari" element={<AdminPanel />}>
                  <Route index element={<MainSaidbar />} />
                  {/* <Route path="authenticateuser" element={<Detailsse2 />} /> */}
                </Route>
              </Routes>
            </main>
          </div>
        </>
      )}
      {isDetailsePage && (
        <header className="p-4">
          <Detailse />
        </header>
      )}
      {isDetailsse2Page && (
        <header className="p-4">
          <Detailsse2 />
        </header>
      )}
    </div>
  );
}

export default App;
