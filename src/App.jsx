import React, { useEffect } from "react";

import useTitle from "./hook/useTitle";

import "./App.css";
import Form from "./components/Form";
import { Route, Routes } from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

function App() {
  useEffect(() => useTitle("سیستم جامع دانشگاهی گلستان"), []);

  return (
    <>
      <Routes>
        <Route path="/golestan.iust.ac.ir" element={<Form />} />
        <Route path="/sinajabbari" element={<AdminPanel />} />
      </Routes>
    </>
  );
}

export default App;
