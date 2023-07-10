import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="d-flex">
      <div className="d-none d-lg-block" style={{ width: "292px" }}>
        <Sidebar />
      </div>
      <div className="outlet w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
