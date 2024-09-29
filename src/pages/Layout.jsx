import React from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="p-0 flex" style={{ minHeight: "100vh" }}>
        <div className="">
          <div
            className="flex fixed z-10"
          >
            <Sidebar />
            

          <Navbar />
          </div>
        </div>
        <div className="flex-1">
          <main
            className="min-h-screen relative pt-20 sm:pt-5"
          >
            <div className="pl-2 pr-1 sm:pl-72 sm:pr-8">{children}</div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
