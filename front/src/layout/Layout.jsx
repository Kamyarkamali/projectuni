import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import { useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  const main = location.pathname === "/";

  return (
    <div>
      <headr>
        <Header />
      </headr>

      <main className={`${main ? "h-[490px]" : "max-h-fit"} overflow-hidden`}>
        {children}
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
