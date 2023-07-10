import React, { useContext } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/authProvider";

const Main = () => {
  const { navbarToggle, setNavbarToggle } = useContext(AuthContext);
  return (
    <div className="d-flex position-relative">
      {navbarToggle && (
        <div
          className="d-lg-none mobileNavbar "
          style={{ width: "292px" }}
        >
          <Sidebar />
        </div>
      )}
       <div
          className="d-none d-lg-block "
          style={{ width: "292px" }}
        >
          <Sidebar />
        </div>

      <div className="outlet w-100 ">
        <div className="d-flex justify-content-end">
          <button
            className="border-0 bg-transparent d-block d-lg-none"
            onClick={() => setNavbarToggle(!navbarToggle)}
          >
            {navbarToggle ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-ellipsis-vertical"></i>
            )}
          </button>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default Main;
