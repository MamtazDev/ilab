import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/icon/profile.png";
import lense from "../../assets/icon/lense.png";
import orders from "../../assets/icon//orders.png";
import receipt from "../../assets/icon/receipt.png";
import status from "../../assets/icon/status.png";
import settings from "../../assets/icon/settings.png";
import logout from "../../assets/icon/logout.png";
import support from "../../assets/icon/support.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <p></p>
      <div
        style={{ height: "85%" }}
        className="d-flex flex-column justify-content-between"
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={profile} alt="" />
              My Profile
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="/lens-ordering"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={lense} alt="" />
              Lens Ordering
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/nm"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={orders} alt="" />
              My Orders
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/hjhj"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={receipt} alt="" />
              Receipts
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/status"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={status} alt="" />
              Status
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={settings} alt="" />
              Settings
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            {" "}
            <NavLink
              to="/hjh"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={logout} alt="" />
              Logout
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/ghgh"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              <img src={support} alt="" />
              Support
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
