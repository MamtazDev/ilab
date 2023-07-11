import React from "react";
import "../components/Profile/Profile.css";
import search from "../assets/icon/search.png";
import Title from "../components/utils/Title";
import IncomingOrder from "../components/Profile/IncomingOrder";
import CompletedOrder from "../components/Profile/CompletedOrder";
import DelayedOrder from "../components/Profile/DelayedOrder";
import DeliveredOrder from "../components/Profile/DeliveredOrder";
import ProfileDetails from "../components/Profile/ProfileDetails";

const Profile = () => {
  return (
    <div style={{ height: "100vh", overflowY: "scroll" }}>
      <div className="row">
        <div
          style={{ backgroundColor: "#F5F5F5" }}
          className="col-12 col-xl-8 p-4"
        >
          <div className="cart">
            <div
              style={{ marginBottom: "26px" }}
              className="search d-flex gap-2 align-items-center"
            >
              <img src={search} alt="" />
              <input
                className="border-0 w-100"
                type="search"
                placeholder="Search here"
              />
            </div>
            <Title>Cart</Title>

            <div style={{ marginBottom: "30px" }} className="row g-5">
              <div className="col-12 col-xl-5">
                <IncomingOrder />
              </div>
              <div className="col-12 col-xl-7">
                <CompletedOrder />
              </div>
            </div>

            <Title>Sent Orders</Title>

            <div className="row g-5">
              <div className="col-12 col-xl-7">
                <DelayedOrder />
              </div>
              <div className="col-12 col-xl-5 mb-5 mb-lg-0">
                <DeliveredOrder />
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4 bg-white">
          <ProfileDetails />
        </div>
      </div>
    </div>
  );
};

export default Profile;
