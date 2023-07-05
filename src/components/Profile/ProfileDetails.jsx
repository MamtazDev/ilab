import React from "react";
import notificationOn from "../../assets/icon/notification-on.png";
import facebook from "../../assets/icon/facebook.png";
import instagram from "../../assets/icon/instagram.png";
import google from "../../assets/icon/google.png";
import twitter from "../../assets/icon/twitter.png";
import linkedin from "../../assets/icon/linkedin.png";
import service from "../../assets/icon/service.png";
import profileSm from "../../assets/images/profile-sm.png";
import profile from "../../assets/images/profile.png";
import { Link } from "react-router-dom";

const ProfileDetails = () => {
  return (
    <div className="profileDetails">
      <div
        style={{
          paddingBottom: "17px",
          borderBottom: "1px solid  rgba(0, 0, 0, 0.20)",
          marginBottom: "35px",
        }}
        className="d-flex gap-4 align-items-center"
      >
        <img src={notificationOn} alt="" />
        <div className="d-flex align-items-center gap-3">
          <img src={profileSm} alt="" />
          <div>
            <h6 className="welcome">Welcome</h6>
            <p className="name_blur">Jacob Cortnel</p>
          </div>
        </div>
      </div>
      <img
        style={{ marginBottom: "17px" }}
        className="img-fluid w-100"
        src={profile}
        alt=""
      />
      <p className="name">Jacob Cortnel</p>
      <div className="social_icon d-flex justify-content-between">
        <Link to="">
          <img src={facebook} alt="" />
        </Link>
        <Link to="">
          <img src={instagram} alt="" />
        </Link>
        <Link to="">
          <img src={google} alt="" />
        </Link>
        <Link to="">
          <img src={twitter} alt="" />
        </Link>
        <Link to="">
          <img src={linkedin} alt="" />
        </Link>
      </div>

      <div className="service">
        <img src={service} alt="" />
        <div>
          <h6>Our service team is available </h6>
          <p>Monday to Friday from 9.00 to 19.00</p>
        </div>
      </div>
      <div className="inquiry">
        <p>Place online inquiry use Email form</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
