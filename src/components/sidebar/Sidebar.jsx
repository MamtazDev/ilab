import React from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/icon/profile.png";
import profileDeactive from "../../assets/icon/profile-deactive.png";
import lense from "../../assets/icon/lense.png";
import lenseActive from "../../assets/icon/lense-active.png";
import orders from "../../assets/icon//orders.png";
import ordersActive from "../../assets/icon/order-active.png";
import receipt from "../../assets/icon/receipt.png";
import receiptActive from "../../assets/icon/receipt-active.png";
import status from "../../assets/icon/status.png";
import statusActive from "../../assets/icon/status-active.png";
import settings from "../../assets/icon/settings.png";
import settingsActive from "../../assets/icon/settings-active.png";
import logout from "../../assets/icon/logout.png";
import support from "../../assets/icon/support.png";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="sidebar w-100">
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
              {pathname === "/" ? (
                <img src={profile} alt="" />
              ) : (
                <img src={profileDeactive} alt="" />
              )}
              My Profile
            </NavLink>
          </li>

          <li>
            {" "}
            <NavLink
              to="/lens-ordering"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              {pathname === "/lens-ordering" ? (
                <img src={lenseActive} alt="" />
              ) : (
                <img src={lense} alt="" />
              )}
              Lens Ordering
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/my-order"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              {pathname === "/my-order" ? (
                <img src={ordersActive} alt="" />
              ) : (
                <img src={orders} alt="" />
              )}
              My Orders
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/receipt"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              {pathname === "/receipt" ? (
                <img src={receiptActive} alt="" />
              ) : (
                <img src={receipt} alt="" />
              )}
              Receipts
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/status"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              {pathname === "/status" ? (
                <img src={statusActive} alt="" />
              ) : (
                <img src={status} alt="" />
              )}
              Status
            </NavLink>
          </li>
          <li>
            {" "}
            <NavLink
              to="/settings"
              className={({ isActive }) => (isActive ? "activeRoute" : "")}
            >
              {pathname === "/settings" ? (
                <img src={settingsActive} alt="" />
              ) : (
                <img src={settings} alt="" />
              )}
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
