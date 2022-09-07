import React from "react";
import "./App.scss";
import AppRoutes from "./routes";
import Navbar from "../app/components/shared/Navbar";
import Sidebar from "../app/components/shared/Sidebar";
import Footer from "../app/components/shared/Footer";

function App() {
  let navbarComponent = <Navbar />;
  let sidebarComponent = <Sidebar />;
  let footerComponent = <Footer />;
  return (
    <div className="container-scroller">
      {/* {sidebarComponent} */}
      <div className="container-fluid page-body-wrapper">
        {/* {navbarComponent} */}
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes />
          </div>
          {footerComponent}+
        </div>
      </div>
    </div>
  );
}

export default App;
