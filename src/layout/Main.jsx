import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="d-flex">
      <div style={{width:"292px"}}>
        <Sidebar />
      </div>
      <div className="w-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
