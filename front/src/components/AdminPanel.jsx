import React from "react";
import { Outlet } from "react-router-dom";

function AdminPanel() {
  return (
    <div className="flex-1 p-4">
      <Outlet />
    </div>
  );
}

export default AdminPanel;
