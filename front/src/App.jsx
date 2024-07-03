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

function App() {
  const location = useLocation();

  // Check if we are on the default page ("/")
  const isDefaultPage = location.pathname === "/";

  // Check if we are on the detailse page ("/sinajabbari/detailse")
  const isDetailsePage = location.pathname === "/sinajabbari/detailse";

  useEffect(() => {
    useTitle("سیستم جامع دانشگاهی گلستان");
  }, []);

  return (
    <div className="flex flex-col h-screen">
      {isDefaultPage && <Form />}
      {!isDefaultPage && !isDetailsePage && (
        <>
          <HeaderSaidbar />
          <div className="flex flex-1">
            <Saidbar />
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/sinajabbari" element={<AdminPanel />}>
                  <Route index element={<MainSaidbar />} />
                  {/* <Route path="detailse" element={<Detailse />} /> */}
                </Route>
              </Routes>
            </main>
          </div>
        </>
      )}
      {isDetailsePage && (
        <header className="p-4 ">
          {/* اینجا محتوای header خاص برای صفحه detailse قرار می‌دهید */}
          <Detailse />
        </header>
      )}
    </div>
  );
}

export default App;
