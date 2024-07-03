import React from "react";

import HeaderSaidbar from "../components/HeaderSaidbar";
import Saidbar from "../components/Saidbar";
import MainSaidbar from "../components/MainSaidbar";

function AdminPanel() {
  return (
    <div className="flex flex-col h-screen">
      <HeaderSaidbar />
      <div className="flex flex-1">
        <Saidbar />
        <main className="flex-1 p-4">
          <MainSaidbar />
        </main>
      </div>
    </div>
  );
}

export default AdminPanel;
