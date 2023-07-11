import React from "react";
import profileSm from "../../assets/images/profile-sm.png";
import notificationOn from "../../assets/icon/notification-on.png";
import search from "../../assets/icon/search.png";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const Header = () => {
  const navigate = useNavigate();
  const goProfile = () => {
    navigate("/");
  };
  return (
    <div
      style={{ marginBottom: "25px" }}
      className="d-flex flex-wrap gap-4 justify-content-between align-items-center"
    >
      <div className="search d-flex gap-2 align-items-center">
        <img src={search} alt="" />
        <input
          className="border-0 w-100"
          type="search"
          placeholder="Search here"
        />
      </div>
      <div
        style={{
          paddingBottom: "17px",
          borderBottom: "1px solid  rgba(0, 0, 0, 0.20)",
        }}
        className="d-flex gap-4 align-items-center"
      >
        <Dropdown>
          <Dropdown.Toggle
            className="bg-transparent border-0"
            id="dropdown-basic"
          >
            <img src={notificationOn} alt="" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <div
          style={{ cursor: "pointer" }}
          onClick={goProfile}
          className="d-flex align-items-center gap-3"
        >
          <img src={profileSm} alt="" />
          <div>
            <h6 className="welcome">Welcome</h6>
            <p className="name_blur">Jacob Cortnel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
